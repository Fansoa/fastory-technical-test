import { useCallback, useState } from "react"
import useSpyingSystemStore from "../stores/stores"
import onChangeSound from "/sounds/SE_UpdateHeatmap.wav"
import PlanetIcon from "./icons/PlanetIcon"
import PeopleIcon from "./icons/PeopleIcon"
import FilmIcon from "./icons/FilmIcon"
import StarshipIcon from "./icons/StarshipIcon"
import VehicleIcon from "./icons/VehicleIcon"
import SpecieIcon from "./icons/SpecieIcon"
import classNames from "../utils/methods/classNames"

type IconByResourceTypeProps = {
    resourceType: "people" | "film" | "starship" | "vehicle" | "specie" | "planet"
}

const IconByResourceType = ({resourceType}: IconByResourceTypeProps) => {
    if (resourceType === 'people') return <PeopleIcon/> 
    if (resourceType === 'film') return <FilmIcon/>
    if (resourceType === 'starship') return <StarshipIcon/>
    if (resourceType === 'vehicle') return <VehicleIcon/>
    if (resourceType === 'specie') return <SpecieIcon/>
    if (resourceType === 'planet') return <PlanetIcon/>
    return <p>Unhandle resourceType</p>
}

type RowProps = {
    className?: string
    label: string
    value: string
    direction?: "row" | "col"
    capitalizedValue?: boolean
}

const Row = ({className, label, value, direction = 'row', capitalizedValue}: RowProps) => {
    return (
        <div 
            className={classNames(
                className,
                "text-primary font-body flex justify-between",
                direction === 'col' ? "flex-col" : ""
            )}
        >
            <label className="uppercase">{label}</label>
            <p className={classNames(capitalizedValue && "capitalize")}>{value}</p>
        </div>
    )
}

const DataInterface = () => {
    const [filterInput, setFilterInput] = useState('')
    const [selectedResource, setSelectedResource] = useState(null)

    const handleOnChange = (e) => {
        setFilterInput(e.target.value.toLowerCase())
    }

    const handleSoundEvent = useCallback(() => {
        new Audio(onChangeSound).play()
    }, [])
    
    const { 
        peopleList,
        filmList,
        starshipList,
        vehicleList,
        specieList,
        planetList 
    } = useSpyingSystemStore((state) => state)
    const resourceList = [peopleList, filmList, starshipList, vehicleList, specieList, planetList].flat()
        
    return (
        <>
            <div className="w-2/4 flex flex-col gap-2">
                <input 
                    className="p-2 bg-secondary font-body text-primary h-10 uppercase outline-none" 
                    type="text" 
                    placeholder="Filter by name"
                    onChange={(e) => {
                        handleSoundEvent()
                        handleOnChange(e)
                    }}
                />
                <div className="flex flex-col gap-1 h-full overflow-y-auto bg-slate-900 rounded-sm">
                    {resourceList
                        .filter(resource => (resource.name || resource.title)
                            .toLowerCase()
                            .includes(filterInput)
                        )
                        .map(resource => (
                            <div 
                                key={resource.name || resource.title} 
                                className="bg-slate-800 flex items-center gap-2 rounded-sm p-1 hover:bg-slate-700 cursor-pointer"
                                onClick={() => {
                                    handleSoundEvent()
                                    setSelectedResource({...resource})
                                }}
                            >
                                <IconByResourceType resourceType={resource.resourceType}/>
                                <p className="text-white uppercase text-xl select-none">{resource.name || resource.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <section className="flex flex-col gap-4 p-2 w-full">
                {/* People */}
                {selectedResource?.resourceType === 'people' && (
                    <>
                        <h1 className="text-primary text-2xl font-display uppercase">{selectedResource?.name}</h1>
                        <Row label="Birth year" value={selectedResource?.birth_year}/>
                        <Row label="Eye color" value={selectedResource?.eye_color} capitalizedValue/>
                        <Row label="Gender" value={selectedResource?.gender} capitalizedValue/>
                        <Row label="Hair color" value={selectedResource?.hair_color} capitalizedValue/>
                        <Row label="Height" value={`${selectedResource?.height} CM`}/>
                        <Row label="Mass" value={`${selectedResource?.mass} KG`}/>
                        <Row label="Skin" value={selectedResource?.skin_color} capitalizedValue/>
                    </>
                )}

                {/* Film */}
                {selectedResource?.resourceType === 'film' && (
                    <>
                        <h1 className="text-primary text-2xl font-display uppercase">{selectedResource?.title}</h1>
                        <Row label="Director" value={selectedResource?.director} capitalizedValue/>
                        <Row label="Producer" value={selectedResource?.producer} capitalizedValue/>
                        <Row label="Episode" value={selectedResource?.episode_id.toString()}/>
                        <Row label="Release date" value={selectedResource?.release_date}/>
                        <Row className={"gap-2"} label="Opening crawl" direction="col" value={selectedResource?.opening_crawl}/>
                    </>
                )}

                {/* Starship */}
                {selectedResource?.resourceType === 'starship' && (
                    <>
                        <h1 className="text-primary text-2xl font-display uppercase">{selectedResource?.name}</h1>
                        <Row label="Model" value={selectedResource?.model} capitalizedValue/>
                        <Row label="Manufacturer" value={selectedResource?.manufacturer} capitalizedValue/>
                        <Row label="Starship class" value={selectedResource?.starship_class} capitalizedValue/>
                        <Row label="Crew" value={selectedResource?.crew.toString()} capitalizedValue/>
                        <Row label="Passenger" value={selectedResource?.passengers.toString()} capitalizedValue/>
                        <Row label="Hyperdrive Rating" value={selectedResource?.hyperdrive_rating.toString()} capitalizedValue/>
                        <Row label="Consumable" value={selectedResource?.consumables} capitalizedValue/>
                        <Row label="Length" value={`${selectedResource?.length} CM`}/>
                        <Row label="Cost" value={selectedResource?.cost_in_credits}/>
                    </>
                )}
                
                {/* Vehicle */}
                {selectedResource?.resourceType === 'vehicle' && (
                    <>
                        <h1 className="text-primary text-2xl font-display uppercase">{selectedResource?.name}</h1>
                        <Row label="Model" value={selectedResource?.model} capitalizedValue/>
                        <Row label="Manufacturer" value={selectedResource?.manufacturer} capitalizedValue/>
                        <Row label="Crew" value={selectedResource?.crew}/>
                        <Row label="Passenger" value={selectedResource?.passengers}/>
                        <Row label="Max atmosphering speed" value={`${selectedResource?.max_atmosphering_speed.toString()} KM/H`}/>
                        <Row label="Consumable" value={selectedResource?.consumables}/>
                        <Row label="Length" value={`${selectedResource?.length}`}/>
                        <Row label="Cost" value={selectedResource?.cost_in_credits.toString()}/>
                    </>
                )}

                {/* Specie */}
                {selectedResource?.resourceType === 'specie' && (
                    <>
                        <h1 className="text-primary text-2xl font-display uppercase">{selectedResource?.name}</h1>
                        <Row label="Classification" value={selectedResource?.classification} capitalizedValue/>
                        <Row label="Designation" value={selectedResource?.designation} capitalizedValue/>
                        <Row label="Height" value={`${selectedResource?.average_height} CM`}/>
                        <Row label="Lifespan" value={selectedResource?.average_lifespan}/>
                        <Row label="Skin" value={selectedResource?.skin_colors} capitalizedValue/>
                        <Row label="Eye" value={selectedResource?.eye_colors} capitalizedValue/>
                        <Row label="Hair" value={selectedResource?.hair_colors} capitalizedValue/>
                        <Row label="language" value={selectedResource?.language} capitalizedValue/>
                    </>
                )}

                {/* Planet */}
                {selectedResource?.resourceType === 'planet' && (
                    <>
                        <h1 className="text-primary text-2xl font-display uppercase">{selectedResource?.name}</h1>
                        <Row label="Climat" value={selectedResource?.climate} capitalizedValue/>
                        <Row label="Diameter" value={selectedResource?.diameter}/>
                        <Row label="Gravity" value={selectedResource?.gravity} capitalizedValue/>
                        <Row label="Orbital period" value={selectedResource?.orbital_period}/>
                        <Row label="Rotation period" value={selectedResource?.rotation_period}/>
                        <Row label="Population" value={selectedResource?.population}/>
                        <Row label="Surface water" value={selectedResource?.surface_water}/>
                        <Row label="Terrain" value={selectedResource?.terrain} capitalizedValue/>
                    </>
                )}
            </section>
        </>
    )
}

export default DataInterface
