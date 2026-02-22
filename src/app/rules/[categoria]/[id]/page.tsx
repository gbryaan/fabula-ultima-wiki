import RuleCard from "@/components/molecules/RuleCard";
import { getRuleById } from "@/lib/api";
import { notFound } from "next/navigation";

interface Props {
    // Agora o Next.js injeta esses dois valores pela URL
    params: { 
        categoria: string;
        id: string;
    }
}

// Renomeado para refletir o comportamento global e dinâmico
export default async function RulePage({ params }: Props) {
    
    const slug = (await params).id;
    const rule = await getRuleById(slug);
    
    if (!rule) {
        notFound();
    }

    return (
        /* O RuleCard já tem 'mx-auto' e 'max-w-4xl' nele (que fizemos antes).
           Aqui, só precisamos garantir que a div ocupe todo o espaço e tenha
           um padding lateral (px-4 md:px-8) para não colar na borda no celular.
        */
        <div className="w-full px-4 md:px-8 py-4">
            <RuleCard rule={rule} />
        </div>
    )
}