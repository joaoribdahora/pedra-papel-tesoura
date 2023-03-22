let choice = '';
let housesPoints = 0;
let yourPoints = 0;

document.querySelector('.rules').addEventListener('click', ()=>{
    document.querySelector('.rulesArea').style.display = 'flex';
});

document.querySelector('.title img').addEventListener('click', ()=>{
    document.querySelector('.rulesArea').style.display = 'none';
});

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

document.querySelector('.restart').addEventListener('click', restart);

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

function checkGame(c){
    let housesChoice = '';
    let icon = document.querySelector('.housesIcon');

    house().then(function(resultado){
        housesChoice = resultado; 

        icon.innerHTML = `<img src="images/icon-${resultado}.svg"/>`;
        icon.classList.add(`c-${resultado}`);
        icon.style.width = '180px';
        icon.style.height = '180px';
        icon.style.backgroundColor = '#FFF';

        setTimeout(() => {checkWinner(housesChoice, c)} , 1000);
    });
}

function checkWinner(housesChoice, c){
    let result = '';

    switch(c){
        case 'paper':
            if(housesChoice === 'paper'){
                result = 'empate';
                console.log('empate');
            }
            if(housesChoice === 'rock'){
                result = 'ganhou';
                console.log('Você ganhou');
            }
            if(housesChoice === 'scissors'){
                result = 'perdeu';
                console.log('Você perdeu');               
            }
            
        break;
        case 'rock': 
            if(housesChoice === 'paper'){
                result = 'perdeu';
                console.log('Você perdeu');
            }
            if(housesChoice === 'rock'){
                result = 'empate';
                console.log('empate');
            }
            if(housesChoice === 'scissors'){
                result = 'ganhou';
                console.log('Você ganhou');               
            }
        break;
        case 'scissors':
            if(housesChoice === 'paper'){
                result = 'ganhou';
                console.log('Você ganhou');
            }
            if(housesChoice === 'rock'){
                result = 'perdeu';
                console.log('Você perdeu');
            }
            if(housesChoice === 'scissors'){
                result = 'empate';
                console.log('empate');               
            }
        break;
    }

    showResult(result);
}

function house(){
    return new Promise(function(resolve, reject){
        
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

function showResult(r){
    let icon = document.querySelector('.showResult');

    document.querySelector('.result').style.display = 'block';

    if( r === 'empate'){icon.innerHTML = 'EMPATOU!';}
    if( r === 'ganhou'){
        icon.innerHTML = 'VOCÊ GANHOU!';
        yourPoints++;
    }
    if( r === 'perdeu'){
        icon.innerHTML = 'VOCÊ PERDEU!';
        housesPoints++;
    }

    document.querySelector('.player .realScore').innerHTML = yourPoints;
    document.querySelector('.house .realScore').innerHTML = housesPoints;
}

function restart(){
    document.querySelector('.one').style.display = 'flex';
    document.querySelector('.two').style.display = 'none';
    document.querySelector('.result').style.display = 'none';
    
    let youricon = document.querySelector('.yourIcon');
    let housesicon = document.querySelector('.housesIcon');

    housesicon.classList.remove('c-paper');
    housesicon.classList.remove('c-rock');
    housesicon.classList.remove('c-scissors');
    youricon.classList.remove('c-paper');
    youricon.classList.remove('c-rock');
    youricon.classList.remove('c-scissors');

    housesicon.style.width = '120px';
    housesicon.style.height = '120px';
    housesicon.style.backgroundColor = 'hsl(229, 25%, 31%)';
    youricon.style.width = '120px';
    youricon.style.height = '120px';
    youricon.style.backgroundColor = 'hsl(229, 25%, 31%)';
}