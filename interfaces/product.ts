export interface Icategory {
    id: number;
    name: string;
    image: string;
}

export interface IProduct {
    id: number;
    name: string;
    title: string;
    price: number;
    oldPrice: number;
    rating: number;
    reviews: number;
    badge?: string;
    image: string;
    category: string;
}