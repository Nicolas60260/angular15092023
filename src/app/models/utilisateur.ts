export class Utilisateur {

    id!:number;
    nomUtilisateur!:string;
    mail!:string;
    mdp!:string;
    bloque!:boolean;
    /*
    role!:Role;
    listeCommentaire!Commentaire[];
    listeAnnonce!:Annonce[];*/
    constructor(id?:number,nomUtilisateur?:string,mail?:string,mdp?:string,bloque?:boolean)
    {
        
        if(id)
        this.id = id;
        if(nomUtilisateur)
        this.nomUtilisateur = nomUtilisateur;
        if(mail)
        this.mail = mail;
        if(mdp)
        this.mdp = mdp;
        if(bloque)
        this.bloque = bloque;

    }

}


