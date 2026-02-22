import { Item, BasicWeapons } from "@/types"

interface ItemProps{
    item : Item
}


export default function ItemCard({item}: ItemProps){


    return(

        <div className="flex flex-col border border-b-blue-300">
            { item.item_type === 'weapon'  && 
                <>
                    <div className="grid grid-cols-[200px_50px_150px_130px] bg-blue-200">
                        <span>{item.name}</span>
                        <span>{item.cost}</span>
                        <span>{item.category.precision_dice}</span>
                        <span>{item.category.damage}</span>
                    </div>

                    <div className="grid grid-cols-[100px_150px_200px]">
                        <span>{item.category.hand_count}</span>
                        <span>{item.category.range}</span>
                        <span>{item.special_ability}</span>
                    </div>
                </>
            }   

            { item.item_type === 'armor' &&
                <>            
                    <div className="grid grid-cols-[200px_100px_150px_130px_100px] bg-blue-200">
                        <span>{item.name}</span>
                        <span>{item.cost}</span>
                        <span>{item.category.defense_dice && item.category.defense_dice} {item.category.defense_modificator > 0 ? '+'+item.category.defense_modificator : ''}</span>
                        <span>{item.category.magic_defense_dice && item.category.magic_defense_dice} {item.category.magic_defense_modificator > 0 ? '+'+item.category.magic_defense_modificator : '-'}</span>                     
                        <span>{item.category.iniciative}</span>   
                    </div>

                    <div><span>{item.special_ability}</span></div>
                </> 
            } 

            {item.item_type === 'shield' &&
                <>            
                    <div className="grid grid-cols-[200px_100px_150px_130px_100px] bg-blue-200">
                        <span>{item.name}</span>
                        <span>{item.cost}</span>
                        <span>{item.category.defense_dice && item.category.defense_dice} {item.category.defense_modificator > 0 ? '+'+item.category.defense_modificator : ''}</span>
                        <span>{item.category.magic_defense_dice && item.category.magic_defense_dice} {item.category.magic_defense_modificator > 0 ? '+'+item.category.magic_defense_modificator : '-'}</span>                     
                        <span>{item.category.iniciative}</span>   
                    </div>

                    <div><span>{item.special_ability}</span></div>
                </> 
            } 
        </div>

    )
}

