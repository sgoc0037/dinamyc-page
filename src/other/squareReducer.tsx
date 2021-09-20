const SETSQUARE = "SETSQUARE";
const GETSQUARE = "GETSQUARE";
const REMOVESQUARE = "REMOVESQUARE";

type initialStateType = {
    square: Array<object>
}
type squareObjectType = {
    name: null | string
    value: null | object
}
type actionSquareType = {
    type: typeof SETSQUARE
    obj: null | object
}
type getSquareType = {
    type: typeof GETSQUARE
    name: string
}
type actionRemoveType = {
    type: typeof REMOVESQUARE
    id: number
}



let initialState = {
    square: []
};

const squareReducer = (state = initialState, action: any): initialStateType => {

    const desiredIndex = state.square.findIndex((item: squareObjectType) => item.name === action.id);

    switch (action.type) {
        case SETSQUARE:
            return {
                ...state, square: state.square.map((item: squareObjectType) => {
                    if (!item?.value) {
                        return { ...item, value: action.obj }
                    }
                    return item;
                })
            }
        case GETSQUARE:
            return {
                ...state, square: [...state.square, { name: action.name }]
            }
        case REMOVESQUARE:
            return {
                ...state, square: [...state.square.slice(0, desiredIndex), ...state.square.slice(desiredIndex + 1)]
            }
        default:
            return state;
    }
}

export const actionSquare = (obj: object): actionSquareType => {
    return { type: SETSQUARE, obj }
}
export const getSquare = (name: string): getSquareType => {
    return { type: GETSQUARE, name }
}
export const actionRemove = (id: number): actionRemoveType => {
    return { type: REMOVESQUARE, id }
}

export default squareReducer;