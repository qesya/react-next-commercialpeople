import { exportToCSV, handleSubmitSaveExport } from "../../services/export"


describe('Data Export Tests', () => {

    test("Export to CSV can be called correctly", () => {
        expect(() => exportToCSV(["test"], "book")).not.toThrow()
    })

    test("HandleSubmitSaveExport can be called", () => {
        const form = { title: "Test Book", isbn: "1234-1234-1234", authors: "Sample Author", publishedAt: '2020-10-10' }
        expect(() => handleSubmitSaveExport(() => Promise.resolve(), "book", form, jest.fn())).not.toThrow()
    })
})