var isCN = window.location.pathname.indexOf("/cn/") > -1;

var getStoreImageUrl = function(img) {
  if (!img) img = 'noimage';
  return '/img/stores/' + img + '.jpg';
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
      title: "Clothing & Accessories",
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
  ],
  levels: [
    {
      id: "ground",
      title: "Ground floor",
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
          description: "Fresh Seafood, Meats, Bakery and more!",
          image: "1000",
          thumbnail: "1000",
					website: "https://www.tnt-supermarket.com",
          title_cn: "大阪超級市場",
        },
        {
          id: "1035",
          title: "Wah Yuen",
          type: "Food",
          category: "food",
          phone: "604-231-9080",
          email: "",
          description: "This is a store  description.",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "華菀粥麵",
        },
        {
          id: "1040",
          title: "Chun Hing",
          type: "Food",
          category: "food",
          phone: "604-278-3055",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "駿興",
        },
        {
          id: "1045",
          title: "Golden Rice Bowl",
          type: "Food",
          category: "food",
          phone: "604-244-8082",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "金飯碗",
        },
        {
          id: "1050",
          title: "Pak Tak",
          type: "Food",
          category: "food",
          phone: "604-231-9096",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "百德潮洲美食",
        },
        {
          id: "1055",
          title: "Little Bean Tea Station",
          type: "Food",
          category: "food",
          phone: "604-278-7113",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "綠豆苗",
        },
        {
          id: "1060",
          title: "Juice King",
          type: "Food",
          category: "food",
          phone: "778-883-9669",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "果汁王",
        },
        {
          id: "1065",
          title: "Fok Po Tong",
          type: "Food",
          category: "food",
          phone: "604-278-3345",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "福寶堂",
        },
        {
          id: "1070",
          title: "Curry House",
          type: "Food",
          category: "food",
          phone: "604-721-2426",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "咖哩屋",
        },
        {
          id: "1075",
          title: "Sun Century",
          type: "Food",
          category: "food",
          phone: "604-278-0838",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "新世紀",
        },
        {
          id: "1080",
          title: "Ajea Noodles",
          type: "Food",
          category: "food",
          phone: "236-889-2036",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "愛家面館",
        },
        {
          id: "1085",
          title: "Countryside Noodles",
          type: "Food",
          category: "food",
          phone: "604-773-3032",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "田園東北麵館",
        },
        {
          id: "1090",
          title: "Datang BBQ Express",
          type: "Food",
          category: "food",
          phone: "604-231-9673",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "大塘燒臘",
        },
        {
          id: "1095",
          title: "Seoul Express",
          type: "Food",
          category: "food",
          phone: "604-821-1775",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "韓國食品",
        },
        {
          id: "1100",
          title: "Lumingchun",
          type: "Food",
          category: "food",
          phone: "	604-821-0828",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "鹿鳴春",
        },
        {
          id: "1105",
          title: "Fresh Elements Bubble Tea and Juice",
          type: "Food",
          category: "food",
          phone: "604-284-5382",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "鮮果鮮",
        },
        {
          id: "1020",
          title: "Harmony Books & Video",
          type: "Book's & Magazines",
          category: "gifts",
          phone: "604-278-1668",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "友禾圖書",
        },
        {
          id: "1005",
          title: "Dream Vacation Architect Inc.",
          type: "Travel Agency",
          category: "specialty",
          phone: "604-370-3038",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "理想假期工作坊",
        },
        {
          id: "1010",
          title: "Apex Insurance",
          type: "Insurance Agency",
          category: "specialty",
          phone: "604-273-1668",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "平安保險",
        },
        {
          id: "1015",
          title: "Wing Shing",
          type: "Herbal Medicine",
          category: "specialty",
          phone: "604-278-1117",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "永盛參茸海味",
        },
        {
          id: "1025",
          title: "Kingmark Canada Currency Exchange Inc.",
          type: "Money Exchange",
          category: "specialty",
          phone: "604-273-8100",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "加聯銀業",
        },
        {
          id: "1030",
          title: "Time College Group",
          type: "Education",
          category: "specialty",
          phone: "778-895-2938",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "時代教育集團",
        },
      ],
    },
    {
      id: "second",
      title: "Second floor",
      map: "/img/maps/second-floor.svg",
      minimap: "/img/maps/second-floor.svg",
      locations: [
        {
          id: "2120",
          title: "Mapleville",
          type: "Candies and Snacks",
          category: "food",
          phone: "778-822-6522",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "加拿大生活体驗館",
          x: "0.7007",
          y: "0.5571",
        },
        {
          id: "2025",
          title: "Senda Salon",
          type: "Hair Salon/ Product",
          category: "health",
          phone: "604-278-1221",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "千田髮廊",
          x: "0.8300",
          y: "0.5000",
        },
        {
          id: "2135",
          title: "Longevita Nutrition",
          type: "Health Food",
          category: "health",
          phone: "604-207-9900",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "好時光",
          x: "0.6722",
          y: "0.4100",
        },
        {
          id: "2215",
          title: "Sung's Salon",
          type: "Hair Salon",
          category: "health",
          phone: "604-231-9699",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "髮軒",
          x: "0.4300", 
          y: "0.2535"
        },
        {
          id: "2235",
          title: "Xue Jun Chinese Medicine and Acupuncture",
          type: "Chinese Medicine and Acupuncture",
          category: "health",
          phone: "604-273-0001",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "華之寶中醫針灸診所",
          x: "0.2988", 
          y: "0.2535"
        },
        {
          id: "2260",
          title: "Park Pacific Pharmacy",
          type: "Pharmacy",
          category: "health",
          phone: "604-273-9812",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "保康西藥房",
          x: "0.1878", 
          y: "0.3858"
        },
        {
          id: "2265",
          title: "Dentist Paul Wong",
          type: "Dental Clinic",
          category: "health",
          phone: "604-231-9888",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "八佰伴中心牙醫",
          x: "0.1232", 
          y: "0.4712"
        },
        {
          id: "2270",
          title: "Dr. James Hung",
          type: "Medical Clinic",
          category: "health",
          phone: "604-273-0990",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "洪健邦醫生醫務所",
          x: "0.1232", 
          y: "0.5327"
        },
        {
          id: "2440",
          title: "G-Way",
          type: "Health Food",
          category: "health",
          phone: "604-270-4929",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "芝寶靈芝專門店",
          x: "0.2730", 
          y: "0.5700"
        },
        {
          id: "2550",
          title: "F10 Quick Cut",
          type: "Hair Salon",
          category: "health",
          phone: "",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "F10 Quick Cut",
          x: "0.2863", 
          y: "0.6900"
        },
        {
          id: "2100",
          title: "All for Women",
          type: "Fashion",
          category: "clothing",
          phone: "604-277-7758",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "優絲美",
          x: "0.7007",
          y: "0.4435"
        },
        {
          id: "2220",
          title: "Pinky Fashion",
          type: "Fashion",
          category: "clothing",
          phone: "604-278-1308",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "Pinky Fashion",
          x: "0.4005", 
          y: "0.2535"
        },
        {
          id: "2225",
          title: "Yobo",
          type: "Clothing",
          category: "clothing",
          phone: "604-273-0863",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "Yobo",
          x: "0.3700", 
          y: "0.2535"
        },
        {
          id: "2310",
          title: "Fashion Square",
          type: "Fashion",
          category: "clothing",
          phone: "604-273-1383",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "第一街時裝",
          x: "0.4630", 
          y: "0.4100",
        },
        {
          id: "2325",
          title: "Way Chuan",
          type: "Fashion",
          category: "clothing",
          phone: "604-278-3189",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "維泉",
          x: "0.3730", 
          y: "0.4100",
        },
        {
          id: "2425",
          title: "Byworld",
          type: "Fashion",
          category: "clothing",
          phone: "604-232-0328",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "Byworld",
          x: "0.3430", 
          y: "0.5700"
        },
        {
          id: "2020",
          title: "Perfect Frame Aesthetic Gallery",
          type: "Painting and Framing",
          category: "arts",
          phone: "604-821-0890",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "藝苑",
          x: "0.8000",
          y: "0.4435"
        },
        {
          id: "2105",
          title: "Chanty Art Link",
          type: "Painting",
          category: "arts",
          phone: "604-231-8139",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "藝聯",
          x: "0.7750", 
          y: "0.5400",
        },
        {
          id: "2110",
          title: "2-12 artss",
          type: "Art and Craft",
          category: "arts",
          phone: "604-231-8112",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "2.12藝廊",
          x: "0.7800", 
          y: "0.5900",
        },
        {
          id: "2450",
          title: "Chinese Painting",
          type: "Paintings & Art",
          category: "arts",
          phone: "604-276-1818",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "中國畫廊",
          x: "0.2330", 
          y: "0.5700"
        },
        {
          id: "2455",
          title: "Chinese Painting",
          type: "Paintings & Art",
          category: "arts",
          phone: "604-276-1818",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "中國畫廊",
          x: "0.2030", 
          y: "0.5700"
        },
        {
          id: "2030",
          title: "Fukui Gift Shop",
          type: "Gifts",
          category: "gifts",
          phone: "604-232-0888",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "福井屋",
          x: "0.8700", 
          y: "0.5700"
        },
        {
          id: "2035",
          title: "Multimedia Game Boutique",
          type: "Electronic Games",
          category: "gifts",
          phone: "604-279-0851",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "Game 館",
          x: "0.8700", 
          y: "0.6300"
        },
        {
          id: "2230",
          title: "Red Sen",
          type: "Health Food",
          category: "gifts",
          phone: "778-882-7383",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "紅參健康食品",
          x: "0.3300", 
          y: "0.2535"
        },
        {
          id: "2005",
          title: "Fukunoya",
          type: "Houseware",
          category: "specialty",
          phone: "604-231-8001",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "福之島",
          x: "0.7300", 
          y: "0.3095"
        },
        {
          id: "2015",
          title: "Bodylax",
          type: "Massage Chair",
          category: "specialty",
          phone: "604-808-3268",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "大萊",
          x: "0.7700", 
          y: "0.4212"
        },
        {
          id: "2040",
          title: "Golden Jade House",
          type: "Fung Shui",
          category: "specialty",
          phone: "604-303-6578",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "金鈺堂",
          x: "0.8700", 
          y: "0.6900"
        },
        {
          id: "2045",
          title: "Sea & Sky Travel",
          type: "Travel Agency",
          category: "specialty",
          phone: "604-288-0309",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "海天旅游",
          x: "0.8000", 
          y: "0.6900"
        },
        {
          id: "2050",
          title: "President Global/Grand Maple",
          type: "Immigration and Education Consultant",
          category: "specialty",
          phone: "604-370-2855",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "統信国際",
          x: "0.7700", 
          y: "0.6900"
        },
        {
          id: "2055",
          title: "PG Homes",
          type: "Realty",
          category: "specialty",
          phone: "604-370-2855",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "PG Homes",
          x: "0.7400", 
          y: "0.6900"
        },
        {
          id: "2060",
          title: "JT Travel",
          type: "Travel Agency",
          category: "specialty",
          phone: "604-285-8685",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "金達旅遊",
          x: "0.7000", 
          y: "0.6900"
        },
        {
          id: "2115",
          title: "Clarify",
          type: "Water Purifier",
          category: "specialty",
          phone: "604-278-9597",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "克拉利淨水設備",
          x: "0.7400", 
          y: "0.5571",
        },
        {
          id: "2125",
          title: "Mainland Travel",
          type: "Travel Agency",
          category: "specialty",
          phone: "604-658-8877",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "美樂假期",
          x: "0.6700", 
          y: "0.5671",
        },
        {
          id: "2130",
          title: "President Global/Grand Maple",
          type: "Immigration and Education Consultant",
          category: "specialty",
          phone: "604-370-2855",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "統信国際",
          x: "0.6700", 
          y: "0.4871",
        },
        {
          id: "2205",
          title: "Gibo Health Food Ltd.",
          type: "Chinese Herbs",
          category: "specialty",
          phone: "604-304-2958",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "華豐參茸海味店",
          x: "0.4978", 
          y: "0.2605"
        },
        {
          id: "2210",
          title: "Coinmarket",
          type: "Currency Exchange",
          category: "specialty",
          phone: "604-767-1022",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "貨幣坊",
          x: "0.4630", 
          y: "0.2535"
        },
        {
          id: "2245",
          title: "Little Ants",
          type: "Interactive Learning",
          category: "specialty",
          phone: "",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "小螞蟻教育",
          x: "0.2420", 
          y: "0.2474"
        },
        {
          id: "2255",
          title: "Bayshore Business Centre",
          type: "Consulting Service",
          category: "specialty",
          phone: "604-270-1123",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "海岸商務中心",
          x: "0.2118", 
          y: "0.3295"
        },
        {
          id: "2275",
          title: "Regent Park",
          type: "Realty",
          category: "specialty",
          phone: "604-606-8188",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "置業地產",
          x: "0.1232", 
          y: "0.5900"
        },
        {
          id: "2300",
          title: "A Fontane Beddings",
          type: "Pillows & Beddings",
          category: "specialty",
          phone: "604-231-8000",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "雅芳婷",
          x: "0.4978", 
          y: "0.4100",
        },
        {
          id: "2315",
          title: "Blynx Optical",
          type: "Fashion Eyewear",
          category: "specialty",
          phone: "604-304-2759",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "新城市眼鏡",
          x: "0.4330", 
          y: "0.4100",
        },
        {
          id: "2320",
          title: "Yaohan Optical",
          type: "Eye Care Centre",
          category: "specialty",
          phone: "604-270-1618",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "萬視眼鏡",
          x: "0.4030", 
          y: "0.4100",
        },
        {
          id: "2330",
          title: "Zhlshop Appliances",
          type: "Home Appliances",
          category: "specialty",
          phone: "778-320-9158",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "振龍電器",
          x: "0.3430", 
          y: "0.4100",
        },
        {
          id: "2340",
          title: "Susanna Wedding",
          type: "Wedding Services",
          category: "specialty",
          phone: "604-278-8987",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "蕙蘭婚紗",
          x: "0.3030", 
          y: "0.4100",
        },
        {
          id: "2345",
          title: "Jin Hong International",
          type: "Immigration",
          category: "specialty",
          phone: "604-998-8238",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "金宏國際",
          x: "0.2730", 
          y: "0.4100",
        },
        {
          id: "2350",
          title: "Oasis Water Filtration",
          type: "Water Filtration",
          category: "specialty",
          phone: "604-270-1885",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "甘泉淨水系統",
          x: "0.2330", 
          y: "0.4512"
        },
        {
          id: "2400",
          title: "iTalkBB",
          type: "Cell Phone",
          category: "specialty",
          phone: "604-998-6666",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "iTalkBB",
          x: "0.4978", 
          y: "0.5700"
        },
        {
          id: "2405",
          title: "El's Gem Stone",
          type: "Semi-precious Stone",
          category: "specialty",
          phone: "604-781-8800",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "晶之谷",
          x: "0.4678", 
          y: "0.5700"
        },
        {
          id: "2410",
          title: "Canvision Travel",
          type: "Travel Agency",
          category: "specialty",
          phone: "604-370-7086",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "星加旅遊",
          x: "0.4330", 
          y: "0.5700"
        },
        {
          id: "2415",
          title: "Jiu Xin Financial",
          type: "Currency transfer",
          category: "specialty",
          phone: "604-303-6563",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "九鑫換滙",
          x: "0.4030", 
          y: "0.5700"
        },
        {
          id: "2420",
          title: "GEG Travel",
          type: "Travel Agency",
          category: "specialty",
          phone: "604-370-3337",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "至活旅遊",
          x: "0.3730", 
          y: "0.5700"
        },
        {
          id: "2430",
          title: "ICI Computer",
          type: "Computer Service",
          category: "specialty",
          phone: "604-273-1368",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "ICI Computer",
          x: "0.3030", 
          y: "0.5700"
        },
        {
          id: "2500",
          title: "J & A Ginseng",
          type: "Ginseng",
          category: "specialty",
          phone: "604-304-1870",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "參芝林",
          x: "0.4900", 
          y: "0.6900"
        },
        {
          id: "2510",
          title: "Revel in Years",
          type: "Tea",
          category: "specialty",
          phone: "778-322-7977",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "醉春秋",
          x: "0.4270", 
          y: "0.6900"
        },
        {
          id: "2515",
          title: "Chun Yen Liu Notary Public",
          type: "Notary Public",
          category: "specialty",
          phone: "778-997-7568",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "法律公証人",
          x: "0.3789", 
          y: "0.6900"
        },
        {
          id: "2535",
          title: "Rioshine Tax & Accounting",
          type: "Tax and Accounting Services",
          category: "specialty",
          phone: "604-370-3958",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "瑞信會計事務所",
          x: "0.3280", 
          y: "0.6900"
        },
        {
          id: "2560",
          title: "Rioshine Commercial Properties",
          type: "Consulting Service",
          category: "specialty",
          phone: "604-285-1898",
          email: "",
          description: "",
          image: "noimage",
          thumbnail: "noimage",
          website: "",
          title_cn: "瑞信啇業房產",
          x: "0.2357", 
          y: "0.6900"
        },
      ],
    },
  ],
};

// Update dynamic data
DATA.levels.forEach(function(level) {
  level.locations.forEach(function(store) {
    // store.image = getStoreImageUrl(store.image);
    // store.thumbnail = getStoreImageUrl(store.thumbnail);
    store.cardImage = getStoreImageUrl(store.image);
    delete store.image;
    delete store.thumbnail;

    if (store.description) store.description = '<p>' + store.description + '</p>'; 
    if (store.phone) store.description += '<a href="tel:' + store.phone + '">' + store.phone + '</a><br/>';
    if (store.email) store.description += '<a href="mailto:' + store.email + '">' + store.email + '</a><br/>';
    if (store.website) store.description += '<a target="_blank" href="' + store.website + '">Visit Site</a><br/>';
    if (isCN) store.title = store.title_cn;
  });
});

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

    stores.forEach(function(store) {
      var card = $(".store-template")
        .clone()
        .removeClass("d-none store-template");
      var category = DATA.groups.filter(function(group) {
        return group.id == store.category;
      })[0];
      card.find(".store-image-wrap, .mobile-border")
        .css("border-color", category.color);
      card.find(".store-image")
        .attr("src", store.cardImage)
        .attr("alt", store.title);
      card.find(".store-title").html(store.title);
      card.find(".store-category").html(category.title);
      card.find(".store-type").html(store.type);
      card.find(".store-id span").html(store.id);
      card.find(".store-description").html(store.description);
      card.appendTo("#stores");
    });
  };

  $(".toggle-wrapper").click(function() {
    var category = $(this).data("category");
    $('.toggle-wrapper').removeClass('active');
    $(this).addClass('active');
    $('html, body').animate({
      scrollTop: $("#tab-content").offset().top - 120
    }, '300ms');
    load(
      DIRECTORY.filter(function(store) {
        return store.category == category;
      })
    );
  });

  load(DIRECTORY);

  // Map
  var mapplic = $('#map').mapplic({
    source: DATA,
    sidebar: true, 			// Enable sidebar
    height: 700,
    search: true,
    minimap: false,
    marker: 'hidden', 		// Disable markers
    fillcolor: false, 		// Disable default fill color
    fullscreen: true, 		// Enable fullscreen 
    thumbholder: true,
    // developer: true,
  });
});
