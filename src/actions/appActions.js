export const ADD = 'ADD'
export const DELETE = 'DELETE'
export const EDIT = 'EDIT'


// {
//     type: ADD_RATE, 
//     payload:{
//             author:'Jan Kowalski',
//             rate: 5,
//             comment: 'bdb ksiazka'
//     }
// }

export const addRate = ({ author, comment, rate }) => (
    {
        type: ADD,
        payload: {
            author,
            comment,
            rate,
            id: Math.floor(Math.random() * 1234)
        }
    }
);

export const deleteRate = id => (
    {
        type: DELETE,
        payload: {
            id
        }
    }
);

export const editRate = ({ author, comment, rate, id }) => (
    {
        type: EDIT,
        payload: {
            author,
            comment,
            rate,
            id
        }
    }
);

