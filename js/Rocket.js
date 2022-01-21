// alert('Send Me Screenshot If you Win !!!');
console.log('Hi there iam created.');


var timer=null;
var CountDownNumber=10;

var ChangeState=function(state){
    document.body.className='body-State'+state;
    clearInterval(timer);
    CountDownNumber=10;
    document.getElementById('countdown').innerHTML=CountDownNumber;

    //count
    if(state == 2){
        timer = setInterval(function(){
            CountDownNumber=CountDownNumber-1;
            document.getElementById('countdown').innerHTML=CountDownNumber;
            if (CountDownNumber >1 && CountDownNumber<=4){
                document.getElementById('cantwait').className='cantwait show'
            }else{
                document.getElementById('cantwait').className='cantwait'
            }

            if (CountDownNumber >4 && CountDownNumber<=7){
                document.getElementById('nervous').className='nervous show'
            }else{
                document.getElementById('nervous').className='nervous'
            }

            if(CountDownNumber<=0){
                ChangeState(3);
            }
        },500);
    }else if(state == 3){
        var success = setTimeout(function(){
          var randomNumber=Math.round(Math.random()*10);

          console.log('RandomNumber:',randomNumber);

        // Success
          if(randomNumber>5){
            ChangeState(4);
        }else{
            ChangeState(5); //ho on!!!
        }
        },2000);

    }
}
