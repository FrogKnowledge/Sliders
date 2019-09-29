var closedStand=document.getElementsByClassName('closedStand')[0];
var openedStand=document.getElementsByClassName('openedStand')[0];
var openedStandOp=document.getElementsByClassName('openedStandOp')[0];
var cmint=document.getElementsByClassName('jiji')[0];
var cmdob=document.getElementsByClassName('upk')[0];
var seci=0;
var secd=0;
setTimeout(function(){
    interval=setInterval(function (){
        if(seci!=100){
        if(secd<100)
        {
            secd+=20;
            cmdob.innerHTML=secd;
        }else{
            secd-=100;
            seci++;
            cmint.innerHTML=seci;
        }
    }else clearInterval(interval);
    },2);
    },7600)
setTimeout(function(){openedStand.style.visibility="visible";},3200);
setTimeout(function(){closedStand.style.visibility="hidden";},3200);
setTimeout(function(){openedStandOp.style.visibility="visible";},5800);
setTimeout(function(){openedStand.style.display="none";closedStand.style.display="none";},5800);

var interval;



