const main = document.querySelector('#main');
const qna = document.querySelector('#qna');
const result = document.querySelector('#result');
const endPoint = 12;
// console.log(main, qna);

function goResult(){
    qna.style.animation = 'fadeOut 1s'; //qna은 점점 사라지고

    setTimeout(() => { //450 뒤에 
        result.style.animation = 'fadeIn 1s'; //result는 점점 생기게

        
        setTimeout(() => { //qna은 아예 사라지고
            qna.style.display = 'none';
            result.style.display = 'block'; //result는 생기고
        }, 450);
    })
}

function addAnswer(answerText, qIdx, i){ //여기까지 함.
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');

    answer.classList.add('answerList');
    //.answerBox 내의 button 기입
    a.appendChild(answer);

    answer.innerHTML = answerText;
    answer.addEventListener('click', function(){
        var children = document.querySelectorAll('.answerList');
        for(let i = 0; i < children.length; i++) {
             children[i].disabled = true;
            children[i].style.display = 'none';
        }

        goNext(++qIdx);
    }, false);
}

function goNext(qIdx){
    if(qIdx+1 === endPoint) {
        goResult();
        return;
    }

    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;

    for(let i in qnaList[qIdx].a) {
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    }

    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint) * (qIdx+1) + '%';
}

//setTimeout 일정 시간이 지난 후 함수를 실행
function begin(){
    main.style.animation = 'fadeOut 1s'; //메인은 점점 사라지고

    setTimeout(() => { //450 뒤에 
        qna.style.animation = 'fadeIn 1s'; //큐엔에이는 점점 생기게

        
        setTimeout(() => { //메인은 아예 사라지고
            main.style.display = 'none';
            qna.style.display = 'block'; //큐엔에이는 생기고
        }, 450);

        let qIdx = 0;
        goNext(qIdx);
    }, 450);
}
