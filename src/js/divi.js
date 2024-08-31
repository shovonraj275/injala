var html= [
    {
        lable_ban: "বিভাগ :",
        lable_eng: "Division :",
        Option_ban: "একটি বিভাগ নিবাচন করুন",
        Option_eng: "Select a division",
        Optionid: "Division",
        Optionfunc: "Division()",

    },
    {
        lable_ban: "জেলা : ",
        lable_eng: "District : ",
        Option_ban: "প্রখমে বিভাগ নিবাচন করুন",
        Option_eng: "Select a division First",
        Optionid: "District",
        Optionfunc: "District()",
    },
    {
        lable_ban: "থানা : ",
        lable_eng: "Thana : ",
        Option_ban: "প্রখমে জেলা নিবাচন করুন",
        Option_eng: "Select a district First",
        Optionid: "thanaList",
        Optionfunc: "thana()",

    },
    {
        lable_ban: "ওয়ার্ড ও ইউনিয়ন : ",
        lable_eng: "Ward and Union : ",
        Option_ban: "প্রখমে থানা নিবাচন করুন",
        Option_eng: "Select a Thana First",
        Optionid: "union_word_list",
        Optionfunc: "",

    },
] 


var division =[
    {
    ban : "একটি বিভাগ নিবাচন করুন ",
    eng : "Select a division",
    val : "Selectadivision",
  },
    {
    ban : "ঢাকা",
    eng : "Dhaka",
    val : "Dhaka",
  },
    {
    ban : "চট্টগ্রাম",
    eng : "Chattogram",
    val : "Chattogram",
  },
    {
    ban : "রাজশাহী",
    eng : "Rajshahi",
    val : "Rajshahi",
  },
    {
    ban : "খুলনা",
    eng : "Khulna",
    val : "Khulna",
  },
    {
    ban : "বরিশাল",
    eng : "Barishal",
    val : "Barishal",
  },
    {
    ban : "রংপুর",
    eng : "Rangpur",
    val : "Rangpur",
  },
    {
    ban : "ময়মনসিংহ",
    eng : "Mymensingh",
    val : "Mymensingh",
  },
    {
    ban : "সিলেট",
    eng : "Sylhet",
    val : "Sylhet",
  },
]
// <!-- ========== Start Section Dhaka ========== -->
var subDiveDhaka=[
    {
        ban : "জেলা নিবাচন করুন",
        eng : "Select a district",
        val : "Selectadistrict",
    },
    {
        ban : "ঢাকা",
        eng : "Dhaka",
        val : "Dhaka",
    },
    {
        ban : "নারায়ণগঞ্জ",
        eng : "Narayanganj",
        val : "Narayanganj",
    },
    {
        ban : "গাজীপুর",
        eng : "Gazipur",
        val : "Gazipur",
    },
    {
        ban : "নরসিংদী",
        eng : "Narsingdi",
        val : "Narsingdi",
    },
    {
        ban : "শরীয়তপুর",
        eng : "Shariatpur",
        val : "Shariatpur",
    },
    {
        ban : "টাঙ্গাইল",
        eng : "Tangail",
        val : "Tangail",
    },
    {
        ban : "কিশোরগঞ্জ",
        eng : "Kishoreganj",
        val : "Kishoreganj",
    },
    {
        ban : "মানিকগঞ্জ",
        eng : "Manikganj",
        val : "Manikganj",
    },
    {
        ban : "মুন্সিগঞ্জ",
        eng : "Munshiganj",
        val : "Munshiganj",
    },
    {
        ban : "রাজবাড়ী",
        eng : "Rajbari",
        val : "Rajbari",
    },
    {
        ban : "মাদারীপুর",
        eng : "Madaripur",
        val : "Madaripur",
    },
    {
        ban : "গোপালগঞ্জ",
        eng : "Gopalganj",
        val : "Gopalganj",
    },
    {
        ban : "ফরিদপুর",
        eng : "Faridpur",
        val : "Faridpur",
    },
]


// <!-- ========== End Section Dhaka ========== -->

// <!-- ========== Start Section Chattogram ========== -->
var subDiveChittagong=[
    {
        ban : "জেলা নিবাচন করুন",
        eng : "Select a district",
        val : "Selectadistrict",
    },
    {
        ban : "চট্টগ্রাম",
        eng : "Chattogram",
        val : "Chattogram",
    },
    {
        ban : "কক্সবাজার",
        eng : "Coxsbazar",
        val : "Coxsbazar",
    },
    {
        ban : "রাঙ্গামাটি",
        eng : "Rangamati",
        val : "Rangamati",
    },
    {
        ban : "বান্দরবান",
        eng : "Bandarban",
        val : "Bandarban",
    },
    {
        ban : "খাগড়াছড়ি",
        eng : "Khagrachhari",
        val : "Khagrachhari",
    },
    {
        ban : "কুমিল্লা",
        eng : "Cumilla",
        val : "Cumilla",
    },
    {
        ban : "ফেনী",
        eng : "Feni",
        val : "Feni",
    },
    {
        ban : "ব্রাহ্মণবাড়িয়া",
        eng : "Brahmanbaria",
        val : "Brahmanbaria",
    },
    {
        ban : "নোয়াখালী",
        eng : "Noakhali",
        val : "Noakhali",
    },
    {
        ban : "চাঁদপুর",
        eng : "Chandpur",
        val : "Chandpur",
    },
    {
        ban : "লক্ষ্মীপুর",
        eng : "Lakshmipur",
        val : "Lakshmipur",
    },
]

// <!-- ========== End Section  Chattogram========== -->
// <!-- ========== Start Section ========== -->
var subDiveRajshahi=[
    {
        ban : "জেলা নিবাচন করুন",
        eng : "Select a district",
        val : "Selectadistrict",
    },
    {
        ban : "রাজশাহী",
        eng : "Rajshahi",
        val : "Rajshahi",
    },
    {
        ban : "নাটোর",
        eng : "Natore",
        val : "Natore",
    },
    {
        ban : "পাবনা",
        eng : "Pabna",
        val : "Pabna",
    },
    {
        ban : "নওগাঁ",
        eng : "Naogaon",
        val : "Naogaon",
    },
    {
        ban : "চাঁপাইনবাবগঞ্জ",
        eng : "Chapainawabganj",
        val : "Chapainawabganj",
    },
    {
        ban : "বগুড়া",
        eng : "Bogura",
        val : "Bogura",
    },
    {
        ban : "সিরাজগঞ্জ",
        eng : "Sirajganj",
        val : "Sirajganj",
    },
    {
        ban : "জয়পুরহাট",
        eng : "Joypurhat",
        val : "Joypurhat",
    },
    
   
]
// <!-- ========== End Section ========== -->
// <!-- ========== Start Section Khulna========== -->
var subDiveKhulna=[
    {
        ban : "জেলা নিবাচন করুন",
        eng : "Select a district",
        val : "Selectadistrict",
    },
    {
        ban : "খুলনা",
        eng : "Khulna",
        val : "Khulna",
    },
    {
        ban : "সাতক্ষীরা",
        eng : "Satkhira",
        val : "Satkhira",
    },
    {
        ban : "যশোর",
        eng : "Jashore",
        val : "Jashore",
    },
    {
        ban : "ঝিনাইদহ",
        eng : "Jhenaidah",
        val : "Jhenaidah",
    },
    {
        ban : "কুষ্টিয়া",
        eng : "Kushtia",
        val : "Kushtia",
    },
    {
        ban : "মেহেরপুর",
        eng : "Meherpur",
        val : "Meherpur",
    },
    {
        ban : "নড়াইল",
        eng : "Narail",
        val : "Narail",
    },
    {
        ban : "বাগেরহাট",
        eng : "Bagerhat",
        val : "Bagerhat",
    },
    {
        ban : "চুয়াডাঙ্গা",
        eng : "Chuadanga",
        val : "Chuadanga",
    },
    {
        ban : "মাগুরা",
        eng : "Magura",
        val : "Magura",
    },
]

// <!-- ========== End Section Khulna========== -->
// <!-- ========== Start Section Barishal========== -->
var subDiveBarisal=[
    {
        ban : "জেলা নিবাচন করুন",
        eng : "Select a district",
        val : "Selectadistrict",
    },
    {
        ban : "বরিশাল",
        eng : "Barishal",
        val : "Barishal",
    },
    {
        ban : "ভোলা",
        eng : "Bhola",
        val : "Bhola",
    },
    {
        ban : "বরগুনা",
        eng : "Barguna",
        val : "Barguna",
    },
    {
        ban : "ঝালকাঠি",
        eng : "Jhalakathi",
        val : "Jhalakathi",
    },
    {
        ban : "পটুয়াখালী",
        eng : "Patuakhali",
        val : "Patuakhali",
    },
    {
        ban : "পিরোজপুর",
        eng : "Pirojpur",
        val : "Pirojpur",
    },
]  
// <!-- ========== End Section Barishal========== -->
// <!-- ========== Start Section Rangpur ========== -->
var subDiveRangpur=[
    {
        ban : "জেলা নিবাচন করুন",
        eng : "Select a district",
        val : "Selectadistrict",
    },
    {
        ban : "রংপুর",
        eng : "Rangpur",
        val : "Rangpur",
    },
    {
        ban : "দিনাজপুর",
        eng : "Dinajpur",
        val : "Dinajpur",
    },
    {
        ban : "নীলফামারী",
        eng : "Nilphamari",
        val : "Nilphamari",
    },
    {
        ban : "লালমনিরহাট",
        eng : "Lalmonirhat",
        val : "Lalmonirhat",
    },
    {
        ban : "ঠাকুরগাঁও",
        eng : "Thakurgaon",
        val : "Thakurgaon",
    },
    {
        ban : "পঞ্চগড়",
        eng : "Panchagarh",
        val : "Panchagarh",
    },
    {
        ban : "গাইবান্ধা",
        eng : "Gaibandha",
        val : "Gaibandha",
    },
    {
        ban : "কুড়িগ্রাম",
        eng : "Kurigram",
        val : "Kurigram",
    },
]

// <!-- ========== End Section Rangpur ========== -->
// <!-- ========== Start Section ========== -->
var subDivieMymensingh=[
    {
        ban : "জেলা নিবাচন করুন",
        eng : "Select a district",
        val : "Selectadistrict",
    },
    {
        ban : "ময়মনসিংহ",
        eng : "Mymensingh",
        val : "Mymensingh",
    },
    {
        ban : "জামালপুর",
        eng : "Jamalpur",
        val : "Jamalpur",
    },
    {
        ban : "শেরপুর",
        eng : "Sherpur",
        val : "Sherpur",
    },
    {
        ban : "নেত্রকোণা",
        eng : "Netrokona",
        val : "Netrokona",
    },
]

// <!-- ========== End Section ========== -->
// <!-- ========== Start Section ========== -->
var subDivieSylhet=[
    {
        ban : "জেলা নিবাচন করুন",
        eng : "Select a district",
        val : "Selectadistrict",
    },
    {
        ban : "সিলেট",
        eng : "Sylhet",
        val : "Sylhet",
    },
    {
        ban : "হবিগঞ্জ",
        eng : "Habiganj",
        val : "Habiganj",
    },
    {
        ban : "সুনামগঞ্জ",
        eng : "Sunamganj",
        val : "Sunamganj",
    },
    {
        ban : "মৌলভীবাজার",
        eng : "Moulvibazar",
        val : "Moulvibazar",
    },
]
// <!-- ========== End Section ========== -->
// <!-- ========== Start Section Thana========== -->

// <!-- ========== Start Section ========== -->

var tana =[
    {
        ban : " থানা নিবাচন করুন",
        eng : "Select a Thana",
        val : "Selectadistrict",
    },
    {
        ban : "",
        eng : "",
        val : "",
    },
]

// <!-- ========== End Section ========== -->


// <!-- ========== Start Section Rr ========== -->

var tanarajshahi=[
    {
        ban : " থানা নিবাচন করুন",
        eng : "Select a Thana",
        val : "Selectadistrict",
    },
    {
        ban : "বোয়ালিয়া",
        eng : "Boalia",
        val : "Boalia",
    },
    {
        ban : "রাজপাড়া",
        eng : "Rajpara",
        val : "Rajpara",
    },
    {
        ban : "মতিহার",
        eng : "Motihar",
        val : "Motihar",
    },
    {
        ban : "শাহমখদুম",
        eng : "Shahmakhdum",
        val : "Shahmakhdum",
    },
    {
        ban : "পবা",
        eng : "Paba",
        val : "Paba ",
    },
    {
        ban : "দুর্গাপুর",
        eng : "Durgapur",
        val : "Durgapur",
    },
    {
        ban : "মোহনপুর",
        eng : "Mohonpur",
        val : "Mohonpur",
    },
    {
        ban : "চারঘাট",
        eng : "Charghat",
        val : "Charghat",
    },
    {
        ban : "পুঠিয়া",
        eng : "Puthia",
        val : "Puthia",
    },
    {
        ban : "বাঘা",
        eng : "Bagha",
        val : "Bagha",
    },
    {
        ban : "গোদাগাড়ী",
        eng : "Godagari",
        val : "Godagari",
    },
    {
        ban : "তানোর",
        eng : "Tanore",
        val : "Tanore",
    },
    {
        ban : "বাগমারা",
        eng : "Bagmara",
        val : "Bagmara",
    },
    
]

// <!-- ========== End Section Rr========== -->


// <!-- ========== End Section ========== -->
// <!-- ========== Start Section ========== -->
var tanauinonwordBoalia =[
    {
        ban : "ওয়ার্ড ও ইউনিয়ন নিবাচন করুন",
        eng : "Select a Ward and Union",
        val : "SelectaWardandUnion",
    },
    {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-০৮ ",
        eng : "Rajshahi City Corporation no-08",
        val : "RajshahiCityCorporation08",
    },
    {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-০৯ ",
        eng : "Rajshahi City Corporation no-09",
        val : "RajshahiCityCorporation09",
    },
    {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-১০ ",
        eng : "Rajshahi City Corporation no-10",
        val : "RajshahiCityCorporation10",
    },
    {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-১১ ",
        eng : "Rajshahi City Corporation no-11",
        val : "RajshahiCityCorporation11",
    },
    {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-১২ ",
        eng : "Rajshahi City Corporation no-12",
        val : "RajshahiCityCorporation12",
    },
    {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-১৩ ",
        eng : "Rajshahi City Corporation no-13",
        val : "RajshahiCityCorporation13",
    },
    {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-১৪ ",
        eng : "Rajshahi City Corporation no-14",
        val : "RajshahiCityCorporation14",
    },
    {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-১৫ ",
        eng : "Rajshahi City Corporation no-15",
        val : "RajshahiCityCorporation15",
    },
    {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-১৬ ",
        eng : "Rajshahi City Corporation no-16",
        val : "RajshahiCityCorporation16",
    },
    {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-১৮",
        eng : "Rajshahi City Corporation no-18",
        val : "RajshahiCityCorporation18",
    },
    {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-১৯ ",
        eng : "Rajshahi City Corporation no-19",
        val : "RajshahiCityCorporation19",
    },
    {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-20 ",
        eng : "Rajshahi City Corporation no-20",
        val : "RajshahiCityCorporation20",
    },
    {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-২১ ",
        eng : "Rajshahi City Corporation no-21",
        val : "RajshahiCityCorporation21",
    },
    {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-২২ ",
        eng : "Rajshahi City Corporation no-22",
        val : "RajshahiCityCorporation22",
    },
    {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-২৩ ",
        eng : "Rajshahi City Corporation no-23",
        val : "RajshahiCityCorporation23",
    },
    {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-২৪ ",
        eng : "Rajshahi City Corporation no-24",
        val : "RajshahiCityCorporation24",
    },
    {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-২৫ ",
        eng : "Rajshahi City Corporation no-25",
        val : "RajshahiCityCorporation25",
    },
    {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-২৬ ",
        eng : "Rajshahi City Corporation no-26",
        val : "RajshahiCityCorporation26",
    },
    {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-২৭ ",
        eng : "Rajshahi City Corporation no-27",
        val : "RajshahiCityCorporation27",
    },
    
]
// <!-- ========== Start Section ========== -->
var tanauinonworMotihar =[
    {
        ban : "ওয়ার্ড ও ইউনিয়ন নিবাচন করুন",
        eng : "Select a Ward and Union",
        val : "SelectaWardandUnion",
    },
   {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-২৮ ",
        eng : "Rajshahi City Corporation no-28",
        val : "RajshahiCityCorporation2",
    },
   {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-২৯ ",
        eng : "Rajshahi City Corporation no-29",
        val : "RajshahiCityCorporation2",
    },
   {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-৩০ ",
        eng : "Rajshahi City Corporation no-30",
        val : "RajshahiCityCorporation2",
    },
]
// <!-- ========== Start Section ========== -->
var tanauinonworPaba =[
    {
        ban : "ওয়ার্ড ও ইউনিয়ন নিবাচন করুন",
        eng : "Select a Ward and Union",
        val : "SelectaWardandUnion",
    },
    {
        ban : "নওহাটা পৌরসভা",
        eng : "Noahata Municipality",
        val : "NoahataMunicipality",
    },
    {
        ban : "কাটাখালী পৌরসভা",
        eng : "Katakhali Municipality",
        val : "KatakhaliMunicipality",
    },
    {
        ban : "০১ নং দর্শনপাড়া ইউনিয়ন",
        eng : "Darsanpara",
        val : "Darsanpara",
    },
    {
        ban : "০২ নং হুজুরী পাড়া ইউনিয়ন",
        eng : "Hujuripara",
        val : "Hujuripara",
    },
    {
        ban : "০৩ নং দামকুড়া ইউনিয়ন",
        eng : "Damkura",
        val : "Damkura",
    },
    {
        ban : "০৪ নং হরিপুর ইউনিয়ন",
        eng : "Horipur",
        val : "Horipur",
    },
    {
        ban : "০৫ নং হড়গ্রাম ইউনিয়ন",
        eng : "Horogram",
        val : "Horogram",
    },
    {
        ban : "০৬ নং হরিয়ান ইউনিয়ন",
        eng : "Harian",
        val : "Harian",
    },
    {
        ban : "০৭ নং বড়্গাছি ইউনিয়ন",
        eng : "Borgachi",
        val : "Borgachi",
    },
    {
        ban : "০৮ নং পারিলা ইউনিয়ন",
        eng : "Parila",
        val : "Parila",
    },
    
]
var tanauinonworRajpara =[
    {
        ban : "ওয়ার্ড ও ইউনিয়ন নিবাচন করুন",
        eng : "Select a Ward and Union",
        val : "SelectaWardandUnion",
    },
    {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-০১ ",
        eng : "Rajshahi City Corporation no-01",
        val : "RajshahiCityCorporation01",
    },
    {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-০২ ",
        eng : "Rajshahi City Corporation no-02",
        val : "RajshahiCityCorporation02",
    },
    {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-০১ ",
        eng : "Rajshahi City Corporation no-03",
        val : "RajshahiCityCorporation03",
    },
    {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-০৩ ",
        eng : "Rajshahi City Corporation no-03",
        val : "RajshahiCityCorporation03",
    },
    {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-০৪",
        eng : "Rajshahi City Corporation no-04",
        val : "RajshahiCityCorporation04",
    },
    {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-০৫",
        eng : "Rajshahi City Corporation no-05",
        val : "RajshahiCityCorporation05",
    },
    {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-০৬",
        eng : "Rajshahi City Corporation no-06",
        val : "RajshahiCityCorporation06",
    },
    {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-০৭",
        eng : "Rajshahi City Corporation no-07",
        val : "RajshahiCityCorporation07",
    },
    {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-১০",
        eng : "Rajshahi City Corporation no-10",
        val : "RajshahiCityCorporation10",
    },
    {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-১৪",
        eng : "Rajshahi City Corporation no-14",
        val : "RajshahiCityCorporation14",
    },
]
// 

var tanauinonworShahmakhdum =[
    {
        ban : "ওয়ার্ড ও ইউনিয়ন নিবাচন করুন",
        eng : "Select a Ward and Union",
        val : "SelectaWardandUnion",
    },
    {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-১৭",
        eng : "Rajshahi City Corporation no-17",
        val : "RajshahiCityCorporation17",
    },
    {
        ban : "রাজশাহী সিটি কর্পোরেশন ওয়ার্ড নং-১৮",
        eng : "Rajshahi City Corporation no-18",
        val : "RajshahiCityCorporation18",
    },
]

// <!-- ========== End Section ========== -->

// <!-- ========== End Section ========== -->
// <!-- ========== Start Section word anduion ========== -->

// <!-- ========== End Section word anduion ========== -->
