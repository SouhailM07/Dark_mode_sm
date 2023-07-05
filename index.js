let button=document.querySelector('.radio')
let point=document.querySelector('.b')
let p=document.querySelector('p')

button.addEventListener('click',function(){
    point.classList.toggle('black')
    if(document.body.style.background=='black'){
        document.body.style.background='white';
        p.textContent='Light mode';
        p.style.cssText=`color:black;`
        button.style.cssText=`border-color:black;`

    }else if(document.body.style.background='white'){
        document.body.style.background='black';
        p.textContent='Dark mode';
        p.style.cssText=`color:white;`
        button.style.cssText=`border-color:white;`

    }
    
})

