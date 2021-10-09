import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    AddCategoryComponent,
    EditCategoryComponent,
    DeleteCategoryComponent,
    ViewCategoryComponent,
    ListCategoryComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule
  ],
  providers:[
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,useValue:{duration:2000}}
  ]
})
export class AppscategoryModule { }
