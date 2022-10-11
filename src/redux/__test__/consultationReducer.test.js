import reducer, { addAllConsultations, updateConsultation, delAllConsultations, delOneConsultation } from "../consultationReducer"

describe("testing Consultation Reducer...", () => {
    const initialState = {
        consultations: [],
    }

    const oneConsul = {
        "consultation_id": 471,
        "name": "DIlshod",
        "phone_number": "+998 11 111 11 11",
        "time_consultation": "2022-10-01T11:38:39.107Z",
        "status": false,
    }

    const newConsul = 
    { 
        "consultation_id": 471,
        "name": "Bekzod",
        "phone_number": "+998 11 111 11 11",
        "time_consultation": "2022-10-01T11:38:39.107Z",
        "status": true,  
    }

    const responsAPI = [  
        {
            "consultation_id": 471,
            "name": "DIlshod",
            "phone_number": "+998 11 111 11 11",
            "time_consultation": "2022-10-01T11:38:39.107Z",
            "status": false
        },
        {
            "consultation_id": 472,
            "name": "DIlshod",
            "phone_number": "+998 11 111 11 11",
            "time_consultation": "2022-10-01T11:38:39.143Z",
            "status": false
        },
        {
            "consultation_id": 473,
            "name": "DIlshod",
            "phone_number": "+998 11 111 11 11",
            "time_consultation": "2022-10-01T11:38:39.185Z",
            "status": false
        }
    ] 

    const changedState = {consultations: [ oneConsul ]}


    it("initialState was tested", ()=>{
        expect(reducer(undefined, {type: undefined})).toEqual(initialState)
    })

    it("addAllConsultations action was tested", ()=>{
        expect(reducer(initialState, addAllConsultations(responsAPI))).toEqual({consultations: responsAPI})
        expect(reducer(changedState, addAllConsultations(responsAPI))).toEqual({consultations: responsAPI})
    })
    
    it("updateConsultation action was tested", ()=>{
        expect(reducer(initialState, updateConsultation(newConsul))).toEqual({consultations: []})
        expect(reducer(changedState, updateConsultation(newConsul))).toEqual({consultations: [newConsul]})
    })

    it("delOneConsultation action was tested", ()=>{
        expect(reducer(initialState, delOneConsultation(newConsul))).toEqual({consultations: []})
        expect(reducer(changedState, delOneConsultation(newConsul))).toEqual({consultations: []})
    })

    it("delAllConsultations action was tested", ()=>{
        expect(reducer(initialState, delAllConsultations())).toEqual({consultations: []})
        expect(reducer(changedState, delAllConsultations())).toEqual({consultations: []})
    })
})