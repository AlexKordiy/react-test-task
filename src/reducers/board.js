
const initialState = {
    entries: [
        { id: 1, name: 'Project1', owner: 'alexander.kordiy@outlook.com' },
        { id: 2, name: 'Project2', owner: 'alexander.kordiy@outlook.com' },
        { id: 3, name: 'Project3', owner: '' },
        { id: 4, name: 'Project4', owner: '' },
        { id: 5, name: 'Project5', owner: '' },
        { id: 6, name: 'Project6', owner: '' },
        { id: 7, name: 'Project7', owner: '' },
        { id: 8, name: 'Project8', owner: '' },
        { id: 9, name: 'Project9', owner: '' },
        { id: 10, name: 'Project10', owner: '' }
    ],
    crDialog: {
        open: false
    }
};
const localStorageBoard = localStorage.getItem('boards');
const Session = (localStorageBoard) ? JSON.parse(localStorageBoard) : initialState;



export default function appBoards(state = Session, action) {
    switch (action.type) {
        case 'ADD_BOARD':
            state = {
                ...state,
                entries: [
                    ...state.entries,
                    {
                        id: Number(Date.now().toString()),
                        name: action.params.name,
                        owner: action.params.owner
                    }
                ],
                crDialog: { open: false }
            };
            localStorage.setItem('boards', JSON.stringify(state));
            return state;
        case 'DELETE_BOARD':
            const board = state.entries.find(x => x.id === Number(action.params.id) && x.owner === action.params.user);
            const index = state.entries.indexOf(board);
            if (index >= 0)
                state.entries.splice(index, 1);
            localStorage.setItem('boards', JSON.stringify(state));
            return { ...state };
        case 'SHOW_DIALOG':
            return {
                ...state,
                crDialog: { open: !state.crDialog.open }
            };
        default:
            return state;
    }
}

/*
const card = state.entries.find(x => x.id === Number(action.params));
            const index = state.entries.indexOf(card);
            state.entries.splice(index, 1);
*/