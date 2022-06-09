// import { ErrorCodes } from "vue";
import validations from "./validations";

export default class signupValidations{
    constructor(email,password){
        this.email = email;
        this.password = password
    }

    checkValidations(){
        let errors=[];

        if(!validations.checkEmail(this.email)){
            errors['email']="invalid email"
        }

        if(!validations.minLength(this.password,6)){
            errors['password']="invalid password"
        }

        return errors
    }
    static getErrorMessegeformCode(errorCode){
        switch(errorCode){
            case 'EMAIL_EXISTS':return 'Email already exists';
            case 'INVALID_PASSWORD': return 'INVALID PASSWORD';
            case 'EMAIL_NOT_FOUND': return 'email not found';
            default: return 'unexpected error occurs'
        }
    }
}