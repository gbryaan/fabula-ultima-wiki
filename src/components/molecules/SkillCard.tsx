import { ClassSkill } from "@/types";
import ReactMarkdown from "react-markdown";

interface SkillCardProps{
    skill : ClassSkill
}

export default function SkillCard( {skill}: SkillCardProps){
    return(
        <div className="border border-arcane/20 p-4 bg-parchment-dark rounded-md shadow-sm flex flex-col gap-3">
            <div className="flex justify-between items-center border-b border-arcane/20 pb-2">
                <h3 className="text-xl font-antonio text-arcane-dark m-0 leading-none">{skill.name}</h3>
                <span className="text-sm font-antonio text-crimson tracking-widest bg-crimson/10 px-2 py-0.5 rounded"> 
                    ⭐ MÁX {skill.max_level}
                </span>
            </div>
            
            <div className="prose prose-sm prose-slate max-w-none font-pt">
                <ReactMarkdown>{skill.description}</ReactMarkdown>
            </div>
        </div>
    )
}