import { RESOURCE_DETAILS_MAP } from "./constants"
import Row from "./components/Row"

const ContentByResource = ({resource}) => {

    if (!resource) return null

    return (
        <section className="flex flex-col gap-4 p-2 w-full">
            <h1 className="text-primary text-2xl font-display uppercase">{RESOURCE_DETAILS_MAP[resource.resourceType].title(resource)}</h1>
            {
                RESOURCE_DETAILS_MAP[resource.resourceType].list.map(({label, value, capitalizedValue, direction}, i) => (
                    <Row
                        key={`${i}-label`}
                        label={label}
                        value={() => value(resource)}
                        direction={direction}
                        capitalizedValue={capitalizedValue}
                    />
                ))
            }
        </section>
    )
}

export default ContentByResource
