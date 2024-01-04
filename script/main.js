const main = document.querySelector('#main');
const qna = document.querySelector('#qna');
const result = document.querySelector('#result');
const endPoint = qnaList.length;
let peopleNameInp = document.querySelector('#inp_name');
let peopleName = null;


let selectE = {type: 'E', result: 0};
let selectI = {type: 'I', result: 0};

let selectS = {type: 'S', result: 0};
let selectN = {type: 'N', result: 0};

let selectT = {type: 'T', result: 0};
let selectF = {type: 'F', result: 0};

let selectJ = {type: 'J', result: 0};
let selectP = {type: 'P', result: 0};


// let selectSN;
// let selectTF;
// let selectJP;

/*
EI (1, 2)
SN (1, 2)
TF (1, 2)
JP (1, 2)
*/

//*시작하는 함수
function start(){
    main.classList.add('inp_time');
}

function begin(){
    if(peopleNameInp){
        if(!peopleNameInp.value) {
            document.querySelector('.inp-area .form_msg').classList.add('on');
        } else {
            peopleName = peopleNameInp.value;
        }
    }

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
}

function goNext(qIdx){ // 처음은 qIdx = 0
    if(qIdx === endPoint) {
        goResult();
        return;
    }
    
    let q = document.querySelector('.qBox'); // .qBox
    q.innerHTML = qnaList[qIdx].q; // .qBox의 질문 넣기

    let numBox = document.querySelector('.num-box'); // .qBox
    numBox.innerText = `${qIdx + 1}/${qnaList.length}`;

    // Iteration: 되풀이
    // 변수 i는 qnaList의 qIdx(처음엔 0)번째의 a 안에 있는 배열의 개수만큼 반복
    for(let i in qnaList[qIdx].a) {
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
        let targetType = qnaList[qIdx].a[idx].type;
        let targetScore = parseInt(qnaList[qIdx].a[idx].score);

        // console.log(targetScore);

        if(targetWhich === 'EI') {
            if(targetType == 1) {
                selectE.result = selectE.result + targetScore;
            } else{
                selectI.result = selectI.result + targetScore;
            }
        }

        if(targetWhich === 'SN') {
            if(targetType == 1) {
                selectS.result = selectS.result + targetScore;
            } else{
                selectN.result = selectN.result + targetScore;
            }
        }

        if(targetWhich === 'TF') {
            if(targetType == 1) {
                selectT.result = selectT.result + targetScore;
            } else{
                selectF.result = selectF.result + targetScore;
            }
        }

        if(targetWhich === 'JP') {
            if(targetType == 1) {
                selectJ.result = selectJ.result + targetScore;
            } else{
                selectP.result = selectP.result + targetScore;
            }
        }

        for(let i = 0; i < children.length; i++) {
            children[i].disabled = true;
            children[i].style.display = 'none';
        }

        // console.log(selectE);
        // console.log(selectI);

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

    
    let EIresulNum = '';
    let SNresulNum = '';
    let TFresulNum = '';
    let JPresulNum = '';
    
    if(selectE.result > selectI.result) {
        EIresulNum = selectE.type;
    } else {
        EIresulNum = selectI.type;
    }
    
    if(selectS.result > selectN.result) {
        SNresulNum = selectS.type;
    } else {
        SNresulNum = selectN.type;
    }
    
    if(selectT.result > selectF.result) {
        TFresulNum = selectT.type;
    } else {
        TFresulNum = selectF.type;
    }
    
    if(selectE.result > selectI.result) {
        JPresulNum = selectJ.type;
    } else {
        JPresulNum = selectP.type;
    }
    
    let allResult = EIresulNum + SNresulNum + TFresulNum + JPresulNum; //영어로 나옴

    return allResult;
}

function setResult(){
    let point = calResult(); //calResult의 리턴값
    let infoPoint = '';
    
    for(let i = 0; i < infoList.length; i++) {
        if(infoList[i].name == point) {
            infoPoint = infoList[i];
            // console.log(point);

            break;
        }
    }

    console.dir(Boolean(result.dataset.testname == 'devotion'));

    if(result.dataset.testname == 'devotion') {
        document.querySelectorAll('#resultImg > .name').forEach(function(item){
            item.innerText = peopleName;
        });
    }
    
    const resultName = document.querySelector('.resultName'); //결과 제목 요소
    resultName.innerHTML = point; //결과 제목 요소에 텍스트 넣기
    const resultDesc = document.querySelector('.resultDesc');
    resultDesc.innerHTML = infoPoint.desc;
    const imgDiv = document.querySelector('#resultImg'); //만든 img 태그 넣을 부모 요소
    let resultImg = document.createElement('img'); //img 태그 만들기
    let imgURL = `/img/test/image-${result.dataset.testname}-${infoPoint.name}.svg`; //동일한 주소 변수 생성
    resultImg.src = imgURL; //img 주소(src)
    resultImg.alt = infoPoint.name; //img 대체텍스트(alt)
    resultImg.classList.add('img-fluid'); //img 클래스
    imgDiv.appendChild(resultImg); //imgDiv(태그 넣을 부모 요소)에 만든 img 태그 넣기

    // console.log(point);
    // console.log(infoPoint.desc);
    // console.log(infoPoint.name);
    // console.log(peopleName);
}
