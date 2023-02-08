const main = document.querySelector('#main');
const qna = document.querySelector('#qna');
const result = document.querySelector('#result');
const endPoint = qnaList.length;
const select = ['', '', '', '', '', '', '', '', '', '', '', ''];

const selectEI = [];
const selectSN = [];
const selectTF = [];
const selectJP = [];

/*
EI (1, 2)
SN (1, 2)
TF (1, 2)
JP (1, 2)
*/

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

function goNext(qIdx){ // 처음은 qIdx = 0
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

        let targetWhich = qnaList[qIdx].which;
        let target = qnaList[qIdx].a[idx].type;

        select[qIdx] = target;

        console.log(targetWhich);
        console.log(target);

        if(targetWhich === 'EI') {
            selectEI.push(target);
        } else if(targetWhich === 'SN') {
            selectSN.push(target);
        } else if(targetWhich === 'TF') {
            selectTF.push(target);
        } else if(targetWhich === 'JP') {
            selectJP.push(target);
        }

        //찐 코드: for(let i = 0; i < select.length; i++){
        //     select[target[i]] += 1;
        // }

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

    calResult();
    setResult();

    // 여기서 실행하면 setTimeout를 거치지 않고 실행하게 됨
}

function calResult(){
    //indexOf: 인덱스값 반환, Math.max: 최대값, ...select: 전개구문(선택한 배열을 펼치게 해 줌)
    // console.log(selectEI);
    // console.log(selectSN);
    // console.log(selectTF);
    // console.log(selectJP);

    console.log('EI값: ' + Math.max(...selectEI));
    console.log('SN값: ' + Math.max(...selectSN));
    console.log('TF값: ' + Math.max(...selectTF));
    console.log('JP값: ' + Math.max(...selectJP));

    const EIresul = Math.max(...selectEI);
    const SNresul = Math.max(...selectSN);
    const TFresul = Math.max(...selectTF);
    const JPresul = Math.max(...selectJP);

    console.log(typeof EIresul);

    console.log(String(EIresul) + String(SNresul) + String(TFresul) + String(JPresul));

    // let resul = selectEI.indexOf(Math.max(...select));

    // return resul;
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
