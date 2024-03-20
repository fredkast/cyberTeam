import { Component, OnInit } from '@angular/core';
import { Question } from '../app/model/questionReponses';  // Assurez-vous que le chemin d'accès est correct
import { FormGroup, FormBuilder,ReactiveFormsModule, Validators, FormControl } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  imports: [ReactiveFormsModule]  
})
export class FormComponent implements OnInit {
  form: FormGroup;
  maturityScore : number = 0;
  constructor() {
    this.form = new FormGroup({
      couleurPreferee: new FormControl(''), // Vous pouvez définir une valeur par défaut ici
      animalPrefere: new FormControl(''),
      saisonPreferee: new FormControl('')
    });
  }
  ngOnInit(): void {
    console.log(this.form)
  }

  onSubmit() {
    console.log(this.form.value); // Ici, vous pouvez traiter les données du formulaire
  }
}

