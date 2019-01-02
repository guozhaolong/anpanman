import createModel from './index'
import {asset} from '../services/simulator';

export default createModel('asset', {

  state: {},

  subscriptions: {
    async setup({dispatch}) {

    },
  },
  effects: {
    * fetch({payload}, {select, call, put}) {
      const q = yield select((state) => {
        const {pageSize, currentPage, query, orderBy} = state
        return {
          pageSize,
          currentPage,
          query,
          orderBy,
        }
      });
      const data = yield call(asset, q);
      if (data) yield put({ type: 'setValue', payload: { items: data.list, total: data.total } })
    },
  },
  reducers: {
    findOne(state, action) {

    },
  },

})
