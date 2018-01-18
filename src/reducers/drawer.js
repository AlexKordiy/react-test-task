
const initialState = {
    open: false
};

export default function appDrawer(state = initialState, action) {
    switch (action.type) {
        case 'DRAWER_TOGGLE':
            return {
                ...state,
               open: !state.open
            }
        default:
            return state;
    }
}