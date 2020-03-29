import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { characters } from '../app-data/characters';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor() { }

  getCharacters(): Observable<any> {
    return of(characters);
  }

  getCharacterById(id: string): Observable<any> {
    return of(characters.find(character => character.id === id));
  }
}