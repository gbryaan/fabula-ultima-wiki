import Link from "next/link";
import { getRulesByCategory } from "@/lib/api";
import Header from "@/components/organisms/ResponsiveHeader";

interface Props {
    children : React.ReactNode
    params : Promise<{categoria : string}>
}

const CATEGORY_NAMES: Record<string, string> = {
    "combate": "Combate",
    "magia_rituais": "Magia e Rituais",
    "mundo_exploracao": "Mundo e Exploração",
    "personagem": "Personagem",
    "resolucao_acoes": "Resolução de Ações",
    "opcionais" : "Regras Opcionais"
};

export default async function LayoutRules({children, params} : Props){

    const slug = (await params).categoria
    let rules = await getRulesByCategory(slug)
    if (!rules) {
        rules = []
    }
    const rules_name = rules.map(x => x.id)
    const displayTitle = CATEGORY_NAMES[slug] || slug.replace(/_/g, ' ');


    return(
        <div className="flex flex-col min-h-screen bg-parchment">
            
            <header className="flex justify-center border-b-2 border-arcane/20 bg-parchment-dark sticky top-0 z-10 shadow-sm">
                <Header list={rules_name} page={`rules/${slug}`}></Header>
            </header>

            <div className="flex flex-1">
                {/* SIDEBAR PADRONIZADA */}
                <aside className="hidden md:block w-64 flex-shrink-0 flex flex-col p-6 border-r-2 border-arcane/10 bg-parchment-dark/40 shadow-[inset_-4px_0_10px_rgba(0,0,0,0.02)]">
                    
                    {/* Título dinâmico baseado na URL */}
                    <h2 className="text-xl font-antonio text-arcane-dark uppercase tracking-widest mb-4 border-b border-crimson/20 pb-2">
                        {displayTitle}
                    </h2>
                    
                    <nav className="flex flex-col gap-1">
                        {rules?.map((regra) =>(

                            <Link 
                                href={`/rules/${slug}/${regra.id}`} 
                                key={regra.id} 
                                className="font-antonio text-lg tracking-wide text-slate-600 hover:text-arcane-dark hover:bg-arcane/10 px-3 py-2 rounded transition-all flex items-center gap-2 group"
                            >
                                <span className="text-crimson/0 group-hover:text-crimson transition-colors text-sm">▶</span>
                                {regra.name}
                            </Link>
                        ))}
                    </nav>
                </aside>

                <main className="flex-1">{children}</main>                
            </div>
        </div>
    )   
}