/**
 * Created by DELL on 2017/12/20.
 */
import * as server from './ajax';

export const titleInfo = function ({commit}, index) {
  commit("TITLEINFO", index)
};
export const getData = function ({commit}, page) {
  server._getAjax(page.url).then((data) => {
      let result = {};
      result.index = page.index;
      result.data = data.data;
      commit("GETDATA", result);
    }
  ).catch((err) => {
      console.log(`错误是：${err}`)
    }
  )
};
export const setData = function ({commit},index) {
  commit("SETDATA",index)
};
