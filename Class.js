class Pet{
    constructor(name,age,type,breed,price,quantity,gender,services,owner,contactPhone){
        this.name=name;
        this.age=age;
        this.type=type;
        this.breed=breed;
        this.price=price;
        this.quantity=quantity;
        this.gender=gender;
        this.services=services;
        this.owner=owner;
        this.contactPhone=contactPhone;

    }
}
var store = {
    namestore:"Robert´s Pets",
    address: {
        street: "Las Golondrinas, Mexicali BC",
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

    ]
}

var Kaiser = new Pet("Kaiser",5,"Dog","Aleman", "Male", "Full services", "Roberto", GetServicesPrices("Full services"));
var Elma = new Pet("Elma",5,"Dog","Aleman", "Female", "Full services", "Roberto", GetServicesPrices("Full services"));
var Sabu = new Pet("Sabu",5,"Aleman", "Male", "Full services", "Roberto", GetServicesPrices("Full services"));
var Guardian = new Pet("Guardian",5,"Dog","Aleman", "Male", "Full services", "Roberto", GetServicesPrices("Full services"));
var Rocky = new Pet("Rocky",5,"Aleman", "Male", "Full services", "Roberto", GetServicesPrices("Full services"));

store.pets.push(Kaiser);
store.pets.push(Elma);
store.pets.push(Sabu);
store.pets.push(Guardian);
store.pets.push(Rocky);

console.log(store.pets);

//console.log(store.pets);
//get the inputs and store them in variables
var txtName = document.getElementById("name");
var txtage = document.getElementById("age");
var txttype = document.getElementById("type");
var txtbreed = document.getElementById("breed");
//var txtprice = document.getElementById("price");
var txtquantity = document.getElementById("quantity");
var txtgender = document.getElementById("gender");
var txtservices = document.getElementById("services");
var txtowner = document.getElementById("owner");
var txtcontactphone = document.getElementById("contactphone");

function clearInputs(){
    txtName.value="";
    txtage.value="";
    txttype.value="";
    txtbreed.value="";
    //txtprice.value="";
    //txtquantity.value="";
    txtgender.value="";
    txtservices.value="";
    txtowner.value="";
    txtcontactphone.value=""
}


function GetServicesPrices(Services){
    var Price=0;

    if(Services==="Aesthetics and Spa"){
        Price = 50;
    }else if(Services==="Gym"){
        Price = 100;
    }else if(Services==="Hotel"){
        Price = 200;    
    }else if(Services==="Full services"){
        Price = 500;
    }
    return Number(Price);
}

function register(){
    //create the Pet

    var NewPet = new Pet(txtName.value,txtage.value,txttype.value,txtbreed.value,txtgender.value, txtservices.value, txtowner.value, txtcontactphone.value, GetServicesPrices(txtservices.value));

    //Push the new pet
    store.pets.push(NewPet);

    clearInputs();

    //console.log(store.pets);
    
    display(store);
}

