// <!-- ========== division Start Section ========== -->
// const divi =["Barishal","Chattogram","Dhaka","Khulna","Rajshahi", "Rangpur", "Mymensingh", "Sylhet"];
const divi =[
  "একটি বিভাগ নিবাচন করুন " ,"ঢাকা","চট্টগ্রাম" , "রাজশাহী" , "খুলনা" , "বরিশাল" , "সিলেট" , "রংপুর" , "ময়মনসিংহ"];

let newDivi = [];
divi.forEach(myfncrtion_divi);
function myfncrtion_divi(divi,index) {
  newDivi += "<option value=divi" + index +">" + divi + "</option>";
}
document.getElementById("divi").innerHTML = newDivi;

// document.getElementById("test").innerHTML=divi;
// <!-- ==========  End Section ========== -->
// <!-- ========== jala  let Start Section ========== -->
const subDiveBarisal =["বরিশাল", "ঝালকাঠি", "পটুয়াখালী", "পিরোজপুর",  'ভোলা', "বরগুনা"];
const subDiveChittagong =["চট্টগ্রাম","কুমিল্লা","কক্সবাজার",  "ফেনী", "ব্রাহ্মণবাড়িয়া", "নোয়াখালী", "চাঁদপুর", "লক্ষ্মীপুর", "রাঙ্গামাটি",  "খাগড়াছড়ি", "বান্দরবান"];
const subDiveDhaka =["ঢাকা","নারায়ণগঞ্জ","গাজীপুর","নরসিংদী",  "শরীয়তপুর",  "টাঙ্গাইল", "কিশোরগঞ্জ", "মানিকগঞ্জ",  "মুন্সিগঞ্জ", "রাজবাড়ী", "মাদারীপুর", "গোপালগঞ্জ", "ফরিদপুর"];
const subDiveKhulna=["খুলনা","যশোর", "সাতক্ষীরা", "মেহেরপুর", "নড়াইল", "চুয়াডাঙ্গা", "কুষ্টিয়া", "মাগুরা",  "বাগেরহাট", "ঝিনাইদহ"];
const subDiveRajshahi =["রাজশাহী", "নাটোর","পাবনা","চাঁপাইনবাবগঞ্জ", "সিরাজগঞ্জ",  "বগুড়া",  "জয়পুরহাট", "নওগাঁ"];
const subDiveRangpur =[	 "রংপুর","পঞ্চগড়", "দিনাজপুর", "লালমনিরহাট", "নীলফামারী", "গাইবান্ধা", "ঠাকুরগাঁও", "কুড়িগ্রাম"];
const subDivieMymensingh =["ময়মনসিংহ", "শেরপুর", "জামালপুর", "নেত্রকোণা"];
const subDivieSylhet =[ "সিলেট", "মৌলভীবাজার", "হবিগঞ্জ", "সুনামগঞ্জ"  ];
let subDiveDhakalan  = subDiveDhaka.length;
let subDiveBarisallan  = subDiveBarisal.length;
let subDiveChittagonglan  = subDiveChittagong.length;
let subDiveKhulnalan  = subDiveKhulna.length;
let subDiveRajshahilan  = subDiveRajshahi.length;
let subDiveRangpurlan  = subDiveRangpur.length;
let subDivieMymensinghlan  = subDivieMymensingh.length;
let subDivieSylhetlan  = subDivieSylhet.length;


x= subDiveBarisallan+subDiveChittagonglan+subDiveDhakalan+subDiveKhulnalan+subDiveRajshahilan +subDiveRangpurlan+ subDivieMymensinghlan+subDivieSylhetlan;
y = subDiveChittagonglan;
document.getElementById("test4").innerHTML=x;


// <!-- ========== jala  let End Section ========== -->
// <!-- ========== Start Section foreach ========== -->

// <!-- ========== End Section foreach ========== -->
let newsubDiveBarisal =[];
subDiveBarisal.forEach(myfncrtion_subDiveBarisa);
function myfncrtion_subDiveBarisa(Barisal,index) {
  newsubDiveBarisal += "<option value=subdivBarisal" + index +">" + Barisal + "</option>";
}
let newsubDiveChittagong =[];
subDiveChittagong.forEach(myfncrtion_subDiveChittagong);
function myfncrtion_subDiveChittagong(Chittagong,index) {
  newsubDiveChittagong += "<option value=subdivChittagong" + index +">" + Chittagong + "</option>";
}
let newsubDiveDhaka =[];
subDiveDhaka.forEach(myfncrtion_subDiveDhaka);
function myfncrtion_subDiveDhaka(Dhaka,index) {
  newsubDiveDhaka += "<option value=subdivDhaka" +index +">" + Dhaka + "</option>";
}
let newsubDiveKhulna =[];
subDiveKhulna.forEach(myfncrtion_subDiveKhulna);
function myfncrtion_subDiveKhulna(Khulna,index) {
  newsubDiveKhulna += "<option value=subdivKhulna" + index +">" + Khulna + "</option>";
}
let newsubDiveRajshahi =[];
subDiveRajshahi.forEach(myfncrtion_subDiveRajshahi);
function myfncrtion_subDiveRajshahi(Rajshahi,index) {
  newsubDiveRajshahi += "<option value=subdivRajshahi" + index +">" + Rajshahi + "</option>";
}
let newsubDiveRangpur =[];
subDiveRangpur.forEach(myfncrtion_subDiveRangpur);
function myfncrtion_subDiveRangpur(Rangpur,index) {
  newsubDiveRangpur += "<option value=subdivRangpur" + index +">" + Rangpur + "</option>";
}
let newsubDivieMymensingh =[];
subDivieMymensingh.forEach(myfncrtion_subDivieMymensingh);
function myfncrtion_subDivieMymensingh(Mymensingh,index) {
  newsubDivieMymensingh += "<option value=subdivMymensingh" + index +">" + Mymensingh + "</option>";
}
let newsubDivieSylhet =[];
subDivieSylhet.forEach(myfncrtion_subDivieSylhet);
function myfncrtion_subDivieSylhet(Sylhet,index) {
  newsubDivieSylhet += "<option value=subdivSylhet" + index +">" + Sylhet + "</option>";
}




// <!-- ========== onchange divi Start Section ========== -->
function divis(){
  var divival =document.getElementById("divi").value;
  console.log(divival);
  document.getElementById("test2").innerHTML =divival;
  if (divival=="divi1"){
    subdivi_output=newsubDiveDhaka;
  }
  else if (divival=="divi2"){
    subdivi_output=newsubDiveChittagong;
  }
  else if (divival=="divi3"){
    subdivi_output=newsubDiveRajshahi;
  }
  else if (divival=="divi4"){
    subdivi_output=newsubDiveKhulna;
  }
  else if (divival=="divi5"){
    subdivi_output=newsubDiveBarisal;
  }
  else if (divival=="divi6"){
    subdivi_output=newsubDivieSylhet;
  }
  else if (divival=="divi7"){
    subdivi_output=newsubDiveRangpur;
  }
  else if (divival=="divi8"){
    subdivi_output=newsubDivieMymensingh;
  }
else{ subdivi=`বিভাগ নিবাচন করুন`}
  document.getElementById("subdivi").innerHTML=subdivi_output;
}
// <!-- ========== onchange divi End Section ========== -->
// <!-- ========== onchange divi Start Section ========== -->
// function subdivi(){
//   var subdivival =document.getElementById("subdivi").value;
//   // console.log(divival);
//   document.getElementById("test3").innerHTML =subdivival;
// }
// <!-- ========== onchange divi End Section ========== -->
const nn =["চট্টগ্রাম" , "রাজশাহী" , "খুলনা" , "বরিশাল" , "সিলেট" , "ঢাকা" , "রংপুর" , "ময়মনসিংহ"];
let c=nn.sort();
document.getElementById("sort").innerHTML=c;
