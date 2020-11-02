function studentDetails(roll_number, name, gender,age) {
    let student = {}
    student.roll = roll_number;
    student.name = name;
    student.gender = gender;
    student.age = age;
    return student;
}

let stu1 = new studentDetails(1, "anish", "M", 21);
let stu2 = new studentDetails(2, "anandh", "M", 21);
let stu3 = new studentDetails(3, "Banu", "F", 23);
let stu4 = new studentDetails(4, "chandra", "F",22);
let stu5 = new studentDetails(5, "fayaz", "M",22);
let stu6 = new studentDetails(6, "gokul", "M",23);
let stu7 = new studentDetails(7, "kavi", "F",22);
let stu8 = new studentDetails(8, "lakshmi", "F",21);
let stu9 = new studentDetails(9, "mohana", "F",23);
let stu10 = new studentDetails(10, "siraj", "M",20);

let arr = [stu1, stu2, stu3, stu4, stu5, stu6, stu7, stu8, stu9, stu10];



function rollnum(roll_number){
if(roll_number==0 || roll_number>10){
    console.log("no candidate is available")
}else{
for (i = 0; i < 10; i++) {
    if (arr[i].roll == roll_number) {
        console.log(i+1);
        console.log(arr[i]);
    }
}
}
}


rollnum(10)







