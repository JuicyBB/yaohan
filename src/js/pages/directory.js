var isCN = window.location.pathname.indexOf("/cn/") > -1;

var getStoreImageUrl = function(img) {
  if (!img) img = "noimage";
  return "/img/stores/" + img + ".jpg";
};

var DATA = {
  mapwidth: "960",
  mapheight: "650",
  groups: [
    {
      id: "food",
      title: "Food & Grocery",
      title_cn: "食品雑貨",
      color: "#fd7e14",
    },
    {
      id: "health",
      title: "Health & Beauty",
      title_cn: "健康保険",
      color: "#d63d54",
    },
    {
      id: "clothing",
      title: "Clothing",
      title_cn: "服装首飾",
      color: "#6f42c1",
    },
    {
      id: "arts",
      title: "Arts & Craft",
      title_cn: "手工藝品",
      color: "#007bff",
    },
    {
      id: "gifts",
      title: "Gifts & Hobby",
      title_cn: "禮物休閑",
      color: "#07887c",
    },
    {
      id: "specialty",
      title: "Specialty & Service",
      title_cn: "其它服務",
      color: "#28a745",
    },
    {
      id: "education",
      title: "Education",
      title_cn: "教育",
      color: "#17a2b8",
    },
  ],
  levels: [
    {
      id: "ground",
      title: "Ground Floor",
      title_cn: "商場一樓",
      map: "/img/maps/first-floor.svg",
      minimap: "/img/maps/first-floor.svg",
      locations: [
        {
          id: "1000",
          title: "Osaka Supermarket",
          type: "Supermarket",
          category: "food",
          phone: "604-276-8808",
          email: "customer.service@tntsupermarket.com",
          description: "Open daily 9:00am to 10:00pm",
          image: "1000",
          thumbnail: "1000",
          website: "https://www.tnt-supermarket.com",
          title_cn: "大阪超級市場",
          zoom: 1,
        },
        {
          id: "1035",
          title: "Great Grain Food",
          type: "Food",
          category: "food",
          phone: "604-370-3888",
          email: "",
          description: "",
          image: "1035",
          thumbnail: "1035",
          website: "",
          title_cn: "正太麵点",
          zoom: 1,
        },
        {
          id: "1040",
          title: "Chun Hing",
          type: "Food",
          category: "food",
          phone: "604-278-3055",
          email: "",
          description: "",
          image: "1040",
          thumbnail: "1040",
          website: "",
          title_cn: "駿興",
          zoom: 1,
        },
        {
          id: "1045",
          title: "Golden Rice Bowl",
          type: "Food",
          category: "food",
          phone: "604-244-8082",
          email: "",
          description: "",
          image: "1045",
          thumbnail: "1045",
          website: "",
          title_cn: "金飯碗",
          zoom: 1,
        },
        {
          id: "1050",
          title: "Pak Tak",
          type: "Food",
          category: "food",
          phone: "604-231-9096",
          email: "",
          description: "",
          image: "1050",
          thumbnail: "1050",
          website: "http://www.yaohanpaktak.com",
          title_cn: "百德潮洲美食",
          zoom: 1,
        },
        {
          id: "1055",
          title: "A Whole Mango",
          type: "Food",
          category: "food",
          phone: "604-278-7113",
          email: "",
          description: "",
          image: "1055",
          thumbnail: "1055",
          website: "",
          title_cn: "一只芒果",
          zoom: 1,
        },
        {
          id: "1060",
          title: "Juice King",
          type: "Food",
          category: "food",
          phone: "604-370-6969",
          email: "",
          description: "",
          image: "1060",
          thumbnail: "1060",
          website: "",
          title_cn: "果汁王",
          zoom: 1,
        },
        {
          id: "1065",
          title: "Fok Po Tong",
          type: "Food",
          category: "food",
          phone: "604-278-3345",
          email: "",
          description: "",
          image: "1065",
          thumbnail: "1065",
          website: "",
          title_cn: "福寶堂",
          zoom: 1,
        },
        {
          id: "1070",
          title: "Curry House",
          type: "Food",
          category: "food",
          phone: "604-721-2426",
          email: "",
          description: "",
          image: "1070",
          thumbnail: "1070",
          website: "",
          title_cn: "海南咖喱屋",
          zoom: 1,
        },
        {
          id: "1075",
          title: "Sun Century",
          type: "Food",
          category: "food",
          phone: "604-278-0838",
          email: "",
          description: "",
          image: "1075",
          thumbnail: "1075",
          website: "",
          title_cn: "新世紀美食",
          zoom: 1,
        },
        {
          id: "1080",
          title: "Ajea Noodles",
          type: "Food",
          category: "food",
          phone: "236-889-2036",
          email: "",
          description: "",
          image: "1080",
          thumbnail: "1080",
          website: "",
          title_cn: "愛家面館",
          zoom: 1,
        },
        {
          id: "1085",
          title: "Countryside Chinese Noodle Restaurant",
          type: "Food",
          category: "food",
          phone: "604-773-3032",
          email: "",
          description: "",
          image: "1085",
          thumbnail: "1085",
          website: "",
          title_cn: "田園東北麵館",
          zoom: 1,
        },
        {
          id: "1090",
          title: "Datang BBQ Express",
          type: "Food",
          category: "food",
          phone: "604-231-9673",
          email: "",
          description: "",
          image: "1090",
          thumbnail: "1090",
          website: "",
          title_cn: "大塘燒臘",
          zoom: 1,
        },
        {
          id: "1095",
          title: "Chopstick Express",
          type: "Food",
          category: "food",
          phone: "604-370-9209",
          email: "",
          description: "",
          image: "1095",
          thumbnail: "1095",
          website: "",
          title_cn: "新筷餐",
          zoom: 1,
        },
        {
          id: "1100",
          title: "Lumingchun",
          type: "Food",
          category: "food",
          phone: "	604-821-0828",
          email: "",
          description: "",
          image: "1100",
          thumbnail: "1100",
          website: "",
          title_cn: "鹿鳴春",
          zoom: 1,
        },
        {
          id: "1105",
          title: "Fresh Elements",
          type: "Food",
          category: "food",
          phone: "604-284-5382",
          email: "",
          description: "",
          image: "1105",
          thumbnail: "1105",
          website: "",
          title_cn: "鮮果鮮",
          zoom: 1,
        },
        {
          id: "1020",
          title: "Alpha Business Centre",
          type: "Other",
          category: "specialty",
          phone: "604-365-6685",
          email: "",
          description: "",
          image: "1020",
          thumbnail: "1020",
          website: "",
          title_cn: "ABC快遞商務中心",
          zoom: 1,
        },
        {
          id: "1005",
          title: "Dream Vacation",
          type: "Travel Agency",
          category: "specialty",
          phone: "604-370-3038",
          email: "",
          description: "",
          image: "1005",
          thumbnail: "1005",
          website: "http://www.dreamva.ca",
          title_cn: "理想假期工作坊",
          zoom: 1,
        },
        {
          id: "1010",
          title: "Apex Insurance",
          type: "Insurance Agency",
          category: "specialty",
          phone: "604-868-3388,604-273-1668",
          email: "",
          description: "",
          image: "1010",
          thumbnail: "1010",
          website: "http://www.apexinsurance.ca",
          title_cn: "平安保險",
          zoom: 1,
        },
        {
          id: "1015",
          title: "Wing Shing Co.Ltd",
          type: "Herbal Medicine",
          category: "specialty",
          phone: "604-278-1117",
          email: "",
          description: "",
          image: "1015",
          thumbnail: "1015",
          website: "",
          title_cn: "永盛參茸海味",
          zoom: 1,
        },
        {
          id: "1025",
          title: "Kingmark (Canada)",
          type: "Money Exchange",
          category: "specialty",
          phone: "604-273-8100",
          email: "",
          description: "",
          image: "1025",
          thumbnail: "1025",
          website: "http://www.kingmark.ca",
          title_cn: "加聯銀業",
          zoom: 1,
        },
        {
          id: "1030",
          title: "Bengong's Tea",
          type: "Food",
          category: "food",
          phone: "604-370-1236",
          email: "",
          description: "",
          image: "1030",
          thumbnail: "1030",
          website: "http://www.bengongstea.ca",
          title_cn: "本宮的茶",
          zoom: 1,
        },
      ],
      zoom: 1,
    },
    {
      id: "second",
      title: "2nd Floor",
      title_cn: "商場二樓",
      map: "/img/maps/second-floor.svg",
      minimap: "/img/maps/second-floor.svg",
      locations: [
        {
          id: "2120",
          title: "Vacant",
          type: "Vacant",
          category: "specialty",
          phone: "",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "空置",
          x: "0.7007",
          y: "0.5571",
          zoom: 1,
        },
        {
          id: "2025",
          title: "Senda Salon",
          type: "Hair Salon/ Product",
          category: "health",
          phone: "604-278-1221",
          email: "",
          description: "",
          image: "2025",
          thumbnail: "2025",
          website: "http://www.sendasalon.com",
          title_cn: "千田髮廊",
          x: "0.8300",
          y: "0.5000",
          zoom: 1,
        },
        {
          id: "2135",
          title: "Longevita Nutrition",
          type: "Health Food",
          category: "health",
          phone: "604-207-9900",
          email: "",
          description: "",
          image: "2135",
          thumbnail: "2135",
          website: "http://www.timedrugs.com",
          title_cn: "好時光保健品",
          x: "0.6722",
          y: "0.4100",
          zoom: 1,
        },
        {
          id: "2215",
          title: "Sung's Beauty Salon Ltd.",
          type: "Hair Salon",
          category: "health",
          phone: "604-231-9699",
          email: "",
          description: "",
          image: "2215",
          thumbnail: "2215",
          website: "",
          title_cn: "髮軒",
          x: "0.4300",
          y: "0.2535",
          zoom: 1,
        },
        {
          id: "2235",
          title: "Xue Jun Chinese Medicine & Acupuncture Clinic",
          type: "Chinese Medicine and Acupuncture",
          category: "health",
          phone: "604-273-0001",
          email: "",
          description: "",
          image: "2235",
          thumbnail: "2235",
          website: "http://www.drxuejun.com",
          title_cn: "華之寶中醫針灸診所",
          x: "0.2988",
          y: "0.2535",
          zoom: 1,
        },
        {
          id: "2260",
          title: "Park Pacific Pharmacy",
          type: "Pharmacy",
          category: "health",
          phone: "604-273-9812",
          email: "",
          description: "",
          image: "2260",
          thumbnail: "2260",
          website: "",
          title_cn: "保康西藥房",
          x: "0.1878",
          y: "0.3858",
          zoom: 1,
        },
        {
          id: "2265",
          title: "Yaohan Centre Dental Clinic",
          type: "Dental Clinic",
          category: "health",
          phone: "604-231-9888",
          email: "",
          description: "",
          image: "2265",
          thumbnail: "2265",
          website: "",
          title_cn: "八佰伴中心牙醫",
          x: "0.1232",
          y: "0.4712",
          zoom: 1,
        },
        {
          id: "2270",
          title: "Dr. James Hung",
          type: "Medical Clinic",
          category: "health",
          phone: "604-273-0990",
          email: "",
          description: "",
          image: "2270",
          thumbnail: "2270",
          website: "",
          title_cn: "洪健邦醫生醫務所",
          x: "0.1232",
          y: "0.5327",
          zoom: 1,
        },
        {
          id: "2440",
          title: "G-Way Reishi Essence & Health Care Products",
          type: "Health Food",
          category: "health",
          phone: "604-270-4929",
          email: "",
          description: "",
          image: "2440",
          thumbnail: "2440",
          website: "http://www.gwayreishi.com",
          title_cn: "芝寶靈芝專門店",
          x: "0.2730",
          y: "0.5700",
          zoom: 1,
        },
        {
          id: "2550",
          title: "F10 Quick Cut",
          type: "Hair Salon",
          category: "health",
          phone: "604-583-5288",
          email: "",
          description: "",
          image: "2550",
          thumbnail: "2550",
          website: "",
          title_cn: "F10 Quick Cut",
          x: "0.2863",
          y: "0.6900",
          zoom: 1,
        },
        {
          id: "2100",
          title: "Charmily",
          type: "Fashion",
          category: "clothing",
          phone: "604-277-7758",
          email: " maplecare@gmail.com",
          description: "",
          image: "2100",
          thumbnail: "2100",
          website: "",
          title_cn: "優絲美",
          x: "0.7007",
          y: "0.4435",
          zoom: 1,
        },
        {
          id: "2220",
          title: "Pinky Fashion",
          type: "Fashion",
          category: "clothing",
          phone: "604-278-1308",
          email: "",
          description: "",
          image: "2220",
          thumbnail: "2220",
          website: "",
          title_cn: "Pinky Fashion",
          x: "0.4005",
          y: "0.2535",
          zoom: 1,
        },
        {
          id: "2225",
          title: "Yobo",
          type: "Clothing",
          category: "clothing",
          phone: "604-273-0863",
          email: "",
          description: "",
          image: "2225",
          thumbnail: "2225",
          website: "",
          title_cn: "Yobo",
          x: "0.3700",
          y: "0.2535",
          zoom: 1,
        },
        {
          id: "2310",
          title: "Fashion Square",
          type: "Fashion",
          category: "clothing",
          phone: "604-889-8238",
          email: "",
          description: "",
          image: "2310",
          thumbnail: "2310",
          website: "",
          title_cn: "第一街時裝",
          x: "0.4630",
          y: "0.4100",
          zoom: 1,
        },
        {
          id: "2325",
          title: "Way Chuan",
          type: "Fashion",
          category: "clothing",
          phone: "604-278-3189",
          email: "",
          description: "",
          image: "2325",
          thumbnail: "2325",
          website: "",
          title_cn: "維泉泳裝用品專賣店",
          x: "0.3730",
          y: "0.4100",
          zoom: 1,
        },
        {
          id: "2425",
          title: "Vacant",
          type: "Vacant",
          category: "specialty",
          phone: "",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "空置",
          x: "0.3430",
          y: "0.5700",
          zoom: 1,
        },
        {
          id: "2020",
          title: "Balloon Boutique",
          type: "Gift Shop",
          category: "gifts",
          phone: "604-275-5428 (Ext 105)",
          email: "",
          description: "",
          image: "2020",
          thumbnail: "2020",
          website: "",
          title_cn: "氣球精品店",
          x: "0.8000",
          y: "0.4435",
          zoom: 1,
        },
        {
          id: "2105",
          title: "Rotai - massage products",
          type: "Massage Products",
          category: "specialty",
          phone: "604-968-7111",
          email: "200816828@qq.com",
          description: "",
          image: "2105",
          thumbnail: "2105",
          website: "",
          title_cn: "榮泰 按摩用品",
          x: "0.7750",
          y: "0.5400",
          zoom: 1,
        },
        {
          id: "2110",
          title: "2.12 Arts & Craft",
          type: "Art and Craft",
          category: "arts",
          phone: "604-231-8112",
          email: "",
          description: "",
          image: "2110",
          thumbnail: "2110",
          website: "",
          title_cn: "2.12藝廊",
          x: "0.7800",
          y: "0.5900",
          zoom: 1,
        },
        {
          id: "2450",
          title: "Chinese Painting",
          type: "Paintings & Art",
          category: "arts",
          phone: "604-276-1818",
          email: "",
          description: "",
          image: "2450",
          thumbnail: "2450",
          website: "",
          title_cn: "中國畫廊",
          x: "0.2200",
          y: "0.5700",
          zoom: 1,
        },
        {
          id: "2030",
          title: "Fukui Gift Shop",
          type: "Gifts",
          category: "gifts",
          phone: "604-232-0888",
          email: "",
          description: "",
          image: "2030",
          thumbnail: "2030",
          website: "",
          title_cn: "福井屋",
          x: "0.8700",
          y: "0.5700",
          zoom: 1,
        },
        {
          id: "2035",
          title: "Multimedia Game Boutique",
          type: "Electronic Games",
          category: "gifts",
          phone: "604-279-0851",
          email: "",
          description: "",
          image: "2035",
          thumbnail: "2035",
          website: "",
          title_cn: "Multimedia Game Boutique",
          x: "0.8700",
          y: "0.6300",
          zoom: 1,
        },
        {
          id: "2230",
          title: "New Progress Learning Centre Ltd",
          type: "Interactive Learning",
          category: "education",
          phone: "604-771-2477",
          email: "",
          description: "",
          image: "2230",
          thumbnail: "2230",
          website: "https://www.newprogress.ca",
          title_cn: "新進展教育中心",
          x: "0.3300",
          y: "0.2535",
          zoom: 1,
        },
        {
          id: "2005",
          title: "Fukunoya",
          type: "Houseware",
          category: "specialty",
          phone: "604-231-8001",
          email: "",
          description: "",
          image: "2005",
          thumbnail: "2005",
          website: "",
          title_cn: "福之島",
          x: "0.7300",
          y: "0.3095",
          zoom: 1,
        },
        {
          id: "2015",
          title: "Fuji BC (Bodylax)",
          type: "Massage Chair",
          category: "specialty",
          phone: "604-808-3268",
          email: "",
          description: "",
          image: "2015",
          thumbnail: "2015",
          website: "",
          title_cn: "大萊健康用品",
          x: "0.7700",
          y: "0.4212",
          zoom: 1,
        },
        {
          id: "2040",
          title: "Golden Jade House",
          type: "Fung Shui",
          category: "specialty",
          phone: "604-303-6578",
          email: "",
          description: "",
          image: "2040",
          thumbnail: "2040",
          website: "http://www.goldenjadehouse.com",
          title_cn: "金鈺堂風水命相館",
          x: "0.8700",
          y: "0.6900",
          zoom: 1,
        },
        {
          id: "2045",
          title: "Vacant",
          type: "Vacant",
          category: "specialty",
          phone: "",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "空置",
          x: "0.8000",
          y: "0.6900",
          zoom: 1,
        },
        {
          id: "2050",
          title: "Sohya Tech",
          type: "Education",
          category: "education",
          phone: "604-998-6995",
          email: "",
          description: "",
          image: "2050",
          thumbnail: "2050",
          website: "",
          title_cn: "新亞教育科技",
          x: "0.7700",
          y: "0.6900",
          zoom: 1,
        },
        {
          id: "2055",
          title: "President Global Home",
          type: "Real Estate Investment & Consulting",
          category: "specialty",
          phone: "604-912-0102",
          email: "",
          description: "",
          image: "2055",
          thumbnail: "2055",
          website: "",
          title_cn: "統信地產",
          x: "0.7400",
          y: "0.6900",
          zoom: 1,
        },
        {
          id: "2060",
          title: "JT Travel",
          type: "Travel Agency",
          category: "specialty",
          phone: "604-285-8685",
          email: "",
          description: "",
          image: "2060",
          thumbnail: "2060",
          website: "",
          title_cn: "金達旅遊",
          x: "0.7000",
          y: "0.6900",
          zoom: 1,
        },
        {
          id: "2115",
          title: "Clarify",
          type: "Water Purifier",
          category: "specialty",
          phone: "604-278-9597",
          email: "",
          description: "",
          image: "2115",
          thumbnail: "2115",
          website: "",
          title_cn: "克拉利淨水設備",
          x: "0.7400",
          y: "0.5571",
          zoom: 1,
        },
        {
          id: "2125",
          title: "Mainland Travel",
          type: "Travel Agency",
          category: "specialty",
          phone: "604-658-8877",
          email: "",
          description: "",
          image: "2125",
          thumbnail: "2125",
          website: "",
          title_cn: "美樂假期",
          x: "0.6700",
          y: "0.5671",
          zoom: 1,
        },
        {
          id: "2130",
          title: "President Global Immigration Consulting",
          type: "Education & Immigration Consulting",
          category: "specialty",
          phone: "604-332-0183, 604-370-2855",
          email: "",
          description: "",
          image: "2130",
          thumbnail: "2130",
          website: "",
          title_cn: "統信移民",
          x: "0.6700",
          y: "0.4871",
          zoom: 1,
        },
        {
          id: "2205",
          title: "Gibo Health Food Ltd.",
          type: "Chinese Herbs",
          category: "specialty",
          phone: "604-304-2958",
          email: "",
          description: "",
          image: "2205",
          thumbnail: "2205",
          website: "http://www.wahfunggibo.ca",
          title_cn: "華豐參茸海味店",
          x: "0.4978",
          y: "0.2605",
          zoom: 1,
        },
        {
          id: "2210",
          title: "Vacant",
          type: "Vacant",
          category: "specialty",
          phone: "",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "空置",
          x: "0.4630",
          y: "0.2535",
          zoom: 1,
        },
        {
          id: "2245",
          title: "Vacant",
          type: "Vacant",
          category: "specialty",
          phone: "",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "空置",
          x: "0.2420",
          y: "0.2474",
          zoom: 1,
        },
        {
          id: "2255",
          title: "Icanvision Immigration & Education",
          type: "Interactive Learning",
          category: "specialty",
          phone: "778-891-2088",
          email: "",
          description: "",
          image: "2255",
          thumbnail: "2255",
          website: "",
          title_cn: "華星國際移民留學",
          x: "0.2118",
          y: "0.3295",
          zoom: 1,
        },
        {
          id: "2275",
          title: "Regent Park",
          type: "Realty",
          category: "specialty",
          phone: "604-606-8188",
          email: "",
          description: "",
          image: "2275",
          thumbnail: "2275",
          website: "http://www.regentparkfairchild.ca",
          title_cn: "置業地產",
          x: "0.1232",
          y: "0.5900",
          zoom: 1,
        },
        {
          id: "2300",
          title: "Vacant",
          type: "Vacant",
          category: "specialty",
          phone: "",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "空置",
          x: "0.4978",
          y: "0.4100",
          zoom: 1,
        },
        {
          id: "2315",
          title: "Blynx Optical",
          type: "Fashion Eyewear",
          category: "specialty",
          phone: "604-304-2759",
          email: "blynxoptical@hotmail.com",
          description: "",
          image: "2315",
          thumbnail: "2315",
          website: "http://www.blynxoptical.com",
          title_cn: "新城市眼鏡",
          x: "0.4330",
          y: "0.4100",
          zoom: 1,
        },
        {
          id: "2320",
          title: "Yaohan Optical",
          type: "Eye Care Centre",
          category: "specialty",
          phone: "604-270-1618",
          email: "",
          description: "",
          image: "2320",
          thumbnail: "2320",
          website: "",
          title_cn: "萬視眼鏡",
          x: "0.4030",
          y: "0.4100",
          zoom: 1,
        },
        {
          id: "2330",
          title: "Zhlshop Appliances",
          type: "Home Appliances",
          category: "specialty",
          phone: "778-320-9158",
          email: "",
          description: "",
          image: "2330",
          thumbnail: "2330",
          website: "http://www.zhlshop.ca",
          title_cn: "振龍電器",
          x: "0.3430",
          y: "0.4100",
          zoom: 1,
        },
        {
          id: "2340",
          title: "Susanna Wedding",
          type: "Wedding Services",
          category: "specialty",
          phone: "604-278-8987",
          email: "",
          description: "",
          image: "2340",
          thumbnail: "2340",
          website: "http://www.susanawedding.com",
          title_cn: "蕙蘭婚紗禮服中心",
          x: "0.3030",
          y: "0.4100",
          zoom: 1,
        },
        {
          id: "2345",
          title: "Jin Hong International (Canada) Ltd.",
          type: "Immigration",
          category: "specialty",
          phone: "604-998-8238",
          email: "",
          description: "",
          image: "2345",
          thumbnail: "2345",
          website: "http://www.jhgjcanada.com",
          title_cn: "金宏國際(加拿大)",
          x: "0.2730",
          y: "0.4100",
          zoom: 1,
        },
        {
          id: "2350",
          title: "Oasis Water Filtration",
          type: "Water Filtration",
          category: "specialty",
          phone: "604-270-1885",
          email: "",
          description: "",
          image: "2350",
          thumbnail: "2350",
          website: "",
          title_cn: "甘泉淨水系統",
          x: "0.2330",
          y: "0.4512",
          zoom: 1,
        },
        {
          id: "2400",
          title: "iTalkBB",
          type: "Cell Phone",
          category: "specialty",
          phone: "604-998-6666",
          email: "",
          description: "",
          image: "2400",
          thumbnail: "2400",
          website: "http://www.iTalkBB.ca",
          title_cn: "iTalkBB",
          x: "0.4978",
          y: "0.5700",
          zoom: 1,
        },
        {
          id: "2405",
          title: "El's Gem Stone",
          type: "Semi-precious Stone",
          category: "specialty",
          phone: "604-781-8800",
          email: "",
          description: "",
          image: "2405",
          thumbnail: "2405",
          website: "",
          title_cn: "晶之谷",
          x: "0.4678",
          y: "0.5700",
          zoom: 1,
        },
        {
          id: "2410",
          title: "Canvision Travel",
          type: "Travel Agency",
          category: "specialty",
          phone: "604-370-7086",
          email: "",
          description: "",
          image: "2410",
          thumbnail: "2410",
          website: "",
          title_cn: "星加旅遊",
          x: "0.4330",
          y: "0.5700",
          zoom: 1,
        },
        {
          id: "2415",
          title: "Home Care",
          type: "Health & Wellness",
          category: "health",
          phone: "778-317-3855 / 778-956-8996",
          email: "homecareshops@gmail.com, thesunshinetrade@gmail.com",
          description: "",
          image: "2415",
          thumbnail: "2415",
          website: "",
          title_cn: "Home Care",
          x: "0.4030",
          y: "0.5700",
          zoom: 1,
        },
        {
          id: "2420",
          title: "GEG Travel",
          type: "Travel Agency",
          category: "specialty",
          phone: "604-370-3337",
          email: "",
          description: "",
          image: "2420",
          thumbnail: "2420",
          website: "http://www.goeugo.com",
          title_cn: "至活旅遊",
          x: "0.3730",
          y: "0.5700",
          zoom: 1,
        },
        {
          id: "2430",
          title: "ICI Computer",
          type: "Computer Service",
          category: "specialty",
          phone: "604-273-1368",
          email: "",
          description: "",
          image: "2430",
          thumbnail: "2430",
          website: "",
          title_cn: "ICI 電腦",
          x: "0.3030",
          y: "0.5700",
          zoom: 1,
        },
        {
          id: "2500",
          title: "J & A Ginseng",
          type: "Ginseng",
          category: "specialty",
          phone: "604-304-1870",
          email: "",
          description: "",
          image: "2500",
          thumbnail: "2500",
          website: "",
          title_cn: "參芝林",
          x: "0.4900",
          y: "0.6900",
          zoom: 1,
        },
        {
          id: "2510",
          title: "Ivy League Education",
          type: "Education",
          category: "education",
          phone: "604-888-5989",
          email: "ivyleaguegroup@hotmail.com",
          description: "",
          image: "2510",
          thumbnail: "2510",
          website: "",
          title_cn: "常春藤教育",
          x: "0.4270",
          y: "0.6900",
          zoom: 1,
        },
        {
          id: "2515",
          title: "Liu & Yang Notaries Public Corp.",
          type: "Notary Public",
          category: "specialty",
          phone: "604-284-5629",
          email: "",
          description: "",
          image: "2515",
          thumbnail: "2515",
          website: "http://www.lynotaries.com",
          title_cn: "劉楊法律公證行",
          x: "0.3789",
          y: "0.6900",
          zoom: 1,
        },
        {
          id: "2535",
          title: "Rioshine Tax & Accounting",
          type: "Tax and Accounting Services",
          category: "specialty",
          phone: "604-370-3958",
          email: "",
          description: "",
          image: "2535",
          thumbnail: "2535",
          website: "",
          title_cn: "瑞信會計事務所",
          x: "0.3280",
          y: "0.6900",
          zoom: 1,
        },
        {
          id: "2560",
          title: "Riorich Capital Ltd.",
          type: "Consulting Service",
          category: "specialty",
          phone: "604-285-1898",
          email: "",
          description: "",
          image: "2560",
          thumbnail: "2560",
          website: "",
          title_cn: "瑞信投資",
          x: "0.2357",
          y: "0.6900",
          zoom: 1,
        },
        // {
        //   id: "2575",
        //   title: "Vacant",
        //   type: "Vacant",
        //   category: "specialty",
        //   phone: "",
        //   email: "",
        //   description: "",
        //   image: "noimage",
        //   thumbnail: "noimage",
        //   website: "",
        //   title_cn: "空置",
        //   x: "0.1930",
        //   y: "0.6900",
        //   zoom: 1,
        // },
      ],
    },
  ],
};

// $('#mall_map').on('mapready', function () {

// Update dynamic data
DATA.levels.forEach(function(level) {
  if (isCN) level.title = level.title_cn;
  level.locations.forEach(function(store) {
    // store.image = getStoreImageUrl(store.image);
    // store.thumbnail = getStoreImageUrl(store.thumbnail);

    var category = DATA.groups.filter(function(group) {
      return group.id == store.category;
    })[0];
    store.fill = category.color;

    store.cardImage = getStoreImageUrl(store.image);
    delete store.image;
    delete store.thumbnail;

    var descriptionLine = store.description;

    store.description =
      '<div class="store-subtitle">' +
     ( isCN ? category.title_cn : category.title) +
      " / " +
      store.type +
      "</div>";
    if (store.phone) {
      if (store.phone.indexOf(',') > -1) {
        var numbers = store.phone.split(',');
        store.description += '<div class="store-phone"><a href="tel:' + numbers[0] + '">' + numbers[0] + '</a><br/>' + 
          '<a href="tel:' + numbers[1] + '">' + numbers[1] + '</a></div>';
      } else {
        store.description += '<div class="store-phone"><a href="tel:' + store.phone + '">' + store.phone + '</a></div>';
      }
    }
    if (store.email)
      store.description += '<div class="store-email"><a href="mailto:' + store.email + '">' + store.email + "</a></div>";
    if (store.website)
      store.description +=
        '<div class="store-website"><a target="_blank" href="' + store.website + 
        '">' + (isCN ? '查看商戶網站' : 'Visit website') + '</a></div>';
    if (descriptionLine)
      store.description +=
        '<div class="store-description-line">' + descriptionLine + '</div>';
    if (isCN) store.title = store.title_cn;
  });
});
// });

// Update CN titles
if (isCN) {
  // Update group titles
  DATA.groups.forEach(function(group) {
    group.title = group.title_cn;
  });
}

var DIRECTORY = DATA.levels[0].locations.concat(DATA.levels[1].locations);

$(function() {
  var load = function(stores) {
    $("#stores").empty();

    stores.sort(function(a, b) {
      return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
    });

    stores.forEach(function(store) {
      var card = $(".store-template")
        .clone()
        .removeClass("d-none store-template");
      var category = DATA.groups.filter(function(group) {
        return group.id == store.category;
      })[0];
      card.find(".store-image-wrap, .mobile-border").css("border-color", category.color);
      card
        .find(".store-image")
        .attr("src", store.cardImage)
        .attr("alt", store.title);
      card.find(".store-title").html(store.title);
      card.find(".store-id span").html(store.id);
      card.find(".store-description").html(store.description);
      card.appendTo("#stores");
    });
  };

  $(".toggle-wrapper").click(function() {
    var category = $(this).data("category");
    $(".toggle-wrapper").removeClass("active");
    $(this).addClass("active");

    // Scroll on click
    if (window.innerWidth <= 768) {
      $("html, body").animate(
        {
          scrollTop: $("#tab-content").offset().top - 120,
        },
        "300ms"
      );
    }

    load(
      DIRECTORY.filter(function(store) {
        return store.category == category;
      })
    );
  });

  load(DIRECTORY);

  // Map
  var mapplic = $("#mall_map").mapplic({
    source: DATA,
    sidebar: true, // Enable sidebar
    height: 700,
    search: true,
    minimap: false,
    marker: "hidden", // Disable markers
    fillcolor: false, // Disable default fill color
    fullscreen: true, // Enable fullscreen
    thumbholder: true,
    alphabetic: true,
    // developer: true,
  });

  // Toggle Category View Scroll
  $('#list_view_toggle').on('shown.bs.tab', function () {
    $(window).scrollTop($(window).scrollTop()+1);
  });
});
