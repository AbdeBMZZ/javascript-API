//objet literal
var cookie = {
    nom:'cookie',
    contenu: 'cookie literal object',
    nbr_jrs: 4
}

// Création d’objets propres en utilisant un constructeur
var cookie =  new Cookie('abdellah', 'abdellah boumaiza', 12);

function Cookie (nom, contenu, nbr_jrs){
    this.nom = nom;
    this.contenu = contenu;
    this.nbr_jrs = nbr_jrs;

    if(IsActif()){
        let expdate = new Date () ;
        expdate.setTime (expdate.getTime() + ( this.nbr_jrs * 24 * 60 * 60 * 1000)) ;
        document.cookie = this.nom+ "=" + this.contenu + "; expires=" + expdate.toUTCString() ;

        //pour stocker l'objet literal
        let expdate2 = new Date () ;
        expdate2.setTime (expdate.getTime() + ( cookie.nbr_jrs * 24 * 60 * 60 * 1000)) ;
        document.cookie = cookie.nom+ "=" + cookie.contenu + "; expires=" + expdate2.toUTCString() ;

        
    }   
}

function IsActif(){
    return (navigator.cookieEnabled);
}

function getCookie(nom){
    var match = document.cookie.match(new RegExp('(^| )' + nom + '=([^;]+)'));
    if (match){
        console.log(match);
        return match[2];
    } 
}

function removeCookie(nom){
    document.cookie = nom + '=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC'; 

}


removeCookie('boumaiza');