import { Component, OnInit, OnDestroy } from '@angular/core';
import { Character } from '../models/character';
import { CharacterService } from '../services/character-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character-list',
  templateUrl: './app-character-list.component.html',
  styleUrls: ['./app-character-list.component.css']
})
export class AppCharacterListComponent implements OnInit, OnDestroy {
  showDetails: boolean
  showCharacters: boolean;
  searchInput: string = "";
  characterList: Array<Character>;
  characterSubscribe: Subscription;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.showDetails = false;
    this.showCharacters = false;
    this.characterSubscribe = this.characterService.getCharacters().subscribe(data => {
      this.characterList = data;
    });
  }

  ngOnDestroy(): void {
    this.characterSubscribe.unsubscribe();
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