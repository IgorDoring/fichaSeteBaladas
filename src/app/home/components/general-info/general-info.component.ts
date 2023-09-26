import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Personagem} from "../../../model/personagem";

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent {
  @Input() meuPersonagem: Personagem
}
