const studentScores = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 68 },
    { name: 'David', score: 55 },
    { name: 'Eve', score: 78 }
  ]
  const getPassingNames = (students) => {
    const studentPass = []
    students.forEach((student) => {
        if (student.score >= 70) studentPass.push(student.name.toUpperCase())
    })
    return studentPass
  }
  const passingNames = getPassingNames(studentScores)
  console.log(passingNames)

// const name = ['alice', 'john', 'Bob', 'Ann']
// const isStartWithALetter = name.every( (name) => 
//     name.toLowerCase().startsWith('a')
// )
// console.log(isStartWithALetter);

// const isSomeStartWithALetter = name.some( (name) => 
//     name.toLowerCase().startsWith('a')
// )
// console.log(isSomeStartWithALetter);

// const nums = [5,2,3,4,7]
// const total = nums.reduce((sum, nums) => sum + nums, 0 )
// console.log(total);
// const total2 = nums.reduce( (sum, num) => sum * num)
// console.log(total2);


// //return value that contain the first character of all names
// const names = ['Alice', 'Bob', 'Ann', 'Catch'] //'ABAC'
// const firtLetter = names.reduce( (sum, names) => sum + names.charAt(0),'')
// console.log(firtLetter);

// //return total price
// const buyProducts = [
//     {price: 50, quantity: 2},
//     {price: 299, quantity: 10},
//     {price: 15, quantity: 5}
// ]
// const totalPrice = buyProducts.reduce( (total,total2) => total + total2.price * total2.quantity,1)
// console.log(totalPrice);


// const nums = [10,3,75,1,30,100]
// //remove 75,1,30
// const removeN = nums.splice(2, 3)
// console.log(removeN);

// //2.splice to add new elements
// const addEles = nums.splice(2, 0, 111, 555, 888)
// console.log(addEles);
// console.log(nums);

//replace negative numbers to zero
// const nums = [-5, -6, 7, 8, 9, -1, 0]
// const replaceNumber = nums.map((num) => 

// )
// console.log(replaceNumber);

// const msg = 'Today is a present'
// console.log(msg.includes('Re'));//flase
// console.log(msg.includes('re'));//true
// console.log(msg.includes('day'));//true
// console.log(msg.includes('present'));//true

const students = [
    {id: 1, name: 'John Lee'},
    {id: 2, name: 'Adam smith'}
]
//sorting by id (ascending, descending)
console.log(students.sort((a, b) => a.id - b.id));
console.log(students.sort((student1, student2) => student2.id - student1.id));
//sorting by name (ascending, descending)