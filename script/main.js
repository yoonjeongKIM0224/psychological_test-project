const main = document.querySelector('#main');
const qna = document.querySelector('#qna');
const result = document.querySelector('#result');
const endPoint = qnaList.length;
const select = []; //사용자가 선택한

//*시작하는 함수
function begin(){
    main.style.animation = "fadeOut 0.5s"; // main 사라지는 중

    setTimeout(()=>{ // [main 사라지는 중]의 중간 시점에서 시작
        qna.style.animation = "fadeIn 0.5s"; // qna 생기는 중
        
        setTimeout(()=>{ // [main 사라지는 중]의 끝 시점, [qna 생기는 중]의 중간에서 시작
            main.style.display = "none"; // main none
            qna.style.display = "block"; // qna block
        }, 240); // 0.24초
        
        let qIdx = 0;
        goNext(qIdx);

    }, 240); // 0.24초

    // 여기서 실행하면 setTimeout를 거치지 않고 실행하게 됨
}

function goNext(qIdx){ // 현재 qIdx = 0
    if(qIdx === endPoint) {
        goResult();
        return;
    }
    
    let q = document.querySelector('.qBox'); // .qBox
    q.innerHTML = qnaList[qIdx].q; // .qBox의 질문 넣기

    // Iteration: 되풀이
    // 변수 i는 qnaList의 qIdx(처음엔 0)번째의 a 안에 있는 배열의 개수만큼 반복
    for(let i in qnaList[qIdx].a) { 
        // console.log(i);
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i); // 답변(a) 버튼들을 만드는 함수
    }

    //* 상태 바
    let status = document.querySelector('.statusBar');
    status.style.width = (100/parseInt(endPoint)) * (qIdx+1) + '%';
}

//답변(a) 버튼들을 만드는 함수
function addAnswer(answerText, qIdx, idx){
    let a = document.querySelector('.answerBox');
    let answer = document.createElement('button');// i만큼 button 태그를 만들어줌
    answer.classList.add('answerList');

    a.appendChild(answer);// i만큼 button을 넣어줌
    answer.innerHTML = answerText;// qnaList의 n번째의 a의 개수만큼(i만큼) 그 안의 답변 텍스트를 갖고 옴

    answer.addEventListener('click', function(){
        let children = document.querySelectorAll('.answerList');

        select[qIdx] = idx; //사용자가 누른 버튼

        for(let i = 0; i < children.length; i++) {
            children[i].disabled = true;
            children[i].style.display = 'none';
        }

        goNext(qIdx+1);
    });
}

function goResult(){
    qna.style.animation = "fadeOut 0.5s"; // main 사라지는 중

    setTimeout(()=>{ // [main 사라지는 중]의 중간 시점에서 시작
        result.style.animation = "fadeIn 0.5s"; // qna 생기는 중
        
        setTimeout(()=>{ // [main 사라지는 중]의 끝 시점, [qna 생기는 중]의 중간에서 시작
            qna.style.display = "none"; // main none
            result.style.display = "block"; // qna block
        }, 240); // 0.24초

    }, 240); // 0.24초

    // console.log(select);

    // 여기서 실행하면 setTimeout를 거치지 않고 실행하게 됨
}

function calResult(){
    let pointArray = [
        {name: 'mouse', value: 0, key: 0},
        {name: 'cow', value: 0, key: 1},
        {name: 'tiger', value: 0, key: 2},
        {name: 'rebbit', value: 0, key: 3},
        {name: 'dragon', value: 0, key: 4},
        {name: 'snake', value: 0, key: 5},
        {name: 'horse', value: 0, key: 6},
        {name: 'sheep', value: 0, key: 7},
        {name: 'monkey', value: 0, key: 8},
        {name: 'chick', value: 0, key: 9},
        {name: 'dog', value: 0, key: 10},
        {name: 'pig', value: 0, key: 11}
    ]
}