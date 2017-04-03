

var groupe = [];
var random;
var numberOfTeam = 0;


function save() {
	localStorage.setItem('groupe', JSON.stringify(groupe));
	localStorage.setItem('numberOfTeam', JSON.stringify(numberOfTeam));
};


function load() {
	var groupe = localStorage.getItem('groupe');	
	var numberOfTeam = localStorage.getItem('numberOfTeam');
};



var personne = ["Jordy", "Florian", "Mouhad", 
				"Raphael", "Marco", "Dimitri", 
				"Emilie", "Julien", "Franck", 
				"Romain", "Aurelie", "Oceane", 
				"Morel", "Gregory", "Maxime"];


// creation du nouveau tableau aléatoire à partir du tableau personne

var createNewArray = function(){
	for(var i = personne.length; i > 0; i--){
		random = Math.floor(Math.random() * i);
		//console.log(personne);
		//console.log(personne[random]);
		groupe.push(personne[random]);
		personne.splice(random, 1);
		console.log(groupe);
	}
};

// création du nombre de groupe et injection des titres de colonnes 

var addHeadTable = function(){
	numberOfTeam = parseInt(prompt("Combien d'équipe?"));
	for(var n = 0; n < parseInt(numberOfTeam); n++){
		$('#headTable').append("<th>Groupe</th>");
	}
};


// injection des personnes dans le tableau dynamique (cf annuaire) 
	
var createDynamicTable = function(){

	$('tbody').append("<tr></tr>");
	for( var j = 1 ; j <= groupe.length; j++ ){
		$("tr").last().append("<td>" + groupe[j - 1] + "</td>");
			if(j % numberOfTeam === 0) {
				console.log("OK");
				$('tbody').append("<tr></tr>");
			}	
	};
};


$(document).ready(function(){

	



	// Quand je clique sur le bouton 'Shake' le tableau se mélange

	
	$('#button').click(function(){
		load();
		createNewArray();
		addHeadTable();
		createDynamicTable();
		save();
	});  

	

	/*	
	createNewArray();
	addHeadTable();
	createDynamicTable();
	*/

}); 