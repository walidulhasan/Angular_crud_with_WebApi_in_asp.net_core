import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  addCategoryForm:FormGroup=new FormGroup({});

  constructor(private formBuilder:FormBuilder,private categoryService:CategoryService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.addCategoryForm=this.formBuilder.group({
      'appCategoryName':new FormControl('',[Validators.required,Validators.minLength(3)])
    })
  }
  createCategory(){
    this.categoryService.addCategory(this.addCategoryForm.value).subscribe(data=>{
      this._snackBar.open("App Category Create SUCCESSFULLY!!");
      this.addCategoryForm.reset();
    },err=>{
      this._snackBar.open("Unable to  Create App Category SUCCESSFULLY!!");
    });

  }

}
