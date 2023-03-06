const fs = require('fs');

const inputFile = process.argv[2];
const outputFile = process.argv[3];

// Read data from the input file
const inputData = fs.readFileSync(inputFile, 'utf8');

// Process the data (e.g., using JavaScript)
const processedData = inputData.toUpperCase();

// Write the processed data to the output file
fs.writeFileSync(outputFile, processedData, 'utf8');
