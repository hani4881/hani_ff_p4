
document.write("<h1>opdracht 1</h1> ");
document.write("<h3> met  do while  loop</h3> ");
console.log("<h1>opdracht 1</h1>"+"<h3> met  do while  loop</h3>");
document.write("<h3>1-1</h3>");
console.log("<h3>1-1</h3>");

x = 0;
y = 0;




//While-------------------------------------------------------------------------------------------------
document.write("<h1>Opdracht 1.1</h1> ");
console.log("Opdracht 1 . 1");
document.write("<h3>While loop</h3> ");
var i = 0;
var k = 0;

while (i < 8) {
    while (k <= i){
        document.write("*");
        console.log("*");
        k++;
    }
    document.write("<br>");
    console.log("<br>");
    k = 0
    i++;
}

document.write("<br><hr>");



//do while------------------------------------------------------------------------------------------------
document.write("<h1>Opdracht 1.2</h1> ");
console.log("Opdracht 1.2");
document.write("<h3>Do while</h3> ");
do {
    do {
        document.write("*");
        console.log("*");

        y++;
    } while (y <= x);
    document.write("<br>");
    console.log("<br>");

    y = 0;
    x++;
} while (x < 8);

document.write("<br><hr>");

//For loop--------------------------------------------------------------------------------------------------
document.write("<h1>Opdracht 1.3</h1> ");
console.log("Opdracht 1.3");
document.write("<h3>For loop</h3> ");

for (var i = 0; i < 8; i++) {
    for (var j = 0; j <= i; j++) {
        document.write("*"); 
        console.log("*");
    }
    document.write("<br>");
    console.log("<br>");
}




//Opdracht 2-----------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------
document.write("<br><hr>");
document.write("<h1>Opdracht 2</h1> ");
console.log("<h1>Opdracht 2</h1>");

for (i = 0; i <=100; i++) {
    var corona = i % 7;
    var bingo = i %  9;
        if(corona == 0){
            document.write("corona");
            console.log("corona");
        } else { 
            if(bingo == 0){
                document.write("bingo");
                console.log("bingo");
            } else {
                document.write(i);
                console.log(i);
            }
        }
    document.write("<br>");
}

//opdracht 3----------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
document.write("<br><hr>");
document.write("<h1>Opdracht 3</h1> ");
console.log("<h1>Opdracht 3</h1>");

l = 8; //lengte
b = 4; //breedte
for (i = 0; i < l; i++) {
    var result = i % 2; 
    if(result!=0){
        for (n = 0; n < b; n++) {
            document.write("#");
            console.log("#");
        }
        document.write("<br>");
        console.log("<br>");
    } else {
        document.write("&nbsp&nbsp");
        console.log("&nbsp&nbsp");

        for (n = 0; n < b; n++) {
            document.write("#");
            console.log("#");
        }
        document.write("<br>");
        console.log("<br>");
    }
}






