import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PatientService } from '../../_services/patient.service';
import { SharedseriveService } from '../../_services/sharedserive.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Editor } from 'ngx-editor';
import { DomSanitizer } from '@angular/platform-browser';
 

@Component({
  selector: 'app-patientdetails',
  templateUrl: './patientdetails.component.html',
  styleUrls: ['./patientdetails.component.css']
})
export class PatientdetailsComponent {

  editor: any;
  guideeditor: any;
  mealhtml: any;
  guidehtml: any;
  userDetails: any = {};
  $ID: any;
  gPdf: boolean = false;
  tab: number = 0;


  meal: any = {
    mealhtml: "",
    time: '12:00',
    type: "Breakfast"
  }

  guide: any = {  

    guidehtml: "",
  }

  masterMeal : any = { ... this.meal }




  constructor(
    private PatientService: PatientService,
    private SharedseriveService: SharedseriveService,
    private _Activatedroute: ActivatedRoute ,
    private sanitizer: DomSanitizer
  ) {

    this._Activatedroute.paramMap.subscribe((params) => {
      console.log(params);
      this.$ID = params.get('id');
      this.getPatientByID()
    });



  }

  ngOnInit(): void {
    this.editor = new Editor();
    this.guideeditor = new Editor();
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }



  createDietPlan() {

    this.gPdf = true


  }

  tabChange($val: number) {


    this.tab = $val;


  }

  getPatientByID() {

    this.$ID = this._Activatedroute.snapshot.paramMap.get('id');


    this.PatientService.getPatientByID(this.$ID).subscribe((data) => {
      this.userDetails = data;
 

    })


  }


  addMeal() {

   this.userDetails.mealplan.push(this.meal) 
    let data = { 
      id : this.userDetails._id,
      mealplan : this.userDetails.mealplan
    }
    this.PatientService.addMeal(data).subscribe(($val)=>{ 
      this.getPatientByID()
      this.meal ={
        mealhtml: "",
        time: '12:00',
        type: "Breakfast"
      }
    
    
    })
  }


  
addGuideLIne() {

 
  this.userDetails.guideline.push( 
    { guidehtml :     this.guide.guidehtml  }

    ) 

  let data = { 
    id : this.userDetails._id,
    guideline : this.userDetails.guideline
  }

  this.PatientService.addGuide(data).subscribe(($val)=>{ 
    this.guide.guidehtml = ""
    this.getPatientByID()
     
  })


  
  // this.guide.guidehtml = "";
  // this.getPatientByID()

  
 }

}
 


 

