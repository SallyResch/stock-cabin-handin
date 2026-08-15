import { LocationType } from "@/types/locationType";
import { CookingPotIcon, ShowerHeadIcon, ShelvingUnitIcon, WrenchIcon, BedDoubleIcon, FlameKindlingIcon, SofaIcon} from "lucide-react";
export const locations:LocationType[] =[
    { id: 1, name:"Kitchen", icon: CookingPotIcon},
    { id: 2, name:"Bathroom",icon: ShowerHeadIcon},
    { id: 3, name:"Pantry",icon: ShelvingUnitIcon},
    { id: 4, name:"Toolshed",icon: WrenchIcon},
    { id: 5, name:"Bedroom",icon: BedDoubleIcon},
    { id: 6, name:"Outdoor",icon: FlameKindlingIcon},
    { id: 7, name:"Living Room",icon: SofaIcon},
]