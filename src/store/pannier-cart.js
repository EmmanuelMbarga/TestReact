import { createSlice } from "@reduxjs/toolkit";

const pannierCartSlice = createSlice({
  name: "pannierSlice", //nom de notre reducer
  initialState: {
    //initialState va nous permettre de visualiser ce qui se trouve dans notre premier reducer
    items: [], //sommes des elements qui se trouvent dans notre reducer
    isCartVisible: false, //propriete qui va nous permettre d'ouvrir et de montrer les elements qui se trouvent dans notre reducer(pannier) nb:cette propriete peut avoir n'importe quel nom
  },
  reducers: {
    toggleCartVisible(state) {
      //cette fonction va nous permettre d'effectuer l'ouverture et la fermeture de notre pannier
      state.isCartVisible = !state.isCartVisible;
    },
    addItemToCart(state, action) {
      //la fonction addItemsCart permet d'ajouter un element dans le panier
      const newProduct = action.payload;
      // console.log(newProduct);
      const existingProductItem = state.items.find(
        //cette const nous permet de voir depuis le state le items
        (items) => items.id === newProduct.id //ici notre tableau aura seulement les id des nouveaux produit
      );

      if (!existingProductItem) {
        //ici on verifie si un produit n'existe pas.dans la mesure ou il n'existe pas, on ajoute dans notre state les items
        state.items.push({
          id: newProduct.id,
          title: newProduct.title,
          price: newProduct.price,
          quantity: 1,
          image: newProduct.thumbnail,
        });
      } else {
        existingProductItem.quantity++; //ici on verifie si un produit existe .dans la mesure ou il existe , on ajoute juste la quantité en faisant une incrementation
      }
    },
    removeItemToCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    incrementQuantity(state, action) {
      const ProductIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      state.items[ProductIndex].quantity++;
    },
    decrementQuandity(state, action) {
      const ProductIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (state.items[ProductIndex].quantity > 1) {
        state.items[ProductIndex].quantity--;
      } else {
        const confirmDelete = confirm(
          "vous allez retirer ce produit de votre panier"
        );
        if (confirmDelete) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        }
      }
    },
  },
});
export const pannierCartActions = pannierCartSlice.actions; //on exporte ce ci ou on souhaite l'utiliser

export default pannierCartSlice;
