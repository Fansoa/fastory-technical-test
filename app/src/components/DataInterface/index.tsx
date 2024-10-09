import { useCallback, useMemo, useState } from "react"
import useSpyingSystemStore from "../../stores/stores"
import onChangeSound from "/sounds/SE_UpdateHeatmap.wav"
import IconByResourceType from "./components/IconByResourceType"
import ContentByResource from "./components/ContentByResource"

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

    const filteredResourceList = useMemo(() => resourceList.filter(resource => 
        (resource.name || resource.title)
        .toLowerCase()
        .includes(filterInput)
    ), [resourceList, filterInput])

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
                    {filteredResourceList.map(resource => (
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
                    ))}
                </div>
            </div>
            <ContentByResource resource={selectedResource}/>
        </>
    )
}

export default DataInterface
