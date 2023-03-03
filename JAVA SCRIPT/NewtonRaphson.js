
 
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
        
            
                    document.getElementById('tekan').onclick= function()
                    {      
                       
                        let nama = parseFloat(document.getElementById('xninput').value);
                        let kenadeh = parseFloat(document.getElementById('problemm').value);

                        let MyKirii = parseFloat(document.getElementById('InputanKiri').value);
                        let MyTengahh = parseFloat(document.getElementById('InputanTengah').value);
                        let MyKanann = parseFloat(document.getElementById('InputanKanan').value);
                        let MyPalingKanann = parseFloat(document.getElementById('InputanPalingKanan').value);

                        let MyKiriibaru = MyKirii*MyPalingKanann;
                        let MyPalingKanannbaru = MyPalingKanann-1;
                        
                        function func(x)
                        {
                            let fx =(MyKirii*x**MyPalingKanann)+(MyTengahh*x)+MyKanann;
                            return fx;
                        }
                        function derivFunc(x)
                        {
                            let fxbaru = (MyKiriibaru*x**MyPalingKanannbaru + MyTengahh);
                            return fxbaru;
                        }
                        // Prints root of func(x) with error of EPSILON
                        function newtonRaphson(x)
                        {
                            let i = 1;
                            let h = func(x) / derivFunc(x);
                            do
                            {
                                h = func(x) / derivFunc(x);
                                // x(i+1) = x(i) - f(x) / f'(x)
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
                                document.write("<td align ='center'>"+h.toFixed(4)+"</td>")
                                document.write("<td align ='center'>"+func(x).toFixed(4)+"</td>")
                                document.write("<td align ='center'>"+func(h).toFixed(4)+"</td>")
                            document.write("</tr>")
                        document.write("</tbody>")
                    document.write("</table>")
                                x = x - h;
                                i++;
                            }while (Math.abs(h) >= kenadeh)
                            document.write("<br>");
                            document.write("Solusi Persamaan Non Linear : "
                                    + Math.round(x * 100.0) / 100.0);
                        }
                     
                     
                    // Driver program
                     
                            // Initial values assumed
                            let x0 = nama;
                            newtonRaphson(x0);
                    }

                            
                        