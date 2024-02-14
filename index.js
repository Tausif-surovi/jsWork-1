console.log("hello")
//- Positive or negative
var a=56
if(a>0){
    console.log("number is positive")
}
else if(a<0){
    console.log("number is negetive")

}
//odd or even
var b=56
if(a%2==0){
    console.log("number is even")
}
else {
    console.log("number is negetive")

}
//Find max among 3 numbers
var c=4
var d=5
var e=6
c>d&&c>e?console.log("c is the largest")?d>c&&d>e:console.log("d is the largest"):console.log("e is the largest")
// Check vowel or consonant
var word=a
word=='a'||'e'||'i'||'o'||'u'?console.log("word is vowel"):console.log("word is consonenet")

//6-input week number and console total day.
var week=5
var day=(week*7)
console.log("the total days are "+day)
//7- input month number and console number of days in that month.
var month=2;
var year=2000;
if(month==1)
{
    var days=31;
    console.log("JAnuary"+days)
}
else if(month==2||year%2==0)
{
    var days=28;
    console.log("February"+days)
}
else if(month==3)
{
    var days=30;
    console.log("march"+days)
}
else if(month==4)
{
    var days=31;
    console.log("April"+days)
}
else if(month==5)
{
    var days=30;
    console.log("may"+days)
}
else if(month==6)
{
    var days=31;
    console.log("june"+days)

}
else if(month==7)
{
    var days=30;
    console.log("july"+days)
}
else if(month==8)
{
    var days=31;
    console.log("August"+days)
}
else if(month==9)
{
    var days=30;
    console.log("september"+days)
}
else if(month==10)
{
    var days=31;
    console.log("octobar"+days)
}
else if(month==11)
{
    var days=30;
    console.log("novembar"+days)
}
else if(month==12)
{
    var days=31;
    console.log("december"+days)
}
//10- calculate electricity bill from given condition 
// For first 50 units tk. 0.50/unit
// For next 100 units tk. 0.75/unit
// For next 100 units tk. 1.20/unit
// For unit above 250 tk. 1.50/unit
// An additional Meter charge is 55 tk added to the bill

var bill=40
var unit
if (50>=bill){
    unit=(bill*0.50)+55
    console.log(unit)
}
else if (150>=bill){
    unit=(bill*0.75)+55
    console.log(unit)
}
else if (200>=bill){
    unit=(bill*1.20)+55
    console.log(unit)
}
else if (250>bill){
    unit=(bill*1.50)+55
    console.log(unit)
}
else{
    console.log("invalid number")
}






