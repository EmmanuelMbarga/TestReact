import { configureStore } from "@reduxjs/toolkit";
import pannierCartSlice from "./pannier-cart";
import AllCategoriesSlice from "./categories";

const store = configureStore({
  reducer: {
    pannierAchat:pannierCartSlice.reducer, //nb:la propriete reducer nous permet de dire que notre reducer est pret a etre utilisé
    btnAllCategorie:AllCategoriesSlice.reducer
  },
});

export default store