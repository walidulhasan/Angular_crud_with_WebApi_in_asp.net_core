import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {

  categoryId:string='';
  constructor(private activatedRoute:ActivatedRoute,private categoryService:CategoryService,private _snackBar:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.categoryId=data.id;
    })
    if (this.categoryId) {
      this.categoryService.deleteCategory(this.categoryId).subscribe(data=>{
        this._snackBar.open('Data Delete SuccessFully!!');
        this.router.navigate(['catlist']);
      },err=>{
        this._snackBar.open('Data Delete Failed!!');
      })
    }
  }

}
