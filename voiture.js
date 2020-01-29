class Vehicule {
    constructor(name) {
	this.name = name || "vehicule";
    }
};

class Voiture extends Vehicule {
    constructor(name) {
	super(name || "voiture");
	this.roues = 4;
	this.portes = 5;
	this.moteur = {
	    puissance: 60,
	    marche: false
	};
	this.voyants = {
	    marche: false
	}
    }
    contact(){
	console.log("On allume le contact.");
	this.allumerLesVoyants();
    }
    allumerLesVoyants(){
	console.log("Les voyants s'allument.");
	this.voyants.marche = true;
    }
    eteindreLesVoyants(){
	console.log("Les voyants s'eteignent.");
	this.voyants.marche = false;
    }
    decontact(){
	console.log("On coupe le contact.");
	this.eteindreLesVoyants();
    }
    demarre(){
	console.log("On démarre le moteur.");
	this.moteur.marche = true;
    }
    coupe(){
	console.log("On coupe le moteur.");
	this.moteur.marche = false;
    }
}

class Sportive extends Voiture {
    constructor(name) {
	super(name || "sportive");
	this.portes = 3;
    	this.moteur.puissance = 450;	
    }
}

const test_vehicule = () => {
    console.log("test véhicule");
    let maVoiture = new Sportive("Ma porsche");
    console.log(maVoiture);
    maVoiture.contact();
    maVoiture.demarre();
    console.log(maVoiture.moteur.marche);

    let usine = [];
    for(let i = 0; i < 100; i++) usine.push(new Sportive());
    console.log(usine);
};
