export interface homeDataProps {
    id: number,
    name: string,
    image: string
}


export interface allCategoriesProps {
    id: number,
    name: string,
    image: string
    isCategories:boolean
}
export interface allCategoriesRouteProps {
    categoriesData: allCategoriesProps
    isCategories:boolean
}
