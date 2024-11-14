//exercice 1
function intervalsOverlap(intrs) {
    let N = intrs.length; 
    let lastTime = -1;
    let isIntersect = false;
    
    for (let i = 0; i < N; i++) {
        if (lastTime < intrs[i][1]) {
            lastTime = intrs[i][1];
        }
    }
    let count = new Array(lastTime + 1).fill(0);
    for (let i = 0; i < N; i++) {
        count[intrs[i][0]] += 1; 
        count[intrs[i][1]] -= 1; 
    }
    let sum = 0;
    for (let i = 0; i < count.length; i++) {
        sum += count[i];
        if (sum > 1) {
            isIntersect = true;
            break;
        }
    }
    if (isIntersect) {
        console.log("Intervals are overlapping");
    } else {
        console.log("No intervals overlap");
    }
}
let intervals1 = [[1, 5], [6, 10], [12, 15], [3, 7]];
let intervals2 = [[1, 5], [6, 10], [12, 15]];
intervalsOverlap(intervals1); 
intervalsOverlap(intervals2); 
 // exercice 5

class Client {
    constructor(id, name, nationality, age) {
        this.id = id;            
        this.name = name;        
        this.nationality = nationality; 
        this.age = age;          
    }
}


class Room {
    constructor(id, type, state) {
        this.id = id;           
        this.type = type;       
        this.state = state;     
        this.client = null;     
    }

    
    assignClient(client) {
        this.client = client;
        this.state = false; 
    }

    
    freeRoom() {
        this.client = null;
        this.state = true; 
    }
}
function countFreeRooms(rooms) {
    let freeCount = 0;
    for (let room of rooms) {
        if (room.state === true) { 
            freeCount++;
        }
    }
    return freeCount;
}
function countClientsByNationality(rooms, nationality) {
    let count = 0;
    for (let room of rooms) {
        if (room.state === false && room.client !== null) {
            if (room.client.nationality === nationality) {
                count++;
            }
        }
    }
    return count;
}

let client1 = new Client(1, "John Doe", 1, 30); 
let client2 = new Client(2, "Jane Smith", 2, 25);
let client3 = new Client(3, "Maria Garcia", 1, 35); 


let room1 = new Room(101, 1, true); 
let room2 = new Room(102, 2, false); 
let room3 = new Room(103, 3, true);
let room4 = new Room(104, 4, false); 
let room5 = new Room(105, 1, false); 


room2.assignClient(client1); 
room4.assignClient(client2); 
room5.assignClient(client3); 


let rooms = [room1, room2, room3, room4, room5];


let freeRooms = countFreeRooms(rooms);
console.log("Nombre de chambres libres:", freeRooms);


let clientsNationality1 = countClientsByNationality(rooms, 1);
console.log("Nombre de clients avec la nationalité 1:", clientsNationality1);

// exerice 4
function isseparator(d) {
    const separators = [' ', ',', '.', ';', ':', '-', ''];
    return separators.includes(d);
}

function is_letter(d) {
    return /^[a-zA-Z]$/.test(d); 
}

function is_digit(d) {
    return /^[0-9]$/.test(d); 
}

function analyzeSentence(sentence) {
    let letters = 0;
    let digits = 0;
    let separators = 0;
    let specialChars = 0;

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];

        if (char === '#') {
            break; 
        }

        if (is_letter(char)) {
            letters++;
        } else if (is_digit(char)) {
            digits++;
        } else if (is_separator(char)) {
            separators++;
        } else {
            specialChars++;
        }
    }

    console.log("Number of letters:", letters);
    console.log("Number of digits:", digits);
    console.log("Number of separators:", separators);
    console.log("Number of special characters:", specialChars);
}