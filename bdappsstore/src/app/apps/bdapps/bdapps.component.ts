import { Component, OnInit } from '@angular/core';
import { BdappsService } from 'src/app/services/bdapps.service';

@Component({
  selector: 'app-bdapps',
  templateUrl: './bdapps.component.html',
  styleUrls: ['./bdapps.component.css']
})
export class BdappsComponent implements OnInit {
  listApps:any[]=[];
  isLoaded:boolean=true;
  constructor(private appServices:BdappsService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.appServices.appsList().subscribe(data=>{
        this.listApps=data;
        this.isLoaded=false;
      });
    }, 3000);
  }
}
