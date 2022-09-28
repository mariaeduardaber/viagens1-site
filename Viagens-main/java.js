const botao_nacional = document.getElementById('nacionall');
const botao_internacional = document.getElementById('internacional');
const cards_nacional = document.getElementById('cards_nacional');
const cards_internacional = document.getElementById('cards_internacional');
window.addEventListener('click', function(e){
    if(botao_internacional.contains(e.target)){
        cards_nacional.style.display = 'none';
        cards_internacional.style.display = 'flex';
    }
    else if(botao_nacional.contains(e.target)){
        cards_nacional.style.display = 'flex';
        cards_internacional.style.display = 'none';
        
    }
    else{
        cards_nacional.style.display = 'none';
        cards_internacional.style.display = 'flex';
    }
})