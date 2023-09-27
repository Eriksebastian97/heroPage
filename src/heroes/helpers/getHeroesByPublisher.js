import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher)=>{
    const validPublishers = ["DC Comics", "Marvel Comics"]
   //si no lo incluye
    if (!validPublishers.includes(publisher)){
        throw new Error(`${publisher} is not a valid publisher`)
    }
   //si existe , te devuelve la lista de heroe segun el publisher
    return heroes.filter(heroe => heroe.publisher === publisher)
}