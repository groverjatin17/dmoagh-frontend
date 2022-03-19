// This file contains actions for this project

export const SET_MENU = 'SET_MENU';
export const CURRENT_SUBMENU = 'CURRENT_SUBMENU';

export function setMenu(value) {
    return (dispatch) => {
        dispatch({
            type: SET_MENU,
            payload: value,
        });
    };
}

export function setSubMenu(value) {
    return (dispatch) => {
        dispatch({
            type: CURRENT_SUBMENU,
            payload: value,
        });
    };
}
