import PlanetIcon from "../../../../icons/PlanetIcon"
import PeopleIcon from "../../../../icons/PeopleIcon"
import FilmIcon from "../../../../icons/FilmIcon"
import StarshipIcon from "../../../../icons/StarshipIcon"
import VehicleIcon from "../../../../icons/VehicleIcon"
import SpecieIcon from "../../../../icons/SpecieIcon"

export const ICONS_MAP: Record<string, JSX.Element> = {
    people: <PeopleIcon />,
    film: <FilmIcon />,
    starship: <StarshipIcon />,
    vehicle: <VehicleIcon />,
    specie: <SpecieIcon />,
    planet: <PlanetIcon />
}
