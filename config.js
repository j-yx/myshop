//查询今日是否签到成功接口 个 https://api.juejin.cn/growth_api/v1/get_today_status
module.exports = { 
  //掘金相关参数哈哈哈哈111
  nuggets: {
    signInUrl: `https://api.juejin.cn/growth_api/v1/check_in`, //签到接口
    freeCheckUrl: `https://api.juejin.cn/growth_api/v1/lottery_config/get`, //免费抽奖次数查询
    drawUrl: `https://api.juejin.cn/growth_api/v1/lottery/draw`, //抽奖接口
    jdSignUrl:`https://api.m.jd.com/client.action?functionId=signBeanIndex&appid=ld`,
    headers: {
      Referer: "https://juejin.cn/",
      "Upgrade-Insecure-Requests": 1,
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36",
      cookie: `__tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227217725432833214008%2522%252C%2522user_unique_id%2522%253A%25227217725432833214008%2522%252C%2522timestamp%2522%253A1680507666962%257D; n_mh=2lYHR7KM7XZxN-BUWOZb0qR0905Ws_JvhpEyc5eGwgE; sid_guard=de69086aee5ca1be6988b64de61a0c95%7C1680573630%7C31536000%7CWed%2C+03-Apr-2024+02%3A00%3A30+GMT; uid_tt=4c83649e8b7f2248fd5001e8487dc079; uid_tt_ss=4c83649e8b7f2248fd5001e8487dc079; sid_tt=de69086aee5ca1be6988b64de61a0c95; sessionid=de69086aee5ca1be6988b64de61a0c95; sessionid_ss=de69086aee5ca1be6988b64de61a0c95; sid_ucp_v1=1.0.0-KGFmMzE5MzI4NDM3NGYzY2NiY2Q1NWFjNzlmNzMwZmE5OWUzZjA1NTUKFgi3wKDA_fW5AxC-ia6hBhiwFDgIQAsaAmxmIiBkZTY5MDg2YWVlNWNhMWJlNjk4OGI2NGRlNjFhMGM5NQ; ssid_ucp_v1=1.0.0-KGFmMzE5MzI4NDM3NGYzY2NiY2Q1NWFjNzlmNzMwZmE5OWUzZjA1NTUKFgi3wKDA_fW5AxC-ia6hBhiwFDgIQAsaAmxmIiBkZTY5MDg2YWVlNWNhMWJlNjk4OGI2NGRlNjFhMGM5NQ; store-region=cn-bj; store-region-src=uid; _ga=GA1.2.251312913.1680573631; _tea_utm_cache_2608={%22utm_source%22:%22course_list%22}; msToken=i131GW_hbK6CTki-NvIKmjYMOw-FffXGzqu6S0W_IDf5ombVihklGi01rvGReTrCEgKEbesPm9R3AwzKxOhhoYvUVFem-FIKqlxc4wy-cY_iYO7jYI273rLhBcfbmz-h`, //用自己的
    }, //相关请求头
    jdHeaders:{
      "Cookie":`pt_key=app_openAAJjHD22ADCjLji1mYkysEca30aS5_UogmaI_JoB81azfE7_0qGn7KgVr6cZyEXTi4lsAZDEZKs; pt_pin=jd_5cff0a1f544fb; pwdt_id=jd_5cff0a1f544fb;  `
    }
  },
  //消息推送相关参数 关注pushplus微信公众号可以获得一对一推送的调用参数，不是推广
  pushPlus: {
    url: `http://www.pushplus.plus/send`, //微信推送URL1
    token: `4661b314662d4ffbb68cba10283aaf57`, //这是免费的
  },   
}
   

