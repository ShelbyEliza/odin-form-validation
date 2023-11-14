const usPattern = '(^d{5}$)|(^d{5}(-d{4})?$)';

export default function validateZipCode(countryInput, zipCodeInput) {
	/** validate */
	// function checkCountry() {
	// 	if (!countryInput.validity.valid) {
	// 		showError(countryInput);
	// 	}
	// }
	// function checkZip() {
	// 	if (!zipCodeInput.validity.valid) {
	// 		showError(zipCodeInput);
	// 	}
	// }
	if (!countryInput.value) {
		countryInput.setCustomValidity('Please select a country.');
		countryInput.classList.add('err');
	} else {
		countryInput.classList.remove('err');
		countryInput.setCustomValidity('');

		// For each country, defines the pattern that the ZIP has to follow
		const constraints = {
			us: [
				// '^d{5}(-d{4})?$',
				// '^d{5}$|^d{5}-d{4}?$',
				// '^d{5}$|^d{5}-d{4}?$',
				// '^d{5}$',
				'(^d{5})',
				'United States ZIPs must have exactly 5 digits with an optional 4 digits following: e.g. US-19501 or 19501 or US-19501-4089 or 19501-4089',
			],
			fr: [
				'^(F-)?\\d{5}$',
				'France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012',
			],
			de: [
				'^(D-)?\\d{5}$',
				'Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345',
			],
			nl: [
				'^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$',
				'Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS',
			],
		};

		// Build the constraint checker
		let constraint = new RegExp(constraints[countryInput.value][0], 'g');
		console.log(zipCodeInput.value, constraint);

		// Check it!
		console.log(constraint.test(zipCodeInput.value));
		if (constraint.test(zipCodeInput.value)) {
			// The ZIP follows the constraint, we use the ConstraintAPI to tell it
			zipCodeInput.setCustomValidity('');
			console.log('valid zip');
		} else {
			// The ZIP doesn't follow the constraint, we use the ConstraintAPI to
			// give a message about the format required for this country
			zipCodeInput.setCustomValidity(constraints[countryInput.value][1]);
			console.log('INvalid zip');
		}
	}
}
