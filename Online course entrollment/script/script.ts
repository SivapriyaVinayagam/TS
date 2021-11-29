
class details{
    Name:string;
    Age:Number;
    MobNo:Number;
    UserId:string;
    constructor(Name:string,Age:Number,MobNo:Number,UserId:string){
        this.Name=Name;
        this.Age=Age;
        this.MobNo=MobNo;
        this.UserId=UserId;
     
     
    }
}
class coure{
    coursename:string;
    coursedate:9;
    constructor(coursename:string,coursedate:number){
        this.coursename=coursename;
        this.coursedate=9;
        
    }
}
let arraylist:Array<details>=[];
let courseList:Array<coure>=[];
function newuser(){
    let homePage = document.getElementById('homepage') as HTMLDivElement;
    let UserPage = document.getElementById('user') as HTMLDivElement;
    let loginpage = document.getElementById('log') as HTMLDivElement;
    let coursePage = document.getElementById('Course') as HTMLDivElement;
    let optionpage = document.getElementById('Option') as HTMLDivElement;

    homePage.style.display = "none";
    UserPage.style.display = "block";
    loginpage.style.display = "none";
    coursePage.style.display = "none";
    optionpage.style.display = "none";
}
function add(){
    let homePage = document.getElementById('homepage') as HTMLDivElement;
    let UserPage = document.getElementById('user') as HTMLDivElement;
    let Name = (document.getElementById('name') as HTMLInputElement).value;
    let age = (document.getElementById('age') as HTMLInputElement).value;
    let MobNo = (document.getElementById('mobno') as HTMLInputElement).value;
    let UserId=(document.getElementById('Userid') as HTMLInputElement).value;
    if(Name == ""|| age == ""|| MobNo ==""||UserId ==""){
        alert("Enter Above Details");
        homePage.style.display = "none";
    }
    else{
        arraylist.push(new details(Name,+age,+MobNo,UserId));

    }
    homePage.style.display = "block";
    UserPage.style.display = "none";
}
function login(){
    let homePage = document.getElementById('homepage') as HTMLDivElement;
    let UserPage = document.getElementById('user') as HTMLDivElement;
    let loginpage = document.getElementById('log') as HTMLDivElement;
    let coursePage = document.getElementById('Course') as HTMLDivElement;
    let optionpage = document.getElementById('Option') as HTMLDivElement;

    homePage.style.display = "none";
    UserPage.style.display = "none";
    loginpage.style.display = "block";
    coursePage.style.display = "none";
    optionpage.style.display = "none";

    let userId =(document.getElementById('userid') as HTMLInputElement).value;
    
    if(userId !="")
    {
        for(var i=0;i<=arraylist.length;i++){
            if(arraylist[i].UserId==userId){
                alert("Welcome")
                optionpage.style.display = "block";
            }
            else{
                alert("Enter valid UserId")
                optionpage.style.display = "none";

            }
        }

    }
    else{
        alert("Enter Your UserId");

    }

}
function Log(){
    let homePage = document.getElementById('homepage') as HTMLDivElement;
    let UserPage = document.getElementById('user') as HTMLDivElement;
    let loginpage = document.getElementById('log') as HTMLDivElement;
    let coursePage = document.getElementById('Course') as HTMLDivElement;
    let optionpage = document.getElementById('Option') as HTMLDivElement;

    homePage.style.display = "none";
    UserPage.style.display = "none";
    loginpage.style.display = "none";
    coursePage.style.display = "none";
    optionpage.style.display = "block";

    
}
function course(){
    let homePage = document.getElementById('homepage') as HTMLDivElement;
    let UserPage = document.getElementById('user') as HTMLDivElement;
    let loginpage = document.getElementById('log') as HTMLDivElement;
    let coursePage = document.getElementById('Course') as HTMLDivElement;
    let optionpage = document.getElementById('Option') as HTMLDivElement;

    homePage.style.display = "none";
    UserPage.style.display = "none";
    loginpage.style.display = "none";
    coursePage.style.display = "block";
    optionpage.style.display = "none";


}
function entroll(){
    let Course =(document.getElementById('cn') as HTMLInputElement).value;
    alert("You are Successfully entrolled")
    alert("After 9 days your course will")
}
function Entrolledcourse(){
   alert("Entrollment is empty")
    

}

