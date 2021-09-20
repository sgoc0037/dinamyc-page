const SETEDITMODE = "SETEDITMODE";

type initialStateType = {
    tools: { mode: null | string, value: null | string }
}
type actionEditModeType = {
    type: typeof SETEDITMODE
    mode: string
    value: string
}


let initialState = {
    tools: {
        mode: null,
        value: null
    }
};

const toolsReducer = (state = initialState, action: any):initialStateType => {

    switch (action.type) {
        case SETEDITMODE:
            return {
                ...state, tools: { mode: action.mode, value: action.value }
            }
        default:
            return state;
    }
}

export const actionEditMode = (mode:string, value:string):actionEditModeType => {
    return { type: SETEDITMODE, mode, value }
}


export default toolsReducer;