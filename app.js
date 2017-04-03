$(document).ready(function(){


var personne = ["Jordy", "Florian", "Mouhad", "Raphael", "Marco", "Dimitri", "Emilie", "Julien", "Franck", "Romain", "Aurelie", 
					"Oceane", "Morel", "Gregory", "Maxime"];

var groupe = [];
var random;

var j = 1;

// création du nombre de groupe et injection des titres de colonnes 

var numberOfTeam = parseInt(prompt("Combien d'équipe?"));

for(var n = 0; n < numberOfTeam; n++){
	$('#numberTeam').append("<th>Groupe</th>")
}


// creation du nouveau tableau aléatoire à partir du tableau personne

	for(var i = personne.length; i > 0; i--){
		random = Math.floor(Math.random() * i);
		//console.log(personne);
		//console.log(personne[random]);
		groupe.push(personne[random]);
		personne.splice(random, 1);
		console.log(groupe);
	
}

// injection des personnes dans le tableau dynamique (cf annuaire) 

	var addGroupe = function(){
		$('tbody').append("<tr></tr>");
		for( j ; j <= groupe.length; j++ ){
			$("tr").last().append("<td>" + groupe[j - 1] + "</td>");
			if(j % numberOfTeam === 0) {
				console.log("OK");
				$('tbody').append("<tr></tr>");
			}
		}
	}
addGroupe();
}); 