
type Props = {
    className?: string,
    fillColor?: string
}

const SpecieIcon = ({className, fillColor}: Props) => {  
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill={fillColor || "#43edf8"} d="M200 204.5V232a8 8 0 0 1-16 0v-27.5a63.67 63.67 0 0 0-35.38-57.25l-48.4-24.19A79.58 79.58 0 0 1 56 51.5V24a8 8 0 0 1 16 0v27.5a63.67 63.67 0 0 0 35.38 57.25l48.4 24.19A79.58 79.58 0 0 1 200 204.5m-40-4.5H72.17a63.6 63.6 0 0 1 3.23-16h72.71a8 8 0 0 0 0-16H83.46a63.7 63.7 0 0 1 14.65-15.08A8 8 0 1 0 88.64 140A80.27 80.27 0 0 0 56 204.5V232a8 8 0 0 0 16 0v-16h88a8 8 0 0 0 0-16m32-184a8 8 0 0 0-8 8v16H96a8 8 0 0 0 0 16h87.83a63.6 63.6 0 0 1-3.23 16h-72.71a8 8 0 1 0 0 16h64.65a63.7 63.7 0 0 1-14.65 15.08a8 8 0 0 0 9.47 12.9A80.27 80.27 0 0 0 200 51.5V24a8 8 0 0 0-8-8"></path></svg>
    )
}

export default SpecieIcon
