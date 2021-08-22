const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const TERM_PAGES = [
  { termId: '1기', pages: [2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14] },
  // { termId: '2기', pages: [] },
  // { termId: '3기', pages: [] },
];

const author = {
  hchayan: {
    nickname: '인치',
    img: 'https://avatars.githubusercontent.com/u/11311739?v=4',
    '1기': [],
  },
  zigsong: {
    nickname: '지그',
    img: 'https://avatars.githubusercontent.com/u/44080404?v=4',
    '1기': [],
  },
  '0307kwon': {
    nickname: '미키',
    img: 'https://avatars.githubusercontent.com/u/48755175?v=4',
    '1기': [],
  },
  seojihwan: {
    nickname: '브랜',
    img: 'https://avatars.githubusercontent.com/u/52202474?v=4',
    '1기': [],
  },
  dudtjr913: {
    nickname: '디토',
    img: 'https://avatars.githubusercontent.com/u/64782636?v=4',
    '1기': [],
  },
  yungo1846: {
    nickname: '곤이',
    img: 'https://avatars.githubusercontent.com/u/59409762?v=4',
    '1기': [],
  },
  jho2301: {
    nickname: '파노',
    img: 'https://avatars.githubusercontent.com/u/44419181?v=4',
    '1기': [],
  },
  'GwangYeol-Im': {
    nickname: '카일',
    img: 'https://avatars.githubusercontent.com/u/57053577?v=4',
    '1기': [],
  },
  zereight: {
    nickname: '도비',
    img: 'https://avatars.githubusercontent.com/u/42544600?v=4',
    '1기': [],
  },
  swon3210: {
    nickname: '크리스',
    img: 'https://avatars.githubusercontent.com/u/32982670?v=4',
    '1기': [],
  },
  ddongule: {
    nickname: '그루밍',
    img: 'https://avatars.githubusercontent.com/u/26598561?v=4',
    '1기': [],
  },
  yujo11: {
    nickname: '유조',
    img: 'https://avatars.githubusercontent.com/u/61097373?v=4',
    '1기': [],
  },
  '365kim': {
    nickname: '하루',
    img: 'https://avatars.githubusercontent.com/u/60066472?v=4',
    '1기': [],
  },
};

const print = (item) => {
  console.dir(item, { depth: null });
};

const getPageData = async (url) => {
  try {
    return await axios.get(url);
  } catch (error) {
    console.error(error);
  }
};

const getTermData = async (pages, termId) => {
  for (const pageId of pages) {
    const url = `https://github.com/woowacourse-fe-study/interview-snack/discussions/${pageId}}`;
    const html = await getPageData(url);
    const $ = cheerio.load(html.data);
    const reviews = $('div.discussion-timeline-item');
    let title = '';

    reviews.each((index, elem) => {
      const comment = $(elem).find('td.comment-body').first().text().trim().replace('  ', '');

      if (index === 0) {
        title = comment;
        return; // discussion 본문
      }
      if (index === 1 || comment.includes('토요일 오후 10시까지 작성해주실 댓글 예시입니다.')) {
        return; // 자료 공유 스레드
      }

      const authorId = $(elem)
        .find('a.author')
        .first()
        .text()
        .replace(/[^a-zA-Z0-9\-]/g, '');

      if (authorId && author[authorId]) {
        const review = { pageId, title, comment, url };

        author[authorId][termId].push(review);
      }
    });
  }
  fs.writeFileSync('./author.js', `export const AUTHOR = ${JSON.stringify(author)}`);
};

const main = () => {
  TERM_PAGES.forEach(({ pages, termId }) => getTermData(pages, termId));
};

main();
