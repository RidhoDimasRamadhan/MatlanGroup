 
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

document.getElementById('buttonPalingKanan').onclick = function(){
    var MyPalingKanan = document.getElementById('InputanPalingKanan').value;
    if(MyPalingKanan > 0){
        document.getElementById('PalingKanan').innerHTML=MyPalingKanan;
    }else if(MyPalingKanan < 0 ){
        document.getElementById('PalingKanan').innerHTML = MyPalingKanan;
    }else{
        alert('Anda harus memasukan angka');
    }
}

       
            document.getElementById('tekan').onclick= function()
            {      
                let nama = parseFloat(document.getElementById('xninput').value);
            let bee = parseFloat(document.getElementById('xn+1input').value);
            let kenadeh = parseFloat(document.getElementById('problemm').value);

            let MyKirii = parseFloat(document.getElementById('InputanKiri').value);
            let MyTengahh = parseFloat(document.getElementById('InputanTengah').value);
            let MyKanann = parseFloat(document.getElementById('InputanKanan').value);
            let MyPalingKanann = parseFloat(document.getElementById('InputanPalingKanan').value);
                function func(x)
                {
                    let fx =(MyKirii*x**MyPalingKanann)+(MyTengahh*x)+MyKanann;
                    return fx;
                }
                
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
                        z = ((a+b)/2);
        
                        document.write("<table border = '2' width='500' align= 'center' >");
                            document.write("<thead bgcolor = 'F87474'>");
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
                                    document.write("<td align ='center'>"+a.toFixed(4)+"</td>")
                                    document.write("<td align ='center'>"+b.toFixed(4)+"</td>")
                                    document.write("<td align ='center'>"+func(a).toFixed(4)+"</td>")
                                    document.write("<td align ='center'>"+func(b).toFixed(4)+"</td>")
                                    document.write("<td align ='center'>"+z.toFixed(4)+"</td>")
                                    document.write("<td align ='center'>"+func(z).toFixed(4)+"</td>")
                                document.write("</tr>")
                            document.write("</tbody>")
                        document.write("</table>")
                        
                      
                        if (func(z) == 0.0){
                            break;
                        }else if(func(z)*func(a)<= 0){
                            b = z;
                        } else{
                            a = z;
                        }
                        
                    i++;
                        
                    
                    }while(Math.abs(func(z)) > kenadeh)
        
                    document.write("<br>");
                    document.write("Solusi Persamaan Non Linear : "+ z.toFixed(4));
                    
                } 
            
                let a = nama;
                let b = bee;
                bisection(a ,b);
            }       