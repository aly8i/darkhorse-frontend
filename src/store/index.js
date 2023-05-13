import { configureStore } from '@reduxjs/toolkit';
import { homeApi } from '../redux/HomeAPI';
import { socketApi } from '../redux/WebSocket';
import selectedReducer from '../redux/Selected';
import ThemeReducer from '../redux/Theme';
import { blogsAPI } from '../redux/BlogsAPI';
import { searchAPI } from '../redux/SearchAPI';
import { companyAPI } from '../redux/CompanyAPI';

const store = configureStore({
  reducer: {
    selected: selectedReducer,
    theme: ThemeReducer,
    [homeApi.reducerPath]: homeApi.reducer,
    [blogsAPI.reducerPath]: blogsAPI.reducer,
    [companyAPI.reducerPath]: companyAPI.reducer,
    [socketApi.reducerPath]: socketApi.reducer,
    [searchAPI.reducerPath]: searchAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(homeApi.middleware, socketApi.middleware, blogsAPI.middleware, searchAPI.middleware, companyAPI.middleware),
});

export default store;
