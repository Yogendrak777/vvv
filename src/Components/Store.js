import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { FLIPKART_FORM_SUBMIT_DRA, FLIPKART_FORM_SUBMIT_DONE, FLIPKART_FORM_SUBMIT_SA, FLIPKARTSCRAPPING_API } from '../constants';
import { BTOAST_SHOW } from '../../../../Btoast/constants';
import { pushHeaders } from '../../../../../CmnHeaders';
import log from '../../../../../loggerConfig';
import { EDFlipkartStatus } from '../../../../../urls';

function* submitFlipkartFormWorker(action) {
  try {
    const { flipkartId, flipkartPass, source } = action.datapack;
    const postData = {
      user_id: flipkartId,
      password: flipkartPass,
    };
    const URL = `${source}/flipkartscraping`;
    const httpArgs = [FLIPKARTSCRAPPING_API + URL, postData, pushHeaders()];
    log({ req: httpArgs });
    const { data: respData } = yield call(axios.post, ...httpArgs);
    if (respData.code === '200') {
      yield put({ type: FLIPKART_FORM_SUBMIT_SA });
      yield put(push(`${EDFlipkartStatus}?source=${source}`));
    } else {
      yield put({ type: BTOAST_SHOW, msg: JSON.stringify(respData.msg) });
    }
  } catch (e) {
    log({ error: e });
  } finally {
    yield put({ type: FLIPKART_FORM_SUBMIT_DONE });
  }
}

export default function* submitFlipkartFormWatcher() {
  yield takeLatest(FLIPKART_FORM_SUBMIT_DRA, submitFlipkartFormWorker);
}