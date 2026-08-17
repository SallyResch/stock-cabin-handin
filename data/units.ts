//If without "as const" any string is acceptable.
// With as const the array is "locked" to only these strings
export const UNITS = ['kg',"st","g","pkg","l", "dl"] as const;