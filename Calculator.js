let buttons = document.querySelector('.buttons');
let span = document.querySelectorAll('span');
let value = document.getElementById('value');
let body = document.querySelector('body');
let lnmode = document.querySelector('.lnmode');

for(let i=0;i<span.length;i++){
    span[i].addEventListener("click", function(){

        if(this.innerHTML=="="){
            value.innerHTML = eval(value.innerHTML);
        }
        else{
            if(this.innerHTML=="Clear"){
                value.innerHTML="";
            }
            else{
                value.innerHTML+=this.innerHTML;
            }
        }
    })
}
lnmode.onclick = function(){
    body.classList.toggle('dark');
}
