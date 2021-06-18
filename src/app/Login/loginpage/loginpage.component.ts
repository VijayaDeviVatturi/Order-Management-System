import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PasswordStrengthValidator, UserNameValidator } from 'src/app/password-strength.validators'

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  form;
  userService: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.form=new FormGroup({
      usernameControl : new FormControl('', [
        Validators.required,
        UserNameValidator
      ])
      ,
     
      passwordControl : new FormControl('', [
        Validators.required,
        PasswordStrengthValidator,
      ])
      
    });
  }
  submit(){
    console.log(this.form)
      }
    
      get formControl() {
        return this.form.controls;
      }
      matcher = new MyErrorStateMatcher();

      public static noSpecialChar(control: FormControl) {
        let hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(control.value);
        if(hasSpecial){
          return { noSpecial: 'Special char' };
        }
        return null;
      }
    
      onSubmit=function(user){
        console.log(user);

          this.router.navigate(['/oders']);
     
      }
}
class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}