const initialState = {
    mail: '',
    pass: '',
    isAuthorized: false
};

const localStorageUser = localStorage.getItem('session');
const Session = (localStorageUser) ? JSON.parse(localStorageUser) : initialState;


export default function userAccount(state = Session, action) {
    switch (action.type) {
        case 'MAIL_CHANGE':
            return {
                ...state,
                mail: action.params
            };
        case 'PASS_CHANGE':
            return {
                ...state,
                pass: action.params
            };
        case 'LOG_IN':
            const newstate = {
                ...state,
                isAuthorized: true
            }
            localStorage.setItem('session', JSON.stringify(newstate));
            return newstate;
        case 'LOG_OUT':
            localStorage.clear();
            return initialState;
        default: return state;
    }
}