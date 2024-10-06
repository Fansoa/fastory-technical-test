const classNames = (...classes: (string|undefined|boolean)[]) => {
    return classes.filter(Boolean).join(' ')
}

export default classNames
