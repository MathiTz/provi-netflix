import { useEffect, useState } from "react";

import { Movie } from "../../@types";
import { api } from "../../service/api";
import { baseImgUrl, endPoints } from "../../service/endpoints";

import Youtube from "react-youtube";
import { toastMessages } from "../../utils";
import {
	ArrowLeft,
	ArrowRight,
	RowMoviesContainer,
	RowScrollable,
} from "./styles";
import { CloseButton } from "../CloseButton";

interface RowProps {
	id: number;
	title: string;
	fetchUrl: string;
	isLargeRow: boolean;
}

function Row({ id, title, fetchUrl, isLargeRow }: RowProps) {
	const [movies, setMovies] = useState<Movie[]>([]);
	const [movieSelectedId, setMovieSelectedId] = useState(0);
	const [trailerUrl, setTrailerUrl] = useState("");
	const [arrowVisible, setArrowVisible] = useState({
		left: false,
		right: true,
	});
	const [lengthToSlide] = useState(630);
	const [counterSlide, setCounterSlide] = useState(1);

	useEffect(() => {
		async function fetchDataMovies() {
			const request = await api.get(fetchUrl);

			setMovies(request.data.results);
		}

		fetchDataMovies();
	}, [fetchUrl]);

	useEffect(() => {
		switch (counterSlide) {
			case 1:
				setArrowVisible({ left: false, right: true });
				return;
			case 5:
				setArrowVisible({ left: true, right: false });
				return;
			default:
				setArrowVisible({ left: true, right: true });
		}
	}, [counterSlide]);

	const handleSelectMovie = async (movie: Movie) => {
		if (movieSelectedId === movie.id) {
			return;
		}

		try {
			const endPoint = endPoints.fetchMovie(movie.id);
			const { data } = await api.get(endPoint);

			if (data.results.length === 0) {
				return toastMessages.error(
					"Could not find any trailers, sorry about that :("
				);
			}

			data.results.length > 1
				? toastMessages.info(
						"There are more than one trailer, we pick the first, enjoy your trailer!"
				  )
				: toastMessages.success("All set for you trailer, enjoy!");

			setTrailerUrl(data.results[0].key);
			setMovieSelectedId(movie.id);

			return;
		} catch (e) {
			return toastMessages.error(
				"Something happen, sorry for the inconvenience"
			);
		}
	};

	const handleCloseTrailer = () => {
		setTrailerUrl("");
		setMovieSelectedId(0);
	};

	const handleSlideMovies = (option: string) => {
		const rowMovie = document.getElementById(`row__scroll-${id}`);

		if (option === "left") {
			rowMovie!.scrollLeft -= lengthToSlide;
			setCounterSlide(counterSlide - 1);

			if (counterSlide === 1) {
				setArrowVisible({ ...arrowVisible, left: false });
			} else {
				setArrowVisible({ left: true, right: true });
			}
		} else {
			rowMovie!.scrollLeft += lengthToSlide;
			setCounterSlide(counterSlide + 1);

			if (counterSlide === 5) {
				setArrowVisible({ right: false, left: true });
			} else {
				setArrowVisible({ left: true, right: true });
			}
		}
	};

	return (
		<RowMoviesContainer>
			<h2>{title}</h2>

			<RowScrollable id={`row__scroll-${id}`}>
				<div className="arrow__container--shadow arrow__container--shadow-left"></div>
				{arrowVisible.left && (
					<ArrowLeft
						onClick={() => handleSlideMovies("left")}
						largeImg={isLargeRow}
						className="row__arrow row__arrow--left"
					/>
				)}
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
				<div className="arrow__container--shadow arrow__container--shadow-right"></div>
				{arrowVisible.right && (
					<ArrowRight
						onClick={() => handleSlideMovies("right")}
						largeImg={isLargeRow}
						className="row__arrow row__arrow--right"
					/>
				)}
			</RowScrollable>

			{trailerUrl && (
				<section>
					<CloseButton handleClick={handleCloseTrailer} />

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
				</section>
			)}
		</RowMoviesContainer>
	);
}

export { Row };
