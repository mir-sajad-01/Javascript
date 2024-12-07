let student = {
    name : "sajad",
    age  : 21,
    gender : "male"
};
console.log(student);
console.log(student.name);
console.log(student["gender"]);
student["name"] = "toufeeq";
console.log(student);
student["name1"]= "sajad";
console.log(student);
delete student.name1;
console.log(student);

// objects of objects

let students = {
    student1 : {
        name : "sajad",
        age : 21
    },
    student2 : {
        name : "toufeeq",
        age : 22
    }
};
console.log(students);
console.log(students.student2.name);

// Array of objects

let classInfo = [
    {
        name : "sajad",
        grade : "A+"
    },
    {
        name : "toufeeq",
        grade : "B+"
    }
];
console.log(classInfo);
console.log(classInfo[1].grade);