// 接口请求的域名
const baseURL_DEV = ''; //开发环境
// 正式环境
const baseURL_REL = ''; //线上环境
let _baseURL = baseURL_REL;

export default function request(url, params) {
  return new Promise((resolve, reject) => {
    uni.request({
      data: params,
      url: _baseURL + url,
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
      },
      success(res) {
        resolve(res.data)
      },
      fail: err => {
        uni.showToast({
          icon: "error",
          title: "网络请求失败",
          duration: 800
        })
        reject(err)
      }
    })
  })
}