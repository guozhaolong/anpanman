import createModel from './index'
import { find } from '../services/asset'

export default createModel('asset', {

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
      const asset = yield call(find, q)
      if (asset) yield put({ type: 'setValue', payload: { items: asset.list, total: asset.total } })
    },
  },
  reducers: {
    findOne(state, action) {

    },
  },

})
