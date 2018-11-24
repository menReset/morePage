import makePic from './makePic'
let itemList = []
let teamPosition = 0
let namePosition = 0
let timePosition = 0
export default function makePaper(data, type) {
  switch (type) {
    case '18中超':
      teamPosition = 67
      namePosition = 54
      timePosition = -58
      break;
    case '18/19德甲':
      teamPosition = 28
      namePosition = 25
      timePosition = -30
      break;
    default:
      break;
  }
  console.log('teamPosition', type, teamPosition);

  itemList = []

  data = data || {
    nickname: '这里是用户名',
    myboardTime: '2018.07.26',
    leaderboard: [],

    // teamListL: this.lastboard.leaderboard.slice(0, this.lastboard.leaderboard.length / 2),
    // teamListR: this.lastboard.leaderboard.slice(this.lastboard.leaderboard.length / 2),
    backUrl: 'https://activity-static.dongqiudi.com/2018/leaderboard/00000.jpg'
  }

  let picUrl = data.backUrl
  //  picUrl = 'https://activity-static.dongqiudi.com/2018/leaderboard/00000.jpg'

  itemList.push({
    type: 'text',
    text: '预测人：' + data.nickname,
    size: 22,
    color: '#fff',
    x: '0',
    y: -410 + namePosition,
    // origin: 'East',
  })
  itemList.push({
    type: 'text',
    text: '预测日期：' + data.myboardTime,
    size: 24,
    color: '#fff',
    x: '48',
    y: 410 + timePosition,
    origin: 'East',
  })

  // itemList.push({
  //   type: 'pic',
  //   url:getNoPic(1),
  //   x: -173-175,
  //   y: -290,
  //   ws: .05,
  //   wst: 0
  // })

  setTeam(data.leaderboard.slice(0, data.leaderboard.length / 2), 0)
  setTeam(data.leaderboard.slice(data.leaderboard.length / 2), 1)





  return makePic(picUrl, itemList)
}
const teamBack1 = 'https://activity-static.dongqiudi.com/2018/leaderboard/team-back1.png'
const teamBack2 = 'https://activity-static.dongqiudi.com/2018/leaderboard/team-back0.jpg'
const teamBackf = 'https://activity-static.dongqiudi.com/2018/leaderboard/team-back-f.jpg'
const teamBackl = 'https://activity-static.dongqiudi.com/2018/leaderboard/team-back-l.png'


function getNoPic(i) {
  return `https://activity-static.dongqiudi.com/2018/leaderboard/n${i}.png`
}
let teamListL = [{
    name: '中文WM1231'
  },
  {
    name: '中文Qq0123'
  },
  {
    name: '1234567890'
  },
  {
    name: '4444444444444444'
  },
  {
    name: '5555555555555555'
  },
  {
    name: '666666666666666666'
  },
  {
    name: '777777777777777777'
  },
  {
    name: '888888888888888888888888'
  },
  {
    name: '99999999999999999999'
  },
  {
    name: '000000000000000000000000'
  }
]
let teamListR = [{
    name: '1111111111'
  },
  {
    name: '22222222222'
  },
  {
    name: '333333333'
  },
  {
    name: '44444444'
  },
  {
    name: '55555555'
  },
  {
    name: '666666666'
  },
  {
    name: '777777777'
  },
  {
    name: '888888888888'
  },
  {
    name: '9999999999'
  },
  {
    name: '00000000'
  },
]

const testFlag = 'https://img.dongqiudi.com/data/pic/433.png'

const teamP = [-173, 205]
const teamBackList = [
  teamBack1, teamBack2
]


function setTeam(team, LorR) {
  for (let i = 0; i < team.length; i++) {
    const element = team[i]
    let blockHeith = 70
    // let margin = Math.round((705 - (team.length * 70)) / team.length)
    let margin = Math.round((705 - (10 * 70)) / 10)
    let y = -290 + ((blockHeith + margin) * i) + teamPosition
    let x = teamP[LorR]
    let color = '#fff'
    let url = ''

    // // 背景色块
    if (LorR == 0 && i <= 3) {
      color = '#000167'
    } else if (LorR == 1 && team.length - i <= 3) {
      // url = teamBackl
    } else {
      // url = teamBackList[(i + LorR) % 2]
    }
    // let teamTmp = {
    //   type: 'pic',
    //   url,
    //   x,
    //   y,
    //   ws: .4,
    //   wst: 2
    // }
    // itemList.push(teamTmp)



    // // 排位编号
    // let teamNo =  {
    //   type: 'pic',
    //   url:getNoPic(1+i+LorR*team.length),
    //   x: x-180,
    //   y,
    //   ws: .05,
    //   wst: 0
    // }
    // itemList.push(teamNo)


    // 队徽
    let teamFlag = {
      type: 'pic',
      url: element.flag,
      x: x - 110 - 8 * LorR,
      y,
      ws: .05,
      wst: 0
    }
    itemList.push(teamFlag)

    // 队名
    let teamName = {
      type: 'text',
      text: element.name,
      size: 24,
      color,
      x: 120 + 370 * LorR,
      y,
      origin: 'West',
      align: 'left',
    }
    // console.log(teamName);
    itemList.push(teamName)
  }

}
