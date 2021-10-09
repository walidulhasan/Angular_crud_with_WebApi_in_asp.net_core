import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAppsComponent } from './apps/add-apps/add-apps.component';
import { BdappsComponent } from './apps/bdapps/bdapps.component';
import { DeleteAppsComponent } from './apps/delete-apps/delete-apps.component';
import { EditAppsComponent } from './apps/edit-apps/edit-apps.component';
import { HomeComponent } from './apps/home/home/home.component';
import { ListAppsComponent } from './apps/list-apps/list-apps.component';
import { ViewAppsComponent } from './apps/view-apps/view-apps.component';
import { AddCategoryComponent } from './appscategory/add-category/add-category.component';
import { DeleteCategoryComponent } from './appscategory/delete-category/delete-category.component';
import { EditCategoryComponent } from './appscategory/edit-category/edit-category.component';
import { ListCategoryComponent } from './appscategory/list-category/list-category.component';
import { ViewCategoryComponent } from './appscategory/view-category/view-category.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [

  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'bdapps',component:BdappsComponent},
  {path:'list',children:[
    {path:'',component:ListAppsComponent},
    {path:'create',component:AddAppsComponent},
    {path:'view/:id',component:ViewAppsComponent},
    {path:'list',component:ListAppsComponent},
    {path:'edit/:id',component:EditAppsComponent},
    {path:'delete/:id',component:DeleteAppsComponent},
  ]},

  {path:'catlist',
    children:[
      {path:'',component:ListCategoryComponent},
      {path:'catlist',component:ListCategoryComponent},
      {path:'catview/:id',component:ViewCategoryComponent},
      {path:'cetedit/:id',component:EditCategoryComponent},
      {path:'catdelete/:id',component:DeleteCategoryComponent},
      {path:'catcreate',component:AddCategoryComponent},
    ]
  },
  {path:'**',pathMatch:"full",component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
