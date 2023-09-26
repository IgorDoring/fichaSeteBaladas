import {Component, Input} from '@angular/core';
import {Personagem} from "../../../model/personagem";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-armas',
  templateUrl: './armas.component.html',
  styleUrls: ['./armas.component.css']
})
export class ArmasComponent {
  @Input() meuPersonagem: Personagem
  armaForm: FormGroup

  constructor() {

  }

  ngOnInit(){
    this.armaForm = new FormGroup({
      "arma": new FormControl(null, [Validators.nullValidator, Validators.required]),
      "ammo": new FormControl(0, [Validators.nullValidator, Validators.min(0)]),
      "dano": new FormControl(null, [Validators.nullValidator, Validators.required]),
      "carga": new FormControl(0, [Validators.nullValidator, Validators.min(0)]),
      "custo": new FormControl(0, [Validators.nullValidator, Validators.min(0)]),
      "rotulo": new FormControl(null, [Validators.nullValidator, Validators.required]),
    })
  }

  salvarArma() {
    if (this.armaForm.valid) {
      this.meuPersonagem.armas!.push({
        carga: this.armaForm.value.carga,
        nome: this.armaForm.value.arma,
        municao: this.armaForm.value.ammo,
        dano: this.armaForm.value.dano,
        custo: this.armaForm.value.custo,
        rotulo: this.armaForm.value.rotulo,
        tiro: 0
      })
    }
  }

  atirarArma(id: number){
    if (this.meuPersonagem.armas![id].tiro < this.meuPersonagem.armas![id].municao && this.meuPersonagem.municaoTotal! > 0){
      this.meuPersonagem.armas![id].tiro!++
      this.meuPersonagem.municaoTotal!--
    }

  }

  recarregarArma(id: number){
    if (confirm("Tem certeza que deseja recarregar esta arma?"))
      this.meuPersonagem.armas![id].tiro = 0

  }

  excluirArma(id: number) {
    if (confirm("Tem certeza que deseja excluir esta arma?"))
      this.meuPersonagem.armas?.splice(id, 1)
  }
}
