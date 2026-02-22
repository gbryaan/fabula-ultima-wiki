import Link from "next/link";

export default function Header() {
    return (
        /* Padding suave e centralizado/alinhado dependendo do layout */
        <div className="w-full px-6 py-4 flex justify-center">
            
            <Link href="/" className="group flex items-center gap-2">
                {/* O ornamento (losango) que brilha ao passar o mouse */}
                <span className="text-3xl text-crimson/70 group-hover:text-crimson transition-colors mb-1">✦</span>
                
                <div className="flex flex-col">
                    <h1 className="text-4xl font-credit text-arcane group-hover:text-arcane-light transition-colors m-0 leading-none">
                        Fabula Ultima
                    </h1>
                    <span className="font-antonio text-xs tracking-[0.3em] text-slate-400 uppercase">
                        Será essa a última fábula?
                    </span>
                </div>
            </Link>
            
        </div>
    )
}