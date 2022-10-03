const reducer = (state , action) => {
    switch (action.type) {
        case 'plus_10':
            return {...state, count_1: state.count_1 + 10};
        case 'minus_3':
            return {...state, count_1: state.count_1 - 3};
        case 'RESET_1':
            return {...state, count_1: action.payload};

        case 'plus_2':
            return {...state, count_2: state.count_2 + 2};
        case 'minus_2':
            return {...state, count_2: state.count_2 - 2};
        case 'RESET_2':
            return {...state, count_2: action.payload};

        case 'plus_1':
            return {...state, count_3: state.count_3 + 1};
        case 'minus_1':
            return {...state, count_3: state.count_3 - 1};
        case 'RESET_3':
            return {...state, count_3: action.payload};

        default:
            return state
    }
}
export default reducer;










