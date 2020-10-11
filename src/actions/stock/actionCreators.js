
import {
  CHANGE_INPUT_TEXT,
  CHANGE_STOCK_ITEM,
  ADD_STOCK,
  ADD_STOCK_ITEM,
  REMOVE_STOCK,
  REMOVE_STOCK_ITEM,
  STOCK_FOUND
} from './actionTypes';

export const changeInputText = text => ({
  type: CHANGE_INPUT_TEXT,
  text,
});

export const changeStockItem = stock => ({
  type: CHANGE_STOCK_ITEM,
  stock,
});

export const addStock = stock => ({
  type: ADD_STOCK,
  stock,
});

export const addStockItem = stock => ({
  type: ADD_STOCK_ITEM,
  stock,
});

export const removeStock = index => ({
  type: REMOVE_STOCK,
  index,
});

export const removeStockItem = index => ({
  type: REMOVE_STOCK_ITEM,
  index,
});

export const stockFound = found => ({
  type: STOCK_FOUND,
  found,
});
