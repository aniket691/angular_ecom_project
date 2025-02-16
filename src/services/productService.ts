import * as angular from "angular";

export interface Product {
    name: string;
    price: number;
}

export class ProductService {
    getProducts(): Product[] {
        return [
            { name: "Laptop", price: 800 },
            { name: "Phone", price: 500 },
            { name: "Headphones", price: 100 }
        ];
    }
}

angular.module("ecommerceApp").service("ProductService", ProductService);
