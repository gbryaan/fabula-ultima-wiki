"use client"

import { useEffect, useState } from "react";
import Menu from "@/components/atoms/Menu";
import Link  from "next/link";
import { usePathname } from "next/navigation";


interface HeaderProps{
    list : string[]
    page : string
}



export default function Header({list, page} : HeaderProps){

    const [drawer, setDrawer] = useState(false)
    const currentPath = usePathname()

    useEffect(() => {
        setDrawer(false)
    },[currentPath])


    return(
        <div className="w-full px-6 py-4 flex md:justify-center gap-x-8" >

            {/* Botão de Menu */}
            <button className="md:hidden" onClick={() => setDrawer(true)}><Menu size={24}></Menu></button>


            {/* Logotipo Fabula */}
            <Link href="/" className="group flex items-center gap-2">
                {/* O ornamento (losango) que brilha ao passar o mouse */}
                <span className="text-3xl text-crimson/70 group-hover:text-crimson transition-colors mb-1">✦</span>
                
                <div className="flex flex-col">
                    <h1 className="text-4xl font-credit text-arcane group-hover:text-arcane-light transition-colors m-0 leading-none">
                        Fabula Ultima
                    </h1>
                    <span className="font-antonio text-xs tracking-[0.3em] text-slate-400 uppercase">
                        a fábula está morta !
                    </span>
                </div>
            </Link>

            {/* Drawer Lateral */}
            <div
                data-open={drawer}
                className="fixed top-0 left-0 bottom-0 right-0 md:hidden bg-linear-to-r from-parchment transition-transform data-[open=false]:-translate-x-full"
                onClick={() => setDrawer(false)}
            >
                <nav className="flex flex-col gap-1 h-full overflow-y-auto w-48 bg-parchment border-r-2  border-arcane/20 shadow-[4px_0_10px_-2px_rgba(0,0,0,0.1)]" onClick={e => e.stopPropagation()}>
                    {list.map((cls) =>(
                        <Link 
                            href={`/${page}/${cls}`} 
                            key={cls.toLowerCase()} 
                            className="font-antonio text-lg tracking-wide text-slate-600 hover:text-arcane-dark hover:bg-arcane/10 px-3 py-2 rounded transition-all flex items-center gap-2 group uppercase"
                        >
                            {cls}
                        </Link>
                    ))}
                </nav>
            </div>

        </div>
    )



}