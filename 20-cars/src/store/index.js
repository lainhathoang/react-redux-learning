import { configureStore } from "@reduxjs/toolkit";
import {
  changeSearchTerm,
  addCar,
  removeCar,
  carsReducer,
} from "./slices/carsSlice";

import { changeName, changeCost, formReducer } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export {
  store,
  changeSearchTerm,
  addCar,
  removeCar,
  carsReducer,
  changeName,
  changeCost,
  formReducer,
};
