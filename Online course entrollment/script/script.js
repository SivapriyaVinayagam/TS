// let autoincrementUserId=1000;
// let autoincrementCourseId=100;
var details = /** @class */ (function () {
    function details(Name, Age, MobNo, UserId) {
        this.Name = Name;
        this.Age = Age;
        this.MobNo = MobNo;
        this.UserId = UserId;
    }
    return details;
}());
var coure = /** @class */ (function () {
    function coure(coursename, courseid) {
        this.coursename = coursename;
        this.courseid = courseid;
    }
    return coure;
}());
var arraylist = [];
var courseList = [];
function newuser() {
    var homePage = document.getElementById('homepage');
    var UserPage = document.getElementById('user');
    var loginpage = document.getElementById('log');
    var coursePage = document.getElementById('Course');
    var optionpage = document.getElementById('Option');
    homePage.style.display = "none";
    UserPage.style.display = "block";
    loginpage.style.display = "none";
    coursePage.style.display = "none";
    optionpage.style.display = "none";
}
function add() {
    var homePage = document.getElementById('homepage');
    var UserPage = document.getElementById('user');
    var Name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var MobNo = document.getElementById('mobno').value;
    var UserId = document.getElementById('Userid').value;
    if (Name == "" || age == "" || MobNo == "" || UserId == "") {
        alert("Enter Above Details");
        homePage.style.display = "none";
    }
    else {
        arraylist.push(new details(Name, +age, +MobNo, UserId));
    }
    homePage.style.display = "block";
    UserPage.style.display = "none";
}
function login() {
    var homePage = document.getElementById('homepage');
    var UserPage = document.getElementById('user');
    var loginpage = document.getElementById('log');
    var coursePage = document.getElementById('Course');
    var optionpage = document.getElementById('Option');
    homePage.style.display = "none";
    UserPage.style.display = "none";
    loginpage.style.display = "block";
    coursePage.style.display = "none";
    optionpage.style.display = "none";
    var userId = document.getElementById('userid').value;
    if (userId != "") {
        for (var i = 0; i <= arraylist.length; i++) {
            if (arraylist[i].UserId == userId) {
                alert("Welcome");
                optionpage.style.display = "block";
            }
            else {
                alert("Enter valid UserId");
                optionpage.style.display = "none";
            }
        }
    }
    else {
        alert("Enter Your UserId");
    }
}
function Log() {
    var homePage = document.getElementById('homepage');
    var UserPage = document.getElementById('user');
    var loginpage = document.getElementById('log');
    var coursePage = document.getElementById('Course');
    var optionpage = document.getElementById('Option');
    homePage.style.display = "none";
    UserPage.style.display = "none";
    loginpage.style.display = "none";
    coursePage.style.display = "none";
    optionpage.style.display = "block";
}
function course() {
    var homePage = document.getElementById('homepage');
    var UserPage = document.getElementById('user');
    var loginpage = document.getElementById('log');
    var coursePage = document.getElementById('Course');
    var optionpage = document.getElementById('Option');
    homePage.style.display = "none";
    UserPage.style.display = "none";
    loginpage.style.display = "none";
    coursePage.style.display = "block";
    optionpage.style.display = "none";
}
function entroll() {
    var Course = document.getElementById('cn').value;
    alert("You are Successfully entrolled");
    alert("After 9 days your course will completed");
}
