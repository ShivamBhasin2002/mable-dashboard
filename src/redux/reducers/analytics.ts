import { createSlice } from '@reduxjs/toolkit';
import { filterOptionInitialState } from 'utility/constants/initialStates';

export const Analytics = createSlice({
    name: 'Analytics',
    initialState: filterOptionInitialState,
    reducers: {
      setColumnSelected: (state, { payload }) => {
        switch(payload){
            case 'AddPaymentInfo':
              state.AddPaymentInfo=!state.AddPaymentInfo;
              break;
            case 'AddToCart':
              if(state.AddToCart){
                state.AddToCart=false;
              }else{
                state.AddToCart=true;
              }
              break;
            case 'InitiateCheckout':
              if(state.InitiateCheckout){
                state.InitiateCheckout=false;
              }else{
                state.InitiateCheckout=true;
              }
              break;
            case 'PageView':
              if(state.PageView){
                state.PageView=false;
              }else{
                state.PageView=true;
              }
              break;
            case 'Purchase':
              if(state.Purchase){
                state.Purchase=false;
              }else{
                state.Purchase=true;
              }
              break;
        }
      }
    }
  });

export const { setColumnSelected } = Analytics.actions;
export default Analytics.reducer;