import { createSlice } from "@reduxjs/toolkit";

const AllCategoriesSlice = createSlice({
  name: "allCategorie",
  items: [],
  initialState: {
    items: "beauty",
    ItemsElem:[],
    isCategoryVisible: false,
  },
  reducers: {
    watchItems(state, action) {
      const newCategorie = action.payload;
        state.items=newCategorie
    },

  },
});
export const AllCategoriesAction = AllCategoriesSlice.actions;
export default AllCategoriesSlice;
