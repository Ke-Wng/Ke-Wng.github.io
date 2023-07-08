let body = document.querySelector('body');
let divs = document.querySelectorAll('.container div');
for(let i = 0; i < divs.length; i++){
    divs[i].onclick = function(){
        this.style.animationName = 'passer';
        this.style.animationDuration = '3s';
        this.style.animationDelay = '1s';
        for(let j = 0; j < divs.length; j++){
            if(j != i){
                divs[j].style.animationName = 'shrink';
                divs[j].style.animationDuration = '1s';
            }
        }
        setTimeout(() => {
            document.querySelector("#photogragh").style.display = 'block';
            body.style.background = 'transparent';
        }, 1200);
        setTimeout(() => {
            this.parentNode.style.display = 'none';
        }, 4000); //延时执行
    }
}