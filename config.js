 //查询今日是否签到成功接口 个 https://api.juejin.cn/growth_api/v1/get_today_status
module.exports = { 
  //掘金相关参数哈哈哈哈1111
  nuggets: {
    signInUrl: `https://api.juejin.cn/growth_api/v1/check_in`, //签到接口
    freeCheckUrl: `https://api.juejin.cn/growth_api/v1/lottery_config/get`, //免费抽奖次数查询
    drawUrl: `https://api.juejin.cn/growth_api/v1/lottery/draw`, //抽奖接口
    jdSignUrl:`https://api.m.jd.com/client.action?functionId=signBeanIndex&appid=ld`,
    headers: {
      Referer: "https://juejin.cn/",
      "Upgrade-Insecure-Requests": 1,
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36",
      cookie: `__tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227217725432833214008%2522%252C%2522user_unique_id%2522%253A%25227217725432833214008%2522%252C%2522timestamp%2522%253A1680507666962%257D; _ga=GA1.2.251312913.1680573631; _tea_utm_cache_2608={%22utm_source%22:%22course_list%22}; _tea_utm_cache_2018={%22utm_source%22:%22course_list%22}; passport_csrf_token=0f7e489b1f4c6b79d8452f3bf0b21d4c; passport_csrf_token_default=0f7e489b1f4c6b79d8452f3bf0b21d4c; n_mh=2lYHR7KM7XZxN-BUWOZb0qR0905Ws_JvhpEyc5eGwgE; passport_auth_status=9f369c5ade66980e9394b62d11931222%2C; passport_auth_status_ss=9f369c5ade66980e9394b62d11931222%2C; sid_guard=d4b6f814aa0012a91aa109710100f15a%7C1712127327%7C31536000%7CThu%2C+03-Apr-2025+06%3A55%3A27+GMT; uid_tt=6de5c194656caa335610ae84d1fab95f; uid_tt_ss=6de5c194656caa335610ae84d1fab95f; sid_tt=d4b6f814aa0012a91aa109710100f15a; sessionid=d4b6f814aa0012a91aa109710100f15a; sessionid_ss=d4b6f814aa0012a91aa109710100f15a; sid_ucp_v1=1.0.0-KDM2MzkxN2ZiZWE0NTkyYzdhZmNjMTg1MTQwNjkzOGJkMzlkYTczNTEKFwi3wKDA_fW5AxDf-rOwBhiwFDgCQPEHGgJscSIgZDRiNmY4MTRhYTAwMTJhOTFhYTEwOTcxMDEwMGYxNWE; ssid_ucp_v1=1.0.0-KDM2MzkxN2ZiZWE0NTkyYzdhZmNjMTg1MTQwNjkzOGJkMzlkYTczNTEKFwi3wKDA_fW5AxDf-rOwBhiwFDgCQPEHGgJscSIgZDRiNmY4MTRhYTAwMTJhOTFhYTEwOTcxMDEwMGYxNWE; store-region=cn-bj; store-region-src=uid; msToken=HG_jbVZ8TQde_JD_Gz0fXmFY88JOSW9wIOQ8dhPEr6yKka8ME-DMV-OFAfrH_hmyPa6NWkhDmQJwEscvQMSY5HWoWd4fEAVVKzhoefI03roQ3dEJQgYp5y1l0aYbYz8=`, //用自己的
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
   

