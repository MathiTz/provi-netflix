import { toast } from "react-toastify";

/**
 * Function to trim long text
 * @param str string to be truncated
 * @param n number of characters to be cutted on the string
 * @returns string
 */

import { endPoints } from "../service/endpoints";

function truncate(str: string, n: number) {
	return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

const rowsNetflix = [
	{
		id: 1,
		title: "Netflix Originals",
		fetchUrl: endPoints.fetchNetflixOriginals,
		isLargeRow: true,
	},
	{
		id: 2,
		title: "Trending Now",
		fetchUrl: endPoints.fetchTrending,
		isLargeRow: false,
	},
	{
		id: 3,
		title: "Top Rated",
		fetchUrl: endPoints.fetchTopRated,
		isLargeRow: false,
	},
	{
		id: 4,
		title: "Action Movies",
		fetchUrl: endPoints.fetchActionMovies,
		isLargeRow: false,
	},
	{
		id: 5,
		title: "Comedy Movies",
		fetchUrl: endPoints.fetchComedyMovies,
		isLargeRow: false,
	},
	{
		id: 6,
		title: "Horror Movies",
		fetchUrl: endPoints.fetchHorrorMovies,
		isLargeRow: false,
	},
	{
		id: 7,
		title: "Romance Movies",
		fetchUrl: endPoints.fetchRomanceMovies,
		isLargeRow: false,
	},
	{
		id: 8,
		title: "Documentaries",
		fetchUrl: endPoints.fetchDocumentaries,
		isLargeRow: false,
	},
];

const toastMessages = {
	success: (message: string) => toast.success(message),
	error: (message: string) => toast.error(message),
	info: (message: string) => toast.info(message),
};

export { truncate, rowsNetflix, toastMessages };
