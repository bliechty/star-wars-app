import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { characters } from '../app-data/characters';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    return of(characters);
  }
}