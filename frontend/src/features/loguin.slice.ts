import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ILoginState {
  loginState: string;
  userID: string;
}

const initialState: ILoginState = {
  loginState: '',
  userID: '',
};

export const loguinSlice = createSlice({
  name: 'loguin',
  initialState,
  reducers: {
    updateSesion: (state, action: PayloadAction<string>) => {
      state.loginState = action.payload;
    },

    storeUserID: (state, action: PayloadAction<string>) => {
      state.userID = action.payload;
    },
  },
});

export const { updateSesion, storeUserID } = loguinSlice.actions;

export default loguinSlice.reducer;
