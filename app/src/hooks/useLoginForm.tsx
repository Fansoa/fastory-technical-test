import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as zod from "zod"
import onSubmitSound from "/sounds/UI_DiscOpen.wav"
import useAuth from "./useAuth"

const schema = zod.object({
    username: zod.string().min(1),
    password: zod.string().min(1)
  })

type Schema = zod.infer<typeof schema>

const useLoginForm = () => {
    const { signIn } = useAuth()
    const methods = useForm<Schema>({
        defaultValues: {
            username: '',
            password: ''
        },
        resolver: zodResolver(schema)
    })
    
    const onSubmit = ({username, password} : Schema) => {
        new Audio(onSubmitSound).play()
        signIn({ username, password })
    }

    return { methods, onSubmit: methods.handleSubmit(onSubmit)}
}

export default useLoginForm
