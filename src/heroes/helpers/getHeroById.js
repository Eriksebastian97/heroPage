import { heroes } from "../data/heroes"

export const getHeroById = (id)=>{

    //si existe lo regresa , si no no regresa nada
    return heroes.find(hero => hero.id === id)
}