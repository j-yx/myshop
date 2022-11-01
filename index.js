
const axios = require("axios");
const schedule = require("node-schedule");
//相关参数保存在文件内
const { nuggets, pushPlus } = require("./config");
const pushMsg = require('./inform')
const JdAll = require('./jdSign')

const getNowTime = (key) => {
  let nowTime = ``;
  try {
    nowTime = new Date()[key]();
  } catch (e) {
    nowTime = `获取时间函数错误！`;
    console.error(`请传入日期函数 —— ${e}`);
  }
  return nowTime;
}


/**
 * 掘金自动签到 请求方法
 */
const hacpaiSignRequest = async () => {
  console.log(`\n\n------${getNowTime(`toLocaleDateString`)} - 开始签到------\n`);
  const { headers, signInUrl } = nuggets; //签到相关参数
  const res = await axios({
    url: signInUrl,
    method: `post`,
    headers,
  });
  if (res && res.data) {
    console.log(`\n ${JSON.stringify(res.data)} \n \n ------ ${getNowTime(`toLocaleTimeString`)} 签到成功 ------\n`);
    //签到成功后推送消息
    if (res.data.err_no == 0) {
      pushMsg(`掘金签到结果`, { '获得': `${res.data.data.incr_point}矿石`, '总计': `${res.data.data.sum_point}矿石` })
    } else {
      pushMsg(`掘金签到结果`, res.data);
    }
    //签到成功后，30s内查询免费抽奖次数
    setTimeout(() => {
      freeCheck();
    }, Math.random() * 30 * 1000)
  } else {
    console.log(res);
    console.log(`\n ------ ${getNowTime(`toLocaleTimeString`)} 签到失败 ------ \n`);
    pushMsg(`掘金签到结果`, { '签到失败': res.data }); //签到成功后推送消息
  }
}

/**
 * 查询还有几次免费抽奖的机会
 */
const freeCheck = async () => {
  console.log(`\n------${getNowTime(`toLocaleString`)} 开始查询抽奖次数 ------`);
  const { headers, freeCheckUrl } = nuggets; //查询免费次数相关参数
  const res = await axios({
    url: freeCheckUrl,
    method: `get`,
    headers,
  });
  if (res && res.data) {
    console.log(`\n ------ 获得免费抽奖次数：${res.data.data.free_count || 0} ------\n`);
    if (res.data.data.free_count > 0) {
      //如果有免费抽奖次数直接开始抽奖
      luckDraw();
    }
  } else {
    console.log(res);
    console.log(`\n ------ ${getNowTime(`toLocaleTimeString`)} 查询抽奖次数失败 ------ \n`);
  }
}

/**
 * 掘金抽奖函数方法
 */
const luckDraw = async () => {
  console.log(`\n------${getNowTime(`toLocaleString`)} 开始抽奖 ------`);
  const { headers, drawUrl } = nuggets; //抽奖相关参数
  const res = await axios({
    url: drawUrl,
    method: `post`,
    headers,
  });
  if (res && res.data) {
    console.log(`\n ------ ${getNowTime(`toLocaleTimeString`)}  抽奖成功，获得：${res.data.data.lottery_name} ------\n`);
    let jsonMsg = { '奖品': res.data.data.lottery_name };
    pushMsg(`掘金抽奖结果`, jsonMsg)
  } else {
    console.log(res);
    console.log(`\n ------ ${getNowTime(`toLocaleTimeString`)} 抽奖失败 ------ \n`);
    pushMsg(`掘金抽奖结果`, { '结果': '抽奖失败' })
  }
}

//定时触发任务
// const signTask = () => {
//   //每天在6:00-6:10随机签到
//   schedule.scheduleJob("0 0 11 * * *", () => {
//     setTimeout(() => {
//       hacpaiSignRequest(); //签到函数
//     }, Math.random() * 10 * 60 * 1000)
//   })
// }
setTimeout(() => {
  hacpaiSignRequest(); //签到函数
  JdAll('pt_key=app_openAAJjYJFLADB6LIqiWs0egHF5B6BULGrP2WdynIfK_xMaU5AL-lJn0bSmMW0-bpM8m64pJsc1bK4; pt_pin=jd_5cff0a1f544fb; pwdt_id=jd_5cff0a1f544fb;','reqData=%7B%22channelSource%22%3A%22JRAPP6.0%22%2C%22riskDeviceParam%22%3A%22%7B%5C%22eid%5C%22%3A%5C%22ABUVLMTL3MEQFCOTILCZWQN2ELW7MUKVXJKDM2KGGC5QIH74BM645LRZUI2567SNBJZOZT42KD4WD2MFCDT4AXKZ2E%5C%22%2C%5C%22fp%5C%22%3A%5C%22b1b59186c72777bfe0f692b64567d15f%5C%22%2C%5C%22sdkToken%5C%22%3A%5C%22jdd01S6FSJGYT52DDUDX7367BQHJCJ4RS4RYWQEIMDGT6Q2CTFDS2UBLQ5LVC2DEWOHP7HYVSPWRKPGOFRALGNHCD5MKFF7KRVM7NO37GV3I01234567%5C%22%2C%5C%22token%5C%22%3A%5C%22GVGSAJJVKH5KAZVOO2FTHIBM3FUUCEPNDY7HI7L2FLKAYSHPGCF2IM3Q3JOCK7UONS2BPUAS56BOQ%5C%22%2C%5C%22jstub%5C%22%3A%5C%22THXIK5RV4PMK3MY2NN6GMX7JP6U22PEUPAOGZORMV43MEOHB4HOAZKSGEAUHHHUM776XWZBGS42PCZJ7DYBWO32RJ6NLXLM52IB42AI%5C%22%7D%22%2C%22site%22%3A%22JD_JR_APP%22%2C%22channel%22%3A%22sy%22%2C%22channelLv%22%3A%22sy%22%7D')
}, Math.random() * 11 * 60 * 1000)
// console.log(JdAll)
//开始执行任务
console.log(`开始执行任务-${getNowTime('toLocaleString')}`);
// signTask();
