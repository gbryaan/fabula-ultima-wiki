import Link from "next/link"
import Header from "@/components/organisms/Header"

export default function HomePage(){
    const character_pages = ['equipamentos']
    const rules_pages = [
        {"nome" : "Combate", "pagina" : "combate_conflito/iniciativa"},
        {"nome" : "Magia e Rituais", "pagina" : "magia_rituais/feiticos"},
        {"nome" : "Mundo e Exploração", "pagina" : "mundo_exploracao/pontos-inventario"},
        {"nome" : "Personagem", "pagina" : "personagem/atributos"},
        {"nome" : "Ações", "pagina" : "resolucao_acoes/testes"},
        {"nome" : "Opcionais", "pagina" : "opcionais/sucesso-custoso"}
    ]

    return(

        <div>
                <header className="flex justify-center border-b-2 border-arcane/20 bg-parchment-dark  sticky top-0 z-10 shadow-sm">
                    <Header></Header>
                </header>   

    <main className='flex flex-col items-center min-h-screen bg-parchment py-12 px-4'>

            

                <div className="w-full max-w-5xl flex flex-col items-center space-y-20">


                    
                    {/* --- SEÇÃO: PERSONAGEM --- */}
                    <section className="flex flex-col items-center w-full">
                        <h2 className="text-4xl font-antonio text-arcane-dark tracking-widest uppercase mb-12 border-b-2 border-crimson/30 pb-2 flex items-center gap-3">
                            <span className="text-crimson">✦</span> Personagem
                        </h2>
                        
                        {/* flex-wrap garante que não quebre se a tela for menor */}
                        <ul className="flex flex-wrap justify-center gap-12">
                            <li key={"classe"}>
                                <Link href={`/character/classes/andarilho`} className="flex flex-col items-center gap-4 group">
                                    <div className="w-24 h-24 rounded-full border-2 border-arcane/20 bg-parchment-dark shadow-sm flex items-center justify-center group-hover:border-crimson group-hover:bg-crimson/5 transition-all duration-300 transform group-hover:-translate-y-1">
                                        <span className="text-3xl text-arcane/30 group-hover:text-crimson/60 transition-colors">⚔️</span>
                                    </div>
                                    <span className="font-antonio tracking-widest text-lg text-slate-600 uppercase group-hover:text-arcane-dark transition-colors">Classes</span>
                                </Link>
                            </li>

                            <li key={"ritual"}>
                                <Link href={`/character/rituais/Chimerism`} className="flex flex-col items-center gap-4 group">
                                    <div className="w-24 h-24 rounded-full border-2 border-arcane/20 bg-parchment-dark shadow-sm flex items-center justify-center group-hover:border-crimson group-hover:bg-crimson/5 transition-all duration-300 transform group-hover:-translate-y-1">
                                        <span className="text-3xl text-arcane/30 group-hover:text-crimson/60 transition-colors">✨</span>
                                    </div>
                                    <span className="font-antonio tracking-widest text-lg text-slate-600 uppercase group-hover:text-arcane-dark transition-colors">Rituais</span>
                                </Link>
                            </li>
                            
                            {character_pages.map(c => (
                            <li key={c}>
                                <Link href={`/character/${c}`} className="flex flex-col items-center gap-4 group">
                                    <div className="w-24 h-24 rounded-full border-2 border-arcane/20 bg-parchment-dark shadow-sm flex items-center justify-center group-hover:border-crimson group-hover:bg-crimson/5 transition-all duration-300 transform group-hover:-translate-y-1">
                                        <span className="text-3xl text-arcane/30 group-hover:text-crimson/60 transition-colors">🛡️</span>
                                    </div>
                                    <span className="font-antonio tracking-widest text-lg text-slate-600 uppercase group-hover:text-arcane-dark transition-colors">{c}</span>
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </section>

                    {/* --- SEÇÃO: REGRAS --- */}
                    <section className="flex flex-col items-center w-full">
                        <h2 className="text-4xl font-antonio text-arcane-dark tracking-widest uppercase mb-12 border-b-2 border-crimson/30 pb-2 flex items-center gap-3">
                            <span className="text-crimson">✦</span> Regras
                        </h2>
                        
                        <ul className="flex flex-wrap justify-center gap-12 max-w-4xl">
                            {rules_pages.map(c => (
                            <li key={c.nome}>
                                <Link href={`/rules/${c.pagina}`} className="flex flex-col items-center gap-4 group text-center w-32">
                                    <div className="w-24 h-24 rounded-full border-2 border-arcane/20 bg-parchment-dark shadow-sm flex items-center justify-center group-hover:border-crimson group-hover:bg-crimson/5 transition-all duration-300 transform group-hover:-translate-y-1">
                                        <span className="text-3xl text-arcane/30 group-hover:text-crimson/60 transition-colors">📜</span>
                                    </div>
                                    <span className="font-antonio tracking-widest text-base text-slate-600 uppercase group-hover:text-arcane-dark transition-colors leading-tight">{c.nome}</span>
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </section>
                    
                </div>
            </main>
        </div>
        
    )
}