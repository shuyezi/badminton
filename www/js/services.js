angular.module('badminton.services', [])

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
        time: "每周日上午10点",
        area: "浦东浦东",
        members: 150,
        cover: "img/activity.jpg",
        intro: "这是一个羽毛球群这是一个羽是一个羽毛球群这是一个羽是一个羽毛球群这是一个羽是一个羽毛球群这是一个羽毛球群这是一个羽毛球群这是一个羽毛球群这是一个羽毛球群这是一个羽毛球群这是一个羽毛球群这是一个羽毛球群这是一个羽毛球群"
      },
      {
        id: 2,
        name: "复旦俱乐部",
        time: "每周六全天",
        area: "徐汇徐汇",
        cover: "img/activity.jpg",
        members: 250,
        intro: "这也是一个羽毛球群"
      },
      {
        id: 3,
        name: "傻逼俱乐部",
        time: "整个礼拜",
        area: "徐汇徐汇",
        cover: "img/activity.jpg",
        members: 50,
        intro: "这也是一个羽毛球群"
      },
      {
        id: 4,
        name: "傻逼俱乐部",
        time: "整个礼拜aaaaaaaaaaaaaaaaaaaa",
        area: "徐汇徐汇",
        cover: "img/activity.jpg",
        members: 50,
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
      time: "每周日上午10点",
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
      isOwner: false,//是否该俱乐部的管理员
      isMember: false,//是否已经加入了俱乐部(即成为俱乐部成员)，isOwner为true是该值为null
      name: "复旦俱乐部",
      area: "徐汇徐汇",
      time: "每周六全天",
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
    },
    c3: {
      id: 3,
      isOwner: false,//是否该俱乐部的管理员
      isMember: true,//是否已经加入了俱乐部(即成为俱乐部成员)，isOwner为true是该值为null
      isApplied: true,
      permission: 1, //1已报名，未审核；2已报名，通过审核；3已报名，未通过审核
      name: "复旦俱乐部",
      area: "徐汇徐汇",
      time: "每周六全天",
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
    },
    c4: {
      id: 4,
      isOwner: true,//是否该俱乐部的管理员
      isMember: true,//是否已经加入了俱乐部(即成为俱乐部成员)，isOwner为true是该值为null
      isApplied: true,
      permission: 2, //1已报名，未审核；2已报名，通过审核；3已报名，未通过审核
      name: "复旦俱乐部",
      area: "徐汇徐汇",
      time: "每周六全天",
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
    },
    c5: {
      id: 5,
      isOwner: false,//是否该俱乐部的管理员
      isMember: true,//是否已经加入了俱乐部(即成为俱乐部成员)，isOwner为true是该值为null
      isApplied: true,
      permission: 2, //1已报名，未审核；2已报名，通过审核；3已报名，未通过审核
      name: "复旦俱乐部",
      area: "徐汇徐汇",
      time: "每周六全天",
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
        joinersLimit: 20,
        joinersCnt: 7,
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
        joinersLimit: 20,
        joinersCnt: 5,
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
        joinersLimit: 20,
        joinersCnt: 0,
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
        joinersLimit: 20,
        joinersCnt: 0,
        time: "每周日上午10:00~12:00"
      },
      {
        id: 5,
        showdetail: false,
        desc: "羽毛球是一种气质的",
        cover: "img/activity.jpg",
        area: "浦东南路上南路250号",
        joinersLimit: 20,
        joinersCnt: 0,
        time: "每周日上午10:00~12:00"
      }
    ]
  };

  return data;
})

.factory('ActivityDetail', function(){
  var data;
  data = {
      a1: {
        name: "羽毛器羽毛球",
        id: 1,
        isApplied: true,  //是否已报名
        permission: 1, //1已报名，未审核；2已报名，通过审核；3已报名，未通过审核
        showdetail: false,
        desc: "羽毛球是一种气质的",
        area: "浦东南路上南路250号",
        time: "每周日上午10:00~12:00",
        fee: 35,
        cover: "img/activity.jpg",
        extra: "这里是备注的信息，这里是备注的信息，这里是备注的信息，这里是备注的信息这里是备注的信息这里是备注的信息这里是备注的信息这里是备注的信息",
        joinersLimit: 20,
        joinersCnt: 7,
        joiners: [
          {
            id: 1,
            name: "小小",
            cover: "img/homecover.jpg"
          },
          {
            id: 2,
            name: "小金小金小金小金小金",
            cover: "img/homecover.jpg"
          },
          {
            id: 3,
            name: "小小3",
            cover: "img/homecover.jpg"
          },
          {
            id: 4,
            name: "小小4",
            cover: "img/homecover.jpg"
          },
          {
            id: 5,
            name: "小小5",
            cover: "img/homecover.jpg"
          },
          {
            id: 6,
            name: "小小6",
            cover: "img/homecover.jpg"
          },
          {
            id: 7,
            name: "小小7",
            cover: "img/homecover.jpg"
          }
        ]
      },
      a2: {
        name: "羽毛器羽毛球2",
        id: 2,
        isApplied: false,  //是否已报名
        permission: 0, //0未报名；1已报名，未审核；2已报名，通过审核；3已报名，未通过审核
        showdetail: false,
        desc: "羽毛球是一种气质的",
        cover: "img/activity.jpg",
        area: "浦东南路上南路250号",
        time: "每周日上午10:00~12:00",
        fee: 315,
        joinersLimit: 20,
        joinersCnt: 5,
        joiners: [
          {
            id: 1,
            name: "树叶子",
            cover: "img/homecover.jpg"
          },
          {
            id: 2,
            name: "树叶子",
            cover: "img/homecover.jpg"
          },
          {
            id: 3,
            name: "树叶子",
            cover: "img/homecover.jpg"
          },
          {
            id: 4,
            name: "树叶子",
            cover: "img/homecover.jpg"
          },
          {
            id: 5,
            name: "树叶子",
            cover: "img/homecover.jpg"
          }
        ]
      },
      a3: {
        name: "羽毛器羽毛球3",
        id: 3,
        isApplied: true,  //是否已报名
        permission: 2, //1已报名，未审核；2已报名，通过审核；3已报名，未通过审核
        showdetail: false,
        desc: "羽毛球是一种气质的",
        cover: "img/activity.jpg",
        area: "浦东南路上南路250号",
        time: "每周日上午10:00~12:00",
        fee: 45,
        joinersLimit: 20,
        joinersCnt: 0
      },
      a4: {
        name: "羽毛器羽毛球4",
        id: 4,
        isApplied: true,  //是否已报名
        permission: 3, //1已报名，未审核；2已报名，通过审核；3已报名，未通过审核
        showdetail: false,
        desc: "羽毛球是一种气质的",
        cover: "img/activity.jpg",
        area: "浦东南路上南路250号",
        time: "每周日上午10:00~12:00",
        fee: 25,
        joinersLimit: 20,
        joinersCnt: 0
      },
      a5: {
        name: "羽毛器羽毛球5",
        id: 5,
        showdetail: false,
        desc: "羽毛球是一种气质的",
        cover: "img/activity.jpg",
        area: "浦东南路上南路250号",
        time: "每周日上午10:00~12:00",
        fee: 15,
        joinersLimit: 20,
        joinersCnt: 0
      }
  };

  return data;
})

.factory('AccountActivity', function(){
  var data;

  var data1 = {
    pageName: "即将开始",
    type: 1,
    list: [
      {
        id: 1,
        isPrivate: true,
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
        isPrivate: false,
        isCanceled: false,
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

  var data2 = {
    pageName: "已结束",
    type: 2,
    list: [
      {
        id: 1,
        isPrivate: true,
        isOver: true,
        desc: "羽毛球是一种气质的222",
        area: "浦东南路上南路250号",
        time: "每周日上午10:00~12:00",
        counter: "18/20",
        fee: "35元/人",
        cover: "img/activity.jpg",
        extra: "这里是备注的信息，这里是备注的信息，这里是备注的信息，这里是备注的信息这里是备注的信息这里是备注的信息这里是备注的信息这里是备注的信息"
      },
      {
        id: 1,
        isPrivate: false,
        isOver: true,
        desc: "羽毛球是一种气质的222",
        area: "浦东南路上南路250号",
        time: "每周日上午10:00~12:00",
        counter: "18/20",
        fee: "35元/人",
        cover: "img/activity.jpg",
        extra: "这里是备注的信息，这里是备注的信息，这里是备注的信息，这里是备注的信息这里是备注的信息这里是备注的信息这里是备注的信息这里是备注的信息"
      }
    ]
  }

  return {
    data1: data1,
    data2: data2
  };
})

.factory('AccountClub', function(){
  var data = {
    name: "俱乐部列表",
    list: [
      {
        id: 1,
        isPrivate: 1,
        name: "源深俱乐部",
        time: "每周日上午10点",
        area: "浦东浦东",
        members: 150,
        cover: "img/activity.jpg",
        intro: "这是一个羽毛球群这是一个羽是一个羽毛球群这是一个羽是一个羽毛球群这是一个羽是一个羽毛球群这是一个羽毛球群这是一个羽毛球群这是一个羽毛球群这是一个羽毛球群这是一个羽毛球群这是一个羽毛球群这是一个羽毛球群这是一个羽毛球群"
      },
      {
        id: 2,
        isPrivate: 1,
        name: "复旦俱乐部",
        time: "每周六全天",
        area: "徐汇徐汇",
        cover: "img/activity.jpg",
        members: 250,
        intro: "这也是一个羽毛球群"
      },
      {
        id: 3,
        isPrivate: 1,
        name: "傻逼俱乐部",
        time: "整个礼拜",
        area: "徐汇徐汇",
        cover: "img/activity.jpg",
        members: 50,
        intro: "这也是一个羽毛球群"
      }
    ]
  };

  return data;
});