import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PatientService } from '../../_services/patient.service';
import { SharedseriveService } from '../../_services/sharedserive.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Editor } from 'ngx-editor';
import { DomSanitizer } from '@angular/platform-browser';
import { ConfirmationDialogService } from '../../confirmation-dialog/confirmation-dialog.service';
const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-patientdetails',
  templateUrl: './patientdetails.component.html',
  styleUrls: ['./patientdetails.component.css'],
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
  activePlanID: any = null;
  mealList: any = [];
  guideList: any = [];
  updateGuideID: any = null;
  downloadLInk : any ;
  meal: any = {
    mealhtml: '',
    time: '12:00',
    type: 'Breakfast',
  };

  guide: any = {
    guidehtml: '',
  };

  masterMeal: any = { ...this.meal };

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  constructor(
    private PatientService: PatientService,
    private SharedseriveService: SharedseriveService,
    private _Activatedroute: ActivatedRoute,
    private sanitizer: DomSanitizer,
     private confirmationDialogService: ConfirmationDialogService,
     private router :Router,
  ) {
    this.downloadLInk = window.location.hostname;
    this._Activatedroute.paramMap.subscribe((params) => {
      console.log(params);
      this.$ID = params.get('id');
      this.getPatientByID();
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
    console.log(this.range.value);

    let data = {
      id: this.userDetails._id,
      plandate: this.range.value,
    };
    this.PatientService.addplandate(data).subscribe(($val) => {
      this.getPatientByID();
    });

    //this.gPdf = true
  }

  tabChange($val: number) {
    this.tab = $val;
  }

  getPatientByID() {
    this.$ID = this._Activatedroute.snapshot.paramMap.get('id');

    this.PatientService.getPatientByID(this.$ID).subscribe((data) => {
      this.userDetails = data;
      this.activePlan(this.activePlanID);
    });
  }

  deleteDitePlan($id: any) {

    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
    .then((confirmed) =>
    {
      if(confirmed){
        this.PatientService.deletediteplan(this.$ID, $id).subscribe((data) => {
          this.getPatientByID();
        });
      }
     }
    )
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));



  }

  deleteMplan($item: any) {

    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
    .then((confirmed) =>
    {
      if(confirmed){
        this.PatientService.deletePlan(
          this.$ID,
          $item._id,
          this.activePlanID
        ).subscribe((data) => {
          this.getPatientByID();
        });

      }
     }
    )
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));







  }



  deleteUser($id:any){

     this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
    .then((confirmed) =>
    {
      if(confirmed){

        this.PatientService.deleteUser(
          this.$ID
        ).subscribe((data) => {

          this.SharedseriveService.patiendAdd.emit()

          this.router.navigate(['dashboard' ]);
        });


      }
     }
    )
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));




  }

  deleteguide($item: any) {


    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
    .then((confirmed) =>
    {
      if(confirmed){
        this.PatientService.deleteguide(
          this.$ID,
          $item._id,
          this.activePlanID
        ).subscribe((data) => {
          this.getPatientByID();
        });

      }
     }
    )
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));



  }

  activePlan($ID: any) {
    this.activePlanID = $ID;

    this.mealList = this.userDetails.plandate
      .filter((node: any) => {
        return node._id == this.activePlanID;
      })
      .map((n: any) => {
        return (n = n.mealplan);
      });

    this.mealList = this.mealList.length ? this.mealList[0] : [];

    this.guideList = this.userDetails.plandate
      .filter((node: any) => {
        return node._id == this.activePlanID;
      })
      .map((n: any) => {
        return (n = n.guideline);
      });

    this.guideList = this.guideList.length ? this.guideList[0] : [];
  }

  addMeal() {
    let data = {
      id: this.userDetails._id,
      plandate: this.activePlanID,
      mealplan: this.meal,
    };
    this.PatientService.addMeal(data).subscribe(($val) => {
      this.getPatientByID();
      this.meal = {
        mealhtml: '',
        time: '12:00',
        type: 'None',
      };
    });
  }

  editGuide(item: any) {


    this.guide.guidehtml = item.guidehtml
    this.updateGuideID = item._id;
  }


  updateGuideLIne() {
    let data = {
      id: this.userDetails._id,
      guideline: this.guide.guidehtml,
      plandate: this.activePlanID,
      updateGuideID: this.updateGuideID
    };


    this.PatientService.updateaddGuide(data).subscribe(($val) => {
      this.guide.guidehtml = '';
      this.getPatientByID();
      this.updateGuideID = null;
    });


  }

  editMealPlan(item:any){
    this.meal = { ... item }
  }


  changeStatus(item:any,stutus: boolean){


  let  $data = {
     pid : this.$ID,
     did : item._id,
     status : true
  }

  this.PatientService.updateStatus($data).subscribe(($val) => {

    console.log($val)

  });




  }

  editMeal(){
    this.meal['pid']  = this.userDetails._id;
    this.meal['plandate']  = this.activePlanID;
    this.PatientService.updatePlan(this.meal).subscribe(($val) => {
      this.meal =  {
        mealhtml: '',
        time: '12:00',
        type: 'Breakfast',
      };
      this.getPatientByID();
      this.updateGuideID = null;
    });
  }
  addGuideLIne() {
    let data = {
      id: this.userDetails._id,
      guideline: this.guide.guidehtml,
      plandate: this.activePlanID,
    };
    this.PatientService.addGuide(data).subscribe(($val) => {
      this.guide.guidehtml = '';
      this.getPatientByID();
    });
  }
}
