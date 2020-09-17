//Create an Object literal for the pet salon(Name, adress, Hours)

var store = {
    namestore:"Robert´s Pets",
    address: {
        street: "Las golondrinas, Mexicali BC",
        country: "Mexico",
        State: "Baja California",
        City: "Mexicali",
        number: "346"
    },
    hours:{
        open: "7 am",
        close: "5 pm"
    },
    pets:[
        {   //Object 1
            namepet:"Kaiser",
            Age:6,
            breed:"Aleman",
            gender: "Male",
            type:"Dog"
        },
        {   //Object 2
            namepet:"Elma",
            Age:2,
            breed:"Aleman",
            gender: "Female",
            type:"Dog"
        },
        {   //Object 3
            namepet:"Sabu",
            Age:7,
            breed:"Aleman",
            gender: "Male",
            type:"Dog"
        },
        {   //Object 4
            namepet:"Guardian",
            Age:4,
            breed:"Aleman",
            gender: "ale",
            type:"Dog"
        },
        {   //Object 5
            namepet:"Rocky",
            Age:22,
            breed:"Aleman",
            gender: "Male",
            type:"Dog"
        },
    ]
}


function DisplayNumberPets(Array)
{
    console.log("Number of records: "+Array.pets.length);
}

function DisplayName(Array)
{
    for(var x=0; x<Array.pets.length; x++){
        console.log(Array.pets[x].namepet);
    }
}

function bubbleMetothod(ArrayTMP){
		for(var i=1;i<ArrayTMP.length;i++)
		{
			for(var j=0;j<(ArrayTMP.length-i);j++)
			{
				if(ArrayTMP[j].Age>ArrayTMP[j+1].Age)
				{
					k=ArrayTMP[j+1].Age;
					ArrayTMP[j+1].Age=ArrayTMP[j].Age;
					ArrayTMP[j].Age=k;
				}
			}
        }
 
		return ArrayTMP;
}

function GetMax(Array){
    Array = bubbleMetothod(Array);
    /*var max = Math.max.apply(Math, Array.pets.map(function(objArray) { 
        return objArray.Age; 
    }));*/
    console.log("Oldest pet: "+Array[Array.length-1].Age);
}

function GetMin(Array){
    Array = bubbleMetothod(Array);
    /*var min = Math.min.apply(Math, Array.pets.map(function(objArray) { 
        return objArray.Age; 
    }));*/
    console.log("Youngest pet: "+Array[0].Age);
}


console.log("------Display Name--------");
DisplayName(store);

console.log("------Display Number of Pets--------");
DisplayNumberPets(store);

console.log("------Display Oldest and Youngest Pet-------");
GetMin(store.pets);
GetMax(store.pets);

//function to display on console the number of registered pets



var lion = {
    name:"Simba",
    foodType:"Carnivore",
    kinfofTheJungle:true

}

console.log(lion);


var monkey = {
    name:"Rafiky",
    foodType:"Carnivore",
    kinfofTheJungle:false

}

console.log(monkey);

class Animal{
    constructor(name,foodType,kinfofTheJungle){
        this.name=name;
        this.foodType=foodType;
        this.kinfofTheJungle=kinfofTheJungle;
    }
}


var lionC = new Animal("Simba", "Carnivore", true);
var MonkeyC = new Animal("Rafiky", "Carnivore", false);


console.log(lionC);
console.log(MonkeyC);