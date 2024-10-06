import { FormProvider } from "react-hook-form";
import FilterButton from "./FilterButton";
import PeopleIcon from "./icons/PeopleIcon";
import FilmIcon from "./icons/FilmIcon";
import StarshipIcon from "./icons/StarshipIcon";
import VehicleIcon from "./icons/VehicleIcon";
import SpecieIcon from "./icons/SpecieIcon";
import PlanetIcon from "./icons/PlanetIcon";
import SearchInput from "./SearchInput";
import useSearchForm from "../hooks/useSearchForm";

const SearchForm = () => {
    const { methods, onSubmit } = useSearchForm()

    return (
        <FormProvider {...methods}>
            <form className="flex gap-8" onSubmit={(e) => e.preventDefault()} onChange={onSubmit}>
                <div className="flex gap-[1px]">
                    <FilterButton className="text-primary" name="people" renderIcon={PeopleIcon} triggerOnSubmit={methods.handleSubmit(onSubmit)}/>
                    <FilterButton className="text-primary" name="film" renderIcon={FilmIcon} triggerOnSubmit={methods.handleSubmit(onSubmit)}/>
                    <FilterButton className="text-primary" name="starship" renderIcon={StarshipIcon} triggerOnSubmit={methods.handleSubmit(onSubmit)}/>
                    <FilterButton className="text-primary" name="vehicle" renderIcon={VehicleIcon} triggerOnSubmit={methods.handleSubmit(onSubmit)}/>
                    <FilterButton className="text-primary" name="specie" renderIcon={SpecieIcon} triggerOnSubmit={methods.handleSubmit(onSubmit)}/>
                    <FilterButton className="text-primary" name="planet" renderIcon={PlanetIcon} triggerOnSubmit={methods.handleSubmit(onSubmit)}/>
                </div>
                <SearchInput name={'search'}/>
            </form>
        </FormProvider>
    )
}

export default SearchForm
