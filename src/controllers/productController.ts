import * as angular from "angular";
import { ProductService, Product } from "../services/productService";   

export class ProductController {
    static $inject = ["ProductService"];
    products: Product[];

    constructor(private productService: ProductService) {
        this.products = this.productService.getProducts();
    }

    addToCart(product: Product): void {
        alert(`${product.name} added to cart!`);
    }
}

angular.module("ecommerceApp").controller("ProductController", ProductController);
