import {Product} from "./product.model"

export interface Inventory
{
    readonly isFetching: boolean,
    readonly products: Product[]
}