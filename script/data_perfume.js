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
      q: '친구들과의 주말 계획을 세우려고 할 때, 당신이 먼저 고려하는 것은',
      a: [
        {answer: '친구들과 함께 다양한 활동을 즐기는 것', type: '1', score: '3'},
        {answer: '혼자서 조용한 시간을 가지며 쉬고 싶은 것', type: '2', score: '5'},
      ]
    },

    // 배열 2
    {
      which: 'EI',
      q: '새로운 사람들과 만날 때, 당신이 먼저 하는 행동은',
      a: [
        {answer: '대화를 시작하여 그들과의 관계를 즐기는 것', type: '1', score: '3'},
        {answer: '조용히 관찰하고 그들을 이해하는 것', type: '2', score: '5'},
      ]
    },
    {
      which: 'EI',
      q: '어떤 사람들이나 사건들이 주변에서 일어날 때, 당신이 보통 하는 것은',
      a: [
        {answer: '사람들과 대화하고 관여하여 상황을 즐기는 것', type: '1', score: '3'},
        {answer: '한 번 생각해보고 주변을 조용히 지켜보며 내면으로 그들을 이해하는 것', type: '2', score: '5'},
      ]
    },
    {
      which: 'SN',
      q: '새로운 도전이나 프로젝트를 시작할 때, 당신이 주로 고려하는 것은',
      a: [
        {answer: '실제적인 실행과 세부 사항에 대한 것', type: '1', score: '3'},
        {answer: '창의적인 아이디어와 가능성에 대한 것', type: '2', score: '5'},
      ]
    },
    {
      which: 'SN',
      q: '쇼핑을 할 때, 당신이 먼저 주의를 기울이는 것은',
      a: [
        {answer: '품질이나 기능성에 대한 것', type: '1', score: '3'},
        {answer: '새로운 트렌드나 독특한 디자인에 대한 것', type: '2', score: '5'},
      ]
    },
    {
      which: 'SN',
      q: '새로운 계획을 세울 때, 당신이 주로 고려하는 것은',
      a: [
        {answer: '창의적이고 특별한 아이디어나 가능성에 대한 것', type: '1', score: '3'},
        {answer: '구체적인 세부사항과 실제적인 실행 가능성에 대한 것', type: '2', score: '5'},
      ]
    },
    {
      which: 'TF',
      q: '친구에게 조언을 구할 때, 당신이 먼저 고려하는 것은',
      a: [
        {answer: '상황을 분석하고 논리적인 조언을 주는 것', type: '1', score: '3'},
        {answer: '그들의 감정과 가치관에 맞춘 조언을 주는 것', type: '2', score: '5'},
      ]
    },
    {
      which: 'TF',
      q: '중요한 결정을 내릴 때, 당신이 가장 먼저 고려하는 것은',
      a: [
        {answer: '사실과 논리에 기반한 결정이 적절한지에 대한 것', type: '1', score: '3'},
        {answer: '결정이 주변 사람들에게 미치는 영향과 그들의 감정에 대한 것', type: '2', score: '5'},
      ]
    },
    {
      which: 'TF',
      q: '일상적인 결정을 내릴 때, 당신이 먼저 고려하는 것은',
      a: [
        {answer: '사실과 논리에 기반하여 판단하는 것', type: '1', score: '3'},
        {answer: '감정과 가치관을 고려하여 판단하는 것', type: '2', score: '5'},
      ]
    },
    {
      which: 'JP',
      q: '주말에 계획을 세울 때, 당신이 가장 선호하는 방식은',
      a: [
        {answer: '일정을 엄격히 지키며 계획에 따라 행동하는 것', type: '1', score: '3'},
        {answer: '유연하게 계획을 조정하며 새로운 가능성을 탐색하는 것', type: '2', score: '5'},
      ]
    },
    {
      which: 'JP',
      q: '프로젝트를 시작할 때, 당신이 주로 선호하는 방식은',
      a: [
        {answer: '목표를 설정하고 계획을 구체적으로 세운 뒤에 일을 시작하는 것', type: '1', score: '3'},
        {answer: '일을 시작하기 전에 다양한 옵션을 고려하고 유연하게 계획을 조정하는 것', type: '2', score: '5'},
      ]
    },
    {
      which: 'JP',
      q: '새로운 일을 시작할 때, 당신이 보통 하는 것은',
      a: [
        {answer: '계획을 세우고 일정에 따라 진행하는 것', type: '1', score: '3'},
        {answer: '새로운 가능성을 탐색하고 상황에 따라 유연하게 대처하는 것', type: '2', score: '5'},
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