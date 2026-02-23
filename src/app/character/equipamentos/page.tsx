import { getAllItemType } from "@/lib/api";
import Header from "@/components/organisms/Header";

export default async function EquipmentsPage() {
  const weapons = await getAllItemType('weapon');
  const armor = await getAllItemType('armor');
  const shields = await getAllItemType('shield');

  return (
    <div className="flex flex-col min-h-screen bg-parchment">
      
      <header className="flex justify-center border-b-2 border-arcane/20 bg-parchment-dark sticky top-0 z-10 shadow-sm">
        <Header />
      </header>

      <main className="w-full max-w-7xl mx-auto p-4 md:p-8 space-y-12">
        
        {/* TÍTULO DA PÁGINA */}
        <div className="border-b-2 border-arcane/20 pb-4 mb-8 mt-4">
            <h1 className="text-6xl font-credit text-arcane mb-2 text-center md:text-left">Arsenal & Equipamentos</h1>

        </div>

        {/* --- SEÇÃO: ARMAS --- */}
        <section>
          <h2 className="text-3xl font-antonio text-arcane-dark uppercase tracking-widest border-b-2 border-crimson/30 pb-2 mb-4 flex items-center gap-3">
              <span className="text-crimson text-2xl">✦</span> Armas Básicas
          </h2>
          
          <div className="bg-parchment-dark/50 rounded-lg shadow-sm border border-arcane/20 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-200">
              <thead className="bg-arcane/10 border-b-2 border-arcane/20">
                <tr>
                  <th className="p-3 font-antonio text-arcane-dark tracking-wide uppercase">Arma</th>
                  <th className="p-3 font-antonio text-arcane-dark tracking-wide uppercase w-24">Custo</th>
                  <th className="p-3 font-antonio text-arcane-dark tracking-wide uppercase w-32">Precisão</th>
                  <th className="p-3 font-antonio text-arcane-dark tracking-wide uppercase w-32">Dano</th>
                  <th className="p-3 font-antonio text-arcane-dark tracking-wide uppercase w-24">Mãos</th>
                  <th className="p-3 font-antonio text-arcane-dark tracking-wide uppercase w-32">Alcance</th>
                  <th className="p-3 font-antonio text-arcane-dark tracking-wide uppercase">Efeito Especial</th>
                </tr>
              </thead>
              <tbody className="text-sm font-pt">
                {weapons?.map((item) => {
                  if (item.item_type !== 'weapon') return null;
                  return (
                    <tr key={item.id} className="border-b border-arcane/10 hover:bg-arcane/5 transition-colors">
                      <td className="p-3 font-bold text-slate-900 text-base">{item.name}</td>
                      <td className="p-3 font-antonio text-base text-crimson tracking-wider">{item.cost}z</td>
                      <td className="p-3 text-slate-700">{item.category.precision_dice}</td>
                      <td className="p-3 text-slate-700">{item.category.damage}</td>
                      <td className="p-3 text-slate-700">{item.category.hand_count}</td>
                      <td className="p-3 text-slate-700">{item.category.range}</td>
                      <td className="p-3 text-slate-500 italic">{item.special_ability || "-"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* --- SEÇÃO: ARMADURAS --- */}
        <section>
          <h2 className="text-3xl font-antonio text-arcane-dark uppercase tracking-widest border-b-2 border-crimson/30 pb-2 mb-4 flex items-center gap-3">
              <span className="text-crimson text-2xl">✦</span> Armaduras Básicas
          </h2>
          
          <div className="bg-parchment-dark/50 rounded-lg shadow-sm border border-arcane/20 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead className="bg-arcane/10 border-b-2 border-arcane/20">
                <tr>
                  <th className="p-3 font-antonio text-arcane-dark tracking-wide uppercase">Armadura</th>
                  <th className="p-3 font-antonio text-arcane-dark tracking-wide uppercase w-24">Custo</th>
                  <th className="p-3 font-antonio text-arcane-dark tracking-wide uppercase w-32">Defesa</th>
                  <th className="p-3 font-antonio text-arcane-dark tracking-wide uppercase w-32">Def. Mágica</th>
                  <th className="p-3 font-antonio text-arcane-dark tracking-wide uppercase w-24">Iniciativa</th>
                  <th className="p-3 font-antonio text-arcane-dark tracking-wide uppercase">Efeito Especial</th>
                </tr>
              </thead>
              <tbody className="text-sm font-pt">
                {armor?.map((item) => {
                  if (item.item_type !== 'armor') return null;
                  return (
                    <tr key={item.id} className="border-b border-arcane/10 hover:bg-arcane/5 transition-colors">
                      <td className="p-3 font-bold text-slate-900 text-base">{item.name}</td>
                      <td className="p-3 font-antonio text-base text-crimson tracking-wider">{item.cost}z</td>
                      <td className="p-3 text-slate-700">
                        {item.category.defense_dice} {item.category.defense_modificator > 0 ? `+${item.category.defense_modificator}` : ''}
                      </td>
                      <td className="p-3 text-slate-700">
                        {item.category.magic_defense_dice} {item.category.magic_defense_modificator > 0 ? `+${item.category.magic_defense_modificator}` : ''}
                      </td>
                      <td className="p-3 text-slate-700">{item.category.iniciative}</td>
                      <td className="p-3 text-slate-500 italic">{item.special_ability || "-"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* --- SEÇÃO: ESCUDOS --- */}
        <section>
          <h2 className="text-3xl font-antonio text-arcane-dark uppercase tracking-widest border-b-2 border-crimson/30 pb-2 mb-4 flex items-center gap-3">
              <span className="text-crimson text-2xl">✦</span> Escudos Básicos
          </h2>
          
          <div className="bg-parchment-dark/50 rounded-lg shadow-sm border border-arcane/20 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead className="bg-arcane/10 border-b-2 border-arcane/20">
                <tr>
                  <th className="p-3 font-antonio text-arcane-dark tracking-wide uppercase">Escudo</th>
                  <th className="p-3 font-antonio text-arcane-dark tracking-wide uppercase w-24">Custo</th>
                  <th className="p-3 font-antonio text-arcane-dark tracking-wide uppercase w-32">Defesa</th>
                  <th className="p-3 font-antonio text-arcane-dark tracking-wide uppercase w-32">Def. Mágica</th>
                  <th className="p-3 font-antonio text-arcane-dark tracking-wide uppercase w-24">Iniciativa</th>
                  <th className="p-3 font-antonio text-arcane-dark tracking-wide uppercase">Efeito Especial</th>
                </tr>
              </thead>
              <tbody className="text-sm font-pt">
                {shields?.map((item) => {
                  if (item.item_type !== 'shield') return null;
                  return (
                    <tr key={item.id} className="border-b border-arcane/10 hover:bg-arcane/5 transition-colors">
                      <td className="p-3 font-bold text-slate-900 text-base">{item.name}</td>
                      <td className="p-3 font-antonio text-base text-crimson tracking-wider">{item.cost}z</td>
                      <td className="p-3 text-slate-700">
                        {item.category.defense_dice} {item.category.defense_modificator > 0 ? `+${item.category.defense_modificator}` : ''}
                      </td>
                      <td className="p-3 text-slate-700">
                        {item.category.magic_defense_dice} {item.category.magic_defense_modificator > 0 ? `+${item.category.magic_defense_modificator}` : ''}
                      </td>
                      <td className="p-3 text-slate-700">{item.category.iniciative}</td>
                      <td className="p-3 text-slate-500 italic">{item.special_ability || "-"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

      </main>
    </div>
  );
}