export type RowProps = {
    className?: string
    label: string
    value: () => string
    direction?: "row" | "col"
    capitalizedValue?: boolean
}
