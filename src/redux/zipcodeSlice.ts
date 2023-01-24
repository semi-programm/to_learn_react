import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import * as Apis from "../constants/api";
import { AppDispatch, RootState } from "./store";
import { addressInfo, addressInfoInit } from "../models/zipCodeModel";
import * as CustomAlert from "../pages/common/CustomAlert";

export const initialState: addressInfo = addressInfoInit;

type arg = {
  zipcode: string;
};

type thunkApiConfig = {
  dispatch: AppDispatch;
  state: RootState;
};

const zipCodeAsync = createAsyncThunk<addressInfo, arg, thunkApiConfig>(
  "zip_code/get",
  async (arg, thunkAPI) => {
    const response = await axios.get(Apis.geAddress(), {
      params: arg,
    });
    return response.data;
  }
);

const zipCodeSlice = createSlice({
  name: "zipCode",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(zipCodeAsync.pending, (data, action) => {
        //非同期処理中のロジック
        return;
      })
      .addCase(zipCodeAsync.fulfilled, (data, action) => {
        //非同期処理成功時のロジック
        if (action.payload.status === 200) {
          data = action.payload;
          CustomAlert.getSuccess("zipcode");
          return data;
        }
        CustomAlert.getError("zipcode");
      })
      .addCase(zipCodeAsync.rejected, (data, action) => {
        //   失敗時
        console.log(data);

        CustomAlert.getError("zipcode");
      });
  },
});
// export const { RemoveUnallocatedMatch, AddUnallocatedMatch, sortUnallocatedMatch, sortMatch, moveUnallocatedMatchToMatch, moveToMatchToUnallocatedMatch, changeCourtName, changeTimelineComment } =
//   zipCodeSlice.actions;
export { zipCodeSlice, zipCodeAsync };
