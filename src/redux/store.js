import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favorive/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {adsReducer} from './camper/slice'; 

// Конфигурация persist для сохранения состояния избранных элементов
const favoritePersistConfig = {
  key: 'favorites',  // Ключ для сохранения в localStorage
  storage,           // Используем localStorage
  whitelist: ['favorites'], // Указываем, что будем сохранять состояние favorites
};

// Оборачиваем редьюсер persistReducer для интеграции с redux-persist
const persistedFavoritesReducer = persistReducer(favoritePersistConfig, favoritesReducer);

// Настраиваем хранилище Redux
export const store = configureStore({
  reducer: {
    favorites: persistedFavoritesReducer, 
    ads: adsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Игнорируем проверки сериализуемости для redux-persist действий
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Создаем persistor для управления сохранением состояния
export const persistor = persistStore(store);
