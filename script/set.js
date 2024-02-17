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

let fileName = window.location.pathname.split("/").pop();

let menuNav = [
    {
        myHref: 'all.html',
        myTit: '전체'
    },
    {
        myHref: 'love.html',
        myTit: '연애 테스트'
    },
    {
        myHref: 'fun.html',
        myTit: '재미 테스트'
    }
];

let allWrapper = document.querySelector('.all-wrapper');
let header = document.createElement('header');
let btmNav = document.createElement('div');
btmNav.classList.add('header');

let lis = '';
let ulFile = false;

menuNav.forEach(function(item){
    li = `<li class="item ${item.myHref === fileName ? 'active' : ''}">
        <a href="/pages/main/${item.myHref}" class="item-cont">
            <i class="fa-solid fa-heart"></i>
            ${item.myTit}
        </a>
    </li>`

    lis += li;

    if(fileName === item.myHref){
        ulFile = true;
    }
});

let ul = `
<div class="list-type01 top-list-wrap round">
    <ul class="list scrll_wrap">
        ${lis}
    </ul>
</div>`;

header.innerHTML = `
    <div class="logo_wrap">
        <h1 class="logo01"><a href="/pages/main/all.html"><span class="blind">your simlee</span></a></h1>
    </div>
    ${ulFile ? ul : ''}`;

btmNav.innerHTML = `
    <div class="header-wrap">
        <div class="list-type01">
            <ul class="list">
                <li class="item">
                    <a href="/pages/main/all.html" class="item-cont" title="메인페이지 가기">
                        <i class="fa-solid fa-house clr-white"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>`;

allWrapper.prepend(header);


