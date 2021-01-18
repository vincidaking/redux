import { createStore } from "redux";

import { rootReducer } from "../reducers/rooReducer";

const store = createStore(rootReducer);

export default store