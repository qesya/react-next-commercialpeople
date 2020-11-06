import { jsonToCSV } from "react-papaparse"

const book = [
    { name: "title", label: "Book Title", placeholder: "Enter Title" },
    { name: "isbn", label: "Book ISBN", placeholder: "Enter ISBN" },
    { name: "authors", label: "Book Author", placeholder: "Enter Author" },
    { name: "description", label: "Book Description", placeholder: "Enter Description" },
]

const magazine = [
    { name: "title", label: "Magazine Title", placeholder: "Enter Title" },
    { name: "isbn", label: "Magazine ISBN", placeholder: "Enter ISBN" },
    { name: "authors", label: "Magazine Author", placeholder: "Enter Author" },
    { name: "publishedAt", label: "Published Date", type: "date" },
]

const kindForm = { book, magazine }

export const exportToCSV = function (newList, kind) {
    const columns = kindForm[kind].map(data => data.name)
    const listFilter = newList.filter(data => data.kind === kind)
    const CSVList = jsonToCSV(listFilter, { header: true, delimiter: ";", columns })
    const link = window.document.createElement("a");
    link.setAttribute("href", "data:text/csv;charset=utf-8,%EF%BB%BF" + encodeURI(CSVList));
    link.setAttribute("download", `${kind}s_data.csv`);
    link.click();
}

export const handleSubmitSaveExport = (dispatch, kind, form, fn) => {
    const makeArrayOfKey = kindForm[kind].map(data => data.name)
    const formKeyArray = ['title', 'isbn', 'authors', 'description', 'publishedAt']
    const formFilter = formKeyArray.filter(name => makeArrayOfKey.indexOf(name) !== -1)
        .reduce((obj, key) => {
            let modifiedValue = false;
            if (/\d{4}\-\d{2}-\d{2}/.test(form[key])) {
                let splittedValue = form[key].split("-")
                modifiedValue = `${splittedValue[2]}.${splittedValue[1]}.${splittedValue[0]}`
            }
            obj[key] = modifiedValue || form[key] || ""
            return obj
        }, {})
    dispatch(fn({ kind, ...formFilter })).then((result) => exportToCSV(result, kind))
}