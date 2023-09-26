import {Component, Input} from '@angular/core';
import {Personagem} from "../../../model/personagem";

@Component({
  selector: 'app-equipamento',
  templateUrl: './equipamento-pericia-info.component.html',
  styleUrls: ['./equipamento-pericia-info.component.css']
})
export class EquipamentoPericiaInfoComponent {
  @Input() meuPersonagem: Personagem
}
