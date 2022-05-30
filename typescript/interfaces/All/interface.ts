export interface IntArticle{
    content:string;
    image:string;
    isHome:boolean;
    link:string;
    title:string;
}
export interface IntSeo {
    canonical?:string;
    description:string;
    image:string;
    title:string;
    typePage?:string;
    robots?:string;
}