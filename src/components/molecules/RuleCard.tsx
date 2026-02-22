import { Rule } from "@/types";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface RuleProps {
    rule: Rule
}

export default function RuleCard({ rule }: RuleProps) {
    return (
        <article className="bg-parchment-dark/30 border border-arcane/20 rounded-lg p-6 md:p-12 shadow-sm w-full max-w-4xl mx-auto my-8">
            
            {/* Cabeçalho da Regra */}
            <header className="mb-8 border-b-2 border-crimson/30 pb-4 flex items-center gap-4">
                <span className="text-4xl text-crimson/80">✦</span>
                <h1 className="text-5xl font-credit text-arcane m-0 leading-none">{rule.name}</h1>
            </header>

            {/* Corpo do Texto (Markdown Estilizado) 
                Aqui mora a verdadeira magia do CSS. Injetamos o nosso Design System
                DIRETAMENTE dentro das tags geradas pelo ReactMarkdown.
            */}
            <div className="prose prose-slate prose-lg max-w-none font-pt leading-relaxed
                            
                            prose-headings:font-antonio prose-headings:text-arcane-dark prose-headings:uppercase prose-headings:tracking-widest
                            prose-h2:border-b prose-h2:border-arcane/10 prose-h2:pb-2 prose-h2:mt-10
                            prose-h3:text-crimson prose-h3:mt-8
                            
                            prose-strong:text-arcane-dark prose-strong:font-bold
                            prose-a:text-crimson hover:prose-a:text-crimson-light
                            
                            prose-blockquote:border-l-4 prose-blockquote:border-crimson/40 prose-blockquote:bg-crimson/5 prose-blockquote:font-pt prose-blockquote:not-italic prose-blockquote:py-1 prose-blockquote:pr-4
                            
                            prose-table:border-collapse prose-table:w-full prose-table:my-8
                            prose-th:bg-arcane/10 prose-th:p-3 prose-th:font-antonio prose-th:uppercase prose-th:text-arcane-dark
                            prose-td:p-3 prose-td:border-b prose-td:border-arcane/10 prose-td:text-slate-700">
                
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {rule.description}
                </ReactMarkdown>

            </div>
        </article>
    )
}