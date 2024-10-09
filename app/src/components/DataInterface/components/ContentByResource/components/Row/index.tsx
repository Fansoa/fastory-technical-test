import classNames from "../../../../../../utils/methods/classNames"
import { RowProps } from "./types"

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
            <p className={classNames(capitalizedValue && "capitalize")}>{value()}</p>
        </div>
    )
}

export default Row
