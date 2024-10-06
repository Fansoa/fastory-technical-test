import { create } from 'zustand'

const initialSpyingSystemState = {
    peopleList: [],
    filmList: [],
    starshipList: [],
    vehicleList: [],
    specieList: [],
    planetList: [],
    nextInfinitePromiseList: []
}

const useSpyingSystemStore = create((set) => ({
    ...initialSpyingSystemState,
    addPeople: (newPeople) => set((state) => ({ peopleList: [...state.peopleList, ...newPeople] })),
    addFilm: (newFilm) => set((state) => ({ filmList: [...state.filmList, ...newFilm] })),
    addStarship: (newStarship) => set((state) => ({ starshipList: [...state.starshipList, ...newStarship] })),
    addVehicle: (newVehicle) => set((state) => ({ vehicleList: [...state.vehicleList, ...newVehicle] })),
    addSpecie: (newSpecie) => set((state) => ({ specieList: [...state.specieList, ...newSpecie] })),
    addPlanet: (newPlanet) => set((state) => ({ planetList: [...state.planetList, ...newPlanet] })),
    setNextInfinitePromiseList: (newNextInfinitePromiseList) => set((state) => ({ nextInfinitePromiseList: newNextInfinitePromiseList })),
    reset: () => {
        set(initialSpyingSystemState)
    }
}))

export default useSpyingSystemStore;
