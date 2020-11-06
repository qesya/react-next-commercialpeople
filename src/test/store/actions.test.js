import { appAddList } from "../../stores/app/action"


describe('appAddList test', () => {

    test("appAddList calls dispatch correctly", async () => {
        const data = { data: "data" }
        const result = appAddList()
        expect(typeof result === "function")
    })

    test("appAddList calls dispatch correctly", async () => {
        const data = { data: "data" }
        const mockFn = jest.fn();
        const getStateMockFn = () => ({ app: {} })
        const resultFn = appAddList(data)
        await resultFn(mockFn, getStateMockFn)
        expect(mockFn.mock.calls.length).toBe(1)
    })
})