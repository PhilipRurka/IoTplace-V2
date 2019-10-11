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
        /** Deconstructing */
        const { firstName, lastName, email, password} = action.payload;
        /** Object that contains all of the fields statuses including the forms status. */
        let errorRequirements = {};
        
        /** Form validation on submit => First Name */
        errorRequirements.firstName = nameLengthTest(firstName);
        /** Form validation on submit => Last Name */
        errorRequirements.lastName = nameLengthTest(lastName);
        /** Form validation on submit => Email */
        errorRequirements.email = emailTest(email)
          ? false : true;
        /** Form validation on submit => Password */
        errorRequirements.password = (
          passwordLengthTest(password)
          && passwordUpperTest(password)
          && passwordLowerTest(password)
          && passwordSpecialTest(password)
          && passwordNumberTest(password)
        ) ? false : true
        /** Sets the default value before iteration. */
        errorRequirements.failedForm = false;
        Object.keys(errorRequirements).map((key) => {
          if(errorRequirements[key]) { errorRequirements.failedForm = true };
        });

        /** Pre-building the payload. */
        const payload = {
          entries: action.payload,
          errorFields: errorRequirements
        };

        /** If the form failed in any of the fields. */
        if(errorRequirements.failedForm) {
          return dispatch({ type: FAILED_ENTRY, payload, status:'error' });

        } else {
          return dispatch({ type: ADD_ENTRY, payload, status:'success' });
        };
      };
      return next(action);
    };
  };
};