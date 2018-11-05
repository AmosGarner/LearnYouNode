const addArguments = (arguments) => {
    let value = 0;
    arguments.map(argument => {
        value = value + Number(argument);
    })
    return value
}
const arguments = process.argv;
delete(arguments[0]);
delete(arguments[1]);
console.log(addArguments(process.argv));