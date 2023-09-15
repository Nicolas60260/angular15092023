import { Categorie } from "./categorie";

export class Annonce {

    id!:number;
    titre!:string;
    description!:string;
    image!:string;
    datePublication!:Date;
    dateExpiration!:Date;
    statut!:boolean;
    categorie=new Categorie();

    constructor(id?:number,titre?:string,description?:string,image?:string,datePublication?:Date,dateExpiration?:Date,statut?:boolean,categorie?:Categorie)
    {
        
        if(id)
        this.id = id;
        if(titre)
        this.titre = titre;
        if(description)
        this.description = description;
        if(image)
        this.image = image;
        if(datePublication)
        this.datePublication = datePublication;
        if(dateExpiration)
        this.dateExpiration = dateExpiration;
        if(statut)
        this.statut = statut;
        if(categorie)
        this.categorie = categorie;

    }
}


