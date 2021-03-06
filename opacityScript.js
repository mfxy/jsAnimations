window.onload = function(){
    var container = document.getElementById('container1');
    container.onmouseover = function(){
        ChangeOpacity(100);
    }
    container.onmouseout = function(){
        ChangeOpacity(20);
    }
}

var timer = null;
var alpha = 0;
function ChangeOpacity(goal){
    clearInterval(timer);
    var container = document.getElementById('container1');
    var speed = (goal-alpha)/10;
    speed = speed>0 ? Math.ceil(speed):Math.floor(speed);
    timer = setInterval(function(){
        if(alpha==goal){
            clearInterval(timer);
        }else{
            alpha += speed;
            container.style.opacity = alpha/100;
            // container.style.filter = 'alpha(opacity:'+alpha+')';
        }
    },100);
}