import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl = 'http://localhost:43383/api/';
  constructor(private http:HttpClient) {}
   listCategory(){
    return this.http.get(this.baseUrl+'AppCategories');
   }

   viewCategory(id:string){
    return this.http.get(this.baseUrl+'AppCategories/'+id);
   }

   addCategory(catObj:any){
    return this.http.post(this.baseUrl+'AppCategories',catObj);
   }

   deleteCategory(id:any){
    return this.http.delete(this.baseUrl+'AppCategories/'+id);
   }

   updateCategory(id: any,catObj: any){
    return this.http.put(this.baseUrl+'AppCategories/'+id,catObj);
   }


}
