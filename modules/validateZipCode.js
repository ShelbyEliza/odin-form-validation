function validateCountry(countryInput) {
	if (!countryInput.value) {
		countryInput.setCustomValidity('Please select a country.');
		countryInput.classList.add('err');
		console.log(countryInput.value, 'Country Error');
		return false;
	} else {
		countryInput.classList.remove('err');
		countryInput.setCustomValidity('');
	}
	console.log(countryInput.value, 'No Country Error');
	return true;
}

function validateZip(countryInput, zipCodeInput) {
	if (validateCountry(countryInput)) {
		const rules = {
			us: [
				/^[0-9]{5}(?:-[0-9]{4})?$/,
				'United States ZIPs must have exactly 5 digits with an optional 4 digits following: e.g. US-19501 or 19501 or US-19501-4089 or 19501-4089',
			],
			fr: [
				/^(F-)?\d{5}$/,
				'France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012',
			],
			de: [
				/^(D-)?\d{5}$/,
				'Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345',
			],
			nl: [
				/^(NL-)?\d{4}\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$/,
				'Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS',
			],
		};
		let regexp = rules[countryInput.value][0];

		if (regexp.test(zipCodeInput.value.toUpperCase()) === true) {
			zipCodeInput.setCustomValidity('');
			zipCodeInput.classList.remove('err');
			console.log('VALID ZIP');
		} else {
			zipCodeInput.setCustomValidity(rules[countryInput.value][1]);
			zipCodeInput.classList.add('err');
			console.log('INVALID ZIP');
		}
	}
}

export { validateCountry, validateZip };
