import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'], 
})
export class FormComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  maturityScore: number;

   constructor(private formBuilder: FormBuilder) { }
    this.form = new FormGroup({
      couleurPreferee: new FormControl(''), // Vous pouvez définir une valeur par défaut ici
    });
  }
  ngOnInit(): void {
    this.maturiteForm = this.formBuilder.group({
      couleurPreferee: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.form.value); // Ici, vous pouvez traiter les données du formulaire
  }
}

