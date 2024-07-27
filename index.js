var button_yes = document.getElementById('Yes');
const button_no = document.getElementById('No');
const boody = document.getElementById('bodyy');

const card_1 = document.querySelector('.contianer');
const card_2 = document.querySelector('.container-2');

button_yes.addEventListener('click' , function(){

    card_1.classList.add("hide");
    card_2.classList.remove("hide");
    console.log(123);
    
} );

var index = 1;



button_no.addEventListener('click', function(){

    if(index == 1){
        button_yes.style.fontSize = "20px";
        button_no.textContent = "Are you sure?";
        
    }
    
    if(index == 2){
        button_yes.style.fontSize = "47px";
        button_no.textContent = "Really sure??";
        
    }
    
    if(index == 3){
        button_yes.style.fontSize = "60px";
        button_no.textContent = "Are you really really sure???";
        
    }
    
    if(index == 4){
        
        button_yes.style.fontSize = "76px";
        button_no.textContent = "Just think about it!";
        
    }
    if(index == 5){
        
        button_yes.style.fontSize = "89px";
        button_no.textContent = "Give atleast 2 minutes of thought!!";
        
    }
    if(index == 6){
        
        button_yes.style.fontSize = "104px";
        button_no.textContent = "Are you positive?";
        
    }
    if(index == 7){
        
        button_yes.style.fontSize = "118px";
        button_no.textContent = "If you say no, I'll be very sad!";
        
    }
    if(index == 8){
        
        button_yes.style.fontSize = "135px";
        button_no.textContent = "I'll be very very sad!!";
        
    }
    if(index == 9){
        
        button_yes.style.fontSize = "174px";
        button_no.textContent = "Fine, I'll stop now 😭";
        
    }
    if(index == 10){
        
        button_yes.style.fontSize = "196px";
        button_no.textContent = "Just Kidding, last chance 😅";
        
    }
    if(index == 11){
        
        button_yes.style.fontSize = "200px";
        button_yes.style.width = "100em";
        button_yes.style.height = "100em";
        button_yes.style.position = "absolute";
        boody.style.margin = "0";
        
        button_no.textContent = "Just Kidding, last chance 😅";
        
    }
    
    index++;

    
    
});



