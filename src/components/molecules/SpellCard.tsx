import { Spell } from "@/types"
import ReactMarkdown from "react-markdown"

interface SpellCardProps{
    spell : Spell
}

export default function SpellCard({spell} : SpellCardProps){
    const displayMp = spell.mp_cost_text ? spell.mp_cost_text : spell.mp_cost

    return(
        <div className="border border-arcane/20 p-4 bg-parchment-dark rounded-md shadow-sm flex flex-col gap-3">
            
            <div className="flex justify-between items-start border-b border-arcane/20 pb-2">
                <h3 className="text-2xl font-antonio text-arcane-dark m-0 leading-none">{spell.name}</h3>
                <span className="bg-arcane text-white px-3 py-1 rounded text-sm font-antonio tracking-widest shadow-sm">
                    {displayMp} MP
                </span>
            </div>

            <div className="flex flex-wrap gap-2">
                <span className="text-xs text-arcane-dark border border-arcane/30 bg-parchment font-antonio px-2 py-0.5 rounded shadow-sm uppercase tracking-wide">
                    Alvo: {spell.target}
                </span>
                <span className="text-xs text-arcane-dark border border-arcane/30 bg-parchment font-antonio px-2 py-0.5 rounded shadow-sm uppercase tracking-wide">
                    Duração: {spell.duration}
                </span>
            </div>

            {/* O prose-sm e prose-slate garantem que o markdown fique bonito e use as cores certas */}
            <div className="prose prose-sm prose-slate max-w-none font-pt pt-1">
                <ReactMarkdown>{spell.description}</ReactMarkdown>
            </div>
        </div>
    )
}