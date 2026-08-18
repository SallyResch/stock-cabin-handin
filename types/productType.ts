import type { LocationType } from "./locationType"
import type { UnitType } from "./unitType"

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