// <!-- ========== division Start Section ========== -->
const divi =["Barishal","Chattogram","Dhaka","Khulna","Rajshahi", "Rangpur", "Mymensingh", "Sylhet"];
let newDivi = [];
divi.forEach(myfncrtion_divi);
function myfncrtion_divi(divi) {
  newDivi += "<option value=" + divi +">" + divi + "</option>";
}
document.getElementById("divi").innerHTML = newDivi;

// document.getElementById("test").innerHTML=divi;
// <!-- ==========  End Section ========== -->
// <!-- ========== jala  let Start Section ========== -->
const subDiveBarisal =["Barisal","Bhola","Burguna","Jhalakathi","Patuakhali","Pirojpur"];
const subDiveChittagong =["Bandarban","Brahmanbaria","Chandpur","Chittagong","Chittagong", "Comilla","Cox's Bazar","Feni","Khagrachari","Lakshmipur","Noakhali","Rangamati"];
const subDiveDhaka =["Dhaka",];
// let  = subDiveBarisal.length;
// console.log(x)


// <!-- ========== jala  let End Section ========== -->
// <!-- ========== Start Section foreach ========== -->

// <!-- ========== End Section foreach ========== -->
let newsubDiveBarisal =[];
subDiveBarisal.forEach(myfncrtion_subDiveBarisa);
function myfncrtion_subDiveBarisa(Barisal) {
  newsubDiveBarisal += "<option value=" + Barisal +">" + Barisal + "</option>";
}
let newsubDiveChittagong =[];
subDiveChittagong.forEach(myfncrtion_subDiveChittagong);
function myfncrtion_subDiveChittagong(Chittagong) {
  newsubDiveChittagong += "<option value=" + Chittagong +">" + Chittagong + "</option>";
}
document.getElementById("test3").innerHTML =newsubDiveChittagong
// <!-- ========== onchange divi Start Section ========== -->
function divis(){
  var divival =document.getElementById("divi").value;
  console.log(divival);
  document.getElementById("test2").innerHTML =divival
}
// <!-- ========== onchange divi End Section ========== -->
