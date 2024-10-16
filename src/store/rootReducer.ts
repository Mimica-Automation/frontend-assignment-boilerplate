import { combineReducers } from '@reduxjs/toolkit';

import { reducer as treeReducer } from '#pages/Tree/slice';

const rootReducer = combineReducers({
  tree: treeReducer,
});

export default rootReducer;
