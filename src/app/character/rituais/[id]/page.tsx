import RitualCard from "@/components/molecules/RitualCard"
import { getRitualsByDiscipline } from "@/lib/api"

interface Props {
  params: { id: string };
}

export default async function RitualPage({params} : Props){

    const slug = (await params).id
    const rituais = await getRitualsByDiscipline(slug)
    console.log(rituais)

    return(
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rituais?.map(ritual =>(
                <RitualCard ritual={ritual} key={ritual.id}></RitualCard>
            ))}
        </div>
    )
}