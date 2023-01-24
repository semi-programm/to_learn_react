import { configureStore } from "@reduxjs/toolkit";
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { zipCodeSlice } from "./zipcodeSlice";

export const store = configureStore({
  reducer: {
    zipCodeReducer: zipCodeSlice.reducer,
  },
});

// useDispatchを呼ぶときに型定義しないとエラーになるのでここで型をexport
export type AppDispatch = typeof store.dispatch;
// 複数のreducerをまとめた場合に、最終的なStateの型を取り出す
export type RootState = ReturnType<typeof store.getState>;
// 型情報付きのuseSelectorをここで宣言。
// Reactコード側では、react-reduxのuseSelector()を直接使うのではなく、下記の自作のuseSelectorを使うと型チェックがuseSelectorのコールバックの中でも効くようになる
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
