/** Test for valid email format. */
export const emailTest = (email) => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

/** Test for name length. */
export const nameLengthTest = (name) => (
  name.length < 2
);

/** Test for password length. */
export const passwordLengthTest = (password) => (
  password.length >= 8
);

/** Test for a uppercase in password */
export const passwordUpperTest = (password) => {
  const regex = /^(?=.*[A-Z]).+$/;
  return regex.test(password);
};

/** Test for a lowercase in password */
export const passwordLowerTest = (password) => {
  const regex = /^(?=.*[a-z]).+$/;
  return regex.test(password);
};

/** Test for a special character in password */
export const passwordSpecialTest = (password) => {
  const regex = /[-#?!@$%^&*-]/;
  return regex.test(password);
};

/** Test for a number in password */
export const passwordNumberTest = (password) => {
  const test = password.match(/\d+/g) && password.match(/\d+/g).length > 0
  return (test) ? true : false;
};

/** Test the Confirmed Password input. */
export const confirmPasswordTest = (password, confirm) => {
  return (password === confirm) ? true : false;
};

