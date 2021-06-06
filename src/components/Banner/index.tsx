import { useEffect, useState } from "react";
import { Movie } from "../../@types";
import { api } from "../../service/api";
import { baseImgUrl, endPoints } from "../../service/endpoints";
import { truncate } from "../../utils";

import { HeaderBanner } from "./styles";

function Banner() {
	const [movie, setMovie] = useState<Movie>({} as Movie);

	useEffect(() => {
		async function fetchDataMovie() {
			const { data } = await api.get(endPoints.fetchNetflixOriginals);
			const movie =
				data.results[Math.floor(Math.random() * data.results.length)];
			setMovie(movie);
		}

		fetchDataMovie();
	}, []);

	return (
		<HeaderBanner image={`${baseImgUrl}${movie?.backdrop_path}`}>
			<section className="banner__contents">
				<h1 className="banner__title">{movie.name}</h1>
				<p className="banner__description">{truncate(movie.overview, 150)}</p>
				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>
			</section>

			<div className="banner--fadeBottom"></div>
		</HeaderBanner>
	);
}

export { Banner };
