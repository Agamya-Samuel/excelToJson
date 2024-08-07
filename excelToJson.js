/**
 * Function to read an Excel file and return a JSON object with sheet names and content.
 * 
 * @param {File} file - The Excel file to be read.
 * @returns {Promise<Object>} - A promise that resolves to a JSON object containing sheet names and content.
 * @throws {Error} - If there is an error while reading the Excel file.
 */
function excelToJson(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();

		reader.onload = (event) => {
			try {
				// Parse the Excel file
				const workbook = XLSX.read(event.target.result, {
					type: 'binary',
				});

				// Create a JSON object to store sheet names and content
				const result = {};

				// Iterate through each sheet in the workbook
				workbook.SheetNames.forEach((sheetName) => {
					// Get the sheet
					const sheet = workbook.Sheets[sheetName];

					// Convert the sheet to JSON
					const json = XLSX.utils.sheet_to_json(sheet);

					// Add to result object
					result[sheetName] = json;
				});

				resolve(result);
			} catch (error) {
				reject(error);
			}
		};

		reader.onerror = (error) => {
			reject(error);
		};

		reader.readAsArrayBuffer(file);
	});
}