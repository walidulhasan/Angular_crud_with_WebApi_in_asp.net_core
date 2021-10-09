import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAppsComponent } from './view-apps/view-apps.component';
import { AddAppsComponent } from './add-apps/add-apps.component';
import { EditAppsComponent } from './edit-apps/edit-apps.component';
import { DeleteAppsComponent } from './delete-apps/delete-apps.component';
import { ListAppsComponent } from './list-apps/list-apps.component';
import {MatTableModule} from '@angular/material/table';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HomeComponent } from './home/home/home.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BdappsComponent } from './bdapps/bdapps.component';




@NgModule({
  declarations: [
    ViewAppsComponent,
    AddAppsComponent,
    EditAppsComponent,
    DeleteAppsComponent,
    ListAppsComponent,
    HomeComponent,
    BdappsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule
  ]
})
export class AppsModule { }
