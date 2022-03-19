import { SET_MENU, CURRENT_SUBMENU } from '../actions/Homepage.actions';


const initialState = {
  menu: [],
  submenu: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_MENU:
      return {
        ...state,
        menu: action.payload,
      };
    case CURRENT_SUBMENU:
      return {
        ...state,
        submenu: action.payload,
      };
    default:
      return state;
  }
}
