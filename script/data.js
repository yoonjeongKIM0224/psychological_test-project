// console.log(qnaList[0].q); 객체의 키와 벨류를 부르는 법

/*
EI (1, 2)
SN (1, 2)
TF (1, 2)
JP (1, 2)
*/

// 배열
const qnaList = [
    // 배열 1 - 객체
    {
      which: 'EI', //
      q: '친구들에게 자주 듣는 말은?',
      a: [
        {answer: '제발 잠깐이라도 쌉쳐봐', type: '1', score: '3'},
        {answer: '너... 는... 조용한 편이구나...!', type: '2', score: '5'},
      ]
    },

    // 배열 2
    {
      which: 'EI',
      q: '새학기의 시작! 옆자리 친구에게 나는?',
      a: [
        {answer: '안녕!! 너 이름 뭐야? 이름 예쁘다!', type: '1', score: '3'},
        {answer: '하나님부처님알라신 저 어떻게 해야 되나요...', type: '2', score: '5'},
      ]
    },
    {
      which: 'EI',
      q: '친구가 좋아하는 사람 앞에 끌고 가 같이 대화를 나누자고 한다.',
      a: [
        {answer: 'Hey 친구. 계좌 불러', type: '1', score: '3'},
        {answer: `속으로 '콩쥐야... X돼써...' 라고 생각한다.`, type: '2', score: '5'},
      ]
    },
    {
      which: 'SN',
      q: '좋아하는 사람을 생각할 때 나는?',
      a: [
        {answer: '현실적으로 가능할까나...', type: '1', score: '3'},
        {answer: '이미 애가 2489232명', type: '2', score: '5'},
      ]
    },
    {
      which: 'SN',
      q: '내가 더 중요하게 생각하는 것은?',
      a: [
        {answer: '무조건 나중에 어떨지 먼저 생각한다.', type: '1', score: '3'},
        {answer: '뭐든 현재가 제일 중요하다.', type: '2', score: '5'},
      ]
    },
  
    {
      which: 'SN',
      q: '데이트 중 슬슬 배가 고픈데 음식점을 발견했다.',
      a: [
        {answer: '아 잠만   카카오맵 리뷰 좀 보고', type: '1', score: '3'},
        {answer: '외관상 여기는 맛집일 수밖에 없어. 드가자!', type: '2', score: '5'},
      ]
    },
    {
      which: 'TF',
      q: '화가 났을 때 나의 첫 반응은?',
      a: [
        {answer: '"야. 들어 봐?" 이성적으로 판단하여 차분히 말한다.', type: '1', score: '3'},
        {answer: '"흐어어어엉" 눈물부터 흘러서 말하기가 버겁다.', type: '2', score: '5'},
      ]
    },
    {
      which: 'TF',
      q: '일할 때 나는?',
      a: [
        {answer: '남들이 하는 거 보고 대충 따라한다.', type: '1', score: '3'},
        {answer: '나만의 편한 방식을 만든다.', type: '2', score: '5'},
      ]
    },
    {
      which: 'TF',
      q: '나는 주변 사람들에게 이런 말을 듣는다!',
      a: [
        {answer: '너는 진짜 무인도에 가서도 잘 살 것 같아.', type: '1', score: '3'},
        {answer: '너는 무인도에서 살아남을 거 같긴 한데 폭탄머리한 상태로 발견될 듯', type: '2', score: '5'},
      ]
    },
    {
      which: 'JP',
      q: '갑분여.(갑자기 분위기 여행이라는 뜻) 여행을 떠나야겠다!',
      a: [
        {answer: '1초마다 어떻게 할지 계획은 이미 다 세워뒀지.', type: '1', score: '3'},
        {answer: '비행기 표 예약한 거면 계획 끝! 아냐?', type: '2', score: '5'},
      ]
    },
    {
      which: 'JP',
      q: '상대방의 부탁을 거절할 때는?',
      a: [
        {answer: '안 돼. 안 된다고. 아니 원래 안 됐다고.', type: '1', score: '3'},
        {answer: '음... 음... 그럼 내가 이렇게 해줄까? 아... 그렇구나 알겠어 그럴게.', type: '2', score: '5'},
      ]
    },
    {
      which: 'JP',
      q: '좋아하는 사람에게 고백하려고 한다.',
      a: [
        {answer: '철저한 계획을 잡고 고백할 타이밍을 노린다.', type: '1', score: '3'},
        {answer: '분위기 봐서 즉흥적으로 고백한다.', type: '2', score: '5'},
      ]
    }
  ]

const infoList = [
  {
    num: 1112, //ESTP
    name: 'ESTP',
    desc: 'ESTP입니다!!!!',
  },
  {
    num: 1122,  //ESFP
    name: 'ESFP',
    desc: 'ESFP입니다!!!!',
  },
  {
    num: 1222, //ENFP
    name: 'ENFP',
    desc: 'ENFP입니다!!!!',
  },
  {
    num: 1212, //ENTP
    name: 'ENTP',
    desc: 'ENTP입니다!!!!',
  },
  {
    num: 1111, //ESTJ
    name: 'ESTJ',
    desc: 'ESTJ입니다!!!!',
  },
  {
    num: 1121, //ESFJ
    name: 'ESFJ',
    desc: 'ESFJ입니다!!!!',
  },
  {
    num: 1221, //ENFJ
    name: 'ENFJ',
    desc: 'ENFJ입니다!!!!',
  },
  {
    num: 1211, //ENTJ
    name: 'ENTJ',
    desc: 'ENTJ입니다!!!!',
  },
  {
    num: 2111, //ISTJ
    name: 'ISTJ',
    desc: 'ISTJ입니다!!!!',
  },
  {
    num: 2121, //ISFJ
    name: 'ISFJ',
    desc: 'ISFJ입니다!!!!',
  },
  {
    num: 2221, //INFJ
    name: 'INFJ',
    desc: 'INFJ입니다!!!!',
  },
  {
    num: 2211, //INTJ
    name: 'INTJ',
    desc: 'INTJ입니다!!!!',
  },
  {
    num: 2112, //ISTP
    name: 'ISTP',
    desc: 'ISTP입니다!!!!',
  },
  {
    num: 2122, //ISFP
    name: 'ISFP',
    desc: 'ISFP입니다!!!!',
  },
  {
    num: 2222, //INFP
    name: 'INFP',
    desc: 'INFP입니다!!!!',
  },
  {
    num: 2212, //INTP
    name: 'INTP',
    desc: 'INTP입니다!!!!',
  },
]