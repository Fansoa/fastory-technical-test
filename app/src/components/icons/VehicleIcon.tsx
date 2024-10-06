
type Props = {
    className?: string,
    fillColor?: string
}

const VehicleIcon = ({className, fillColor}: Props) => {  
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill={fillColor || "#43edf8"} d="M30 13v-2H18.618l-.723-1.447A1 1 0 0 0 17 9H9a1 1 0 0 0-1 1v5H4v2h18.638l3.6 3H3a1 1 0 0 0-1 1v2a5.006 5.006 0 0 0 5 5h18a5.006 5.006 0 0 0 5-5v-2a1 1 0 0 0-.36-.769l-6-5A1 1 0 0 0 23 15h-2.382l-1-2Zm-2 10a3.003 3.003 0 0 1-3 3H7a3.003 3.003 0 0 1-3-3v-1h24Zm-18-8v-4h6.382l2 4Z"></path></svg>
    )
}

export default VehicleIcon
