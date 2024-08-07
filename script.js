// Run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
	const fileInput = document.getElementById('file-input');
	const outputDiv = document.getElementById('output');

	if (fileInput) {
		fileInput.addEventListener('change', (event) => {
			const file = event.target.files[0];
			if (file) {
				excelToJson(file)
					.then((json) => {
						// Beautify and display the JSON
						outputDiv.textContent = JSON.stringify(json, null, 2); // Beautify JSON with 2 spaces for indentation
					})
					.catch((error) => {
						outputDiv.textContent = `Error reading Excel file: ${error}`;
					});
			}
		});
	} else {
		console.error('File input element not found');
	}
});
