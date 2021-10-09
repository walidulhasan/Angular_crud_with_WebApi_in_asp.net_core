import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListAppsComponent } from '../apps/list-apps/list-apps.component';

@Injectable({
  providedIn: 'root'
})
export class BdappsService {
  baseUrl:string='http://localhost:43383/api/';

  constructor(private http:HttpClient) { }

  appsList():Observable<ListAppsComponent[]>{
    return this.http.get<ListAppsComponent[]>(this.baseUrl+'Apps');
  }

  addApps(appsObj:any){
    return this.http.post(this.baseUrl+'Apps',appsObj);
  }
  editApps(id:any, appsObj:any){
    return this.http.put(this.baseUrl+'Apps/'+id, appsObj);
  }
  deleteApps(id:any){
    return this.http.delete(this.baseUrl+'Apps/'+id)
  }
  viewApps(id:string){
    return this.http.get(this.baseUrl+'Apps/'+id)
  }
}
