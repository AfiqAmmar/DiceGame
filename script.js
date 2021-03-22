let score1 = 0;
let score2 = 0;
let dc1 = 0;
let dc2 = 0;

d11 = document.querySelector('.dice1_1');
d12 = document.querySelector('.dice1_2');
d21 = document.querySelector('.dice2_1');
d22 = document.querySelector('.dice2_2');
ts1 = document.querySelector('.t1');
ts2 = document.querySelector('.t2');
ag = document.querySelector('.again');
winner = document.querySelector('h4');
a = document.querySelector('.Player1');
a.addEventListener('click', turn1);
b = document.querySelector('.Player2');
b.addEventListener('click', turn2);
c = document.querySelector('.refresh');
c.addEventListener('click', refresh);
b.disabled = true;
c.disabled = true;

function turn1(){
        dc1 = Math.floor(Math.random()*6+1);
        dc2 = Math.floor(Math.random()*6+1);
        d11.innerText = dc1;
        d12.innerText = dc2;
        score1 += (dc1 + dc2);
        ts1.innerText = score1;
        if(dc1==6 && dc2==6){
            ag.innerText = 'Both are 6, Roll again!!!!!';
            setTimeout(repeat, 2000);
            a.disabled = false;
            b.disabled = true;
        }
        else{
            a.disabled = true;
            b.disabled = false;
        }
        if(score1 > 100){
            winner.innerText = "PLAYER 1 WINS!!!!"
            a.disabled = true;
            b.disabled = true;
            c.disabled = false;
        }
        dc1 = 0;
        dc2 = 0;
}

function turn2(){
        dc1 = Math.floor(Math.random()*6+1);
        dc2 = Math.floor(Math.random()*6+1);
        d21.innerText = dc1;
        d22.innerText = dc2;
        score2 += (dc1 + dc2);
        ts2.innerText = score2;
        if(dc1==6 && dc2==6){
            ag.innerText = 'Both are 6, Roll again!!!!!';
            setTimeout(repeat, 2000);
            b.disabled = false;
            a.disabled = true;
        }
        else{
            b.disabled = true;
            a.disabled = false;
        }
        dc1 = 0;
        dc2 = 0;
        if(score2 >= 100){
            winner.innerText = "PLAYER 2 WINS!!!!"
            a.disabled = true;
            b.disabled = true;
            c.disabled = false;
        }
}

function repeat(){
    ag.innerText = '';
}

function refresh(){
    c.disabled = true;
    d11.innerText = "";
    d12.innerText = "";
    d21.innerText = "";
    d22.innerText = "";
    ts1.innerText = "";
    ts2.innerText = "";
    winner.innerText = "";
    score1 = 0;
    score2 = 0;
    dc1 = 0;
    dc2 = 0;
    ag.innerText = '';
    a.disabled = false;
    b.disabled = true;
}