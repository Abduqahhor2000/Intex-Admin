import reducer, { addError, removeError } from "../errorReducer"

describe("testing SiteInfo Reducer...", () => {
    const initialState = {
        error: {},
    }

    const newError = {
        type: "Yong'in",
        errMsg: "Voydod, yonyabdi!"
    }

    const changedState = { 
        error: {
            type: "Yong'in",
            errMsg: "Voydod, yonyabdi!"
        }
    }

    it("initialState was tested", ()=>{
        expect(reducer(undefined, {type: undefined})).toEqual(initialState)
    })

    it("addError action was tested", ()=>{
        expect(reducer(initialState, addError(newError))).toEqual({error: newError})
        expect(reducer(changedState, addError(newError))).toEqual({error: newError})
    })
    
    it("removeError action was tested", ()=>{
        expect(reducer(initialState, removeError())).toEqual({error: {}})
        expect(reducer(changedState, removeError())).toEqual({error: {}})
    })
})