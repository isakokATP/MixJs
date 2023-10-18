// function arrayStat(arr) {
//     //min.max,sum,avg
//     let min = arr[0]
//     let max = arr[0]
//     let sum = 0
//     let avg = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum+arr[i]
//         if(arr[i]<min)
//             min=arr[i]
//         if(arr[i]>max)
//             max=arr[i]
//     }
//     avg = sum/arr.length
//     return {max:max, min:min, sum:sum, avg: avg}
// }
// console.log(arrayStat([1,2,3,4,5]));
// console.log(arrayStat([2,4,6,8,10]));


// const book = {isbn: '123456789', title: ' Intruduction', 
// author:{ firstname: 'Adam', lastname: 'lee'}, 
// publisher:{name: 'pheonix', location: {name: 'silicon', country: 'USA'}}
// }
// const { title } = book
// console.log(title);

// const { publisher: publisherName, isbn: isbn_book} = book
// console.log(publisherName);
// console.log(isbn_book);

// const {
//     publisher: { location:{country} }
// } = book
// console.log(country);

//function declaration
function sum(n1, n2) {
    return n1 + n2
  }
  //arrow function with one statement
  const sum1 = (n1, n2) => n1 + n2
  //arrow function with one statement
  const sum2 = (n1, n2) => {
    return n1 + n2
  }
  //arrow function with multiple statements
  const sum3 = (n1, n2) => {
    let result = 0
    result = n1 + n2
    return result
  }

const echo = function(m) {return m}
console.log(echo('INT201'));

const fruits = ['apple', 'mango', 'orage']

fruits.forEach ( (fruits) => console.log(fruits.charAt(0)))

let allfruits = ''
fruits.forEach((fruits) => (allfruits += fruits + ' '))
console.log(allfruits);

const student = [{id: 1, firstName: 'April', lastName: 'cute'}, 
                {id: 2, firstName: 'October', lastName: 'lee' },
                {id:3, firstName: 'May', lastName: 'charm'}
]

const cuteStudent = student.filter((student) => 
    student.lastName.toLowerCase().startsWith('cute')
)
console.log(cuteStudent);

const Destudent = student.filter((student) =>
    student.firstName.toLowerCase().includes('cu') ||
    student.lastName.toLowerCase().includes('cu')
    )
console.log(Destudent);


//Map method
const ids = student.map((student) => student.id)
console.log(ids);

//return all student 'fullname, fullname format is "lastname, firstname"
const fullName = student.map((student) => `${student.lastName}, ${student.firstName}`)
console.log(fullName);

//return all student id in the format 'entry year' follows with student id, for example, 
//{id: 1, firtsname: 'somsak', lastname: 'jaidee'} => 20231

const newids = student.map((student) => {
    const currentYear = new Date(Date.now()).getFullYear()
    return currentYear + ' ' + student.id
})
console.log(newids);

//find
const Aprfirstname = student.find((student) => 
student.firstName.toLowerCase().startsWith('apr'))
console.log(Aprfirstname);

//return boolean that check at least one student firstname ends with 'sak'
console.log(
    student.some((student) => student.firstName.toLowerCase().endsWith('apr'))
);