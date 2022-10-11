import reducer, { addAllCategories, addOneCategory, updateCategory, delAllCategories, delOneCategory } from "../categoryReducer"

describe("testing Category Reducer...", () => {
    const initialState = {
        categories: []
    }
    const oneCategory = 
    { 
        "category_id": 2,
        "name_ru": "Каркасный бассейн",
        "name_uz": "Ramkali basseynlar"  
    }
    const newCategory = 
    { 
        "category_id": 2,
        "name_ru": "Eta karkasniy bassayn",
        "name_uz": "Ramkali basseynlarmuuu?"  
    }

    const responsAPI = [ 
        { 
            "category_id": 2,
            "name_ru": "Каркасный бассейн",
            "name_uz": "Ramkali basseynlar"  
        },
        {
            "category_id": 3,
            "name_ru": "Надувной бассейн",
            "name_uz": "Shishiriladigan bass"
        },
        {
            "category_id": 4,
            "name_ru": "Аксессуары",
            "name_uz": "Aksesuarlar"
        }
    ]

    const changedState = {categories: [ oneCategory ]}


    it("initialState was tested", ()=>{
        expect(reducer(undefined, {type: undefined})).toEqual(initialState)
    })

    it("addAllCategories action was tested", ()=>{
        expect(reducer(initialState, addAllCategories(responsAPI))).toEqual({categories: responsAPI})
        expect(reducer(changedState, addAllCategories(responsAPI))).toEqual({categories: responsAPI})
    })

    it("addOneCategory action was tested", ()=>{
        expect(reducer(initialState, addOneCategory(oneCategory))).toEqual({categories: [oneCategory]})
        expect(reducer(changedState, addOneCategory(oneCategory))).toEqual({categories: [oneCategory, ...changedState.categories]})
    })
    
    it("updateCategory action was tested", ()=>{
        expect(reducer(initialState, updateCategory(newCategory))).toEqual({categories: []})
        expect(reducer(changedState, updateCategory(newCategory))).toEqual({categories: [newCategory]})
    })

    it("delOneCategory action was tested", ()=>{
        expect(reducer(initialState, delOneCategory(newCategory))).toEqual({categories: []})
        expect(reducer(changedState, delOneCategory(newCategory))).toEqual({categories: []})
    })

    it("delAllCategories action was tested", ()=>{
        expect(reducer(initialState, delAllCategories())).toEqual({categories: []})
        expect(reducer(changedState, delAllCategories())).toEqual({categories: []})
    })
})