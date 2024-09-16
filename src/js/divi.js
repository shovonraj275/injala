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
        Optionfunc: "union()",

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
var tanaNatore =[
    {
        ban : " থানা নিবাচন করুন",
        eng : "Select a Thana",
        val : "Selectadistrict",
    },
    {
        ban : "নাটোর সদর",
        eng : "Natore Sadar",
        val : "Natoresadar",
    },
    {
        ban : "সিংড়া",
        eng : "Singra",
        val : "Singra",
    },
    {
        ban : "বড়াইগ্রাম",
        eng : "Baraigram",
        val : "Baraigram",
    },
    {
        ban : "বাগাতিপাড়া",
        eng : "Bagatipara",
        val : "Bagatipara",
    },
    {
        ban : "লালপুর",
        eng : "Lalpur",
        val : "Lalpur",
    },
    {
        ban : "গুরুদাসপুর",
        eng : "Gurudaspur",
        val : "Gurudaspur",
    },
    {
        ban : "নলডাঙ্গা",
        eng : "Naldanga",
        val : "Naldanga",
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
var tanauinonworBagmara=[
    {
        ban : "ওয়ার্ড ও ইউনিয়ন নিবাচন করুন",
        eng : "Select a Ward and Union",
        val : "SelectaWardandUnion",
    },
    {
        ban : "তাহেরপুর পৌরসভা",
        eng : "Bagha Municipality",
        val : "BaghaMunicipality",
    },
    {
        ban : "ভবানীগঞ্জ পৌরসভা",
        eng : "Bhabaniganj Municipality",
        val : "BhabaniganjMunicipality",
    },
    {
        ban : "গোবিন্দপাড়া",
        eng : "Gobindopara",
        val : "Gobindopara",
    },
    {
        ban : "নরদাস",
        eng : "Nordas",
        val : "Nordas",
    },
    {
        ban : "দ্বীপপুর",
        eng : "Dippur",
        val : "Dippur",
    },
    {
        ban : "বড়বিহানলী",
        eng : "Borobihanoli",
        val : "Borobihanoli",
    },
    {
        ban : "আউচপাড়া",
        eng : "Auchpara,",
        val : "Auchpara,",
    },
    {
        ban : "শ্রীপুর",
        eng : "Sreepur",
        val : "Sreepur",
    },
    {
        ban : "বাসুপাড়া",
        eng : "Basupara",
        val : "Basupara",
    },
    {
        ban : "কাচাড়ী কোয়লিপাড়া",
        eng : "Kacharikoalipara",
        val : "Kacharikoalipara",
    },
    {
        ban : "শুভডাঙ্গা",
        eng : "Suvodanga",
        val : "Suvodanga",
    },
    {
        ban : "শুভডাঙ্গা",
        eng : "Suvodanga",
        val : "Suvodanga",
    },
    {
        ban : "মাড়িয়া",
        eng : "Maria",
        val : "Maria",
    },
    {
        ban : "গণিপুর",
        eng : "Ganipur",
        val : "Ganipur",
    },
    {
        ban : "ঝিকড়া",
        eng : "Zhikara",
        val : "Zhikara",
    },
    {
        ban : "গোয়ালকান্দি",
        eng : "Gualkandi",
        val : "Gualkandi",
    },
    {
        ban : "হামিরকুৎসা",
        eng : "Hamirkutsa",
        val : "Hamirkutsa",
    },
    {
        ban : "যোগিপাড়া",
        eng : "Jogipara",
        val : "Jogipara",
    },
    {
        ban : "সোনাডাঙ্গা",
        eng : "Sonadanga",
        val : "Sonadanga",
    },
]
var tanauinonworBagha =[
    {
        ban : "ওয়ার্ড ও ইউনিয়ন নিবাচন করুন",
        eng : "Select a Ward and Union",
        val : "SelectaWardandUnion",
    },
    {
        ban : "পুঠিয়া পৌরসভা",
        eng : "Bagha Municipality",
        val : "BaghaMunicipality",
    },
    {
        ban : "আড়ানী পৌরসভা",
        eng : "Arani Municipality",
        val : "AraniMunicipality",
    },
    {
        ban : "বাজুবাঘা",
        eng : "Bajubagha",
        val : "Bajubagha",
    },
    {
        ban : "গড়গড়ি",
        eng : "Gorgori",
        val : "Gorgori",
    },
    {
        ban : "পাকুড়িয়া",
        eng : "Pakuria",
        val : "Pakuria",
    },
    {
        ban : "মনিগ্রাম",
        eng : "Monigram",
        val : "Monigram",
    },
    {
        ban : "বাউসা",
        eng : "Bausa",
        val : "Bausa",
    },
]
var tanauinonworBaraigram =[
    {
        ban : "ওয়ার্ড ও ইউনিয়ন নিবাচন করুন",
        eng : "Select a Ward and Union",
        val : "SelectaWardandUnion",
    },
    {
        ban : " পৌরসভা",
        eng : " Municipality",
        val : "Municipality",
    },
    {
        ban : "বনপাড়া পৌরসভা",
        eng : "Banpara Municipality",
        val : "BanparaMunicipality",
    },
    {
        ban : "",
        eng : "",
        val : "",
    },
]
var tanauinonworCharghat =[
    {
        ban : "ওয়ার্ড ও ইউনিয়ন নিবাচন করুন",
        eng : "Select a Ward and Union",
        val : "SelectaWardandUnion",
    },
    {
        ban : "চারঘাট  পৌরসভা",
        eng : "Charghat Municipality",
        val : "CharghatMunicipality",
    },
    {
        ban : "ইউসুফপুর",
        eng : "Yousufpur",
        val : "Yousufpur",
    },
    {
        ban : "শলুয়া",
        eng : "Solua",
        val : "Solua",
    },
    {
        ban : "সরদহ",
        eng : "Sardah",
        val : "Sardah",
    },
    {
        ban : "নিমপাড়া",
        eng : "Nimpara",
        val : "Nimpara",
    },
    {
        ban : "ভায়ালক্ষ্মীপুর",
        eng : "Vialuxmipur",
        val : "Vialuxmipur",
    },
]
var tanauinonworDurgapur =[
    {
        ban : "ওয়ার্ড ও ইউনিয়ন নিবাচন করুন",
        eng : "Select a Ward and Union",
        val : "SelectaWardandUnion",
    },
    {
        ban : " দুর্গাপুর পৌরসভা",
        eng : "Durgapur Municipality",
        val : "DurgapurMunicipality",
    },
    {
        ban : "নওপাড়া",
        eng : "Naopara",
        val : "Naopara",
    },
    {
        ban : "কিসমতগণকৈড়",
        eng : "Kismatgankoir",
        val : "Kismatgankoir",
    },
    {
        ban : "পানানগর",
        eng : "Pananagar",
        val : "Pananagar",
    },
    {
        ban : "দেলুয়াবাড়ী",
        eng : "Deluabari",
        val : "Deluabari",
    },
    {
        ban : "ঝালুকা",
        eng : "Jhaluka",
        val : "Jhaluka",
    },
    {
        ban : "মাড়িয়া",
        eng : "Maria",
        val : "Maria",
    },
    {
        ban : "জয়নগর",
        eng : "Joynogor",
        val : "Joynogor",
    },
]
var tanauinonworGodagari =[
    {
        ban : "ওয়ার্ড ও ইউনিয়ন নিবাচন করুন",
        eng : "Select a Ward and Union",
        val : "SelectaWardandUnion",
    },
    {
        ban : "গোদাগাড়ী পৌরসভা",
        eng : "Godagari Municipality",
        val : "GodagariMunicipality",
    },
    {
        ban : "কাঁকনহাট পৌরসভা",
        eng : "Kakonhat Municipality",
        val : "KakonhatMunicipality",
    },
    {
        ban : "মোহনপুর",
        eng : "Mohonpur",
        val : "Mohonpur",
    },
    {
        ban : "পাকড়ী",
        eng : "Pakri",
        val : "Pakri",
    },
    {
        ban : "রিশিকুল",
        eng : "Risikul",
        val : "Risikul",
    },
    {
        ban : "গোগ্রাম",
        eng : "Gogram",
        val : "Gogram",
    },
    {
        ban : "মাটিকাটা",
        eng : "Matikata",
        val : "Matikata",
    },
    {
        ban : "দেওপাড়া",
        eng : "Dewpara",
        val : "Dewpara",
    },
    {
        ban : "বাসুদেবপুর",
        eng : "Basudebpur",
        val : "Basudebpur",
    },
    {
        ban : "আষাড়িয়াদহ",
        eng : "Asariadaha",
        val : "Asariadaha",
    },
]  
var tanauinonworNatore =[
    {
        ban : "ওয়ার্ড ও ইউনিয়ন নিবাচন করুন",
        eng : "Select a Ward and Union",
        val : "SelectaWardandUnion",
    },
    {
        ban : "নাটোর পৌরসভা",
        eng : "Natore Municipality",
        val : "NatoreMunicipality",
    },
    {
        ban : "ব্রহ্মপুর",
        eng : "Brahmapur",
        val : "Brahmapur",
    },
    {
        ban : "মাধনগর",
        eng : "Madhnagar",
        val : "Madhnagar",
    },
    {
        ban : "খাজুরা",
        eng : "Khajura",
        val : "Khajura",
    },
    {
        ban : "পিপরুল",
        eng : "Piprul",
        val : "Piprul",
    },
    {
        ban : "বিপ্রবেলঘড়িয়া",
        eng : "Biprobelghoria",
        val : "Biprobelghoria",
    },
    {
        ban : "ছাতনী",
        eng : "Chhatni",
        val : "Chhatni",
    },
    {
        ban : "তেবাড়িয়া",
        eng : "Tebaria",
        val : "Tebaria",
    },
    {
        ban : "দিঘাপতিয়া",
        eng : "Dighapatia",
        val : "Dighapatia",
    },
    {
        ban : "লক্ষীপুর খোলাবাড়িয়া",
        eng : "Luxmipurkholabaria",
        val : "Luxmipurkholabaria",
    },
    {
        ban : "বড়হরিশপুর",
        eng : "Barahorispur",
        val : "Barahorispur",
    },
    {
        ban : "কাফুরিয়া",
        eng : "Kaphuria",
        val : "Kaphuria",
    },
    {
        ban : "হালসা",
        eng : "Halsa",
        val : "Halsa",
    },
]  
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
var tanauinonworMohonpur =[
    {
        ban : "ওয়ার্ড ও ইউনিয়ন নিবাচন করুন",
        eng : "Select a Ward and Union",
        val : "SelectaWardandUnion",
    },
    {
        ban : "কেশরহাট পৌরসভা",
        eng : "keshorhat Municipality",
        val : "keshorhatMunicipality",
    },
    {
        ban : "ধুরইল",
        eng : "Dhuroil",
        val : "Dhuroil",
    },
    {
        ban : "ঘষিগ্রাম",
        eng : "Ghasigram",
        val : "Ghasigram",
    },
    {
        ban : "রায়ঘাটি",
        eng : "Raighati",
        val : "Raighati",
    },
    {
        ban : "মৌগাছি",
        eng : "Mougachi",
        val : "Mougachi",
    },
    {
        ban : "বাকশিমইল",
        eng : "Baksimoil",
        val : "Baksimoil",
    },
    {
        ban : "জাহানাবাদ",
        eng : "Jahanabad",
        val : "Jahanabad",
    },
]
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
var tanauinonworPuthia =[
    {
        ban : "ওয়ার্ড ও ইউনিয়ন নিবাচন করুন",
        eng : "Select a Ward and Union",
        val : "SelectaWardandUnion",
    },
    {
        ban : "পুঠিয়া পৌরসভা",
        eng : "Puthia Municipality",
        val : "PuthiaaMunicipality",
    },
    {
        ban : "বেলপুকুরিয়া",
        eng : "Belpukuria",
        val : "Belpukuria",
    },
    {
        ban : "বানেশ্বর",
        eng : "Baneswar",
        val : "Baneswar",
    },
    {
        ban : "ভালুকগাছি",
        eng : "Valukgachi",
        val : "Valukgachi",
    },
    {
        ban : "শিলমাড়িয়া",
        eng : "Shilmaria",
        val : "Shilmaria",
    },
    {
        ban : "জিউপাড়া",
        eng : "Jewpara",
        val : "Jewpara",
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
var tanauinonworSingra =[
    {
        ban : "ওয়ার্ড ও ইউনিয়ন নিবাচন করুন",
        eng : "Select a Ward and Union",
        val : "SelectaWardandUnion",
    },
    {
        ban : "সিংড়া পৌরসভা",
        eng : "Singra Municipality",
        val : "SingraMunicipality",
    },
    {
        ban : "শুকাশ",
        eng : "Sukash",
        val : "Sukash",
    },
    {
        ban : "ডাহিয়া",
        eng : "Dahia",
        val : "Dahia",
    },
    {
        ban : "ইটালী",
        eng : "Italy",
        val : "Italy",
    },
    {
        ban : "কলম",
        eng : "Kalam",
        val : "Kalam",
    },
    {
        ban : "চামারী",
        eng : "Chamari",
        val : "Chamari",
    },
    {
        ban : "হাতিয়ানদহ",
        eng : "Hatiandaha",
        val : "Hatiandaha",
    },
    {
        ban : "লালোর",
        eng : "Lalore",
        val : "Lalore",
    },
    {
        ban : "শেরকোল",
        eng : "Sherkole",
        val : "Sherkole",
    },
    {
        ban : "তাজপুর",
        eng : "Tajpur",
        val : "Tajpur",
    },
    {
        ban : "চৌগ্রাম",
        eng : "Chaugram",
        val : "Chaugram",
    },
    {
        ban : "ছাতারদিঘী",
        eng : "Chhatardighi",
        val : "Chhatardighi",
    },
    {
        ban : "রামান্দখাজুরা",
        eng : "Ramanandakhajura",
        val : "Ramanandakhajura",
    },
]
var tanauinonworTanore =[
    {
        ban : "ওয়ার্ড ও ইউনিয়ন নিবাচন করুন",
        eng : "Select a Ward and Union",
        val : "SelectaWardandUnion",
    },
    {
        ban : "তানোর পৌরসভা",
        eng : "Tanore Municipality",
        val : "TanoreMunicipality",
    },
    {
        ban : "মুন্ডুমালা পৌরসভা",
        eng : "Mundumala Municipality",
        val : "MundumalaMunicipality",
    },
    {
        ban : "কলমা",
        eng : "Kalma",
        val : "Kalma",
    },
    {
        ban : "বাধাইড়",
        eng : "Badhair",
        val : "Badhair",
    },
    {
        ban : "পাঁচন্দর",
        eng : "Panchandar",
        val : "Panchandar",
    },
    {
        ban : "তালন্দ",
        eng : "Talondo",
        val : "Talondo",
    },
    {
        ban : "কামারগাঁ",
        eng : "Kamargaon",
        val : "Kamargaon",
    },
    {
        ban : "চান্দুড়িয়া",
        eng : "Chanduria",
        val : "Chanduria",
    },
]

