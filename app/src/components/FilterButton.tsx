import { Controller, useFormContext } from "react-hook-form"
import classNames from "../utils/methods/classNames"
import { FC, useCallback } from "react"
import onClickSound from "/sounds/SE_SelectNothing.wav"

type Props = {
    className?: string,
    name: string,
    renderIcon: FC,
    triggerOnSubmit: () => void
}

const FilterButton = ({className, name, renderIcon, triggerOnSubmit}: Props) => {
    const { control } = useFormContext()
    
    const playSound =  useCallback(() => {
        new Audio(onClickSound).play()
    }, [])

    return (
        <Controller
            control={control}
            name={name}
            render={({field: {
                onChange,
                value
            }}) => {
                return (
                    <div onClick={() => {
                        onChange(!value)
                        playSound()
                        triggerOnSubmit()
                        }} className={classNames(className, "hover:p-4 hover:bg-cyan-100 p-3 bg-secondary skew-x-[45deg] flex items-center", "before:transition before:h-1 before:w-full before:absolute before:bottom-[-4px] before:left-0", value && "before:bg-primary before:shadow-[0px_2px_12px_1px_#43edf8]")}>
                        {renderIcon({className:"skew-x-[-45deg]"})}
                        <input
                            hidden
                            className="p-2 skew-x-[-45deg] bg-transparent text-primary outline-none uppercase"
                            type="checkbox"
                            onChange={onChange}
                        />
                    </div>
                )
            }}
        />
    )
}

export default FilterButton
