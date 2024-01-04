const main = document.querySelector('#main');
const result = document.querySelector('#result');
const cookieIco = document.querySelector('.cookie_ico');
let cookieIcoNum = 0;

function resultStart(){
    main.style.animation = "fadeOut 0.5s"; // main 사라지는 중

    setTimeout(()=>{ // [main 사라지는 중]의 중간 시점에서 시작
        result.style.animation = "fadeIn 0.5s"; // result 생기는 중
        
        setTimeout(()=>{ // [main 사라지는 중]의 끝 시점, [result 생기는 중]의 중간에서 시작
            main.style.display = "none"; // main none
            result.style.display = "block"; // qna block
        }, 240); // 0.24초
    }, 240); // 0.24초
}

cookieIco.addEventListener('click', function(){
    cookieIcoNum = cookieIcoNum + 1;
    cookieIco.setAttribute('data-click', `click${cookieIcoNum}`);
});

let today = new Date();
let hours  = today.getHours();

if(hours > 18){
    console.log('저녁');
} else {
    console.log('낮');
}

