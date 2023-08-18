import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {formatDate} from "@angular/common";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Projet} from "../../entities/projet.entities";
import {ProjetService} from "../services/projet.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-newprojet',
  templateUrl: './newprojet.component.html',
  styleUrls: ['./newprojet.component.css']
})
export class NewprojetComponent implements OnInit {
  @Input() empAct?: FormGroup;
  @Output() newProjet = new EventEmitter<Projet>();
  projetFormGroup?: FormGroup;
  submitted = false;
  projet?: Projet;


  constructor(private fb: FormBuilder, private projetService: ProjetService) {

  }

  ngOnInit(): void {
    this.projetFormGroup = this.fb.group({
      nomproj: ['test'],
      datedebut: [formatDate(new Date(), 'yyyy-MM-dd', 'en')],
      datefin: [formatDate(new Date(), '2023-12-31', 'en')],
      cout: ['100'],
    });
  }

  afficherParametre(): void {
    if (this.empAct && this.empAct.value) {
      alert('Employé sélectionné : ' + JSON.stringify(this.empAct.value));
    } else {
      alert('Aucun employé sélectionné.');
    }
  }



  onSaveProjet(): void {
    this.submitted = true;
    var ncf = this.projetFormGroup?.value;
    ncf.employe = this.empAct?.value;
    this.projetService.save(ncf).subscribe(data => {alert(' Projet ajouté');
      this.projet = data;
        this.newProjet.emit(data)
      },
      err => {
        alert(err.headers.get("error"));
      });
  }



}


