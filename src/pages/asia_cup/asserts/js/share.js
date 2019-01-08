import jsonp from 'jsonp'
const WECHAT_JSONP_URL = 'https://api.dongqiudi.com/wechat/i?action=normal'
const DQD_LOGO = 'https://img.dongqiudi.com/app/shareicon5121.png'

function wechatShare (config) {
  config.imgUrl = config.imgUrl || DQD_LOGO
  jsonp(WECHAT_JSONP_URL, null, function (err, data) {
    if (err) { return console.log(err) }
    let timestamp = data.timestamp
    let noncestr = data.noncestr
    let signature = data.signature
    wx.config({
      debug: false,
      appId: 'wxf573a1469de1033d',
      timestamp: timestamp,
      nonceStr: noncestr,
      signature: signature,
      jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareQZone']
    })
    wx.ready(() => {
      wx.onMenuShareTimeline({
        title: config.title,
        link: config.link,
        imgUrl: config.imgUrl
      })
      wx.onMenuShareAppMessage({
        title: config.title,
        desc: config.desc,
        link: config.link,
        imgUrl: config.imgUrl,
        type: '',
        dataUrl: ''
      })
      wx.onMenuShareQQ({
        title: config.title,
        desc: config.desc,
        link: config.link,
        imgUrl: config.imgUrl
      })
      wx.onMenuShareQZone({
        title: config.title,
        desc: config.desc,
        link: config.link,
        imgUrl: config.imgUrl
      })
    })
  })
}

function awakeApp (schema) {
  const USER_AGENT = navigator.userAgent.toLowerCase()
  let browser = {}
  browser.Android = USER_AGENT.match(/android/)
  if (browser.Android) {
    if (USER_AGENT.match(/micromessenger|weibo/)) {
      location.href = 'https://a.app.qq.com/o/simple.jsp?pkgname=com.dongqiudi.news&android_schema=' + encodeURIComponent(schema)
    } else {
      let iframe = document.createElement( "iframe" ),
        num = 0,
        timer;
      iframe.src = schema;
      iframe.style.display = "none";
      document.body.appendChild( iframe );
      timer = setInterval( function() {
        num++;
      }, 20 );
      setTimeout( function() {
        clearInterval( timer );
        document.body.removeChild( iframe );
        if ( num > 50 ) {
          location.href = "https://dqdfiles.b0.upaiyun.com/app/apk/channel/dongqiudi-m_yindao.apk";
        }
      }, 2000 );
    }
  } else {
    location.href = 'https://front.dongqiudi.com/app.html?type=' + schema
  }
}

export { wechatShare, awakeApp }
