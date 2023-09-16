export enum CustomerType {
    GOLD = "GOLD",
    PLATINUM = 'PLATINUM',
    SILVER = 'SILVER'
}

export type Customer = {
    id: number,
    name: string,
    type: CustomerType
}