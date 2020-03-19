var fs = require('fs')
var readlineSync = require('readline-sync')
var students =[]
students = JSON.parse(fs.readFileSync('./students.json',{encoding : 'utf8'}))
function showOption() {
    console.log('1 : Show all student')
    console.log('2 : Add a student')
    console.log('3 : Search student')
    console.log('4 :  Save & Exit')
    var option = readlineSync.question('Option ->')
    if(option === '1') {
        showStudents()
    }
    else if(option === '2') {
        addStudent()
    }
    else if(option === '3') {
        searchStudent()
    }
    else if(option === '4')  {
        saveAndExit()
    }
    else {
        showOption()
    }
}
function showStudents() {
    for(var x of students) {
        console.log(x.name,x.age)
    }
    showOption()
}
function addStudent() {
    var name = readlineSync.question('Name : ')
    var age = readlineSync.question('Age : ')
    var temp = {
        name : name,
        age :  parseInt(age)
    }
    students.push(temp)
    showOption()
}
function searchStudent() {
    var search  = readlineSync.question('Write a name of student : ')
    var result = students.filter(function(x) {
        return x.name.toLowerCase().indexOf(search.toLowerCase()) >-1
    })
    if(result.length !== 0) {
        for(var t of result) {
            console.log(t.name,t.age)
        }
    }
    else {
        console.log('No student found')
    }
    showOption()
}
function saveAndExit() {
    var content = JSON.stringify(students)
    fs.writeFileSync('./students.json',content,{encoding : 'utf8'})
    console.log('Saved')
}
showOption()