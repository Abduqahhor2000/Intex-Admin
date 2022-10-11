import reducer, { addUser, removeUser } from "../userReducer"

describe("testing SiteInfo Reducer...", () => {
    const initialState = {
        user: {},
        token: "",
    }

    const newUser = {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VyX2ZpcnN0bmFtZSI6IkFsaSIsInVzZXJfbGFzdG5hbWUiOiJTdXInYXRvdiIsInVzZXJuYW1lIjoidGhlYmVrb2ZmIiwicm9sZV9uYW1lIjoic3VwZXItYWRtaW4ifSwiaWF0IjoxNjY0ODU5NDYzLCJleHAiOjE2NjQ5NDU4NjN9.l_F1AyTMmmZcb_1D8gcH1hrajHrLCEZEQAEleUxOWKE",
        data: {
            "id": 1,
            "user_firstname": "Ali",
            "user_lastname": "Sur'atov",
            "username": "thebekoff",
            "role_name": "super-admin"
        }
    }

    const changedState = { 
        user: {
            "id": 1,
            "user_firstname": "Ali",
            "user_lastname": "Sur'atov",
            "username": "thebekoff",
            "role_name": "super-admin"
        },
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VyX2ZpcnN0bmFtZSI6IkFsaSIsInVzZXJfbGFzdG5hbWUiOiJTdXInYXRvdiIsInVzZXJuYW1lIjoidGhlYmVrb2ZmIiwicm9sZV9uYW1lIjoic3VwZXItYWRtaW4ifSwiaWF0IjoxNjY0ODU5NDYzLCJleHAiOjE2NjQ5NDU4NjN9.l_F1AyTMmmZcb_1D8gcH1hrajHrLCEZEQAEleUxOWKE",
    }

    it("initialState was tested", ()=>{
        expect(reducer(undefined, {type: undefined})).toEqual(initialState)
    })

    it("addUser action was tested", ()=>{
        expect(reducer(initialState, addUser(newUser))).toEqual(changedState)
        expect(reducer(changedState, addUser(newUser))).toEqual(changedState)
    })
    
    it("removeUser action was tested", ()=>{
        expect(reducer(initialState, removeUser())).toEqual(initialState)
        expect(reducer(changedState, removeUser())).toEqual(initialState)
    })
})