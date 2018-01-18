import { combineReducers } from 'redux';

import user from './user';
import boards from './board';
import drawer from './drawer';
import lists from './list';
import cards from './card';

export default combineReducers({
    user,
    boards,
    drawer,
    lists,
    cards
}); 