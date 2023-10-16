import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { auth, firestore } from './firebase';
import { Connection, PublicKey, Transaction, sendAndConfirmTransaction } from '@solana/web3.js';

const solanaNetworkUrl = 'https://api.devnet.solana.com'; // Use the Solana network URL
const connection = new Connection(solanaNetworkUrl, 'singleGossip');

const Dashboard = () => {
    const [artworks, setArtworks] = useState([]);
    const user = auth.currentUser;

    useEffect(() => {
        if (user) {
            const unsubscribe = firestore
                .collection('artworks')
                .where('createdBy', '==', user.uid)
                .onSnapshot((snapshot) => {
                    const userArtworks = [];
                    snapshot.forEach((doc) => {
                        userArtworks.push({ id: doc.id, ...doc.data() });
                    });
                    setArtworks(userArtworks);
                });

            return () => {
                unsubscribe();
            };
        }
    }, [user]);

    const certifyArtwork = async (artworkId) => {
        try {
            // Get a reference to the artwork document in Firestore
            const artworkRef = firestore.collection('artworks').doc(artworkId);

            // Create a Solana wallet and sign transaction
            const wallet = new Wallet({
                connection,
                payer: new Account(), // Payer account
                //...otherWalletOptions, // Additional wallet options
            });

            // Create a transaction that certifies the artwork on Solana
            const certifyInstruction = new TransactionInstruction({
                keys: [{ pubkey: new PublicKey(artworkId), isSigner: false, isWritable: true }],
                programId: new PublicKey('Solana Program ID'), // Solana program ID
                data: Buffer.from([1]), // Customize the instruction data as needed
            });

            // Sign and send the transaction
            const signature = await sendAndConfirmTransaction(connection, new Transaction().add(certifyInstruction), [wallet]);

            // Wait for confirmation
            await connection.confirmTransaction(signature);

            // Update the artwork's certification status in Firebase Firestore
            await artworkRef.update({ certified: true });

            // Optional: Update the local state to reflect the change immediately
            setArtworks((prevArtworks) =>
                prevArtworks.map((artwork) =>
                    artwork.id === artworkId ? { ...artwork, certified: true } : artwork
                )
            );

            console.log('Artwork certified successfully on Solana and Firestore updated!');
        } catch (error) {
            console.error('Error certifying artwork:', error);
        }
    };

    return (
        <>
            <Header loggedIn={true} userName={auth.currentUser?.displayName || ''} onLogout={() => auth.signOut()} pageStyles="" />

            <div className="container mt-5">
                <h2>Your Artworks</h2>
                <div className="row">
                    {artworks.map((artwork) => (
                        <div className="col-md-4" key={artwork.id}>
                            <div className="card mb-4">
                                <img src={artwork.downloadURL} className="card-img-top" alt={artwork.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{artwork.title}</h5>
                                    <p className="card-text">
                                        {artwork.certified ? (
                                            <span className="badge badge-success">Certified</span>
                                        ) : (
                                            <span className="badge badge-secondary">Not Certified</span>
                                        )}
                                    </p>
                                    {!artwork.certified && (
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => certifyArtwork(artwork.id)}
                                        >
                                            Certify
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer pageScripts={[]} />
        </>
    );
};

export default Dashboard;
