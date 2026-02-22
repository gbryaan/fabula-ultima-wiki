import { Rituais } from "@/types"
import ReactMarkdown from 'react-markdown'

interface RitualProps{
    ritual : Rituais
}

export default function RitualCard({ritual} : RitualProps){
    return(
        <div className="border border-arcane/20 p-4 bg-parchment-dark rounded-md shadow-sm flex flex-col gap-3">

            <div key={'ritual_attributes'} className="flex justify-between items-start border-b border-arcane/20 pb-2">
                <h3 className="text-2xl font-antonio text-arcane-dark m-0 leading-none">{ritual.name}</h3>
                <span className="bg-arcane text-white px-3 py-1 rounded text-sm font-antonio tracking-widest shadow-sm">
                    {ritual.mp} MP
                </span>
            </div>

            <div key={'ritual_properties'} className="flex flex-wrap gap-2 text-sm">
                <span className="text-xs text-arcane-dark border border-arcane/30 bg-parchment font-antonio px-2 py-0.5 rounded shadow-sm uppercase tracking-wide">Alvo: {ritual.target}</span>
                <span className="text-xs text-arcane-dark border border-arcane/30 bg-parchment font-antonio px-2 py-0.5 rounded shadow-sm uppercase tracking-wide">Duração: {ritual.duration}</span>
                <span className="text-xs text-arcane-dark border border-arcane/30 bg-parchment font-antonio px-2 py-0.5 rounded shadow-sm uppercase tracking-wide">Teste: {ritual.magic_check}</span>
                <span className="text-xs text-arcane-dark border border-arcane/30 bg-parchment font-antonio px-2 py-0.5 rounded shadow-sm uppercase tracking-wide">Potência: {ritual.potency}</span>
                <span className="text-xs text-crimson border border-crimson/30 bg-crimson/5 font-antonio px-2 py-0.5 rounded shadow-sm uppercase tracking-wide">{ritual.discipline}</span>
            </div>

            <div className="prose prose-sm prose-slate max-w-none font-pt pt-2 space-y-4">
                <div><ReactMarkdown>{ritual.description}</ReactMarkdown></div>
                
                <div className="bg-parchment p-3 rounded border border-arcane/10">
                    <strong className="font-antonio text-arcane tracking-wide uppercase">Consequência:</strong>
                    <div className="mt-1"><ReactMarkdown>{ritual.consequence}</ReactMarkdown></div>
                </div>

                {ritual.great_power != "" && 
                    <div key={'ritual_great_power'} className="bg-crimson/5 p-3 rounded border border-crimson/20">
                        <strong className="font-antonio text-crimson tracking-wide uppercase">Poder Maior:</strong>
                        <div className="mt-1"><ReactMarkdown>{ritual.great_power}</ReactMarkdown></div>
                    </div>
                }
            </div>
        </div>
    )
}