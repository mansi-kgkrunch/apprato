// import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from '@reduxjs/toolkit'

import menuIdReducer from "../slices/MenuId";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { createStore } from "redux";

export default configureStore(
  {
    reducer: {
      menuId: menuIdReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const reducers = combineReducers({
//   menu: MenuSlice,
//   toast: ToastReducer,
//   adminUser: AdminUserReducer,
//   product: productSlice,
//   user: UserAuthSlice,
// });

// const persistConfig = {
//   key: "root",
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, reducers);
// const store = createStore(
//   persistedReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// const persistor = persistStore(store);
// export { store, persistor };
// export default store;
