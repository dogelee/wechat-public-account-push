/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxef42400b5c076f46',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '30d61b84149159dd67873cf9810b9829',

  PROVINCE: '邵阳',
  CITY: '邵阳县',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'obRq86enMQQaEkPYXlDhElKKPGF4',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'j9fEswjMJMT2aryafnGmJH1IHNJJLwRHqcxLKydZ8-Q',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '2-14',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2003', date: '01-14',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-13' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '	lyKgWq3wHxHo9lLxrbrJuw8bz-4QkRWtvld6bNi93n4',

  CALLBACK_USERS: [
    {
      name: '去见你',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'obRq86enMQQaEkPYXlDhElKKPGF4',
    }
  ],

}

module.exports = USER_CONFIG

