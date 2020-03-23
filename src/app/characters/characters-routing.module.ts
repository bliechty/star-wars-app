import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppCharacterListComponent } from '../characters/app-character-list/app-character-list.component';

const routes: Routes = [{
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
export class CharactersRoutingModule { }
