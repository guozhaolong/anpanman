const Mock = require('mockjs')

export async function asset() {
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
    }]
  })
  return new Promise((resolve,reject)=> {
    setTimeout(()=> {
      resolve({list:data.asset,total:500});
    }, 200)
  })
}

export async function kpi() {
  const data = Mock.mock({
    'kpi|100':[{
      'name|1':['iops','kbps','rate'],
      x:'@date',
      y:'@integer(10,20)',
    }],
  })
  return new Promise((resolve,reject)=> {
    setTimeout(()=> {
      resolve({list:data.kpi,total:500});
    }, 200)
  })
}

export async function login(params){
  let user
  if('admin'===params.loginid && '123'===params.password) {
    user = Mock.mock({
      loginid:params.loginid,
      name:'@cname',
      'dept':'数据中心',
      'status':'正常',
      'createtime':'@datetime("yyyy-MM-dd HH:mm:ss")',
      'avatar':'@image("40x40")'
    })
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(user)
        resolve([200, user]);
      else
        reject({ msg: '用户名密码错误'});
    }, 200);
  });
}