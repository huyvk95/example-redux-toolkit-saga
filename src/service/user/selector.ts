import { createSelector } from "reselect";

const selectSelf = (state: StoreState) => state.user;

const selectUserData = createSelector(selectSelf, (state) => state.data);

export const selector = {
  selectUserData,
};
