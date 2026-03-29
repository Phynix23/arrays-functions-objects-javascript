function processEmployees() {
    let employees = [
        { name: "Tunde", role: "Manager", salary: 350000 },
        { name: "Sola", role: "Developer", salary: 280000 },
        { name: "Kemi", role: "Designer", salary: 220000 },
        { name: "Femi", role: "Manager", salary: 370000 },
        { name: "Lola", role: "Developer", salary: 260000 }
    ];
    
    // Print all developers
    console.log("Developers:");
    let totalSalary = 0;
    let lowestSalary = employees[0].salary;
    let lowestPaidEmployee = employees[0].name;
    
    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];
        totalSalary += employee.salary;
        
        if (employee.role === "Developer") {
            console.log(`- ${employee.name}: ₦${employee.salary}`);
        }
        
        if (employee.salary < lowestSalary) {
            lowestSalary = employee.salary;
            lowestPaidEmployee = employee.name;
        }
    }
    
    console.log("Total Salary Bill: ₦" + totalSalary);
    console.log(`Employee with lowest salary: ${lowestPaidEmployee} (₦${lowestSalary})`);
}
processEmployees();