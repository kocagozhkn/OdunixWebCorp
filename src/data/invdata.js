let invoices = [
  /*{
    FATURA_NO: "İLE20201",
    FATURA_TARIHI: "1/8/20",
    FIRMA: "SID WILSON",
    GIDECEGI_ULKE: "İNGİLTERE",
    TRANSIT_TIC: "*",
    SBIF_NO: "1199",
    SBIF_TARIH: "1/9/20",
    NET: "3811.20",
    BRUT: "4949.60",
    DOVIZ: "USD",
    FATURA: "11,815.00",
    PARITE: "1.00",
    USD_DOVIZ: "11,815.00",

    NOTLAR: "*"
  },
  {
    FATURA_NO: "İLE20202",
    FATURA_TARIHI: "1/15/20",
    FIRMA: "KENZ GRUP",
    GIDECEGI_ULKE: "TÜRKİYE",
    TRANSIT_TIC: "*",
    SBIF_NO: "2658",
    SBIF_TARIH: "1/16/20",
    NET: "4522.56",
    BRUT: "7031.32",
    DOVIZ: "TRY",
    FATURA: " 154,924.08 ₺ ",
    PARITE: "5.88",
    USD_DOVIZ: "26,335.54",
    NOTLAR: "*"
  },
  {
    FATURA_NO: "İLE20203",
    FATURA_TARIHI: "1/17/20",
    FIRMA: "FULYA HANDEL",
    GIDECEGI_ULKE: "ALMANYA",
    TRANSIT_TIC: "*",
    SBIF_NO: "3100",
    SBIF_TARIH: "1/17/20",
    NET: "465.78",
    BRUT: "564.1",
    DOVIZ: "USD",
    FATURA: "630.00",
    PARITE: "1.00",
    USD_DOVIZ: "630.00",

    NOTLAR: "*"
  },
  {
    FATURA_NO: "İLE20204",
    FATURA_TARIHI: "1/21/20",
    FIRMA: "AL FADAL",
    GIDECEGI_ULKE: "LİBYA",
    TRANSIT_TIC: "*",
    SBIF_NO: "3652",
    SBIF_TARIH: "1/21/20",
    NET: "9438.72",
    BRUT: "13040.36",
    DOVIZ: "USD",
    FATURA: "30,510.00",
    PARITE: "1.00",
    USD_DOVIZ: "30,510.00",

    NOTLAR: "*"
  },
  {
    FATURA_NO: "İLE20205",
    FATURA_TARIHI: "1/30/20",
    FIRMA: "OPTPOSTACH LLC",
    GIDECEGI_ULKE: "UKRAYNA",
    TRANSIT_TIC: "*",
    SBIF_NO: "5930",
    SBIF_TARIH: "1/30/20",
    NET: "7837.24",
    BRUT: "9769.96",
    DOVIZ: "USD",
    FATURA: "20,765.60",
    PARITE: "1.00",
    USD_DOVIZ: "20,765.60",

    NOTLAR: "*"
  },
  {
    FATURA_NO: "İLE20206",
    FATURA_TARIHI: "1/30/20",
    FIRMA: "KENZ GRUP",
    GIDECEGI_ULKE: "TÜRKİYE",
    TRANSIT_TIC: "*",
    SBIF_NO: "6524",
    SBIF_TARIH: "2/3/20",
    NET: "10056.00",
    BRUT: "10600.70",
    DOVIZ: "TRY",
    FATURA: "110,616.00 ₺",
    PARITE: "5.94",
    USD_DOVIZ: "18,620.65",

    NOTLAR: "*"
  },
  {
    FATURA_NO: "İLE20207",
    FATURA_TARIHI: "1/31/20",
    FIRMA: "YD DIŞ TİCARET",
    GIDECEGI_ULKE: "TÜRKİYE",
    TRANSIT_TIC: "SIRBİSTAN",
    SBIF_NO: "6283",
    SBIF_TARIH: "2/3/20",
    NET: "14304.76",
    BRUT: "18661.49",
    DOVIZ: "USD",
    FATURA: "34,970.50",
    PARITE: "1.00",
    USD_DOVIZ: "34,970.50",
    NOTLAR: "*"
  },
  {
    FATURA_NO: "İLE20208",
    FATURA_TARIHI: "2/12/20",
    FIRMA: "DROP SHOP",
    GIDECEGI_ULKE: "SLOVENYA",
    TRANSIT_TIC: "*",
    SBIF_NO: "8620",
    SBIF_TARIH: "2/12/20",
    NET: "1920.00",
    BRUT: "2059.20",
    DOVIZ: "USD",
    FATURA: "4,193.60",
    PARITE: "1.00",
    USD_DOVIZ: "4,193.60",

    NOTLAR: "*"
  },
  {
    FATURA_NO: "İLE20209",
    FATURA_TARIHI: "2/12/20",
    FIRMA: "CONFITRADE LLC",
    GIDECEGI_ULKE: "RUSYA",
    TRANSIT_TIC: "*",
    SBIF_NO: "8754",
    SBIF_TARIH: "2/13/20",
    NET: "5895.00",
    BRUT: "7912.50",
    DOVIZ: "USD",
    FATURA: "18,185.25",
    PARITE: "1.00",
    USD_DOVIZ: "18,185.25",

    NOTLAR: "*"
  },
  {
    FATURA_NO: "İLE202010",
    FATURA_TARIHI: "2/19/20",
    FIRMA: "HANCOCK CASH",
    GIDECEGI_ULKE: "İNGİLTERE",
    TRANSIT_TIC: "*",
    SBIF_NO: "10188",
    SBIF_TARIH: "2/19/20",
    NET: "6120.00",
    BRUT: "7429.00",
    DOVIZ: "USD",
    FATURA: "17,782.00",
    PARITE: "1.00",
    USD_DOVIZ: "17,782.00",

    NOTLAR: "*"
  },
  {
    FATURA_NO: "İLE202011",
    FATURA_TARIHI: "2/24/20",
    FIRMA: "FULYA HANDEL",
    GIDECEGI_ULKE: "ALMANYA",
    TRANSIT_TIC: "*",
    SBIF_NO: "11253",
    SBIF_TARIH: "2/25/20",
    NET: "3369.60",
    BRUT: "4605.12",
    DOVIZ: "USD",
    FATURA: "8,208.00",
    PARITE: "1.00",
    USD_DOVIZ: "8,208.00",

    NOTLAR: "*"
  },
  {
    FATURA_NO: "İLE202012",
    FATURA_TARIHI: "3/2/20",
    FIRMA: "BLUE GIDA",
    GIDECEGI_ULKE: "TÜRKİYE",
    TRANSIT_TIC: "RUSYA",
    NET: "2379.60",
    BRUT: "3215.80",
    DOVIZ: "USD",
    FATURA: "7,305.00",
    PARITE: "1.00",
    USD_DOVIZ: "7,305.00",

    NOTLAR: "*"
  },
  {
    FATURA_NO: "İLE202014",
    FATURA_TARIHI: "3/24/20",
    FIRMA: "BIZLINE",
    GIDECEGI_ULKE: "YENI ZELANDA",
    TRANSIT_TIC: "*",
    NET: "7131.86",
    BRUT: "8351.17",
    DOVIZ: "USD",
    FATURA: "19,806.00",
    PARITE: "1.00",
    USD_DOVIZ: "19,806.00",
    NOTLAR: "*"
  }*/
];

let companies = [/*
  {
    ID: 1,
    COMPANY: "FULYA",
    ADDRESS: "DUISBURG GERMANY",
    COUNTRY: "GERMANY",
    CURRENCY: "USD",
    DEBIT: "0",
    CREDIT: "0"
  },
  {
    ID: 2,
    COMPANY: "NT AMMARI",
    ADDRESS: "KOSOVA",
    COUNTRY: "KOSOVA",
    CURRENCY: "EUR",
    DEBIT: "0",
    CREDIT: "0"
  },
  {
    ID: 3,
    COMPANY: "BRANDMASTERS",
    ADDRESS: "ROTTERDAM",
    COUNTRY: "HOLLAND",
    CURRENCY: "EUR",
    DEBIT: "0",
    CREDIT: "0"
  }*/
];
var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
		,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
		,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
		,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
		,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
		,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
		,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
		,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
		,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
		,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
		,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
		,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
		,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
		,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)"
		,"Yemen","Zambia","Zimbabwe"];
export  { invoices, companies,country_list };
