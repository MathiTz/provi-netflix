import { Banner } from "../../components/Banner";
import { Navbar } from "../../components/Navbar";
import { Row } from "../../components/Row";
import { rowsNetflix } from "../../utils";

function Home() {
	return (
		<>
			<Navbar />
			<Banner />
			{rowsNetflix.map((row) => (
				<Row
					id={row.id}
					key={row.id}
					title={row.title}
					fetchUrl={row.fetchUrl}
					isLargeRow={row.isLargeRow}
				/>
			))}
		</>
	);
}

export { Home };
