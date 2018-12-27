const Mock = require('mockjs')

module.exports = function () {
  const data = Mock.mock({
    'asset|10': [{
      'id|+1': 1,
      'title|1': ['钻机@integer(1,99)',''],
      'assetnum': 'ZJ@integer(100,999)@string(upper,2)',
      'model': '@string(upper,2)-@integer(1,9)@string(upper,1)',
      'amount': '@integer',
      'unit': '@cword(1)',
      'manufacturer': '@cword(5)',
      'serial': '@string(upper,4)@integer(2)@string(upper,2)',
      'createdate': '@date',
      'rfid': '@word(10)',
      'cover': '@image(200x100,@color)',
      'status|1': [1,2,3]
    }],
    'user|3': [{
      'id|+1': 1,
      username: '@cword(8,20)',
      password: '@cword(50)',
      avatar: '@image(200x100,@color,@cword(2))',
    }],
  })
  return data
}
