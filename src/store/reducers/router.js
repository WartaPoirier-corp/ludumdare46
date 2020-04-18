import { GOTO } from '../actions/router';

function reducer(page = 'menu', action) {
    switch (action.type) {
        case GOTO: return action.page;
        default: return page;
    }
}

export default reducer;
