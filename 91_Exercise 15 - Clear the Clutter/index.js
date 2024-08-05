// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. harry.pdf

// this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip

const fs = require('fs');
const path = require('path');

// Path to the directory you want to organize
const directoryPath = 'F:\\webDevelopment\\91_Exercise 15 - Clear the Clutter\\New folder';

// Function to organize files
function organizeFiles(dirPath) {
    // Read all files in the directory
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            console.error('Could not list the directory.', err);
            return;
        }

        files.forEach((file) => {
            // Get the file extension
            const ext = path.extname(file).slice(1);

            if (!ext) return; // Skip files without an extension

            // Create a new directory path for the file based on its extension
            const newDir = path.join(dirPath, ext);
            
            // Create the directory if it doesn't exist
            if (!fs.existsSync(newDir)) {
                fs.mkdirSync(newDir);
            }

            // Get the full paths for the old and new locations
            const oldPath = path.join(dirPath, file);
            const newPath = path.join(newDir, file);

            // Move the file to the new directory
            fs.rename(oldPath, newPath, (err) => {
                if (err) {
                    console.error(`Could not move file: ${file}`, err);
                } else {
                    console.log(`Moved file: ${file} to ${newDir}`);
                }
            });
        });
    });
}

// Call the function
organizeFiles(directoryPath);
