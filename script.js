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
    cost.subtotalStud = subtotal;
    cost.discountStud = discount;
    cost.totalStud = total;

    costRegistration.push(cost);

    /*console.log(costRegistration);*/

    createTable();
}

function createTable()
{
    var textTable = "<table class='table'><thead><tr><th scope='col'>Student's Name</th><th scope='col'>Subtotal Registration</th><th scope='col'>Discount</th><th scope='col'>Total Registration</th><th scope='col'>Delete Registration</th></tr></thead><tbody>";

    for(i=0; i < costRegistration.length; i++)
    {
        textTable += "<tr>";
        textTable += "<td>" + costRegistration[i].nameStud + "</td>";
        textTable += "<td>" + costRegistration[i].subtotalStud + "</td>";
        textTable += "<td>" + costRegistration[i].discountStud + "</td>";
        textTable += "<td>" + costRegistration[i].totalStud + "</td>";
        textTable += "<td><button class='btn btn-danger' onclick='delRegistration(" + i + ")'>Delete</button></td>";
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