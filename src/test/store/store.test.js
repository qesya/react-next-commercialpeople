import { appLoadInitialData } from "../../stores/app/data_store"


describe('appLoadInitialData test', () => {

    test("appLoadInitialData calls dispatch correctly", (done) => {
        const retFn = appLoadInitialData();
        const mockedDispatch = jest.fn()
        retFn(mockedDispatch, jest.fn())
        setTimeout(() => {
            expect(mockedDispatch.mock.calls.length).toBe(3)
            done()
        }, 5000)
    })
})