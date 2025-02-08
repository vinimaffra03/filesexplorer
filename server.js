const fs = require("fs");
const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());

// Path to directory
const DIRECTORY = path.join(__dirname, "files");

app.get("/files", (req, res) => {
    fs.readdir(DIRECTORY, (err, files) => {
        if (err) {
            console.error("Error reading directory:", err);
            return res.status(500).json({ error: "Unable to scan directory" });
        }
        res.json({ files });
    });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
