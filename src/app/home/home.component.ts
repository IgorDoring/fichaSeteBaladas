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
  armas: Arma[] = []

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
    this.armaForm = new FormGroup({
      "id": new FormControl(null),
      "carga": new FormControl(0,),
      "arma": new FormControl(null),
      "ammo": new FormControl(0),
      "dano": new FormControl(null),
      "custo": new FormControl(0),
      "rotulo": new FormControl(null),
    })
  }

  ngOnInit() {
    let personagemGuardado = JSON.parse(localStorage.getItem("personagem") || '{}')

    this.meuPersonagem = Object.assign(this.meuPersonagem, personagemGuardado)
    if (personagemGuardado.armas){
      this.armas = personagemGuardado.armas
    }
  }

  ngDoCheck() {
    localStorage.setItem("personagem", JSON.stringify(this.meuPersonagem))
  }

  salvarArma() {
    this.meuPersonagem.armas!.push({
      carga: this.armaForm.value.carga,
      nome: this.armaForm.value.arma,
      municao: this.armaForm.value.ammo,
      dano: this.armaForm.value.dano,
      custo: this.armaForm.value.custo,
      rotulo: this.armaForm.value.rotulo,
    })
    this.armas = this.meuPersonagem.armas!
  }

  excluirArma(id: number){
    this.meuPersonagem.armas?.splice(id, 1)
  }
}

