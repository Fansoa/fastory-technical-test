import { Controller, useFormContext } from "react-hook-form"
import onChangeSound from "/sounds/SE_UpdateHeatmap.wav"
import classNames from "../utils/methods/classNames"
import { useCallback } from "react"

type Props = {
    className?: string
    name: string
} & React.InputHTMLAttributes<HTMLInputElement>

const SearchInput = ({className, name}: Props) => {
    const { control } = useFormContext()

    const playSound = useCallback(() => {
        new Audio(onChangeSound).play()
    }, [])

  return (
    <Controller
        name={name}
        control={control}
        render={({field: {onChange}, fieldState: {error}, formState: {isValid}}) => {
            return (
                <div className={classNames(className, "before:transition before:content-[''] before:h-1 before:w-full before:absolute before:bottom-[-4px] before:left-0 skew-x-[45deg] p-6 flex items-center gap-3 h-full bg-secondary", isValid && "before:bg-primary before:shadow-[0px_2px_12px_1px_#43edf8]", error?.message && "before:bg-red-600 before:shadow-[0px_2px_12px_1px_#dc2626]" )}>
                    <div className=" h-6 p-1 bg-searchInputBackground flex">
                        <input
                            id="search"
                            onChange={(e) => {
                                onChange(e.target.value)
                                playSound()
                            }}
                            className="font-body p-2 skew-x-[-45deg] bg-transparent text-primary placeholder-primary placeholder:capitalize placeholder:opacity-15 outline-none uppercase"
                            autoComplete="off"
                            type="text"
                            placeholder="type your search"
                        />
                    </div>
                    <svg className="skew-x-[-45deg] text-primary" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.52 6.52 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5"></path></svg>
                </div>
            )
        }}
    />
    
  )
}

export default SearchInput
