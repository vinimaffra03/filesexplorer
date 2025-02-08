import React, { useState, useEffect } from "react";
import axios from "axios";
import './App'

function App() {
    const [files, setFiles] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/files")
            .then(response => {
                console.log("Files fetched:", response.data); // Debugging
                setFiles(response.data.files);
            })
            .catch(error => {
                console.error("Error fetching files:", error);
                setError("Failed to load files. Make sure the server is running.");
            });
    }, []);

    return (
        <div className="content">
            <h1 className="text">Local File Explorer</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <ul>
                {files.length > 0 ? (
                    files.map((file, index) => (
                        <li className="list">
                            <a 
                                href={`http://localhost:5000/file/${file}`} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                            >
                                {file}
                            </a>
                        </li>
                    ))
                ) : (
                    <p>No files found.</p>
                )}
            </ul>
        </div>
    );
}

export default App;
