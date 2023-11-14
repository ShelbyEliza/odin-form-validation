const formEl = document.querySelector('form');
const submitBtn = document.querySelector('button');
const emailInput = document.getElementById('email');
const countryInput = document.getElementById('country');
const zipCodeInput = document.getElementById('zip-code');
const passwordInput = document.getElementById('password');
const confirmInput = document.getElementById('confirm-password');

// const inputEls = document.querySelectorAll('input, select');
// console.log(inputEls);

let errorMsg = {
email: '',
country: '',
zipCode: '',
password: '',
confirmPassword: '',
};

formEl.addEventListener('submit', (e) => {
if (!formEl.checkValidity()) {
e.preventDefault();

    	validateInputs(inputEls);
    } else {
    	e.preventDefault();
    	handleSubmit();
    }

});

function validateInputs(inputs) {
inputs.forEach((input) => {
if (!input.validity.valid) {
showError(input);
}
});
}

function checkEmail() {
if (!emailInput.validity.valid) {
showError(emailInput);
}
}
function checkCountry() {
if (!countryInput.validity.valid) {
showError(countryInput);
}
}

function checkZip() {
if (!zipCodeInput.validity.valid) {
showError(zipCodeInput);
}
}

function handleSubmit() {}

function showError(input, inputError) {
// if (input.validity.valueMissing) {
// inputError.textContent = 'You need to enter a value.';
// } else if (input !== pages && input.validity.tooShort) {
// inputError.textContent = `${input.id} should be at least ${input.minLength} characters; you entered ${input.value.length}.`;
// }
// inputError.className = 'error active';
}

///////////////////
const usPattern = '(^d{5}$)|(^d{5}(-d{4})?$)';

export default function validateZipCode(countryInput, zipCodeInput) {
if (!countryInput.value) {
countryInput.setCustomValidity('Please select a country.');
countryInput.classList.add('err');
} else {
countryInput.classList.remove('err');
countryInput.setCustomValidity('');

    	// For each country, defines the pattern that the ZIP has to follow
    	const constraints = {
    		test: [
    			'^(F-)?\\d{5}$',
    			'Test ZIPs must have exactly 5 digits: e.g. F-75012 or 75012',
    		],
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
