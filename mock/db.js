const Mock = require('mockjs')

module.exports = function () {
  const data = Mock.mock({
    'asset|10': [{
      'id|+1': 1,
      'title|1': ['钻机@integer(1,99)'],
      'assetnum': 'ZJ@integer(100,999)@string(upper,2)',
      'model': '@string(upper,2)-@integer(1,9)@string(upper,1)',
      'amount': '@integer(10,999)',
      'unit': '@cword(1)',
      'manufacturer': '@cword(5)',
      'serial': '@string(upper,4)@integer(10,99)@string(upper,2)',
      'createdate': '@date',
      'rfid': '@string(upper,10)',
      'cover': '@image(200x100,@color)',
      'status|1': [1,2,3]
    }],
    'user|3': [{
      'id|+1': 1,
      username: '@cword(8,20)',
      password: '@cword(50)',
      avatar: '@image(200x100,@color,@cword(2))',
    }],
    'kpi|90':[{
      'name|1':['命中率','吞吐率','成功率'],
      x:'@date(yyyy-MM-dd)',
      y:'@integer(10,999)',
    }],
    'login':{
      username: '@cword(8,20)',
      password: '@cword(50)',
      avatar: '@image(200x100,@color,@cword(2))',
    }
  })
  return data
}
