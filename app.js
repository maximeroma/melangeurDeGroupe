

var groupe = [];
var random;
var numberOfTeam = 0;

// fonction pour sauvegarder sur le local Storage (in progress)



function save() 
{
	localStorage.removeItem(groupe);
	localStorage.setItem('groupe', JSON.stringify(groupe));
	localStorage.setItem('numberOfTeam', JSON.stringify(numberOfTeam));
};



// fonction pour récupérer mon tableau 'groupe' et le nombre de groupe (in progress)



function load() 
{
	a = localStorage.getItem('groupe');	
	
	if( a != null ) 
	{
		groupe =  JSON.parse(a);
	}
	console.log(groupe);
	b = localStorage.getItem('numberOfTeam');
	
	if( b != null ) 
	{
		numberOfTeam = JSON.parse( b );
	}
	console.log(numberOfTeam);
};




// le tableau de départ

	//var personne = ["Jordy", "Florian", "Mouhad", 
	//				"Raphael", "Marco", "Dimitri", 
	//				"Emilie", "Julien", "Franck", 
	//				"Romain", "Aurelie", "Oceane", 
	//				"Morel", "Gregory", "Maxime"];

	
	

//  tableau qui nous positionne à un index aléatoire à partir du tableau 'personne' 
// je décremente en parcourant le tableau personne et j'enlève la personne sélectionné du tableau de départ pour 
// ne pas le repush!

var createNewArray = function()
{

	var map = personne.map(function(a){ return a});
	//console.log(map);
	
	for(var i = map.length; i > 0; i--)
	{
		random = Math.floor(Math.random() * i);
		//console.log(personne);
		//console.log(personne[random]);
		groupe.push(map[random]);
		map.splice(random, 1);
		console.log(groupe);
	}
};

// je crée le nombre de groupe et je le met direct dans mon tableau html 

var addHeadTable = function()
{
	numberOfTeam = parseInt(prompt("Combien d'équipe?"));
	$('#headTable').children().remove();
	
	for(var n = 0; n < numberOfTeam; n++)
	{
		$('#headTable').append("<th>Groupe</th>");
	}
};


// je parcours le tableau 'groupe' pour remplir les cellules du tableau (cf annuaire)
// quand toutes une ligne est rempli j'en crée une nouvelle avec le if(condition) 
	
var createDynamicTable = function()
{
	$('#bodyTable').children().remove();
	$('tbody').append("<tr></tr>");
	
	for( var j = 1 ; j <= groupe.length; j++ )
	{
		$("tr").last().append("<td>" + groupe[j - 1] + "</td>");
			
			if(j % numberOfTeam === 0) 
			{
				//console.log("OK");
				$('tbody').append("<tr></tr>");
			}	
	};
	groupe =[];
	console.log(groupe);
};

var allFunction = function()
{
	createNewArray();
	addHeadTable();
	createDynamicTable();
};


$(document).ready(function()
{

	var a = $.ajax(
	{
		url : 'http://192.168.1.131:3000/name' ,
		success : function(data)
		{
			console.log(data);
			console.log('success');
		},
		error : function(err)
		{
			console.log(err);
		}


	});





	
	// Quand je clique sur le bouton 'Shake' le tableau se mélange
	// l'ordre des fonctions est important pour faire marcher le script normalement
	
	$('#button').click(function()
	{
		allFunction();
	});


}); 