let choice = '';

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

    house().then(function(resultado){
        housesChoice = resultado; 
    });
    
    switch(c){
        case 'paper':
            if(housesChoice === 'paper'){
                console.log('empate');
            }
            if(housesChoice === 'rock'){
                console.log('Você ganhou');
            }
            if(housesChoice === 'scissors'){
                console.log('Você perdeu');               
            }
            
        break;
        case 'rock': 
            if(housesChoice === 'paper'){
                console.log('Você perdeu');
            }
            if(housesChoice === 'rock'){
                console.log('empate');
            }
            if(housesChoice === 'scissors'){
                console.log('Você ganhou');               
            }
        break;
        case 'scissors':
            if(housesChoice === 'paper'){
                console.log('Você ganhou');
            }
            if(housesChoice === 'rock'){
                console.log('Você perdeu');
            }
            if(housesChoice === 'scissors'){
                console.log('empate');               
            }
        break;
    }
}

function house(){
    return new Promise(function(resolve, reject){
        console.log("calculando");
        setTimeout(function(){
            resolve('paper');
        }, 3000);
    })
}