function claculateStudentAverages() {
  const students = [
    { name: "Alice", math: 85, english: 92, science: 78 },
    { name: "Bob", math: 90, english: 88, science: 95 },
    { name: "Charlie", math: 78, english: 85, science: 80 },
    { name: "David", math: 92, english: 90, science: 88 },
    { name: "Eve", math: 88, english: 91, science: 84 },
    {name: "Frank", math: 80, english: 87, science: 82},
    {name: "Grace", math: 91, english: 89, science: 90},
    {name: "Heidi", math: 87, english: 90, science: 85},
    {name: "Ivan", math: 89, english: 88, science: 92},
    {name: "Judy", math: 84, english: 86, science: 80}
  ];

  let highestAverage = 0;
  let topStudent = "";

  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const average = (student.math + student.english + student.science) / 3;
    console.log(`${student.name}'s average score: ${average.toFixed(2)}`);

    if (average > highestAverage) {
      highestAverage = average;
      topStudent = student.name;
    }
  }

  console.log(`The student with the highest average score is ${topStudent} with an average of ${highestAverage.toFixed(2)}`);
}
claculateStudentAverages();