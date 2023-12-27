import { ICategory } from "./category.models";

export interface IProduct{
    productId : number;
    productTitle : string;
    productPrice : number;
    productDescription : string;
    productImage: string[];
    productCategory: ICategory
    
}