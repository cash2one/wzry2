import axios from "axios"
export const _getAjax=function(url){
  return axios({
    method: "get",
    url: url,
  }).then(function (res) {
    if (res.status === 200) {
      return res.data
    }
    return Promise.reject(new Error);
  })


};
