const passWordPattern =
	'^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*s).{8,}$';
const testPassword = 'Aa1#5678';

function validatePassword(passwordInput, confirmInput) {
	if (!passwordInput.validity.valid) {
		passwordInput.classList.add('err');
		if (passwordInput.validity.patternMismatch) {
			passwordInput.setCustomValidity(
				'Password must contain at least 1 numeric digit, at least 1 lowercase letter, 1 uppercase letter, and at least 1 symbol'
			);
		} else {
			passwordInput.setCustomValidity('');
		}
	} else {
		passwordInput.classList.remove('err');
	}

	confirmPassword(passwordInput, confirmInput);
}

function confirmPassword(passwordInput, confirmInput) {
	if (passwordInput.value !== confirmInput.value) {
		confirmInput.setCustomValidity("Passwords Don't Match");
		confirmInput.classList.add('err');
	} else {
		confirmInput.setCustomValidity('');
		confirmInput.classList.remove('err');
	}
}

export { validatePassword, confirmPassword };
