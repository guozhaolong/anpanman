export default function createModel(name, obj) {
  const { state, effects, subscriptions, reducers } = obj
  return {
    namespace: `${name}`,
    state: Object.assign({
      items: [],
      item: {},
      currentPage: 1,
      pageSize: 10,
      total: null,
      query: {},
      loading: false,
      modalVisible: false,
      modalType: 'create',
    }, state),
    subscriptions: Object.assign({},
      subscriptions),
    effects: Object.assign({
      * fetch({ payload }, { select, call, put }) {
        const q = yield select((state) => {
          const { pageSize, currentPage, query, orderBy } = state[name]
          return {
            pageSize,
            currentPage,
            query,
            orderBy,
          }
        })
        yield put({ type: `${name}/list`, payload: q })
      },
    }, effects),
    reducers: Object.assign({
      setValue(state, action) {
        return { ...state, ...action.payload }
      },
      setItemValue(state, action) {
        return {
          ...state,
          item: {
            ...state.item,
            ...action.payload,
          },
        }
      },
    }, reducers),
  }
}
