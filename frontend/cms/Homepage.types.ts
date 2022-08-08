export interface Homepage {
    data: {
        attributes: HomepageAttributes
    }
}

export interface HomepageAttributes {
   Title: string;
   WelcomeTitle: string;
   Summary: string;
   Meta: string;
   BlogTitle: string;
}