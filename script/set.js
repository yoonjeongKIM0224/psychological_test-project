let head = document.querySelector('head');
head.innerHTML += `
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<meta name="author" content="너의 심리"> <!-- 문서의 저자 -->
<meta name="keyword" content="너의 심리테스트"> <!-- 검색 엔진을 위한 키워드 정의 -->
<meta name="description" content="너의 심리테스트"> <!-- 웹페이지에 대한 설명 정의 -->

<!-- 구글 애드센스 -->
<meta name="google-adsense-account" content="ca-pub-2349443946922657">
<meta name="google-site-verification" content="MPVsitjopQR6qdMp2A8OtHoBjnUz1TXBDjJZQTd98-Q" />

<!-- favicon -->
<link rel="shortcut icon" href="/img/icon/logo_black.svg">
<link rel="apple-touch-icon-precomposed" href="/img/icon/logo_black.svg">
<!--// favicon -->

<title>${head.dataset.tit ? head.dataset.tit : '너의 심리'}</title>`;

let myScript01 = document.createElement('script');
myScript01.src = 'https://kit.fontawesome.com/c21bf41c63.js';
myScript01.crossOrigin = 'anonymous';
head.appendChild(myScript01);

let allWrapper = document.querySelector('.all-wrapper');
let header = document.createElement('header');

let testList = [
    {
        myLink: 'devotion.html',
        myImg: '/img/test/devotion-thumbnail01.svg',
        myTit: '나는 상대방의 헌신에 어떨까?',
        myDesc: '누군가 "난 널 위해서 죽을 수 있어."라고 한다면?'
    },
    {
        myLink: 'perfume.html',
        myImg: '/img/test/devotion-thumbnail01.svg',
        myTit: '나는 어떤 향기의 사람일까?',
        myDesc: 'ex) 나는 시원한 향의 사람이야~'
    }
];


let lis = '';

testList.forEach(function(item){
    li = `<li class="item">
        <a href="/pages/test/${item.myLink}" class="item-cont">
            <div class="img_wrap">
                <img src="${item.myImg}" alt="썸네일">
            </div>
            <div class="txt_area">
                <span class="tit">${item.myTit}</span>
                <p class="desc">${item.myDesc}</p>
            </div>
        </a>
    </li>`;

    lis += li;
});

let testUl = document.querySelector('#testUl');

testUl ? testUl.innerHTML = lis : null;

header.innerHTML = `
    <div class="logo_wrap">
        <h1 class="logo01"><a href="/pages/main/all.html"><span class="blind">your simlee</span></a></h1>
    </div>`;

allWrapper.prepend(header);


