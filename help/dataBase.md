# 数据库表结构设计

### 用户表

|字段名称|字段类型|是否主键|是否允许空值|字段说明|
|:------:|:------:|:------:|:------:|:------|
|userid|integer|是|否|用户id(自增)|
|nick_name|varchar(255)|否|否|用户微信名|
|avatar_url|varchar(255)|否|否|用户头像|
|gender|integer|否|否|用户性别(1男,0女)|
|language|varchar(255)|否|否|用户语言|
|city|varchar(255)|否|否|用户城市|
|province|varchar(255)|否|否|用户省份|
|country|varchar(255)|否|否|用户国籍|
|session_key|varchar(255)|否|否|用户session值|
|created_at|varchar(255)|否|否|记录的创建时间|
|updated_at|varchar(255)|否|否|记录的更新时间|
|bookId|integer|外键|否|用户看过的书籍



#### 数据式例
```json
{
  "openId": "oca7s0ExKW3feKFvD3X-5r2S1fqg",
  "nickName": "惜纸",
  "gender": 1,
  "language": "zh_CN",
  "city": "Jinan",
  "province": "Shandong",
  "country": "China",
  "avatarUrl":"https://wx.qlogo.cn/mmopen/vi_32/DQob1F4mibqdg43UwoUXiadjdL392zibT4LFCeTUcjo04vtJz8UHIp7aMzViaSuo3xcdblRSuh2nJxYGYCZeH214cg/132",
  "session_key":"",
  "created_at":"1539870515",
  "updated_at":"1539870533"
}
```

# 书籍列表

