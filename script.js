var nameStudent = [];
var examStudent = [];
var actStudent = [];
var projStudent = [];

function scores(){

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

    /* Activities */
    var inputText4 = document.getElementById("projects").value;

    projStudent.push(inputText4);
    
    var pval4 = "";

    for(i=0; i < projStudent.length; i++) {
        pval4 = pval4 + projStudent[i] + "<br>";
    }

    document.getElementById("student-project").innerHTML = pval4;
}