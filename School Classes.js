function processSchool() {
    let school = {
        name: "Greenfield Academy",
        classes: [
            { className: "JSS 1", students: 45 },
            { className: "JSS 2", students: 38 },
            { className: "JSS 3", students: 50 },
            { className: "SS 1", students: 42 },
            { className: "SS 2", students: 36 },
            { className: "SS 3", students: 29 }
        ]
    };
    
    // Print school name
    console.log("School:", school.name);
    
    // Print each class name and student count
    let totalStudents = 0;
    console.log("\nClasses:");
    for (let i = 0; i < school.classes.length; i++) {
        const classInfo = school.classes[i];
        console.log(`${classInfo.className}: ${classInfo.students} students`);
        totalStudents += classInfo.students;
    }
    
    console.log("\nTotal students in school:", totalStudents);
}
processSchool();