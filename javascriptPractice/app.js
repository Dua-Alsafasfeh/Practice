"use strict";
document.write("Exercise 1" + "<br><br>");
for( let i=1 ;i<=3 ;i++ ){
    for( let j=1 ; j<=5 ; j++){
        document.write("* ");
    }
    document.write("<br>")
}
// ...............................
document.write("Exercise 2" + "<br><br>");
for( let i=1 ;i<=3; i++){
    for (let j=1; j<=5 ;j++){
        document.write( j +" " );
    }
    document.write("<br>");
}
// ....................................
document.write("Exercise 3" + "<br><br>");
for ( let i=1 ; i<=5 ; i++){
    for (let j=1; j<=i ; j++){
        document.write( j +" " );
    }
    document.write("<br>");
}
// ....................................
document.write("Exercise 4" + "<br><br>");
for ( let i=1 ; i<=5 ; i++){
    for (let j=1; j<= 5-i+1 ; j++){
        document.write( j +" " );
    }
    document.write("<br>");
}
//OR 
for ( let i=5 ; i>=1 ; i--){
    for (let j=1 ; j <= i ; j++){
        document.write( "* " );
    }
    document.write("<br>");
}
// ............................
document.write("Exercise 5" + "<br><br>");
for ( let i=1 ; i<=5 ; i++){
    for( let j=1; j<= 5-i; j++){
        document.write( "- " );
    }
    for( let k=1 ; k<=i ; k++){
        document.write( "* " );
    }
    document.write("<br>");
}
// ............................
document.write("Exercise 6" + "<br><br>");
document.write( "* " +"<br>" );
for ( let i = 2; i<= 7; i++ ){
    document.write( "* " );
    for ( let j=1 ; j<= i-2 ; j++){
        document.write( "- " );
    }
    document.write( "* " );
    document.write("<br>");
}
for ( let k = 1; k<=8 ; k++){
    document.write( "* " );
}
// ...................................