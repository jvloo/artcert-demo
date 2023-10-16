import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useHistory } from 'react-router-dom';
import { auth, storage, firestore } from '../firebase'; // Import Firebase services

const Upload = () => {
    const [title, setTitle] = useState('');
    const [file, setFile] = useState(null);
    const [certified, setCertified] = useState(false);
    const history = useHistory();

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        } else {
            setFile(null);
        }
    };

    const handleUpload = async () => {
        if (!title || !file) {
            alert('Please provide a title and select an artwork file.');
            return;
        }

        const user = auth.currentUser;

        if (!user) {
            alert('You must be logged in to upload artwork.');
            return;
        }

        const storageRef = storage.ref();
        const fileRef = storageRef.child(`artwork/${user.uid}/${file.name}`);

        try {
            await fileRef.put(file);
            const downloadURL = await fileRef.getDownloadURL();

            // Save artwork details and download URL to Firestore
            await firestore.collection('artworks').add({
                title,
                certified,
                downloadURL,
                createdBy: user.uid,
                createdAt: new Date(),
            });

            alert('Artwork uploaded successfully.');
            history.push('/dashboard');
        } catch (error) {
            console.error('Error uploading artwork:', error);
            alert('An error occurred while uploading artwork. Please try again.');
        }
    };

    return (
        <>
            <Header loggedIn={true} userName={auth.currentUser?.displayName || ''} onLogout={() => auth.signOut()} pageStyles="" />

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h2 className="mb-4">Upload Artwork</h2>
                        <div className="form-group">
                            <label htmlFor="title">Artwork Title</label>
                            <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="file">Select Artwork File</label>
                            <input type="file" className="form-control-file" id="file" onChange={handleFileChange} required />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="certified" checked={certified} onChange={() => setCertified(!certified)} />
                            <label className="form-check-label" htmlFor="certified">Certified Artwork</label>
                        </div>
                        <button className="btn btn-primary" onClick={handleUpload}>Upload Artwork</button>
                    </div>
                </div>
            </div>

            <Footer pageScripts={[]} />
        </>
    );
};

export default Upload;
