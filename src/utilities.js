module.exports.isoToYMD = function isoToYMD(date) {
    return date.toISOString().split('T')[0];
}

module.exports.tEr = function tEr(err) {
    throw new Error(err);
}
