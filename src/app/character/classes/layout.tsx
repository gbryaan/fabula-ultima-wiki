import Link from "next/link";
import { getAllClasses } from "@/lib/api";
import { FabulaClass } from "@/types";
import Header from "@/components/organisms/ResponsiveHeader";

export default async function LayoutClasses({children} : {children: React.ReactNode}){
    const classes : FabulaClass[] = await getAllClasses()
    const all_class_name = classes.map(x => x.id)
    const classes_name = new Set(all_class_name)
    const classes_list = [...classes_name]    

    return(

        <div className="flex flex-col min-h-screen bg-parchment">
            

            <header className="flex justify-center border-b-2 border-arcane/20 bg-parchment-dark  sticky top-0 z-10 shadow-sm">
                <Header list={classes_list} page="character/classes"></Header>
            </header>

            <div className="flex flex-1">
                {/* SIDEBAR: Painel JRPG */}
                <aside className="hidden md:block w-64 flex-shrink-0 flex flex-col p-6 border-r-2 border-arcane/10 bg-parchment-dark/40 shadow-[inset_-4px_0_10px_rgba(0,0,0,0.02)]">
                    
                    <h2 className="text-xl font-antonio text-arcane-dark uppercase tracking-widest mb-4 border-b border-crimson/20 pb-2">
                        Classes
                    </h2>
                    
                    <nav className="flex flex-col gap-1">
                        {classes.map((cls) =>(
                            <Link 
                                href={`/character/classes/${cls.id}`} 
                                key={cls.id} 
                                className="font-antonio text-lg tracking-wide text-slate-600 hover:text-arcane-dark hover:bg-arcane/10 px-3 py-2 rounded transition-all flex items-center gap-2 group"
                            >

                                <span className="text-crimson/0 group-hover:text-crimson transition-colors text-sm">▶</span>
                                {cls.name}
                            </Link>
                        ))}
                    </nav>
                </aside>

                <main className="flex-1">{children}</main>                
            </div>
        </div>
    )   
}