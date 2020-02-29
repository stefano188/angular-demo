import { AbstractControl } from '@angular/forms';

export class PasswordValidators {

    static validOldPassword(control: AbstractControl) {
        return new Promise((resolve) => {
            if (control.value !== 'qwer') {
                resolve({ invalidOldPassword: true });
            } else
                resolve(null);
        })
    }
    
    static shouldMatch(control: AbstractControl) {
        let newPassword = control.get('newPassword').value;
        let confirmPassword = control.get('confirmPassword').value;

        if (newPassword === confirmPassword) return null;

        return { passwordShouldMatch: true }
    }
}
