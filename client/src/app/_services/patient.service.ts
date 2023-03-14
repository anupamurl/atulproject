

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const AUTH_API = `http://${window.location.hostname}:8080/api/patient/`;


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private http: HttpClient) {}
  getPatinietList() :Observable<any>  {
    return this.http.get(AUTH_API+ 'getallpatient');
  }
  addPatiniet($data:any) :Observable<any>  {
    return this.http.post(AUTH_API+ 'addpatient', $data );
  }
  getPatientByID($id:any):Observable<any>  {
    console.log($id)
    return this.http.post(AUTH_API+ 'getPatientbyid', {id : $id } );
  }

  addMeal($data:any){
    return this.http.post(AUTH_API+ 'addMeal', $data );

  }

  addGuide($data:any){
    return this.http.post(AUTH_API+ 'addGuide', $data );

  }


  updateaddGuide($data:any){
    return this.http.post(AUTH_API+ 'updateGuide', $data );

  }

  updateStatus($data:any){
    return this.http.post(AUTH_API+ 'updatestatus', $data );

  }



  updatePlan($data:any){
    return this.http.post(AUTH_API+ 'updateplan', $data );

  }





  addplandate($data:any){
    return this.http.post(AUTH_API+ 'addplandate', $data );

  }

  deletediteplan($pid:any,   activePlanID : any ){

    let $data =  {
     'pid' : $pid,
    'plandate' :    activePlanID ,
    }

    return this.http.post(AUTH_API+ 'deletediteplan', $data );

  }


  deletePlan($pid:any,$itemId : any, activePlanID : any ){

    let $data =  {
     'pid' : $pid,
     'itemId' : $itemId,
    'plandate' :    activePlanID ,
    }
    return this.http.post(AUTH_API+ 'deletelan', $data );

  }


  deleteguide($pid:any,$itemId : any , activePlanID : any){

    let $data =  {
     'pid' : $pid,
     'itemId' : $itemId,
     'plandate' :    activePlanID ,
    }
    return this.http.post(AUTH_API+ 'deleteguide', $data );

  }

  deleteUser($pid:any ){
    let $data =  {
     'pid' : $pid
    }
    return this.http.post(AUTH_API+ 'deleteuser', $data );
  }
}

