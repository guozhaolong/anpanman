import createModel from './index'
import {asset} from '../services/simulator'
import Expo, {SQLite} from 'expo'

const db = SQLite.openDatabase('db.db');

export default createModel('asset', {

  state: {
    data:[]
  },

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
      })
      const data = yield call(asset, q)
      db.transaction(tx => {
        tx.executeSql(
          'create table if not exists items (id integer primary key not null, done int, value text);'
        )
      })
      db.transaction(tx => {
        tx.executeSql('insert into items (done, value) values (0, ?)', ['test'])
        tx.executeSql('select * from items', [], (_, {rows}) => {
        })
      })
      if (data) yield put({type: 'setValue', payload: {items: data.list, total: data.total}})
    },
  },
  reducers: {
    findOne(state, action) {

    },
  },

})
