console.log("hi Iam Created");

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

