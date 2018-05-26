import { compute, number, resolve } from './action-types';

const initialState = {
  a: '',
  b: '',
  computer: null,
  output: '0',
};

function reducer(state = initialState, { type, payload }) {
  const result = { ...state };
  switch (type) {
    case resolve:
      result.a = String(result.computer(Number(result.a), Number(result.b)));
      result.b = null;
      result.computer = null;
      result.output = result.a;
      return result;
    case compute:
      if (!result.computer) {
        result.computer = payload.computer;
      }
      else {
        result.a = String(result.computer(Number(result.a), Number(result.b)));
        result.b = '';
        result.computer = payload.computer;
        result.output = result.a;
      }
      return result;
    case number:
      if (result.computer) {
        result.b += payload.number;
        result.output = result.b;
      }
      else {
        result.a += payload.number;
        result.output = result.a;
      }
      return result;
    default:
      return state;
  }
}

export default reducer;