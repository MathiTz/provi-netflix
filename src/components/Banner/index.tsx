import { useEffect, useState } from "react";
import { Movie } from "../../@types";
import { api } from "../../service/api";
import { baseImgUrl, endPoints } from "../../service/endpoints";
import { truncate } from "../../utils";

import "./styles.css";

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
		<header
			style={{
				backgroundSize: "cover",
				backgroundImage: `url(
			${baseImgUrl}${movie?.backdrop_path}
		)`,
				backgroundPosition: "center center",
			}}
			className="banner"
		>
			<section className="banner__contents">
				<h1 className="banner__title">
					{movie?.title || movie?.original_title}
				</h1>
				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>

				<h1 className="banner__description">
					{truncate(movie?.overview, 150)}
				</h1>
			</section>

			<div className="banner--fadeBottom"></div>
		</header>
	);
}

export { Banner };
