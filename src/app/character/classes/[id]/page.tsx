import { getClassById, getAllClassSpell} from "@/lib/api"
import { notFound } from "next/navigation"
import SpellCard from "@/components/molecules/SpellCard"
import SkillCard from "@/components/molecules/SkillCard"
import type { Metadata } from "next";

interface Props {
  params: { id: string };
}

export async function generateMetadata({params} : Props){

    const slug = (await params).id
    const classe = await getClassById(slug)

    return {title : classe?.name}

}


export default async function ClassPage({params} : Props){
    const slug = (await params).id
    const classe = await getClassById(slug)

    if(!classe){
        notFound()
    }

    const spells = await getAllClassSpell(slug)

    return(
        <div className="p-8 space-y-12 max-w-5xl mx-auto">
            
            {/* 1. CABEÇALHO DA CLASSE */}
            <header className="space-y-4">
                <div className="border-b-2 border-arcane/20 pb-4">
                    <h1 className="text-6xl font-credit text-arcane mb-2">{classe.name}</h1>
                    <span className="inline-block bg-crimson/10 text-crimson font-antonio px-2 py-1 rounded text-sm uppercase tracking-widest shadow-sm">
                        Livro: {classe.source}
                    </span>
                </div>

                <blockquote className="border-l-4 border-crimson/40 pl-4 py-2 italic text-slate-600 font-pt text-lg bg-crimson/5 rounded-r-md pr-4">
                    "{classe.quote}"
                </blockquote>

                <div className="prose prose-slate max-w-none font-pt text-lg leading-relaxed pt-2">
                    <p>{classe.description}</p>
                </div>
            </header>

            {/* 2. BENEFÍCIOS LIVRES */}
            <section className="bg-parchment-dark p-6 rounded-lg border border-arcane/10 shadow-sm">
                <h2 className="text-2xl font-antonio text-arcane-dark uppercase tracking-widest mb-3 border-b border-arcane/10 pb-2">
                    Benefícios Livres
                </h2>
                <div className="prose prose-slate max-w-none font-pt">
                    <p>{classe.free_benefits.text}</p>
                </div>
            </section>

            {/* 3. HABILIDADES (SKILLS) */}
            <section className="space-y-6">
                <h2 className="text-3xl font-antonio text-arcane-dark uppercase tracking-widest border-b-2 border-crimson/30 pb-2 flex items-center gap-3">
                    <span className="text-crimson text-2xl">✦</span> Habilidades de Classe
                </h2>
                
                {/* Grid de 2 colunas para não esticar demais os cards em telas grandes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {classe.skills.map(skill => (
                        <SkillCard skill={skill} key={skill.name}></SkillCard>
                    ))}
                </div>
            </section>

            {/* 4. MAGIAS (Condicional) */}
            {(spells ?? []).length > 0 && 
            <section className="space-y-6">
                <h2 className="text-3xl font-antonio text-arcane-dark uppercase tracking-widest border-b-2 border-crimson/30 pb-2 flex items-center gap-3">
                    <span className="text-crimson text-2xl">✦</span> Magias
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {spells?.map(spell => (
                        <SpellCard key={spell.id} spell={spell}></SpellCard>
                    ))}              
                </div>             
            </section>
            }
        </div>
    )
}