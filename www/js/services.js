angular.module('badminton.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Home', function() {
  var data;

  data = {
    name: "首页",
    cover: {
      src: "img/homecover.jpg",
      width: window.innerWidth,
      height: window.innerHeight
    },
    enters: [
      {
        name: "俱乐部列表",
        text: "俱乐部",
        href: "/club",
        cover: ""
      },
      {
        name: "活动列表",
        text: "活动",
        href: "/activity",
        cover: ""
      }
    ]
  };

  return data;
})

.factory('Clubs', function(){
  var data;

  data = {
    name: "俱乐部列表",
    list: [
      {
        id: 1,
        name: "源深俱乐部",
        area: "浦东浦东",
        members: 150,
        cover: "img/activity.jpg",
        intro: "这是一个羽毛球群这是一个羽是一个羽毛球群这是一个羽是一个羽毛球群这是一个羽是一个羽毛球群这是一个羽毛球群这是一个羽毛球群这是一个羽毛球群这是一个羽毛球群这是一个羽毛球群这是一个羽毛球群这是一个羽毛球群这是一个羽毛球群"
      },
      {
        id: 2,
        name: "复旦俱乐部",
        area: "徐汇徐汇",
        members: 250,
        intro: "这也是一个羽毛球群"
      }
    ]
  };

  return data;
})

.factory('ClubDetail', function(){
  var data;
  data = {
    c1: {
      id: 1,
      isOwner: false,//是否该俱乐部的管理员
      isMember: true,//是否已经加入了俱乐部(即成为俱乐部成员)
      name: "源深俱乐部",
      area: "大浦东",
      members: 250,
      intro: "这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群",
      activity: [
        {
          id: 1,
          isApplied: true,  //是否已报名
          permission: 1, //1已报名，未审核；2已报名，通过审核；3已报名，未通过审核
          showdetail: false,
          desc: "羽毛球是一种气质的",
          area: "浦东南路上南路250号",
          time: "每周日上午10:00~12:00",
          counter: "18/20",
          fee: "35元/人",
          cover: "img/activity.jpg",
          extra: "这里是备注的信息，这里是备注的信息，这里是备注的信息，这里是备注的信息这里是备注的信息这里是备注的信息这里是备注的信息这里是备注的信息"
        },
        {
          id: 2,
          isApplied: true,  //是否已报名
          permission: 2, //1已报名，未审核；2已报名，通过审核；3已报名，未通过审核
          showdetail: false,
          desc: "羽毛球是一种气质的",
          cover: "img/activity.jpg",
          area: "浦东南路上南路250号",
          time: "每周日上午10:00~12:00"
        },
        {
          id: 3,
          isApplied: false,  //是否已报名
          permission: 0, //1已报名，未审核；2已报名，通过审核；3已报名，未通过审核
          showdetail: false,
          desc: "羽毛球是一种气质的",
          cover: "img/activity.jpg",
          area: "浦东南路上南路250号",
          time: "每周日上午10:00~12:00"
        },
        {
          id: 4,
          isApplied: true,  //是否已报名
          permission: 3, //1已报名，未审核；2已报名，通过审核；3已报名，未通过审核
          showdetail: false,
          desc: "羽毛球是一种气质的",
          cover: "img/activity.jpg",
          area: "浦东南路上南路250号",
          time: "每周日上午10:00~12:00"
        },
        {
          id: 5,
          showdetail: false,
          desc: "羽毛球是一种气质的",
          cover: "img/activity.jpg",
          area: "浦东南路上南路250号",
          time: "每周日上午10:00~12:00"
        }
      ]
    },
    c2: {
      id: 2,
      isOwner: true,//是否该俱乐部的管理员
      isMember: null,//是否已经加入了俱乐部(即成为俱乐部成员)，isOwner为true是该值为null
      name: "复旦俱乐部",
      area: "徐汇徐汇",
      members: 150,
      intro: "这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群这也是一个羽毛球群",
      activity: [
        {
          id: 1,
          showdetail: false,
          desc: "羽毛球是一种气质的",
          area: "浦东南路上南路250号",
          time: "每周日上午10:00~12:00",
          counter: "18/20",
          fee: "35元/人",
          cover: "img/activity.jpg",
          extra: "这里是备注的信息，这里是备注的信息，这里是备注的信息，这里是备注的信息这里是备注的信息这里是备注的信息这里是备注的信息这里是备注的信息"
        },
        {
          id: 2,
          showdetail: false,
          desc: "羽毛球是一种气质的",
          cover: "img/activity.jpg",
          area: "浦东南路上南路250号",
          time: "每周日上午10:00~12:00"
        },
        {
          id: 3,
          showdetail: false,
          desc: "羽毛球是一种气质的",
          cover: "img/activity.jpg",
          area: "浦东南路上南路250号",
          time: "每周日上午10:00~12:00"
        },
        {
          id: 4,
          showdetail: false,
          desc: "羽毛球是一种气质的",
          cover: "img/activity.jpg",
          area: "浦东南路上南路250号",
          time: "每周日上午10:00~12:00"
        },
        {
          id: 5,
          showdetail: false,
          desc: "羽毛球是一种气质的",
          cover: "img/activity.jpg",
          area: "浦东南路上南路250号",
          time: "每周日上午10:00~12:00"
        }
      ]
    }
  };
  return data;
})

.factory('Activity', function(){
  var data;

  data = {
    pageName: "活动列表",
    list: [
      {
        id: 1,
        isApplied: true,  //是否已报名
        permission: 1, //1已报名，未审核；2已报名，通过审核；3已报名，未通过审核
        showdetail: false,
        desc: "羽毛球是一种气质的",
        area: "浦东南路上南路250号",
        time: "每周日上午10:00~12:00",
        counter: "18/20",
        fee: "35元/人",
        cover: "img/activity.jpg",
        extra: "这里是备注的信息，这里是备注的信息，这里是备注的信息，这里是备注的信息这里是备注的信息这里是备注的信息这里是备注的信息这里是备注的信息"
      },
      {
        id: 2,
        isApplied: false,  //是否已报名
        permission: 0, //0未报名；1已报名，未审核；2已报名，通过审核；3已报名，未通过审核
        showdetail: false,
        desc: "羽毛球是一种气质的",
        cover: "img/activity.jpg",
        area: "浦东南路上南路250号",
        time: "每周日上午10:00~12:00"
      },
      {
        id: 3,
        isApplied: true,  //是否已报名
        permission: 2, //1已报名，未审核；2已报名，通过审核；3已报名，未通过审核
        showdetail: false,
        desc: "羽毛球是一种气质的",
        cover: "img/activity.jpg",
        area: "浦东南路上南路250号",
        time: "每周日上午10:00~12:00"
      },
      {
        id: 4,
        isApplied: true,  //是否已报名
        permission: 3, //1已报名，未审核；2已报名，通过审核；3已报名，未通过审核
        showdetail: false,
        desc: "羽毛球是一种气质的",
        cover: "img/activity.jpg",
        area: "浦东南路上南路250号",
        time: "每周日上午10:00~12:00"
      },
      {
        id: 5,
        showdetail: false,
        desc: "羽毛球是一种气质的",
        cover: "img/activity.jpg",
        area: "浦东南路上南路250号",
        time: "每周日上午10:00~12:00"
      }
    ]
  };

  return data;
})

.factory('AccountActivity', function(){
  var data;

  data = {
    pageName: "即将开始",
    type: 1,
    list: [
      {
        id: 1,
        desc: "羽毛球是一种气质的",
        area: "浦东南路上南路250号",
        time: "每周日上午10:00~12:00",
        counter: "18/20",
        fee: "35元/人",
        cover: "img/activity.jpg",
        extra: "这里是备注的信息，这里是备注的信息，这里是备注的信息，这里是备注的信息这里是备注的信息这里是备注的信息这里是备注的信息这里是备注的信息"
      }
    ]
  };

  return data;
});