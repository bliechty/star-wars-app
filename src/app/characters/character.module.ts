import { NgModule } from '@angular/core';
import { AppCharacterListComponent } from './app-character-list/app-character-list.component';
import { SharedModule } from '../shared/shared.module';
import { ForceComponent } from './force/force.component';
import { MatIconModule } from '@angular/material/icon';
import { FilterCharacters } from '../pipes/filter-characters.pipe.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterDetailsComponent } from './character-details/character-details.component';

@NgModule({
  declarations: [
    AppCharacterListComponent,
    ForceComponent,
    FilterCharacters,
    CharacterDetailsComponent
  ],
  imports: [
    SharedModule,
    CharactersRoutingModule
  ],
  exports: [
    MatIconModule,
  ]
})
export class CharacterModule { }
