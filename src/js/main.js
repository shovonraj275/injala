// <!-- ========== division Start Section ========== -->
let newhtml = [];
html.forEach(myfncrtion_html);

function myfncrtion_html(html) {

  newhtml += '<div class="grid_content">' +
              '<label for="">' +html.lable_eng  + '</label><br>' +
              '<select id="'+html.Optionid+'" onchange="'+html.Optionfunc+'">'+
              ' <option value="" selected disabled hidden>  '+html.Option_eng+'  </option>'+
              '</select>' +
              '</div>';
}
document.getElementById("htmlMain").innerHTML += newhtml;
// <!-- ========== division End Section ========== -->
// <!-- ========== division Start Section ========== -->
let newDivi = [];
division.forEach(myfncrtion_divi);

function myfncrtion_divi(divi) {
  newDivi += "<option value=" + divi.val + ">" + divi.eng + "</option>";
}
document.getElementById("Division").innerHTML = newDivi;
// <!-- ========== division End Section ========== -->
// <!-- ========== jala  let Start Section ========== -->
// dhaka 
let newsubDiveDhaka = [];
subDiveDhaka.forEach(myfncrtion_subDiveDhaka);

function myfncrtion_subDiveDhaka(Dhaka) {
  newsubDiveDhaka += "<option value=" + Dhaka.val + ">" + Dhaka.eng + "</option>";
};
// Chittagong
let newsubDiveChittagong = [];
subDiveChittagong.forEach(myfncrtion_subDiveChittagong);

function myfncrtion_subDiveChittagong(Chittagong) {
  newsubDiveChittagong += "<option value=" + Chittagong.val + ">" + Chittagong.eng + "</option>";
};
let newsubDiveRajshahi = [];
subDiveRajshahi.forEach(myfncrtion_subDiveRajshahi);

function myfncrtion_subDiveRajshahi(Rajshahi) {
  newsubDiveRajshahi += "<option value=" + Rajshahi.val + ">" + Rajshahi.eng + "</option>";
};

let newsubDiveBarisal = [];
subDiveBarisal.forEach(myfncrtion_subDiveBarisa);

function myfncrtion_subDiveBarisa(Barisal) {
  newsubDiveBarisal += "<option value=" + Barisal.val + ">" + Barisal.eng + "</option>";
}


let newsubDiveKhulna = [];
subDiveKhulna.forEach(myfncrtion_subDiveKhulna);

function myfncrtion_subDiveKhulna(Khulna) {
  newsubDiveKhulna += "<option value=" + Khulna.val + ">" + Khulna.eng + "</option>";
}

let newsubDiveRangpur = [];
subDiveRangpur.forEach(myfncrtion_subDiveRangpur);
function myfncrtion_subDiveRangpur(Rangpur) {
  newsubDiveRangpur += "<option value=" + Rangpur.val + ">" + Rangpur.eng + "</option>";
}
let newsubDivieMymensingh = [];
subDivieMymensingh.forEach(myfncrtion_subDivieMymensingh);

function myfncrtion_subDivieMymensingh(Mymensingh) {
  newsubDivieMymensingh += "<option value=" + Mymensingh.val + ">" + Mymensingh.eng + "</option>";
}
let newsubDivieSylhet = [];
subDivieSylhet.forEach(myfncrtion_subDivieSylhet);

function myfncrtion_subDivieSylhet(Sylhet) {
  newsubDivieSylhet += "<option value=" + Sylhet.val + ">" + Sylhet.eng + "</option>";
}
// <!-- ========== jala  let End Section ========== -->


// <!-- ========== Start Section tana list ========== -->
let  newthanarajshahi =[];
tanarajshahi.forEach(myfncrtion_tanarajshahi);
function myfncrtion_tanarajshahi(tanarajshahi) {
  newthanarajshahi += "<option value=" + tanarajshahi.val +">" + tanarajshahi.eng + "</option>";
}
// <!-- ========== End Section tana list========== -->

// <!-- ========== Start Section uinon word foreach ========== -->


// <!-- ========== End Section uinon word foreach ========== -->


// <!-- ========== Start Section boalia ========== -->
let  newthanauinonwordBoalia =[];
tanauinonwordBoalia.forEach(myfncrtion_tanauinonwordBoalia);
function myfncrtion_tanauinonwordBoalia(tanauinonwordBoalia) {
  newthanauinonwordBoalia += "<option value=" + tanauinonwordBoalia.val +">" + tanauinonwordBoalia.eng + "</option>";
}
document.getElementById("test4").innerHTML= newthanauinonwordBoalia;

// <!-- ========== End Section boalia ========== -->

// <!-- ========== Start Section  r========== -->

let  newthanauinonwordRajpara =[];
tanauinonworRajpara.forEach(myfncrtion_tanauinonwordRajpara);
function myfncrtion_tanauinonwordRajpara(tanauinonwordRajpara) {
  newthanauinonwordRajpara += "<option value=" + tanauinonwordRajpara.val +">" + tanauinonwordRajpara.eng + "</option>";
}

// <!-- ========== End Section r ========== -->



// <!-- ========== onchange divi Start Section ========== -->
function Division() {
  var Divisionval = document.getElementById("Division").value;
  console.log(Divisionval);
  document.getElementById("Divisionval").innerHTML = `<h1> division value: ${Divisionval}</h1>`;
  if (Divisionval == " ") {
    District_output = "0";
  } else if (Divisionval == "Dhaka") {
    District_output = newsubDiveDhaka;
  } else if (Divisionval == "Chattogram") {
    District_output = newsubDiveChittagong;
  } else if (Divisionval == "Rajshahi") {
    District_output = newsubDiveRajshahi;
  } else if (Divisionval == "Khulna") {
    District_output = newsubDiveKhulna;
  } else if (Divisionval == "Barishal") {
    District_output = newsubDiveBarisal;
  } else if (Divisionval == "Sylhet") {
    District_output = newsubDivieSylhet;
  } else if (Divisionval == "Rangpur") {
    District_output = newsubDiveRangpur;
  } else if (Divisionval == "Mymensingh") {
    District_output = newsubDivieMymensingh;
  }     
  document.getElementById("District").innerHTML = District_output;
}

// <!-- ========== onchange divi End Section ========== -->

// <!-- ========== onchange divi Start Section ========== -->
// <!-- ========== Start Section dhaka jaila ========== -->
// document.getElementById("test5").innerHTML=divi;
// <!-- ========== End Section dhaka jaila ========== -->
// <!-- ========== Start Section foreach dhaka jaila ========== -->
// <!-- ========== End Section foreach dhaka jaila ========== -->
// <!-- ========== onchange divi End Section ========== -->
function District() {
  var Districtval = document.getElementById("District").value;
  console.log(Districtval)
  document.getElementById("Districtval").innerHTML = '<h1> District value : '+Districtval+'</h1>';
  if(Districtval == "Rajshahi"){
    thanaOutPut = newthanarajshahi;
  }
  document.getElementById("thanaList").innerHTML = thanaOutPut;
}
// document.getElementById("sort").innerHTML=c;
// <!-- ========== Start Section dhaka jaila ========== -->
function thana(){
   var thanaval = document.getElementById("thanaList").value;
   document.getElementById("thanaval").innerHTML = '<h1> thana valur : '+ thanaval+'</h1>';
   if(thanaval == "Boalia"){
    unionWordOutput =newthanauinonwordBoalia;
   }
   else if(thanaval == "Rajpara"){
    unionWordOutput =newthanauinonwordRajpara;
   }
   document.getElementById("union_word_list").innerHTML = unionWordOutput;
}

langhtchk = Object.keys(tanauinonworRajpara).length;;
console.log(langhtchk)