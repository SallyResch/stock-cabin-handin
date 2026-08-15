export type StockTypeStatus = "NORMAL"|"LOW_STOCK"|"OUT_OF_STOCK";

export const getProductStatus =(quantity:number,threshold:number):StockTypeStatus =>{
    if(quantity === 0) return "OUT_OF_STOCK";
    if(quantity <= threshold) return "LOW_STOCK";
    return "NORMAL";
}