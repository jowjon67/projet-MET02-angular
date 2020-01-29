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
  nom="";
  prenom="";
  email="";
    submitted = false;
    user: Donnees; // toujours le meilleur nom de varmidarblerrrrrrrmdrrrrrrrrrr

    constructor(private formBuilder: FormBuilder, private apiService : Service) { }

    ngOnInit() {
        this.user=null;
        this.registerForm = this.formBuilder.group({
            nom: [this.nom, Validators.required],
            prenom: [this.prenom, Validators.required],
            email: [this.email, [Validators.required, Validators.email]],
            motDePasse: ['', [Validators.required, Validators.minLength(6)]],
            confirmerMotDePasse: ['',[Validators.required, Validators.minLength(6)]]
        }, {
            //validator: MustMatch('password', 'confirmPassword')
        });
        if(sessionStorage.getItem("token")!=null)
        {
            this.apiService.getInfoRegister(sessionStorage.getItem("token")).subscribe( user =>{
                this.user = user as Donnees;
                this.registerForm.patchValue({nom: this.user.nom})
                this.registerForm.patchValue({prenom: this.user.prenom})
                this.registerForm.patchValue({email: this.user.email})
            })
         
            
        }        
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
