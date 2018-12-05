function myFunction()
{
    var a, b, c, ch, d, x;
    var addition = 0;
    var subtraction = 0;
    var multiplication = 0;
    var division = 0;
    var exponent = 0;
    var mean = 0;
    var count = 0;

    
        ch=parseInt(prompt("1-Addition \n2-Subtaction \n3-Multiplication \n4-Division \n5-Exponent \n6-Mean \n7-Quit"));
        switch(ch)
        {
              case 1:
              a = window.prompt("Enter First Number");
              b = window.prompt("Enter Second Number");
              addition = parseInt(a) + parseInt(b);
              document.getElementById("txt1").value = addition;
              break;
             

              case 2:
              a = window.prompt("Enter First Number");
              b = window.prompt("Enter Second Number");
              subtraction = parseInt(a) - parseInt(b);
              document.getElementById("txt1").value = subtraction;
              break;

              case 3:
              a = window.prompt("Enter First Number");
              b = window.prompt("Enter Second Number");
              multiplication = parseInt(a) * parseInt(b);
              document.getElementById("txt1").value = multiplication;
              break;

              case 4:
              a = window.prompt("Enter First Number");
              b = window.prompt("Enter Second Number");
              division = parseFloat(a) / parseFloat(b);
              document.getElementById("txt1").value = division;
              break;

              case 5:
              a = window.prompt("Enter Base Number");
              b = window.prompt("Enter Power");
              exponent = parseFloat(Math.pow(a,b));
              document.getElementById("txt1").value = exponent;
              break;

              case 6:
              x = prompt("Enter series of numbers to find mean of that numbers:");
              while (x != "***") {
                                      count++;
                                      mean = mean + parseInt(x);
                                      x = prompt("Enter series of numbers to find mean of that numbers");
                                      document.getElementById("txt1").value = mean / count;
 
                                 }
            break;
            case 7:
                     {
                        exit;
                     }

    default:
    window.alert("Enter the numeric values only between 1-7");
}

}