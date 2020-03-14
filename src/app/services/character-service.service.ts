import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { characterArray } from '../app-data/characterArray';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor() { }

  getCharacters(): Observable<Character[]> {
    return of(characterArray);
  }
}