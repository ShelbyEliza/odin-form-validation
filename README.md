# odin-form-validation

The Odin Project: Form Validation Module

## Requirements:

### Email

- type: email
- Must follow email pattern (n@n.nn)
- minimum length: 6
- maximum length: 254
- required

### Country

- use select element with a list of supported countries
- dictates zip code pattern
- required

### Zip Code

- use country code to set zip code patter
- type: text
- required

### Password

- type: password
- min length: 8
- must contain at least one of the following:
  - letter,
  - number,
  - symbol,
- required

### Password Confirmation

- type: text
- must match password input
- required
