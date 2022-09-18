import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showHome: true,
  showCampaign: false,
  showSignUp: false,
  showFreebie: false
}

export const routingSlice = createSlice({
  name: 'routing',
  initialState,
  reducers: {
    beHome: (state) => {
      state.showHome = true;
      state.showCampaign = false;
      state.showSignUp = false;
      state.showFreebie = false
    },
    routeToCampaign: (state) => {
      state.showCampaign = true;
      state.showHome = false;
      state.showSignUp = false;
      state.showFreebie = false
    },
    routeToSignUp: (state) => {
      state.showHome = false;
      state.showCampaign = false;
      state.showSignUp = true;
      state.showFreebie = false
    },
    routeToFreebie: (state) => {
      state.showHome = false;
      state.showCampaign = false;
      state.showSignUp = false;
      state.showFreebie = true
    },
  },
})

// Action creators are generated for each case reducer function
export const { routeToCampaign, routeToSignUp, routeToFreebie } = routingSlice.actions

export default routingSlice.reducer