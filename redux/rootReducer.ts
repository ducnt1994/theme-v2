import { combineReducers } from "@reduxjs/toolkit";
import layoutSlice from "@/features/layout/layoutSlice";
// import merchantSlice from "@/features/merchant/merchantSlice";
import { layoutApi } from "@/features/layout/layoutApi";

const rootReducer = combineReducers({
  layout: layoutSlice,
  // merchant: merchantSlice,
  [layoutApi.reducerPath]: layoutApi.reducer,
});

export default rootReducer;