import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  listCategory:any;
  isLoaded:boolean=true;
  constructor(private catagoryService:CategoryService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.catagoryService.listCategory().subscribe(data=>{
        this.listCategory=data;
        console.log(this.listCategory)
        this.isLoaded=false;
      });
    }, 1000);
  }

}
