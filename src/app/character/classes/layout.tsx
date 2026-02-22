import Link from "next/link";
import { getAllClasses } from "@/lib/api";
import { FabulaClass } from "@/types";
import Header from "@/components/organisms/Header";

export default async function LayoutClasses({children} : {children: React.ReactNode}){
    const classes : FabulaClass[] = await getAllClasses()

    return(
        /* O fundo principal da tela inteira agora é parchment (pergaminho) */
        <div className="flex flex-col min-h-screen bg-parchment">
            
            {/* Transformei o header em 'sticky' para ele grudar no topo ao rolar a página */}
            <header className="flex justify-center border-b-2 border-arcane/20 bg-parchment-dark  sticky top-0 z-10 shadow-sm">
                <Header></Header>
            </header>

            <div className="flex flex-1">
                {/* SIDEBAR: Painel JRPG */}
                <aside className="w-64 flex-shrink-0 flex flex-col p-6 border-r-2 border-arcane/10 bg-parchment-dark/40 shadow-[inset_-4px_0_10px_rgba(0,0,0,0.02)]">
                    
                    <h2 className="text-xl font-antonio text-arcane-dark uppercase tracking-widest mb-4 border-b border-crimson/20 pb-2">
                        Classes
                    </h2>
                    
                    <nav className="flex flex-col gap-1">
                        {classes.map((cls) =>(
                            <Link 
                                href={`/character/classes/${cls.id}`} 
                                key={cls.id} 
                                /* O 'group' avisa que os filhos dessa tag vão reagir quando o mouse passar aqui */
                                className="font-antonio text-lg tracking-wide text-slate-600 hover:text-arcane-dark hover:bg-arcane/10 px-3 py-2 rounded transition-all flex items-center gap-2 group"
                            >
                                {/* A setinha nasce transparente (crimson/0) e fica sólida (crimson) no hover */}
                                <span className="text-crimson/0 group-hover:text-crimson transition-colors text-sm">▶</span>
                                {cls.name}
                            </Link>
                        ))}
                    </nav>
                </aside>

                {/* O conteúdo principal renderiza aqui dentro */}
                <main className="flex-1">{children}</main>                
            </div>
        </div>
    )   
}