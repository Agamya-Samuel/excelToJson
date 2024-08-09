// const { jsonToExcel } = require('./jsonToExcel');
const exportExcel = document.getElementById("exportExcel");
// const { employeeHeader } = require('../constants');

document.getElementsByTagName('textarea')[0].defaultValue = JSON.stringify(employeeHeader, null, 2);

let inputData = employeeHeader;
let hasUserInput = false;
window.onkeyup = inputHandler;

function inputHandler(event) {
	inputData = event.target.value;
	hasUserInput = true;
}

const alertMsg =
	'Invalid JSON Input,\nTry the following -\n1) Remove any Trailing comma,\n2) Close the end of Array';

exportExcel.addEventListener("click", async() => {
	try {
		if (hasUserInput) {
			JSON.parse(inputData);
		}
		JSON.parse(JSON.stringify(inputData));
	} catch (e) {
		if (e instanceof SyntaxError) {
			alert(alertMsg);
			return;
		}
	}
	alert('Exporting to excel...');
	if (hasUserInput) {
		jsonToExcel(JSON.parse(inputData), 'employee.xlsx');
		return;
	}
	jsonToExcel(JSON.parse(JSON.stringify(inputData)), 'employee.xlsx');
});


autosize(document.getElementById('output'));