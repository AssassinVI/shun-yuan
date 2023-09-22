import { combineReducers } from "redux";
import { slideReducer } from "./reducer/slideChange"
import { videoReducer } from "./reducer/videoToggle";
import { teamReducer } from "./reducer/buildingTeam";
import { floorReducer } from "./reducer/floorNav";
import { fifthPageReducer } from "./reducer/equipmentContent";
const createStore = require('redux').createStore;
const reducers = combineReducers({
    slideReducer,
    videoReducer,
    teamReducer,
    floorReducer,
    fifthPageReducer
})

export const store = createStore(reducers)