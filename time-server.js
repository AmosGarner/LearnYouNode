let net = require('net');
const port = process.argv[2];

const pad = (number) =>{ 
    return number < 10 ? '0' + number : number 
};

class DateObj{
    constructor(date){
        this.dateString = 
            date.getFullYear() + "-" + 
            pad(date.getMonth() + 1) + "-" +
            pad(date.getDate()) + " " +
            pad(date.getHours()) + ":" +
            pad(date.getMinutes()) + "\n";
    };
};

let server = net.createServer((socket) =>{
    socket.end(new DateObj(new Date()).dateString);
})

server.listen(port);