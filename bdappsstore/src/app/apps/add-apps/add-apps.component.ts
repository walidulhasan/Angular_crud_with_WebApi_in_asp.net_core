import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BdappsService } from 'src/app/services/bdapps.service';
import { CategoryService } from 'src/app/services/category.service';
//declare var $: any; // for use jauery

import * as $ from 'jquery';

@Component({
  selector: 'app-add-apps',
  templateUrl: './add-apps.component.html',
  styleUrls: ['./add-apps.component.css']
})
export class AddAppsComponent implements OnInit {

  durationInSeconds = 5;
  addPostForm:FormGroup=new FormGroup({});
  selectedFile!: File;

  listCategories : any;

  //spinner
  saving:boolean=false;

  constructor(private formBuilder:FormBuilder,
    private appsService:BdappsService,
    private _snackBar: MatSnackBar,
    private categoryservice:CategoryService) { }

    openSnackBar() {
      this._snackBar.open("Data saved successfully","", {
        duration: this.durationInSeconds * 1000
      });
    }

  ngOnInit(): void {
    this.GetCategories();

    const date = new Date();
    this.addPostForm=this.formBuilder.group({
      'AppName' : new FormControl('',[Validators.required]),
      'AppCategory':new FormControl('',[Validators.required]),
      'imageName' : new FormControl(''),
      'AppSize': new FormControl(''),
      'AppDescription': new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(30)]),
      'AppPublish':new FormControl(''),
      'PayOrNot':new FormControl(''),

    });
  }
  fileChanged(event:any) {
    this.selectedFile = event.target.files[0];
    $('button').val('Save');
  }

  GetCategories(){
    this.categoryservice.listCategory().subscribe(data => {
      this.listCategories = data;
    });
  }
  createApps(){
    var tzoffset = (new Date()).getTimezoneOffset() * 60000;
    let fd = new FormData();
    this.saving=true;

    const data = {
      appName: this.addPostForm.value["AppName"],
      appCategoryId: this.addPostForm.value["AppCategory"],
      picture: this.addPostForm.value["imageName"],
      appSize: this.addPostForm.value["AppSize"],
      appDescription: this.addPostForm.value["AppDescription"],
      appPublish: (new Date(this.addPostForm.value["AppPublish"] - tzoffset)).toISOString().substring(0,10),
      payOrNot: this.addPostForm.value["PayOrNot"]?'Payables':'Free'

    };
    fd.append("appName", data.appName);
    fd.append("picture", data.picture);
    fd.append("appCategoryId", data.appCategoryId);
    fd.append("appSize", data.appSize);
    fd.append("appDescription", data.appDescription);
    fd.append("appPublish", data.appPublish);
    fd.append("payOrNot", data.payOrNot);
    fd.append("image",this.selectedFile,this.selectedFile.name)
    console.log(data);
    setTimeout(() => {
      this.appsService.addApps(fd).subscribe(response =>{
        console.log(response)
        this.addPostForm.reset({});
        this.saving=false;
        console.log("Data saved");
        this._snackBar.open('Post saved successfully', 'Ok');
        // let snackBarRef = this._snackBar.open('Post saved successfully', 'Ok');
        // snackBarRef.afterDismissed().subscribe(() => {
        //   window.location.href = "/admin/blog/list";
        // });
      },err=>{
        this._snackBar.open(err);
      })
    }, 2000);

  }

}
