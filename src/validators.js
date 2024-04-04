const checkEmail = (email) => {
  const errors = [];

  if (email.length === 0) {
    errors.push("Requried");
  }

  if (!email.endsWith("@gmail.com")) {
    errors.push("Must end with @gmail.com");
  }
  console.log(errors);
  return errors;
};

const checkPassword = (password) => {
  const errors = [];

  if (password.length < 10) {
    errors.push("Must be at least 10 characters");
  }

  if (!password.match(/[a-z]/)) {
    errors.push("Must include at least 1 lowercase letter");
  }

  if (!password.match(/[A-Z]/)) {
    errors.push("Must include at least 1 uppercase letter");
  }

  if (!password.match(/[0-9]/)) {
    errors.push("Must include at least 1 number");
  }
  return errors;
};

export { checkEmail, checkPassword };
