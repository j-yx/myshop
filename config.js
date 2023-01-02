//查询今日是否签到成功接口  https://api.juejin.cn/growth_api/v1/get_today_status
module.exports = {
  //掘金相关参数哈哈哈哈
  nuggets: {
    signInUrl: `https://api.juejin.cn/growth_api/v1/check_in`, //签到接口
    freeCheckUrl: `https://api.juejin.cn/growth_api/v1/lottery_config/get`, //免费抽奖次数查询
    drawUrl: `https://api.juejin.cn/growth_api/v1/lottery/draw`, //抽奖接口
    jdSignUrl:`https://api.m.jd.com/client.action?functionId=signBeanIndex&appid=ld`,
    headers: {
      Referer: "https://juejin.cn/",
      "Upgrade-Insecure-Requests": 1,
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36",
      cookie: ` __tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227103805700765222415%2522%252C%2522user_unique_id%2522%253A%25227103805700765222415%2522%252C%2522timestamp%2522%253A1653983665370%257D; passport_csrf_token=0184687cf639b6737c1892ef9d9b4db3; passport_csrf_token_default=0184687cf639b6737c1892ef9d9b4db3; n_mh=2lYHR7KM7XZxN-BUWOZb0qR0905Ws_JvhpEyc5eGwgE; sid_guard=a5e6f96bb31cef66de1a5e9d8976f8e8%7C1653983705%7C31536000%7CWed%2C+31-May-2023+07%3A55%3A05+GMT; uid_tt=186fdeb599fb1d7ef361004142e36682; uid_tt_ss=186fdeb599fb1d7ef361004142e36682; sid_tt=a5e6f96bb31cef66de1a5e9d8976f8e8; sessionid=a5e6f96bb31cef66de1a5e9d8976f8e8; sessionid_ss=a5e6f96bb31cef66de1a5e9d8976f8e8; sid_ucp_v1=1.0.0-KGZjYWEzYTdhYWRmNmQ3YWRiMWJkNGI2OTFjYzAxODJjZTkzMDIyZjAKFwi3wKDA_fW5AxDZk9eUBhiwFDgCQPEHGgJsZiIgYTVlNmY5NmJiMzFjZWY2NmRlMWE1ZTlkODk3NmY4ZTg; ssid_ucp_v1=1.0.0-KGZjYWEzYTdhYWRmNmQ3YWRiMWJkNGI2OTFjYzAxODJjZTkzMDIyZjAKFwi3wKDA_fW5AxDZk9eUBhiwFDgCQPEHGgJsZiIgYTVlNmY5NmJiMzFjZWY2NmRlMWE1ZTlkODk3NmY4ZTg; _ga=GA1.2.923858888.1654342368; _tea_utm_cache_2608={%22utm_medium%22:%22user_center%22%2C%22utm_campaign%22:%22ad%22}; _gid=GA1.2.478658005.1658712162; MONITOR_WEB_ID=0c847fa7-3fa2-40e3-a59c-1aa122d7c83f`, //用自己的
    }, //相关请求头
    jdHeaders:{
      "Cookie":`pt_key=app_openAAJjHD22ADCjLji1mYkysEca30aS5_UogmaI_JoB81azfE7_0qGn7KgVr6cZyEXTi4lsAZDEZKs; pt_pin=jd_5cff0a1f544fb; pwdt_id=jd_5cff0a1f544fb;  `
    }
  },
  //消息推送相关参数 关注pushplus微信公众号可以获得一对一推送的调用参数，不是推广
  pushPlus: {
    url: `http://www.pushplus.plus/send`, //微信推送URL
    token: `4661b314662d4ffbb68cba10283aaf57`, //这是免费的
  },  
}
