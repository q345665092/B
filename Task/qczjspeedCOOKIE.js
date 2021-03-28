

//独立COOKIE文件     ck在``里面填写，多账号换行
let GetUserInfoheaderVal= `{"Cookie":"app_cityid=320300; app_provinceid=320000; app_deviceid=64ccbd4b396d2cdae94696aba720bc6493f4de2f; app_devicename=iPhone; app_key=autospeed_ios; app_platform=iPhone; app_sign=41487C91AD04B9C21882D47C419020BA; app_sysver=14.3; app_userid=210642168; app_ver=1.7.1; device_standard=iPhone11,8; pcpopclub=7fb0ce016e4b4b26b6da12e5ed12647d0c8e24f8; sessionlogin=dc7b8daff8bf4bf7aa15be4a0fdb65600c8e24f8; area=320312; ref=0%7C0%7C0%7C0%7C2021-01-15+05%3A52%3A14.395%7C2021-01-04+17%3A19%3A54.263; ahpvno=66; autoid=84bd35244ec193579b8d26a4ed231038; sessionip=180.123.67.142; v_no=1; visit_info_ad=488D5A3A-7747-4577-97EA-5F9D5A0861A9||E656F560-E6E1-4302-9191-24407A866F00||-1||-1||1; __ah_uuid_ng=u_210642168; cookieCityId=320300; clubUserShow=210642168|0|2|%e4%b8%80%e5%bc%a0%e6%96%b9%e8%84%b8%e8%9b%8b|0|0|0|/g29/M00/45/51/120X120_0_q87_autohomecar__ChwFk19HdoSAcpJvAACWbTG1eAM673.jpg|2021-01-13 08:53:40|0; fvlid=1610404004159Dro4VPixQX; ahpau=1; sessionid=488D5A3A-7747-4577-97EA-5F9D5A0861A9%7C%7C2021-01-04+17%3A19%3A54.263%7C%7C0","apisign":"1|64ccbd4b396d2cdae94696aba720bc6493f4de2f|autohomebrush|1610707101|EA053F283C6090E5137DA26680EC95B9","reqid":"64ccbd4b396d2cdae94696aba720bc6493f4de2f/1610707101835/824","Accept":"*/*","Accept-Encoding":"gzip, deflate, br","Host":"mobile.app.autohome.com.cn","User-Agent":"iPhone\t14.3\tautohome\t1.7.1\tiPhone","Connection":"keep-alive","Accept-Language":"zh-Hans;q=1"} 
{"Cookie":"app_cityid=320300; app_provinceid=320000; app_deviceid=64ccbd4b396d2cdae94696aba720bc6493f4de2f; app_devicename=iPhone; app_key=autospeed_ios; app_platform=iPhone; app_sign=A466D43720AC4E8632DDC9BF321C7CBD; app_sysver=14.3; app_userid=210862818; app_ver=1.7.1; device_standard=iPhone11,8; pcpopclub=f609e5f46e49410ca4d2299d44494b5e0c9182e2; sessionlogin=f609e5f46e49410ca4d2299d44494b5e0c9182e2; clubUserShow=210862818|0|2|%e5%be%90%e5%b7%9e%e8%bd%a6%e5%8f%8bwgxuiq|0|0|0||2021-01-13 08:15:58|0; area=320312; ref=0%7C0%7C0%7C0%7C2021-01-13+07%3A24%3A15.848%7C2021-01-04+17%3A19%3A54.263; ahpvno=57; autoid=84bd35244ec193579b8d26a4ed231038; v_no=4; visit_info_ad=488D5A3A-7747-4577-97EA-5F9D5A0861A9||BB1C492F-43C2-49CB-80B4-0E392110A581||-1||-1||4; sessionip=180.123.67.142; fvlid=1610404004159Dro4VPixQX; __ah_uuid_ng=u_210642168; ahpau=1; sessionid=488D5A3A-7747-4577-97EA-5F9D5A0861A9%7C%7C2021-01-04+17%3A19%3A54.263%7C%7C0","apisign":"1|64ccbd4b396d2cdae94696aba720bc6493f4de2f|autohomebrush|1610497081|761B1291522DB89EE5DB3D83BA1C8673","reqid":"64ccbd4b396d2cdae94696aba720bc6493f4de2f/1610497082993/752","Accept":"*/*","Accept-Encoding":"gzip, deflate, br","Host":"mobile.app.autohome.com.cn","User-Agent":"iPhone\t14.3\tautohome\t1.7.1\tiPhone","Connection":"keep-alive","Accept-Language":"zh-Hans;q=1"} `
let taskbodyVal= `_sign=53569912F7AC22F67007C38FC4370F44&a=18&auth=7fb0ce016e4b4b26b6da12e5ed12647d0c8e24f8&autohomeua=iPhone%0914.3%09autohome%091.7.1%09iPhone&deviceid=64ccbd4b396d2cdae94696aba720bc6493f4de2f&model=1&pm=1&timestamp=1610707044&v=1.7.1 
_sign=4514D0E9B56451C115B6E4294326FCDC&a=18&auth=f609e5f46e49410ca4d2299d44494b5e0c9182e2&autohomeua=iPhone%0914.3%09autohome%091.7.1%09iPhone&deviceid=64ccbd4b396d2cdae94696aba720bc6493f4de2f&model=1&pm=1&timestamp=1610499096&v=1.7.1 `
let activitybodyVal= `_sign=F32B2BA286567A582A20F17EAE80DDE3&a=18&abtest=a&auth=7fb0ce016e4b4b26b6da12e5ed12647d0c8e24f8&autohomeua=iPhone%0914.3%09autohome%091.7.1%09iPhone&deviceid=64ccbd4b396d2cdae94696aba720bc6493f4de2f&pm=1&svs=1&timestamp=1610707044&v=1.7.1 
_sign=0A1A1FBE5F073EB6C7EDF28310DA391F&a=18&abtest=a&auth=f609e5f46e49410ca4d2299d44494b5e0c9182e2&autohomeua=iPhone%0914.3%09autohome%091.7.1%09iPhone&deviceid=64ccbd4b396d2cdae94696aba720bc6493f4de2f&pm=1&svs=1&timestamp=1610499096&v=1.7.1 `
let addCoinbodyVal= `_sign=2E0E9172BAB3251DA8030335A65CE720&_timestamp=1610493482&a=18&autohomeua=iPhone%0914.3%09autohome%091.7.1%09iPhone&deviceid=64ccbd4b396d2cdae94696aba720bc6493f4de2f&moreflag=0&pm=1&source_channel_id=3503&user_id=210642168&v=1.7.1 
_sign=902990F4033AFA24917C543E6C7198FE&_timestamp=1610498655&a=18&autohomeua=iPhone%0914.3%09autohome%091.7.1%09iPhone&deviceid=64ccbd4b396d2cdae94696aba720bc6493f4de2f&moreflag=0&pm=1&source_channel_id=3503&user_id=210862818&v=1.7.1 `
let addCoin2bodyVal= `_sign=1BCBEAF3CDBEB3A0C9F1A626BCE4CE5A&_timestamp=1610491012&a=18&autohomeua=iPhone%0914.3%09autohome%091.7.1%09iPhone&deviceid=64ccbd4b396d2cdae94696aba720bc6493f4de2f&moreflag=1&pm=1&source_channel_id=3503&user_id=210642168&v=1.7.1 
_sign=6AD47268971474884EFC33CD214B2E8D&_timestamp=1610166187&a=18&autohomeua=iPhone%0914.3%09autohome%091.7.1%09iPhone&deviceid=64ccbd4b396d2cdae94696aba720bc6493f4de2f&moreflag=1&pm=1&source_channel_id=3503&user_id=210862818&v=1.7.1 `


let qczjcookie = {
  GetUserInfoheaderVal: GetUserInfoheaderVal,  
  taskbodyVal: taskbodyVal,
  activitybodyVal: activitybodyVal,
  addCoinbodyVal: addCoinbodyVal,
  addCoin2bodyVal: addCoin2bodyVal,    

}

module.exports =  qczjcookie
  


