import { Component } from '@angular/core';

import { PatientService } from '../../_services/patient.service';
import { SharedseriveService } from '../../_services/sharedserive.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent {

  constructor(
    private PatientService: PatientService,
    private SharedseriveService: SharedseriveService,
    private router: Router
  ) {

  }





  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl(''),
    age: new FormControl(''),
    weight: new FormControl(''),
    height: new FormControl(''),
    complaints: new FormControl(''),
  });


  onSubmit() {
    this.PatientService.addPatiniet(this.profileForm.value).subscribe((data) => {
      this.profileForm.reset()
      this.SharedseriveService.patiendAdd.emit(data)
      this.router.navigate(['/dashboard/patientdetail', data.id]);
    })
  }
}
