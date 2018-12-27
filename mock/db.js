const Mock = require('mockjs')

module.exports = function () {
  const data = Mock.mock({
    'asset|10': [{
      'id|+1': 1,
      title: '@cword(8,20)',
      desc: '@cword(50)',
      images: '@image(200x100,@color,@word(2,6))',
    }],
    'user|3': [{
      'id|+1': 1,
      username: '@cword(8,20)',
      password: '@cword(50)',
      avatar: '@image(200x100,@color,@word(2,6))',
    }],
  })
  return data
}
