import { Component, OnInit } from '@angular/core';
import { characterArray } from '../app-data/characterArray';
import { Character } from '../models/character';

@Component({
  selector: 'app-character-list',
  templateUrl: './app-character-list.component.html',
  styleUrls: ['./app-character-list.component.css']
})
export class AppCharacterListComponent implements OnInit {
  showDetails: boolean = false;
  showCharacters: boolean = false;
  searchInput: string = "";
  characterList: Array<Character> = characterArray;

  toggleShowDetails(): void {
    this.showDetails = !this.showDetails;
  }

  toggleShowCharacters(): void {
    if (this.showCharacters) {
      this.showCharacters = false;
      this.showDetails = false;
    } else {
      this.showCharacters = true;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
