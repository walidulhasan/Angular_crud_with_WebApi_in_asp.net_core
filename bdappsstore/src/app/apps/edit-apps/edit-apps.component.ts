import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { BdappsService } from 'src/app/services/bdapps.service';
import { CategoryService } from 'src/app/services/category.service';
declare var $: any; // for use jauery
@Component({
  selector: 'app-edit-apps',
  templateUrl: './edit-apps.component.html',
  styleUrls: ['./edit-apps.component.css']
})
export class EditAppsComponent implements OnInit {
  durationInSeconds = 5;
  editPostForm:FormGroup=new FormGroup({});
  selectedFile!: File;
  listCategories : any;
  appId: any;
  appsDetails:any;
  DataLoaded: boolean=false;
  //spinner
  saving:boolean=false;
  constructor(private formBuilder:FormBuilder,
    private appservices:BdappsService,
    private _snackBar: MatSnackBar,
    private categoryservice:CategoryService,
    private activatedRoute: ActivatedRoute) { }

    openSnackBar() {
      this._snackBar.open("Data updated successfully","Ok", {
        //duration: this.durationInSeconds * 1000,
      });
    }

  ngOnInit(): void {
    this.DataLoaded = false;
    this.GetCategories();

    this.activatedRoute.params.subscribe(data=>{
      this.appId=data.id;
    });

    if(this.appId){
      this.appservices.viewApps(this.appId).toPromise().then(data=>{
        this.appsDetails=data;
        const date = new Date();
        this.editPostForm=this.formBuilder.group({
          'AppId' : new FormControl(this.appsDetails.appId),
          'AppCategoryId' : new FormControl(this.appsDetails.appCategoryId,[Validators.required]),
          'AppName': new FormControl(this.appsDetails.appName),
          'Picture' : new FormControl(),
          'ExtImageName': new FormControl(this.appsDetails.picture.substring(7)),
          'AppSize': new FormControl(this.appsDetails.appSize),
          'PayOrNot': new FormControl(this.appsDetails.payOrNot),
          'AppDescription' : new FormControl(this.appsDetails.appDescription,[Validators.required,Validators.minLength(10)]),
          'AppPublish':new FormControl(this.appsDetails.appPublish)
        });
        this.DataLoaded = true;
      })
    }
  }

  fileChanged(event:any) {
    this.selectedFile = event.target.files[0];
  }


  GetCategories(){
    this.categoryservice.listCategory().subscribe(data => {
      this.listCategories = data;
    });
  }

  EditPost(){
    var tzoffset = (new Date()).getTimezoneOffset() * 60000;
    let fd = new FormData();


    const data = {
      appId: this.editPostForm.value["AppId"],
      appCategoryId: this.editPostForm.value["AppCategoryId"],
      appName: this.editPostForm.value["AppName"],
      picture: this.editPostForm.value["Picture"],
      extImageName: this.editPostForm.value["ExtImageName"],
      appSize: this.editPostForm.value["AppSize"],
      appDescription: this.editPostForm.value["AppDescription"],
      payOrNot: this.editPostForm.value["PayOrNot"]?'payables':'Free',
      appPublish: (new Date(this.editPostForm.value["AppPublish"] - tzoffset)).toISOString().substring(0,10),
    };

    fd.append("appId", data.appId);
    fd.append("appCategoryId", data.appCategoryId);
    fd.append("appName", data.appName);
    fd.append("picture", data.picture);
    fd.append("extImageName",data.extImageName);
    fd.append("appSize", data.appSize);
    fd.append("appDescription", data.appDescription);
    fd.append("payOrNot", data.payOrNot);
    fd.append("appPublish", data.appPublish);

    fd.append("image",this.selectedFile,this.selectedFile.name)

    console.log(data);
    this.appservices.editApps(this.appId, data).subscribe(data=>{

      console.log("Data saved");

      let snackBarRef = this._snackBar.open('Apps info updated successfully', 'Ok');
      snackBarRef.afterDismissed().subscribe(() => {
        //window.location.reload();
      });

    },err=>{
      let snackBarRef = this._snackBar.open('Apps info updated successfully', 'Ok');
      snackBarRef.afterDismissed().subscribe(() => {
        window.location.href = "/list";
      });
    })
  }

}
