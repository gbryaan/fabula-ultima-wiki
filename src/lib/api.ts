import fs from 'fs/promises';
import path from 'path';
import { FabulaClass, Spell, Item, Rituais, Rule } from '@/types';

const getDataPath = (fileName : string) => {
    const caminho = path.join(process.cwd(), 'src/data', fileName)
    return caminho
};

export async function getAllClasses(): Promise<FabulaClass[]> {

    const caminho = getDataPath('classes.json')
    const arquivo = await fs.readFile(caminho, 'utf-8')
    const classes = JSON.parse(arquivo) as FabulaClass[]
    return classes
}

export async function getAllSpells(): Promise<Spell[]>{

    const caminho = getDataPath('spells.json')
    const arquivo = await fs.readFile(caminho, 'utf-8')
    const magias = JSON.parse(arquivo) as Spell[]
    return magias
}

export async function getAllItems(): Promise <Item[]>{

    const caminho = getDataPath('equipamentos.json')
    const arquivo = await fs.readFile(caminho, 'utf-8')
    const equipamentos = JSON.parse(arquivo) as Item[]
    return equipamentos
    
}

export async function getItemById(id : string) : Promise<Item | undefined> {

    const items = await getAllItems()
    const item = items.find(i => i.id === id)
    return item

}

export async function getAllItemType(type : string) : Promise<Item[] | undefined> {

    const items = await getAllItems()
    const items_type = items.filter(i => i.item_type === type)
    return items_type
}


export async function getClassById(id: string): Promise<FabulaClass | undefined> {
   // TODO: Reutilizar getAllClasses() e usar .find()

    const classes = await getAllClasses()
    const classeEncontrada = classes.find( x => x.id === id)
    return classeEncontrada
}

export async function getAllClassSpell(id: string): Promise<Spell[] | undefined>{

    const spells = await getAllSpells()
    const classSpells : Spell[] | undefined = spells.filter(s => s.class_id === id)
    return classSpells
}

export async function getAllRituals(): Promise<Rituais[]> {

    const caminho = getDataPath('rituais.json')
    const arquivo = await fs.readFile(caminho, 'utf-8')
    const rituais = JSON.parse(arquivo) as Rituais[]
    return rituais
}

export async function getRitualsByDiscipline(discipline : string): Promise<Rituais[] | undefined> {

    const rituais = await getAllRituals()
    const discipline_ritual = rituais.filter(x => x.discipline === discipline)
    return discipline_ritual

}

export async function getAllRules(): Promise<Rule[]>{
    const caminho = getDataPath('regras.json')
    const arquivo = await fs.readFile(caminho, 'utf-8')
    const regras = JSON.parse(arquivo) as Rule[]
    return regras
}

export async function getRulesByCategory(category : string): Promise<Rule[] | undefined> {
    const regras = await getAllRules()
    const regras_categoria = regras.filter(x => x.category === category)
    return regras_categoria
}

export async function getRuleById(id:string):Promise<Rule | undefined>{
    const rules = await getAllRules()
    const ruleEncontrada = rules.find( x => x.id === id)
    return ruleEncontrada
}