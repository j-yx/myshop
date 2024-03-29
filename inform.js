const { pushPlus } = require("./config");
const axios = require("axios");
const getNowTime = (key) => {
    let nowTime = ``;
    try {
      nowTime = new Date()[key]();
    } catch (e) {
      nowTime = `获取时间函数错误2！`;
      console.error(`请传入日期函数 —— ${e}`);
    }
    return nowTime;
}

const pushMsg = async (title, content) => {
    console.log(`\n------${getNowTime(`toLocaleString`)} 开始推送wx消息 ------`);
    //获取配置参数
    const { url, token } = pushPlus;
    const res = await axios({
        url,
        method: `get`,
        params: {
            token,
            template: `json`,
            title,
            content,
        }
    });
    if (res && res.data) {
        console.log(`\n ${JSON.stringify(res.data)} \n\n------ ${getNowTime(`toLocaleTimeString`)} 推送成功 ------\n`);
    } else {
        console.log(res);
        console.log(`\n------ ${getNowTime(`toLocaleTimeString`)} 推送失败 ------ \n`);
    }
}

module.exports = pushMsg
