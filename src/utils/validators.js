export const required = value => {
    if (!value) return "field required"
    return undefined
}
export const MaxLength = (max) => (value) => {
    if (value && value.length > max) return `max length is ${max}`
    return undefined
}