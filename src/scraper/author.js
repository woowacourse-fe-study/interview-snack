export const AUTHOR = {
  hchayan: {
    nickname: '인치',
    img: 'https://avatars.githubusercontent.com/u/11311739?v=4',
    '1기': [
      {
        pageId: 2,
        title: '클로저는 무엇이며, 어떻게/왜 사용하나요?',
        comment:
          '핵심 키워드: 전역변수, 데이터 은닉, 렉시컬 환경\n경험 요약: 입력에 대한 DB를 통한 유효성 검증을 할때 API 통신 비율을 줄이기 위해 사용한 디바운싱의 타이머 함수\n스터디 회고 : 클로저를 그 함수가 선언된 렉시컬 환경의 조합이다. 라는 식으로 설명하면 깔끔하겠지만, 렉시컬 환경에 대해 완벽히 설명할 자신이 없어서 돌려서 말했던것 같다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/2}',
      },
      {
        pageId: 3,
        title: '이벤트 위임에 대해 설명해주세요.',
        comment:
          '핵심키워드 : 이벤트 버블링, 이벤트 캡쳐링, 이벤트 위임\n경험요약: Vanilla JS를 이용한 프로젝트에서 하위 반복되는 요소들에 공통된 이벤트를 달아줘야될때 사용했다.\n스터디회고 : 위임과 버블링은 잘 설명한것 같지만, 이벤트 캡쳐링에 대한 전반적인 개념을 잘 설명하지 못했다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/3}',
      },
      {
        pageId: 4,
        title: '.forEach 루프와 .map() 루프 사이의 주요 차이점을 설명할 수 있나요? 왜 둘 중 하나를 선택할 것인가요?',
        comment:
          '핵심 키워드 : 배열 반환여부, 선언형, 명령형 프로그래밍 방식\n경험 요약 : map 메서드는 메모리를 할당하고 리턴값을 저장하는 반면, forEach는 현재 배열을 변환하고 undefined를 리턴한다\n스터디 회고 : 명령형, 선언형 프로그래밍 방식의 차이점을 이야기하며 리액트에서 return문에 forEach를 사용하지 못하는 이유에 대해서도 이야기 하는 방향으로 발전해나가면 더 좋을것 같다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/4}',
      },
      {
        pageId: 5,
        title: 'Async, Await가 무엇인가요?\n사용해본 경험이 있나요?',
        comment:
          '핵심키워드: 비동기 처리 패턴, 시맨틱슈가\n경험요약: try-catch만으로 가능한 에러처리, 용이한 메서드 분리\n스터디회고: 기본적인 지식들에 대해서 잘 말한것 같다. 프라미스의 구체적인 동작 방식에 대해 저확히 알아둬도 좋을것같다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/5}',
      },
      {
        pageId: 6,
        title: '자바스크립트의 원시 타입(Primitive Data Type)은 몇 가지인가요? 전부 말해주세요.',
        comment:
          '핵심키워드: 불변성, symbol, bigint\n경험요약: 없음\n스터디회고: Symbol, BigInt에 대해 기본 개념만 알지 구체적인 사용법이나 경험이 없다..',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/6}',
      },
      {
        pageId: 8,
        title: '호이스팅(hoisting)에 대해 설명하세요.',
        comment:
          '핵심키워드: 선언부 끌어올리기, var, 함수 선언문\n경험요약: 동일한 변수, 함수명으로 선언을 했을때 그 사이에서 해당 변수, 함수를 사용했을때 예상과 다른 결과를 도출하는 케이스\n스터디회고: 호이스팅이 발생하는 이유에 대해 알아봐야겠다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/8}',
      },
      {
        pageId: 9,
        title: 'JavaScript에서 this는 어떻게 작동하나요?\n.call과 .apply의 차이점은 무엇인가요?',
        comment:
          '핵심키워드 : 화살표함수의 this, bind, call, apply\n경험요약 : bind를 사용해 react에서 render에서 선언한 메서드를 클래스의 메서드로 매칭\n스터디회고 :call, apply를 사용했던 경험이 없었다. 그래도 대신 bind 사용 경험 이야기함. this를 사용하면 좋은 상황이 리액트에서 매칭하는 상황밖에 생각이 안났다. 순수 JS에서 this를 사용하면 좋은 경우에 대해서도 알아보면 좋을것 같다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/9}',
      },
      {
        pageId: 10,
        title: '이벤트 루프란 무엇인가요?\n콜 스택과 태스크 큐의 차이점은 무엇인가요?',
        comment:
          '핵심키워드: 싱글/멀티 스레드, web api, 콜 스택, 매크로 테스크 큐, 마이크로 테스크 큐\n경험요약: 전반적인 이벤트 루프 작동 방식에 대해 설명함, 틱의 실행 흐름 설명함. 비동기 통신으로 질문 발전 가능성 있음\n스터디회고: 말그대로 이론 자체. 관련된 답을 평소에 생각해보기 힘든 질문 (왜 브라우저 엔진은 단일 스레드?, 왜 매크로/마이크로 테스크 큐 나뉘어있고, 실행방식이 다름?) 에 대해서는 한번 생각해보면 좋을것 같다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/10}',
      },
      {
        pageId: 11,
        title: 'spread 문법을 사용할 때의 이점은 무엇인가요?\nrest 문법과 다른 점은 무엇인가요?',
        comment:
          '핵심키워드: 연산자, 파라미터, 이터러블, rest, spread\n경험요약: 서브객체를 합쳐 큰 객체로 만들어야 되는 경우 (rootReducer)에 spread 문법 사용. 아토믹 디자인에서 명시할꺼 제외 나머지 속성들 ...args로 일괄 전달 경험.\n스터디회고: 연산자와 파라미터의 차이. 사용 위치에 대해 이야기함',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/11}',
      },
      {
        pageId: 12,
        title: '함수란 무엇인가요? 아는 대로 설명해주세요.',
        comment:
          '핵심키워드: 서브루틴, 일급 객체, function 객체\n경험요약: 특별한 경험 없었지만, JS에서 함수가 추가적으로 가지는 특징 위주로 정리했다.\n스터디회고: 함수에 관련해서 산발적으로 아는것들이 있는데, 이들에 대한 연계에 대해 생각해봐야겠다 (순수함수, 고차함수, 함수 표현식, 생성자 함수 등등...)',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/12}',
      },
      {
        pageId: 13,
        title: '호스트 객체와 내장 객체의 차이점은 무엇인가요?',
        comment:
          '핵심키워드: 네이티브 객체, 호스트 객체\n경험요약: 특별한 경험은 없음. JS의 객체 분류에 대해 알수있었다.\n스터디회고:JS 객체 분류에 대해 새롭게 알게되었다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/13}',
      },
      {
        pageId: 14,
        title: '자바스크립트에서 프로토타입이란 무엇인가요?\n프로토타입 상속이 어떻게 작동하는지 설명해주세요.',
        comment:
          '핵심키워드: proto ,객체\n경험요약: ES6의 수혜자로, prototype을 직접적으로 다뤄본적이 없다.\n스터디회고:  JS에서 프로퍼티를 탐색하는 과정에서 현재 스코프에 없으면 prototpye에서 검색하는 과정이 일어나는것이 프로토타입 상속이였다. 프로토타입에 대한 전반적인 이해도 아직 부족함을 느낀다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/14}',
      },
    ],
  },
  zigsong: {
    nickname: '지그',
    img: 'https://avatars.githubusercontent.com/u/44080404?v=4',
    '1기': [
      {
        pageId: 2,
        title: '클로저는 무엇이며, 어떻게/왜 사용하나요?',
        comment:
          '핵심키워드: 실행컨텍스트, 렉시컬 환경, 스코프\n경험요약: React의 useState를 비롯한 hook\n스터디회고: 기본 개념에 대한 정리는 잘 되어 있다. 다만 꼬리질문을 받았을 때 답변의 맥락이 넓어서 대답을 하다가 길을 잃을 수도 있으니 주의하자!',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/2}',
      },
      {
        pageId: 3,
        title: '이벤트 위임에 대해 설명해주세요.',
        comment:
          "핵심키워드: 컨테이너, 이벤트 핸들러\n경험요약: X\n스터디회고: 면접관 질문의 핵심이었던 '동작 메커니즘'에 대한 설명이 부족했다.",
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/3}',
      },
      {
        pageId: 4,
        title: '.forEach 루프와 .map() 루프 사이의 주요 차이점을 설명할 수 있나요? 왜 둘 중 하나를 선택할 것인가요?',
        comment:
          '핵심 키워드: 콜백 함수, 반환 값\n경험요약: React의 JSX에서 목록으로 반환하는 경우 map을 사용\n스터디회고: 무난하게 잘 답변',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/4}',
      },
      {
        pageId: 5,
        title: 'Async, Await가 무엇인가요?\n사용해본 경험이 있나요?',
        comment:
          '핵심키워드: 비동기\n경험 요약: 서버 api 사용\n스터디 회고: 왜 사용하게 되었는지는 잘 알고 있었지만, 문법적인 부분에 대한 설명이 조금 아쉬웠다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/5}',
      },
      {
        pageId: 6,
        title: '자바스크립트의 원시 타입(Primitive Data Type)은 몇 가지인가요? 전부 말해주세요.',
        comment:
          '핵심 키워드: 원시 타입들\n경험: X (질문 안함)\n스터디 회고: 메모리 할당과 관련돼서는 간결하게 답변한 것 같지만, 불변성에 대한 답변을 제대로 못했던 것 같다!',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/6}',
      },
      {
        pageId: 8,
        title: '호이스팅(hoisting)에 대해 설명하세요.',
        comment:
          '핵심키워드: 선언문, 스코프, 초기화\n경험요약: X (질문 안함)\n스터디회고: 코드 평가 과정이 컴파일 타임인지 런타임인지 애매하게 답변한 것 같다. 파노가 알려준 JIT 컴파일에 대해서도 공부해봐야겠다',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/8}',
      },
      {
        pageId: 9,
        title: 'JavaScript에서 this는 어떻게 작동하나요?\n.call과 .apply의 차이점은 무엇인가요?',
        comment:
          '핵심키워드: this, bind, call, apply, 화살표 함수\n경험요약: react class component 메서드의 this binding\n스터디회고: call과 apply의 차이가 항상 헷갈린다. 그리고객체메서드에서의ｔｈｉｓ바인딩을항상잘기억하자갑자기스페이스바가안된다',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/9}',
      },
      {
        pageId: 10,
        title: '이벤트 루프란 무엇인가요?\n콜 스택과 태스크 큐의 차이점은 무엇인가요?',
        comment:
          '핵심키워드: 콜 스택, 태스크 큐, 콜백, web API\n경험요약: 태스크 큐의 콜백 함수들이 항상 실행 시점을 보장하지 않기 때문에 계산을 잘 해야 한다\n스터디회고: web API의 역할에 대해 제대로 설명하지 못했다. 그리고 태스크 큐는 자바스크립트 엔진에 포함되어 있지 않다는 점을 기억하자!',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/10}',
      },
      {
        pageId: 11,
        title: 'spread 문법을 사용할 때의 이점은 무엇인가요?\nrest 문법과 다른 점은 무엇인가요?',
        comment:
          '핵심키워드: rest, spread, 이터러블, 유사배열\n경험요약: 우리가 일상적으로 사용하는 Math.max(...arr)도 모두 spread 연산자 덕택이다\n스터디회고: rest는 인수를 배열로, spread는 배열을 인수로! 반드시 똑바로 기억하자',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/11}',
      },
      {
        pageId: 12,
        title: '함수란 무엇인가요? 아는 대로 설명해주세요.',
        comment:
          "핵심키워드: 재사용, 반복되는 코드의 묶음, 화살표 함수 등\n경험요약: 함수는... 경험이지요...\n스터디회고: 함수 관련 질문은 콜백이나 즉시실행함수로도 이어질 수도 있다. 자바스크립트의 꽃(??)인 함수의 여러 가지 패턴들에 대해 미리 답변을 잘 준비해두자. 함수 리터럴은 '이름 없이 몸체만 있는 함수'다. 용어를 잘 기억해두자~!",
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/12}',
      },
      {
        pageId: 13,
        title: '호스트 객체와 내장 객체의 차이점은 무엇인가요?',
        comment:
          '핵심키워드: ECMAScript, 브라우저, DOM\n경험요약: 사실 호스트 객체라는 말은 처음 들어본다. ㅎㅎ 뻘쭘하다.\n스터디회고: 실행환경에서 제공하는 호스트 객체! node.js에서는 global을 제공! 브라우저가 뭘 제공하는지 제대로 알자!',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/13}',
      },
      {
        pageId: 14,
        title: '자바스크립트에서 프로토타입이란 무엇인가요?\n프로토타입 상속이 어떻게 작동하는지 설명해주세요.',
        comment:
          '핵심키워드: 상속, 프로토타입 체인, getPrototypeOfvs __proto__\n경험요약: 변수에서 메서드를 사용할 때 어떻게 메서드를 찾아가는지 (이론적으로) 설명함\n스터디회고: 프로토타입을 아직도 겉핥기 식으로 이해하고, 구체적인 학습이 조금 부족한 것 같다! 프로토타입의 생성자에 대해서도 설명하면 좋겠다',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/14}',
      },
    ],
  },
  '0307kwon': {
    nickname: '미키',
    img: 'https://avatars.githubusercontent.com/u/48755175?v=4',
    '1기': [
      {
        pageId: 2,
        title: '클로저는 무엇이며, 어떻게/왜 사용하나요?',
        comment:
          '핵심키워드 : 실행 컨텍스트, 렉시컬 환경\n경험요약 : private 변수를 만들 때 사용\n스터디회고 : 뭔가 내가 가진 지식을 모두 말해야할 것 같은 조급함에\n처음부터 클로저에 대해서 너무 많은 정보를 면접관에게 말했다. 처음에는 간단하게만 설명하고\n면접관이 추가 질문을 하면 답변하자',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/2}',
      },
      {
        pageId: 3,
        title: '이벤트 위임에 대해 설명해주세요.',
        comment:
          '핵심키워드: 캡처링, 버블링\n경험요약: 여러개의 element에 이벤트를 주어야할 때, 모달 dimmed 영역을 위해 이벤트 위임을 써본 경험\n스터디회고: 캡처링에 대한 지식이 부족. 캡처링만 가능한 이벤트들이 있고, 그런 이벤트들을 실제로 경험해봐야할듯',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/3}',
      },
      {
        pageId: 4,
        title: '.forEach 루프와 .map() 루프 사이의 주요 차이점을 설명할 수 있나요? 왜 둘 중 하나를 선택할 것인가요?',
        comment:
          '핵심키워드: 순회, 배열 리턴 여부\n경험요약: 어떤 배열을 가공할 때 => map, 동작을 여러번 수행만 할 때 => forEach\n스터디회고: 경험이 조금 더 구체적이었다면 좋았을듯...?',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/4}',
      },
      {
        pageId: 5,
        title: 'Async, Await가 무엇인가요?\n사용해본 경험이 있나요?',
        comment:
          '핵심키워드: promise, 비동기 처리, 시멘틱 슈거\n경험요약: Promise를 사용하는 경우를 제대로 대답하지 못함. 간단한 비동기 생성과 처리에 사용한다고 하면될듯\n스터디회고: Promise의 장풍과 에러 핸들링의 불편함을 막기위해 async, await를 쓴다. 명심하기~',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/5}',
      },
      {
        pageId: 6,
        title: '자바스크립트의 원시 타입(Primitive Data Type)은 몇 가지인가요? 전부 말해주세요.',
        comment:
          '핵심키워드: 불변성, Symbol\n경험요약: Symbol을 사용해본 경험을 물었는데 대답하지 못함\n스터디회고: Symbol을 사용해본 경험, bigInt에 대한 개념 정도는 추가로 알면 좋을 것 같아요 대체로 무난했습니다~!',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/6}',
      },
      {
        pageId: 8,
        title: '호이스팅(hoisting)에 대해 설명하세요.',
        comment:
          '핵심키워드: 선언문, 표현식, 식별자\n경험요약: 선언문이 위험한 이유를 잘 알고 있자.\n스터디회고: 호이스팅이 일어나는 이유에 대해서 좀 더 자세히 알면 좋을듯~! 그리고 var만 호이스팅이 되고 const,let은 호이스팅이 안된다는 점을 명심하자',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/8}',
      },
      {
        pageId: 12,
        title: '함수란 무엇인가요? 아는 대로 설명해주세요.',
        comment:
          '핵심키워드: 코드의 묶음, 어떤 입력이 있었을 때 어떠한 출력을 뱉는 것\n경험요약: 함수로 코드의 중복을 피할 수 있음\n스터디회고: 도비가 함수의 한자 풀이를 말해주면서 입출력과 관련해서 정의를 내렸다. 좋은 정의인듯해서 훔쳐가야할듯하다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/12}',
      },
      {
        pageId: 13,
        title: '호스트 객체와 내장 객체의 차이점은 무엇인가요?',
        comment:
          '핵심키워드: 네이티브 객체, 호스트 객체\n경험요약: 어렴풋이 알고만 있었는데 오늘 정확히 알게된 것 같다.\n스터디회고: 무난했다. 둘다 모두 잘 대답했음',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/13}',
      },
      {
        pageId: 14,
        title: '자바스크립트에서 프로토타입이란 무엇인가요?\n프로토타입 상속이 어떻게 작동하는지 설명해주세요.',
        comment:
          '핵심키워드: proto, prototype\n경험요약: 프로토 타입으로 상속을 구현해보라고 해서 당황 스터디 끝나고 같이해봤는데 Object.create가 동작이 이상해서 한참을 공부했다.\n스터디회고: 프로토 타입을 말로 설명하기 너무 어렵다ㅠㅜ 좀 더 다듬어야겠다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/14}',
      },
    ],
  },
  seojihwan: {
    nickname: '브랜',
    img: 'https://avatars.githubusercontent.com/u/52202474?v=4',
    '1기': [
      {
        pageId: 2,
        title: '클로저는 무엇이며, 어떻게/왜 사용하나요?',
        comment:
          '핵심키워드: 실행컨텍스트, 렉시컬 컨텍스트\n경험요약: counter를 통해 이전 함수의 계산 값 확인\n스터디회고: 예시의 설명이 매끄럽지 않았다.좀더 좋은 예시를 고민해보자',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/2}',
      },
      {
        pageId: 3,
        title: '이벤트 위임에 대해 설명해주세요.',
        comment:
          '핵심키워드: 이벤트버블링, 이벤트캡쳐링\n경험요약: 투두리스트, 이벤트리스너 등록및 해제\n스터디회고: 질문을 까먹고 답변이 길어진다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/3}',
      },
      {
        pageId: 4,
        title: '.forEach 루프와 .map() 루프 사이의 주요 차이점을 설명할 수 있나요? 왜 둘 중 하나를 선택할 것인가요?',
        comment: '핵심키워드:\n경험요약: 메서드의 이름도 네이밍이다\n스터디회고:',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/4}',
      },
      {
        pageId: 5,
        title: 'Async, Await가 무엇인가요?\n사용해본 경험이 있나요?',
        comment:
          '핵심키워드: 비동기 처리\n경험요약: api요청할 때 데이터를 자유롭게 처리가능\n스터디회고: promise와 차이점을 잘 설명하지 못했다~',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/5}',
      },
      {
        pageId: 8,
        title: '호이스팅(hoisting)에 대해 설명하세요.',
        comment:
          '핵심키워드: 식, 문, 스코프\n경험요약: 없음\n스터디회고: 호이스팅의 개념만알고 왜 일어나는지 언어레벨의 개념이 부족',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/8}',
      },
    ],
  },
  dudtjr913: {
    nickname: '디토',
    img: 'https://avatars.githubusercontent.com/u/64782636?v=4',
    '1기': [
      {
        pageId: 5,
        title: 'Async, Await가 무엇인가요?\n사용해본 경험이 있나요?',
        comment:
          '핵심키워드: async await, Promise\n경험요약: 비동기 로직을 처리할 때 Promise보다 가독성이 좋아서 사용했다.\n스터디회고: async await은 공부한 적이 많아 답변하는 것이 어렵지 않았다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/5}',
      },
      {
        pageId: 6,
        title: '자바스크립트의 원시 타입(Primitive Data Type)은 몇 가지인가요? 전부 말해주세요.',
        comment:
          '핵심키워드: 불변성, bigInt, 참조 타입\n경험요약: 없음\n스터디회고: 원시 타입과 참조 타입에 대한 설명이 조금 부족하지 않았나하는 생각이 든다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/6}',
      },
      {
        pageId: 8,
        title: '호이스팅(hoisting)에 대해 설명하세요.',
        comment:
          '핵심키워드: 스코프, 변수, 선언문\n경험요약: 없음\n스터디회고: 왜 호이스팅이 존재하는지 공부를 해봐야겠다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/8}',
      },
    ],
  },
  yungo1846: {
    nickname: '곤이',
    img: 'https://avatars.githubusercontent.com/u/59409762?v=4',
    '1기': [
      {
        pageId: 2,
        title: '클로저는 무엇이며, 어떻게/왜 사용하나요?',
        comment:
          '핵심키워드: 생명주기, 참조, 가비지 컬렉션\n경험요약: 쓰로틀과 디바운스의 타이머\n스터디회고: 질문 하나에 너무 많은 내용을 말한 것 같다는 생각이 든다. 중요한 것만 딱 끊어서 말하고 추가 질문이 들어왔을 때 이어 답변하자.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/2}',
      },
      {
        pageId: 3,
        title: '이벤트 위임에 대해 설명해주세요.',
        comment:
          '핵심키워드: 상위 요소, 버블링\n경험요약: 반복되는 상품 정보 버튼에 대한 이벤트를 컨테이너에 위임\n스터디회고: 상황이 머리 속으로 쉽게 그려지는 예시를 준비해야겠다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/3}',
      },
      {
        pageId: 4,
        title: '.forEach 루프와 .map() 루프 사이의 주요 차이점을 설명할 수 있나요? 왜 둘 중 하나를 선택할 것인가요?',
        comment:
          '핵심키워드: 반환값 여부, 성능, 불변성\n경험요약: 리액트의 불변성을 예시로 들며 map을 설명\n스터디회고: 리액트의 불변성 얘기는 굳이 꺼내지 않았어도 좋았을 것 같다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/4}',
      },
      {
        pageId: 5,
        title: 'Async, Await가 무엇인가요?\n사용해본 경험이 있나요?',
        comment:
          '핵심키워드: 비동기 처리, 프로미스\n경험요약: api 사용, promise\n스터디회고: async, await이 무엇인지 두괄식으로 말하지 않고 배경지식부터 말한 게 아쉬웠다. 두괄식으로 말하자.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/5}',
      },
      {
        pageId: 6,
        title: '자바스크립트의 원시 타입(Primitive Data Type)은 몇 가지인가요? 전부 말해주세요.',
        comment:
          '핵심키워드: Bigint,\n경험요약: 없음.\n스터디회고: big int가 있는 줄 몰랐다. 책만 믿다가 큰 코 다칠 수 있겠다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/6}',
      },
      {
        pageId: 8,
        title: '호이스팅(hoisting)에 대해 설명하세요.',
        comment:
          '핵심키워드: 실행 컨택스트, 식별자, TDZ\n경험요약: 자바스크립트 외의 다른 언어\n스터디회고: TDZ에 대해 어설프게 알고 있었던 것 같다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/8}',
      },
      {
        pageId: 9,
        title: 'JavaScript에서 this는 어떻게 작동하나요?\n.call과 .apply의 차이점은 무엇인가요?',
        comment:
          '핵심키워드: this, bind, 화살표 함수\n경험요약: 클래스에서 이벤트 바인딩 할 때 자주 사용\n스터디회고: this는 면접 전에 꼭 다시 한번 복습을 해야겠다. 쉽게 헷갈리는 주제인 것 같다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/9}',
      },
      {
        pageId: 10,
        title: '이벤트 루프란 무엇인가요?\n콜 스택과 태스크 큐의 차이점은 무엇인가요?',
        comment:
          '핵심키워드: 싱글 스레드, 콜 스택, 태스크 큐, 브라우저와 노드\n경험요약: 프로미스를 이용하여 콜 스택 -> 태스크 큐 -> 이벤트 루프 -> 콜 스택의 흐름을 설명\n스터디회고: 면접 중에 나온 내용은 아니지만 크리스 덕에 비동기 처리에서 소스코드의 평가와 실행을 제외한 모든 처리는 자바스크립트 엔진을 구동하는 환경인 브라우저 또는 node.js가 담당한다는 사실을 알게 됐다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/10}',
      },
      {
        pageId: 11,
        title: 'spread 문법을 사용할 때의 이점은 무엇인가요?\nrest 문법과 다른 점은 무엇인가요?',
        comment:
          '핵심키워드: rest, spread, 파라미터\n경험요약: spread는 불변성 객체나 배열을 만들 때 사용, rest는 함수 인자로 넘길 때 사용한다는 예시를 들었다.\n스터디회고: rest와 spread를 각각 어떤 상황에서 사용하는지에 대한 명쾌한 예시를 들지 못한 것 같아 아쉽다. 이터러블과 이터레이터의 차이에 대해 조금 더 공부해봐야겠다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/11}',
      },
      {
        pageId: 12,
        title: '함수란 무엇인가요? 아는 대로 설명해주세요.',
        comment:
          '핵심키워드: 재사용, 기능 분리, 일급객체\n경험요약: 즉시실행함수, 순수함수, 중첩 함수 등의 개념 설명\n스터디회고: 함수는 할 얘기가 정말 많은 부분인 것 같다. 개념에 맞는 예시를 잘 정리해놓는게 중요할 것 같다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/12}',
      },
      {
        pageId: 13,
        title: '호스트 객체와 내장 객체의 차이점은 무엇인가요?',
        comment:
          '핵심키워드: 호스트 객체, 내장 객체\n경험요약: 브라우저 환경과 노드 환경에서의 제공되는 각각의 호스트 객체를 언급\n스터디회고: 호스트 객체가 무엇인지 처음에는 알지 못했다. 하지만 개념은 알고 있었기에 실제 면접에서 이런 질문이 나온다면 당황하지 말고 면접관에게 힌트를 요구해야겠다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/13}',
      },
      {
        pageId: 14,
        title: '자바스크립트에서 프로토타입이란 무엇인가요?\n프로토타입 상속이 어떻게 작동하는지 설명해주세요.',
        comment:
          '핵심키워드: prototype, 참조, 프로로타입 체인\n경험요약: 객체 지향 언어에서 클래스 기반의 언어와 프로토타입 기반 언어의 차이점을 언급했다.\n스터디회고: 프로토타입은 자바스크립트의 핵심 기능이니 만큼 잘 알고 있다는 인상을 주는 것이 중요하다. 최근에 프로토타입을 유전자에 빗대어 설명하는 유튜브 영상을 봤는데 쉽게 설명하기 좋은 것 같다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/14}',
      },
    ],
  },
  jho2301: {
    nickname: '파노',
    img: 'https://avatars.githubusercontent.com/u/44419181?v=4',
    '1기': [
      {
        pageId: 2,
        title: '클로저는 무엇이며, 어떻게/왜 사용하나요?',
        comment:
          '핵심키워드 : 스코프, 실행컨텍스트\n경험요약 : input창 실시간검증할 때 디바운스 함수를생성할 때 사용\n스터디회고 : 예시를 좀 막연하게 설명한 것 같다. 예시를 절차적으로 빠진 부분없이 설명해줘야하겠다고 생각했다',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/2}',
      },
      {
        pageId: 3,
        title: '이벤트 위임에 대해 설명해주세요.',
        comment:
          '핵심키워드: 이벤트버블링, 성능비용\n경험요약:투두리스트를 만들 때 각 투두아이템에 이벤트리스너를 등록하지않고 컨테이너요소 하나에 등록해줌 (투두요소를 새로 생성할 때 이벤트핸들러를 새로 등록하는 로직이 필요없다.)\n스터디회고:  경험을 섞어서 이야기하면 더 풍부한 대답이 되었을 것 같다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/3}',
      },
      {
        pageId: 4,
        title: '.forEach 루프와 .map() 루프 사이의 주요 차이점을 설명할 수 있나요? 왜 둘 중 하나를 선택할 것인가요?',
        comment:
          '핵심키워드:\n경험요약:\n스터디회고: 무난무난했다.차이점에대해 물어봤는데 이야기하면서 공통점을 먼저 말하고 차이점에 대해 말했다. 물어본거부터 잘 대답해야된다',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/4}',
      },
      {
        pageId: 5,
        title: 'Async, Await가 무엇인가요?\n사용해본 경험이 있나요?',
        comment:
          '핵심키워드:비동기 처리 패턴, callback, promise\n경험요약: api통신 함수를 사용할 때 promise문법보다 코드를 간결하게 작성할 수 있어서 사용했다.\n스터디회고:  promise의 시맨틱슈가라는 점을 처음에 말해서 풀어나가면 더 잘 설명할 수 있었을 것 같다',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/5}',
      },
      {
        pageId: 6,
        title: '자바스크립트의 원시 타입(Primitive Data Type)은 몇 가지인가요? 전부 말해주세요.',
        comment: '핵심키워드: 불변성,null과 undefined 차이\n경험요약:\n스터디회고:  좀 더 구체적으로 설명하자',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/6}',
      },
      {
        pageId: 8,
        title: '호이스팅(hoisting)에 대해 설명하세요.',
        comment:
          '핵심키워드: 실행컨텍스트 객체 생성시 식별자수집\n경험요약:코드가독성에 해가 돼서 호이스팅의 활용을 지양한다.\n스터디회고:  두괄식으로 설명 좀 하자 제발~',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/8}',
      },
    ],
  },
  'GwangYeol-Im': {
    nickname: '카일',
    img: 'https://avatars.githubusercontent.com/u/57053577?v=4',
    '1기': [
      {
        pageId: 2,
        title: '클로저는 무엇이며, 어떻게/왜 사용하나요?',
        comment:
          "핵심키워드: 컴파일, 스코프 체인, 실행 컨텍스트\n경험요약: 모듈 패턴, 상태를 가지고 있는 util 함수를 사용하고자 할 때\n스터디회고: 클로저를 사용하는 이유를 설명하면서 어떤 니즈가 발생했을 때 이 기술을 쓰는지 이야기했다. 페어가 이 부분에서 '단순히 도구를 사용만 하지 않고, 니즈를 통해 기술을 선택하는 듯한 뉘앙스가 좋았다'고 피드백 해줬다. 다음에도 써먹어야겠다.",
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/2}',
      },
      {
        pageId: 3,
        title: '이벤트 위임에 대해 설명해주세요.',
        comment:
          '핵심키워드: 캡처링, 타겟팅, 버블링\n경험요약: 없음 (리스트 요소 이벤트 정도..?)\n스터디회고: 최대한 알고 있는 지식을 전달하는 느낌을 주고 싶었는데, 아무래도 외워온 티가 조금 났다. 기술적인 용어를 던질 때 적절히 회수하는 것도 중요할 듯',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/3}',
      },
      {
        pageId: 4,
        title: '.forEach 루프와 .map() 루프 사이의 주요 차이점을 설명할 수 있나요? 왜 둘 중 하나를 선택할 것인가요?',
        comment:
          '핵심키워드: 불변성\n경험요약: 없음\n스터디회고: 막히면 포기할 줄도 알아야겠다. 예상치 못한 곳에서 답변이 막혀 딜레이가 발생했다. 한 번 당황하니 말도 길어졌다. 모르면 모른다고 해야지.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/4}',
      },
      {
        pageId: 5,
        title: 'Async, Await가 무엇인가요?\n사용해본 경험이 있나요?',
        comment:
          '핵심키워드: promise + generator, 가독성, 비동기 병렬 처리 취약\n경험 요약: loading indicator, 로그인한 유저의 다양한 정보를 받아오는 경우\n스터디 회고: promise, generator와 async function을 비교해서 설명할 때, class 예시와 연결지어서 말했는데 이런 설명도 괜찮은 것 같다. 대신 얘기할 때는 class에 대한 꼬리질문도 각오하고 던져야 할듯',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/5}',
      },
      {
        pageId: 6,
        title: '자바스크립트의 원시 타입(Primitive Data Type)은 몇 가지인가요? 전부 말해주세요.',
        comment:
          '핵심키워드: value vs reference, null과 undefined 차이\n스터디회고: 항상 불변성을 얘기할 때 스스로 만족스럽지 않다. 좀 더 잘 정리해봐야겠다..',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/6}',
      },
      {
        pageId: 8,
        title: '호이스팅(hoisting)에 대해 설명하세요.',
        comment:
          '핵심키워드: 컴파일, 식별자, TDZ, 함수 호이스팅 vs 변수 호이스팅\n스터디회고: 면접을 준비하면서 호이스팅에 대한 답변을 항상 했던 것 같다. 자주 한다고 다르게 접근해서 설명하려 들지말고, 필요한 부분만 딱딱 전달하자.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/8}',
      },
      {
        pageId: 9,
        title: 'JavaScript에서 this는 어떻게 작동하나요?\n.call과 .apply의 차이점은 무엇인가요?',
        comment:
          '핵심키워드: default function vs arrow function / binding 방식 / call, apply, bind\n경험요약: 인터뷰 때도 그랬고, 곰곰이 생각해보았지만 this에 대한 구체적인 경험은 별로 없는 것 같다.\n스터디회고: 인터뷰는 내가 아는 것을 설명하는 자리지만, 무엇보다 상대방에게 좋은 인상을 남겨야만 하는 자리다. 너무 단방향으로 나만 얘기하는 건 아닌지, 중간중간 체크하자',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/9}',
      },
      {
        pageId: 10,
        title: '이벤트 루프란 무엇인가요?\n콜 스택과 태스크 큐의 차이점은 무엇인가요?',
        comment:
          '핵심키워드: 비동기, 싱글 스레드, 호출스택, 큐\n스터디회고: 이벤트 루프의 동작방식을 이야기할 때, 머릿속에서 정리가 잘 안된다는 느낌을 받았다. 이 부분에 대해 다시 한번 확인이 필요할 것 같다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/10}',
      },
      {
        pageId: 11,
        title: 'spread 문법을 사용할 때의 이점은 무엇인가요?\nrest 문법과 다른 점은 무엇인가요?',
        comment:
          '핵심키워드: rest, spread operator, iterable\n스터디 회고: 학습이 되어있던 부분이라 생각보다 어렵지 않았다. 반복적으로 보면서 더 체화해야지.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/11}',
      },
    ],
  },
  zereight: {
    nickname: '도비',
    img: 'https://avatars.githubusercontent.com/u/42544600?v=4',
    '1기': [
      {
        pageId: 2,
        title: '클로저는 무엇이며, 어떻게/왜 사용하나요?',
        comment:
          '핵심 키워드: 렉시컬 스코프\n경험요약: 디바운스의 setTimeout 아이디\n스터디 회고: 줌으로 하다보니까 내 설명을 시각적으로 설명하지 못한것 같다. 좀 더 상대방이 이해하기 쉽게 설명하는 연습을 해야겠다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/2}',
      },
      {
        pageId: 3,
        title: '이벤트 위임에 대해 설명해주세요.',
        comment:
          '핵심키워드: 이벤트 위임, 캡처링, 버블링\n경험요약: 바닐라 자바스크립트에서, 동적으로 생성/제거되는 버튼의 상단에 이벤트를 위임해주는 예시를 들었다.\n스터디회고: 상대방이 좀더 시각적으로 표현하는 연습을 해야겠다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/3}',
      },
      {
        pageId: 4,
        title: '.forEach 루프와 .map() 루프 사이의 주요 차이점을 설명할 수 있나요? 왜 둘 중 하나를 선택할 것인가요?',
        comment:
          '핵심키워드: 반환값 여부, apply/bind/call\n경험요약: forEach, map을 사용하여 새로운 배열을 추출하는 경험\n스터디회고: 일급객체와 고차함수의 예시와 for-of, for-in 사용법도 말했다면 더 좋았으려나 싶다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/4}',
      },
      {
        pageId: 5,
        title: 'Async, Await가 무엇인가요?\n사용해본 경험이 있나요?',
        comment:
          '핵심키워드: promise, async/await, 콜백, 가독성\n경험요약: async/await에서 이점이 있는 상황\n스터디 회고: 탄생배경에 대해서 만족할만큼 말한것 같다. 하지만 내 머릿속에 있는 코드를 말로 전달하는데 많은 어려움이 있었다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/5}',
      },
      {
        pageId: 6,
        title: '자바스크립트의 원시 타입(Primitive Data Type)은 몇 가지인가요? 전부 말해주세요.',
        comment:
          '핵심키워드: 원시타입, 참조타입, Infinity, 불변성\n경험요약: 불변성을 사용함으로 얻을 수 있었던 이점에 대한 경험\n스터디회고: Infinity가 기억이 안났다. Null과 Undefined 차이점에 대해서는 나름 잘 대답한것 같다. 좀더 로우레벨하게 원시타입을 공부해봐야할거 같다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/6}',
      },
      {
        pageId: 8,
        title: '호이스팅(hoisting)에 대해 설명하세요.',
        comment:
          '핵심키워드: TDZ, 실행컨텍스트, 변수 호이스팅, 함수 레벨 스코프, 블록 레벨 스코프\n스터디회고: 사전에 열심히 공부해놔서 너무 장황하게 설명했다. 좀 더 말끔히 핵심만 딱딱 말할 수 있게 노력해야겠다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/8}',
      },
      {
        pageId: 9,
        title: 'JavaScript에서 this는 어떻게 작동하나요?\n.call과 .apply의 차이점은 무엇인가요?',
        comment:
          '핵심키워드: call, apply, bind\n경험요약: apply의 a는 arr의 a라고 외웠더니 편함\n스터디회고: bind에 첫번째인자로 null 넣으면 어떻게 되는지 잘 알지 못했다.\n왜 메서드가 call/apply 2가지 존재하는지 질문받아서 당황스러웠는데 인자가 4개이상이면 어셈블리단에서 레지스터를 좀 더 소모하게 되어서, 인자를 2개로 유지하려고 apply가 나머지 인자를 배열로 받는게 아닐까? 라는 아이디어가 번쩍 떠올라서 위기를 넘겼음. 이건 잘했다고 생각',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/9}',
      },
      {
        pageId: 10,
        title: '이벤트 루프란 무엇인가요?\n콜 스택과 태스크 큐의 차이점은 무엇인가요?',
        comment:
          '핵심키워드: 자바스크립트 엔진, web api, 이벤트 루프, 태스크 큐, 싱글 스레드\n경험요약: 이벤트 루프의 전반적인 동작을 설명함. 어제 브랜이랑 면접했어서 토스 코테 비동기 부분에도 바로 적었음 개이득\n스터디회고: 사전에 정리해둔 글을 한번 보고와서 대답하는데 별 어려움이 없었음. 태스크큐의 세부정보에 대해서는 말하지 않음. 말하면 더 좋으려나?',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/10}',
      },
      {
        pageId: 11,
        title: 'spread 문법을 사용할 때의 이점은 무엇인가요?\nrest 문법과 다른 점은 무엇인가요?',
        comment:
          '핵심키워드: rest, spread\n경험요약: 남는것과 펼치기. iterable한 것만 가능\n스터디회고: 두괄식은 두괄식에 엄청 긴 두괄식으로 대답한거 같다. 명확히 딱딱 끊어서 말하는 연습을 해야겠다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/11}',
      },
      {
        pageId: 12,
        title: '함수란 무엇인가요? 아는 대로 설명해주세요.',
        comment:
          '핵심 키워드: 함수의 한자 뜻 풀이, 문법, 화살표함수\n경험 요약: 함수의 정의에 관해서는 한자어 뜻풀이를 통해서 잘 말한것 같은데, 화살표함수와 일반 function의 차이에 대해서 모호하게 대답했다.\n스터디 회고: arrow function과 general function의 차이를 항상 기억하고 있자',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/12}',
      },
      {
        pageId: 13,
        title: '호스트 객체와 내장 객체의 차이점은 무엇인가요?',
        comment:
          '핵심키워드: 호스트 객체, 내장 객체\n경험요약: 호스트 객체와 내장 객체를 분리하는 것은 어느정도 쉬웠다.\n스터디회고: 예제를 말해보니 외우기가 더 쉬웠다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/13}',
      },
      {
        pageId: 14,
        title: '자바스크립트에서 프로토타입이란 무엇인가요?\n프로토타입 상속이 어떻게 작동하는지 설명해주세요.',
        comment:
          '핵심키워드: 프로토타입, 프로토, 상속\n경험요약: 자바스크립트가 프로토타입을 채택한 이유에 대해서 잘 대답하지 못했다.\n스터디회고: 자바스크립트 상속을 prototype으로 구현해보고, 자바스크립트가 프로토타입 방식을 채택함으로써 얻을 수 있었던 이점을 정리하자.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/14}',
      },
    ],
  },
  swon3210: {
    nickname: '크리스',
    img: 'https://avatars.githubusercontent.com/u/32982670?v=4',
    '1기': [
      {
        pageId: 2,
        title: '클로저는 무엇이며, 어떻게/왜 사용하나요?',
        comment:
          '핵심 키워드: 데이터 은닉, 스코프\n경험 요약: 특정 변수에 대한 접근을 제한하기 위해 사용.\n스터디 회고 : 클로저에 대해서 이해는 하고 있다는 생각은 들었다. 그러나 말이 정리가 안되고 단어가 클로저를 모르는 사람은 이해하기 힘든 언어들을 사용했었다. 말을 시간 순으로 차근차근 정리하는 게 좋았을 듯하다. 알려진 단어들을 사용하기 보다는 이해하는데 필요한 단어들을 사용하는 것이 필요해 보인다',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/2}',
      },
      {
        pageId: 3,
        title: '이벤트 위임에 대해 설명해주세요.',
        comment:
          '핵심키워드 : 이벤트 버블링, 상위 요소, 메모리 효율성\n경험요약: 너무 많은 이벤트 바인딩이 일어나는 것을 막기 위해서 상위 요소에 이벤트를 걸고, 이벤트 객체를 분석해서 대상을 특정하는 방식으로 이벤트 핸들링을 구현했다.\n스터디회고 : 경험은 잘 설명했지만 핵심적인 기반 이론에 대한 설명이 없었다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/3}',
      },
      {
        pageId: 4,
        title: '.forEach 루프와 .map() 루프 사이의 주요 차이점을 설명할 수 있나요? 왜 둘 중 하나를 선택할 것인가요?',
        comment:
          '핵심키워드 : 배열 반환 여부\n경험요약: map 과 forEach 는 사용 목적이 서로 달랐다. 배열을 바탕으로 새로운 배열을 반환해야 하는 경우에는 map 을 썼고 단순 순회가 필요한 경우 forEach를 썼다\n스터디회고 : 두괄식으로 개념을 집고, 그 개념을 푸는 식으로 가는게 좋을 것 같다',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/4}',
      },
      {
        pageId: 9,
        title: 'JavaScript에서 this는 어떻게 작동하나요?\n.call과 .apply의 차이점은 무엇인가요?',
        comment:
          '핵심키워드: this 의 4가지 동작 방식\n경험요약: this 바인딩을 해본 경험. this 가 의도했던 객체를 가리키고 있지 않을 때 이를 강제하기 위해서 사용함.\n스터디회고: this 사용 경험을 더 풍부하게 해야겠다고 생각됨',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/9}',
      },
      {
        pageId: 10,
        title: '이벤트 루프란 무엇인가요?\n콜 스택과 태스크 큐의 차이점은 무엇인가요?',
        comment:
          '핵심키워드: 싱글 스레드, 콜 스택, 태스크 큐, 마이크로 태스트 큐, Web API\n경험요약: 이벤트 루프가 일을 하기까지의 과정과 콜 스택과 태스크 큐의 역할의 차이점\n스터디회고: 이벤트 루프에서 setTimeout 과 같은 WebAPI 에서는 타이머를 브라우저에서 별도의 스레드로 처리해준다는 언급 등을 해주는게 좋을 것 같다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/10}',
      },
      {
        pageId: 11,
        title: 'spread 문법을 사용할 때의 이점은 무엇인가요?\nrest 문법과 다른 점은 무엇인가요?',
        comment:
          '핵심키워드: rest, spread, 해체, 묶기\n경험요약: rest 와 spread 문법의 공통점과 차이점\n스터디회고: spread는 이터러블한 경우에만 사용 가능하는 것을 처음 알았다. 정확히 어떤 경우를 이터러블하다고 말하는 것인지에 대한 공부가 필요하다',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/11}',
      },
      {
        pageId: 12,
        title: '함수란 무엇인가요? 아는 대로 설명해주세요.',
        comment:
          '핵심키워드 : 생성자 함수, 컨텍스트 생성자, 코드 뭉치, 매개변수\n경험요약 : 함수를 통해 코드의 중복을 피할 수 있으며 체계를 갖추면 생산성도 향상시킬 수 있다.\n스터디회고 : 관련 있는 내용을 다 말하는 것도 좋지만, 핵심만 간략하게 말하는게 더 좋을 수 있다. 추가적인 질문이 왔을 때 상세히 설명하는 것도 좋다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/12}',
      },
      {
        pageId: 13,
        title: '호스트 객체와 내장 객체의 차이점은 무엇인가요?',
        comment:
          '핵심키워드: window, global, Object 객체\n경험요약: 따로 경험을 이야기 하지는 않았고 node js 환경에서는 global 객체가, 브라우저 환경에서는 window 객체가 호스트 객체라는 차이를 두었다.\n스터디회고: 내장 객체가 호스트 객체에 속하는 것인지가 확실하지 않아졌다. 본래 알고 있던 것이 잘못되었나 하는 생각이 들기 때문에 다시 공부해봐야겠다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/13}',
      },
      {
        pageId: 14,
        title: '자바스크립트에서 프로토타입이란 무엇인가요?\n프로토타입 상속이 어떻게 작동하는지 설명해주세요.',
        comment:
          '핵심키워드 : 생성자 함수, proto, prototype 객체\n경험요약 : 상속을 구현하는 경험을 말하기 보다는 어떤 식으로 상속을 프로토타입으로 구현할 수 있는지를 말함\n스터디회고 : 자바스크립트 상속과 클래스에서의 상속의 차이를 처음부터 말하는 것이 좋을 것 같다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/14}',
      },
    ],
  },
  ddongule: {
    nickname: '그루밍',
    img: 'https://avatars.githubusercontent.com/u/26598561?v=4',
    '1기': [
      {
        pageId: 2,
        title: '클로저는 무엇이며, 어떻게/왜 사용하나요?',
        comment: '핵심키워드 : 그루밍\n경험요약:\n스터디회고 :',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/2}',
      },
      {
        pageId: 3,
        title: '이벤트 위임에 대해 설명해주세요.',
        comment: '핵심키워드 :\n경험요약\n스터디회고 :',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/3}',
      },
      {
        pageId: 4,
        title: '.forEach 루프와 .map() 루프 사이의 주요 차이점을 설명할 수 있나요? 왜 둘 중 하나를 선택할 것인가요?',
        comment: '핵심키워드 :\n경험요약\n스터디회고 :',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/4}',
      },
      {
        pageId: 9,
        title: 'JavaScript에서 this는 어떻게 작동하나요?\n.call과 .apply의 차이점은 무엇인가요?',
        comment:
          '핵심 키워드: this, bind, call, apply\n경험 요약: 딱히 경험에 대해 이야기하지는 못했지만, react에서 component형 컴포넌트를 만들 때 사용했던 경험이 생각난다.\n스터디 회고: this가 좀 헷갈리지 않게 명확한 정리가 필요한다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/9}',
      },
      {
        pageId: 10,
        title: '이벤트 루프란 무엇인가요?\n콜 스택과 태스크 큐의 차이점은 무엇인가요?',
        comment:
          '핵심 키워드: 콜스택, 태스크큐, 마이크로태스크 큐, 자바스크립트 엔진, Web API\n경험 요약: 이벤트 루프의 전반적인 동작, 태스크큐의 종류\n스터디 회고: 이벤트 루프가 하는 일에 대해 한 문장으로 매끄럽지 못하게 설명해서 아쉬움이 남는다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/10}',
      },
      {
        pageId: 11,
        title: 'spread 문법을 사용할 때의 이점은 무엇인가요?\nrest 문법과 다른 점은 무엇인가요?',
        comment:
          '핵심 키워드: rest, spread, iterable,\n경험 요약: rest - 많은 인자를 하나로 표현, spread - 흩어지게 해줌\n스터디 회고: spread에서는 iterable한 친구들만 사용이 가능. iterable에 대해 더 공부해야겠다 ㅜㅜ',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/11}',
      },
    ],
  },
  yujo11: {
    nickname: '유조',
    img: 'https://avatars.githubusercontent.com/u/61097373?v=4',
    '1기': [
      {
        pageId: 2,
        title: '클로저는 무엇이며, 어떻게/왜 사용하나요?',
        comment:
          '핵심키워드 : 클로저, 전역변수\n경험요약: 쓰로틀링 구현\n스터디회고 : 머리 속에 떠다니는 지식을 제대로 잡아서 설명하지 못 했다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/2}',
      },
      {
        pageId: 3,
        title: '이벤트 위임에 대해 설명해주세요.',
        comment:
          '핵심키워드 : 이벤트 버블링, 이벤트 캡쳐링, 이벤트 위임\n경험요약: JS에서 TodoList를 예시로 들어 사용자와의 상호작용으로 생기는 요소들을 감싸는 부모 요소에 이벤트를 등록해 위임해주는 예시를 들었다.\n스터디회고 : React에서 이벤트 위임을 제대로 설명하지 못 했는데 인치의 도움으로 React에서 이벤트 위임이 어떻게 이루어지는지 다시 한번 상기할 수 있어서 좋았다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/3}',
      },
      {
        pageId: 4,
        title: '.forEach 루프와 .map() 루프 사이의 주요 차이점을 설명할 수 있나요? 왜 둘 중 하나를 선택할 것인가요?',
        comment:
          '핵심키워드 : forEach와 map의 차이, for문 대신 내장 객체 메서드를 사용하는 이유\n경험요약:\n스터디회고 : 선언형, 명령형의 차이를 들어 설명했으면 더 좋았을거 같다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/4}',
      },
      {
        pageId: 5,
        title: 'Async, Await가 무엇인가요?\n사용해본 경험이 있나요?',
        comment:
          '핵심키워드: promise + generator, 가독성, 신태틱 슈거\n경험 요약: async/await을 사용하는 상황, async/await 대신 Promise나 Generator를 사용했을 때 이점이 있는 상황\n스터디 회고: asnyc/await의 탄생배경에 대해서도 좀 더 알아봐야 할거 같다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/5}',
      },
      {
        pageId: 6,
        title: '자바스크립트의 원시 타입(Primitive Data Type)은 몇 가지인가요? 전부 말해주세요.',
        comment:
          '핵심키워드: Primitive Type과 Reference Type, 불변셩\n경험요약: Symbol을 공부했던 경험\n스터디회고: Symbol, Bigint 등 자주 사용하지 않는 타입에 대해서도 어떤 상황에 쓰일 수 있는지 알아보자, Null과 Undefined의 차이는 무엇일까...?',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/6}',
      },
      {
        pageId: 8,
        title: '호이스팅(hoisting)에 대해 설명하세요.',
        comment:
          '핵심키워드: 실행 컨택스트, TDZ\n경험요약: var, let, const의 차이, 함수 선언문과 함수 표현식의 차이\n스터디회고: TDZ에 대해 좀 더 잘 설명할 수 있게 공부해보자. 컨택스트를 이야기 할 때 용어정의가 머리 속에서 확실히 되어있지 않은거 같다. 매끄럽게 설명할 수 있도록 공부해보자.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/8}',
      },
      {
        pageId: 9,
        title: 'JavaScript에서 this는 어떻게 작동하나요?\n.call과 .apply의 차이점은 무엇인가요?',
        comment:
          '핵심키워드: 화살표 함수와 일반 함수의 this 차이\n경험요약: this 바인딩 경험\n스터디회고: call과 apply차이에 대해 기억하고 있어야겠다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/9}',
      },
      {
        pageId: 10,
        title: '이벤트 루프란 무엇인가요?\n콜 스택과 태스크 큐의 차이점은 무엇인가요?',
        comment:
          '핵심키워드: 싱글 스레드, 콜 스택, 태스크 큐, 마이크로 태스트 큐\n경험요약: 자바스크립트가 동시에 여러 일을 처리할 수 있는 이유\n스터디회고: 이벤트 루프를 제대로 말하고 전달하지 못 했다. 공부를 더 해야겠다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/10}',
      },
      {
        pageId: 11,
        title: 'spread 문법을 사용할 때의 이점은 무엇인가요?\nrest 문법과 다른 점은 무엇인가요?',
        comment:
          '핵심키워드: rest, spread, 파라미터\n경험요약: spread를 사용한 경험\n스터디회고: spread는 이터러블한 경우에만 사용 가능한데 객체에 왜 spread가 사용가능한지 모르고 있었다',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/11}',
      },
      {
        pageId: 12,
        title: '함수란 무엇인가요? 아는 대로 설명해주세요.',
        comment:
          '핵심 키워드:Javascript의 함수, Callback 함수, 즉시 실행 함수(IIFE), 함수 선언문, 함수 표현식\n경험 요약: 함수에 관한 설명은 대체적으로 잘 한거 같으나, 즉시 실행 함수와 클로저를 엮어서 설명하는 부분에서 실수가 있었다.\n스터디 회고: 확신이 없는 부분에 대해서는 회피해서 말하고, 자신 있는 부분은 좀 더 깊게 설명해도 좋을거 같다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/12}',
      },
      {
        pageId: 13,
        title: '호스트 객체와 내장 객체의 차이점은 무엇인가요?',
        comment:
          '핵심키워드: ECMAScript, Goloba, Window\n경험요약: 용어를 처음 들었는데 스터디 전에 찾아보고 나니 어렵지 않은 용어들이었다.\n스터디회고: 다양한 경험을 통해 Javascript 생태계에서 사용하는 용어들에 익숙해지는 것도 중요한거 같다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/13}',
      },
      {
        pageId: 14,
        title: '자바스크립트에서 프로토타입이란 무엇인가요?\n프로토타입 상속이 어떻게 작동하는지 설명해주세요.',
        comment:
          '핵심키워드: proto, prototype, proto, 프로퍼티\n경험요약: 프로토타입의 개념에 대한 부분은 어느정도 설명이 가능했지만 깊게 들어가는 부분은 제대로 설명하지 못 했다.\n스터디회고: Javascript에서 prototype은 핵심적인 개념이니 조금 더 깊이 있게 공부해보자.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/14}',
      },
    ],
  },
  '365kim': {
    nickname: '하루',
    img: 'https://avatars.githubusercontent.com/u/60066472?v=4',
    '1기': [
      {
        pageId: 2,
        title: '클로저는 무엇이며, 어떻게/왜 사용하나요?',
        comment:
          '핵심키워드 : 생명주기, 모듈패턴(은닉), 가비지컬렉팅\n경험요약 : 회원가입 기능 구현할 때 이메일 중복검사에 debouce 를 걸어줄 때, 이전에 실행한 함수의 timerId를 기억하기 위해 사용\n스터디회고 : let, const 전에 var 시절 모듈패턴에 대해 언급해서 인상적이었다는 피드백을 받았다. 한번에 모든걸 이야기하려고 하기보다 대화하듯 대답을 이어나가면 좋겠다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/2}',
      },
      {
        pageId: 3,
        title: '이벤트 위임에 대해 설명해주세요.',
        comment:
          '핵심키워드 : 이벤트버블링, 메모리 이점, 자유로운 추가삭제\n경험요약 : 바닐라 자바스크립트로 지하철 노선도 애플리케이션을 만들 때, 각 노선정보에 편집, 삭제 버튼을 달아주는 대신에 전체에 달아줌\n스터디회고 : onclick을 attribute로 넣어준다는 것을 질문을 통해 인지했다고 했을 때, 뒤에 답변한 내용을 들어보면 충분히 알고있을만한 내용같은데 이걸 모르네 싶은 인상을 주었다. 면접관과 싱크를 잘 맞추는 과정이 필요할 것 같다. (attribute로 onclick을 단다는게 jsx문법 상인지, react 코드가 js로 트랜스파일링 된 후인지)',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/3}',
      },
      {
        pageId: 4,
        title: '.forEach 루프와 .map() 루프 사이의 주요 차이점을 설명할 수 있나요? 왜 둘 중 하나를 선택할 것인가요?',
        comment:
          '핵심키워드 : 리턴값 유무\n경험요약\n\nforEach: 카카오 지도 API 에서 마커를 숨기는 로직을 작성 시, 마커 객체를 담은 배열을 돌면서 hide 시켜주기 위해 사용\nmap: jsx 에서 ListItem 렌더할 때 사용\n\n\n스터디회고 : 군더더기 없었다는 피드백을 받았다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/4}',
      },
      {
        pageId: 5,
        title: 'Async, Await가 무엇인가요?\n사용해본 경험이 있나요?',
        comment:
          '핵심키워드 : ES6, 비동기처리, 동기적 코드작성\n경험요약 : 백엔드에서 제공한 API에 요청을 보내 받은 응답으로 렌더할 때 사용\n스터디회고 : Promise 의 3가지 상태에 대해서 물어봐서 긴장했다. pending, fulfilled, rejected 를 겨우 떠올려 대답했다. Promise.all, Promise.race는 공통적으로 병렬적으로 처리할 때 사용한다는 점도 배웠다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/5}',
      },
      {
        pageId: 6,
        title: '자바스크립트의 원시 타입(Primitive Data Type)은 몇 가지인가요? 전부 말해주세요.',
        comment: '핵심키워드 : 원시타입 / 참조타입, NaN, undefined vs null\n스터디회고 : 무난하게 잘 대답한 것 같다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/6}',
      },
      {
        pageId: 8,
        title: '호이스팅(hoisting)에 대해 설명하세요.',
        comment:
          '핵심키워드 : 변수호이스팅 (var / const,let), 함수호이스팅 (선언문 / 표현식), 소스코드 평가, 런타임\n스터디회고 : 순간적으로 헷갈려서 블록레벨 스코프랑 함수레벨 스코프를 완전 반대로 얘기하고 있었다. 앞으로 주의해야겠다. 🚨',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/8}',
      },
      {
        pageId: 9,
        title: 'JavaScript에서 this는 어떻게 작동하나요?\n.call과 .apply의 차이점은 무엇인가요?',
        comment:
          '핵심키워드 : 자기참조변수, 암시적바인딩, 명시적바인딩\n경험 요약 : .bind(this) 로 사용한 경험밖에 없다고 솔직하게 얘기했다.\n스터디회고 : 크리스 덕분에 객체지향적으로 작성하면 this를 더 많이 활용할 수 있겠다는 생각을 할 수 있었다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/9}',
      },
      {
        pageId: 10,
        title: '이벤트 루프란 무엇인가요?\n콜 스택과 태스크 큐의 차이점은 무엇인가요?',
        comment:
          "핵심키워드 : 비동기, 싱글스레드 JS, 콜스택 / 태스크 큐\n스터디회고 : 이벤트 루프를 한 마디로 정의하려는 시도는 좋았지만, 좀 더 깔끔하게 한 문장으로 정리하면 좋겠다는 피드백을 받았다. '차이점'을 물어봤는데 콜스택에 대해서 너무 자세히 얘기했다. 물어본 것에 간단하게 대답하는 연습이 필요하다.",
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/10}',
      },
      {
        pageId: 11,
        title: 'spread 문법을 사용할 때의 이점은 무엇인가요?\nrest 문법과 다른 점은 무엇인가요?',
        comment:
          '핵심키워드 : iterable, object literal, 가변인자\n경험 요약 : spread 연산자 - redux에서 state의 불변성 유지 / rest parameter - 컴포넌트의 확장성을 위해 props의 { ...rest }\n스터디회고 : iterable(배열, 문자열, ...) 외에도 es2018에서 object literal 을 spread를 지원하게 되었는 사실을 알게되었다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/11}',
      },
      {
        pageId: 12,
        title: '함수란 무엇인가요? 아는 대로 설명해주세요.',
        comment:
          '핵심키워드 : 재사용\n경험요약 : httpRequest 보내는 함수\n스터디회고 : 화살표함수를 함수표현식과 별도로 분류해서 얘기할지 함수리터럴 과 화살표함수 모두 함수표현식이라고 하면 될지 고민해보자.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/12}',
      },
      {
        pageId: 13,
        title: '호스트 객체와 내장 객체의 차이점은 무엇인가요?',
        comment:
          '핵심키워드 : ECMA Script 정의여부\n경험요약 : console.dir 를 node에서 실행하면 그냥 console.log 처럼 출력되지만, 브라우저에서하면 dir 객체의 프로퍼티를 모두 확인할 수 있다.\n스터디회고 : 무난하게 대답한 것 같다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/13}',
      },
      {
        pageId: 14,
        title: '자바스크립트에서 프로토타입이란 무엇인가요?\n프로토타입 상속이 어떻게 작동하는지 설명해주세요.',
        comment:
          '핵심키워드 : 상속 __proto__ 프로토타입 기반 언어\n경험요약 : Array.length\n스터디회고 : 정의에 대해서 자신있게 얘기하지 못하고 pause가 많아서, 맞는 내용임에도 대답 완성도가 떨어지게 들렸다. static method인 Array.from()을 체이닝의 예시로 잘못들었다. 어떤 면접관의 경우 “얘 모르네”하고 꼬리질문 없이 넘어갈 수 있으니 한번도 생각해보고 정확하게 대답하는 것이 좋을 것 같다.',
        url: 'https://github.com/woowacourse-fe-study/interview-snack/discussions/14}',
      },
    ],
  },
};
