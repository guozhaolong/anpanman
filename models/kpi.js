import createModel from './index'
import {kpi} from "../services/simulator";
export default createModel('kpi', {

  state: {},

  subscriptions: {
    async setup({ dispatch }) {

    },
  },
  effects: {
    * fetch({ payload }, { select, call, put }) {
      const q = yield select((state) => {
        const { pageSize, currentPage, query, orderBy } = state
        return {
          pageSize,
          currentPage,
          query,
          orderBy,
        }
      })
      const data = yield call(kpi,q)
      if (data) yield put({ type: 'setValue', payload: { items: data.list, total: 500 } })
    },
  },
  reducers: {
    findOne(state, action) {

    },
  },

})
