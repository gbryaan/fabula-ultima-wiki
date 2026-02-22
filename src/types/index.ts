// src/types/index.ts

// 1. Tipos Utilitários
export type SourceBook = 'Livro Básico' | 'Atlas: High Fantasy' | 'Atlas: Natural Fantasy';
export type EntityType = 'class' | 'spell' | 'ritual' | 'skill' |'item  ' | 'rule';

export type RuleCategory = 
  | 'resolucao_acoes'
  | 'personagem' 
  | 'combate_conflito' 
  | 'magia_rituais' 
  | 'economia_pontos'
  | 'mundo_exploracao'

// 2. Interface Base (O contrato para o RF03 - Busca Global)
export interface BaseEntity {
  id: string;          // Slug único (ex: "acceleration", "wayfarer")
  name: string;        // Nome de exibição (ex: "Aceleração")
  type: EntityType;    // Discriminador CRUCIAL para a UI
  source: SourceBook;
  description: string; // Markdown permitido
}

export interface Rituais extends BaseEntity{
  type:'ritual';
  mp: number;
  target: string;
  duration: string;
  magic_check: string;
  discipline: string;
  potency: string;
  consequence: string; // consequencia do ritual
  great_power: string; // a parte que fala with great power...

}


export interface Rule extends BaseEntity{
  type : 'rule'
  category : RuleCategory;
}

// 3. Definições de Classe
export interface ClassBenefit {
  text: string;
  stats_bonus?: {
    hp?: number;
    mp?: number;
    ip?: number;
  };
}

export interface ClassSkill {
  name: string;
  max_level: number;
  description: string;
}

export interface BaseItem extends BaseEntity{

  item_type: 'weapon' | 'armor' | 'shield' | 'accessory'
  marcial : boolean;
  cost : number;
  special_ability : string;
  magic : boolean;

}

export interface BasicWeapons extends BaseItem {

  item_type : 'weapon'
  category : {
    weapon_category : string;
    precision_dice : string;
    damage: string;
    hand_count: string;
    range : string;
  }
}

export interface BasicDefense extends BaseItem {

  item_type : 'armor' | 'shield'
  category :{
    defense_dice? : string; // Qual o dado: por exemplo [AST]
    defense_modificator: number; // O modificador que fica ao lado do dado
    magic_defense_dice : string; // Qual o dado: por exemplo [AST]
    magic_defense_modificator: number; // O modificador que fica ao lado do dado
    iniciative : number;
  }
}

export type Item = BasicWeapons | BasicDefense

export interface FabulaClass extends BaseEntity {
  type: 'class';
  quote?: string;
  page_reference?: number; // Mudado de 'page' para ser mais descritivo
  questions: string[];
  free_benefits: ClassBenefit;
  skills: ClassSkill[];
}

// 4. Definições de Magia (Resolvendo o problema do Custo)
export interface Spell extends BaseEntity {
  type: 'spell';
  class_id: string;    // Referência à classe dona (ex: "entropist")
  duration: string;
  target: string;
  
  // SOLUÇÃO PARA O CUSTO MISTO:
  mp_cost: number;        // Usado para filtros numéricos (ex: filtro < 10 MP)
  mp_cost_text?: string;  // Usado APENAS para exibir na tela (ex: "10 x A")
  // Se mp_cost_text existir, mostre ele. Se não, mostre mp_cost.
  
  is_offensive: boolean;  // Identificado pelo (r) na descrição original
}

// 5. União para o Search Engine
export type FabulaEntry = FabulaClass | Spell;