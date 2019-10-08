import {
  ADD_ENTRY,
  FAILED_ENTRY,
  ADD_ENTRY_MIDDLE
} from './constants';
import {
  nameLengthTest,
  emailTest,
  passwordLengthTest,
  passwordUpperTest,
  passwordLowerTest,
  passwordSpecialTest,
  passwordNumberTest
} from '../helpers/conditions';


export function formValidation({ dispatch }) {
  return function(next) {
    return function(action) {
      if(action.type === ADD_ENTRY_MIDDLE) {
        const { firstName, lastName, email, password} = action.payload;
        
        let errorRequirements = { failedForm: false };
        /** Names Names Names Names Names Names */
        errorRequirements.firstName = nameLengthTest(firstName);
        errorRequirements.lastName = nameLengthTest(lastName);
        /** End End End End End End */

        /** Email Email Email Email Email Email */
        errorRequirements.email = emailTest(email)
          ? false : true;
        /** End End End End End End */

        /** Password Password Password Password Password Password */
        errorRequirements.password = (
          passwordLengthTest(password)
          && passwordUpperTest(password)
          && passwordLowerTest(password)
          && passwordSpecialTest(password)
          && passwordNumberTest(password)
        ) ? false : true
        /** End End End End End End */

        errorRequirements.failedForm = false;
        Object.keys(errorRequirements).map((key) => {
          if(errorRequirements[key]) { errorRequirements.failedForm = true };
        });

        if(errorRequirements.failedForm) {
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