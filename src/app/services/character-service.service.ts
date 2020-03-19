import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Character } from '../models/character';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private starWarsApi: string = 'https://swapi.co/api/people';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    return this.http.get<any>(this.starWarsApi);
  }
}