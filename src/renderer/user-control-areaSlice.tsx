import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  areaCurrent: [],
};

// eslint-disable-next-line import/prefer-default-export
export const AreaSlice = createSlice({
  name: 'area',
  initialState,
  reducers: {
    AreaUpdate: (state, action) => {
      const Newstate = [...state.areaCurrent, action.payload];
      /* state.areaCurrent = Newstate; */
      console.log(Newstate);
    },
  },
});

export const { AreaUpdate } = AreaSlice.actions;

export default AreaSlice.reducer;
