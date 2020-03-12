import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../models/character';

@Pipe({name: 'filterCharacters'})
export class FilterCharacters implements PipeTransform {
  transform(array: Character[], filterTerm: string) :Character[] {
    const regex = new RegExp(`^${filterTerm}`, "i");
    return array.filter(character => regex.test(character.name));
  }
}