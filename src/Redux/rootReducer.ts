import NavbarSlice from "./Slices/navbarSlice";
import utilitySlice from "./Slices/unitlitySlice";

import { baseApi } from "./api/baseApi";

const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,

  utilitySlice: utilitySlice,
};

export default rootReducer;
