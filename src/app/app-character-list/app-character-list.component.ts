import { Component, OnInit } from '@angular/core';
import { characterArray } from '../app-data/characterArray';
import { Character } from '../models/character';

@Component({
  selector: 'app-character-list',
  templateUrl: './app-character-list.component.html',
  styleUrls: ['./app-character-list.component.css']
})
export class AppCharacterListComponent implements OnInit {
  showDetails: boolean
  showCharacters: boolean;
  searchInput: string = "";
  characterList: Array<Character> = characterArray;

  constructor() { }

  ngOnInit(): void {
    this.showDetails = false;
    this.showCharacters = false;
  }

  toggleShowDetails($event): void {
    if (!this.showDetails && !this.showCharacters) {
      $event.source.checked = false;
    } else if (this.showCharacters && !this.showDetails) {
      this.showDetails = true;
    } else {
      this.showDetails = !this.showDetails;
    }
  }

  toggleShowCharacters($event): void {
    if (this.showCharacters) {
      this.showCharacters = false;
      this.showDetails = false;
    } else {
      this.showCharacters = true;
    }
  }

  onForceChange($event, i): void {
    this.characterList[i].force = $event;
  }
}