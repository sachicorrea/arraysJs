var nameStudent = [];
var examStudent = [];
var actStudent = [];
var projStudent = [];

function include()
{
    /* Student's name */
    var inputText = document.getElementById("student").value;

    nameStudent.push(inputText);

    var pval = "";

    for(i=0; i < nameStudent.length; i++) {
        pval = pval + nameStudent[i] + "<br>";
    }

    document.getElementById("student-name").innerHTML = pval;

    /* Exams */
    var inputText2 = document.getElementById("exams").value;

    examStudent.push(inputText2);
    
    var pval2 = "";

    for(i=0; i < examStudent.length; i++) {
        pval2 = pval2 + examStudent[i] + "<br>";
    }

    document.getElementById("student-exams").innerHTML = pval2;

    /* Activities */
    var inputText3 = document.getElementById("activities").value;

    actStudent.push(inputText3);
    
    var pval3 = "";

    for(i=0; i < actStudent.length; i++) {
        pval3 = pval3 + actStudent[i] + "<br>";
    }

    document.getElementById("student-activity").innerHTML = pval3;

    /* Projects */
    var inputText4 = document.getElementById("projects").value;

    projStudent.push(inputText4);
    
    var pval4 = "";

    for(i=0; i < projStudent.length; i++) {
        pval4 = pval4 + projStudent[i] + "<br>";
    }

    document.getElementById("student-project").innerHTML = pval4;
}

/* 2nd Activity */

var costRegistration = new Array();

document.getElementById("update").style.display = "none";

function registration()
{
    var studentName = document.getElementById("admitted").value;
    
    var studentEcono = document.getElementById("economic-level").value;
   
    var studentAge = document.getElementById("student-age").value;

    var wageValue = document.getElementById("wage").value;

    var a;
    var total;

    if(studentEcono == 1)
    {
        a = 0.5;
    }
    else if(studentEcono == 2)
    {
        a = 1;
    }

    else if(studentEcono == 3)
    {
        a = 1.5;
    }

    else if(studentEcono >=4 && studentEcono <= 6)
    {
        a = 2;
    }

    else
    {
        alert("Enter a student socio-economical level between 1 and 6");
    }

    var subtotal;
    var discount;

    function studentRegistr(a,b)
    {
        subtotal = a * wageValue;
        discount = b * subtotal;
        return subtotal - discount;
    }

    if(studentAge < 25 && studentAge >= 0)
    {
        total = studentRegistr(a,0.1);
    }

    else
    {
        total = studentRegistr(a,0.2);
    }

    var cost = {};

    cost.nameStud = studentName;
    cost.economyStud = studentEcono;
    cost.ageStudent = studentAge;
    cost.valueWage = wageValue;
    cost.subtotalStud = subtotal;
    cost.discountStud = discount;
    cost.totalStud = total;

    costRegistration.push(cost);

    /*console.log(costRegistration);*/

    createTable();
}

function createTable()
{
    var textTable = "<table class='table'><thead><tr><th scope='col'>Student's Name</th><th scope='col'>Student's socio-economical Level</th><th scope='col'>Student's Age</th><th scope='col'>Minimun Wage</th><th scope='col'>Subtotal Registration</th><th scope='col'>Discount</th><th scope='col'>Total Registration</th><th scope='col'>Delete Registration</th><th scope='col'>Modify Registration</th></tr></thead><tbody>";

    for(i=0; i < costRegistration.length; i++)
    {
        textTable += "<tr>";
        textTable += "<td>" + costRegistration[i].nameStud + "</td>";
        textTable += "<td>" + costRegistration[i].economyStud + "</td>";
        textTable += "<td>" + costRegistration[i].ageStudent + "</td>";
        textTable += "<td>" + costRegistration[i].valueWage + "</td>";
        textTable += "<td>" + costRegistration[i].subtotalStud + "</td>";
        textTable += "<td>" + costRegistration[i].discountStud + "</td>";
        textTable += "<td>" + costRegistration[i].totalStud + "</td>";
        textTable += "<td><button class='btn btn-danger' onclick='delRegistration(" + i + ")'>Delete</button></td>";
        textTable += "<td><button class='btn btn-info' onclick='modifyRegistration(" + i + ")'>Modify</button></td>";
        textTable += "</tr>";
    }

    textTable = textTable + "</tbody></table>";

    document.getElementById("table-registration").innerHTML = textTable;
}

function delRegistration(position)
{
    costRegistration.splice(position,1);
    createTable();
}

function modifyRegistration(position)
{
    document.getElementById("admitted").value = costRegistration[position].nameStud;
    
    document.getElementById("economic-level").value = costRegistration[position].economyStud;
   
    document.getElementById("student-age").value = costRegistration[position].ageStudent;

    document.getElementById("wage").value = costRegistration[position].valueWage;

    document.getElementById("update").style.display = "block";

    updatePosition = position;
}

function updateReg()
{
    var studentName1 = document.getElementById("admitted").value;
    
    var studentEcono1 = document.getElementById("economic-level").value;
   
    var studentAge1 = document.getElementById("student-age").value;

    var wageValue1 = document.getElementById("wage").value;

    var a;
    var total;

    if(studentEcono1 == 1)
    {
        a = 0.5;
    }
    else if(studentEcono1 == 2)
    {
        a = 1;
    }

    else if(studentEcono1 == 3)
    {
        a = 1.5;
    }

    else if(studentEcono1 >=4 && studentEcono1 <= 6)
    {
        a = 2;
    }

    else
    {
        alert("Enter a student socio-economical level between 1 and 6");
    }

    var subtotal;
    var discount;

    function studentRegistr(a,b)
    {
        subtotal = a * wageValue1;
        discount = b * subtotal;
        return subtotal - discount;
    }

    if(studentAge1 < 25 && studentAge1 >= 0)
    {
        total = studentRegistr(a,0.1);
    }

    else
    {
        total = studentRegistr(a,0.2);
    }

    costRegistration[updatePosition].nameStud = studentName1;
    costRegistration[updatePosition].economyStud = studentEcono1;
    costRegistration[updatePosition].ageStudent = studentAge1;
    costRegistration[updatePosition].valueWage = wageValue1;
    costRegistration[updatePosition].subtotalStud = subtotal;
    costRegistration[updatePosition].discountStud = discount;
    costRegistration[updatePosition].totalStud = total;


    document.getElementById("update").style.display = "none";

    createTable(costRegistration);
}

function studentSearch()
{
    var search1 = document.getElementById("searchStud").value;

    if(search1 == "")
    {
        createTable();
    }

    else
    {
        filter = new Array();

        for(i=0; i < costRegistration.length; i++)
        {
            if(costRegistration[i].nameStud.search(search1) != -1)
            {
                /*console.log(costRegistration[i].nameStud.search(search1)); */
                filter.push(costRegistration[i]);
            }
        }
        /*console.log(filter);*/
        StudentFiltered(filter);
    }
}

function StudentFiltered(RegistrValue)
{
    var textTable = "<table class='table'><thead><tr><th scope='col'>Student's Name</th><th scope='col'>Student's socio-economical Level</th><th scope='col'>Student's Age</th><th scope='col'>Minimun Wage</th><th scope='col'>Subtotal Registration</th><th scope='col'>Discount</th><th scope='col'>Total Registration</th><th scope='col'>Delete Registration</th><th scope='col'>Modify Registration</th></tr></thead><tbody>";

    for(i=0; i < RegistrValue.length; i++)
    {
        textTable += "<tr>";
        textTable += "<td>" + RegistrValue[i].nameStud + "</td>";
        textTable += "<td>" + RegistrValue[i].economyStud + "</td>";
        textTable += "<td>" + RegistrValue[i].ageStudent + "</td>";
        textTable += "<td>" + RegistrValue[i].valueWage + "</td>";
        textTable += "<td>" + RegistrValue[i].subtotalStud + "</td>";
        textTable += "<td>" + RegistrValue[i].discountStud + "</td>";
        textTable += "<td>" + RegistrValue[i].totalStud + "</td>";
        textTable += "<td><button class='btn btn-danger' onclick='delRegistration(" + i + ")'>Delete</button></td>";
        textTable += "<td><button class='btn btn-info' onclick='modifyRegistration(" + i + ")'>Modify</button></td>";
        textTable += "</tr>";
    }

    textTable = textTable + "</tbody></table>";

    document.getElementById("table-registration").innerHTML = textTable;
}

/* 3rd Activity */

var dataEmpl = new Array();

document.getElementById("updSalary").style.display = "none";

function totalSalary()
{
    var nameEmpl = document.getElementById("employee-name").value;
    
    var categoryEmpl = document.getElementById("category").value;
   
    var timeEmpl = document.getElementById("time").value;

    var a;

    if(timeEmpl <= 10)
    {
        a = 1.5;
    }
    else if(timeEmpl > 10)
    {
        a = 1.8;
    }

    else
    {
        alert("Enter a employee's time over zero");
    }

    /*console.log(a);*/

    switch (categoryEmpl)
    {
        case "Asistencial":
            salaryEmpl = 600000;
            break;
        
        case "Tecnico":
            salaryEmpl = 900000;
            break;

        case "Profesional":
            salaryEmpl = 1200000;
            break;

        case "Asesor":
            salaryEmpl = 1500000;
        break;
    }

    /*console.log(salaryEmpl);*/

    var final_salary = a * salaryEmpl;

    /*console.log(final_salary);*/

    var dataBonus = {};

    dataBonus.name_Employee = nameEmpl;
    dataBonus.category_empl = categoryEmpl;
    dataBonus.time_empl = timeEmpl;
    dataBonus.salary_Employee = salaryEmpl;
    dataBonus.salary_Total = final_salary;

    dataEmpl.push(dataBonus);

    console.log(dataEmpl);

    createTableSalaries();
}

function createTableSalaries()
{
    var textTable = "<table class='table'><thead><tr><th scope='col'>Employee's Name</th><th scope='col'>Employee's Category</th><th scope='col'>Employee's Time in Company</th><th scope='col'>Employee's Salary</th><th scope='col'>Total Salary</th><th scope='col'>Delete Registration</th><th scope='col'>Modify Registration</th></tr></thead><tbody>";

    for(i=0; i < dataEmpl.length; i++)
    {
        textTable += "<tr>";
        textTable += "<td>" + dataEmpl[i].name_Employee + "</td>";
        textTable += "<td>" + dataEmpl[i].category_empl + "</td>";
        textTable += "<td>" + dataEmpl[i].time_empl + "</td>";  
        textTable += "<td>" + dataEmpl[i].salary_Employee + "</td>";
        textTable += "<td>" + dataEmpl[i].salary_Total + "</td>";
        textTable += "<td><button class='btn btn-danger' onclick='delSalaryRegistr(" + i + ")'>Delete</button></td>";
        textTable += "<td><button class='btn btn-danger' onclick='modSalaryRegistr(" + i + ")'>Modify</button></td>";
        textTable += "</tr>";
    }

    textTable = textTable + "</tbody></table>";

    document.getElementById("table-salaries").innerHTML = textTable;
}

function delSalaryRegistr(position)
{
    dataEmpl.splice(position,1);
    createTableSalaries();
}

function modSalaryRegistr(position)
{
    document.getElementById("employee-name").value = dataEmpl[position].name_Employee;
    
    document.getElementById("category").value = dataEmpl[position].category_empl;
   
    document.getElementById("time").value = dataEmpl[position].time_empl;

    document.getElementById("updSalary").style.display = "block";

    updatePosition1 = position;
}

function updateSalary()
{
    nameEmpl1 = document.getElementById("employee-name").value;
    
    categoryEmpl1 = document.getElementById("category").value;
   
    timeEmpl1 = document.getElementById("time").value;
    
    var a;

    if(timeEmpl1 <= 10)
    {
        a = 1.5;
    }
    else if(timeEmpl1 > 10)
    {
        a = 1.8;
    }

    else
    {
        alert("Enter a employee's time over zero");
    }

    switch (categoryEmpl1)
    {
        case "Asistencial":
            salaryEmpl = 600000;
            break;
        
        case "Tecnico":
            salaryEmpl = 900000;
            break;

        case "Profesional":
            salaryEmpl = 1200000;
            break;

        case "Asesor":
            salaryEmpl = 1500000;
        break;
    }

    var final_salary = a * salaryEmpl;

    dataEmpl[updatePosition1].name_Employee = nameEmpl1;
    dataEmpl[updatePosition1].category_empl = categoryEmpl1;
    dataEmpl[updatePosition1].time_empl = timeEmpl1;
    dataEmpl[updatePosition1].salary_Employee = salaryEmpl;
    dataEmpl[updatePosition1].salary_Total = final_salary;

    document.getElementById("updSalary").style.display = "none";

    createTableSalaries(dataEmpl);
}

function employeeSearch()
{
    var search2 = document.getElementById("searchEmpl").value;

    if(search2 == "")
    {
        createTableSalaries();
    }

    else
    {
        filterEmpl = new Array();

        for(i=0; i<dataEmpl.length; i++)
        {
            if(dataEmpl[i].name_Employee.search(search2) != -1)
            {
                /*console.log(dataEmpl[i].name_Employee.search(search2));*/
                filterEmpl.push(dataEmpl[i]);

            }
        }

        /*console.log(filterEmpl);*/
        TableSalariesFiltered(filterEmpl);
    }
}

function TableSalariesFiltered(dataEmpl)
{
    var textTable = "<table class='table'><thead><tr><th scope='col'>Employee's Name</th><th scope='col'>Employee's Category</th><th scope='col'>Employee's Time in Company</th><th scope='col'>Employee's Salary</th><th scope='col'>Total Salary</th><th scope='col'>Delete Registration</th><th scope='col'>Modify Registration</th></tr></thead><tbody>";

    for(i=0; i < dataEmpl.length; i++)
    {
        textTable += "<tr>";
        textTable += "<td>" + dataEmpl[i].name_Employee + "</td>";
        textTable += "<td>" + dataEmpl[i].category_empl + "</td>";
        textTable += "<td>" + dataEmpl[i].time_empl + "</td>";  
        textTable += "<td>" + dataEmpl[i].salary_Employee + "</td>";
        textTable += "<td>" + dataEmpl[i].salary_Total + "</td>";
        textTable += "<td><button class='btn btn-danger' onclick='delSalaryRegistr(" + i + ")'>Delete</button></td>";
        textTable += "<td><button class='btn btn-danger' onclick='modSalaryRegistr(" + i + ")'>Modify</button></td>";
        textTable += "</tr>";
    }

    textTable = textTable + "</tbody></table>";

    document.getElementById("table-salaries").innerHTML = textTable;
}