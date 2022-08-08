export interface Posts {
    data: Post[];
}

export interface Post {
    attributes: PostAttributes;
}

export interface PostAttributes {
    Title: string;
    Meta: string;
    Description: string;
    slug: string;
    category: string;
}