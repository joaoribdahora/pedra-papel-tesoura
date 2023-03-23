let choice = '';
let housesPoints = 0;
let yourPoints = 0;

// Rules
document.querySelector('.rules').addEventListener('click', ()=>{
    document.querySelector('.rulesArea').style.display = 'flex';
});
document.querySelector('.title img').addEventListener('click', ()=>{
    document.querySelector('.rulesArea').style.display = 'none';
});

//Your choice
document.querySelector('.paper').addEventListener('click', ()=>{
    choice = 'paper';
    game(choice);
});
document.querySelector('.rock').addEventListener('click', ()=>{
    choice = 'rock';
    game(choice);
});
document.querySelector('.scissors').addEventListener('click', ()=>{
    choice = 'scissors';
    game(choice);
});

// Restart
document.querySelector('.restart').addEventListener('click', restart);

//Functions 
function game(c){
    let icon = document.querySelector('.yourIcon');

    document.querySelector('.one').style.display = 'none';
    document.querySelector('.two').style.display = 'flex';

    icon.innerHTML = `<img src="images/icon-${c}.svg"/>`;
    icon.classList.add(`c-${c}`);
    icon.style.width = '180px';
    icon.style.height = '180px';
    icon.style.backgroundColor = '#FFF';

    checkGame(c);
}

function house(){
    return new Promise(function(resolve){
        document.querySelector('.housesIcon').innerHTML = "Carregando..."
        
        setTimeout(function(){
            resolve(choosing());
        }, 1000);
    })
}
function choosing(choosenIcon){
    let housePlay = Math.floor(Math.random() * 3);
    
    if(housePlay == 0){choosenIcon = 'paper'};
    if(housePlay == 1){choosenIcon = 'rock'};
    if(housePlay == 2){choosenIcon = 'scissors'};

    return choosenIcon;
}

function checkGame(c){
    let icon = document.querySelector('.housesIcon');

    house().then(function(resultado){
        icon.innerHTML = `<img src="images/icon-${resultado}.svg"/>`;
        icon.classList.add(`c-${resultado}`);
        icon.style.width = '180px';
        icon.style.height = '180px';
        icon.style.backgroundColor = '#FFF';

        setTimeout(() => {checkWinner(resultado, c)} , 1000);
    });
}

function checkWinner(housesChoice, c){
    let result = '';

    switch(c){
        case 'paper':
            if(housesChoice === 'paper') result = 'empate';
            if(housesChoice === 'rock')  result = 'ganhou';
            if(housesChoice === 'scissors') result = 'perdeu';
        break;
        case 'rock': 
            if(housesChoice === 'paper') result = 'perdeu';
            if(housesChoice === 'rock') result = 'empate';
            if(housesChoice === 'scissors') result = 'ganhou';
        break;
        case 'scissors':
            if(housesChoice === 'paper') result = 'ganhou';
            if(housesChoice === 'rock') result = 'perdeu';
            if(housesChoice === 'scissors') result = 'empate';
        break;
    }

    showResult(result);
}

function showResult(r){
    let icon = document.querySelector('.showResult');

    document.querySelector('.result').style.display = 'block';

    if( r === 'empate'){icon.innerHTML = 'EMPATOU!';}
    if( r === 'ganhou'){
        icon.innerHTML = 'VOCÊ GANHOU!';
        yourPoints++;
        document.querySelector('.housesIcon').style.opacity = '0.3';
    }
    if( r === 'perdeu'){
        icon.innerHTML = 'VOCÊ PERDEU!';
        housesPoints++;
        document.querySelector('.yourIcon').style.opacity = '0.3';
    }

    document.querySelector('.player .realScore').innerHTML = yourPoints;
    document.querySelector('.house .realScore').innerHTML = housesPoints;
}

function restart(){
    document.querySelector('.one').style.display = 'flex';
    document.querySelector('.two').style.display = 'none';
    document.querySelector('.result').style.display = 'none';
    
    let icons = [ document.querySelector('.yourIcon'), document.querySelector('.housesIcon')];
   
    for(let i = 0; i<icons.length; i++){
        icons[i].classList.remove('c-paper');
        icons[i].classList.remove('c-rock');
        icons[i].classList.remove('c-scissors');

        icons[i].style.opacity = '1';
        icons[i].style.width = '120px';
        icons[i].style.height = '120px';
        icons[i].style.backgroundColor = 'hsl(229, 25%, 31%)';
    }
}