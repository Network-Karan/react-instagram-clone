export const initialState = {
    user: JSON.parse(localStorage.getItem("user")),
};

const reducer = (state, action) => {
    console.log(action);


    switch (Selection.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,

            };
        default:
            return state;
    }
};

export default reducer;