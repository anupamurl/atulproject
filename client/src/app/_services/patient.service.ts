 

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/patient/';

 

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


  addplandate($data:any){
    return this.http.post(AUTH_API+ 'addplandate', $data );

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
  

  


}

