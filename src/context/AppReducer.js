export default (state, action) => {
    switch(action.type) {
        case "del-Transaction":
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id  !== action.payload)
            }

        case "add-Transaction":
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    };
}