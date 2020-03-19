import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home-component/home-component.component';
import { AppCharacterListComponent } from '../app-character-list/app-character-list.component';

const routes: Routes = [{
  path: '', component: HomeComponent
}, {
  path: 'characters', component: AppCharacterListComponent
}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
