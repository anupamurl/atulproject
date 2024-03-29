import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StorageService } from '../_services/storage.service';
import { AuthService } from '../_services/auth.service';
import { PatientService } from '../_services/patient.service';
import { SharedseriveService } from '../_services/sharedserive.service';

import { EventBusService } from '../_shared/event-bus.service';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  NavigationEnd
}                           from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit  {

  allPatinet: any = [];
  allPatinetMaster: any = [];
  userInfo : any ;

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private eventBusService: EventBusService,
    private router :Router,
    private PatientService : PatientService,
    private SharedseriveService : SharedseriveService,
 
  ) {

    this.getAllPatient()
    this.SharedseriveService.patiendAdd.subscribe((data)=>{
      this.getAllPatient()
    })
    this.getuserDetail()

 


    
  }


  ngOnInit(): void {
    this.getAllPatient();
  }

  

  getuserDetail(){
   this.userInfo =  this.storageService.getUser()  
    }

  onSearchChange(searchValue: any): void {  
    this.allPatinet =  [...this.allPatinetMaster].filter((node:any)=>{ 
      return node.name.toLocaleUpperCase().search(searchValue.value.toLocaleUpperCase()) >-1 
    })
  }


  detailPage($id:any){
    this.allPatinet.map((node:any)=>{
       if (node._id== $id){
      node.active = true
      }
      else{
        node.active = false
      }
    })

    this.router.navigate(['dashboard/patientdetail' , $id ]);
  }


getAllPatient(){

  this.PatientService.getPatinietList().subscribe((data)=>{
    this.allPatinet = data;
    this.allPatinet.map((node:any)=>{
      node.title =  node.name[0].toLocaleUpperCase()
    })
    this.allPatinetMaster = this.allPatinet;


    if(this.allPatinet && this.allPatinet.length){
      this.detailPage(this.allPatinet[0]._id)
    }
    else{

      this.router.navigate(['/dashboard/addpatient']);
    }





    



  })


}



  titleCaseWord(word: string) {
  if (!word) return word;
  return word[0].toLocaleUpperCase();
}

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
   
        this.storageService.clean();
        this.router.navigate(['/login']);
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
