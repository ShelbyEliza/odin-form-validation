import validateEmail from './modules/validateEmail.js';
import {
	validatePassword,
	confirmPassword,
} from './modules/validatePassword.js';
import { validateCountry, validateZip } from './modules/validateZipCode.js';

const formEl = document.querySelector('form');
const countryInput = document.getElementById('country');
const zipCodeInput = document.getElementById('zip-code');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmInput = document.getElementById('confirm-password');

function handleSubmit() {
	/** handles data sent by form */
}

/** Event Listeners: */
formEl.addEventListener('submit', (e) => {
	e.preventDefault();
	if (!formEl.checkValidity()) {
		console.log('Invalid Form');
	} else {
		console.log('Valid Form');
		console.log(zipCodeInput.checkValidity());
		handleSubmit();
	}
});

emailInput.addEventListener('input', () => validateEmail(emailInput));
passwordInput.addEventListener('input', () =>
	validatePassword(passwordInput, confirmInput)
);
confirmInput.addEventListener('input', () =>
	confirmPassword(passwordInput, confirmInput)
);

countryInput.addEventListener('input', () => validateCountry(countryInput));
zipCodeInput.addEventListener('keyup', () =>
	validateZip(countryInput, zipCodeInput)
);
