export const isoToYMD : Function = function isoToYMD(date: Date) : string {
    return date.toISOString().split('T')[0];
}

export const tEr = function tEr(err: any): void {
    throw new Error(err);
}
