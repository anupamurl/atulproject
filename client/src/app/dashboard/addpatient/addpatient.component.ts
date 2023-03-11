import { Component } from '@angular/core';
 
import { PatientService } from '../../_services/patient.service';
import { SharedseriveService } from '../../_services/sharedserive.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
 
@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent {
 
  constructor(
    private PatientService: PatientService , 
    private SharedseriveService : SharedseriveService,
    private fb: FormBuilder
    )
    {

    }


 


  profileForm =  new FormGroup({
    name: new FormControl('' , Validators.required),
    phone: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(''),
    weight: new FormControl(''),
    height: new FormControl(''),
    complaints : new FormControl(''),
  });


  onSubmit() {

    console.warn(this.profileForm.value);
    this.PatientService.addPatiniet( this.profileForm.value  ).subscribe((data)=>{
      this.profileForm.reset()
      this.SharedseriveService.patiendAdd.emit(data)
    })
  }
}
