export default function validateEmail(emailInput) {
	if (!emailInput.validity.valid) {
		emailInput.classList.add('err');
	} else {
		emailInput.classList.remove('err');
	}
}
