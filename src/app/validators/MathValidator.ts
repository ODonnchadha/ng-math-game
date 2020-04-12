import { AbstractControl } from '@angular/forms';

export default class MathValidator {
    static Addition(target: string, sourceOne: string, sourceTwo: string) {

        return (form: AbstractControl) => {

            const sum = form.value[target];
            const x = form.value[sourceOne];
            const y = form.value[sourceTwo];

            if (x + y === parseInt(sum)) {
                return null;
            }

            return { error: true };
        }
    }
}