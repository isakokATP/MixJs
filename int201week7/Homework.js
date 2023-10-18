let firstname = fn;

class Person{
    constructor(firstname, lastname, dateofbirth) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dateofbirth = dateofbirth;
    }
    getFullName() {
        return `${this.lastname}, ${this.firstname}`
}
    getAge() {
        const milliToday = Date.now()
        const millibrithdate = this.dateofbirth.getTime()
        const diffmilli = milliToday - millibrithdate
        const dateOfDiffMilli = new Date(diffmilli)
        return dateOfDiffMilli.getFullYear()  - 1970
    }


    isEqual(anotherPerson) {
        return (
            this.firstname.toLowerCase() === 
                anotherPerson.firstname.toLowerCase() &&
            this.lastname.toLowerCase() ===
                anotherPerson.lastname.toLowerCase()
        );
    }

    toString() {
        return `${this.getFullName}`;
    }
}

const me = new Person('shisanucha', 'chengsamo', new Date(2000, 10, 1))


console.log(me.getAge());
console.log(me.getFullName());
console.log(me.toString());
console.log(me.isEqual(new Person('shisanuccha', 'sup', new Date(2003, 10, 24))));