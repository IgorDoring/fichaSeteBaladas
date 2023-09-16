import {Component} from '@angular/core';
import {Arma} from "../model/arma";
import {Personagem} from "../model/personagem";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  armas: Arma[] = [
    {nome: "Rifle", carga: 2, custo: 35, dano: "2d6", municao: 8, rotulo: "preciso"},
    {nome: "Rifle", carga: 2, custo: 35, dano: "2d6", municao: 8, rotulo: "preciso"}
  ]

  meuPersonagem: Personagem = {};

  origem = ""
  arquetipo = ""
  profissao = ""
  nivel = 0
  residencia = ""
  personalidade = ""
  motivacao = ""
  idade = 0
  sexo = ""
  peso = 0
  altura = 0
  experiencia = 0
  defesa = 0
  stress = 0
  saude = 0
  vigor = 0
  proficiencia = 0
  determinacao = 0
  moralidade = 0
  conhecimentos = ""
  equipamento = ""
  dinheiro = 0
  ouro = 0

  cargaLeve = 0
  cargaMedia = 0
  cargaPesada = 0
  cargaMaxima = 0
  corpo = 0
  agilidade = 0
  astucia = 0
  presenca = 0
  fortitude = 0
  reflexos = 0
  iniciativa = 0
  vontade = 0


  constructor() {

  }

  ngOnInit() {

  }

  saveChanges() {
    this.meuPersonagem = {
      origem: this.origem,
      arquetipo: this.arquetipo,
      profissao: this.profissao,
      nivel: this.nivel,
      residencia: this.residencia,
      personalidade: this.personalidade,
      motivacao: this.motivacao,
      idade: this.idade,
      sexo: this.sexo,
      peso: this.peso,
      experiencia: this.experiencia,
      defesa: this.defesa,
      altura: this.altura,
      stress: this.stress,
      saude: this.saude,
      vigor: this.vigor,
      proficiencia: this.proficiencia,
      determinacao: this.determinacao,
      moralidade: this.moralidade,
      conhecimentos: this.conhecimentos,
      equipamento: this.equipamento,
      dinheiro: this.dinheiro,
      ouro: this.ouro,
      atributos:{
        corpo: this.corpo,
        agilidade: this.agilidade,
        astucia: this.astucia,
        presenca: this.presenca,
      },
      salvaguardas:{
        fortitude: this.fortitude,
        reflexos: this.reflexos,
        iniciativa: this.iniciativa,
        vontade: this.vontade,
      },
      carga:{
        cargaLeve: this.cargaLeve,
        cargaMedia: this.cargaMedia,
        cargaPesada: this.cargaPesada,
        cargaMaxima: this.cargaMaxima,
      },
      armas: this.armas
    }
    console.log(this.meuPersonagem)
  }
}

