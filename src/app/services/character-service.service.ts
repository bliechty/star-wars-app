import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { characters } from '../app-data/characters';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  characters: Character[] = characters;

  constructor() { }

  getCharacters(): Observable<any> {
    return of(this.characters);
  }

  getCharacterById(id: string): Observable<any> {
    return of(this.characters.find(character => character.id === id));
  }

  updateCharacterById(id: string, updatedAttributes): void {
    const keys = Object.keys(updatedAttributes);
    this.characters.map(character => {
      if (character.id === id) {
        for (let key of keys) {
          character[key] = updatedAttributes[key];
        }
      }

      return character;
    });
  }
}