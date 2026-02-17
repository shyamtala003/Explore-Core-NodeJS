const textBuffer = Buffer.from("NodeJs");
console.log("raw buffer:", textBuffer);
console.log("to string:", textBuffer.toString("utf8"));
console.log("json view:", JSON.stringify(textBuffer));

const obj = { a: 1, b: 2 };
const objBuffer = Buffer.from(JSON.stringify(obj));
const decodedObj = JSON.parse(objBuffer.toString("utf8"));

console.log("object buffer:", objBuffer);
console.log("decoded object:", decodedObj);
