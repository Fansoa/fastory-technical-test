import { Controller, useFormContext } from "react-hook-form"
import onKeyPressSound from "/sounds/SE_UpdateHeatmap.wav"
import onErrorSound from "/sounds/SE_HideHeatmap.wav"
import classNames from "../utils/methods/classNames"
import { useCallback } from "react"

type Props = {
    className?: string
    name: string
} & React.InputHTMLAttributes<HTMLInputElement>

const TextInput = ({className, name, type, placeholder, autoComplete}: Props) => {
    const { control } = useFormContext()

    const handleOnChange = useCallback(() => new Audio(onKeyPressSound).play(), [])

    const handleError = useCallback(() => {
        const audio = new Audio(onErrorSound)
        audio.volume = 0.4
        audio.play()
    }, [])

  return (
    <Controller
        name={name}
        control={control}
        render={({field: {onChange, value}, fieldState: {error, isDirty}}) => {
            if(error?.message && !value) handleError()
            return (
                <div 
                    className={classNames(
                        className, 
                        "before:transition before:content-[''] before:w-1  before:absolute  before:left-0 before:h-full skew-x-[45deg] p-6 flex items-center gap-3 h-full bg-secondary", 
                        isDirty && "before:bg-primary before:shadow-[0px_2px_12px_1px_#43edf8]", 
                        error?.message && "before:bg-red-600 before:shadow-[0px_2px_12px_1px_#dc2626]"
                    )}
                >
                    <div className=" h-6 p-1 bg-searchInputBackground flex">
                        <input
                            onChange={(e) => {
                                onChange(e.target.value)
                                handleOnChange()
                            }}
                            className="font-body p-2 skew-x-[-45deg] bg-transparent text-primary text-sm placeholder-primary placeholder:opacity-15 outline-none placeholder:uppercase"
                            type={type || "text"}
                            placeholder={placeholder || "Placeholder"}
                            autoComplete={autoComplete}
                        />
                    </div>
                </div>
            )
        }}
    />
    
  )
}

export default TextInput
