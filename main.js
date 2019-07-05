var pc_score = 0;
var user_score = 0;
var pc_choice;
var user_choice;

const pc_span = document.getElementById('computer_score');
const user_span = document.getElementById('player_score');
const user_choice_img = document.getElementById('user_choice');
const pc_choice_img = document.getElementById('computer_choice');

const paper_choice = document.getElementById('paper');
const rock_choice = document.getElementById('rock');
const scissors_choice = document.getElementById('scissors');

const win_msg = document.getElementById('win');
const choice_list = document.getElementById('choice_list');

const pc_choices = ['rock', 'paper', 'scissors'];

rock_choice.addEventListener('click', function(){
    user_choice = 'rock';
    play();
});

paper_choice.addEventListener('click', function(){
    user_choice = 'paper';
    play();
});

scissors_choice.addEventListener('click', function(){
    user_choice = 'scissors';
    play();
});

function get_pc_choice(){
    var index = Math.floor(Math.random() * 3);
    return pc_choices[index];
}

function play(){
    pc_choice = get_pc_choice();
    
    if(user_choice == pc_choice){
        draw();
        return;
    }

    if(user_choice == 'paper'){
        if(pc_choice == 'scissors')
            lose();
        else
            win();
        return;   
    }

    if(user_choice == 'rock'){
        if(pc_choice == 'paper')
            lose();
        else
            win();
        return;   
    }

    if(user_choice == 'scissors'){
        if(pc_choice == 'rock')
            lose();
        else
            win();
        return;   
    }
}

function draw(){
    update_ui("Draw");
}

function win(){
    user_score = user_score + 1;
    update_ui("You win");
}

function lose(){
    pc_score = pc_score + 1;
    update_ui("PC wins");
}

function update_ui(msg){
    user_choice_img.src = 'rock.png'
    pc_choice_img.src = 'rock.png';
    choice_list.style.visibility = 'hidden';
    pc_choice_img.style.animation = 'pc_shake 2s ease';
    user_choice_img.style.animation = 'user_shake 2s ease';
    
    setTimeout(function(){
        pc_span.innerText = pc_score;
        user_span.innerText = user_score;
        pc_choice_img.src = pc_choice + ".png";
        user_choice_img.src = user_choice + ".png";
        win_msg.innerText = msg;
        choice_list.style.visibility = 'unset';
        pc_choice_img.style.animation = '';
        user_choice_img.style.animation = '';
    }, 2000);
}