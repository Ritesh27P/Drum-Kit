for(let i=0; i<7; i++){
    let cls = document.querySelectorAll('drum')
    document.querySelectorAll('.drum')[i].addEventListener('click', function(){
        this.classList.toggle('pressed')
        switch (this.innerHTML) {
            case 'w':
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            case 'a':
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
            case 's':
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;    
            case 'd':
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;   
            case 'j':
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;    
            case 'k':
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
            case 'l':
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;

            default:
                break;
        }
    })
}


document.addEventListener('keypress', function(){
    let btn_key = event.key;
    switch (btn_key) {
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;    
        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;   
        case 'j':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;    
        case 'k':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;

        default:
            break;
    }

})

