
const validateInputSize = (commandInputs, size) => {
    if (commandInputs.length != size + 1) {
        throw new Error(
            `Please check the command ${commandInputs}`);
    } 
}

module.exports = {
    validateInputSize
}