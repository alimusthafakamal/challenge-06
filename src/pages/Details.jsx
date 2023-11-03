import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import HeroMovieItem from "../components/HeroMovieItem";

const Details = () => {
	const { id } = useParams();

	return (
		<>
			<Navigation />
			<HeroMovieItem
				id={id}
				active={true}
				genre={true}
				rating={true}
				carousel={false}
			/>
		</>
	);
};
export default Details;
