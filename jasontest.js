const file = require('fs');

const student = {"name":"venisha","department":"ECE" , "Section" : "B","age":18} 


const jsonStr = JSON.stringify(student);

console.log('json object to string' , jsonStr);


const jsonstring = '{"name":"venisha","department":"ECE" , "Section" : "B","age":18}'
const jasonobj = JSON.parse(jsonstring);
console.log('json string to object ' , jsonStr);

//object array
const studentarray = [{"name":"venisha","department":"ECE" , "Section" : "B","age":18},{"name":"rini","department":"ECE" , "Section" : "A","age":18} ]
const jsonarrayStr = JSON.stringify(studentarray);

console.log('json object array to string' , jsonarrayStr);


const students = file.readFileSync('student.json');
const jsonsyring = JSON.parse(jsonStr);


//file.writeFileSync('student1.json', jsonStr);
file.appendFileSync('student2.json', jsonStr)

console.log(jsonsyring);