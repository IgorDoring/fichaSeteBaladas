import {Component, Input} from '@angular/core';
import {Personagem} from "../../../model/personagem";

@Component({
  selector: 'app-atributos',
  templateUrl: './atributos.component.html',
  styleUrls: ['./atributos.component.css']
})
export class AtributosComponent {
  @Input() meuPersonagem: Personagem
}
