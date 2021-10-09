import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BdappsService } from 'src/app/services/bdapps.service';
import { AppsModel } from 'src/app/models/apps-model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { AppModule } from 'src/app/app.module';
import { MatSnackBar } from '@angular/material/snack-bar';




const ELEMENT_DATA: AppsModel[] = [];


@Component({
  selector: 'app-list-apps',
  templateUrl: './list-apps.component.html',
  styleUrls: ['./list-apps.component.css']
})


export class ListAppsComponent implements OnInit {

  displayedColumns: string[] = ['appName','appCategoryId','appPublish','appSize','picture','payOrNot','Action'];
  dataSource =  ELEMENT_DATA;
  appList:AppModule[]=[]
  dataSources: MatTableDataSource<any> = new MatTableDataSource(this.appList);
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  durationInSeconds = 5;
  isLoaded:boolean=true;

  constructor(private _snackBar:MatSnackBar,private elRef: ElementRef,private appServices:BdappsService) { }
  openSnackBar(msg:any) {
    this._snackBar.open(msg,"", {
      duration: this.durationInSeconds * 1000,
      data:"Data saved",
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.GetPosts();
      this.isLoaded=false;
    }, 1000);


  }

  GetPosts(){
    this.appServices.appsList().subscribe(data => {
      this.appList = data;
      this.dataSources.data=this.appList;
      this.dataSources.paginator = this.paginator;
      this.dataSources.sort = this.sort;
      console.log(data);
    });
  }

  DeletePost(id:any): void {
    console.log(this.elRef.nativeElement.parentElement);
    if(confirm("Are you sure to delete?")){
      this.appServices.deleteApps(id)
      .subscribe(
        response => {
          this.openSnackBar("Data deleted successfully");
          this.GetPosts();
        },
        error => {
          this.openSnackBar("Oops! Somethis went wrong");
        });
    }
  }
}
