import {Component} from '@angular/core';
import {Arma} from "../model/arma";
import {Personagem} from "../model/personagem";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  meuPersonagem: Personagem;
  armaForm: FormGroup

  constructor() {
    this.meuPersonagem = {
      nome: "",
      origem: "",
      arquetipo: "",
      profissao: "",
      nivel: 0,
      residencia: "",
      personalidade: "",
      motivacao: "",
      idade: 0,
      sexo: "",
      peso: 0,
      experiencia: 0,
      defesa: 0,
      altura: 0,
      stress: 0,
      saude: 0,
      vigor: 0,
      proficiencia: 0,
      determinacao: 0,
      moralidade: 0,
      conhecimentos: "",
      equipamento: "",
      municaoTotal: 0,
      dinheiro: 0,
      ouro: 0,
      corpo: 0,
      agilidade: 0,
      astucia: 0,
      presenca: 0,
      fortitude: 0,
      reflexos: 0,
      iniciativa: 0,
      vontade: 0,
      cargaLeve: 0,
      cargaMedia: 0,
      cargaPesada: 0,
      cargaMaxima: 0,
      armas: []
    }

  }

  ngOnInit() {
    let personagemGuardado = JSON.parse(localStorage.getItem("personagem") || '{}')

    this.meuPersonagem = Object.assign(this.meuPersonagem, personagemGuardado)
  }

  ngDoCheck() {
    localStorage.setItem("personagem", JSON.stringify(this.meuPersonagem))
  }


}

