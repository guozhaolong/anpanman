import createModel from './index'
import userAPI from '../services/user'

export default createModel('user', {

  state: {},

  subscriptions: {
    async setup({ dispatch }) {

    },
  },
  effects: {
    * login({ payload }, { select, call, put }) {

    },
  },
  reducers: {
    findOne(state, action) {

    },
  },

})
