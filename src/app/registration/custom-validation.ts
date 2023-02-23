
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
export class CustomFormValidator {
    public existingUser: any;

    /** cannot contain space */
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control?.value as string)?.indexOf(' ') >= 0) {
            return { cannotContainSpace: true }
        }
        return null;
    }

    /** confirm password */

    static checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
        return (group: FormGroup) => {

            let passwordInput = group.controls[passwordKey],
                passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({ notEquivalent: true })
            }
            return null;
        }
    }

    /** username already exist */
    // static userNameAlreadyExist(userNameKey: string, existingUserName: string[]) {
    //     return (group: FormGroup) => {

    //         let userNameInput: any = group.controls[userNameKey]
    //         if (existingUserName?.includes(userNameInput.value)) {
    //             return userNameInput.setErrors({ userNameAlreadyExist: true })
    //         }
    //         return null
    //     }
    // }
}  