function calculateAttendancePercentage(student) {
  const totalDays = student.attendance.length;
  const daysPresent = student.attendance.filter(day => day === true).length;
  const attendancePercentage = (daysPresent / totalDays) * 100;
  return attendancePercentage;
}


const students = [
    {
      name: 'Sophia',
      attendance: [true, true, false, true, true],
      testScores: [88, 92, 85, 78, 90]
    },
    {
      name: 'Mason',
      attendance: [true, true, true, true, false],
      testScores: [70, 82, 88, 75, 62]
    },
    {
      name: 'Isabella',
      attendance: [true, false, false, true, true],
      testScores: [68, 71, 70, 60, 78]
    },
    {
      name: 'Liam',
      attendance: [true, true, true, true, true],
      testScores: [90, 87, 92, 88, 95]
    },
    {
      name: 'Olivia',
      attendance: [true, true, true, true, false],
      testScores: [72, 78, 75, 80, 62]
    }
  ]

//calculate Attendance Percentage 
function getAttendanceRate(student) {
  const totalDays = student.attendance.length;
  const daysPresent = student.attendance.filter(day => day === true).length;
  const attendancePercentage = (daysPresent / totalDays) * 100;
  return attendancePercentage;
}

const attendancePercentages = students.map(student => ({
  name: student.name,attendancePercentage: calculateAttendancePercentage(student),
}));

console.log(attendancePercentages);

//calculate Average Test Score
function getAvgScore(students) {

}

//Identify Underperform student
function underPerformStudents(students) {

}