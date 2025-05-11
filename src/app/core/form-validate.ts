import { HttpErrorResponse } from "@angular/common/http";
import { FormGroup } from "@angular/forms";

export class FormValidate {

    protected setErrors(form: FormGroup, errors: any): void {
        let errorList = [];

        if (errors instanceof HttpErrorResponse) {
            errorList = errors.error.errors
        }
        else {
            errorList = JSON.parse(errors);
        }

        errorList.forEach((err: { field: string, message: string }) => {
            const control = form.get(err.field.toLowerCase());
            if (control) {
                control.setErrors({ serverError: err.message });
            }
        });

        form.markAllAsTouched();
    }
}