
    var apikey='996009f2374006606f4c0b0fda878af1';
    var kundli_lang='en';
    
    var kundli_fullname=    "";
    var kundli_birthDate=   "";
    var kundli_birthtime=   "";
    var kundli_latitude=    "";
    var kundli_longitude=   "";
    var kundli_timezone=    "";
    var kundli_gender=      "";
    var kundli_year=        "";
    var kundli_month=       "";
    var kundli_day=         "";
    var kundli_minute=      "";
    var kundli_sec =      '00';
    var kundli_hour=        "";
    var kundli_birthPlace=  "";
    
    
    var p2gender =      "";
    var f_fullname=     "";
    var f_birthDate=    "";
    var f_birthtime=    "";
    var f_latitude=     "";
    var f_longitude=    "";
    var f_timezone=     "";
    var f_gender=       "";
    var f_year=         "";
    var f_month=        "";
    var f_day=          "";
    var f_minute=       "";
    var f_hour=         "";
    var f_birthPlace=   "";
     
    
     
   
   
   let getSessionDetailsjs = function session_details(){
        axios.post('https://astroera.in/api/astro-call/exportSessionDetails',session_name,{
               headers: {
                'Content-Type': 'application/json'
            }
        }).then(async function(response)  {
               
               kundli_fullname=    await JSON.parse(JSON.stringify(response.data.form_meta.fullname));
               kundli_birthDate=   await JSON.parse(JSON.stringify(response.data.form_meta.birthDate));
               kundli_birthtime=   await JSON.parse(JSON.stringify(response.data.form_meta.birthtime));
               kundli_latitude  =  await JSON.parse(JSON.stringify(response.data.form_meta.latitude));
               kundli_longitude =  await JSON.parse(JSON.stringify(response.data.form_meta.longitude));
               kundli_timezone=    await JSON.parse(JSON.stringify(response.data.form_meta.timezone));
               kundli_gender=      await JSON.parse(JSON.stringify(response.data.form_meta.gender));
               
               if(await kundli_gender == "male"){
                  await (p2gender ="female");
                  await (f_gender ="female");
               }else{
                  await (p2gender ="male");
                  await (f_gender ="female");
               }
               
               let fetchdate = kundli_birthDate.split('-');
               
               kundli_year=        await fetchdate[2];
               kundli_month=       await fetchdate[1];
               kundli_day=         await fetchdate[0];
              
               let fetchtime = kundli_birthtime.split(':');
             
               kundli_minute=      await fetchtime[1];
               kundli_hour=        await fetchtime[0];
              
               kundli_birthPlace=  await JSON.parse(JSON.stringify(response.data.form_meta.birthPlace));
               
              f_birthPlace=  await JSON.parse(JSON.stringify(response.data.form_meta.partners_birthPlace));
              f_fullname=    await JSON.parse(JSON.stringify(response.data.form_meta.partnersName));
              f_birthDate=   await JSON.parse(JSON.stringify(response.data.form_meta.partnersbirthDate));
              f_birthtime=   await JSON.parse(JSON.stringify(response.data.form_meta.partnersbirthtime));
              f_latitude=    await JSON.parse(JSON.stringify(response.data.form_meta.partners_latitude));
              f_longitude=   await JSON.parse(JSON.stringify(response.data.form_meta.partners_longitude));
              f_timezone=    await JSON.parse(JSON.stringify(response.data.form_meta.partners_timezone));
              
              let fefetchdate = f_birthDate.split('-');
               
               f_year=        await fefetchdate[2];
               f_month=       await fefetchdate[1];
               f_day=         await fefetchdate[0];
               
              let fefetchtime = f_birthtime.split(':');
             
               f_minute=      await fefetchtime[1];
               f_hour=        await fefetchtime[0];
               
            })
    }

getSessionDetailsjs();


function get_basic_data() {
    
     var e=$('#basic_json').val();
     
     if(e==='') {
         
     } else {
           return false;
     }
    
    var form = new FormData();
        form.append("api_key", apikey);
        form.append("full_name", kundli_fullname);
        form.append("day", kundli_day);
        form.append("month", kundli_month);
        form.append("year", kundli_year);
        form.append("hour", kundli_hour);
        form.append("min", kundli_minute);
        form.append("sec", kundli_sec);
        form.append("gender", kundli_gender);
        form.append("place", kundli_birthPlace);
        form.append("lat", kundli_latitude);
        form.append("lon", kundli_longitude);
        form.append("tzone", kundli_timezone);
        form.append("lan", "en");
        
        var settings = {
          "url": "https://astroapi-3.divineapi.com/indian-api/v1/basic-astro-details",
          "method": "POST",
          "timeout": 0,
          "headers": {
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
          },
          "processData": false,
          "mimeType": "multipart/form-data",
          "contentType": false,
          "data": form
        };
    
        $.ajax(settings).done(function (e) {
          $('#basic_json').val(1);
            
            const myObj = JSON.parse(e);
          let text = "<table >"
                    text += "<tr><td>Name</td><td>" + myObj.data.full_name + "</td></tr>";
                    text += "<tr><td>Date of Birth </td><td>" + myObj.data.date + "</td></tr>";
                    text += "<tr><td>Place </td><td>" + myObj.data.place + "</td></tr>";
                    text += "<tr><td>Latitude</td><td>" + myObj.data.latitude + "</td></tr>";
                    text += "<tr><td>Longitude</td><td>" + myObj.data.longitude + "</td></tr>";
                    text += "<tr><td>Timezone</td><td>" + myObj.data.timezone + "</td></tr>";
                    text += "<tr><td>Sunrise</td><td>" + myObj.data.sunrise + "</td></tr>";
                    text += "<tr><td>Sunset</td><td>" + myObj.data.sunset + "</td></tr>";
                    text += "<tr><td>Chandramasa</td><td>" + myObj.data.chandramasa + "</td></tr>";
                    text += "</table>"

                    //   avakadha details

                    let texte = "<table >"
                    texte += "<tr><td>Varna</td><td>" + myObj.data.varna + "</td></tr>";
                    texte += "<tr><td>Vashya</td><td>" + myObj.data.vashya + "</td></tr>";
                    texte += "<tr><td>Yoni</td><td>" + myObj.data.yoni + "</td></tr>";
                    texte += "<tr><td>Gan</td><td>" + myObj.data.gana + "</td></tr>";
                    texte += "<tr><td>Nadi</td><td>" + myObj.data.nadi + "</td></tr>";
                    texte += "<tr><td>Nakshatra</td><td>" + myObj.data.nakshatra + "</td></tr>";
                    texte += "<tr><td>Tithi</td><td>" + myObj.data.tithi + "</td></tr>";
                    texte += "<tr><td>Tatva</td><td>" + myObj.data.tatva + "</td></tr>";
                    texte += "<tr><td>Rashi Akshar</td><td>" + myObj.data.rashi_akshar + "</td></tr>";
                    texte += "<tr><td>Paya</td><td>" + myObj.data.paya.type + "</td></tr>";
                    texte += "<tr><td>Paksha</td><td>" + myObj.data.paksha + "</td></tr>";
                    texte += "<tr><td>Sunsign</td><td>" + myObj.data.sunsign + "</td></tr>";
                    texte += "<tr><td>Moonsign</td><td>" + myObj.data.moonsign + "</td></tr>";
                    texte += "</table>"

                    //   basic lower section

                    let textee = "<table >"
                    textee += "<tr><td>Tithi</td><td>" + myObj.data.tithi + "</td></tr>";
                    textee += "<tr><td>Nakshatra</td><td>" + myObj.data.nakshatra + "</td></tr>";
                    textee += "<tr><td>Sunsign</td><td>" + myObj.data.sunsign + "</td></tr>";
                    textee += "<tr><td>Moonsign</td><td>" + myObj.data.moonsign + "</td></tr>";
                    textee += "</table>"
                    
                    $('#basicpanchang_lower_part').html(textee);
                    $('#avakadha_details_part').html(texte);
                    $('#basicdetailsfirstpage').html(text);
        });
    
    
    
        

 }
 
 
function get_kundli_data() {
    
     var e=$('#kundliD1').val();
     
     if(e==='') {
         
     } else {
       
          return false;
     }


    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    
    // D1
    
    var form = new FormData();
        form.append("api_key", apikey);
        form.append("full_name", kundli_fullname);
        form.append("day", kundli_day);
        form.append("month", kundli_month);
        form.append("year", kundli_year);
        form.append("hour", kundli_hour);
        form.append("min", kundli_minute);
        form.append("sec", kundli_sec);
        form.append("gender", kundli_gender);
        form.append("place", kundli_birthPlace);
        form.append("lat", kundli_latitude);
        form.append("lon", kundli_longitude);
        form.append("tzone", kundli_timezone);
        form.append("lan", "en");
        
        var settings = {
          "url": "https://astroapi-3.divineapi.com/indian-api/v1/horoscope-chart/D1",
          "method": "POST",
          "timeout": 0,
          "headers": {
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
          },
          "processData": false,
          "mimeType": "multipart/form-data",
          "contentType": false,
          "data": form
        };

        $.ajax(settings).done(function (e) {
            $('#kundliD1').val(e);
                   const myObj1 = JSON.parse(e);
                   let text = "<table >"
                   text += "<tr><td>" + myObj1.data.svg + "</td></tr>";
                   text += "</table>"
                   $('#lagna_Ascendant_basic_chart').html(text);
        });
        
        // D9
    
        var settings = {
          "url": "https://astroapi-3.divineapi.com/indian-api/v1/horoscope-chart/D9",
          "method": "POST",
          "timeout": 0,
          "headers": {
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
          },
          "processData": false,
          "mimeType": "multipart/form-data",
          "contentType": false,
          "data": form
        };
        
        $.ajax(settings).done(function (a) {
           $('#kundliD9').val(a);
           const myOb = JSON.parse(a);
           let texte = "<table >"
           texte += "<tr><td>" + myOb.data.svg + "</td></tr>";
           texte += "</table>"
           $('#navamsa').html(texte);
        });
    
       // planetry position
    
        var settings = {
              "url": "https://astroapi-3.divineapi.com/indian-api/v1/planetary-positions",
              "method": "POST",
              "timeout": 0,
              "headers": {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
              },
              "processData": false,
              "mimeType": "multipart/form-data",
              "contentType": false,
              "data": form
            };
            
        $.ajax(settings).done(function (b) {
                  $('#kundli_planet').val(b);
                  var  myObb = JSON.parse(b);     
                  $.each(myObb.data.planets, function(index, value) {
                  var values="'"+index+"'";
                  $('#kundli_planetry_position').after('<tr><td>'+value.name+'</td><td>'+value.sign+'</td><td>'+value.rashi_lord+'</td><td>'+value.nakshatra+'</td><td>'+value.nakshatra_lord+'</td><td>'+value.full_degree+'</td><td>'+value.is_retro+'</td><td>'+value.is_combusted+'</td><td>'+value.awastha+'</td><td>'+value.house+'</td><td>'+value.type+'</td></tr>');
            });
        });
    
        // all dasha
        
        var form = new FormData();
        form.append("api_key", apikey);
        form.append("full_name", kundli_fullname);
        form.append("day", kundli_day);
        form.append("month", kundli_month);
        form.append("year", kundli_year);
        form.append("hour", kundli_hour);
        form.append("min", kundli_minute);
        form.append("sec", kundli_sec);
        form.append("gender", kundli_gender);
        form.append("place", kundli_birthPlace);
        form.append("lat", kundli_latitude);
        form.append("lon", kundli_longitude);
        form.append("tzone", kundli_timezone);
        form.append("lan", "en");
        form.append("dasha_type", "sookshma-dasha");
            
            var settings = {
              "url": "https://astroapi-3.divineapi.com/indian-api/v1/vimshottari-dasha",
              "method": "POST",
              "timeout": 0,
              "headers": {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
              },
              "processData": false,
              "mimeType": "multipart/form-data",
              "contentType": false,
              "data": form
            };
            
            $.ajax(settings).done(function(u) {
                
                   var  myObj = JSON.parse(u);     
                   $('#vimshottari_dasha_data').val(u);
                   $.each(myObj.data.maha_dasha, function(index, value) {
                     var values="'"+index+"'";
                       $('#vimshottari_dasha').after('<tr><td>'+index+'</td><td>'+value.start_date+'</td><td>'+value.end_date+' <i onclick="antar_dasha('+values+')" class="fa fa-arrow-right" ></i></td></tr>');
                     });
                   });
                
            //   console.log(u);

}
 
 
 function antar_dasha(x) {
    $('.my_lavel').hide();
    $('.my_lavel1').show();

    $('.vimshottari_dasha_hide').hide();
    $('#antar_dasha').show();

    $('#plant_1').val(x);
    var vimshottari_dasha_data = $('#vimshottari_dasha_data').val();

    var value_data = x.trim();

    let get_kudli_antar_dasha = JSON.stringify({
        
            plant_1: value_data,
            dasha_1: "maha_dasha",
            dasha_2: "antar_dasha",
            json: vimshottari_dasha_data,
    }); 
     
 
        axios.post('/get_kudli_antar_dasha',get_kudli_antar_dasha,{
              headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(e) {
            $('.antar_dasha_hide').remove();
            $('#antar_dasha_data').after(e.data);
        });
   
    // $.ajax({
    //     type: "POST",
    //     url: "/get_kudli_antar_dasha",
    //     data: {
    //         plant_1: value_data,
    //         dasha_1: "maha_dasha",
    //         dasha_2: "antar_dasha",
    //         json: vimshottari_dasha_data,
    //     },
    //     success: function(e) {
    //         $('.antar_dasha_hide').remove();
    //         $('#antar_dasha_data').after(e);
    //     },
    //     error: function(err) {
    //         console.log(err.responseText);
    //     }
    // });

 }

 function pratyantar_dasha(x) {
    $('.my_lavel').hide();
    $('.my_lavel2').show();

    $('.vimshottari_dasha_hide').hide();
    $('#pratyantar_dasha').show();
    $('#plant_2').val(x);
    var plant_1= $('#plant_1').val();
    var vimshottari_dasha_data = $('#vimshottari_dasha_data').val();
    
    
     let get_kudli_pratyantar_dasha = JSON.stringify({
        
            plant_1: plant_1,
            plant_2: x,
            dasha_1: "maha_dasha",
            dasha_2: "antar_dasha",
            dasha_3: "pratyantar_dasha",
            json: vimshottari_dasha_data,
    }); 
     
 
        axios.post('/get_kudli_pratyantar_dasha',get_kudli_pratyantar_dasha,{
               headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(e) {
            $('.pratyantar_dasha_hide').remove();
            $('#pratyantar_dasha_data').after(e.data);
        });

    
    // $.ajax({
    //     type: "POST",
    //     url: "/get_kudli_pratyantar_dasha",
    //     data: {
    //         plant_1: plant_1,
    //         plant_2: x,
    //         dasha_1: "maha_dasha",
    //         dasha_2: "antar_dasha",
    //         dasha_3: "pratyantar_dasha",
    //         json: vimshottari_dasha_data,
    //     },
    //     success: function(e) {
    //         $('.pratyantar_dasha_hide').remove();
    //         $('#pratyantar_dasha_data').after(e);
    //     },
    //     error: function(err) {
    //         console.log(err.responseText);
    //     }
    // });

 }

 function sookshma_dasha(x) {

    $('.my_lavel').hide();
    $('.my_lavel3').show();
    
    $('.vimshottari_dasha_hide').hide();
    $('#sookshma_dasha').show();
    $('#plant_3').val(x);
    var plant_1= $('#plant_1').val();
    var plant_2= $('#plant_2').val();
    var vimshottari_dasha_data = $('#vimshottari_dasha_data').val();

     let get_kudli_sookshma_dasha = JSON.stringify({
        
            plant_1: plant_1,
            plant_2: plant_2,
            plant_3: x,
            dasha_1: "maha_dasha",
            dasha_2: "antar_dasha",
            dasha_3: "pratyantar_dasha",
            dasha_4: "sookshma_dasha",
            json: vimshottari_dasha_data,
    }); 
     
 
        axios.post('/get_kudli_sookshma_dasha',get_kudli_sookshma_dasha,{
               headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(e) {
            $('.sookshma_dasha_hide').remove();
            $('#sookshma_dasha_data').after(e.data);
        });
    
    // $.ajax({
    //     type: "POST",
    //     url: "/get_kudli_sookshma_dasha",
    //     data: {
    //         plant_1: plant_1,
    //         plant_2: plant_2,
    //         plant_3: x,
    //         dasha_1: "maha_dasha",
    //         dasha_2: "antar_dasha",
    //         dasha_3: "pratyantar_dasha",
    //         dasha_4: "sookshma_dasha",
    //         json: vimshottari_dasha_data,
    //     },
    //     success: function(e) {
    //         $('.sookshma_dasha_hide').remove();
    //         $('#sookshma_dasha_data').after(e);
    //     },
    //     error: function(err) {
    //         console.log(err.responseText);
    //     }
    // });

 }


 function back_step(x) {
    if(x=='1') {
        $('.my_lavel').hide();
        $('.vimshottari_dasha_hide').hide();
        $('#maha_dasha').show(); 
    }
    if(x=='2') {
    $('.my_lavel').hide();
    $('.my_lavel1').show();

    $('.vimshottari_dasha_hide').hide();
    $('#antar_dasha').show(); 
    }
    if(x=='3') {
        $('.my_lavel').hide();
        $('.my_lavel2').show();
    
        $('.vimshottari_dasha_hide').hide();
        $('#pratyantar_dasha').show();
    }
   
  }

 
 
function get_kp_data(){
    
    var e=$('#bhav_chalit').val();
    
     if(e==='') {
         
     } else {
       
          return false;
     }


    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    
    // bhav chalit
    
    var form = new FormData();
        form.append("api_key", apikey);
        form.append("full_name", kundli_fullname);
        form.append("day", kundli_day);
        form.append("month", kundli_month);
        form.append("year", kundli_year);
        form.append("hour", kundli_hour);
        form.append("min", kundli_minute);
        form.append("sec", kundli_sec);
        form.append("gender", kundli_gender);
        form.append("place", kundli_birthPlace);
        form.append("lat", kundli_latitude);
        form.append("lon", kundli_longitude);
        form.append("tzone", kundli_timezone);
        form.append("lan", "en");
        var settings = {
          "url": "https://astroapi-3.divineapi.com/indian-api/v1/horoscope-chart/chalit",
          "method": "POST",
          "timeout": 0,
          "headers": {
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
          },
          "processData": false,
          "mimeType": "multipart/form-data",
          "contentType": false,
          "data": form
        };
        
        $.ajax(settings).done(function(e) {
            $('#bhav_chalit').val(e);
           const myObj1 = JSON.parse(e);
           let text = "<table >"
           text += "<tr><td>" + myObj1.data.svg + "</td></tr>";
           text += "</table>"
           $('#bhavchalitchart').html(text);
          });
    
    // kp planetry position
    
            var settings = {
              "url": "https://astroapi-3.divineapi.com/indian-api/v1/kp/planetary-positions",
              "method": "POST",
              "timeout": 0,
              "headers": {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
              },
              "processData": false,
              "mimeType": "multipart/form-data",
              "contentType": false,
              "data": form
            };
            
            $.ajax(settings).done(function(a) {
            $('#kp_Planets').val(a);
           const myObj2 = JSON.parse(a);
      
            $.each(myObj2.data.planets, function(index, value) {
            var values="'"+index+"'";
              $('#kp_Planets_tabel').after('<tr><td>'+value.name+'</td><td>'+value.full_degree+'</td><td>'+value.speed+'</td><td>'+value.sign+'</td><td>'+value.rashi_lord+'</td><td>'+value.nakshatra+'</td><td>'+value.sub_lord+'</td><td>'+value.is_retro+'</td><td>'+value.is_combusted+'</td></tr>');
        });
           
           
          });
    
   
    // kusp kp
    
    
                var form = new FormData();
                form.append("api_key", apikey);
                form.append("full_name", kundli_fullname);
                form.append("day", kundli_day);
                form.append("month", kundli_month);
                form.append("year", kundli_year);
                form.append("hour", kundli_hour);
                form.append("min", kundli_minute);
                form.append("sec", kundli_sec);
                form.append("gender", kundli_gender);
                form.append("place", kundli_birthPlace);
                form.append("lat", kundli_latitude);
                form.append("lon", kundli_longitude);
                form.append("tzone", kundli_timezone);
                form.append("lan", "en");
            
            var settings = {
              "url": "https://astroapi-3.divineapi.com/indian-api/v1/kp/cuspal",
              "method": "POST",
              "timeout": 0,
              "headers": {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
              },
              "processData": false,
              "mimeType": "multipart/form-data",
              "contentType": false,
              "data": form
            };
            
            $.ajax(settings).done(function(d) {
            $('#kp_cusp').val(d);
           const myObj3 = JSON.parse(d);

            $.each(myObj3.data.table_data, function(index, value) {
            var values="'"+index+"'";
              $('#Kp_Cusps_tabel').after('<tr><td>'+value.cusp+'</td><td>'+value.house_cusp.degree+'</td><td>'+value.house_cusp.sign+'</td><td>'+value.rashi_lord+'</td><td>'+value.nakshatra_lord+'</td><td>'+value.sub_lord+'</td></tr>');
        });
           
           
          });
                
     
    
}


function get_astakvarga_data(){
    
    var e=$('#astakvarga').val();
     if(e==='') {
         
     } else {
       
          return false;
     }


    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    
    // sav chart
    
        var form = new FormData();
        form.append("api_key", apikey);
        form.append("full_name", kundli_fullname);
        form.append("day", kundli_day);
        form.append("month", kundli_month);
        form.append("year", kundli_year);
        form.append("hour", kundli_hour);
        form.append("min", kundli_minute);
        form.append("sec", kundli_sec);
        form.append("gender", kundli_gender);
        form.append("place", kundli_birthPlace);
        form.append("lat", kundli_latitude);
        form.append("lon", kundli_longitude);
        form.append("tzone", kundli_timezone);
        form.append("lan", "en");
        
        var settings = {
          "url": "https://astroapi-3.divineapi.com/indian-api/v1/bhinnashtakvarga/sarvashtakavarga/D1",
          "method": "POST",
          "timeout": 0,
          "headers": {
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
          },
          "processData": false,
          "mimeType": "multipart/form-data",
          "contentType": false,
          "data": form
        };
        
        $.ajax(settings).done(function(e) {
            $('#astakvarga').val(e);
           const myObj1 = JSON.parse(e);
           
          let text = "<table >"
          text += "<tr><th>Sav</th></tr><tr><td>" + myObj1.data.chart.svg + "</td></tr>";
          text += "</table>"
          $('#savchart').html(text);
          });
    
    //   astakvarga
    
        
        var settings = {
          "url": "https://astroapi-3.divineapi.com/indian-api/v1/bhinnashtakvarga/ashtakvarga",
          "method": "POST",
          "timeout": 0,
          "headers": {
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
          },
          "processData": false,
          "mimeType": "multipart/form-data",
          "contentType": false,
          "data": form
        };
        
        $.ajax(settings).done(function(d) {
            $('#astakvarga_all').val(d);
           const myObj3 = JSON.parse(d);

            $.each(myObj3.data.chart, function(index, value) {
            var values="'"+index+"'";
              $('#astakvarga_full').after('<tr class="astakvarga hidden"><th>'+index+'</th></tr><tr class="astakvarga hidden"><td>'+value.svg+'</td></tr>');
        });
            
    
        });     
            
}


function get_chart_data(){
    
      
         var e=$('#chart_bhav_chalit').val();
     if(e==='') {
         
     } else {
       
          return false;
     }

    // chalit
 
    var form = new FormData();
        form.append("api_key", apikey);
        form.append("full_name", kundli_fullname);
        form.append("day", kundli_day);
        form.append("month", kundli_month);
        form.append("year", kundli_year);
        form.append("hour", kundli_hour);
        form.append("min", kundli_minute);
        form.append("sec", kundli_sec);
        form.append("gender", kundli_gender);
        form.append("place", kundli_birthPlace);
        form.append("lat", kundli_latitude);
        form.append("lon", kundli_longitude);
        form.append("tzone", kundli_timezone);
        form.append("lan", "en");
     
     var settings = {
       "url": "https://astroapi-3.divineapi.com/indian-api/v1/horoscope-chart/chalit",
       "method": "POST",
       "timeout": 0,
       "headers": {
         "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
       },
       "processData": false,
       "mimeType": "multipart/form-data",
       "contentType": false,
       "data": form
     };
     
     $.ajax(settings).done(function(e) {
            $('#chart_bhav_chalit').val(e);
           const myObj1 = JSON.parse(e);
           let text = "<table >"
           text += "<tr><td>" + myObj1.data.svg + "</td></tr>";
           text += "</table>"
           $('#chart_bhavchalitchart').html(text);
          });
            
       
    //  sun
    
    
    var settings = {
       "url": "https://astroapi-3.divineapi.com/indian-api/v1/horoscope-chart/SUN",
       "method": "POST",
       "timeout": 0,
       "headers": {
         "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
       },
       "processData": false,
       "mimeType": "multipart/form-data",
       "contentType": false,
       "data": form
     };
     
    $.ajax(settings).done(function(a) {
            $('#chart_bhav_chalit').val(a);
           const myObj2 = JSON.parse(a);
           let text = "<table >"
           text += "<tr><td>" + myObj2.data.svg + "</td></tr>";
           text += "</table>"
           $('#sunchart').html(text);
          });
    
    
    // moon
   
   var settings = {
       "url": "https://astroapi-3.divineapi.com/indian-api/v1/horoscope-chart/MOON",
       "method": "POST",
       "timeout": 0,
       "headers": {
         "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
       },
       "processData": false,
       "mimeType": "multipart/form-data",
       "contentType": false,
       "data": form
     }; 
     
    $.ajax(settings).done(function(b) {
            $('#chart_moon').val(b);
           const myObj3 = JSON.parse(b);
           let text = "<table >"
           text += "<tr><td>" + myObj3.data.svg + "</td></tr>";
           text += "</table>"
           $('#moonchart').html(text);
          });
   
    // D1
    
    var settings = {
       "url": "https://astroapi-3.divineapi.com/indian-api/v1/horoscope-chart/D1",
       "method": "POST",
       "timeout": 0,
       "headers": {
         "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
       },
       "processData": false,
       "mimeType": "multipart/form-data",
       "contentType": false,
       "data": form
     }; 
     
    $.ajax(settings).done(function(c) {
            $('#chart_lagna').val(c);
           const myObj4 = JSON.parse(c);
           let text = "<table >"
           text += "<tr><td>" + myObj4.data.svg + "</td></tr>";
           text += "</table>"
           $('#lagnachart').html(text);
          });
    
    
    // D2 
    
    
    var settings = {
       "url": "https://astroapi-3.divineapi.com/indian-api/v1/horoscope-chart/D2",
       "method": "POST",
       "timeout": 0,
       "headers": {
         "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
       },
       "processData": false,
       "mimeType": "multipart/form-data",
       "contentType": false,
       "data": form
     }; 
     
    $.ajax(settings).done(function(d) {
            $('#horo_lagna').val(d);
           const myObj5 = JSON.parse(d);
           let text = "<table >"
           text += "<tr><td>" + myObj5.data.svg + "</td></tr>";
           text += "</table>"
           $('#horochart').html(text);
          });
    
      
    // D3
    
     var settings = {
       "url": "https://astroapi-3.divineapi.com/indian-api/v1/horoscope-chart/D3",
       "method": "POST",
       "timeout": 0,
       "headers": {
         "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
       },
       "processData": false,
       "mimeType": "multipart/form-data",
       "contentType": false,
       "data": form
     }; 
     
    $.ajax(settings).done(function(f) {
            $('#drekhanna_lagna').val(f);
           const myObj6 = JSON.parse(f);
           let text = "<table >"
           text += "<tr><td>" + myObj6.data.svg + "</td></tr>";
           text += "</table>"
           $('#drekkanachart').html(text);
          });
    
    // D4
    
    var settings = {
       "url": "https://astroapi-3.divineapi.com/indian-api/v1/horoscope-chart/D4",
       "method": "POST",
       "timeout": 0,
       "headers": {
         "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
       },
       "processData": false,
       "mimeType": "multipart/form-data",
       "contentType": false,
       "data": form
     }; 
     
    $.ajax(settings).done(function(g) {
            $('#chaturthmasa').val(g);
           const myObj7 = JSON.parse(g);
           let text = "<table >"
           text += "<tr><td>" + myObj7.data.svg + "</td></tr>";
           text += "</table>"
           $('#chaturthmasachart').html(text);
          });
    
    // D7
    
    
    var settings = {
       "url": "https://astroapi-3.divineapi.com/indian-api/v1/horoscope-chart/D7",
       "method": "POST",
       "timeout": 0,
       "headers": {
         "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
       },
       "processData": false,
       "mimeType": "multipart/form-data",
       "contentType": false,
       "data": form
     }; 
     
    $.ajax(settings).done(function(h) {
            $('#saptmasa').val(h);
           const myObj8 = JSON.parse(h);
           let text = "<table >"
           text += "<tr><td>" + myObj8.data.svg + "</td></tr>";
           text += "</table>"
           $('#saptmasachart').html(text);
          });
    
    // D9
    
      
    var settings = {
       "url": "https://astroapi-3.divineapi.com/indian-api/v1/horoscope-chart/D9",
       "method": "POST",
       "timeout": 0,
       "headers": {
         "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
       },
       "processData": false,
       "mimeType": "multipart/form-data",
       "contentType": false,
       "data": form
     }; 
     
    $.ajax(settings).done(function(i) {
            $('#navmasa').val(i);
           const myObj9 = JSON.parse(i);
           let text = "<table >"
           text += "<tr><td>" + myObj9.data.svg + "</td></tr>";
           text += "</table>"
           $('#navmasachart').html(text);
          });
   
    //   D10
    
    
      var settings = {
       "url": "https://astroapi-3.divineapi.com/indian-api/v1/horoscope-chart/D10",
       "method": "POST",
       "timeout": 0,
       "headers": {
         "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
       },
       "processData": false,
       "mimeType": "multipart/form-data",
       "contentType": false,
       "data": form
     }; 
     
    $.ajax(settings).done(function(j) {
            $('#dasmasa').val(j);
           const myObj10 = JSON.parse(j);
           let text = "<table >"
           text += "<tr><td>" + myObj10.data.svg + "</td></tr>";
           text += "</table>"
           $('#dasmasachart').html(text);
          });
    
    // D12
    
    
    
      var settings = {
       "url": "https://astroapi-3.divineapi.com/indian-api/v1/horoscope-chart/D12",
       "method": "POST",
       "timeout": 0,
       "headers": {
         "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
       },
       "processData": false,
       "mimeType": "multipart/form-data",
       "contentType": false,
       "data": form
     }; 
     
    $.ajax(settings).done(function(l) {
            $('#dwadasmasa').val(l);
           const myObj12 = JSON.parse(l);
           let text = "<table >"
           text += "<tr><td>" + myObj12.data.svg + "</td></tr>";
           text += "</table>"
           $('#dwadasmasachart').html(text);
          });
    
    
    // D16
    
    
     var settings = {
       "url": "https://astroapi-3.divineapi.com/indian-api/v1/horoscope-chart/D16",
       "method": "POST",
       "timeout": 0,
       "headers": {
         "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
       },
       "processData": false,
       "mimeType": "multipart/form-data",
       "contentType": false,
       "data": form
     }; 
     
    $.ajax(settings).done(function(l) {
            $('#shodasamsa').val(l);
           const myObj12 = JSON.parse(l);
           let text = "<table >"
           text += "<tr><td>" + myObj12.data.svg + "</td></tr>";
           text += "</table>"
           $('#shodasamsachart').html(text);
          });
    
    // D20
    
    
         var settings = {
       "url": "https://astroapi-3.divineapi.com/indian-api/v1/horoscope-chart/D20",
       "method": "POST",
       "timeout": 0,
       "headers": {
         "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
       },
       "processData": false,
       "mimeType": "multipart/form-data",
       "contentType": false,
       "data": form
     }; 
     
    $.ajax(settings).done(function(m) {
            $('#vimsamsamsa').val(m);
           const myObj14 = JSON.parse(m);
           let text = "<table >"
           text += "<tr><td>" + myObj14.data.svg + "</td></tr>";
           text += "</table>"
           $('#vimsamsamsachart').html(text);
          });
    
    
    // D24
    
         var settings = {
       "url": "https://astroapi-3.divineapi.com/indian-api/v1/horoscope-chart/D24",
       "method": "POST",
       "timeout": 0,
       "headers": {
         "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
       },
       "processData": false,
       "mimeType": "multipart/form-data",
       "contentType": false,
       "data": form
     }; 
     
    $.ajax(settings).done(function(n) {
            $('#chaturvimsamsa').val(n);
           const myObj15 = JSON.parse(n);
           let text = "<table >"
           text += "<tr><td>" + myObj15.data.svg + "</td></tr>";
           text += "</table>"
           $('#chaturvimsamsachart').html(text);
          });
    
    //   D27
    
    
             var settings = {
       "url": "https://astroapi-3.divineapi.com/indian-api/v1/horoscope-chart/D27",
       "method": "POST",
       "timeout": 0,
       "headers": {
         "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
       },
       "processData": false,
       "mimeType": "multipart/form-data",
       "contentType": false,
       "data": form
     }; 
     
    $.ajax(settings).done(function(o) {
            $('#saptavimsamsa').val(o);
           const myObj16 = JSON.parse(o);
           let text = "<table >"
           text += "<tr><td>" + myObj16.data.svg + "</td></tr>";
           text += "</table>"
           $('#saptavimsamsachart').html(text);
          });
    
    //   D30
    
    
        var settings = {
       "url": "https://astroapi-3.divineapi.com/indian-api/v1/horoscope-chart/D30",
       "method": "POST",
       "timeout": 0,
       "headers": {
         "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
       },
       "processData": false,
       "mimeType": "multipart/form-data",
       "contentType": false,
       "data": form
     }; 
     
    $.ajax(settings).done(function(p) {
            $('#trimsamsa').val(p);
           const myObj17 = JSON.parse(p);
           let text = "<table >"
           text += "<tr><td>" + myObj17.data.svg + "</td></tr>";
           text += "</table>"
           $('#trimsamsachart').html(text);
          });
    
    // D40 
    
    
       var settings = {
       "url": "https://astroapi-3.divineapi.com/indian-api/v1/horoscope-chart/D40",
       "method": "POST",
       "timeout": 0,
       "headers": {
         "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
       },
       "processData": false,
       "mimeType": "multipart/form-data",
       "contentType": false,
       "data": form
     }; 
     
    $.ajax(settings).done(function(q) {
            $('#khavedamsa').val(q);
           const myObj18 = JSON.parse(q);
           let text = "<table >"
           text += "<tr><td>" + myObj18.data.svg + "</td></tr>";
           text += "</table>"
           $('#khavedamsachart').html(text);
          });
    
    //   D45 
    
    
    var settings = {
       "url": "https://astroapi-3.divineapi.com/indian-api/v1/horoscope-chart/D45",
       "method": "POST",
       "timeout": 0,
       "headers": {
         "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
       },
       "processData": false,
       "mimeType": "multipart/form-data",
       "contentType": false,
       "data": form
     }; 
     
    $.ajax(settings).done(function(z) {
            $('#drekkana_akshavedamsa_div').val(z);
           const myObj30 = JSON.parse(z);
        //   console.log(myObj30);
           let text = "<table >"
           text += "<tr><td>" + myObj30.data.svg + "</td></tr>";
           text += "</table>"
           $('#akshavedamsaachart').html(text);
          });
    
    //  D60 
    
     var settings = {
       "url": "https://astroapi-3.divineapi.com/indian-api/v1/horoscope-chart/D60",
       "method": "POST",
       "timeout": 0,
       "headers": {
         "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
       },
       "processData": false,
       "mimeType": "multipart/form-data",
       "contentType": false,
       "data": form
     }; 
     
    $.ajax(settings).done(function(o) {
            $('#shastiamsa').val(o);
           const myObj = JSON.parse(o);
          let text = "<table >"
          text += "<tr><td>" + myObj.data.svg + "</td></tr>";
          text += "</table>"
          $('#shastiamsachart').html(text);
          });
    
}


 function back_steps() {
   
        $('.my_lavel14').hide();
        $('.yogini_dasha_hide').hide();
        $('#yogini_dasha').show(); 
  
  }

 
 function get_yogini_antar_dasha(x,y) {
     
    $('.my_lavel14').show();

    $('.yogini_dasha_hide').hide();
    $('#yogini_antar_dasha').show();

    $('#plante_1').val(x);
    
    var yogini_dasha_data = $('#yogini_dasha_data_all').val();

    var value_data = x;
    var planet_value = y;
    
    
     let get_yogini_antar_dasha_data = JSON.stringify({
        
            plant_2:planet_value,
            plante_1: value_data,
            json: yogini_dasha_data,
            
    }); 
     
 
        axios.post('/get_yogini_antar_dasha',get_yogini_antar_dasha_data,{
               headers: {
                'Content-Type': 'application/json'
            }
        }).then(async function(e) {
            // console.log(e);
              $('.yoginii_antar_dasha_data').remove();
            //   document.getElementById('yogini_antar_dasha_data').innerHTML = e.data;
              $('#yogini_antar_dasha_data').after(e.data);
        });
    
 }


function get_dasha_data(){
    
    var e=$('#mahadasa').val();
     if(e==='') {
         
     } else {
       
          return false;
     }    
    
        
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    
    
    // yogini dasha
    
        var form = new FormData();
        form.append("api_key", apikey);
        form.append("full_name", kundli_fullname);
        form.append("day", kundli_day);
        form.append("month", kundli_month);
        form.append("year", kundli_year);
        form.append("hour", kundli_hour);
        form.append("min", kundli_minute);
        form.append("sec", kundli_sec);
        form.append("gender", kundli_gender);
        form.append("place", kundli_birthPlace);
        form.append("lat", kundli_latitude);
        form.append("lon", kundli_longitude);
        form.append("tzone", kundli_timezone);
        form.append("lan", "en");
            
            var settings = {
              "url": "https://astroapi-3.divineapi.com/indian-api/v1/yogini-dasha",
              "method": "POST",
              "timeout": 0,
              "headers": {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
              },
              "processData": false,
              "mimeType": "multipart/form-data",
              "contentType": false,
              "data": form
            };
            
            $.ajax(settings).done(function(u) {
           var  myObj = JSON.parse(u);     
           $('#yogini_dasha_data_all').val(u);
           $.each(myObj.data.maha_dasha, function(index, value) {
            var values="'"+index+"'";
            var dasaantar = "'"+value.dasha+"'";
              $('#yogini_dasha_data').after('<tr><td>'+value.dasha+'</td><td>'+value.start_date+'</td><td>'+value.end_date+' <i onclick="get_yogini_antar_dasha('+values+','+dasaantar+')" class="fa fa-arrow-right" ></i></td></tr>');
            });
            
            });
    
    // maha dasha  sun
    
    
        var form = new FormData();
            form.append("api_key", apikey);
            form.append("year", kundli_year);
            form.append("lat", kundli_latitude);
            form.append("lon", kundli_longitude);
            form.append("tzone", kundli_timezone);
            form.append("maha_dasha", "sun");
            
            var settings = {
              "url": "https://astroapi-3.divineapi.com/indian-api/v1/maha-dasha-analysis",
              "method": "POST",
              "timeout": 0,
              "headers": {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
              },
              "processData": false,
              "mimeType": "multipart/form-data",
              "contentType": false,
              "data": form
            };
            
            $.ajax(settings).done(function(e) {
            $('#mahadasa').val(e);
           const myObj = JSON.parse(e);
             $.each(myObj.data.analysis, function(index, value) {
            var values="'"+index+"'";
              $('#mahadasatabel_sun').after('<tr class="mahadasavim color-green"><td>'+value+'</td></tr>');
             });
    
        });
        
        
         // maha dasha  moon
    
    
        var form = new FormData();
            form.append("api_key", apikey);
            form.append("year", kundli_year);
            form.append("lat", kundli_latitude);
            form.append("lon", kundli_longitude);
            form.append("tzone", kundli_timezone);
            form.append("maha_dasha", "moon");
            
            var settings = {
              "url": "https://astroapi-3.divineapi.com/indian-api/v1/maha-dasha-analysis",
              "method": "POST",
              "timeout": 0,
              "headers": {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
              },
              "processData": false,
              "mimeType": "multipart/form-data",
              "contentType": false,
              "data": form
            };
            
            $.ajax(settings).done(function(e) {
            $('#mahadasa').val(e);
           const myObj = JSON.parse(e);
             $.each(myObj.data.analysis, function(index, value) {
            var values="'"+index+"'";
              $('#mahadasatabel_moon').after('<tr class="mahadasavim color-green"><td>'+value+'</td></tr>');
            });
          });
          
          
               // maha dasha  mars
    
    
        var form = new FormData();
            form.append("api_key", apikey);
            form.append("year", kundli_year);
            form.append("lat", kundli_latitude);
            form.append("lon", kundli_longitude);
            form.append("tzone", kundli_timezone);
            form.append("maha_dasha", "mars");
            
            var settings = {
              "url": "https://astroapi-3.divineapi.com/indian-api/v1/maha-dasha-analysis",
              "method": "POST",
              "timeout": 0,
              "headers": {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
              },
              "processData": false,
              "mimeType": "multipart/form-data",
              "contentType": false,
              "data": form
            };
            
            $.ajax(settings).done(function(e) {
            $('#mahadasa').val(e);
           const myObj = JSON.parse(e);
             $.each(myObj.data.analysis, function(index, value) {
            var values="'"+index+"'";
              $('#mahadasatabel_mars').after('<tr class="mahadasavim color-green"><td>'+value+'</td></tr>');
        });
          });
    

       // maha dasha  mercury
    
    
        var form = new FormData();
            form.append("api_key", apikey);
            form.append("year", kundli_year);
            form.append("lat", kundli_latitude);
            form.append("lon", kundli_longitude);
            form.append("tzone", kundli_timezone);
            form.append("maha_dasha", "mercury");
            
            var settings = {
              "url": "https://astroapi-3.divineapi.com/indian-api/v1/maha-dasha-analysis",
              "method": "POST",
              "timeout": 0,
              "headers": {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
              },
              "processData": false,
              "mimeType": "multipart/form-data",
              "contentType": false,
              "data": form
            };
            
            $.ajax(settings).done(function(e) {
            $('#mahadasa').val(e);
           const myObj = JSON.parse(e);
             $.each(myObj.data.analysis, function(index, value) {
            var values="'"+index+"'";
              $('#mahadasatabel_mercury').after('<tr class="mahadasavim color-green"><td>'+value+'</td></tr>');
        });
          });
    
    
         // maha dasha  venus
    
    
        var form = new FormData();
            form.append("api_key", apikey);
            form.append("year", kundli_year);
            form.append("lat", kundli_latitude);
            form.append("lon", kundli_longitude);
            form.append("tzone", kundli_timezone);
            form.append("maha_dasha", "venus");
            
            var settings = {
              "url": "https://astroapi-3.divineapi.com/indian-api/v1/maha-dasha-analysis",
              "method": "POST",
              "timeout": 0,
              "headers": {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
              },
              "processData": false,
              "mimeType": "multipart/form-data",
              "contentType": false,
              "data": form
            };
            
            $.ajax(settings).done(function(e) {
            $('#mahadasa').val(e);
           const myObj = JSON.parse(e);
             $.each(myObj.data.analysis, function(index, value) {
            var values="'"+index+"'";
              $('#mahadasatabel_venus').after('<tr class="mahadasavim"><td>'+value+'</td></tr>');
        });
          });
          
          
          
            // maha dasha  saturn
    
    
        var form = new FormData();
            form.append("api_key", apikey);
            form.append("year", kundli_year);
            form.append("lat", kundli_latitude);
            form.append("lon", kundli_longitude);
            form.append("tzone", kundli_timezone);
            form.append("maha_dasha", "saturn");
            
            var settings = {
              "url": "https://astroapi-3.divineapi.com/indian-api/v1/maha-dasha-analysis",
              "method": "POST",
              "timeout": 0,
              "headers": {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
              },
              "processData": false,
              "mimeType": "multipart/form-data",
              "contentType": false,
              "data": form
            };
            
            $.ajax(settings).done(function(e) {
            $('#mahadasa').val(e);
           const myObj = JSON.parse(e);
             $.each(myObj.data.analysis, function(index, value) {
            var values="'"+index+"'";
              $('#mahadasatabel_saturn').after('<tr class="mahadasavim"><td>'+value+'</td></tr>');
        });
          });
          
          
             // maha dasha  jupiter
    
    
        var form = new FormData();
            form.append("api_key", apikey);
            form.append("year", kundli_year);
            form.append("lat", kundli_latitude);
            form.append("lon", kundli_longitude);
            form.append("tzone", kundli_timezone);
            form.append("maha_dasha", "jupiter");
            
            var settings = {
              "url": "https://astroapi-3.divineapi.com/indian-api/v1/maha-dasha-analysis",
              "method": "POST",
              "timeout": 0,
              "headers": {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
              },
              "processData": false,
              "mimeType": "multipart/form-data",
              "contentType": false,
              "data": form
            };
            
            $.ajax(settings).done(function(e) {
            $('#mahadasa').val(e);
           const myObj = JSON.parse(e);
             $.each(myObj.data.analysis, function(index, value) {
            var values="'"+index+"'";
              $('#mahadasatabel_jupiter').after('<tr class="mahadasavim"><td>'+value+'</td></tr>');
        });
          });

         
            // maha dasha  ketu
    
    
        var form = new FormData();
            form.append("api_key", apikey);
            form.append("year", kundli_year);
            form.append("lat", kundli_latitude);
            form.append("lon", kundli_longitude);
            form.append("tzone", kundli_timezone);
            form.append("maha_dasha", "ketu");
            
            var settings = {
              "url": "https://astroapi-3.divineapi.com/indian-api/v1/maha-dasha-analysis",
              "method": "POST",
              "timeout": 0,
              "headers": {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
              },
              "processData": false,
              "mimeType": "multipart/form-data",
              "contentType": false,
              "data": form
            };
            
            $.ajax(settings).done(function(e) {
            $('#mahadasa').val(e);
           const myObj = JSON.parse(e);
             $.each(myObj.data.analysis, function(index, value) {
            var values="'"+index+"'";
              $('#mahadasatabel_ketu').after('<tr class="mahadasavim"><td>'+value+'</td></tr>');
        });
          });
         
         
           // maha dasha  rahu
    
    
        var form = new FormData();
            form.append("api_key", apikey);
            form.append("year", kundli_year);
            form.append("lat", kundli_latitude);
            form.append("lon", kundli_longitude);
            form.append("tzone", kundli_timezone);
            form.append("maha_dasha", "rahu");
            
            var settings = {
              "url": "https://astroapi-3.divineapi.com/indian-api/v1/maha-dasha-analysis",
              "method": "POST",
              "timeout": 0,
              "headers": {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
              },
              "processData": false,
              "mimeType": "multipart/form-data",
              "contentType": false,
              "data": form
            };
            
            $.ajax(settings).done(function(e) {
            $('#mahadasa').val(e);
           const myObj = JSON.parse(e);
             $.each(myObj.data.analysis, function(index, value) {
            var values="'"+index+"'";
              $('#mahadasatabel_rahu').after('<tr class="mahadasavim"><td>'+value+'</td></tr>');
        });
          });
        
         

    
}






function get_freePart_data(){
    
       var e=$('#freedata').val();
     if(e==='') {
         
     } else {
       
          return false;
     }    
 
    // acented report
    var form = new FormData();
        form.append("api_key", apikey);
        form.append("full_name", kundli_fullname);
        form.append("day", kundli_day);
        form.append("month", kundli_month);
        form.append("year", kundli_year);
        form.append("hour", kundli_hour);
        form.append("min", kundli_minute);
        form.append("sec", kundli_sec);
        form.append("gender", kundli_gender);
        form.append("place", kundli_birthPlace);
        form.append("lat", kundli_latitude);
        form.append("lon", kundli_longitude);
        form.append("tzone", kundli_timezone);
        form.append("lan", "en"); 
 

        var settings = {
          "url": "https://astroapi-3.divineapi.com/indian-api/v2/ascendant-report",
          "method": "POST",
          "timeout": 0,
          "headers": {
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
          },
          "processData": false,
          "mimeType": "multipart/form-data",
          "contentType": false,
          "data": form
        };
        
        $.ajax(settings).done(function(e) {
            $('#freedata').val(e);
           const myObj = JSON.parse(e);
             $.each(myObj.data.analysis, function(index, value) {
            var values="'"+index+"'";
              $('#generaldata').after('<tr><th>'+index+'</th></tr><tr><td>'+value+'</td></tr>');
        });
          });
 
    
    //  planet_analysis sun
    
    
    var form = new FormData();
        form.append("api_key", apikey);
        form.append("full_name", kundli_fullname);
        form.append("day", kundli_day);
        form.append("month", kundli_month);
        form.append("year", kundli_year);
        form.append("hour", kundli_hour);
        form.append("min", kundli_minute);
        form.append("sec", kundli_sec);
        form.append("gender", kundli_gender);
        form.append("place", kundli_birthPlace);
        form.append("lat", kundli_latitude);
        form.append("lon", kundli_longitude);
        form.append("tzone", kundli_timezone);
        form.append("lan", "en"); 
        form.append("analysis_planet", "Sun");
        
        var settings = {
          "url": "https://astroapi-3.divineapi.com/indian-api/v1/planet-analysis",
          "method": "POST",
          "timeout": 0,
          "headers": {
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
          },
          "processData": false,
          "mimeType": "multipart/form-data",
          "contentType": false,
          "data": form
        };
        
        $.ajax(settings).done(function(f) {
           const myObj1 = JSON.parse(f);
             $.each(myObj1.data.analysis, function(index, value) {
            var values="'"+index+"'";
              $('#planet_analysis_data').after('<tr><th>'+index+'</th></tr><tr><td>'+value+'</td></tr>');
        });
    });
    
    
     //  planet_analysis moon
    
    
    var form = new FormData();
        form.append("api_key", apikey);
        form.append("full_name", kundli_fullname);
        form.append("day", kundli_day);
        form.append("month", kundli_month);
        form.append("year", kundli_year);
        form.append("hour", kundli_hour);
        form.append("min", kundli_minute);
        form.append("sec", kundli_sec);
        form.append("gender", kundli_gender);
        form.append("place", kundli_birthPlace);
        form.append("lat", kundli_latitude);
        form.append("lon", kundli_longitude);
        form.append("tzone", kundli_timezone);
        form.append("lan", "en"); 
        form.append("analysis_planet", "moon");
        
        var settings = {
          "url": "https://astroapi-3.divineapi.com/indian-api/v1/planet-analysis",
          "method": "POST",
          "timeout": 0,
          "headers": {
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
          },
          "processData": false,
          "mimeType": "multipart/form-data",
          "contentType": false,
          "data": form
        };
        
        $.ajax(settings).done(function(g) {
           const myObj2 = JSON.parse(g);
             $.each(myObj2.data.analysis, function(index, value) {
            var values="'"+index+"'";
              $('#planet_analysis_data_moon').after('<tr><th>'+index+'</th></tr><tr><td>'+value+'</td></tr>');
        });
    });
    
    
    
     //  planet_analysis mars
    
    
    var form = new FormData();
        form.append("api_key", apikey);
        form.append("full_name", kundli_fullname);
        form.append("day", kundli_day);
        form.append("month", kundli_month);
        form.append("year", kundli_year);
        form.append("hour", kundli_hour);
        form.append("min", kundli_minute);
        form.append("sec", kundli_sec);
        form.append("gender", kundli_gender);
        form.append("place", kundli_birthPlace);
        form.append("lat", kundli_latitude);
        form.append("lon", kundli_longitude);
        form.append("tzone", kundli_timezone);
        form.append("lan", "en"); 
        form.append("analysis_planet", "mars");
        
        var settings = {
          "url": "https://astroapi-3.divineapi.com/indian-api/v1/planet-analysis",
          "method": "POST",
          "timeout": 0,
          "headers": {
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
          },
          "processData": false,
          "mimeType": "multipart/form-data",
          "contentType": false,
          "data": form
        };
        
        $.ajax(settings).done(function(h) {
           const myObj2 = JSON.parse(h);
             $.each(myObj2.data.analysis, function(index, value) {
            var values="'"+index+"'";
              $('#planet_analysis_data_mars').after('<tr><th>'+index+'</th></tr><tr><td>'+value+'</td></tr>');
        });
    });
    
    
      //  planet_analysis mercury
    
    
    var form = new FormData();
        form.append("api_key", apikey);
        form.append("full_name", kundli_fullname);
        form.append("day", kundli_day);
        form.append("month", kundli_month);
        form.append("year", kundli_year);
        form.append("hour", kundli_hour);
        form.append("min", kundli_minute);
        form.append("sec", kundli_sec);
        form.append("gender", kundli_gender);
        form.append("place", kundli_birthPlace);
        form.append("lat", kundli_latitude);
        form.append("lon", kundli_longitude);
        form.append("tzone", kundli_timezone);
        form.append("lan", "en"); 
        form.append("analysis_planet", "mercury");
        
        var settings = {
          "url": "https://astroapi-3.divineapi.com/indian-api/v1/planet-analysis",
          "method": "POST",
          "timeout": 0,
          "headers": {
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
          },
          "processData": false,
          "mimeType": "multipart/form-data",
          "contentType": false,
          "data": form
        };
        
        $.ajax(settings).done(function(i) {
           const myObj3 = JSON.parse(i);
             $.each(myObj3.data.analysis, function(index, value) {
            var values="'"+index+"'";
              $('#planet_analysis_data_mercury').after('<tr><th>'+index+'</th></tr><tr><td>'+value+'</td></tr>');
        });
    });
    
    
    
      //  planet_analysis venus
    
    
    var form = new FormData();
        form.append("api_key", apikey);
        form.append("full_name", kundli_fullname);
        form.append("day", kundli_day);
        form.append("month", kundli_month);
        form.append("year", kundli_year);
        form.append("hour", kundli_hour);
        form.append("min", kundli_minute);
        form.append("sec", kundli_sec);
        form.append("gender", kundli_gender);
        form.append("place", kundli_birthPlace);
        form.append("lat", kundli_latitude);
        form.append("lon", kundli_longitude);
        form.append("tzone", kundli_timezone);
        form.append("lan", "en"); 
        form.append("analysis_planet", "venus");
        
        var settings = {
          "url": "https://astroapi-3.divineapi.com/indian-api/v1/planet-analysis",
          "method": "POST",
          "timeout": 0,
          "headers": {
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
          },
          "processData": false,
          "mimeType": "multipart/form-data",
          "contentType": false,
          "data": form
        };
        
        $.ajax(settings).done(function(j) {
           const myObj4 = JSON.parse(j);
             $.each(myObj4.data.analysis, function(index, value) {
            var values="'"+index+"'";
              $('#planet_analysis_data_venus').after('<tr><th>'+index+'</th></tr><tr><td>'+value+'</td></tr>');
        });
    });
    
         //  planet_analysis saturn
    
    
    var form = new FormData();
        form.append("api_key", apikey);
        form.append("full_name", kundli_fullname);
        form.append("day", kundli_day);
        form.append("month", kundli_month);
        form.append("year", kundli_year);
        form.append("hour", kundli_hour);
        form.append("min", kundli_minute);
        form.append("sec", kundli_sec);
        form.append("gender", kundli_gender);
        form.append("place", kundli_birthPlace);
        form.append("lat", kundli_latitude);
        form.append("lon", kundli_longitude);
        form.append("tzone", kundli_timezone);
        form.append("lan", "en"); 
        form.append("analysis_planet", "saturn");
        
        var settings = {
          "url": "https://astroapi-3.divineapi.com/indian-api/v1/planet-analysis",
          "method": "POST",
          "timeout": 0,
          "headers": {
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
          },
          "processData": false,
          "mimeType": "multipart/form-data",
          "contentType": false,
          "data": form
        };
        
        $.ajax(settings).done(function(k) {
           const myObj5 = JSON.parse(k);
             $.each(myObj5.data.analysis, function(index, value) {
            var values="'"+index+"'";
              $('#planet_analysis_data_saturn').after('<tr><th>'+index+'</th></tr><tr><td>'+value+'</td></tr>');
        });
    });
    
     
          //  planet_analysis jupiter
    
    
    var form = new FormData();
        form.append("api_key", apikey);
        form.append("full_name", kundli_fullname);
        form.append("day", kundli_day);
        form.append("month", kundli_month);
        form.append("year", kundli_year);
        form.append("hour", kundli_hour);
        form.append("min", kundli_minute);
        form.append("sec", kundli_sec);
        form.append("gender", kundli_gender);
        form.append("place", kundli_birthPlace);
        form.append("lat", kundli_latitude);
        form.append("lon", kundli_longitude);
        form.append("tzone", kundli_timezone);
        form.append("lan", "en"); 
        form.append("analysis_planet", "jupiter");
        
        var settings = {
          "url": "https://astroapi-3.divineapi.com/indian-api/v1/planet-analysis",
          "method": "POST",
          "timeout": 0,
          "headers": {
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
          },
          "processData": false,
          "mimeType": "multipart/form-data",
          "contentType": false,
          "data": form
        };
        
        $.ajax(settings).done(function(l) {
           const myObj6 = JSON.parse(l);
             $.each(myObj6.data.analysis, function(index, value) {
            var values="'"+index+"'";
              $('#planet_analysis_data_jupiter').after('<tr><th>'+index+'</th></tr><tr><td>'+value+'</td></tr>');
        });
          });
          
          
       //  planet_analysis ketu
    
    
    var form = new FormData();
        form.append("api_key", apikey);
        form.append("full_name", kundli_fullname);
        form.append("day", kundli_day);
        form.append("month", kundli_month);
        form.append("year", kundli_year);
        form.append("hour", kundli_hour);
        form.append("min", kundli_minute);
        form.append("sec", kundli_sec);
        form.append("gender", kundli_gender);
        form.append("place", kundli_birthPlace);
        form.append("lat", kundli_latitude);
        form.append("lon", kundli_longitude);
        form.append("tzone", kundli_timezone);
        form.append("lan", "en"); 
        form.append("analysis_planet", "ketu");
        
        var settings = {
          "url": "https://astroapi-3.divineapi.com/indian-api/v1/planet-analysis",
          "method": "POST",
          "timeout": 0,
          "headers": {
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
          },
          "processData": false,
          "mimeType": "multipart/form-data",
          "contentType": false,
          "data": form
        };
        
        $.ajax(settings).done(function(m) {
           const myObj7 = JSON.parse(m);
             $.each(myObj7.data.analysis, function(index, value) {
            var values="'"+index+"'";
              $('#planet_analysis_data_ketu').after('<tr><th>'+index+'</th></tr><tr><td>'+value+'</td></tr>');
        });
    });
    
    
       //  planet_analysis rahu
    
    
    var form = new FormData();
        form.append("api_key", apikey);
        form.append("full_name", kundli_fullname);
        form.append("day", kundli_day);
        form.append("month", kundli_month);
        form.append("year", kundli_year);
        form.append("hour", kundli_hour);
        form.append("min", kundli_minute);
        form.append("sec", kundli_sec);
        form.append("gender", kundli_gender);
        form.append("place", kundli_birthPlace);
        form.append("lat", kundli_latitude);
        form.append("lon", kundli_longitude);
        form.append("tzone", kundli_timezone);
        form.append("lan", "en"); 
        form.append("analysis_planet", "rahu");
        
        var settings = {
          "url": "https://astroapi-3.divineapi.com/indian-api/v1/planet-analysis",
          "method": "POST",
          "timeout": 0,
          "headers": {
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
          },
          "processData": false,
          "mimeType": "multipart/form-data",
          "contentType": false,
          "data": form
        };
        
        $.ajax(settings).done(function(n) {
           const myObj8 = JSON.parse(n);
             $.each(myObj8.data.analysis, function(index, value) {
            var values="'"+index+"'";
              $('#planet_analysis_data_rahu').after('<tr><th>'+index+'</th></tr><tr><td>'+value+'</td></tr>');
        });
    });
    
    //   maha dasa section sun
    
        var form = new FormData();
            form.append("api_key", apikey);
            form.append("year", kundli_year);
            form.append("lat", kundli_latitude);
            form.append("lon", kundli_longitude);
            form.append("tzone", kundli_timezone);
            form.append("maha_dasha", "sun");
            
            var settings = {
              "url": "https://astroapi-3.divineapi.com/indian-api/v1/maha-dasha-analysis",
              "method": "POST",
              "timeout": 0,
              "headers": {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
              },
              "processData": false,
              "mimeType": "multipart/form-data",
              "contentType": false,
              "data": form
            };
            
            $.ajax(settings).done(function(o) {
           const myObj11 = JSON.parse(o);
             $.each(myObj11.data.analysis, function(index, value) {
            var values="'"+index+"'";
              $('#freemahadasatabel_sun').after('<tr><td>'+value+'</td></tr>');
        });
    });
    
    
     //   maha dasa section moon
    
        var form = new FormData();
            form.append("api_key", apikey);
            form.append("year", kundli_year);
            form.append("lat", kundli_latitude);
            form.append("lon", kundli_longitude);
            form.append("tzone", kundli_timezone);
            form.append("maha_dasha", "moon");
            
            var settings = {
              "url": "https://astroapi-3.divineapi.com/indian-api/v1/maha-dasha-analysis",
              "method": "POST",
              "timeout": 0,
              "headers": {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
              },
              "processData": false,
              "mimeType": "multipart/form-data",
              "contentType": false,
              "data": form
            };
            
            $.ajax(settings).done(function(e) {
           const myObj12 = JSON.parse(e);
             $.each(myObj12.data.analysis, function(index, value) {
            var values="'"+index+"'";
              $('#freemahadasatabel_moon').after('<tr><td>'+value+'</td></tr>');
        });
    });
    
        //   maha dasa section mars
    
        var form = new FormData();
            form.append("api_key", apikey);
            form.append("year", kundli_year);
            form.append("lat", kundli_latitude);
            form.append("lon", kundli_longitude);
            form.append("tzone", kundli_timezone);
            form.append("maha_dasha", "mars");
            
            var settings = {
              "url": "https://astroapi-3.divineapi.com/indian-api/v1/maha-dasha-analysis",
              "method": "POST",
              "timeout": 0,
              "headers": {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
              },
              "processData": false,
              "mimeType": "multipart/form-data",
              "contentType": false,
              "data": form
            };
            
            $.ajax(settings).done(function(e) {
           const myObj13 = JSON.parse(e);
             $.each(myObj13.data.analysis, function(index, value) {
            var values="'"+index+"'";
              $('#freemahadasatabel_mars').after('<tr><td>'+value+'</td></tr>');
        });
    });
    
    
            //   maha dasa section mercury
    
        var form = new FormData();
            form.append("api_key", apikey);
            form.append("year", kundli_year);
            form.append("lat", kundli_latitude);
            form.append("lon", kundli_longitude);
            form.append("tzone", kundli_timezone);
            form.append("maha_dasha", "mercury");
            
            var settings = {
              "url": "https://astroapi-3.divineapi.com/indian-api/v1/maha-dasha-analysis",
              "method": "POST",
              "timeout": 0,
              "headers": {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
              },
              "processData": false,
              "mimeType": "multipart/form-data",
              "contentType": false,
              "data": form
            };
            
            $.ajax(settings).done(function(e) {
           const myObj14 = JSON.parse(e);
             $.each(myObj14.data.analysis, function(index, value) {
            var values="'"+index+"'";
              $('#freemahadasatabel_mercury').after('<tr><td>'+value+'</td></tr>');
        });
    });
    
    
        //   maha dasa section venus
    
        var form = new FormData();
            form.append("api_key", apikey);
            form.append("year", kundli_year);
            form.append("lat", kundli_latitude);
            form.append("lon", kundli_longitude);
            form.append("tzone", kundli_timezone);
            form.append("maha_dasha", "venus");
            
            var settings = {
              "url": "https://astroapi-3.divineapi.com/indian-api/v1/maha-dasha-analysis",
              "method": "POST",
              "timeout": 0,
              "headers": {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
              },
              "processData": false,
              "mimeType": "multipart/form-data",
              "contentType": false,
              "data": form
            };
            
            $.ajax(settings).done(function(e) {
           const myObj14 = JSON.parse(e);
             $.each(myObj14.data.analysis, function(index, value) {
            var values="'"+index+"'";
              $('#freemahadasatabel_mercury').after('<tr><td>'+value+'</td></tr>');
        });
    });
    
    
        //   maha dasa section saturn
    
        var form = new FormData();
            form.append("api_key", apikey);
            form.append("year", kundli_year);
            form.append("lat", kundli_latitude);
            form.append("lon", kundli_longitude);
            form.append("tzone", kundli_timezone);
            form.append("maha_dasha", "saturn");
            
            var settings = {
              "url": "https://astroapi-3.divineapi.com/indian-api/v1/maha-dasha-analysis",
              "method": "POST",
              "timeout": 0,
              "headers": {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
              },
              "processData": false,
              "mimeType": "multipart/form-data",
              "contentType": false,
              "data": form
            };
            
            $.ajax(settings).done(function(e) {
           const myObj = JSON.parse(e);
             $.each(myObj.data.analysis, function(index, value) {
            var values="'"+index+"'";
              $('#freemahadasatabel_saturn').after('<tr><td>'+value+'</td></tr>');
        });
    });
    
       
       
       //   maha dasa section jupiter
    
        var form = new FormData();
            form.append("api_key", apikey);
            form.append("year", kundli_year);
            form.append("lat", kundli_latitude);
            form.append("lon", kundli_longitude);
            form.append("tzone", kundli_timezone);
            form.append("maha_dasha", "jupiter");
            
            var settings = {
              "url": "https://astroapi-3.divineapi.com/indian-api/v1/maha-dasha-analysis",
              "method": "POST",
              "timeout": 0,
              "headers": {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
              },
              "processData": false,
              "mimeType": "multipart/form-data",
              "contentType": false,
              "data": form
            };
            
            $.ajax(settings).done(function(e) {
           const myObj = JSON.parse(e);
             $.each(myObj.data.analysis, function(index, value) {
            var values="'"+index+"'";
              $('#freemahadasatabel_jupiter').after('<tr><td>'+value+'</td></tr>');
        });
    });
    
         
          //   maha dasa section rahu
    
        var form = new FormData();
            form.append("api_key", apikey);
            form.append("year", kundli_year);
            form.append("lat", kundli_latitude);
            form.append("lon", kundli_longitude);
            form.append("tzone", kundli_timezone);
            form.append("maha_dasha", "rahu");
            
            var settings = {
              "url": "https://astroapi-3.divineapi.com/indian-api/v1/maha-dasha-analysis",
              "method": "POST",
              "timeout": 0,
              "headers": {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
              },
              "processData": false,
              "mimeType": "multipart/form-data",
              "contentType": false,
              "data": form
            };
            
            $.ajax(settings).done(function(e) {
           const myObj = JSON.parse(e);
             $.each(myObj.data.analysis, function(index, value) {
            var values="'"+index+"'";
              $('#freemahadasatabel_rahu').after('<tr><td>'+value+'</td></tr>');
        });
    });    
     
        
    // yoga section
    
    
    var form = new FormData();
        form.append("api_key", apikey);
        form.append("full_name", kundli_fullname);
        form.append("day", kundli_day);
        form.append("month", kundli_month);
        form.append("year", kundli_year);
        form.append("hour", kundli_hour);
        form.append("min", kundli_minute);
        form.append("sec", kundli_sec);
        form.append("gender", kundli_gender);
        form.append("place", kundli_birthPlace);
        form.append("lat", kundli_latitude);
        form.append("lon", kundli_longitude);
        form.append("tzone", kundli_timezone);
        form.append("lan", "en"); 
            
            var settings = {
              "url": "https://astroapi-3.divineapi.com/indian-api/v1/yogas",
              "method": "POST",
              "timeout": 0,
              "headers": {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
              },
              "processData": false,
              "mimeType": "multipart/form-data",
              "contentType": false,
              "data": form
            };
            
            $.ajax(settings).done(function(f) {
           const myObj = JSON.parse(f);
             $.each(myObj.data, function(index, value) {
            var values="'"+index+"'";
            if(value.content.detail !=""){
                    $('#freeyoga').after('<tr><th>'+index+'</th></tr><tr><td>'+value.content.detail+'</td></tr>');
            }
        });
    });
    
    
    
    // gemstone section 
    
        var settings = {
          "url": "https://astroapi-3.divineapi.com/indian-api/v1/gemstone-suggestion",
          "method": "POST",
          "timeout": 0,
          "headers": {
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
          },
          "processData": false,
          "mimeType": "multipart/form-data",
          "contentType": false,
          "data": form
        };
        
        $.ajax(settings).done(function(f) {
           const myObj = JSON.parse(f);
             $.each(myObj.data, function(index, value) {
            var values="'"+index+"'";
            if(value != ""){
                
              
                    $('#freegemstone').after('<tbody><tr><td>Day to wear - </td><td>'+value.day_to_wear+'</td></tr></tbody>');
                    $('#freegemstone').after('<tbody><tr><td>Finger to wear - </td><td>'+value.finger_to_wear+'</td></tr></tbody>');
                    $('#freegemstone').after('<tbody><tr><td>Time to wear - </td><td>'+value.time_to_wear+'</td></tr></tbody>');
                    $('#freegemstone').after('<tbody><tr><td>Mantra - </td><td>'+value.mantra+'</td></tr></tbody>');

              $.each(value.gemstones, function(indexx, valuee) {
                    $('#freegemstone').after('<tbody><tr><td>Gemstones '+indexx+' - </td><td>'+valuee+'</td></tr></tbody>');
                    });
              $('#freegemstone').after('<thead><th>'+index+'</th></thead>');
            }
        });
          });
    

    // manglik section
            
        
        var settings = {
          "url": "https://astroapi-3.divineapi.com/indian-api/v1/manglik-dosha",
          "method": "POST",
          "timeout": 0,
          "headers": {
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
          },
          "processData": false,
          "mimeType": "multipart/form-data",
          "contentType": false,
          "data": form
        };
        
        $.ajax(settings).done(function(f) {
           const myObj = JSON.parse(f);
             $.each(myObj.data, function(index, value) {
            var values="'"+index+"'";
                    $('#freemanglik').after('<tr><th>'+index+'</th></tr><tr><td>'+value+'</td></tr>');
        });
          });
    
    
    // kaal sarp
        
        var settings = {
          "url": "https://astroapi-3.divineapi.com/indian-api/v1/kaal-sarpa-yoga",
          "method": "POST",
          "timeout": 0,
          "headers": {
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
          },
          "processData": false,
          "mimeType": "multipart/form-data",
          "contentType": false,
          "data": form
        };
        
        $.ajax(settings).done(function(f) {
           const myObj = JSON.parse(f);
              if(myObj.data.result == "true"){
                 $.each(myObj.data, function(index, value) {
                 var values="'"+index+"'";
                    $('#freekaalsarp').after('<tr><th>'+index+'</th></tr><tr><td>'+value+'</td></tr>');
                  });
              }else{
                 $('#freekaalsarp').after('<tr><td>No kaal sarp dosa</td></tr>'); 
              }
          });
    
    
    // sadhe sati 
    

            var settings = {
              "url": "https://astroapi-3.divineapi.com/indian-api/v1/sadhe-sati",
              "method": "POST",
              "timeout": 0,
              "headers": {
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FzdHJvYXBpLTEuZGl2aW5lYXBpLmNvbS9hcGkvYXV0aC1hcGktdXNlciIsImlhdCI6MTcxMDE0MjA1NSwibmJmIjoxNzEwMTQyMDU1LCJqdGkiOiIxVWpwUTVHWWJ1SGxaRGFNIiwic3ViIjoiMTMwMiIsInBydiI6ImU2ZTY0YmIwYjYxMjZkNzNjNmI5N2FmYzNiNDY0ZDk4NWY0NmM5ZDcifQ.R6XeIwm1OpMnyx3sgPONT8EZ0kkzptGx1J2bLPN3kLM"
              },
              "processData": false,
              "mimeType": "multipart/form-data",
              "contentType": false,
              "data": form
            };
            
            $.ajax(settings).done(function(f) {
           const myObj = JSON.parse(f);
             $.each(myObj.data.sadhesati_life_analysis, function(index, value) {
            var values="'"+index+"'";
            $('#freesadhesatii').after('<tr><td>'+value.date+'</td><td>'+value.sign_name+'</td><td>'+value.phase+'</td></tr>');
             });
             
             $.each(myObj.data.remedies, function(index, value) {
              $('#freesadhesati_remedie').after('<tr><td>'+value+'</td></tr>');
             });
             $('#freesadhesati_remedie').after('<thead><th>Remedie</th></thead>');
             
             $.each(myObj.data.sadhesati, function(index, value) {
              $('#freesadhesati').after('<tr><th>'+index+'</th></tr><tr><td>'+value+'</td></tr>');
             });
             
             
             
          });
    
}



function match_basic_details(){
    
    var e=$('#matching_basicdetailsnew').val();
     if(e==='') {
         
     } else {

          return false;
     }
    
    var kundli_fullname= $('#kundli_fullname').val();
    var kundli_birthDate= $('#kundli_birthDate').val();
    var kundli_birthtime= $('#kundli_birthtime').val();
    var kundli_latitude= $('#kundli_latitude').val();
    var kundli_longitude= $('#kundli_longitude').val();
    var kundli_timezone= $('#kundli_timezone').val();
    var kundli_gender= $('#kundli_gender').val();
    var kundli_year= $('#kundli_year').val();
    var kundli_month= $('#kundli_month').val();
    var kundli_day= $('#kundli_day').val();
    var kundli_minute= $('#kundli_minute').val();
    var kundli_hour= $('#kundli_hour').val();
    var kundli_birthPlace= $('#kundli_birthPlace').val();
    var apikey='996009f2374006606f4c0b0fda878af1';
    var kundli_lang='en';
    
    var p2gender =      $('#p2gender').val();
    var f_fullname=     $('#f_fullname').val();
    var f_birthDate=    $('#f_birthDate').val();
    var f_birthtime=    $('#f_birthtime').val();
    var f_latitude=     $('#f_latitude').val();
    var f_longitude=    $('#f_longitude').val();
    var f_timezone=     $('#f_timezone').val();
    var f_gender=       $('#f_gender').val();
    var f_year=         $('#f_year').val();
    var f_month=        $('#f_month').val();
    var f_day=          $('#f_day').val();
    var f_minute=       $('#f_minute').val();
    var f_hour=         $('#f_hour').val();
    var f_birthPlace=   $('#f_birthPlace').val();
    
    var input_data={
            api_key: apikey,
            kundli_fullname: kundli_fullname,
            kundli_day: kundli_day,
            kundli_month: kundli_month,
            kundli_year: kundli_year,
            kundli_hour: kundli_hour,
            kundli_minute: kundli_minute,
            kundli_sec: "00",
            kundli_gender: kundli_gender,
            kundli_birthPlace: kundli_birthPlace,
            kundli_latitude: kundli_latitude,
            kundli_longitude: kundli_longitude,
            kundli_timezone: kundli_timezone,
            kundli_lang: kundli_lang,
            p2gender :    p2gender,
            fe_fullname:  f_fullname,            
            fe_day:       f_day,
            fe_month:     f_month,
            fe_year:      f_year,
            fe_hour:      f_hour,
            fe_minute:    f_minute,
            fe_sec:       "00",
            fe_birthPlace:f_birthPlace,
            fe_latitude:  f_latitude,
            fe_longitude: f_longitude,
            fe_timezone:  f_timezone,
            fe_gender:    f_gender,
        }
        
        
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
    });
    $.ajax({
        type: "POST",
        url: "/match_kundli_basic_details",
        data: input_data,
        success: function(e) {
            $('#matching_basicdetailsnew').val(e);
            // console.log(e);
          const myObj1 = JSON.parse(e);
          
       let text = "<table >"
           text += "<tr><td>Name</td><td>" +myObj1.data.p1.full_name + "</td><td>" +myObj1.data.p2.full_name + "</td></tr>";
           text += "<tr><td>Varna</td><td>"+myObj1.data.p1.varna+"</td><td>"+myObj1.data.p2.varna+"</td><tr>";
           text += "<tr><td>Vashya</td><td>"+myObj1.data.p1.vashya+"</td><td>"+myObj1.data.p2.vashya+"</td><tr>";
           text += "<tr><td>Yoni</td><td>"+myObj1.data.p1.yoni+"</td><td>"+myObj1.data.p2.yoni+"</td><tr>";
           text += "<tr><td>Gan</td><td>"+myObj1.data.p1.gana+"</td><td>"+myObj1.data.p2.gana+"</td><tr>";
           text += "<tr><td>Nadi</td><td>"+myObj1.data.p1.nadi+"</td><td>"+myObj1.data.p2.nadi+"</td><tr>";
           text += "<tr><td>Nakshatra</td><td>"+myObj1.data.p1.nakshatra+"</td><td>"+myObj1.data.p2.nakshatra+"</td><tr>";
           text += "<tr><td>Tithi</td><td>"+myObj1.data.p1.tithi+"</td><td>"+myObj1.data.p2.tithi+"</td><tr>";
           text += "<tr><td>Tatva</td><td>"+myObj1.data.p1.tatva+"</td><td>"+myObj1.data.p2.tatva+"</td><tr>";
           text += "<tr><td>Rashi akshar</td><td>"+myObj1.data.p1.rashi_akshar+"</td><td>"+myObj1.data.p2.rashi_akshar+"</td><tr>";
           text += "<tr><td>Paya</td><td>"+myObj1.data.p1.paya.type+"</td><td>"+myObj1.data.p2.paya.type+"</td><tr>";
           text += "</table>"
        $('#match_astro_detailsspartner1').html(text);
          },
        error: function(err) {
            console.log(err.responseText);
        }
    }); 
}


function astkoot_daskoot(){
  
    var kundli_fullname= $('#kundli_fullname').val();
    var kundli_birthDate= $('#kundli_birthDate').val();
    var kundli_birthtime= $('#kundli_birthtime').val();
    var kundli_latitude= $('#kundli_latitude').val();
    var kundli_longitude= $('#kundli_longitude').val();
    var kundli_timezone= $('#kundli_timezone').val();
    var kundli_gender= $('#kundli_gender').val();
    var kundli_year= $('#kundli_year').val();
    var kundli_month= $('#kundli_month').val();
    var kundli_day= $('#kundli_day').val();
    var kundli_minute= $('#kundli_minute').val();
    var kundli_hour= $('#kundli_hour').val();
    var kundli_birthPlace= $('#kundli_birthPlace').val();
    var apikey='996009f2374006606f4c0b0fda878af1';
    var kundli_lang='en';
    
    var p2gender =      $('#p2gender').val();
    var f_fullname=     $('#f_fullname').val();
    var f_birthDate=    $('#f_birthDate').val();
    var f_birthtime=    $('#f_birthtime').val();
    var f_latitude=     $('#f_latitude').val();
    var f_longitude=    $('#f_longitude').val();
    var f_timezone=     $('#f_timezone').val();
    var f_gender=       $('#f_gender').val();
    var f_year=         $('#f_year').val();
    var f_month=        $('#f_month').val();
    var f_day=          $('#f_day').val();
    var f_minute=       $('#f_minute').val();
    var f_hour=         $('#f_hour').val();
    var f_birthPlace=   $('#f_birthPlace').val();
    
    var input_data={
            api_key: apikey,
            kundli_fullname: kundli_fullname,
            kundli_day: kundli_day,
            kundli_month: kundli_month,
            kundli_year: kundli_year,
            kundli_hour: kundli_hour,
            kundli_minute: kundli_minute,
            kundli_sec: "00",
            kundli_gender: kundli_gender,
            kundli_birthPlace: kundli_birthPlace,
            kundli_latitude: kundli_latitude,
            kundli_longitude: kundli_longitude,
            kundli_timezone: kundli_timezone,
            kundli_lang: kundli_lang,
            p2gender :    p2gender,
            fe_fullname:  f_fullname,            
            fe_day:       f_day,
            fe_month:     f_month,
            fe_year:      f_year,
            fe_hour:      f_hour,
            fe_minute:    f_minute,
            fe_sec:       "00",
            fe_birthPlace:f_birthPlace,
            fe_latitude:  f_latitude,
            fe_longitude: f_longitude,
            fe_timezone:  f_timezone,
            fe_gender:    f_gender,
        }
        
       $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
        });  
   
   
       $.ajax({
        type: "POST",
        url: "/astkoot_milaan",
        data: input_data,
        success: function(u) {
           console.log(u);
           var  myObj = JSON.parse(u);     
           
        //   $('#manglicp2').after('<p>'+myObj.data.manglik_dosha.p2+'</p>');
        //   $('#manglicp1').after('<p>'+myObj.data.manglik_dosha.p1+'</p>');
        //   $('#astkoot_total_result').after('<p>'+myObj.data.ashtakoot_milan_result.points_obtained+'/'+myObj.data.ashtakoot_milan_result.max_ponits+'</p>');
        //   $('#matchresultoverall').after('<tr><td>'+myObj.data.ashtakoot_milan_result.content+'</td></tr>');
        //   $('#match_astkootresultnew').after('<tr><td>Total</td><td></td><td></td><td>'+myObj.data.ashtakoot_milan_result.points_obtained+'</td><td>'+myObj.data.ashtakoot_milan_result.max_ponits+'</td><td></td></tr>');
        //   $('#match_astkootresultnew').after('<tr><td>Nadi</td><td>'+myObj.data.ashtakoot_milan.nadi.p1+'</td><td>'+myObj.data.ashtakoot_milan.nadi.p2+'</td><td>'+myObj.data.ashtakoot_milan.nadi.points_obtained+'</td><td>'+myObj.data.ashtakoot_milan.nadi.max_ponits+'</td><td>'+myObj.data.ashtakoot_milan.nadi.area_of_life+'</td></tr>');
        //   $('#match_astkootresultnew').after('<tr><td>Bhakut</td><td>'+myObj.data.ashtakoot_milan.bhakoota.p1+'</td><td>'+myObj.data.ashtakoot_milan.bhakoota.p2+'</td><td>'+myObj.data.ashtakoot_milan.bhakoota.points_obtained+'</td><td>'+myObj.data.ashtakoot_milan.bhakoota.max_ponits+'</td><td>'+myObj.data.ashtakoot_milan.bhakoota.area_of_life+'</td></tr>');
        //   $('#match_astkootresultnew').after('<tr><td>Gan</td><td>'+myObj.data.ashtakoot_milan.gana.p1+'</td><td>'+myObj.data.ashtakoot_milan.gana.p2+'</td><td>'+myObj.data.ashtakoot_milan.gana.points_obtained+'</td><td>'+myObj.data.ashtakoot_milan.gana.max_ponits+'</td><td>'+myObj.data.ashtakoot_milan.gana.area_of_life+'</td></tr>');
        //   $('#match_astkootresultnew').after('<tr><td>Maitri</td><td>'+myObj.data.ashtakoot_milan.graha_maitri.p1+'</td><td>'+myObj.data.ashtakoot_milan.graha_maitri.p2+'</td><td>'+myObj.data.ashtakoot_milan.graha_maitri.points_obtained+'</td><td>'+myObj.data.ashtakoot_milan.graha_maitri.max_ponits+'</td><td>'+myObj.data.ashtakoot_milan.graha_maitri.area_of_life+'</td></tr>');
        //   $('#match_astkootresultnew').after('<tr><td>Yoni</td><td>'+myObj.data.ashtakoot_milan.yoni.p1+'</td><td>'+myObj.data.ashtakoot_milan.yoni.p2+'</td><td>'+myObj.data.ashtakoot_milan.yoni.points_obtained+'</td><td>'+myObj.data.ashtakoot_milan.yoni.max_ponits+'</td><td>'+myObj.data.ashtakoot_milan.yoni.area_of_life+'</td></tr>');
        //   $('#match_astkootresultnew').after('<tr><td>Tara</td><td>'+myObj.data.ashtakoot_milan.tara.p1+'</td><td>'+myObj.data.ashtakoot_milan.tara.p2+'</td><td>'+myObj.data.ashtakoot_milan.tara.points_obtained+'</td><td>'+myObj.data.ashtakoot_milan.tara.max_ponits+'</td><td>'+myObj.data.ashtakoot_milan.tara.area_of_life+'</td></tr>');
        //   $('#match_astkootresultnew').after('<tr><td>Vashya</td><td>'+myObj.data.ashtakoot_milan.vashya.p1+'</td><td>'+myObj.data.ashtakoot_milan.vashya.p2+'</td><td>'+myObj.data.ashtakoot_milan.vashya.points_obtained+'</td><td>'+myObj.data.ashtakoot_milan.vashya.max_ponits+'</td><td>'+myObj.data.ashtakoot_milan.vashya.area_of_life+'</td></tr>');
        //   $('#match_astkootresultnew').after('<tr><td>Varna</td><td>'+myObj.data.ashtakoot_milan.varna.p1+'</td><td>'+myObj.data.ashtakoot_milan.varna.p2+'</td><td>'+myObj.data.ashtakoot_milan.varna.points_obtained+'</td><td>'+myObj.data.ashtakoot_milan.varna.max_ponits+'</td><td>'+myObj.data.ashtakoot_milan.varna.area_of_life+'</td></tr>');
          },
        error: function(err) {
            console.log(err.responseText);
        }
    }); 
}



function askoot_askoot(){
    
    var e=$('#matchastkootpointnew').val();
     if(e==='') {
         
     } else {

          return false;
     }
    
    var kundli_fullname= $('#kundli_fullname').val();
    var kundli_birthDate= $('#kundli_birthDate').val();
    var kundli_birthtime= $('#kundli_birthtime').val();
    var kundli_latitude= $('#kundli_latitude').val();
    var kundli_longitude= $('#kundli_longitude').val();
    var kundli_timezone= $('#kundli_timezone').val();
    var kundli_gender= $('#kundli_gender').val();
    var kundli_year= $('#kundli_year').val();
    var kundli_month= $('#kundli_month').val();
    var kundli_day= $('#kundli_day').val();
    var kundli_minute= $('#kundli_minute').val();
    var kundli_hour= $('#kundli_hour').val();
    var kundli_birthPlace= $('#kundli_birthPlace').val();
    var apikey='996009f2374006606f4c0b0fda878af1';
    var kundli_lang='en';
    
    var p2gender =      $('#p2gender').val();
    var f_fullname=     $('#f_fullname').val();
    var f_birthDate=    $('#f_birthDate').val();
    var f_birthtime=    $('#f_birthtime').val();
    var f_latitude=     $('#f_latitude').val();
    var f_longitude=    $('#f_longitude').val();
    var f_timezone=     $('#f_timezone').val();
    var f_gender=       $('#f_gender').val();
    var f_year=         $('#f_year').val();
    var f_month=        $('#f_month').val();
    var f_day=          $('#f_day').val();
    var f_minute=       $('#f_minute').val();
    var f_hour=         $('#f_hour').val();
    var f_birthPlace=   $('#f_birthPlace').val();
    
    var input_data={
            api_key: apikey,
            kundli_fullname: kundli_fullname,
            kundli_day: kundli_day,
            kundli_month: kundli_month,
            kundli_year: kundli_year,
            kundli_hour: kundli_hour,
            kundli_minute: kundli_minute,
            kundli_sec: "00",
            kundli_gender: kundli_gender,
            kundli_birthPlace: kundli_birthPlace,
            kundli_latitude: kundli_latitude,
            kundli_longitude: kundli_longitude,
            kundli_timezone: kundli_timezone,
            kundli_lang: kundli_lang,
            p2gender :    p2gender,
            fe_fullname:  f_fullname,            
            fe_day:       f_day,
            fe_month:     f_month,
            fe_year:      f_year,
            fe_hour:      f_hour,
            fe_minute:    f_minute,
            fe_sec:       "00",
            fe_birthPlace:f_birthPlace,
            fe_latitude:  f_latitude,
            fe_longitude: f_longitude,
            fe_timezone:  f_timezone,
            fe_gender:    f_gender,
        }
        
        
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
    });   
   
   
       $.ajax({
        type: "POST",
        url: "/astkoot_milaan",
        data: input_data,
        success: function(u) {
           $('#matchastkootpointnew').val(u);
           var  myObj = JSON.parse(u);     
           
        let text = "<table >"
        text += '<tr><td>Varna</td><td>'+myObj.data.ashtakoot_milan.varna.points_obtained+'</td><td>'+myObj.data.ashtakoot_milan.varna.max_ponits+'</td><td>'+myObj.data.ashtakoot_milan.varna.area_of_life+'</td></tr>';
        text += '<tr><td>Vashya</td><td>'+myObj.data.ashtakoot_milan.vashya.points_obtained+'</td><td>'+myObj.data.ashtakoot_milan.vashya.max_ponits+'</td><td>'+myObj.data.ashtakoot_milan.vashya.area_of_life+'</td></tr>';
        text += '<tr><td>Tara</td><td>'+myObj.data.ashtakoot_milan.tara.points_obtained+'</td><td>'+myObj.data.ashtakoot_milan.tara.max_ponits+'</td><td>'+myObj.data.ashtakoot_milan.tara.area_of_life+'</td></tr>';
        text += '<tr><td>Yoni</td><td>'+myObj.data.ashtakoot_milan.yoni.points_obtained+'</td><td>'+myObj.data.ashtakoot_milan.yoni.max_ponits+'</td><td>'+myObj.data.ashtakoot_milan.yoni.area_of_life+'</td></tr>';
        text += '<tr><td>Maitri</td><td>'+myObj.data.ashtakoot_milan.graha_maitri.points_obtained+'</td><td>'+myObj.data.ashtakoot_milan.graha_maitri.max_ponits+'</td><td>'+myObj.data.ashtakoot_milan.graha_maitri.area_of_life+'</td></tr>';
        text += '<tr><td>Gan</td><td>'+myObj.data.ashtakoot_milan.gana.points_obtained+'</td><td>'+myObj.data.ashtakoot_milan.gana.max_ponits+'</td><td>'+myObj.data.ashtakoot_milan.gana.area_of_life+'</td></tr>';
        text += '<tr><td>Bhakut</td><td>'+myObj.data.ashtakoot_milan.bhakoota.points_obtained+'</td><td>'+myObj.data.ashtakoot_milan.bhakoota.max_ponits+'</td><td>'+myObj.data.ashtakoot_milan.bhakoota.area_of_life+'</td></tr>';
        text += '<tr><td>Nadi</td><td>'+myObj.data.ashtakoot_milan.nadi.points_obtained+'</td><td>'+myObj.data.ashtakoot_milan.nadi.max_ponits+'</td><td>'+myObj.data.ashtakoot_milan.nadi.area_of_life+'</td></tr>';
        text += '<tr><td>Total</td><td>'+myObj.data.ashtakoot_milan_result.points_obtained+'/'+myObj.data.ashtakoot_milan_result.max_ponits+'</td></tr>';
        text += '<tr><td>'+myObj.data.ashtakoot_milan_result.content+'</td></tr>';
          
          text += "</table>"
         $('#astkootnewprint').html(text);
          },
        error: function(err) {
            console.log(err.responseText);
        }
    }); 
}



function nav_pancham(){
    var e=$('#navpancham').val();
     if(e==='') {
         
     } else {
         //   get_basic_data_print();
           return false;
     }
    
    var kundli_fullname= $('#kundli_fullname').val();
    var kundli_birthDate= $('#kundli_birthDate').val();
    var kundli_birthtime= $('#kundli_birthtime').val();
    var kundli_latitude= $('#kundli_latitude').val();
    var kundli_longitude= $('#kundli_longitude').val();
    var kundli_timezone= $('#kundli_timezone').val();
    var kundli_gender= $('#kundli_gender').val();
    var kundli_year= $('#kundli_year').val();
    var kundli_month= $('#kundli_month').val();
    var kundli_day= $('#kundli_day').val();
    var kundli_minute= $('#kundli_minute').val();
    var kundli_hour= $('#kundli_hour').val();
    var kundli_birthPlace= $('#kundli_birthPlace').val();
    var apikey='996009f2374006606f4c0b0fda878af1';
    var kundli_lang='en';
    
    var p2gender =      $('#p2gender').val();
    var f_fullname=     $('#f_fullname').val();
    var f_birthDate=    $('#f_birthDate').val();
    var f_birthtime=    $('#f_birthtime').val();
    var f_latitude=     $('#f_latitude').val();
    var f_longitude=    $('#f_longitude').val();
    var f_timezone=     $('#f_timezone').val();
    var f_gender=       $('#f_gender').val();
    var f_year=         $('#f_year').val();
    var f_month=        $('#f_month').val();
    var f_day=          $('#f_day').val();
    var f_minute=       $('#f_minute').val();
    var f_hour=         $('#f_hour').val();
    var f_birthPlace=   $('#f_birthPlace').val();
    
    var input_data={
            api_key: apikey,
            kundli_fullname: kundli_fullname,
            kundli_day: kundli_day,
            kundli_month: kundli_month,
            kundli_year: kundli_year,
            kundli_hour: kundli_hour,
            kundli_minute: kundli_minute,
            kundli_sec: "00",
            kundli_gender: kundli_gender,
            kundli_birthPlace: kundli_birthPlace,
            kundli_latitude: kundli_latitude,
            kundli_longitude: kundli_longitude,
            kundli_timezone: kundli_timezone,
            kundli_lang: kundli_lang,
            p2gender :    p2gender,
            fe_fullname:  f_fullname,            
            fe_day:       f_day,
            fe_month:     f_month,
            fe_year:      f_year,
            fe_hour:      f_hour,
            fe_minute:    f_minute,
            fe_sec:       "00",
            fe_birthPlace:f_birthPlace,
            fe_latitude:  f_latitude,
            fe_longitude: f_longitude,
            fe_timezone:  f_timezone,
            fe_gender:    f_gender,
        }
        
        
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
    });   
   
   
       $.ajax({
        type: "POST",
        url: "/nav_pancham",
        data: input_data,
        success: function(u) {
           var  myObj = JSON.parse(u);     
           $('#navpancham').val(u);
           
           
           $.each(myObj.data.nav_pancham_yoga.Sun, function(index, value) {
            var values="'"+index+"'";
              $('#match_navpancham_sun').after('<td>'+value+'</td>');
            });
            $('#match_navpancham_sun').after('<td>Sun</td>');
            
            $.each(myObj.data.nav_pancham_yoga.Moon, function(index, value) {
            var values="'"+index+"'";
              $('#match_navpancham_moon').after('<td>'+value+'</td>');
            });
            $('#match_navpancham_moon').after('<td>Moon</td>');
            
            $.each(myObj.data.nav_pancham_yoga.Mercury, function(index, value) {
            var values="'"+index+"'";
              $('#match_navpancham_mercury').after('<td>'+value+'</td>');
            });
            $('#match_navpancham_mercury').after('<td>Mercury</td>');
            
            $.each(myObj.data.nav_pancham_yoga.Venus, function(index, value) {
            var values="'"+index+"'";
              $('#match_navpancham_Venus').after('<td>'+value+'</td>');
            });
            $('#match_navpancham_Venus').after('<td>Venus</td>');
            
            $.each(myObj.data.nav_pancham_yoga.Mars, function(index, value) {
            var values="'"+index+"'";
              $('#match_navpancham_Mars').after('<td>'+value+'</td>');
            });
            $('#match_navpancham_Mars').after('<td>Mars</td>');
            
            $.each(myObj.data.nav_pancham_yoga.Jupiter, function(index, value) {
            var values="'"+index+"'";
              $('#match_navpancham_Jupiter').after('<td>'+value+'</td>');
            });
            $('#match_navpancham_Jupiter').after('<td>Jupiter</td>');
            
            $.each(myObj.data.nav_pancham_yoga.Saturn, function(index, value) {
            var values="'"+index+"'";
              $('#match_navpancham_Saturn').after('<td>'+value+'</td>');
            });
            $('#match_navpancham_Saturn').after('<td>Saturn</td>');
            
            $.each(myObj.data.nav_pancham_yoga.Uranus, function(index, value) {
            var values="'"+index+"'";
              $('#match_navpancham_Uranus').after('<td>'+value+'</td>');
            });
            $('#match_navpancham_Uranus').after('<td>Uranus</td>');
            
            $.each(myObj.data.nav_pancham_yoga.Neptune, function(index, value) {
            var values="'"+index+"'";
              $('#match_navpancham_Neptune').after('<td>'+value+'</td>');
            });
            $('#match_navpancham_Neptune').after('<td>Neptune</td>');
            
            $.each(myObj.data.nav_pancham_yoga.Pluto, function(index, value) {
            var values="'"+index+"'";
              $('#match_navpancham_Pluto').after('<td>'+value+'</td>');
            });
            $('#match_navpancham_Pluto').after('<td>Pluto</td>');
            
            $.each(myObj.data.nav_pancham_yoga.Rahu, function(index, value) {
            var values="'"+index+"'";
              $('#match_navpancham_Rahu').after('<td>'+value+'</td>');
            });
            $('#match_navpancham_Rahu').after('<td>Rahu</td>');
            
            $.each(myObj.data.nav_pancham_yoga.Ketu, function(index, value) {
            var values="'"+index+"'";
              $('#match_navpancham_Ketu').after('<td>'+value+'</td>');
            });
            $('#match_navpancham_Ketu').after('<td>Ketu</td>');
            
            $.each(myObj.data.nav_pancham_yoga.Ascendant, function(index, value) {
            var values="'"+index+"'";
              $('#match_navpancham_Ascendant').after('<td>'+value+'</td>');
            });
            $('#match_navpancham_Ascendant').after('<td>Ascendant</td>');
            
          },
        error: function(err) {
            console.log(err.responseText);
        }
    }); 
}


function daskoot_new(){
    
    var e=$('#new_hidden_daskoot').val();
     if(e==='') {
         
     } else {

          return false;
     }
    
    var kundli_fullname= $('#kundli_fullname').val();
    var kundli_birthDate= $('#kundli_birthDate').val();
    var kundli_birthtime= $('#kundli_birthtime').val();
    var kundli_latitude= $('#kundli_latitude').val();
    var kundli_longitude= $('#kundli_longitude').val();
    var kundli_timezone= $('#kundli_timezone').val();
    var kundli_gender= $('#kundli_gender').val();
    var kundli_year= $('#kundli_year').val();
    var kundli_month= $('#kundli_month').val();
    var kundli_day= $('#kundli_day').val();
    var kundli_minute= $('#kundli_minute').val();
    var kundli_hour= $('#kundli_hour').val();
    var kundli_birthPlace= $('#kundli_birthPlace').val();
    var apikey='996009f2374006606f4c0b0fda878af1';
    var kundli_lang='en';
    
    var p2gender =      $('#p2gender').val();
    var f_fullname=     $('#f_fullname').val();
    var f_birthDate=    $('#f_birthDate').val();
    var f_birthtime=    $('#f_birthtime').val();
    var f_latitude=     $('#f_latitude').val();
    var f_longitude=    $('#f_longitude').val();
    var f_timezone=     $('#f_timezone').val();
    var f_gender=       $('#f_gender').val();
    var f_year=         $('#f_year').val();
    var f_month=        $('#f_month').val();
    var f_day=          $('#f_day').val();
    var f_minute=       $('#f_minute').val();
    var f_hour=         $('#f_hour').val();
    var f_birthPlace=   $('#f_birthPlace').val();
    
    var input_data={
            api_key: apikey,
            kundli_fullname: kundli_fullname,
            kundli_day: kundli_day,
            kundli_month: kundli_month,
            kundli_year: kundli_year,
            kundli_hour: kundli_hour,
            kundli_minute: kundli_minute,
            kundli_sec: "00",
            kundli_gender: kundli_gender,
            kundli_birthPlace: kundli_birthPlace,
            kundli_latitude: kundli_latitude,
            kundli_longitude: kundli_longitude,
            kundli_timezone: kundli_timezone,
            kundli_lang: kundli_lang,
            p2gender :    p2gender,
            fe_fullname:  f_fullname,            
            fe_day:       f_day,
            fe_month:     f_month,
            fe_year:      f_year,
            fe_hour:      f_hour,
            fe_minute:    f_minute,
            fe_sec:       "00",
            fe_birthPlace:f_birthPlace,
            fe_latitude:  f_latitude,
            fe_longitude: f_longitude,
            fe_timezone:  f_timezone,
            fe_gender:    f_gender,
        }
        
        
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
    });   
   
   
       $.ajax({
        type: "POST",
        url: "/daskoot_milaan",
        data: input_data,
        success: function(u) {
           $('#new_hidden_daskoot').val(u);
           var  myObj = JSON.parse(u); 
           
           let text = "<table >"
          text += "<tr><td>Dina</td><td>"+myObj.data.dashakoot_milan.dina.max_ponits+"</td><td>"+myObj.data.dashakoot_milan.dina.points_obtained+"</td><td>"+myObj.data.dashakoot_milan.dina.area_of_life+"</td></tr>";
          text += "<tr><td>Gan</td><td>"+myObj.data.dashakoot_milan.gana.max_ponits+'</td><td>'+myObj.data.dashakoot_milan.gana.points_obtained+'</td><td>'+myObj.data.dashakoot_milan.gana.area_of_life+"</td></tr>";
          text += "<tr><td>Yoni</td><td>"+myObj.data.dashakoot_milan.yoni.max_ponits+'</td><td>'+myObj.data.dashakoot_milan.yoni.points_obtained+'</td><td>'+myObj.data.dashakoot_milan.yoni.area_of_life+"</td></tr>";
          text += "<tr><td>Rashi</td><td>"+myObj.data.dashakoot_milan.rashi.max_ponits+'</td><td>'+myObj.data.dashakoot_milan.rashi.points_obtained+'</td><td>'+myObj.data.dashakoot_milan.rashi.area_of_life+"</td></tr>";
          text += "<tr><td>Rasyadhipati</td><td>"+myObj.data.dashakoot_milan.rasyadhipati.max_ponits+'</td><td>'+myObj.data.dashakoot_milan.rasyadhipati.points_obtained+'</td><td>'+myObj.data.dashakoot_milan.rasyadhipati.area_of_life+"</td></tr>";
          text += "<tr><td>Rajju</td><td>"+myObj.data.dashakoot_milan.rajju.max_ponits+'</td><td>'+myObj.data.dashakoot_milan.rajju.points_obtained+'</td><td>'+myObj.data.dashakoot_milan.rajju.area_of_life+"</td></tr>";
          text += "<tr><td>Vedha</td><td>"+myObj.data.dashakoot_milan.vedha.max_ponits+'</td><td>'+myObj.data.dashakoot_milan.vedha.points_obtained+'</td><td>'+myObj.data.dashakoot_milan.vedha.area_of_life+"</td></tr>";
          text += "<tr><td>Vashya</td><td>"+myObj.data.dashakoot_milan.vashya.max_ponits+'</td><td>'+myObj.data.dashakoot_milan.vashya.points_obtained+'</td><td>'+myObj.data.dashakoot_milan.vashya.area_of_life+"</td></tr>";
          text += "<tr><td>Mahendra</td><td>"+myObj.data.dashakoot_milan.mahendra.max_ponits+'</td><td>'+myObj.data.dashakoot_milan.mahendra.points_obtained+'</td><td>'+myObj.data.dashakoot_milan.mahendra.area_of_life+"</td></tr>";
          text += "<tr><td>Stree Dargha</td><td>"+myObj.data.dashakoot_milan.streedargha.max_ponits+'</td><td>'+myObj.data.dashakoot_milan.streedargha.points_obtained+'</td><td>'+myObj.data.dashakoot_milan.streedargha.area_of_life+"</td></tr>";
          text += "<tr><td>"+myObj.data.dashakoot_milan_result.points_obtained+'/'+myObj.data.dashakoot_milan_result.max_ponits+"</td></tr>";
           text += "</table>"
          $('#match_dashakoot_points').html(text);
          },
        error: function(err) {
            console.log(err.responseText);
        }
    }); 
}



function match_planetss(){
    
    var e=$('#matchplanet_hidden').val();
     if(e==='') {
         
     } else {

          return false;
     }
    
    var kundli_fullname= $('#kundli_fullname').val();
    var kundli_birthDate= $('#kundli_birthDate').val();
    var kundli_birthtime= $('#kundli_birthtime').val();
    var kundli_latitude= $('#kundli_latitude').val();
    var kundli_longitude= $('#kundli_longitude').val();
    var kundli_timezone= $('#kundli_timezone').val();
    var kundli_gender= $('#kundli_gender').val();
    var kundli_year= $('#kundli_year').val();
    var kundli_month= $('#kundli_month').val();
    var kundli_day= $('#kundli_day').val();
    var kundli_minute= $('#kundli_minute').val();
    var kundli_hour= $('#kundli_hour').val();
    var kundli_birthPlace= $('#kundli_birthPlace').val();
    var apikey='996009f2374006606f4c0b0fda878af1';
    var kundli_lang='en';
    
    var p2gender =      $('#p2gender').val();
    var f_fullname=     $('#f_fullname').val();
    var f_birthDate=    $('#f_birthDate').val();
    var f_birthtime=    $('#f_birthtime').val();
    var f_latitude=     $('#f_latitude').val();
    var f_longitude=    $('#f_longitude').val();
    var f_timezone=     $('#f_timezone').val();
    var f_gender=       $('#f_gender').val();
    var f_year=         $('#f_year').val();
    var f_month=        $('#f_month').val();
    var f_day=          $('#f_day').val();
    var f_minute=       $('#f_minute').val();
    var f_hour=         $('#f_hour').val();
    var f_birthPlace=   $('#f_birthPlace').val();
    
    var input_data={
            api_key: apikey,
            kundli_fullname: kundli_fullname,
            kundli_day: kundli_day,
            kundli_month: kundli_month,
            kundli_year: kundli_year,
            kundli_hour: kundli_hour,
            kundli_minute: kundli_minute,
            kundli_sec: "00",
            kundli_gender: kundli_gender,
            kundli_birthPlace: kundli_birthPlace,
            kundli_latitude: kundli_latitude,
            kundli_longitude: kundli_longitude,
            kundli_timezone: kundli_timezone,
            kundli_lang: kundli_lang,
            p2gender :    p2gender,
            fe_fullname:  f_fullname,            
            fe_day:       f_day,
            fe_month:     f_month,
            fe_year:      f_year,
            fe_hour:      f_hour,
            fe_minute:    f_minute,
            fe_sec:       "00",
            fe_birthPlace:f_birthPlace,
            fe_latitude:  f_latitude,
            fe_longitude: f_longitude,
            fe_timezone:  f_timezone,
            fe_gender:    f_gender,
        }
        
        
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
    });   
   
   
       $.ajax({
        type: "POST",
        url: "/match_planets",
        data: input_data,
        success: function(u) {
           $('#matchplanet_hidden').val(u);
           var  myObj = JSON.parse(u);
           
           
           $.each(myObj.data.p1.planets, function(index, value) {
            var values="'"+index+"'";
              $('#match_planet_details').after('<tr class="planet_sun" id="planet_'+value.name+'" ><td>'+value.name+'</td><td>'+value.full_degree+'</td><td>'+value.speed+'</td><td>'+value.is_retro+'</td><td>'+value.sign+'</td><td>'+value.rashi_lord+'</td><td>'+value.nakshatra+'</td><td>'+value.nakshatra_lord+'</td><td>'+value.nakshatra_pada+'</td><td>'+value.house+'</td><td>'+value.awastha+'</td></tr>');
        });
        // $('#match_planet_details').after('<th><td>Partner 1</td></th>'); 
        
        $.each(myObj.data.p2.planets, function(index, value) {
            var values="'"+index+"'";
              $('#match_planet_details2').after('<tr class="planet_sun" id="planet2_'+value.name+'" ><td>'+value.name+'</td><td>'+value.full_degree+'</td><td>'+value.speed+'</td><td>'+value.is_retro+'</td><td>'+value.sign+'</td><td>'+value.rashi_lord+'</td><td>'+value.nakshatra+'</td><td>'+value.nakshatra_lord+'</td><td>'+value.nakshatra_pada+'</td><td>'+value.house+'</td><td>'+value.awastha+'</td></tr>');
        });
        //   $('#match_planet_details2').after('<th><td>Partner 2</td></th>'); 
           
           
        //   let text = "<table >"
        //   text += '<tr  class="my_plant 0">'
        //   text += "<tr><td>Name</td><td>" +myObj1.data.p1.full_name + "</td><td>" +myObj1.data.p2.full_name + "</td></tr>";
          
        //   text += "</table>"
        // $('#match_planet_details').html(text);
           
           
        //   <tr  class="my_plant 0">
        //                             <td>Name</td>
        //                             <td>'.$responses["male_planet_details"][0]["name"].'</td>
        //                             <td>'.$responses["female_planet_details"][0]["name"].'</td>
        //                         </tr>
        //   $('#match_planet_details').after('<tr><td>'+myObj.data.ashtakoot_milan_result.content+'</td></tr>');
         
          },
        error: function(err) {
            console.log(err.responseText);
        }
    }); 
}


function match_making_manglik(){
      var e=$('#match_manglik_hidden').val();
     if(e==='') {
         
     } else {
         //   get_basic_data_print();
           return false;
     }
    
    var kundli_fullname= $('#kundli_fullname').val();
    var kundli_birthDate= $('#kundli_birthDate').val();
    var kundli_birthtime= $('#kundli_birthtime').val();
    var kundli_latitude= $('#kundli_latitude').val();
    var kundli_longitude= $('#kundli_longitude').val();
    var kundli_timezone= $('#kundli_timezone').val();
    var kundli_gender= $('#kundli_gender').val();
    var kundli_year= $('#kundli_year').val();
    var kundli_month= $('#kundli_month').val();
    var kundli_day= $('#kundli_day').val();
    var kundli_minute= $('#kundli_minute').val();
    var kundli_hour= $('#kundli_hour').val();
    var kundli_birthPlace= $('#kundli_birthPlace').val();
    var apikey='996009f2374006606f4c0b0fda878af1';
    var kundli_lang='en';
    
    var p2gender =      $('#p2gender').val();
    var f_fullname=     $('#f_fullname').val();
    var f_birthDate=    $('#f_birthDate').val();
    var f_birthtime=    $('#f_birthtime').val();
    var f_latitude=     $('#f_latitude').val();
    var f_longitude=    $('#f_longitude').val();
    var f_timezone=     $('#f_timezone').val();
    var f_gender=       $('#f_gender').val();
    var f_year=         $('#f_year').val();
    var f_month=        $('#f_month').val();
    var f_day=          $('#f_day').val();
    var f_minute=       $('#f_minute').val();
    var f_hour=         $('#f_hour').val();
    var f_birthPlace=   $('#f_birthPlace').val();
    
    var input_data={
            api_key: apikey,
            kundli_fullname: kundli_fullname,
            kundli_day: kundli_day,
            kundli_month: kundli_month,
            kundli_year: kundli_year,
            kundli_hour: kundli_hour,
            kundli_minute: kundli_minute,
            kundli_sec: "00",
            kundli_gender: kundli_gender,
            kundli_birthPlace: kundli_birthPlace,
            kundli_latitude: kundli_latitude,
            kundli_longitude: kundli_longitude,
            kundli_timezone: kundli_timezone,
            kundli_lang: kundli_lang,
            p2gender :    p2gender,
            fe_fullname:  f_fullname,            
            fe_day:       f_day,
            fe_month:     f_month,
            fe_year:      f_year,
            fe_hour:      f_hour,
            fe_minute:    f_minute,
            fe_sec:       "00",
            fe_birthPlace:f_birthPlace,
            fe_latitude:  f_latitude,
            fe_longitude: f_longitude,
            fe_timezone:  f_timezone,
            fe_gender:    f_gender,
        }
        
        
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
    });
    
     $.ajax({
        type: "POST",
        url: "/match_manglik_dosha",
        data: input_data,
        success: function(e) {
            $('#match_manglik_hidden').val(e);
          const myObj1 = JSON.parse(e);

         
           let text = "<table>"
           text += "<tr><td>Manglik Status</td><td>" +myObj1.data.p1.strength + "</td><td>" +myObj1.data.p2.strength + "</td></tr>";
           text += "<tr><td>Manglik Percentage</td><td>" +myObj1.data.p1.percentage + "</td><td>" +myObj1.data.p2.percentage + "</td></tr>";
           text += "<tr><td>Manglik Present</td><td>" +myObj1.data.p1.manglik_dosha + "</td><td>" +myObj1.data.p2.manglik_dosha + "</td></tr>";
           text += "<tr><th>Conclusion</th></tr>";
           text += "<tr><td>content</td><td>" +myObj1.data.content + "</td></tr>";
           text += "</table>"
           
        $('#match_manglicknew').html(text);
          },
        error: function(err) {
            console.log(err.responseText);
        }
    });
      
}


function match_charts(){
    
     var e=$('#matchmoonchart').val();
     if(e==='') {
         
     } else {
         //   get_basic_data_print();
          return false;
     }
    
    var kundli_fullname= $('#kundli_fullname').val();
    var kundli_birthDate= $('#kundli_birthDate').val();
    var kundli_birthtime= $('#kundli_birthtime').val();
    var kundli_latitude= $('#kundli_latitude').val();
    var kundli_longitude= $('#kundli_longitude').val();
    var kundli_timezone= $('#kundli_timezone').val();
    var kundli_gender= $('#kundli_gender').val();
    var kundli_year= $('#kundli_year').val();
    var kundli_month= $('#kundli_month').val();
    var kundli_day= $('#kundli_day').val();
    var kundli_minute= $('#kundli_minute').val();
    var kundli_hour= $('#kundli_hour').val();
    var kundli_birthPlace= $('#kundli_birthPlace').val();
    var apikey='996009f2374006606f4c0b0fda878af1';
    var kundli_lang='en';
    
    var p2gender =      $('#p2gender').val();
    var f_fullname=     $('#f_fullname').val();
    var f_birthDate=    $('#f_birthDate').val();
    var f_birthtime=    $('#f_birthtime').val();
    var f_latitude=     $('#f_latitude').val();
    var f_longitude=    $('#f_longitude').val();
    var f_timezone=     $('#f_timezone').val();
    var f_gender=       $('#f_gender').val();
    var f_year=         $('#f_year').val();
    var f_month=        $('#f_month').val();
    var f_day=          $('#f_day').val();
    var f_minute=       $('#f_minute').val();
    var f_hour=         $('#f_hour').val();
    var f_birthPlace=   $('#f_birthPlace').val();
    
    var input_data={
            api_key: apikey,
            kundli_fullname: kundli_fullname,
            kundli_day: kundli_day,
            kundli_month: kundli_month,
            kundli_year: kundli_year,
            kundli_hour: kundli_hour,
            kundli_minute: kundli_minute,
            kundli_sec: "00",
            kundli_gender: kundli_gender,
            kundli_birthPlace: kundli_birthPlace,
            kundli_latitude: kundli_latitude,
            kundli_longitude: kundli_longitude,
            kundli_timezone: kundli_timezone,
            kundli_lang: kundli_lang,
            p2gender :    p2gender,
            fe_fullname:  f_fullname,            
            fe_day:       f_day,
            fe_month:     f_month,
            fe_year:      f_year,
            fe_hour:      f_hour,
            fe_minute:    f_minute,
            fe_sec:       "00",
            fe_birthPlace:f_birthPlace,
            fe_latitude:  f_latitude,
            fe_longitude: f_longitude,
            fe_timezone:  f_timezone,
            fe_gender:    f_gender,
        }
        
        
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
    });
    
    // input_data={
    //     ...input_data,
    //     chartId : 'chalit'
    // }
    //  $.ajax({
    //     type: "POST",
    //     url: "/match_charts",
    //     data: input_data,
    //     success: function(e) {
    //         $('#match_bhav_chalit_div').val(e);
    //       const myObj1 = JSON.parse(e);
        
    //           $('#match_bhavchalitchart').after('<tr><th>Partner1</th><th>Partner2</th></tr><tr><td>'+myObj1.data.p1.svg+'</td><td>'+myObj1.data.p2.svg+'</td></tr>');
    //   },
    //     error: function(err) {
    //         console.log(err.responseText);
    //     }
    // });
    
    //   input_data={
    //     ...input_data,
    //     chartId : 'SUN'
    // }
    //  $.ajax({
    //     type: "POST",
    //     url: "/match_charts",
    //     data: input_data,
    //     success: function(e) {
    //       const myObj1 = JSON.parse(e);
    //         $('#mathsunchart').after('<tr><th>Partner1</th><th>Partner2</th></tr><tr><td>'+myObj1.data.p1.svg+'</td><td>'+myObj1.data.p2.svg+'</td></tr>');
    //       },
    //     error: function(err) {
    //         console.log(err.responseText);
    //     }
    // });
    
        input_data={
        ...input_data,
        chartId : 'MOON'
    }
     $.ajax({
        type: "POST",
        url: "/match_charts",
        data: input_data,
        success: function(e) {
          const myObj1 = JSON.parse(e);
            $('#matchmoonchart').after('<td style"text-align: center;">'+myObj1.data.p1.svg+'</td><td style"text-align: center;">'+myObj1.data.p2.svg+'</td></tr>');
          },
        error: function(err) {
            console.log(err.responseText);
        }
    });
    
    input_data={
      ...input_data,
      chartId : 'D1'
    }
     $.ajax({
        type: "POST",
        url: "/match_charts",
        data: input_data,
        success: function(e) {
          const myObj1 = JSON.parse(e);
            $('#match_lagnachart').after('<td style"text-align: center;">'+myObj1.data.p1.svg+'</td><td style"text-align: center;">'+myObj1.data.p2.svg+'</td></tr>');
          },
        error: function(err) {
            console.log(err.responseText);
        }
    });
    
    // input_data={
    //   ...input_data,
    //   chartId : 'D2'
    // }
    //  $.ajax({
    //     type: "POST",
    //     url: "/match_charts",
    //     data: input_data,
    //     success: function(e) {
    //       const myObj1 = JSON.parse(e);
    //         $('#match_horochart').after('<tr><th>Partner1</th><th>Partner2</th></tr><tr><td>'+myObj1.data.p1.svg+'</td><td>'+myObj1.data.p2.svg+'</td></tr>');
    //       },
    //     error: function(err) {
    //         console.log(err.responseText);
    //     }
    // });
    
    // input_data={
    //   ...input_data,
    //   chartId : 'D3'
    // }
    //  $.ajax({
    //     type: "POST",
    //     url: "/match_charts",
    //     data: input_data,
    //     success: function(e) {
    //       const myObj1 = JSON.parse(e);
    //         $('#match_drekkanachart').after('<tr><th>Partner1</th><th>Partner2</th></tr><tr><td>'+myObj1.data.p1.svg+'</td><td>'+myObj1.data.p2.svg+'</td></tr>');
    //       },
    //     error: function(err) {
    //         console.log(err.responseText);
    //     }
    // });
    
    // input_data={
    //   ...input_data,
    //   chartId : 'D4'
    // }
    //  $.ajax({
    //     type: "POST",
    //     url: "/match_charts",
    //     data: input_data,
    //     success: function(e) {
    //       const myObj1 = JSON.parse(e);
    //         $('#match_chaturthmasachart').after('<tr><th>Partner1</th><th>Partner2</th></tr><tr><td>'+myObj1.data.p1.svg+'</td><td>'+myObj1.data.p2.svg+'</td></tr>');
    //       },
    //     error: function(err) {
    //         console.log(err.responseText);
    //     }
    // });
    
    // input_data={
    //   ...input_data,
    //   chartId : 'D7'
    // }
    //  $.ajax({
    //     type: "POST",
    //     url: "/match_charts",
    //     data: input_data,
    //     success: function(e) {
    //       const myObj1 = JSON.parse(e);
    //         $('#matchsaptmasachart').after('<tr><th>Partner1</th><th>Partner2</th></tr><tr><td>'+myObj1.data.p1.svg+'</td><td>'+myObj1.data.p2.svg+'</td></tr>');
    //       },
    //     error: function(err) {
    //         console.log(err.responseText);
    //     }
    // });
    
    // input_data={
    //   ...input_data,
    //   chartId : 'D10'
    // }
    //  $.ajax({
    //     type: "POST",
    //     url: "/match_charts",
    //     data: input_data,
    //     success: function(e) {
    //       const myObj1 = JSON.parse(e);
    //         $('#match_dasmasachart').after('<tr><th>Partner1</th><th>Partner2</th></tr><tr><td>'+myObj1.data.p1.svg+'</td><td>'+myObj1.data.p2.svg+'</td></tr>');
    //       },
    //     error: function(err) {
    //         console.log(err.responseText);
    //     }
    // });
    
    // input_data={
    //   ...input_data,
    //   chartId : 'D12'
    // }
    //  $.ajax({
    //     type: "POST",
    //     url: "/match_charts",
    //     data: input_data,
    //     success: function(e) {
    //       const myObj1 = JSON.parse(e);
    //         $('#match_dwadasmasachart').after('<tr><th>Partner1</th><th>Partner2</th></tr><tr><td>'+myObj1.data.p1.svg+'</td><td>'+myObj1.data.p2.svg+'</td></tr>');
    //       },
    //     error: function(err) {
    //         console.log(err.responseText);
    //     }
    // });
    
    // input_data={
    //   ...input_data,
    //   chartId : 'D16'
    // }
    //  $.ajax({
    //     type: "POST",
    //     url: "/match_charts",
    //     data: input_data,
    //     success: function(e) {
    //       const myObj1 = JSON.parse(e);
    //         $('#match_shodasamsachart').after('<tr><th>Partner1</th><th>Partner2</th></tr><tr><td>'+myObj1.data.p1.svg+'</td><td>'+myObj1.data.p2.svg+'</td></tr>');
    //       },
    //     error: function(err) {
    //         console.log(err.responseText);
    //     }
    // }); 
    
    // input_data={
    //   ...input_data,
    //   chartId : 'D20'
    // }
    //  $.ajax({
    //     type: "POST",
    //     url: "/match_charts",
    //     data: input_data,
    //     success: function(e) {
    //       const myObj1 = JSON.parse(e);
    //         $('#match_vimsamsamsachart').after('<tr><th>Partner1</th><th>Partner2</th></tr><tr><td>'+myObj1.data.p1.svg+'</td><td>'+myObj1.data.p2.svg+'</td></tr>');
    //       },
    //     error: function(err) {
    //         console.log(err.responseText);
    //     }
    // }); 
    
    // input_data={
    //   ...input_data,
    //   chartId : 'D24'
    // }
    //  $.ajax({
    //     type: "POST",
    //     url: "/match_charts",
    //     data: input_data,
    //     success: function(e) {
    //       const myObj1 = JSON.parse(e);
    //         $('#match_chaturvimsamsachart').after('<tr><th>Partner1</th><th>Partner2</th></tr><tr><td>'+myObj1.data.p1.svg+'</td><td>'+myObj1.data.p2.svg+'</td></tr>');
    //       },
    //     error: function(err) {
    //         console.log(err.responseText);
    //     }
    // });
    
    // input_data={
    //   ...input_data,
    //   chartId : 'D27'
    // }
    //  $.ajax({
    //     type: "POST",
    //     url: "/match_charts",
    //     data: input_data,
    //     success: function(e) {
    //       const myObj1 = JSON.parse(e);
    //         $('#match_saptavimsamsachart').after('<tr><th>Partner1</th><th>Partner2</th></tr><tr><td>'+myObj1.data.p1.svg+'</td><td>'+myObj1.data.p2.svg+'</td></tr>');
    //       },
    //     error: function(err) {
    //         console.log(err.responseText);
    //     }
    // });
    
    // input_data={
    //   ...input_data,
    //   chartId : 'D30'
    // }
    //  $.ajax({
    //     type: "POST",
    //     url: "/match_charts",
    //     data: input_data,
    //     success: function(e) {
    //       const myObj1 = JSON.parse(e);
    //         $('#match_trimsamsachart').after('<tr><th>Partner1</th><th>Partner2</th></tr><tr><td>'+myObj1.data.p1.svg+'</td><td>'+myObj1.data.p2.svg+'</td></tr>');
    //       },
    //     error: function(err) {
    //         console.log(err.responseText);
    //     }
    // });
    
    // input_data={
    //   ...input_data,
    //   chartId : 'D40'
    // }
    //  $.ajax({
    //     type: "POST",
    //     url: "/match_charts",
    //     data: input_data,
    //     success: function(e) {
    //       const myObj1 = JSON.parse(e);
    //         $('#match_khavedamsachart').after('<tr><th>Partner1</th><th>Partner2</th></tr><tr><td>'+myObj1.data.p1.svg+'</td><td>'+myObj1.data.p2.svg+'</td></tr>');
    //       },
    //     error: function(err) {
    //         console.log(err.responseText);
    //     }
    // });
    
    // input_data={
    //   ...input_data,
    //   chartId : 'D45'
    // }
    //  $.ajax({
    //     type: "POST",
    //     url: "/match_charts",
    //     data: input_data,
    //     success: function(e) {
    //       const myObj1 = JSON.parse(e);
    //         $('#match_akshavedamsaachart').after('<tr><th>Partner1</th><th>Partner2</th></tr><tr><td>'+myObj1.data.p1.svg+'</td><td>'+myObj1.data.p2.svg+'</td></tr>');
    //       },
    //     error: function(err) {
    //         console.log(err.responseText);
    //     }
    // });
    
    // input_data={
    //   ...input_data,
    //   chartId : 'D60'
    // }
    //  $.ajax({
    //     type: "POST",
    //     url: "/match_charts",
    //     data: input_data,
    //     success: function(e) {
    //       const myObj1 = JSON.parse(e);
    //         $('#match_shastiamsachart').after('<tr><th>Partner1</th><th>Partner2</th></tr><tr><td>'+myObj1.data.p1.svg+'</td><td>'+myObj1.data.p2.svg+'</td></tr>');
    //       },
    //     error: function(err) {
    //         console.log(err.responseText);
    //     }
    // });
    
    // input_data={
    //   ...input_data,
    //   chartId : 'cuspal'
    // }
    //  $.ajax({
    //     type: "POST",
    //     url: "/match_charts",
    //     data: input_data,
    //     success: function(e) {
    //       const myObj1 = JSON.parse(e);
    //         $('#match_cuspalchart').after('<tr><th>Partner1</th><th>Partner2</th></tr><tr><td>'+myObj1.data.p1.svg+'</td><td>'+myObj1.data.p2.svg+'</td></tr>');
    //       },
    //     error: function(err) {
    //         console.log(err.responseText);
    //     }
    // });
    
}


 
