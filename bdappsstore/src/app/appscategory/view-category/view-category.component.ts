import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  categoryId : string='';
  categoryDeatils:any;
  constructor(private catagoryService:CategoryService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.categoryId=data.id;
      console.log(this.categoryId);
    })

    this.catagoryService.viewCategory(this.categoryId).subscribe(data=>{
      this.categoryDeatils=data;
    })
  }
  longText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  It has survived not only five centuries, but also the leap into electronic typesetting,
  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
  containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
  including versions of Lorem Ipsum.`;
}
