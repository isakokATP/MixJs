// 1.create object by liternal {}
const student = {id: 65130500016, firstName: 'shisanucha', lastName: 'Chengsamo'}
console.log(student);
console.log(Object.values(student));
console.log(Object.keys(student));
console.log(typeof student);
console.log(Object.prototype.isPrototypeOf(student));
console.log(Date.prototype.isPrototypeOf(student));

const lecture = {id: 1001, name: 'somchai', last: 'jaidee'}
console.log(Object.prototype.isPrototypeOf(lecture));

// dynamic properties //get property values
const someoneID = student.id //object.key
const someoneFirstName = student['firstName'] // object["key"]



// set property
student.id = 65130500016
student['firstName'] = 'john'
console.log(student.id);
console.log(student['firstName']);


//dynamics properties
student['email'] = 'Somchai@it.kmutt.ac.th'
student.address = 'bangkok'
console.log(student);

//delete
delete student.address
console.log(student);

//nested object
student.advisor = lecture
console.log(student);

console.log(student.advisor.name);

student.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}  // this. is current values
console.log(student.getFullName);
console.log(student.getFullName());

//2. create Object with constructor function
function Person(id, firstname, lastname) {
    this.id=id
    this.fullname=`${firstname} ${lastname}`
}

const p1=new Person(111, 'Mary', 'Jo')
const p2=new Person(222, 'may', 'Xuan')
const p3=new Person(333, 'hiya', 'uncle')
console.log(p1);
console.log(p2);
console.log(p3);
console.log(Object.prototype.isPrototypeOf(p1));
console.log(Object.prototype.isPrototypeOf(p2));
console.log(Object.prototype.isPrototypeOf(p3));


//3.create object with class

class Student{
    constructor(id, fn, ln) {
        this.id=id
        this.fn=fn
        this.ln=ln
    }
    getFullName() {
        return `${this.fn} ${this.ln}`
    }
}

const st1=new Student(1, 'Tim', 'cook')
const st2=new Student(2, 'steve', 'job')
console.log(st1);
console.log(st2);
console.log(st1.getFullName());
console.log(st2.getFullName());
console.log(Object.prototype.isPrototypeOf(st1)); //true
console.log(Object.prototype.isPrototypeOf(st2)); //true



//4.create Object by using Object.create()
const undergratSt1 = Object.create(st1)
console.log(undergratSt1);
console.log(undergratSt1.id);
console.log(undergratSt1.fn);
console.log(undergratSt1.ln);
console.log(Object.prototype.isPrototypeOf(undergratSt1));
console.log(Student.prototype.isPrototypeOf(undergratSt1));


const circle = {
    radius: 2,
    // area: function() {
    //     return Math.PI * Math.pow(this.radius, 2)
    // }
    //remove: function
    area() {
        return Math.PI * Math.pow(this.radius, 2)
    },
    // same function
    equals(compareCircle) {
    return this.radius === compareCircle.radius
    }
}



console.log(circle);
console.log(circle.radius);
console.log(circle.area());
console.log(circle.equals({ radius: 2}));
console.log(circle.equals({ radius: 3}));


console.log(JSON.stringify(circle));
if(JSON.stringify(circle) === '{}') {
    console.log('empty objetc');
} else console.log('not empty object');  