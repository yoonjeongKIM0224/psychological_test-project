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
        {answer: '너... 는... 조용한 편이구나...!', type: '2'},
        { answer: '제발 잠깐이라도 쌉쳐봐', type: '1'},
      ]
    },

    // 배열 2
    {
      which: 'EI',
      q: '새학기의 시작! 옆자리 친구에게 나는?',
      a: [
        { answer: '안녕!! 너 이름 뭐야? 이름 예쁘다!', type: '1'},
        { answer: '하나님부처님알라신 저 어떻게 해야 되나요...', type: '2'},
      ]
    },
    {
      which: 'EI',
      q: '친구가 좋아하는 사람 앞에 끌고 가 같이 대화를 나누자고 한다.',
      a: [
        { answer: `속으로 '콩쥐야... X돼써...' 라고 생각한다.`, type: '2' },
        { answer: 'Hey 친구. 계좌 불러', type: '1' },
      ]
    },
    {
      which: 'SN',
      q: '좋아하는 사람을 생각할 때 나는?',
      a: [
        { answer: '이미 애가 2489232명', type: '2' },
        { answer: '현실적으로 가능할까나...', type: '1' },
      ]
    },
    {
      which: 'SN',
      q: '사랑에 빠진 나, 내가 세상을 바라볼 때?',
      a: [
        { answer: '산은 산이요. 물은 물이로다. 있는 그대로 본다.', type: '1' },
        { answer: '현실보다는 나만의 세계, 상상의 나래를 펼친다.', type: '2' },
      ]
    },
  
    {
      which: 'SN',
      q: '데이트 중 슬슬 배가 고픈데 음식점을 발견했다.',
      a: [
        { answer: '외관상 여기는 맛집일 수밖에 없어. 드가자!', type: '2' },
        { answer: '아 잠만 카카오맵 리뷰 좀 보고', type: '1' },
      ]
    },
    {
      which: 'TF',
      q: '화가 났을 때 나의 첫 반응은?',
      a: [
        { answer: '"야. 봐 봐?" 이성적으로 판단하여 차분히 말한다.', type: '1' },
        { answer: '"흐어어어엉" 눈물부터 흘러서 말하기가 버겁다.', type: '2' },
      ]
    },
    {
      which: 'TF',
      q: '좋아하는 사람이 힘든 상황에 처했다.',
      a: [
        { answer: '현실적인 해결책을 제시하고 응원한다.', type: '1' },
        { answer: '감정을 공감하고 정신적인 지지를 해준다.', type: '2' },
      ]
    },
    {
      which: 'TF',
      q: '좋아하는 사람과 대화할 때 나는?',
      a: [
        { answer: '그 사람이 대화할 때 리액션하며 공감한다.', type: '2' },
        { answer: '질문으로 상대방에 대해 물어보고 궁금해한다.', type: '1' },
      ]
    },
    {
      which: 'JP',
      q: '갑자기 분위기 제주도! 제주도에 가야겠다!',
      a: [
        { answer: '요일별로 세부일정을 계획한다.', type: '1' },
        { answer: '비행기 표 예매 완료~! 계획은 거의 끝났다고 본다.', type: '2' },
      ]
    },
    {
      which: 'JP',
      q: '나랑 더 가까운 것은?',
      a: [
        { answer: '내 물건들은 어디 있는지 잘 안다고 생각하지만, 막상 찾아보면 없다...', type: '2' },
        { answer: '정리정돈을 잘하고 내 물건이 어딨는지 잘 찾는다.', type: '1' },
      ]
    },
    {
      which: 'JP',
      q: '좋아하는 사람에게 고백하려고 한다.',
      a: [
        { answer: '철저한 계획을 잡고 고백할 타이밍을 노린다.', type: '1' },
        { answer: '분위기 봐서 즉흥적으로 고백한다.', type: '2' },
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