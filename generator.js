import { call, put, take } from 'redux-saga/effects'

export default function* myTestGenerator () {
  while(true) {
      const action = yield take('*')
      console.log('action --> ', action)

    try {
      const products = yield call(Promise.resolve, '/products')
      yield put({ type: 'PRODUCTS_RECEIVED', products })
    }
    catch(error) {
      yield put({ type: 'PRODUCTS_REQUEST_FAILED', error })
    }
  }
}
