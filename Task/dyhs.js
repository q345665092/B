/*
tgchannel：https://t.me/ZhiYi_Script
github：https://github.com/ZhiYi-N/script
boxjs：https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/ZhiYi-N.boxjs.json
作者：执意ZhiYi-N
#看一个视频弹出金币获取ck，本脚本只供学习使用，请勿滥用，下载24小时内请删除

[mitm]
hostname = *.huoshan.com
#圈x
[rewrite local]
/hotsoon/flame/task_done/? url script-request-body https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/huoshan.js

/hotsoon/item/reaction/_play/? url script-request-body https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/huoshan.js

#loon
http-request /hotsoon/flame/task_done/? script-path=https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/huoshan.js, requires-body=true, timeout=10, tag=抖音火山版video

http-request /hotsoon/item/reaction/_play/? script-path=https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/huoshan.js, requires-body=true, timeout=10, tag=抖音火山版play

#surge
抖音火山版video = type=http-request,pattern=/hotsoon/flame/task_done/?,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/huoshan.js,script-update-interval=0

抖音火山版play = type=http-request,pattern=/hotsoon/item/reaction/_play/?,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/huoshan.js,script-update-interval=0
*/

const zhiyi = '抖音火山版'
const $ = Env(zhiyi)
const notify = $.isNode() ?require('./sendNotify') : '';
let status;
status = (status = ($.getval("hsstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const hsheaderArr = ['{"Accept-Encoding":"gzip, deflate, br","x-Tt-Token":"00ec76e8cca8889135603a72984248d687014c212baf500468ed292216f86625282cbfb31681a56cb6d4f3d90234a07113bb067e72bcba7439d17c5bca88a34e54837c2d65137b0d62a526fad74a1d05aa7e6b0adebd15e5958a088a51452231d425b-1.0.1","Host":"api3-normal-c-lq.huoshan.com","X-Ladon":"3cnMJt4eEzAKGXD/f0sCLBR094ZoO3ziC5zEB3Q5MX8rWobM","x-tt-trace-id":"00-7316c8b909dd8fff2efcf1fc5a220458-7316c8b909dd8fff-01","passport-sdk-version":"5.12.1","X-Khronos":"1616838575","Connection":"keep-alive","X-SS-STUB":"8C4A99742F91208B7BE66ED8599313FC","X-Tyhon":"2E72Ec3i0lCN3twPls3fCq3DwxGn8PEqvNzOEeA=","User-Agent":"ç«å±±å°è§é¢ 11.2.5 rv:11020505 (iPhone; iOS 14.4.1; zh_CN) Cronet","Content-Type":"application/x-www-form-urlencoded","X-Argus":"59MsW6VzECW37Hmk+yez/ZZLox3ZCjdbpcSU4/R+7a7kGTAbv6ZBwLh7ocBmBwyNgJUwr67FdiVIT/EFcG+H0vFw0lg64rjKom7VPUPPrDnp3tjHfCt5zqVgI6dq3AnScfj6CFHOE1M3TOV9nLYnY0lI0Qabf2TquJifOwDiD/BQEL7fI+xLhd8CKdEPyPdtlimeS5AyX4GtCP4NwTHJkq9qkft9Rq6dI5QK/Ai4zI6JgMZYcoz1q7bLCeNmyvV84mY=","Tt-Tnc-Canary":"0","sdk-version":"2","Tt-Tnc-Etag":"ffba5c8a-52e4375f-87797196-e8f75dc1","X-SS-DP":"1112","Tt-Config-Version":"ffba5c8a-52e4375f-87797196-e8f75dc1","Cookie":"passport_csrf_token=93c8cc7b19ec5b658cdcc43d8fa3535b; passport_csrf_token_default=93c8cc7b19ec5b658cdcc43d8fa3535b; d_ticket=aa9b5eaf05c5eed8c3688c647e9a1f9e99a54; multi_sids=509827230480008%3Aec76e8cca8889135603a72984248d687; n_mh=8k25Q0KGRhoZ9_e6AKJh8OvprqyGfx0azcISVCX8qtI; install_id=3518857732695623; ttreq=1$d6295911a382c3b99cdd2553f60ec834468e0c7d; sessionid=ec76e8cca8889135603a72984248d687; sessionid_ss=ec76e8cca8889135603a72984248d687; sid_guard=ec76e8cca8889135603a72984248d687%7C1616821753%7C5184000%7CWed%2C+26-May-2021+05%3A09%3A13+GMT; sid_tt=ec76e8cca8889135603a72984248d687; uid_tt=09e949bf7752be6872ebf61789a93852; uid_tt_ss=09e949bf7752be6872ebf61789a93852; odin_tt=32e6bce4ceed497c7aaa955eacb569cd6227733c14538973e960b8bf5cacf6775aeca7b44eb2a38bcef96487bc7955ce50256555393c5bfdf9b505e0a5af3514","Content-Length":"116","X-Gorgon":"840480cc10008bde0faeabf65388f3678de9180f12a3df3f88c2"}'],hsbodyArr = ['token=WJgbmRRHBKrcS_MjprUseUVPwljDTJ4Zo7oPN2zXb937WoocJeVNPsRGNV3If1wbXpTFH8Sr4y8bRYaF-cG6aqB2w7zNCP3GW1cSKuSz9g4%3D'],hsurlArr = ['device_id=59475227375&os_version=14.4.1&multi_login=1&caid1=&ws_status=CLOSED&new_nav=0&app_name=live_stream&iid=3518857732695623&ac=4G&js_sdk_version=1.93.0.1&mccmnc=46002&version_code=11.2.5&vid=26EF965F-ECCA-4660-BD53-DBA5AE13169E&channel=App%20Store&live_sdk_version=11.2.5&is_vcd=1&client_version_code=110205&caid2=&os_api=18&update_version_code=11020505&idfa=00000000-0000-0000-0000-000000000000&device_platform=iphone&minor_control_status=0&device_type=iPhone11,8&settings_version=24&openudid=3a0c38f4e0133c0029e4b1a461ec23c704de0b09&tab_mode=3&hs_location_permission=0&client_request_id=d38b42b22d9f2cd93a16cbb483510bf2&jssdk_version=1.93.0.1&aid=1112&screen_width=828&cdid=7BD2D357-7AA1-4CC7-916A-CCE3FED67F94'],playurlArr = ['https://api-hl.huoshan.com/hotsoon/item/reaction/_play/?version_code=7.6.4&app_name=live_stream_lite&vid=26EF965F-ECCA-4660-BD53-DBA5AE13169E&device_id=59475227375&new_nav=0&channel=App%20Store&aid=1350&screen_width=828&client_request_id=826f75dbc9a6bd7c5c601efdf75ed371&openudid=8a21caeb6b0806b2531517ff3b7817dc8218d740&live_sdk_version=7.6.4&update_version_code=7642&os_api=18&ws_status=CONNECTED&ac=4G&mccmnc=46002&os_version=14.4&client_version_code=764&device_platform=iphone&iid=193930840800844&device_type=iPhone11,8&idfa=00000000-0000-0000-0000-000000000000'],playheaderArr = ['{"x-tt-trace-id":"00-0cc600ff09dd8fff2efc6ce1a3d20546-0cc600ff09dd8fff-01","Connection":"keep-alive","Accept-Encoding":"gzip, deflate","sdk-version":"1","Content-Type":"application/x-www-form-urlencoded","x-Tt-Token":"00369132599d9abd3c31ef2c790920bc1e0192d82571d7b224633f24ce2985e1becae5ec729a6188ac0b3cf0e80b49a058f6d4884e7bd5d7075333211a3fc70a93e5c222227b17b6a396fe34485422302eaabf43e9fe719d78555c057d924170cef92-1.0.1","X-SS-STUB":"9B77EF5A4ECFABD1198A8F9BFB3475CB","X-Khronos":"1615122005","User-Agent":"HotsoonLite 7.6.4 rv:7642 (iPhone; iOS 14.4; zh_CN) Cronet","Cookie":"passport_csrf_token=f0cbdbf5864c4ea228b1b4e338bfcb28; passport_csrf_token_default=f0cbdbf5864c4ea228b1b4e338bfcb28; odin_tt=b464193f3017d9a44eccc27868a9bf09a009dd6beea7b2556e6535b33da2cb6226ffdaf7650cd3b4c0b4e8c36273f1a96c9282e4b030e4e5c9c14e842cf6a8e0; d_ticket=f9d5e15d4bab4720f65e53ddef8a687099a54; n_mh=8k25Q0KGRhoZ9_e6AKJh8OvprqyGfx0azcISVCX8qtI; install_id=193930840800844; ttreq=1$820fc44ef448be3bb915a78f264c653b7779493d; sid_guard=369132599d9abd3c31ef2c790920bc1e%7C1614296488%7C5184000%7CMon%2C+26-Apr-2021+23%3A41%3A28+GMT; uid_tt=ee95288872ba40606570a624c5440298; uid_tt_ss=ee95288872ba40606570a624c5440298; sid_tt=369132599d9abd3c31ef2c790920bc1e; sessionid=369132599d9abd3c31ef2c790920bc1e; sessionid_ss=369132599d9abd3c31ef2c790920bc1e","Host":"api-hl.huoshan.com","X-Gorgon":"840200650000a7703f6af572067abb8ab962fa4ea185a028d0f9","Content-Length":"57"}'],playbodyArr = ['channel_id=10000&item_id=6936875375393885472&source=video']
let playurl = $.getdata('playurl')
let playheader = $.getdata('playheader')
let playbody = $.getdata('playbody')
let hsurl = $.getdata('hsurl')
let hsheader = $.getdata('hsheader')
let hsbody = $.getdata('hsbody')
let tz = ($.getval('tz') || '1');//0关闭通知，1默认开启
const invite=1;//新用户自动邀请，0关闭，1默认开启
const logs =0;//0为关闭日志，1为开启
var hour=''
var minute=''
let item_id,item_id_inv,adtonen,signtoken,double_token;
let sum = 0;
let no = 0;
let add_lottery_count = 0;
if ($.isNode()) {
   hour = new Date( new Date().getTime() + 8 * 60 * 60 * 1000 ).getHours();
   minute = new Date( new Date().getTime() + 8 * 60 * 60 * 1000 ).getMinutes();
}else{
   hour = (new Date()).getHours();
   minute = (new Date()).getMinutes();
}
//CK运行
let isGetCookie = typeof $request !== 'undefined'
if (isGetCookie) {
   GetCookie();
   $.done()
} 
if ($.isNode()) {
   if (process.env.HSURL && process.env.HSURL.indexOf('#') > -1) {
   hsurl = process.env.HSURL.split('#');
   console.log(`您选择的是用"#"隔开\n`)
  }
  else if (process.env.HSURL && process.env.HSURL.indexOf('\n') > -1) {
   hsurl = process.env.HSURL.split('\n');
   console.log(`您选择的是用换行隔开\n`)
  } else {
   hsurl = process.env.HSURL.split()
  };
  if (process.env.HSHEADER && process.env.HSHEADER.indexOf('#') > -1) {
   hsheader = process.env.HSHEADER.split('#');
   console.log(`您选择的是用"#"隔开\n`)
  }
  else if (process.env.HSHEADER && process.env.HSHEADER.indexOf('\n') > -1) {
   hsheader = process.env.HSHEADER.split('\n');
   console.log(`您选择的是用换行隔开\n`)
  } else {
   hsheader = process.env.HSHEADER.split()
  };
  if (process.env.HSBODY && process.env.HSBODY.indexOf('#') > -1) {
   hsbody = process.env.HSBODY.split('#');
   console.log(`您选择的是用"#"隔开\n`)
  }
  else if (process.env.HSBODY && process.env.HSBODY.indexOf('\n') > -1) {
   hsbody = process.env.HSBODY.split('\n');
   console.log(`您选择的是用换行隔开\n`)
  } else {
   hsbody = process.env.HSBODY.split()
  };
if (process.env.PLAYURL && process.env.PLAYURL.indexOf('#') > -1) {
   playurl = process.env.PLAYURL.split('#');
   console.log(`您选择的是用"#"隔开\n`)
  }
  else if (process.env.PLAYURL && process.env.PLAYURL.indexOf('\n') > -1) {
   playurl = process.env.PLAYURL.split('\n');
   console.log(`您选择的是用换行隔开\n`)
  } else {
   playurl = process.env.PLAYURL.split()
  };
  if (process.env.PLAYHEADER && process.env.PLAYHEADER.indexOf('#') > -1) {
   playheader = process.env.PLAYHEADER.split('#');
   console.log(`您选择的是用"#"隔开\n`)
  }
  else if (process.env.PLAYHEADER && process.env.PLAYHEADER.indexOf('\n') > -1) {
   playheader = process.env.PLAYHEADER.split('\n');
   console.log(`您选择的是用换行隔开\n`)
  } else {
   playheader = process.env.PLAYHEADER.split()
  };
  if (process.env.PLAYBODY && process.env.PLAYBODY.indexOf('#') > -1) {
   playbody = process.env.PLAYBODY.split('#');
   console.log(`您选择的是用"#"隔开\n`)
  }
  else if (process.env.PLAYBODY && process.env.PLAYBODY.indexOf('\n') > -1) {
   playbody = process.env.PLAYBODY.split('\n');
   console.log(`您选择的是用换行隔开\n`)
  } else {
   playbody = process.env.PLAYBODY.split()
  };
    console.log(`============ 脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}  =============\n`)
    console.log(`============ 脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}  =============\n`)
 } else {
    hsurlArr.push($.getdata('hsurl'))
    hsheaderArr.push($.getdata('hsheader'))
    hsbodyArr.push($.getdata('hsbody'))
    playurlArr.push($.getdata('playurl'))
    playheaderArr.push($.getdata('playheader'))
    playbodyArr.push($.getdata('playbody'))
    let hscount = ($.getval('hscount') || '1');
  for (let i = 2; i <= hscount; i++) {
	hsurlArr.push($.getdata(`hsurl${i}`))
    hsheaderArr.push($.getdata(`hsheader${i}`))
    hsbodyArr.push($.getdata(`hsbody${i}`))
    playurlArr.push($.getdata(`playurl${i}`))
playheaderArr.push($.getdata(`playheader${i}`))
    playbodyArr.push($.getdata(`playbody${i}`))
  }
}
!(async () => {
if (!hsheaderArr[0] && !hsbodyArr[0] && !hsurlArr[0]) {
    $.msg($.name, '【提示】请先获取抖音火山版一cookie')
    return;
  }
   console.log(`------------- 共${hsheaderArr.length}个账号----------------\n`)
  for (let i = 0; i < hsheaderArr.length; i++) {
    if (hsheaderArr[i]) {
      message = ''
      note = ''
      hsurl = hsurlArr[i];
      hsheader = hsheaderArr[i];
      hsbody = hsbodyArr[i];
      playurl = playurlArr[i];
      playheader = playheaderArr[i];
      playbody = playbodyArr[i];
      $.index = i + 1;
      console.log(`\n开始【抖音火山版${$.index}】`)
      //await ck()
      //await app_alert_check()
      await device_register()
      await userinfo()
      await gettoken()
      await sign_in()
      //await ad()
      await hotsoonfeed()
      await control()
      await lottery_main()
      await lottery() 
      await showmsg()
  }
 }
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())
    
    
function GetCookie() {
if($request&&$request.url.indexOf("task_done")>=0) {
   const hsurl = $request.url.split('?')[1]
   if(hsurl)     $.setdata(hsurl,`hsurl${status}`)
   $.log(`[${zhiyi}] 获取hsurl请求: 成功,hsurl: ${hsurl}`)
   $.msg(`hsurl${status}: 成功🎉`, ``)
   const hsheader = JSON.stringify($request.headers)+''
    if(hsheader)    $.setdata(hsheader,`hsheader${status}`)
    $.log(`[${zhiyi}] 获取hsheader请求: 成功,hsheader: ${hsheader}`)
    $.msg(`hsheader${status}: 成功🎉`, ``)
   const hsbody = $request.body
    if(hsbody)    $.setdata(hsbody,`hsbody${status}`)
    $.log(`[${zhiyi}] 获取hsbody请求: 成功,hsbody: ${hsbody}`)
    $.msg(`hsbody${status}: 成功🎉`, ``)
}


if($request&&$request.url.indexOf("reaction/_play")>=0) {
   const playurl = $request.url
   if(playurl)     $.setdata(playurl,`playurl${status}`)
   $.log(`[${zhiyi}] 获取playurl请求: 成功,playurl: ${playurl}`)
   $.msg(`playurl${status}: 成功🎉`, ``)
   const playheader =JSON.stringify($request.headers)+''
    if(playheader)    
$.setdata(playheader,`playheader${status}`)
    $.log(`[${zhiyi}] 获取playheader请求: 成功,playheader: ${playheader}`)
    $.msg(`playheader${status}: 成功🎉`, ``)
   const playbody = $request.body
    if(playbody)    $.setdata(playbody,`playbody${status}`)
    $.log(`[${zhiyi}] 获取playbody请求: 成功,playbody: ${playbody}`)
    $.msg(`playbody${status}: 成功🎉`, ``)
}
}
//control
async function control(){
   /*for(i = 1;i<3;i++){
    let delay = Math.random()*10000
    $.log('⏰本次延时'+Math.round(delay/1000)+'秒')
    await sleep(delay)
    await video_rewards()
}*/
for(let i = 0;i <= 4;i++){
   item_id_inv = item_id[i]
   $.log(item_id_inv)
   let x = Math.random()
   let delay = x > 0.5? x*30000 : (x+0.5)*15000
   console.log('⏰本次延迟'+Math.round(delay/1000)+'秒')
   await sleep(delay)
   await play_video()
   //await video_rewards()
}
}
//app_alert_check
async function app_alert_check(){
let new_time = Math.round(new Date().getTime()/1000).toString();
	hsheader = hsheader.replace(/X-Khronos":"\d{10}/,`X-Khronos":"${new_time}`)
let iid = hsurl.match(/iid=\d+/)
let idfa = hsurl.match(/idfa=\d+-\d+-\w+-\w+-\w+/)
let vid = hsurl.match(/vid=\w+-\w+-\w+-\w+-\w+/)
let device_id = hsurl.match(/device_id=\d+/)
let mccmnc = hsurl.match(/mccmnc=\d+/)+''
let mcc_mnc = mccmnc.replace("mccmnc",'mcc_mnc')
let aid = hsurl.match(/aid=\d+/)
let check_url = 'https://ichannel.snssdk.com/service/2/app_alert_check/?'+iid+'&ac=WIFI&timezone=8&app_name=live_stream&channel=App%20Store&device_platform=iphone&'+idfa+'&'+vid+'&is_upgrade_user=0&app_verison_minor=10080507&version_code=10.8.5&'+device_id+'&os_version=13.3&'+aid+'&'+mcc_mnc
 return new Promise((resolve) => {
    let app_alert_check_url = {
   		url: check_url,
        headers: JSON.parse(hsheader)
    	}
   $.get(app_alert_check_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        message += '🔔模拟启动 '
        console.log(result.message)
        if(result.data.is_activated == 1){
        console.log('当前状态:活跃\n')
        message += '当前状态:活跃\n'
        }
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }  
//false no function
async function device_register(){
let new_time = Math.round(new Date().getTime()/1000).toString();
	hsheader = hsheader.replace(/X-Khronos":"\d{10}/,`X-Khronos":"${new_time}`)
 return new Promise((resolve) => {
    let device_register_url = {
   		url: `https://log-lq.snssdk.com/service/2/device_register/?tt_data=a&${hsurl}`,
        headers: JSON.parse(hsheader),
        //body: `__hideErrorToast=1&task_name=check_in&token=${signtoken}`
    	}
   $.post(device_register_url,async(error, response, data) =>{
    try{
        //const result = JSON.parse(data)
        if(logs)$.log(data)
        message += '🔔服务注册 '
        console.log('🎈'+'注册成功\n')
        message += '🎈'+'注册成功\n'
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }  
//userinfo
async function userinfo(){
let new_time = Math.round(new Date().getTime()/1000).toString();
	hsheader = hsheader.replace(/X-Khronos":"\d{10}/,`X-Khronos":"${new_time}`)
 return new Promise((resolve) => {
    let userinfo_url = {
   		url: `https://api3-normal-c-lq.huoshan.com/hotsoon/flame/user_flame_info/?${hsurl}`,
        headers: JSON.parse(hsheader)
    	}
   $.get(userinfo_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs) $.log(data)
        message += '🔔用户信息 '
        if(result.status_code == 0){
        console.log('现有火苗：'+result.data.flame_left+'可兑换为：'+((result.data.flame_left/30000).toFixed(1))+'元 现有余额：'+result.data.can_with_draw_money+'元')
        console.log('今日领取火苗'+result.data.td_flame_count)
        message += '今日领取火苗'+result.data.td_flame_count+' 现有火苗'+result.data.flame_left+' 可兑换为'+((result.data.flame_left/30000).toFixed(1))+'元 现有余额'+result.data.can_with_draw_money+'元\n'
        }else{
        console.log('👀我也不知道\n')
        message += '👀我也不知道\n'
        }
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
//gettoken
async function gettoken(){
let new_time = Math.round(new Date().getTime()/1000).toString();
	hsheader = hsheader.replace(/X-Khronos":"\d{10}/,`X-Khronos":"${new_time}`)
 return new Promise((resolve) => {
    let gettoken_url = {
   		url: `https://api3-normal-c-lq.huoshan.com/hotsoon/janus/flame/management/panel/?${hsurl}`,
        headers: JSON.parse(hsheader)
    	}
   $.get(gettoken_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        message += '🔔获取token '
        if(result.status_code == 0){
        var ads = result.data.task_info.data.task_list.find(item => item.task_name === 'ad');
        var sign = result.data.task_info.data.task_list.find(item => item.task_name === 'check_in')
        message += '🎈获取token成功\n'
        if(ads){
        adtoken = ads.ad_task.token
        console.log('🎈'+'获取成功，广告token='+adtoken)
        await ad();
        }
        signtoken = sign.check_in_task.token
        console.log('🎈'+'获取成功，签到token='+signtoken)
        }else{
        console.log('👀我也不知道\n')
        message += '👀我也不知道\n'
        }
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }  
//sign_in
async function sign_in(){
let new_time = Math.round(new Date().getTime()/1000).toString();
	hsheader = hsheader.replace(/X-Khronos":"\d{10}/,`X-Khronos":"${new_time}`)
 return new Promise((resolve) => {
    let sign_inurl = {
   		url: `https://api3-normal-c-lq.huoshan.com/hotsoon/flame/task_system/task_done/?${hsurl}`,
        headers: JSON.parse(hsheader),
        body: `__hideErrorToast=1&task_name=check_in&token=${signtoken}`
    	}
   $.post(sign_inurl,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        message += '🔔每日签到 '
        if(result.status_code == 0){
        console.log('🎈'+'签到成功，获得'+result.data.task_done_award.flame_amount+'\n')
        message += '🎈'+'签到成功，获得'+result.data.task_done_award.flame_amount+'\n'
        }else{
        console.log('👀'+result.data.prompts+"\n")
        message += '👀'+result.data.prompts+"\n"
        }
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }  
//ad
async function ad(){
let new_time = Math.round(new Date().getTime()/1000).toString();
	hsheader = hsheader.replace(/X-Khronos":"\d{10}/,`X-Khronos":"${new_time}`)
 return new Promise((resolve) => {
    let ad_url = {
   		url: `https://api3-normal-c-lq.huoshan.com/hotsoon/flame/task_system/task_done/?${hsurl}`,
    	headers: JSON.parse(hsheader),
     body: `__hideErrorToast=1&task_name=ad&token=${adtoken}`
    	}
   $.post(ad_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        message += '🔔广告赢火苗 '
        if(result.status_code == 0){
        console.log('🎈成功，获得'+result.data.task_done_award.flame_amount+'\n')
        message += '🎈成功，获得'+result.data.task_done_award.flame_amount+'\n'
        }else{
        console.log('👀'+result.data.prompts+'\n')
        message += '👀'+result.data.prompts+'\n'
        }
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  } 
async function ck(){
  $.log('hsurl:'+hsurl)
  $.log('hsbody:'+hsbody)
  $.log('hsheaser:'+hsheader)
  $.log('hsheaser:'+hsheader.replace("{",`"{x-common-params-v2": "${hsurl}"`))
}
//hotsoonfeed
async function hotsoonfeed(){
let new_time = Math.round(new Date().getTime()/1000).toString();
	playheader = playheader.replace(/X-Khronos":"\d{10}/,`X-Khronos":"${new_time}`)
 return new Promise((resolve) => {
    let hotsoonfeed_url = {
   		url: 'https://api3-normal-c-lf.huoshan.com/hotsoon/feed/?type=video&action=refresh',
    	headers: JSON.parse(playheader),
    	}
   $.get(hotsoonfeed_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.status_code == 0){
        console.log('🎈视频列表获取成功！即将开始播放前5个'+'\n')
        //message += '🎈视频列表获取成功！即将开始播放前2个'+'\n'
        let item = data.match(/692\d{16}/g)
        item_id = item.distinct();
}
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  } 
//play_video
async function play_video(){
let new_time = Math.round(new Date().getTime()/1000).toString();
	playheader = playheader.replace(/X-Khronos":"\d{10}/,`X-Khronos":"${new_time}`)
let newplaybody = playbody.replace(/\d{19}/,`${item_id_inv}`)
 return new Promise((resolve) => {
    let play_video_url = {
     url: playurl,
    	headers: JSON.parse(playheader), 	
     body: newplaybody
}
   $.post(play_video_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        //await sleep(30000);
        if(result.status_code == 0){
        console.log('🎈视频播放成功！play_count=：'+result.data.play_count)
        no = no + 1;
        await video_rewards()
        //message = `🎈视频播放成功${no}次，获取奖励${no}次\n`
        }else{
        console.log('视频播放失败'+result.extra.details+'\n')
        no = no + 1;
        await video_rewards()
        
}
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  } 

//video_rewards
async function video_rewards(){
	let new_time = Math.round(new Date().getTime()/1000).toString();
	hsheader = hsheader.replace(/X-Khronos":"\d{10}/,`X-Khronos":"${new_time}`)
        let url = hsurl.replace(/device_platform=\w+/,'device_platform=android')
 return new Promise((resolve) => {
    let video_rewards_url = {
   		url: `https://api3-normal-c-lq.huoshan.com/hotsoon/flame/task_done/?${url}`,
    	headers: JSON.parse(hsheader),
    	body: hsbody
    	}
   $.post(video_rewards_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.status_code == 0){
	    let token = result.data.next_token.match(/WJ.*?(?==)/)+''.replace("%3D","=")
	    let newhsbody = hsbody.replace(/WJ.*?(?==)/,`${token}`)
         let _hsbody = newhsbody.replace("%3D","=")
         hsbody = _hsbody
         $.setdata(_hsbody,`hsbody${status}`)
         //$.log(hsbody)
         $.log(token)
         $.log(_hsbody)
        let coins = result.data.flame_amount
        console.log(`🎈第${no}次获得火苗成功：`+coins+'\n')
        sum = sum + coins
        note = `🔔看视频奖励 视频播放成功${no}次，获取奖励${no}次,共获得火苗成功：${sum}\n`
        }else{
        console.log('👀'+'我也不知道\n')
        //message += '👀'+"我也不知道\n"
        }
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
}
//lottery_main
async function lottery_main(){
let new_time = Math.round(new Date().getTime()/1000).toString();
	hsheader = hsheader.replace(/X-Khronos":"\d{10}/,`X-Khronos":"${new_time}`)
 return new Promise((resolve) => {
    let lottery_main_url = {
   		url: `https://api3-normal-c-lq.huoshan.com/hotsoon/commerce/lottery/main/?${hsurl}$activity_id=1`,
        headers: JSON.parse(hsheader),
    	}
   $.get(lottery_main_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.status_code == 0){
        console.log('🎈'+'加载转盘成功\n')
        var task = result.data.tasks.find(item => item.task_id === 2);
        console.log('增加抽奖次数'+task.task_current+'/'+task.task_total+'\n')
        if(task.task_current < task.task_total){
        add_lottery_count = 1;
}
        }else{
        console.log('👀'+"我也不知道\n")
        }
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
//lottery
async function lottery(){
let new_time = Math.round(new Date().getTime()/1000).toString();
	hsheader = hsheader.replace(/X-Khronos":"\d{10}/,`X-Khronos":"${new_time}`)
 return new Promise((resolve) => {
    let lottery_url = {
   		url: `https://api3-normal-c-lq.huoshan.com/hotsoon/commerce/lottery/?${hsurl}$activity_id=1`,
        headers: JSON.parse(hsheader),
    	}
   $.get(lottery_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs) $.log(data)
        if(result.data.gift){
        message += '🔔抽奖ing'
        console.log('🎈'+'抽奖成功'+result.data.gift.name+'\n')
        message += '🎈'+'抽奖成功'+result.data.gift.name+'\n'
        if(result.data.token){
        if(result.data.button.title.indexOf('看视频领取奖励')){
        console.log('正在领取奖励...\n')
        }
        if(result.data.button.title.indexOf('翻倍')){
        console.log('正在领取翻倍奖励...\n')
        double_token = result.data.token
        await sleep(15000);
        await task_ack()
       }
        }
        }
        else{
        if(result.data.alert.indexOf('次数已用完') && add_lottery_count == 1){
        console.log('抽奖次数已用完，正在看广告增加次数')
        //message += '抽奖次数已用完，正在看广告增加次数'
        await sleep(15000)
        if(add = 1){
        await add_lottery()
   }
       }
        }
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
  }
//add_lottery
async function add_lottery(){
	let new_time = Math.round(new Date().getTime()/1000).toString();
	hsheader = hsheader.replace(/X-Khronos":"\d{10}/,`X-Khronos":"${new_time}`)
 return new Promise((resolve) => {
    let add_lottery_url = {
   		url: `https://api3-normal-c-lq.huoshan.com/hotsoon/commerce/task/ack/?${hsurl}`,
    	headers: JSON.parse(hsheader),
    	body: `task_done_cnt=1&task_id=2`
    	}
   $.post(add_lottery_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.status_code == 0){
	   console.log('增加抽奖次数成功,再次请求抽奖\n')
        if(add_lottery_count == 1){
        await lottery()
        }
        }else{
        console.log('👀'+'我也不知道\n')
        //message += '👀'+"我也不知道\n"
        }
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
}
//task_ack
async function task_ack(){
	let new_time = Math.round(new Date().getTime()/1000).toString();
	hsheader = hsheader.replace(/X-Khronos":"\d{10}/,`X-Khronos":"${new_time}`)
 return new Promise((resolve) => {
    let task_ack_url = {
   		url: `https://api3-normal-c-lq.huoshan.com/hotsoon/commerce/task/ack/?${hsurl}`,
    	headers: JSON.parse(hsheader),
    	body: `task_done_cnt=1&task_id=1002&token=${double_token}`
    	}
   $.post(task_ack_url,async(error, response, data) =>{
    try{
        const result = JSON.parse(data)
        if(logs)$.log(data)
        if(result.status_code == 0){
	   console.log('获取奖励成功'+result.data.name)
        //message += '获取奖励成功'+result.data.name
        }else{
        console.log('👀'+'我也不知道\n')
        //message += '👀'+"我也不知道\n"
        }
        }catch(e) {
          $.logErr(e, response);
      } finally {
        resolve();
      } 
    })
   })
}
//sleep
function sleep(time){
	 return new Promise((resolve) => setTimeout(resolve,time));
}
//reduce
Array.prototype.distinct = function (){
 var arr = this,
  result = [],
  len = arr.length;
 arr.forEach(function(v, i ,arr){  //这里利用map，filter方法也可以实现
  var bool = arr.indexOf(v,i+1);  //从传入参数的下一个索引值开始寻找是否存在重复
  if(bool === -1){
   result.push(v);
  }
 })
 return result;
};
//showmsg
async function showmsg(){
if(tz==1){
    $.log(message+note)
    if ($.isNode()){
    if ((hour == 12 && minute <= 20) || (hour == 23 && minute >= 40)) {
       await notify.sendNotify($.name,message+note)
     }
   }else{
     $.log(message+note)
    //if ((hour == 12 && minute <= 20) || (hour == 23 && minute >= 40)) {
       $.msg(zhiyi,'',message+note)
//}
}
   }else{
       $.log(message+note)
    }
 }
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
