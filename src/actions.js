import * as actionTypes from './action-types';

const compute = (computer) => () => ({
  type: actionTypes.compute,
  payload: {
    computer
  }
});

export const add = compute((a, b) => a + b);
export const subtract = compute((a, b) => a - b);

export const number = (number) => ({
  type: actionTypes.number,
  payload: {
    number
  }
});

export const resolve = () => ({
  type: actionTypes.resolve
});