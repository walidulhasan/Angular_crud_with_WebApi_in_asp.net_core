import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  categoryId:any;
  categoryDatiels:any;
  editCategoryForm:FormGroup=new FormGroup({});
  dataLoaded:boolean=false;
  constructor(private activatedRoute:ActivatedRoute,private catagoryService:CategoryService,private formBuilder:FormBuilder,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.dataLoaded=false
    this.activatedRoute.params.subscribe(data=>{
      this.categoryId=data.id;
    });
    if (this.categoryId!=='') {
        //Get Data For Edit
      this.catagoryService.viewCategory(this.categoryId)
      .toPromise()
      .then(data=>{
        this.categoryDatiels=data;
        Object.assign(this.categoryDatiels,data);
        //Build the Edit Form
        this.editCategoryForm=this.formBuilder.group({
          'appCategoryId':new FormControl(this.categoryDatiels.appCategoryId),
          'appcategoryName':new FormControl(this.categoryDatiels.appCategoryName,[Validators.required,Validators.minLength(3)])
        })
        this.dataLoaded=true;
      })
      .catch(err=>{
        console.log(err);
      })
    }

  }
  updateCategory(){
    console.log(this.editCategoryForm.value);
    this.catagoryService.updateCategory(this.categoryId,this.editCategoryForm.value).subscribe(data=>{
      this._snackBar.open("App Category Update SUCCESSFULLY!!");
    },err=>{
      this._snackBar.open("Unable to  Update App Category Falied!!");
    });
  }

}
