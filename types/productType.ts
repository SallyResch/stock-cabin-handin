import type { LocationType } from "./locationType"
import type { TagType } from "./tagType"
import type { UnitType } from "./unitType"
import type { UserType } from "./userType"

export type ProductType = {
    id: string,
    name: string,
    location: LocationType,
    quantity: number,
    unit: UnitType,
    adjustBy: number,
    threshold: number,
    note: string
}