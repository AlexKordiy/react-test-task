const initialState = {
    entries: [
        {
            id: 1, listId: 1, name: 'Card1',
            comments: [{ author: 'alexander.kordiy@outlook.com', text: 'Test message' }]
        },
        {
            id: 2, listId: 1, name: 'Card2',
            comments: [{ author: 'alexander.kordiy@outlook.com', text: 'Test message' }]
        }
    ],
    Dialog: {
        open: false,
        cardId: 0
    }
};

const localStorageCards = localStorage.getItem('cards');
const Session = (localStorageCards) ? JSON.parse(localStorageCards) : initialState;

export default function (state = Session, action) {
    switch (action.type) {
        case 'ADD_CARD':
            state = {
                ...state,
                entries: [
                    ...state.entries,
                    {
                        id: Number(Date.now().toString()),
                        listId: action.params.listId,
                        name: action.params.name,
                        comments: []
                    }]
            };
            localStorage.setItem('cards', JSON.stringify(state));
            return state;
        case 'REMOVE_CARD':
            const card = state.entries.find(x => x.id === Number(action.params));
            const index = state.entries.indexOf(card);
            state.entries.splice(index, 1);
            state = {
                ...state,
                Dialog: {
                    open: false,
                    cardId: 0
                }
            };
            localStorage.setItem('cards', JSON.stringify(state));
            return state;
        case 'ADD_COMMENT':
            const entry = state.entries.find(x => x.id === Number(action.params.id));
            const ind = state.entries.indexOf(entry);
            state.entries[ind].comments.push({
                author: action.params.author, text: action.params.text
            });
            localStorage.setItem('cards', JSON.stringify(state));
            return {
                ...state
            };
        case 'SHOW_MODAL':
        state = {
            ...state,
            Dialog: {
                open: true,
                cardId: action.params
            }
        };    
        localStorage.setItem('cards', JSON.stringify(state));
        return state;
        case 'CLOSE_MODAL':
        state = {
            ...state,
            Dialog: {
                open: false,
                cardId: action.params
            }
        };    
        localStorage.setItem('cards', JSON.stringify(state));
        return state;
        default:
            return state;
    }
}