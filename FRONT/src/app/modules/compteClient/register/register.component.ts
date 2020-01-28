import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgControl, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Donnees }    from '../../../models/donnees';
import { BrowserModule } from '@angular/platform-browser';

import { Service } from 'src/app/service.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  informationUser : Observable<Donnees[]>;
    submitted = false;

    constructor(private formBuilder: FormBuilder, private apiService : Service) { }

    ngOnInit() {
       
        if(sessionStorage.getItem("token")!="")
        {
            this.informationUser = this.apiService.getInfoRegister(1);
            this.informationUser.subscribe(a => console.log(a));
            this.informationUser.subscribe({
                next(value) { console.log(value); },
                complete() { console.log("C'est fini!"); }
            });
        }
        this.registerForm = this.formBuilder.group({
            nom: ['', Validators.required],
            prenom: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            motDePasse: ['', [Validators.required, Validators.minLength(6)]],
            confirmerMotDePasse: ['',[Validators.required, Validators.minLength(6)]]
        }, {
            //validator: MustMatch('password', 'confirmPassword')
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
        this.apiService.postRegister(this.registerForm.value);
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();

      
    }

}
