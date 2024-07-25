document.getElementById('registrationForm').addEventListener('submit',function(event){

    var fullName = document.getElementById('fullName').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var gender = document.getElementById('gender').value;
    var birthdate = document.getElementById('birthdate').value;
    var country = document.getElementById('country').value.trim();
    var phoneNumber = document.getElementById('phoneNumber').value.trim();
    var errorMessages = '';

    if (!fullName) {
      errorMessages += 'Please enter your full name.\n';
    }

    if (!email) {
      errorMessages += 'Please enter your email address.\n';
    } else if (!validateEmail(email)) {
      errorMessages += 'Please enter a valid email address.\n';
    }

    if (!password) {
      errorMessages += 'Please enter a password.\n';
    } else if (password.length < 6) {
      errorMessages += 'Password must be at least 6 characters.\n';
    }

    if (password !== confirmPassword) {
      errorMessages += 'Passwords do not match.\n';
    }

    if (!gender) {
      errorMessages += 'Please select your gender.\n';
    }

    if (!birthdate) {
      errorMessages += 'Please select your date of birth.\n';
    }

    if (!country) {
      errorMessages += 'Please enter your country.\n';
    }

    if (!phoneNumber) {
      errorMessages += 'Please enter your phone number.\n';
    }

    if (errorMessages) {
      document.getElementById('errorMessages').textContent = errorMessages;
      return false;
    } else {
      return true;
    }
  });

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
