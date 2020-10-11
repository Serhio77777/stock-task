import sub from 'date-fns/sub';
import uuidV4 from 'uuid/v4';

import * as types from '../actions/stock/actionTypes';

const initialState = {
  text: '',
  statement: [
    {
      id: uuidV4(),
      describtion: 'wadnwan waldjalwjd aw dliawjd',
      amount: 342,
      dateObtaining: new Date()
    },
    {
      id: uuidV4(),
      describtion: 'wadnwan waldjalwjd aw dliawjd',
      amount: 222,
      dateObtaining: new Date()
    },
    {
      id: uuidV4(),
      describtion: 'wadnwan waldjalwjd aw dliawjd',
      amount: 111,
      dateObtaining: new Date()
    },
    {
      id: uuidV4(),
      describtion: 'wadnwan waldjalwjd aw dliawjd',
      amount: 333,
      dateObtaining: new Date()
    }
  ],
  stocklist: [
    {
      stockId: uuidV4(),
      stockOwner: 'Someone 4',
      stockName: 'Someone 4',
      list: [{
        uniqueCode: uuidV4(),
        type: 'veal',
        amount: 245.65,
        timeIn: sub(new Date(2017, 5, 15, 15, 29, 20), {
          years: 2,
          months: 9,
          weeks: 1,
          days: 7,
          hours: 5,
          minutes: 9,
          seconds: 30
        }).toISOString(),
        timeOut: sub(new Date(2020, 5, 15, 15, 29, 20), {
          years: 2,
          months: 9,
          weeks: 1,
          days: 7,
          hours: 5,
          minutes: 9,
          seconds: 30
        }).toISOString(),
        ownerName: 'Tom Odell'
      },
      {
        uniqueCode: uuidV4(),
        type: 'chiken',
        amount: 245.65,
        timeIn: sub(new Date(2018, 5, 15, 15, 29, 20), {
          weeks: 1,
          days: 7,
          hours: 5,
          minutes: 9,
          seconds: 30
        }).toISOString(),
        timeOut: sub(new Date(2019, 5, 15, 15, 29, 20), {
          months: 9,
        }).toISOString(),
        ownerName: 'Alex Clare'
      },
      {
        uniqueCode: uuidV4(),
        type: 'beef',
        amount: 14.05,
        timeIn: sub(new Date(2021, 5, 15, 15, 29, 20), {
          years: 1,
          months: 9,
          weeks: 1,
          days: 7,
          hours: 5,
        }).toISOString(),
        timeOut: sub(new Date(2025, 5, 15, 15, 29, 20), {
          months: 9,
          weeks: 1,
        }).toISOString(),
        ownerName: 'Jimmy Sax'
      },
      {
        uniqueCode: uuidV4(),
        type: 'veal',
        amount: 111,
        timeIn: sub(new Date(2019, 5, 15, 15, 29, 20), {
          months: 9,
        }).toISOString(),
        timeOut: sub(new Date(2022, 5, 15, 15, 29, 20), {
          years: 2,
        }).toISOString(),
        ownerName: 'Phil Collins'
      }]
    },
    {
      stockId: uuidV4(),
      stockOwner: 'Someone 3',
      stockName: 'Someone 3',
      list: [{
        uniqueCode: uuidV4(),
        type: 'veal',
        amount: 245.65,
        timeIn: sub(new Date(2017, 5, 15, 15, 29, 20), {
          years: 2,
          months: 9,
          weeks: 1,
          days: 7,
          hours: 5,
          minutes: 9,
          seconds: 30
        }).toISOString(),
        timeOut: sub(new Date(2020, 5, 15, 15, 29, 20), {
          years: 2,
          months: 9,
          weeks: 1,
          days: 7,
          hours: 5,
          minutes: 9,
          seconds: 30
        }).toISOString(),
        ownerName: 'Tom Odell'
      },
      {
        uniqueCode: uuidV4(),
        type: 'chiken',
        amount: 245.65,
        timeIn: sub(new Date(2018, 5, 15, 15, 29, 20), {
          weeks: 1,
          days: 7,
          hours: 5,
          minutes: 9,
          seconds: 30
        }).toISOString(),
        timeOut: sub(new Date(2019, 5, 15, 15, 29, 20), {
          months: 9,
        }).toISOString(),
        ownerName: 'Alex Clare'
      },
      {
        uniqueCode: uuidV4(),
        type: 'beef',
        amount: 14.05,
        timeIn: sub(new Date(2021, 5, 15, 15, 29, 20), {
          years: 1,
          months: 9,
          weeks: 1,
          days: 7,
          hours: 5,
        }).toISOString(),
        timeOut: sub(new Date(2025, 5, 15, 15, 29, 20), {
          months: 9,
          weeks: 1,
        }).toISOString(),
        ownerName: 'Jimmy Sax'
      },
      {
        uniqueCode: uuidV4(),
        type: 'veal',
        amount: 111,
        timeIn: sub(new Date(2019, 5, 15, 15, 29, 20), {
          months: 9,
        }).toISOString(),
        timeOut: sub(new Date(2022, 5, 15, 15, 29, 20), {
          years: 2,
        }).toISOString(),
        ownerName: 'Phil Collins'
      }]
    },
    {
      stockId: uuidV4(),
      stockOwner: 'Someone 2',
      stockName: 'Someone 2',
      list: [{
        uniqueCode: uuidV4(),
        type: 'veal',
        amount: 245.65,
        timeIn: sub(new Date(2017, 5, 15, 15, 29, 20), {
          years: 2,
          months: 9,
          weeks: 1,
          days: 7,
          hours: 5,
          minutes: 9,
          seconds: 30
        }).toISOString(),
        timeOut: sub(new Date(2020, 5, 15, 15, 29, 20), {
          years: 2,
          months: 9,
          weeks: 1,
          days: 7,
          hours: 5,
          minutes: 9,
          seconds: 30
        }).toISOString(),
        ownerName: 'Tom Odell'
      },
      {
        uniqueCode: uuidV4(),
        type: 'chiken',
        amount: 245.65,
        timeIn: sub(new Date(2018, 5, 15, 15, 29, 20), {
          weeks: 1,
          days: 7,
          hours: 5,
          minutes: 9,
          seconds: 30
        }).toISOString(),
        timeOut: sub(new Date(2019, 5, 15, 15, 29, 20), {
          months: 9,
        }).toISOString(),
        ownerName: 'Alex Clare'
      },
      {
        uniqueCode: uuidV4(),
        type: 'beef',
        amount: 14.05,
        timeIn: sub(new Date(2021, 5, 15, 15, 29, 20), {
          years: 1,
          months: 9,
          weeks: 1,
          days: 7,
          hours: 5,
        }).toISOString(),
        timeOut: sub(new Date(2025, 5, 15, 15, 29, 20), {
          months: 9,
          weeks: 1,
        }).toISOString(),
        ownerName: 'Jimmy Sax'
      },
      {
        uniqueCode: uuidV4(),
        type: 'veal',
        amount: 111,
        timeIn: sub(new Date(2019, 5, 15, 15, 29, 20), {
          months: 9,
        }).toISOString(),
        timeOut: sub(new Date(2022, 5, 15, 15, 29, 20), {
          years: 2,
        }).toISOString(),
        ownerName: 'Phil Collins'
      }]
    },
    {
      stockId: uuidV4(),
      stockOwner: 'Someone 1',
      stockName: 'Someone 1',
      list: [{
        uniqueCode: uuidV4(),
        type: 'veal',
        amount: 245.65,
        timeIn: sub(new Date(2017, 5, 15, 15, 29, 20), {
          years: 2,
          months: 9,
          weeks: 1,
          days: 7,
          hours: 5,
          minutes: 9,
          seconds: 30
        }).toISOString(),
        timeOut: sub(new Date(2020, 5, 15, 15, 29, 20), {
          years: 2,
          months: 9,
          weeks: 1,
          days: 7,
          hours: 5,
          minutes: 9,
          seconds: 30
        }).toISOString(),
        ownerName: 'Tom Odell'
      },
      {
        uniqueCode: uuidV4(),
        type: 'chiken',
        amount: 245.65,
        timeIn: sub(new Date(2018, 5, 15, 15, 29, 20), {
          weeks: 1,
          days: 7,
          hours: 5,
          minutes: 9,
          seconds: 30
        }).toISOString(),
        timeOut: sub(new Date(2019, 5, 15, 15, 29, 20), {
          months: 9,
        }).toISOString(),
        ownerName: 'Alex Clare'
      },
      {
        uniqueCode: uuidV4(),
        type: 'beef',
        amount: 14.05,
        timeIn: sub(new Date(2021, 5, 15, 15, 29, 20), {
          years: 1,
          months: 9,
          weeks: 1,
          days: 7,
          hours: 5,
        }).toISOString(),
        timeOut: sub(new Date(2025, 5, 15, 15, 29, 20), {
          months: 9,
          weeks: 1,
        }).toISOString(),
        ownerName: 'Jimmy Sax'
      },
      {
        uniqueCode: uuidV4(),
        type: 'veal',
        amount: 111,
        timeIn: sub(new Date(2019, 5, 15, 15, 29, 20), {
          months: 9,
        }).toISOString(),
        timeOut: sub(new Date(2022, 5, 15, 15, 29, 20), {
          years: 2,
        }).toISOString(),
        ownerName: 'Phil Collins'
      }]
    },
  ],
  found: true,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.ADD_STOCK: {
      const stock = {};
      stock.stockId = uuidV4();
      stock.stockOwner = action.stock.owner;
      stock.stockName = action.stock.name;
      stock.list = [];
      const currentList = state.stocklist;
      return Object.assign({}, state, { stocklist: [...currentList, stock] });
    }
    case types.ADD_STOCK_ITEM: {
      const stocklist = state.stocklist;
      stocklist[action.stock.index].list.push({
        uniqueCode: uuidV4(),
        type: action.stock.type,
        amount: action.stock.amount,
        timeIn: new Date().toISOString(),
        timeOut: action.stock.timeOut,
        ownerName: action.stock.owner
      })
      return Object.assign({}, state, { stocklist: [...stocklist] });
    }
    case types.CHANGE_INPUT_TEXT: {
      return Object.assign({}, state, { text: action.text });
    }
    case types.REMOVE_STOCK: {
      const newStocklist = state.stocklist.filter((stock, index) => index !== action.index);
      return Object.assign({}, state, { stocklist: newStocklist });
    }
    case types.CHANGE_STOCK_ITEM: {
      const newStocklist = state.stocklist;
      newStocklist[action.stock.indexStock].list[action.stock.indexItem].amount = action.stock.amount;
      newStocklist[action.stock.indexStock].list[action.stock.indexItem].type = action.stock.type;
      newStocklist[action.stock.indexStock].list[action.stock.indexItem].ownerName = action.stock.owner;
      newStocklist[action.stock.indexStock].list[action.stock.indexItem].timeOut = action.stock.timeOut;
      return Object.assign({}, state, { stocklist: [...newStocklist] });
    }
    case types.REMOVE_STOCK_ITEM: {
      const newStocklist = state.stocklist;
      newStocklist[action.index.indexStock].list = state.stocklist[action.index.indexStock].list.filter((stock, index) => index !== action.index.indexStockItem)
      return Object.assign({}, state, { stocklist: [...newStocklist] });
    }
    case types.STOCK_FOUND: {
      return Object.assign({}, state, { found: action.found });
    }
    default:
      break;
  }
  return state;
};
