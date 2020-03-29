import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from 'src/app/services/character-service.service';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';


@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  selectedCharacter: Character;
  form: FormGroup;
  id: string = this.route.snapshot.paramMap.get('id');

  get vehicles(): FormArray {
    return this.form.get('vehicles') as FormArray;
  }

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.characterService.getCharacterById(this.id).subscribe(character => {
      this.selectedCharacter = character;
      this.form = this.fb.group({
        name: [character.name],
        gender: [character.gender],
        force: [character.force],
        vehicles: this.fb.array([
          this.fb.group({
            modelName: [''],
            powerLevel: [''],
            color: ['']
          })
        ])
      })
    });
  }

  addVehicle(): void {
    this.vehicles.push(this.fb.group({
      modelName: [''],
      powerLevel: [''],
      color: ['']
    }));
  }

  updateCharacter(): void {
    const updatedAttributes = {};
    updatedAttributes['name'] = this.form.controls.name.value;
    updatedAttributes['gender'] = this.form.controls.gender.value;
    updatedAttributes['force'] = this.form.controls.force.value;
    updatedAttributes['vehicles'] = this.form.controls.vehicles.value;
    this.characterService.updateCharacterById(this.id, updatedAttributes);
    this.router.navigateByUrl('/characters');
  }
}
