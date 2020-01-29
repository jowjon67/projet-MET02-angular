import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Service } from 'src/app/service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private route : ActivatedRoute, private router: Router, private apiService : Service) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
    login: ['', Validators.required],
    password: ['', Validators.required]});
    if(sessionStorage.getItem('token') == "0" || sessionStorage.getItem('token')==null)
    {

    }
    else
    {
      this.router.navigate(['catalogue']);
    }
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    // display form values on success
   this.apiService.postLogin( this.registerForm.value.login, this.registerForm.value.password);

 
}

}
