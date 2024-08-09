// const XLSX = require('xlsx');

async function jsonToExcel(headers, fileName) {
	try {
		// Import the XLSX module
		const XLSX = await import(
			'https://cdn.sheetjs.com/xlsx-0.19.2/package/xlsx.mjs'
		);
		
		// Create a new workbook and an empty worksheet
		const workbook = XLSX.utils.book_new();
		const worksheet = XLSX.utils.aoa_to_sheet([headers]);

		// Set custom column width
		// const wscols = [{ wpx: 100 }, { wpx: 200 }, { wpx: 100 }];
		// worksheet['!cols'] = wscols;

		// Append the worksheet to the workbook
		XLSX.utils.book_append_sheet(workbook, worksheet, 'Employee-Master');

		let wscols = [];
		headers.map((arr) => {
			wscols.push({ wch: arr.length + 5 });
		});
		worksheet['!cols'] = wscols;

		// Write the workbook to a file
		XLSX.writeFile(workbook, fileName);

		console.log(`File generated: ${fileName}`);
	} catch (error) {
		console.error('Error generating Excel file:', error);
	}
}

module.exports = {
	jsonToExcel,
};
