const initialState = [
    {
        id: 1, boardId: 1, name: 'In Progress', input: 'none'
    },
    {
        id: 2, boardId: 1, name: 'Queue', input: 'none'
    }
];

const localStorageList = localStorage.getItem('lists');
const Session = (localStorageList) ? JSON.parse(localStorageList) : initialState;

export default function boardLists(state = Session, action) {
    switch (action.type) {
        case 'SHOW_INPUT':
            return state.map((val, index) => {
                if (val.id === action.params.id) {
                    val.input = '';
                    return val;
                } else return val;
            });
        case 'HIDE_INPUT':
            return state.map((val, index) => {
                if (val.id === action.params.id) {
                    val.input = 'none';
                    return val;
                } else return val;
            });
        case 'ADD_LIST':
        const newstate = [
            ...state,
            {
                id: Number(Date.now().toString()),
                boardId: action.params.boardId,
                name: action.params.name,
                input: 'none'
            }
        ];
        localStorage.setItem('lists', JSON.stringify(newstate));
        return newstate;
        default:
            return state;
    }
};