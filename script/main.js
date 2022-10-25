const main = document.querySelector('#main');
const qna = document.querySelector('#qna');
const result = document.querySelector('#result');
const endPoint = qnaList.length;
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

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

function addAnswer(answerText, qIdx, i){
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');

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

        let target = qnaList[qIdx].a[idx].type;

        console.log(target);

        for(let i = 0; i < target.length; i++){
            select[target[i]] += 1;
        }

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

    console.log(select);
    calResult();
    setResult();

    // 여기서 실행하면 setTimeout를 거치지 않고 실행하게 됨
}

function calResult(){
    //indexOf: 인덱스값 반환, Math.max: 최대값, ...select: 전개구문(선택한 배열을 펼치게 해 줌)
    let resul = select.indexOf(Math.max(...select));

    return resul;
}

function setResult(){
    let point = calResult(); //calResult의 리턴값

    const resultName = document.querySelector('.resultName'); //결과 제목 요소
    resultName.innerHTML = infoList[point].name; //결과 제목 요소에 텍스트 넣기

    let resultImg = document.createElement('img'); //img 태그 만들기
    const imgDiv = document.querySelector('#resultImg'); //만든 img 태그 넣을 부모 요소
    let imgURL = `img/image-${point}.png`; //동일한 주소 변수 생성
    resultImg.src = imgURL; //img 주소(src)
    resultImg.alt = point; //img 대체텍스트(alt)
    resultImg.classList.add('img-fluid'); //img 클래스
    imgDiv.appendChild(resultImg); //imgDiv(태그 넣을 부모 요소)에 만든 img 태그 넣기

    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoList[point].desc;
}

