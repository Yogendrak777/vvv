import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';
import { replace } from 'react-router-redux';
import { delay } from 'redux-saga';
import {
  FETCH_FLIPKART_SCRAPPING_STATUS_DRA,
  FETCH_FLIPKART_SCRAPPING_STATUS_SA,
  FETCH_FLIPKART_SCRAPPING_STATUS_DONE,
  FLIPKARTSCRAPPING_API,
  DISABLE_REFRESH_BUTTON,
} from '../constants';
import { BTOAST_SHOW } from '../../../../Btoast/constants';
import { pushHeaders } from '../../../../../CmnHeaders';
import log from '../../../../../loggerConfig';
import { getRedirectionURL, getErrorMsg } from '../helper';

function* fetchFlipkartScrappingStatusWorker(action) {
  try {
    const { source } = action.data;
    const URL = `${source}/flipkartscraping`;
    const httpArgs = [FLIPKARTSCRAPPING_API + URL, pushHeaders()];
    log({ req: httpArgs });
    const { data: respData } = yield call(axios.get, ...httpArgs);
    if (respData.code === '200') {
      yield put({ type: FETCH_FLIPKART_SCRAPPING_STATUS_SA });
      const userStatus = respData.model.status;
      // Based on the User Offer Status, we redirect them
      const isLoginSuccessful = ['data_processing', 'login_successful'].includes(userStatus);
      if (isLoginSuccessful) {
        yield delay(30000);
        yield put({
          type: DISABLE_REFRESH_BUTTON,
        });
      } else {
        // If there is error, we show toast message and then redirect user to the next page.
        if (['login_failed', 'scrapping_unsuccessful'].includes(userStatus)) {
          const getErrMsg = getErrorMsg(userStatus);
          yield put({ type: BTOAST_SHOW, msg: JSON.stringify(getErrMsg) });
          yield delay(3000);
        }
        // Because it's an common folder, we have to pass from where the offer is trigerred from and what is the userStatus.
        const redirection = getRedirectionURL(source, userStatus);
        yield put(replace(redirection));
      }
    } else {
      yield put({ type: BTOAST_SHOW, msg: JSON.stringify(respData.msg) });
    }
  } catch (e) {
    log({ error: e });
  } finally {
    yield put({ type: FETCH_FLIPKART_SCRAPPING_STATUS_DONE });
  }
}

export default function* fetchFlipkartScrappingStatusWatcher() {
  yield takeLatest(FETCH_FLIPKART_SCRAPPING_STATUS_DRA, fetchFlipkartScrappingStatusWorker);
}