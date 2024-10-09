import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod";
import { useForm } from "react-hook-form";
import useDebounce from "./useDebounce";
import useSpyingSystemStore from "../stores/stores";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { fetchResources } from "../services/api";

const schema = zod.object({
    search: zod.string().min(2),
    people: zod.boolean(),
    film: zod.boolean(),
    starship: zod.boolean(),
    vehicle: zod.boolean(),
    specie: zod.boolean(),
    planet: zod.boolean(),
  })

type Schema = zod.infer<typeof schema>

const useSearchForm = () => {
    const navigation = useNavigate()
    const { addPeople, addFilm, addStarship, addVehicle, addSpecie, addPlanet, reset } = useSpyingSystemStore((state) => state)
    const { mutate } = useMutation({
        mutationFn: ({ search, filterOptions }) => fetchResources(search, filterOptions),
        onSuccess(data) {
            if(data?.statusCode === 401) navigation('/login')

            const storeResourceByType = {
                people: (results) => addPeople([...results.map(resource => ({...resource, resourceType: 'people'}))]),
                film: (results) =>  addFilm([...results.map(resource => ({...resource, resourceType: 'film'}))]),
                starship: (results) => addStarship([...results.map(resource => ({...resource, resourceType: 'starship'}))]),
                vehicle: (results) => addVehicle([...results.map(resource => ({...resource, resourceType: 'vehicle'}))]),
                specie: (results) => addSpecie([...results.map(resource => ({...resource, resourceType: 'specie'}))]),
                planet: (results) => addPlanet([...results.map(resource => ({...resource, resourceType: 'planet'}))])
            }
                
            const nextInfinitePromiseList = data.reduce((acc, { requestType, results, next }) => {
                storeResourceByType[requestType](results)
                if (next) return [...acc, fetch(next).then(res => res.json())]
                
                return [...acc]
        },[])
            setNextInfinitePromiseList(nextInfinitePromiseList)
        },
    })

    const searchDebounce = useDebounce()
    
    const methods = useForm<Schema>({
        defaultValues: {
          search: '',
          people: true,
          film: true,
          starship: true,
          vehicle: true,
          specie: true,
          planet: true
        },
        mode: 'onChange',
        resolver: zodResolver(schema)
      })

      const onSubmit = async (formData: Schema) => {
        reset()
        const { search, ...filterOptions} = formData
        mutate({ search, filterOptions })
      }
    
    return { methods, onSubmit: () => searchDebounce(methods.handleSubmit(onSubmit), 500)}
}

export default useSearchForm
