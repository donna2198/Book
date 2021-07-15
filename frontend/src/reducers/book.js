export default (book=[],action)=>{
    switch(action.type ){

        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...book,action.payload];
        case 'UPDATE':
                return book.map((b) => (b._id === action.payload._id ? action.payload : b));
        case 'DELETE':
                return book.filter((b) => b._id !== action.payload);
        default:
            return book;

    }
}