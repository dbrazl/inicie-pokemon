export interface IStat {
  health: number;
  defense: number;
  speed: number;
  attack: number;
}

export interface IPokemon {
  name: string;
  code: number;
  image: string;
  description: string;
  height: number;
  weight: number;
  types: string[];
  stats: IStat;
}

export interface IType {
  name: string;
  url: string;
}

export interface IPokemonType {
  slot: number;
  type: IType;
}

export interface IDescriptionLanguage {
  name: string;
  url: string;
}

export interface IVersion {
  name: string;
  url: string;
}

export interface IDescription {
  flavor_text: string;
  language: IDescriptionLanguage;
  version: IVersion;
}

export enum LanguagesAvailables {
  EN = 'en',
  'JA-HRKT' = 'ja=Hrkt',
  KO = 'ko',
  'ZH-HANT' = 'zh-Hant',
  FR = 'fr',
  DE = 'DE',
  ES = 'es',
  IT = 'it',
  JA = 'JA',
  'ZH-HANS' = 'zh-Hans'
}

export interface IPokemonStat {
  name: string;
  url: string;
}

export interface IPokemonStats {
  base_stat: number;
  effort: number;
  stat: IPokemonStat;
}

export enum PokemonStat {
  HEALTH = 'hp',
  DEFENSE = 'defense',
  SPEED = 'speed',
  ATTACK = 'attack'
}
