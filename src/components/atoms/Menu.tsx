import { Menu } from "lucide-react"

interface MenuProps{
    size : number
}


export default function MenuIcon({size} : MenuProps){
    return(
        <Menu size={size} color="#334155"></Menu>
    )
}