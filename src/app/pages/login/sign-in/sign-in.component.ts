import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from "../../../shared/services/auth/auth.service";
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public fb: FormBuilder
  ) { }
  signIn = this.fb.group(
   {
    email: ['', (Validators.required, Validators.email)],
    password:['', Validators.required]
  }
  )

  ngOnInit() { }

  submit(){
    this.authService.SignIn(this.signIn.controls['email'].value,this.signIn.controls['password'].value).then(
      (error)=>{
        console.log(error)
      }
    )
  }
}
