import { Component, OnInit } from '@angular/core';
import { FormGroup,ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common'; // Importer CommonModule

@Component({
  standalone: true,
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  imports: [ReactiveFormsModule, NgIf]  
})
export class FormComponent implements OnInit {

  form!: FormGroup;
  maturityScore! : any;
  constructor() {}
  displayScore: boolean = false;
  responseToDisplay = "";

  reponseNiveau1 = "Pour sécuriser votre système d'information (SI) face aux cyberattaques, commencez par évaluer les risques en identifiant les actifs critiques et les vulnérabilités potentielles. Sensibilisez vos employés aux pratiques de sécurité, notamment à l'évitement des hameçonnages, et établissez des politiques de sécurité claires sur l'usage des dispositifs et la gestion des mots de passe. Assurez la sécurité physique et réseau de vos équipements, et mettez en place une gestion des accès stricte, limitant les privilèges aux nécessités opérationnelles. Instaurez des sauvegardes régulières et un plan de récupération des données. Maintenez vos systèmes à jour et procédez à des audits de sécurité périodiques. Enfin, développez un plan de réponse aux incidents et envisagez une collaboration avec des partenaires spécialisés pour renforcer votre posture de sécurité.";
  reponseNiveau2 = "Pour une entreprise ayant une expérience intermédiaire en cybersécurité, l'accent doit être mis sur le renforcement et l'optimisation des stratégies existantes. Évaluez périodiquement votre architecture de sécurité pour identifier les nouvelles vulnérabilités et adapter vos défenses en conséquence. Approfondissez la formation de vos employés en intégrant des simulations d'attaques réalistes pour aiguiser leur vigilance. Consolidez vos politiques de sécurité avec des contrôles d'accès dynamiques et une segmentation réseau pour limiter les mouvements latéraux en cas d'attaque. Investissez dans des solutions avancées de détection des menaces, telles que l'analyse comportementale et l'intelligence artificielle, pour identifier les anomalies en temps réel. Renforcez vos protocoles de sauvegarde et de récupération en adoptant des approches telles que l'immutabilité des données. Mettez en œuvre une gestion rigoureuse des correctifs pour réduire le risque d'exploitation des vulnérabilités connues. Élaborez des plans de réponse aux incidents plus sophistiqués, incluant des exercices réguliers et des révisions post-incident pour améliorer continuellement. Considérez la cyberassurance pour atténuer les impacts financiers d'une éventuelle violation. Enfin, engagez-vous dans le partage d'informations sur les menaces avec des communautés pertinentes pour rester informé des dernières tactiques d'attaque et défense.";
  reponseNiveau3 = "Pour une entreprise avec des solutions de cybersécurité déjà en place, l'objectif est de peaufiner et d'innover. Priorisez l'analyse continue de la menace et l'adaptation proactive des stratégies. Investissez dans des technologies de pointe comme l'IA pour la détection précoce des menaces et l'automatisation des réponses. Renforcez la collaboration intersectorielle pour un partage d'intelligence sur les menaces efficace. Enfin, engagez régulièrement des audits externes et des tests d'intrusion pour évaluer et améliorer votre posture de sécurité.";


  ngOnInit(): void {
    this.form = new FormGroup({
      question1: new FormControl(''),
      question2: new FormControl(''),
      question3: new FormControl(''),
      question4: new FormControl(''),
      question5: new FormControl(''),
      question6: new FormControl(''),
      question7: new FormControl(''),
      question8: new FormControl('')
    });
    console.log(this.displayScore)
  }

  onSubmit(){
    this.maturityScore = 0;
    this.displayScore = true;
    console.log(this.displayScore)

    const values = Object.values(this.form.value);
  
    for (const value of values) {
      this.maturityScore += Number(value);
    }
    this.getResponse();
    console.log('Maturity Score:', this.maturityScore);
        console.log('Maturity Score:', this.maturityScore);
  }

  getResponse() {
    if (this.maturityScore > 0) {
      if (this.maturityScore <= 12) {
        // Si maturityScore est entre 1 et 12 inclus
        this.responseToDisplay = this.reponseNiveau1;
      } else if (this.maturityScore > 12 && this.maturityScore <= 15) {
        // Si maturityScore est entre 13 et 15 inclus
        this.responseToDisplay = this.reponseNiveau2;
      } else {
        // Si maturityScore est supérieur à 15
        this.responseToDisplay = this.reponseNiveau3;
      }
    }else {
      this.responseToDisplay = "Vous n'avez pas répondu à toutes les questions."
  }
  } 
}

