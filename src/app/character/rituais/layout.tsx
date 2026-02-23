import Link from "next/link";
import { getAllRituals } from "@/lib/api";
import { Rituais } from "@/types";
import Header from "@/components/organisms/ResponsiveHeader"

export default async function LayoutRituals({children} : {children: React.ReactNode}){

    const rituais: Rituais[] = await getAllRituals();
    const all_disciplines = rituais.map(x => x.discipline);
    const disciplines = new Set(all_disciplines);
    const disciplines_list = [...disciplines];

    return(
        <div className="flex flex-col min-h-screen bg-parchment">
            
            <header className="flex justify-center border-b-2 border-arcane/20 bg-parchment-dark sticky top-0 z-10 shadow-sm">
                <Header list={disciplines_list} page="rituais"></Header>
            </header>

            <div className="flex flex-1">
                {/* SIDEBAR PADRONIZADA */}
                <aside className="hidden md:block w-64 shrink-0 flex flex-col p-6 border-r-2 border-arcane/10 bg-parchment-dark/40 shadow-[inset_-4px_0_10px_rgba(0,0,0,0.02)]">
                    
                    <h2 className="text-xl font-antonio text-arcane-dark uppercase tracking-widest mb-4 border-b border-crimson/20 pb-2">
                        Disciplinas
                    </h2>
                    
                    <nav className="flex flex-col gap-1 h-full">
                        {disciplines_list.map((cls) =>(
                            <Link 
                                href={`/character/rituais/${cls}`} 
                                key={cls.toLowerCase()} 
                                className="font-antonio text-lg tracking-wide text-slate-600 hover:text-arcane-dark hover:bg-arcane/10 px-3 py-2 rounded transition-all flex items-center gap-2 group uppercase"
                            >
                                <span className="text-crimson/0 group-hover:text-crimson transition-colors text-sm">▶</span>
                                {cls}
                            </Link>
                        ))}
                    </nav>
                </aside>

                <main className="flex-1">{children}</main>
            </div>
        </div>
    )   
}