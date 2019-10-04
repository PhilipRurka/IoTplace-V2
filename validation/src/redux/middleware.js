import { ADD_ENTRY, FAILED_ENTRY, ADD_ENTRY_MIDDLE } from './constants';

const errorRequirements = {
  firstName: true,
  lastName: true,
  email: true,
  password: true
};

export function formValidation({ dispatch }) {
  return function(next) {
    return function(action) {
      if(action.type === ADD_ENTRY_MIDDLE) {
        const { firstName, lastName, email, password } = action.payload;
        let failedForm = false;

        /** Names Names Names Names Names Names */
        errorRequirements.firstName = (firstName.length < 2);
        errorRequirements.lastName = (lastName.length < 2);
        /** End End End End End End */

        /** Email Email Email Email Email Email */
        errorRequirements.email = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
          ? false : true;
        /** End End End End End End */

        /** Password Password Password Password Password Password */
        errorRequirements.password = (
          password.length >= 8
          && /^(?=.*[A-Z]).+$/.test(password)
          && /^(?=.*[a-z]).+$/.test(password)
          && /[-#?!@$%^&*-]/.test(password)
          && password.match(/\d+/g) && password.match(/\d+/g).length > 0
        ) ? false : true
        /** End End End End End End */

        Object.keys(errorRequirements).map((key) => {
          if(errorRequirements[key]) { failedForm = true };
        });

        if(failedForm) {
          return dispatch({
            type: FAILED_ENTRY,
            payload: {
              entries: action.payload,
              errorFields: errorRequirements
            }
          });
        } else {
          return dispatch({
            type: ADD_ENTRY,
            payload: {
              entries: action.payload,
              errorFields: errorRequirements
            }
          });
        };
      };
      return next(action);
    };
  };
};



// errorRequirements.character = (password.length < 8);
// errorRequirements.upperCase = (/^(?=.*[A-Z]).+$/.test(password))
//   ? false : true;
// errorRequirements.lowerCase = (/^(?=.*[a-z]).+$/.test(password))
//   ? false : true;
// errorRequirements.special = (/[-#?!@$%^&*-]/.test(password))
//   ? false : true;
// errorRequirements.number = (password.match(/\d+/g) && password.match(/\d+/g).length > 0)
//   ? false : true;