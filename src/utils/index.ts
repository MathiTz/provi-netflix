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
		title: "Netflix Originals",
		fetchUrl: endPoints.fetchNetflixOriginals,
		isLargeRow: true,
	},
	{
		title: "Trending Now",
		fetchUrl: endPoints.fetchTrending,
		isLargeRow: false,
	},
	{ title: "Top Rated", fetchUrl: endPoints.fetchTopRated, isLargeRow: false },
	{
		title: "Action Movies",
		fetchUrl: endPoints.fetchActionMovies,
		isLargeRow: false,
	},
	{
		title: "Comedy Movies",
		fetchUrl: endPoints.fetchComedyMovies,
		isLargeRow: false,
	},
	{
		title: "Horror Movies",
		fetchUrl: endPoints.fetchHorrorMovies,
		isLargeRow: false,
	},
	{
		title: "Romance Movies",
		fetchUrl: endPoints.fetchRomanceMovies,
		isLargeRow: false,
	},
	{
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
