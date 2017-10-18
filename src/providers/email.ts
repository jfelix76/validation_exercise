import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Api } from "./api";
import { AbstractControl } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/debounceTime";

const EMAIL_REGEX = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
const EMAIL_INVALID = { 
    doesExist: {
        valid: false
}};

@Injectable()
export class EmailValidator {
    private existingEmail: any = [
        'test0@msn.com',
        'test1@yahoo.com',
        'test2@hotmail.com'
    ];

    constructor(public http: Http, public api: Api) {
    }
    // Synchronous Validation Signature
    validateEmail(control: AbstractControl) {
        return EMAIL_REGEX.test(control.value) ? null : EMAIL_INVALID;  // return null is a valid status
    }
    // Async Validation Signature
    doesExist(control: AbstractControl) {
        return new Observable((observer: any) => {
            control
            .valueChanges
            .debounceTime(400)
            .subscribe(data => {
                let foundIt = this.existingEmail.filter((element) => {
                    return data === element ? element : null;  // return null is a valid status
                });
                
                if (foundIt[0]) { // found array has at least 1 element, not null
                    control.setErrors(EMAIL_INVALID);
                    return true;
                } else {
                    control.setErrors(null);
                    return false;
                }
            });
        });
    }
}