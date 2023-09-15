export class Categorie {
    id!:number;
    nomCategorie!:string;
    
    constructor(id?:number,nomCategorie?:string)
    {
        if(id)
        this.id = id;
        if(nomCategorie)
        this.nomCategorie = nomCategorie;
    }
}
