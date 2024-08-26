// <!-- ========== division Start Section ========== -->
const divi =[
  "একটি বিভাগ নিবাচন করুন " ,"ঢাকা","চট্টগ্রাম" , "রাজশাহী" , "খুলনা" , "বরিশাল" , "সিলেট" , "রংপুর" , "ময়মনসিংহ"];
let newDivi = [];
divi.forEach(myfncrtion_divi);
function myfncrtion_divi(divi,index) {
  newDivi += "<option value=divi" + index +">" + divi + "</option>";
}
document.getElementById("divi").innerHTML = newDivi;
// <!-- ========== division End Section ========== -->
// <!-- ========== jala  let Start Section ========== -->
const subDiveBarisal =["জেলা নিবাচন করুন ", "বরিশাল", "ঝালকাঠি", "পটুয়াখালী", "পিরোজপুর",  'ভোলা', "বরগুনা"];
let newsubDiveBarisal =[];
subDiveBarisal.forEach(myfncrtion_subDiveBarisa);
function myfncrtion_subDiveBarisa(Barisal,index) {
  newsubDiveBarisal += "<option value=subdivBarisal" + index +">" + Barisal + "</option>";
}
const subDiveChittagong =["একটি জেলা নিবাচন করুন ","চট্টগ্রাম","কুমিল্লা","কক্সবাজার",  "ফেনী", "ব্রাহ্মণবাড়িয়া", "নোয়াখালী", "চাঁদপুর", "লক্ষ্মীপুর", "রাঙ্গামাটি",  "খাগড়াছড়ি", "বান্দরবান"];
let newsubDiveChittagong =[];
subDiveChittagong.forEach(myfncrtion_subDiveChittagong);
function myfncrtion_subDiveChittagong(Chittagong,index) {
  newsubDiveChittagong += "<option value=subdivChittagong" + index +">" + Chittagong + "</option>";
}
const subDiveDhaka =["জেলা নিবাচন করুন ","ঢাকা","নারায়ণগঞ্জ","গাজীপুর","নরসিংদী",  "শরীয়তপুর",  "টাঙ্গাইল", "কিশোরগঞ্জ", "মানিকগঞ্জ",  "মুন্সিগঞ্জ", "রাজবাড়ী", "মাদারীপুর", "গোপালগঞ্জ", "ফরিদপুর"];
let newsubDiveDhaka =[];
subDiveDhaka.forEach(myfncrtion_subDiveDhaka);
function myfncrtion_subDiveDhaka(Dhaka,index) {
  newsubDiveDhaka += "<option value=subdivDhaka" +index +">" + Dhaka + "</option>";
}
const subDiveKhulna=["জেলা নিবাচন করুন ","খুলনা","যশোর", "সাতক্ষীরা", "মেহেরপুর", "নড়াইল", "চুয়াডাঙ্গা", "কুষ্টিয়া", "মাগুরা",  "বাগেরহাট", "ঝিনাইদহ"];
let newsubDiveKhulna =[];
subDiveKhulna.forEach(myfncrtion_subDiveKhulna);
function myfncrtion_subDiveKhulna(Khulna,index) {
  newsubDiveKhulna += "<option value=subdivKhulna" + index +">" + Khulna + "</option>";
}

const subDiveRajshahi =["জেলা নিবাচন করুন ","রাজশাহী", "নাটোর","পাবনা","চাঁপাইনবাবগঞ্জ", "সিরাজগঞ্জ",  "বগুড়া",  "জয়পুরহাট", "নওগাঁ"];
let newsubDiveRajshahi =[];
subDiveRajshahi.forEach(myfncrtion_subDiveRajshahi);
function myfncrtion_subDiveRajshahi(Rajshahi,index) {
  newsubDiveRajshahi += "<option value=subdivRajshahi" + index +">" + Rajshahi + "</option>";
}
const subDiveRangpur =[	"জেলা নিবাচন করুন ", "রংপুর","পঞ্চগড়", "দিনাজপুর", "লালমনিরহাট", "নীলফামারী", "গাইবান্ধা", "ঠাকুরগাঁও", "কুড়িগ্রাম"];
let newsubDiveRangpur =[];
subDiveRangpur.forEach(myfncrtion_subDiveRangpur);
function myfncrtion_subDiveRangpur(Rangpur,index) {
  newsubDiveRangpur += "<option value=subdivRangpur" + index +">" + Rangpur + "</option>";
}
const subDivieMymensingh =["জেলা নিবাচন করুন ","ময়মনসিংহ", "শেরপুর", "জামালপুর", "নেত্রকোণা"];
let newsubDivieMymensingh =[];
subDivieMymensingh.forEach(myfncrtion_subDivieMymensingh);
function myfncrtion_subDivieMymensingh(Mymensingh,index) {
  newsubDivieMymensingh += "<option value=subdivMymensingh" + index +">" + Mymensingh + "</option>";
}
const subDivieSylhet =[ "জেলা নিবাচন করুন ","সিলেট", "মৌলভীবাজার", "হবিগঞ্জ", "সুনামগঞ্জ"  ];
let newsubDivieSylhet =[];
subDivieSylhet.forEach(myfncrtion_subDivieSylhet);
function myfncrtion_subDivieSylhet(Sylhet,index) {
  newsubDivieSylhet += "<option value=subdivSylhet" + index +">" + Sylhet + "</option>";
}
// <!-- ========== jala  let End Section ========== -->
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
// <!-- ========== Start Section dhaka jaila ========== -->
const subdivDhaka1 =["থানা নিবাচন করুন ","তুরাগ", "উত্তরা(পশ্চিম)", "উত্তরা(পূর্ব)", "উত্তরখান", "দক্ষিণখান", "বিমানবন্দর", "খিলক্ষেত", "ভাটারা", "বাড্ডা", "গুলশান", "বনানী", "ক্যান্টনমেন্ট", "হাতিরঝিল", "তেজগাঁও শিল্পাঞ্চল", "তেজগাঁও", "শেরেবাংলা নগর", "মোহাম্মদপুর", "আদাবর", "ভাষাণটেক", "কাফরুল", "মিরপুর মডেল", "পল্লবী", "দারুচ্ছালাম", "শাহ্আলী", "রুপনগর", "রমনা মডেল", "শাহবাগ", "কলাবাগান", "নিউ মার্কেট", "ধানমন্ডি", "হাজারীবাগ", "মতিঝিল", "পল্টন মডেল", "শাহজাহানপুর", "সবুজবাগ", "মুগদা", "খিলগাঁও", "রামপুরা", "ওয়ারী", "গেন্ডারিয়া", "শ্যামপুর", "কদমতলী", "ডেমরা", "যাত্রাবাড়ী", "লালবাগ বিভাগ", "কোতয়ালী", "সুত্রাপুর", "বংশাল", "চকবাজার", "লালবাগ", "কামরাংগীরচর","সাভার", "ধামরাই", "কেরাণীগঞ্জ", "নবাবগঞ্জ", "দোহার"];
let  newsubdivDhaka1 =[];
subdivDhaka1.forEach(myfncrtion_subdivDhaka1);
function myfncrtion_subdivDhaka1(subdivDhaka1,index) {
  newsubdivDhaka1 += "<option value=subdivDhaka1" + index +">" + subdivDhaka1 + "</option>";
}
// subdivDhaka2
const subdivDhaka2 =["থানা নিবাচন করুন ","আড়াইহাজার" , "বন্দর" , "নারায়নগঞ্জ সদর", "রূপগঞ্জ" , "সোনারগাঁ" ];
let newsubdivDhaka2 =[];
subdivDhaka2.forEach(myfncrtion_subdivDhaka2);
function myfncrtion_subdivDhaka2(subdivDhaka2,index) {
  newsubdivDhaka2 += "<option value=subdivsubdivDhaka2" + index +">" +  subdivDhaka2+ "</option>";
}
// subdivDhaka3
const subdivDhaka3 =["থানা নিবাচন করুন ","কালীগঞ্জ", "কালিয়াকৈর", "কাপাসিয়া", "গাজীপুর সদর", "শ্রীপুর"];
let newsubdivDhaka3 =[];
subdivDhaka3.forEach(myfncrtion_subdivDhaka3);
function myfncrtion_subdivDhaka3(subdivDhaka3,index) {
  newsubdivDhaka3 += "<option value=subdivsubdivDhaka3" + index +">" + subdivDhaka3 + "</option>";
}
// subdivDhaka4
const subdivDhaka4 =["থানা নিবাচন করুন ","বেলাবো", "মনোহরদী", "নরসিংদী", "পলাশ", "রায়পুরা", "শিবপুর"];
let newsubdivDhaka4 =[];
subdivDhaka4.forEach(myfncrtion_subdivDhaka4);
function myfncrtion_subdivDhaka4(subdivDhaka4,index) {
  newsubdivDhaka4 += "<option value=subdivsubdivDhaka4" + index +">" + subdivDhaka4 + "</option>";
}
// subdivDhaka5
const subdivDhaka5 =["থানা নিবাচন করুন ","শরিয়তপুর সদর", "নড়িয়া", "জাজিরা", "গোসাইরহাট", "ভেদরগঞ্জ", "ডামুড্যা"];
let newsubdivDhaka5 =[];
subdivDhaka5.forEach(myfncrtion_subdivDhaka5);
function myfncrtion_subdivDhaka5(subdivDhaka5,index) {
  newsubdivDhaka5 += "<option value=subdivsubdivDhaka5" + index +">" + subdivDhaka5 + "</option>";
}
// subdivDhaka6
const subdivDhaka6 =["থানা নিবাচন করুন ","বাসাইল", "ভুয়াপুর", "দেলদুয়ার", "ঘাটাইল", "গোপালপুর", "মধুপুর", "মির্জাপুর", "নাগরপুর", "সখিপুর", "টাঙ্গাইল সদর", "কালিহাতী", "ধনবাড়ী"];
let newsubdivDhaka6 =[];
subdivDhaka6.forEach(myfncrtion_subdivDhaka6);
function myfncrtion_subdivDhaka6(subdivDhaka6,index) {
  newsubdivDhaka6 += "<option value=subdivsubdivDhaka6" + index +">" + subdivDhaka6 + "</option>";
}
// subdivDhaka7
const subdivDhaka7 =["থানা নিবাচন করুন ","ইটনা", "কটিয়াদী", "ভৈরব", "তাড়াইল", "হোসেনপুর", "পাকুন্দিয়া", "কুলিয়ারচর", "কিশোরগঞ্জ সদর", "করিমগঞ্জ", "বাজিতপুর", "অষ্টগ্রাম", "মিঠামইন", "নিকলী",];
let newsubdivDhaka7 =[];
subdivDhaka7.forEach(myfncrtion_subdivDhaka7);
function myfncrtion_subdivDhaka7(subdivDhaka7,index) {
  newsubdivDhaka7 += "<option value=subdivsubdivDhaka7" + index +">" + subdivDhaka7 + "</option>";
}
// subdivDhaka8
const subdivDhaka8 =["থানা নিবাচন করুন ","হরিরামপুর", "সাটুরিয়া", "মানিকগঞ্জ সদর", "ঘিওর", "শিবালয়", "দৌলতপুর", "সিংগাইর"];
let newsubdivDhaka8 =[];
subdivDhaka8.forEach(myfncrtion_subdivDhaka8);
function myfncrtion_subdivDhaka8(subdivDhaka8,index) {
  newsubdivDhaka8 += "<option value=subdivsubdivDhaka8" + index +">" + subdivDhaka8 + "</option>";
}
// subdivDhaka9
const subdivDhaka9 =["থানা নিবাচন করুন ",];
let newsubdivDhaka9 =[];
subdivDhaka9.forEach(myfncrtion_subdivDhaka9);
function myfncrtion_subdivDhaka9(subdivDhaka9,index) {
  newsubdivDhaka9 += "<option value=subdivsubdivDhaka9" + index +">" + subdivDhaka9 + "</option>";
}
// subdivDhaka10
const subdivDhaka10 =["থানা নিবাচন করুন ",];
let newsubdivDhaka10 =[];
subdivDhaka10.forEach(myfncrtion_subdivDhaka10);
function myfncrtion_subdivDhaka10(subdivDhaka10,index) {
  newsubdivDhaka10 += "<option value=subdivsubdivDhaka10" + index +">" + subdivDhaka10 + "</option>";
}
// subdivDhaka11
const subdivDhaka11 =["থানা নিবাচন করুন ",];
let newsubdivDhaka11 =[];
subdivDhaka11.forEach(myfncrtion_subdivDhaka11);
function myfncrtion_subdivDhaka11(subdivDhaka11,index) {
  newsubdivDhaka11 += "<option value=subdivsubdivDhaka11" + index +">" + subdivDhaka11 + "</option>";
}
// subdivDhaka12
const subdivDhaka12 =["থানা নিবাচন করুন ",];
let newsubdivDhaka12 =[];
subdivDhaka12.forEach(myfncrtion_subdivDhaka12);
function myfncrtion_subdivDhaka12(subdivDhaka12,index) {
  newsubdivDhaka12 += "<option value=subdivsubdivDhaka12" + index +">" + subdivDhaka12 + "</option>";
}
// subdivDhaka13
const subdivDhaka13 =["থানা নিবাচন করুন ",];
let newsubdivDhaka13 =[];
subdivDhaka13.forEach(myfncrtion_subdivDhaka13);
function myfncrtion_subdivDhaka13(subdivDhaka13,index) {
  newsubdivDhaka13 += "<option value=subdivsubdivDhaka13" + index +">" + subdivDhaka13 + "</option>";
}
console.log(newsubdivDhaka2)
document.getElementById("test5").innerHTML=newsubdivDhaka6;
// <!-- ========== End Section dhaka jaila ========== -->
// <!-- ========== Start Section foreach dhaka jaila ========== -->
// <!-- ========== End Section foreach dhaka jaila ========== -->
// <!-- ========== onchange divi End Section ========== -->
function subdivi(){
  var divival =document.getElementById("divi").value;
  var thanaval =document.getElementById("subdivi").value;
document.getElementById("test3").innerHTML=thanaval;
console.log(thanaval);
 if(divival=="divi1" && thanaval == "subdivDhaka1"){
  thanaOutPut=newsubdivDhaka1;
 }
 else if(divival=="divi1" && thanaval == "subdivDhaka2"){
  thanaOutPut=newsubdivDhaka2;
 }
 else if(divival=="divi1" && thanaval == "subdivDhaka3"){
  thanaOutPut=newsubdivDhaka3;
 }
 else if(divival=="divi1" && thanaval == "subdivDhaka4"){
  thanaOutPut=newsubdivDhaka4;
 }
 else if(divival=="divi1" && thanaval == "subdivDhaka5"){
  thanaOutPut=newsubdivDhaka5;
 }
 else if( divival=="divi1" && thanaval == "subdivDhaka6"){
  thanaOutPut=newsubdivDhaka6;
 }
 else if( divival=="divi1" && thanaval == "subdivDhaka7"){
  thanaOutPut=newsubdivDhaka7;
 }
 else if( divival=="divi1" && thanaval == "subdivDhaka8"){
  thanaOutPut=newsubdivDhaka8;
 }
 else if( divival=="divi1" && thanaval == "subdivDhaka9"){
  thanaOutPut=newsubdivDhaka9;
 }
 else if( divival=="divi1" && thanaval == "subdivDhaka10"){
  thanaOutPut=newsubdivDhaka10;
 }
 else if( divival=="divi1" && thanaval == "subdivDhaka11"){
  thanaOutPut=newsubdivDhaka11;
 }
 else if( divival=="divi1" && thanaval == "subdivDhaka12"){
  thanaOutPut=newsubdivDhaka12;
 }
 else if( divival=="divi1" && thanaval == "subdivDhaka13"){
  thanaOutPut=newsubdivDhaka13;
 }
 else{thanaOutPut="প্রখমে জেলা নিবাচন করুন"}
//  thanaOutPut=newsubdivDhaka1;
 document.getElementById("thanaList").innerHTML = thanaOutPut;
}
// document.getElementById("sort").innerHTML=c;
// <!-- ========== Start Section dhaka jaila ========== -->
// <!-- ========== End Section dhaka jaila ========== -->
// <!-- ========== Start Section foreach dhaka jaila ========== -->
// <!-- ========== End Section foreach dhaka jaila ========== -->