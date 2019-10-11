import { ADD_ENTRY } from './constants';
import {
  nameLengthTest,
  emailTest,
  passwordLengthTest,
  passwordUpperTest,
  passwordLowerTest,
  passwordSpecialTest,
  passwordNumberTest,
  confirmPasswordTest
} from '../helpers/conditions';

export function formValidation() {
  return function(next) {
    return function(action) {
      if(action.type === ADD_ENTRY) {
        /** Deconstructing */
        const {
          type,
          payload: {
            firstName,
            lastName,
            email,
            password,
            confirmPassword
          }
        } = action;

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

        errorRequirements.confirmPassword = confirmPasswordTest(password, confirmPassword)
          ? false : true;
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
        const status = (errorRequirements.failedForm) ? 'error': 'success';

        action = { type, payload, status };
      };
      return next(action);
    };
  };
};