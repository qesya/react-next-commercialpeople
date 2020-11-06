import { appSetList, appSetAuthors } from "./action"
import { readRemoteFile } from "react-papaparse"

export const appLoadInitialData = payload => async (dispatch, getState) => {

	const books = "http://localhost:8080/books.csv"
	const magazines = "http://localhost:8080/magazines.csv"
	const authors = "http://localhost:8080/authors.csv"

	const header = true
	const delimiter = ";"
	const sections = [{
		fileTitle: 'books',
		content: books,
		fn: appSetList,
	},
	{
		fileTitle: 'magazines',
		content: magazines,
		fn: appSetList,
	},
	{
		fileTitle: 'authors',
		content: authors,
		fn: appSetAuthors,
	}]

	sections.forEach((section) => {
		readRemoteFile(section.content, {
			header,
			delimiter,
			complete: (result) => {
				const type = section.fileTitle === 'books' ? "book" : "magazine"
				const mappedItems = result.data.map(item => (
					{
						kind: type,
						...item
					}
				)
				)
				dispatch(section.fn(mappedItems))
			},
		})
	})

}