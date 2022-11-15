export const required = value => {
    if (value) return undefined
    return "field required"
}
export const MaxLength = (max) => (value) => {
    if (value && value.length > max) return `max length is ${max}`
    return undefined
}