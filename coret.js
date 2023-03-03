
function f(x) {
    let fx = x^3-7*x+1;
    return fx;
}

let i = 0; 
let c;
function biseksi(a,b,er){
    do{
        c = (a+b)/2;
        f(a);
        f(b);
        f(c);
        document.write("<br> iterais: "+i);
        document.write(" |a: "+a);
        document.write(" |b: "+b);
        document.write(" |c: "+c);
        document.write(" |fa: "+f(a));
        document.write(" |fb: "+f(b));
        document.write(" |fc: "+f(c));
        if(f(c)*f(a)<0){
            b =c;
        } else a =c;
        i++;

}while(Math.abs(b-a)>er || i <10)
    document.write("<br> pennyeelesaian: "+c);
}
biseksi(2.5,2.6,0.005);    
    

((b-a) >= error || i <10 )


//  var xninput = document.getElementById('xninput').value;
//  var xnplus1input = document.getElementById('xn+1input').value;

//  var InputanKiri = parseFloat(document.getElementById('InputanKiri').value);
//  var InputanTengah = parseFloat(document.getElementById('InputanTengah').value);
//  var InputanKanan = parseInt(document.getElementById('InputanKanan').value);
//  var InputanPalingKanan = parseInt(document.getElementById('InputanPalingKanan').value);

document.getElementById('btnerror').onclick = function(){
    var error = document.getElementById('error').value;
    document.getElementById('hasilerror').innerHTML = error;
} 
 

 
// An example function whose solution is determined using
// Bisection Method. The function is x^3 - x^2  + 2

document.getElementById('xndanxn+1').onclick= function(){

    function func(x)
    {
        return x**3-7*x + 1;
    }
    
    // Prints root of func(x) with error of EPSILON
    function bisection(a, b)
    {
        if (func(a) * func(b) >= 0)
        {
            document.write("You have not assumed"
                        + " right a and b");
            return;
        }
    
        let i = 1;
        let c;
        while ((b-a) >= error || i <10 ){
            // Find middle point
            c = (a+b)/2;
            document.write("<br> iterasi: "+i);
            document.write(" |a: "+ a);
            document.write(" |b: "+ b);
            document.write(" |fa: "+func(a));
            document.write(" |fb: "+func(b));
            document.write(" |c: "+ c);
            document.write(" |fc: "+func(c));
            // Check if middle point is root
            if (func(c) == 0.0){
                break;
            }
            // Decide the side to repeat the steps
            else if (func(c)*func(a) < 0){
                b = c;
            }
            else{
                a = c;
            }
            
            i++;
        }
        
        document.write("<br>");
                //prints value of c upto 4 decimal places
        document.write("The value of " +
                      "root is : "+ c.toFixed(5));
    }
    
    
    // Driver program
    
        // Initial values assumed
        let a =document.getElementById('xninput').value;
        let b = document.getElementById('xn+1input').value;
        bisection(a, b);
}







function masalah(){
    let error = parseFloat(document.getElementById('error').value);

    function hasil() {
        let nama = parseFloat(document.getElementById('xninput').value);
        let bee = parseFloat(document.getElementById('xn+1input').value);
        

        document.getElementById('tekan').onclick= function(){
            function func(x)
            {
                return x**3-7*x+1;
            }
            
            // Prints root of func(x) with error of EPSILON
            function bisection(a, b)
            {
                if (func(a) * func(b) >= 0)
                {
                    document.write("Tidak bisa dilanjutkan");
                    return;
                }
                
                let i = 1;
                var z;
                do{
                    // Find middle point
                    z = ((a+b)/2);
                    // document.getElementById('no').innerHTML = i;
                    // document.getElementById('xn').innerHTML = a;
                    // document.getElementById('xn+1').innerHTML = b;
                    // document.getElementById('fxn').innerHTML = func(a).toFixed(4);
                    // document.getElementById('fxn+1').innerHTML = func(b).toFixed(4);
                    // document.getElementById('xmid').innerHTML = z.toFixed(4);
                    // document.getElementById('fxmid').innerHTML = func(z).   toFixed(4);
    
                    document.write("<table border = '2' width='500' align= 'center' >");
                        document.write("<thead bgcolor = 'yellow'>");
                            document.write("<tr>");
                                document.write(" <th>No</th>")
                                document.write(" <th>X<sub>n</sub></th>")
                                document.write(" <th>X<sub>n+1</sub></th>")
                                document.write(" <th>F(X<sub>n</sub>)</th>")
                                document.write(" <th>F(X<sub>n+1</sub>)</th>")
                                document.write(" <th>X<sub>mid</sub></th>")
                                document.write(" <th>F(X<sub>mid</sub>)</th>")
                            document.write("</tr>");
                        document.write("</thead>");
    
                        document.write("<tbody bgcolor = 'white'>")
                            document.write("<tr>")
                                document.write("<td align ='center'>"+i+"</td>")
                                document.write("<td align ='center'>"+a+"</td>")
                                document.write("<td align ='center'>"+b+"</td>")
                                document.write("<td align ='center'>"+func(a).toFixed(4)+"</td>")
                                document.write("<td align ='center'>"+func(b).toFixed(4)+"</td>")
                                document.write("<td align ='center'>"+z.toFixed(4)+"</td>")
                                document.write("<td align ='center'>"+func(z).toFixed(4)+"</td>")
                            document.write("</tr>")
                        document.write("</tbody>")
    
                    document.write("</table>")
                    
                    // document.write("<br> <table border = '3' width = '300'> <thead > <tr> <th>No</th> <th>X<sub>n</sub></th>  <th> X<sub>n+1</sub></th>  <th> F(X<sub>n+1</sub>)</th>  <th> X<sub>mid</sub></th> <th> F(X<sub>mid</sub>)</th> </tr></thead <tbody><tr><td>"+i+"</td> <td>"+a+"</td> <td>"+func(a).toFixed(4)+"</td> <td>"+func(b).toFixed(4)+"</td> <td>"+z.toFixed(4)+"</td> <td>"+func(z).toFixed(4)+"</td></tr></tbody></table>");
    
    
                    // Check if middle point is root
                    if(func(z)*func(a)<0){
                        b = z;
                    } else {
                        a =z;
                    }
                    
                    if(func(z)<error){
                        // document.getElementById('kesimpulan').innerHTML = "The value of root is : "+ z.toFixed(3);
    
                        // document.write("<br>");
                        // //prints value of c upto 4 decimal places
                        document.write("<br> The value of root is : "+ z.toFixed(3));
                        return;
                    }else{
                        i++;
                    }
                    
                }while(Math.abs(b-a)> error || i <1000)
                // document.getElementById('kesimpulan').innerHTML = "The value of root is : "+ z.toFixed(3);
    
                document.write("<br>");
                //prints value of c upto 4 decimal places
                document.write("The value of " +
                "root is : "+ z.toFixed(5));
                
            } 
            // // Driver program
            // let a = document.getElementById('xninput').value;
            // let b = 2.9;
            //             let a =document.getElementById('xninput').value;
            // let b = document.getElementById('xn+1input').value;
               
            // Initial values assumed
            let a = nama ;
            let b = bee;
            bisection(a ,b);
        }     
            let a = nama ;
            let b = bee;
            bisection(a ,b);  
    }
    let a = nama ;
    let b = bee;
    let c = error;
    bisection(a ,b,c);  

}


let EPSILON = 0.001;
 
    // An example function whose solution is determined using
    // Bisection Method. The function is x^3 - x^2  + 2
    function func(x)
    {
        return (0.5*x**3)-x-9 
    }
    // Prints root of func(x) with error of EPSILON
    function bisection(a, b)
    {
        if (func(a) * func(b) >= 0)
        {
            document.write("You have not assumed"
                        + " right a and b");
            return;
        }
   
        let c = a;
        while ((b-a) >= EPSILON)
        {
            // Find middle point
            c = (a+b)/2;
   
            // Check if middle point is root
            if (func(c) == 0.0)
                break;
   
            // Decide the side to repeat the steps
            else if (func(c)*func(a) < 0)
                b = c;
            else
                a = c;
        }
                //prints value of c upto 4 decimal places
        document.write("The value of " +
                      "root is : "+ c.toFixed(4));
    }
 
 
// Driver program
 
        // Initial values assumed
        let a = 2.5;
        let b = 3;
        bisection(a, b);






         
document.getElementById('buttonKiri').onclick= function(){
    var MyKiri = document.getElementById('InputanKiri').value;
    if(MyKiri >0){
        document.getElementById('kiri').innerHTML= MyKiri +'x';
    }else if (MyKiri<0){
        document.getElementById('kiri').innerHTML= MyKiri +'x';
    }else if(Mykiri = "0" || MyKiri == 0){
        document.getElementById('kiri').innerHTML= 'x';
    }else{
        alert('Anda harus memasukan angka');
    }
}

document.getElementById('buttonTengah').onclick= function(){
    var MyTengah = document.getElementById('InputanTengah').value;
    if(MyTengah > 0){
        document.getElementById('tengah').innerHTML= '+' + MyTengah +'x';
    }else if (MyTengah < 0){
        document.getElementById('tengah').innerHTML= MyTengah +'x';
    }else{
        alert('Anda harus memasukan angka');
    }
}

document.getElementById('buttonKanan').onclick= function(){
    var MyKanan = document.getElementById('InputanKanan').value;
    if(MyKanan > 0){
        document.getElementById('kanan').innerHTML= '+' + MyKanan ;
    }else if(MyKanan < 0 ){
        document.getElementById('kanan').innerHTML = MyKanan ;
    }else{
        alert('Anda harus memasukan angka');
    }
}

document.getElementById('buttonPalingKanan').onclick= function(){
    var MyPalingKanan = document.getElementById('InputanPalingKanan').value;
    if(MyPalingKanan > 0){
        document.getElementById('PalingKanan').innerHTML=MyPalingKanan;
    }else if(MyPalingKanan < 0 ){
        document.getElementById('PalingKanan').innerHTML = MyPalingKanan;
    }else{
        alert('Anda harus memasukan angka');
    }
}

        function hasil() 
        {
            let nama = parseFloat(document.getElementById('xninput').value);
            let bee = parseFloat(document.getElementById('xn+1input').value);
            let kenadeh = parseFloat(document.getElementById('problemm').value);

    
            document.getElementById('tekan').onclick= function()
            {      
                
            let MyKirii = parseFloat(document.getElementById('InputanKiri').value);
            let MyTengahh = parseFloat(document.getElementById('InputanTengah').value);
            let MyKanann = parseFloat(document.getElementById('InputanKanan').value);
            let MyPalingKanann = parseFloat(document.getElementById('InputanPalingKanan').value);
                function func(x)
                {
                    let fx =(MyKirii*x**MyPalingKanann)+(MyTengahh*x)+MyKanann;
                    return fx;
                }
                
                // Prints root of func(x) with error of EPSILON
                function bisection(a, b)
                {

                    let i = 1;
                    var z;
                    do{
                        // Find middle point
                        z = b-((func(b)*(a-b))/(func(a)-func(b)));
                        // document.getElementById('no').innerHTML = i;
                        // document.getElementById('xn').innerHTML = a;
                        // document.getElementById('xn+1').innerHTML = b;
                        // document.getElementById('fxn').innerHTML = func(a).toFixed(4);
                        // document.getElementById('fxn+1').innerHTML = func(b).toFixed(4);
                        // document.getElementById('xmid').innerHTML = z.toFixed(4);
                        // document.getElementById('fxmid').innerHTML = func(z).   toFixed(4);
        if(Math.abs(func(y))<kenadeh){
            document.write("<table border = '2' width='500' align= 'center' >");
                document.write("<thead bgcolor = 'yellow'>");
                    document.write("<tr>");
                        document.write(" <th>No</th>")
                        document.write(" <th>X<sub>n</sub></th>")
                        document.write(" <th>X<sub>n+1</sub></th>")
                        document.write(" <th>F(X<sub>n</sub>)</th>")
                        document.write(" <th>F(X<sub>n+1</sub>)</th>")
                        document.write(" <th>X<sub>mid</sub></th>")
                        document.write(" <th>F(X<sub>mid</sub>)</th>")
                    document.write("</tr>");
                document.write("</thead>");

                document.write("<tbody bgcolor = 'white'>")
                    document.write("<tr>")
                        document.write("<td align ='center'>"+ i +"</td>")
                        document.write("<td align ='center'>"+a+"</td>")
                        document.write("<td align ='center'>"+b+"</td>")
                        document.write("<td align ='center'>"+func(a).toFixed(4)+"</td>")
                        document.write("<td align ='center'>"+func(b).toFixed(4)+"</td>")
                        document.write("<td align ='center'>"+z.toFixed(4)+"</td>")
                        document.write("<td align ='center'>"+func(z).toFixed(4)+"</td>")
                    document.write("</tr>")
                document.write("</tbody>")
            document.write("</table>")
        }else{
            a = b;
            b = z;
        }

                        
                        // document.write("<br> <table border = '3' width = '300'> <thead > <tr> <th>No</th> <th>X<sub>n</sub></th>  <th> X<sub>n+1</sub></th>  <th> F(X<sub>n+1</sub>)</th>  <th> X<sub>mid</sub></th> <th> F(X<sub>mid</sub>)</th> </tr></thead <tbody><tr><td>"+i+"</td> <td>"+a+"</td> <td>"+func(a).toFixed(4)+"</td> <td>"+func(b).toFixed(4)+"</td> <td>"+z.toFixed(4)+"</td> <td>"+func(z).toFixed(4)+"</td></tr></tbody></table>");
        
        
                        // Check if middle point is root
                        // if (func(z) == 0.0){
                        //     break;
                        // }else if(func(z)*func(a)<= 0){
                        //     b = z;
                        // } else{
                        //     a = z;
                        // }
                        
                    i++;
                        
                    // if(func(z)< 0.0001){
                    //     break
                    // }
                    }while(Math.abs(func(z)) > kenadeh)
                    // document.getElementById('kesimpulan').innerHTML = "The value of root is : "+ z.toFixed(3);
        
                    document.write("<br>");
                    //prints value of c upto 4 decimal places
                    document.write("The value of root is : "+ z.toFixed(5));
                    
                } 
                // // Driver program
                // let a = document.getElementById('xninput').value;
                // let b = 2.9;
                //             let a =document.getElementById('xninput').value;
                // let b = document.getElementById('xn+1input').value;
                   
                // Initial values assumed
                
                let a = nama;
                let b = bee;
                bisection(a ,b);
            }       
}
    


let EPSILON = 0.001;
       
    // An example function whose solution
    // is determined using Bisection Method.
    // The function is x^3 - x^2 + 2
    function func(x)
    {
        return (0.5*x**3)-x-9 
    }
       
    // Derivative of the above function
    // which is 3*x^x - 2*x
    function derivFunc(x)
    {
        return 1.5*x**2+1
    }
       
    // Function to find the root
    function newtonRaphson(x)
    {
        let h = func(x) / derivFunc(x);
        while (Math.abs(h) >= EPSILON)
        {
            h = func(x) / derivFunc(x);
       
            // x(i+1) = x(i) - f(x) / f'(x)
            x = x - h;
        }
       
        document.write("The value of the"
                + " root is : "
                + Math.round(x * 100.0) / 100.0);
    }
 
 
// Driver program
 
        // Initial values assumed
        let x0 = 2.5;
        newtonRaphson(x0);




        let MyKiriibaru = MyKirii*MyPalingKanann;
                    let MyPalingKanannbaru = MyPalingKanann-1;

                    function an(x){
                        let fxbaru = (MyKiriibaru*x**MyPalingKanannbaru + MyTengahh);
                    }





                    
                    function func(x)
                    {
                        let fx =(MyKirii*x**MyPalingKanann)+(MyTengahh*x)+MyKanann;
                        return fx;
                    }
                    function derivFunc(x){
                        let fxbaru = (MyKiriibaru*x**MyPalingKanannbaru + MyTengahh);
                        return fxbaru;
                    }
                    // Prints root of func(x) with error of EPSILON
                    function  newtonRaphson(x0)
                    {    
                            let i = 1;
                            while (i <= 1000)
                            {
                                x0 = x0 - func(x0) / derivFunc(x0);
                                i += 1;
                                
                                if(Math.abs(func(x0)<kenadeh)){
                                    document.write("<table border = '2' width='500' align= 'center' >");
                                    document.write("<thead bgcolor = 'yellow'>");
                                        document.write("<tr>");
                                            document.write(" <th>No</th>")
                                            document.write(" <th>X<sub>n</sub></th>")
                                            document.write(" <th>X<sub>n+1</sub></th>")
                                            document.write(" <th>F(X<sub>n</sub>)</th>")
                                            document.write(" <th>F(X<sub>n+1</sub>)</th>")
                                        document.write("</tr>");
                                    document.write("</thead>");

                                    document.write("<tbody bgcolor = 'white'>")
                                        document.write("<tr>")
                                            document.write("<td align ='center'>"+ i +"</td>")
                                            document.write("<td align ='center'>"+x.toFixed(4)+"</td>")
                                            document.write("<td align ='center'>"+xnplussatu.toFixed(4)+"</td>")
                                            document.write("<td align ='center'>"+func(x).toFixed(4)+"</td>")
                                            document.write("<td align ='center'>"+func(xnplussatu).toFixed(4)+"</td>")
                                            document.write("</tr>")
                                            document.write("</tbody>")
                                            document.write("</table>")
                                }else{
                                    if(derivFunc(x0)== 0){
                                        document.write("Zero derivative");
                                        return;
                                    }
                                }
                                return x0;
                     
                            }
                           
                            document.write("The value of the root is : " + Math.round(x0 * 100.0) / 100.0);
                
                               
                        let x0 = nama;
                        newtonRaphson(x0);
                    }