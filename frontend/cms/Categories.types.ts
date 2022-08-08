export interface Categories {
    data: Category[];
}

export interface Category {
    attributes: CategoryAttributes;
}

export interface CategoryAttributes {
    Category: string;
    slug: string;
}

export interface CategoryState {
    categories: CategoryAttributes[];
}