export const RESOURCE_DETAILS_MAP = {
    people: {
        title: selectedResource => selectedResource?.name,
        list: [
            { label: "Birth year", value: selectedResource => selectedResource?.birth_year },
            { label: "Eye color", value: selectedResource => selectedResource?.eye_color, capitalizedValue: true },
            { label: "Gender", value: selectedResource => selectedResource?.gender, capitalizedValue: true },
            { label: "Hair color", value: selectedResource => selectedResource?.hair_color, capitalizedValue: true },
            { label: "Height", value: selectedResource => `${selectedResource?.height} CM` },
            { label: "Mass", value: selectedResource => `${selectedResource?.mass} KG` },
            { label: "Skin", value: selectedResource => selectedResource?.skin_color, capitalizedValue: true },
        ]
    },
    film: {
        title: selectedResource => selectedResource?.title,
        list: [
            { label: "Director", value: selectedResource => selectedResource?.director, capitalizedValue: true },
            { label: "Producer", value: selectedResource => selectedResource?.producer, capitalizedValue: true },
            { label: "Episode", value: selectedResource => selectedResource?.episode_id?.toString() },
            { label: "Release date", value: selectedResource => selectedResource?.release_date },
            { label: "Opening crawl", value: selectedResource => selectedResource?.opening_crawl, direction: 'col' },
        ]
    },
    starship: {
        title: selectedResource => selectedResource?.name,
        list: [
            { label: "Model", value: selectedResource => selectedResource?.model, capitalizedValue: true },
            { label: "Manufacturer", value: selectedResource => selectedResource?.manufacturer, capitalizedValue: true },
            { label: "Starship class", value: selectedResource => selectedResource?.starship_class, capitalizedValue: true },
            { label: "Crew", value: selectedResource => selectedResource?.crew.toString(), capitalizedValue: true },
            { label: "Passenger", value: selectedResource => selectedResource?.passengers.toString(), capitalizedValue: true },
            { label: "Hyperdrive Rating", value: selectedResource => selectedResource?.hyperdrive_rating.toString() },
            { label: "Consumable", value: selectedResource => selectedResource?.consumables },
            { label: "Length", value: selectedResource => `${selectedResource?.length} CM` },
            { label: "Cost", value: selectedResource => selectedResource?.cost_in_credits },
        ],
    },
    vehicle: {
        title: selectedResource => selectedResource?.name,
        list: [
            { label: "Model", value: selectedResource => selectedResource?.model },
            { label: "Manufacturer", value: selectedResource => selectedResource?.manufacturer, capitalizedValue: true },
            { label: "Crew", value: selectedResource => selectedResource?.crew },
            { label: "Passenger", value: selectedResource => selectedResource?.passengers },
            { label: "Max atmosphering speed", value: selectedResource => `${selectedResource?.max_atmosphering_speed?.toString()} KM/H` },
            { label: "Consumable", value: selectedResource => selectedResource?.consumables },
            { label: "Length", value: selectedResource => selectedResource?.length },
            { label: "Cost", value: selectedResource => selectedResource?.cost_in_credits?.toString() },
        ]
    },
    specie: {
        title: selectedResource => selectedResource?.name,
        list: [
            { label: "Classification", value: selectedResource => selectedResource?.classification, capitalizedValue: true },
            { label: "Designation", value: selectedResource => selectedResource?.designation, capitalizedValue: true },
            { label: "Height", value: selectedResource => `${selectedResource?.average_height} CM`, capitalizedValue: true },
            { label: "Lifespan", value: selectedResource => selectedResource?.average_lifespan },
            { label: "Skin", value: selectedResource => selectedResource?.skin_colors, capitalizedValue: true },
            { label: "Eye", value: selectedResource => selectedResource?.eye_colors, capitalizedValue: true },
            { label: "Hair", value: selectedResource => selectedResource?.hair_colors, capitalizedValue: true },
            { label: "Language", value: selectedResource => selectedResource?.language, capitalizedValue: true },
        ]
    },
    planet: {
        title: selectedResource => selectedResource?.name,
        list: [
            { label: "Climat", value: selectedResource => selectedResource?.climate, capitalizedValue: true },
            { label: "Diameter", value: selectedResource => selectedResource?.diameter },
            { label: "Gravity", value: selectedResource => selectedResource?.gravity, capitalizedValue: true },
            { label: "Orbital period", value: selectedResource => selectedResource?.orbital_period },
            { label: "Rotation period", value: selectedResource => selectedResource?.rotation_period },
            { label: "Population", value: selectedResource => selectedResource?.population },
            { label: "Surface water", value: selectedResource => selectedResource?.surface_water },
            { label: "Terrain", value: selectedResource => selectedResource?.terrain, capitalizedValue: true },
    ]}
}
