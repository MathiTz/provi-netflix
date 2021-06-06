import { useEffect, useState } from "react";
import { Movie } from "../../@types";
import { api } from "../../service/api";
import { baseImgUrl, endPoints } from "../../service/endpoints";

import Youtube from "react-youtube";
import "./styles.css";
import { toastMessages } from "../../utils";

interface RowProps {
	title: string;
	fetchUrl: string;
	isLargeRow?: boolean;
}

function Row({ title, fetchUrl, isLargeRow }: RowProps) {
	const [movies, setMovies] = useState<Movie[]>([]);
	const [trailerUrl, setTrailerUrl] = useState("");

	useEffect(() => {
		async function fetchDataMovies() {
			const request = await api.get(fetchUrl);

			setMovies(request.data.results);
		}

		fetchDataMovies();
	}, [fetchUrl]);

	const handleSelectMovie = async (movie: Movie) => {
		if (trailerUrl) {
			setTrailerUrl("");
		}
		try {
			const endPoint = endPoints.fetchMovie(movie.id);
			const { data } = await api.get(endPoint);

			if (data.results.length === 0) {
				return toastMessages.error(
					"Could not find any trailers, sorry about that :("
				);
			}

			if (data.results.length > 1) {
				toastMessages.info(
					"There are more than one trailer, we pick the first, hope you like it!"
				);
			}

			setTrailerUrl(data.results[0].key);
			return;
		} catch (e) {
			return toastMessages.error(e.message);
		}
	};

	return (
		<div className="row">
			<h2>{title}</h2>

			<div className="row__posters">
				{movies.map((movie) => (
					<img
						onClick={() => handleSelectMovie(movie)}
						key={movie.id}
						className={`row__poster ${isLargeRow && "row__posterLarge"}`}
						src={`${baseImgUrl}${
							isLargeRow ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.title}
					/>
				))}
			</div>

			{trailerUrl && (
				<Youtube
					videoId={trailerUrl}
					opts={{
						height: "390",
						width: "100%",
						playerVars: {
							autoplay: 1,
						},
					}}
				/>
			)}
		</div>
	);
}

export { Row };
