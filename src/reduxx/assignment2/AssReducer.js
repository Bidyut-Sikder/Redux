import { ADD, DELETE } from "./actionTypes";




const initialState = {
    passenger: [
        { id: 1, from: 'dhaka', to: 'sylhet', date: '2332', guests: '3', class: 'business' },
        { id: 2, from: 'dhaka', to: 'sylhet', date: '22', guests: '3', class: 'business' },
        // { id: 3, from: 'dhaka', to: 'sylh33et', date: '242', guests: '34', class: 'business' },

    ]
}



const assReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD:
            state.passenger.push({ ...action.payload })

        case DELETE:
            const id = action.payload

            const filteredPassenger = state.passenger.filter((passenger) => passenger.id !== id)
            return {
                passenger: filteredPassenger
            }
        default:

            return state;
    }

}








export default assReducer;





