// const { jsonToExcel } = require('./jsonToExcel');
const exportExcel = document.getElementById("exportExcel");
// const { employeeHeader } = require('../constants');

const alertMsg =
	'Invalid JSON Input,\nTry the following -\n1) Remove any Trailing comma,\n2) Close the end of Array';

exportExcel.addEventListener("click", async() => {
	try {
		JSON.parse(inputData);
	} catch (e) {
		alert(alertMsg);
		return;
	}
	alert('Exporting to excel...');
	jsonToExcel(JSON.parse(inputData), 'employee.xlsx');
});

document.getElementsByTagName('textarea')[0].defaultValue = JSON.stringify(employeeHeader, null, 2);

let inputData = employeeHeader;
window.onkeyup = inputHandler;

function inputHandler(event) {
	inputData = event.target.value;
}

autosize(document.getElementById('output'));