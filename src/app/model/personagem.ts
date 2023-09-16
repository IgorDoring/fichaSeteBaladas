import {Arma} from "./arma";

export interface Personagem {
  id?: number,
  origem?: string,
  arquetipo?: string,
  profissao?: string,
  nivel?: number,
  residencia?: string,
  personalidade?: string,
  motivacao?: string,
  idade?: number,
  sexo?: string,
  peso?: number,
  altura?: number,
  atributos?: {
    corpo?:number,
    agilidade?:number,
    astucia?:number,
    presenca?:number,
  },
  salvaguardas?: {
    fortitude?:number,
    reflexos?:number,
    iniciativa?:number,
    vontade?:number,
  },
  experiencia?: number,
  defesa?: number,
  stress?: number,
  saude?: number,
  vigor?: number,
  proficiencia?: number,
  determinacao?: number,
  moralidade?: number,
  conhecimentos?: string,
  equipamento?: string,
  dinheiro?: number,
  ouro?: number,
  carga?: {
    cargaLeve?:number,
    cargaMedia?:number,
    cargaPesada?:number,
    cargaMaxima?:number,
  },
  armas?: Arma[]
}
