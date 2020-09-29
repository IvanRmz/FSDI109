import ItemService from "../../service/itemService";

const cartProductsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const prodCode = action.payload.product.id;
      // check if there is another product with same code on cart
      let cart = [...state];
      let found = false;
      cart.forEach((prod) => {
        if (prod.product.id === prodCode) {
            prod.quantity += action.payload.quantity;
            found = true;
        }
      });

      if(!found) {
          cart.push(action.payload);
      }
      // update cart on the server

      let service = new ItemService();
      service.saveCart("Ivan", cart);

      return cart;
    
    case "REMOVE_PRODUCT":
      return [...state].filter(pc => pc.product.id !== action.payload);


    default:
      return state;

      
      
  }
};

export default cartProductsReducer;
