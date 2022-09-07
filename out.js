var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Utils;
(function (Utils) {
    var Parent = /** @class */ (function () {
        function Parent() {
        }
        Parent.prototype.setName = function (name) {
            return this.name = name;
        };
        return Parent;
    }());
    Utils.Parent = Parent;
})(Utils || (Utils = {}));
// Typescript   vs    Javascript
//  type define (typedef) kr skte hain typescript mein unlike JS 
// hm class functions variables define kr skte hain 
// basically ek line mein bole toh typescript is an OOP's programming language umlike JS
// suports ECMAscript
// hm log ts ko directly run nhi kr skte 
// ts ko phle js mein convert krna with tsc (typescript compiler) and then add it to html file and run it
// run a simpe program
// var a = "This is Anubhav";
// console.warn(a);
/////////////////////////////////////////////////////////////
// class
// class App{
//     test(){
//         console.warn("test function is working...");
//     }
// }
// let a1 = new App();
// a1.test();
/////// tips ////////////
// 1. What is duplicate identifier ?
// toh yahan pr App ek class hain and app.js mein App ek var hai ..toh agar yeh APP
// alag alag files mein hain toh kyun duplicate identifier ka error aah raha hai ?
// toh basically agar hm js ki files ek hi folder mein rakhte hain toh woh files as a script 
// kaam krti hain jisse ki agar common names honge toh show krega error 
// solution ?
// uss file ko MODULAR APPROACH mein rakhna hai 
// use export{}
///////////////////////////////////////////////////////////////////
// export{}
// class App{
//     test(){
//         console.warn("test function is working...");
//     }
// }
// let a1 = new App();
// a1.test();
////////////////////////////////////////////////////////////////////
// what is watch ?
// watch basically avoid krega kya ?
// baar baar joh hm command run krte hain naa powershell mein usko avoid krne k liye use below line
// tsc app.tc --watch
// yeh apke changes ko watch krega 
//////////////////////////////////////////////////////
// export{}
// class App{
//     test(){
//         console.warn("test function is working fine...");
//     }
// }
// let x = new App();
// x.test();
//////////////////////////////////////////////////////
// Now apko browser mein baar chalane ki jagay app shell mein bhi console krwa skte ho
// by using : node app.js 
// agar app button yah events use kr rhe ho toh toh fir apko browser mein hi run krana hoga 
//////////////////////////////////////////////////////
//  type in typescript ?
// to define the type of a variable ,functions
// like in c++, 
// int a=10;
// var a:number = 10;
// console.warn(a);
// var a:string = 10;
// console.warn(a);            ---------error since 
//type 10 != type string 
/////////////////////////////////////////////////////////////////
// arrays in ts/php 
// arrays in ts/php can contain different data types in the same array unlike in c++ and java
// are called mix array 
// export{}
// let data = ['this','is','anubhav'];
// console.log(data);
// export{}
// let data = ['this','is','anubhav',100];
// data.push(true)
// console.log(data); --------------------error
////----toh mixed array k andhar koi data type push krne k liye yeh zaruri hai hai ki 
// voh vala data type exist krna chahiye apne array mein
// for example :
// export{}
// let data = ['this','is','anubhav',10];
// data.push(100);
// console.log(data);
// export{}
// let data = ['this','is','anubhav',10,true];
// data.push(true);
// console.log(data);
// export{}
// let data = ['this','is','anubhav',10,true];
// data[3]=true;
// console.log(data);
// export{}
// let data:string = ['this','is','anubhav',10,true];
// data[3]=true;
// console.log(data);
// ------------------------->error 
// export{}
// let data:string[] = ['this','is','anubhav'];
// console.log(data);
// /-----mixed array k andhar app ek particular data type of array define nhi kr skte else it will resuls into error 
/////////////////////////////////////////////////
// default typed object
// export{}
// let users = {
//     name:'Anubhav',
//     age:19,
//     location:'India'
// }
// users.location = 300;
//  ----------since it is a default typed object 
// console.log(users);
// export{}
// let users = {
//     name:'Anubhav',
//     age:19,
//     location:'India'
// }
// users.name='Anu';
// console.log(users)
// ---------------custom typed object 
/////////what is custom typed object ?
// hmm kisi bhi object k data members ka data type phle se hi define kr skte hain
// for ex:
// export{}
// interface usersTyped{
//     name:string,
//     age:number,
//     location:string
// }
// let users:usersTyped = {
//     name:'Anubhav',
//     age:19,
//     location:'India'
// }
// console.log(users)
///////////////////////////////////////////////////////////////////
// export{}
// interface usersTyped{
//     name:number,
//     age:number,
//     location:string
// }
// let users:usersTyped = {
//     name:'Anubhav',
//     age:19,
//     location:'India'
// }
// console.warn(users)
// ----------------------------------> error since it is customed typed array 
///////////what is any?
// in custom typed array if you are not sure about the datatype of any particular data member of an object use "any" there
//for ex:
// export{}
// interface usersTyped{
//     name:string,
//     age:number,
//     location:any
// }
// let users:usersTyped = {
//     name:'Anubhav',
//     age:19,
//     location:100
// }
// console.warn(users)
// now if you are not sure about the data types of the entire object data members then use "any"like as below:
// export{}
// let users:any= {
//     name:'Anubhav',
//     age:19,
//     location:100
// }
// users.location=1000;
// console.warn(users)
//////////////////////////
// What is union ?
// union basically help krta hai multiple type k data types ko ek hi varibale ko assign krne mein
//for ex:
// export{}
// let a = 'Anubhav';
// console.warn(a);
// export{}
// let a:string = 'Anubhav';
// console.warn(a);
// export{}
// let a:string | number | boolean= 'Anubhav';
// a=100;
// a=true;
// console.warn(a);
//////////////////
// what is Interface ?
// In a class or an object we have multiple properties which have different data types so we cant define the 
// the data type of an class or an object particularly 
// toh hm kya krte hain uss class yah object ki properties k data types hm phle sehi define kr skte hain
// using interface which is a template of the data types of the properties if a class or an object.
////////////////////////////////////////////////
// using interface in objects \
// export{}
// interface userType{
//     name:string ,
//     age:number
// }
// let users:userType  = {
//     name:"Anubhav",
//     age:19
// }
// console.warn(users);
///////////////////////////////////
// interface using objects with functions
// export{}
// interface userType{
//     name:string ,
//     age:number,
//     getName : ()=>string;
// }
// let users:userType  = {
//     name:"Anubhav",
//     age:19,
//     getName : function(){ 
//         return 'Anubhav Agrawal';
//     }
// }
// console.warn(users.getName());
////////////////////////////////////////////////////////////////
// function data type
// export{}
// function calc(a):number
// {
//     return 'hello';
// }
// console.warn(calc(10));
// ---------> error 
// export{}
// function calc(a:number):number
// {
//     return a;
// }
// console.warn(calc(10));
// export{}
// function calc(a:number):number
// {
//     return a;
// }
// console.warn(calc('10'));
// --------->error 
// export{}
// function calc(a:number,b:number):number
// {
//     return a+b;
// }
// console.warn(calc(10,20));
////////////////////////////////////////////
// if may be i can pass one value in function
// in thatx case i can use "?" and apply ternary condition in return statement accordingly
// export{}
// function calc(a:number,b?:number):number
// {
//     return b?a+b:a;
// }
// console.warn(calc(10));
///////////////////////////////////////////
// classes in  typescript 
// export{}
// class App {
//     name = 'Anubhav Agrawal'
//     getName()
//     {
//         console.log(this.name);
//     }
// }
// let a1 = new App();
// a1.getName();
// export{}
// class App {
//     name = 'Anubhav Agrawal'
//     constructor(){
//         console.log('constructor called...');
//     }
//     getName()
//     {
//         console.log(this.name);
//     }
// }
// let a1 = new App();
// a1.getName();
// export{}
// class App {
//     name;
//     constructor(name){
//         this.name=name;
//     }
//     getName()
//     {
//         console.log(this.name);
//     }
// }
// let a1 = new App('Anubhav');
// a1.getName();
// export{}
// class App {
//     name;
//     constructor(name:string){
//         this.name=name;
//     }
//     getName():string                    // getName():void ---> if nothing is to be return
//     {
//         // console.log(this.name);
//         return this.name;
//     }
// }
// let a1 = new App('Anubhav Agrawal');
// console.warn(a1.getName());
////////////////////////////////
// ---------------------------> Inheritance in Typescript
// export{}
// class App{
//     name;
//     setName(name)
//     {
//       this.name=name;
//     }
// }
// class childApp extends App {
//     getName()
//     {
//         return this.name ;
//     }
// }
// let a1 = new childApp();
// a1.setName('Peter');
// console.warn(a1.getName());
/////////////////////////////////////////////////////////
// what is namespace ?
// a piece of code which is inter-related 
// like details about the user , his username ,password, email id....
///////////////////// namespace hamesha export k saath use hota hai
/////////////////   namesapce ko run krne k liye hm hamesha dusri command use krte hain
// tsc app.ts --outfile out.js
// export{}
// namespace Utils{
//     export class users{
//         name='Anubhav Agrawal';
//         getName(){
//             return 'Hey there !';
//         }
//     }
// }
// let a1 = new Utils.users();
// console.warn(a1.getName());
/////////// importing from Utiles file a parent class 
// /// <reference path="./utils.ts"/>
// namespace Utils{
//     export class users extends Parent{
//         getName(){
//             return this.name;
//         }
//     }
// }
// let a1 = new Utils.users();
// a1.setName('Anubhav Set Name');
// console.warn(a1.getName());
//////////// how to make sure that function getName must be called and this is also called using using interface
/// <reference path="./utils.ts"/>
var Utils;
(function (Utils) {
    var users = /** @class */ (function (_super) {
        __extends(users, _super);
        function users() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        users.prototype.getName = function () {
            return this.name;
        };
        return users;
    }(Utils.Parent));
    Utils.users = users;
})(Utils || (Utils = {}));
var a1 = new Utils.users();
a1.setName('Anubhav implemented interface and class within namespace');
console.warn(a1.getName());
