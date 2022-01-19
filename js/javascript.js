setTimeout(function(){
    location.href='Rocket.html';
},2000)
console.log("hi Iam Created");

//creation of changing colors

var CoolColor = function(){
    //creating a variable and assinging the class name to it,so that it can used to change in if.else statement
    var CurrentClassName=document.getElementById('cool').className;
    
    if(CurrentClassName == 'cool'){
        document.getElementById('cool').className='cool red';
    }else{
        document.getElementById('cool').className='cool';
    }
}

var car={
name:"Mini cooper",
color:"Orange",
Model:"Sports",
year:2022,
seats:["seat1","seat2","seat3","seat4"],
IsturnedOn:false,
carSwitch (){
this.IsturnedOn=true;
},
carOnOFF(isOn){
if(isOn==true){
    this.IsturnedOn=true;
    console.log("Car is Turned ON");
    
    
}else{
    this.IsturnedOn=false;
    console.log("Car is turned off");
}
}
};

var SaymyName= function(name){
alert("Your Name is: "+name);
}


