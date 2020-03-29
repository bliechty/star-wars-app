import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppCharacterListComponent } from '../characters/app-character-list/app-character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';

const routes: Routes = [
  { path: 'character/:id', component: CharacterDetailsComponent },
  { path: 'characters', component: AppCharacterListComponent }
];

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
