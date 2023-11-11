const formEl = document.querySelector('form');
const submitBtn = document.querySelector('button');
// const emailInput = document.getElementById('email');
// const countryInput = document.getElementById('country');
// const zipCodeInput = document.getElementById('zip-code');
// const passwordInput = document.getElementById('password');
// const confirmInput = document.getElementById('confirm-password');

const inputEls = document.querySelectorAll('input, select');
console.log(inputEls);

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

// function checkEmail() {
//   if (!emailInput.validity.valid) {
//     showError(emailInput);
//   }
// }
// function checkCountry() {
//   if (!countryInput.validity.valid) {
//     showError(countryInput);
//   }
// }

// function checkZip() {
//   if (!zipCodeInput.validity.valid) {
//     showError(zipCodeInput);
//   }
// }

function handleSubmit() {}

function showError(input, inputError) {
	// if (input.validity.valueMissing) {
	// 	inputError.textContent = 'You need to enter a value.';
	// } else if (input !== pages && input.validity.tooShort) {
	// 	inputError.textContent = `${input.id} should be at least ${input.minLength} characters; you entered ${input.value.length}.`;
	// }
	// inputError.className = 'error active';
}
