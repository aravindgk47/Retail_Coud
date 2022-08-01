import { Injectable } from '@angular/core';


@Injectable()
export class AppService {



    downloadFile(data, filename='data') {
        let csvData = this.ConvertToCSV(data, ['districtname','active','confirmed',
         'deceased', 'home_obs', 'hospital_obs','hospital_today',
    'recovered','total_obs']);
        
        let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
        let dwldLink = document.createElement("a");
        let url = URL.createObjectURL(blob);
        let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
        if (isSafariBrowser) {  
            dwldLink.setAttribute("target", "_blank");
        }
        dwldLink.setAttribute("href", url);
        dwldLink.setAttribute("download", filename + ".csv");
        dwldLink.style.visibility = "hidden";
        document.body.appendChild(dwldLink);
        dwldLink.click();
        document.body.removeChild(dwldLink);
    }

    ConvertToCSV(objArray, headerList) {
         let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
         let str = '';
         let row = 'S.No,';
         let total = 'TOTAL';


         for (let index in headerList) {
             row += headerList[index] + ',';
         }
        //  for (let index in headerList) {
        //     total += headerList[index] + ',';
        // }
        //  console.log(total);
         row = row.slice(0, -1);
         str += row + '\r\n';
         let tot=0;
         let tot2=0;
         let tot3=0;

         console.log(array.length);

         for (let i = 0; i < array.length; i++) {
             let line = (i+1)+'';

             for (let index in headerList) {               
                let head = headerList[index];
                if(head==='home_obs'){
                    let v=array[i][head];
                    tot=tot+v;
                }
                if(head==='hospital_obs'){
                    let v2=array[i][head];
                    tot2=tot2+v2;
                }

                if(head==='hospital_today'){
                    let v3=array[i][head];
                    tot3=tot3+v3;
                }

                 line += ',' + array[i][head];

             }

             str += line +  '\r\n';

         }
        
         str +=   '\r\n';
            let line = '';

            for (let index in headerList) {               
               let head = headerList[index];
               if(head==='active'||'confirmed'){
                line += ',';

               }
               if(head==='deceased'){
                line += total;

               }
               if(head==='home_obs'){
                line += tot;

               }
               if(head==='hospital_obs'){
                line += tot2;

               }

               if(head==='hospital_today'){
                line += tot3;

               }

                console.log(line)
            }

            str +=line +  '\r\n';
   
         return str;
     }
}