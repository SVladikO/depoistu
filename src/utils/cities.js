
const languageKey = 'ua';

export const convertCitiesIds = (cityIds) => {
    const city = {};

    cityIds.sort((a, b) => a > b).forEach(cityId => {
        const regionId = getRegionId(cityId);
        const regionName = cities[regionId][languageKey];
        city[regionName] = [
            ...(city[regionName] || []),
            {name: cities[cityId][languageKey], id: cityId}
        ];
    })

    return city;
}

const getRegionId = cityId => cityId - (cityId % 100)

export const getCityNameById = key => {
    return cities[key] && cities[key][languageKey];
}

export const getAllCities = () => {
    return convertCitiesIds(
        Object.keys(cities)
            .filter(cityId => +cityId !== getRegionId(+cityId))
    )
}

const cities = {
        100: {ua: "Івано-Франківська", en: "Ivano-Frankivsk region"},
        101: {ua: "Богородчани", en: "Bohorodchany"},
        102: {ua: "Болехів", en: "Bolehiv"},
        103: {ua: "Бурштин", en: "Burshtyn"},
        104: {ua: "Галич", en: "Halych"},
        105: {ua: "Городенка", en: "Horodenka"},
        106: {ua: "Делятин", en: "Delyatyn"},
        107: {ua: "Дземброня", en: "Dzembronya"},
        108: {ua: "Долина", en: "Dolyna"},
        109: {ua: "Івано-Франківськ", en: "Ivano-Frankivsk"},
        110: {ua: "Калуш", en: "Kalush"},
        111: {ua: "Коломия", en: "Kolomyia"},
        112: {ua: "Косів", en: "Kosiv"},
        113: {ua: "Ланчин", en: "Lanchin"},
        114: {ua: "Надвірна", en: "Nadvirna"},
        115: {ua: "Перегінське", en: "Pereginske"},
        116: {ua: "Рогатин", en: "Rohatyn"},
        117: {ua: "Снятин", en: "Snyatyn"},
        118: {ua: "Стебник", en: "Stebnik"},
        119: {ua: "Тисмениця", en: "Tysmenitsa"},
        120: {ua: "Тлумач", en: "Tlumach"},
        121: {ua: "Яремче", en: "Yaremche"},

        200: {ua: "Вінницька", en: "Vinnytsia region"},
        201: {ua: "Бар", en: "Bar"},
        202: {ua: "Бершадь", en: "Bershad"},
        203: {ua: "Війтівці", en: "Viytivtsi"},
        204: {ua: "Вінниця", en: "Vinnytsia"},
        205: {ua: "Гайсин", en: "Haysyn"},
        206: {ua: "Гнівань", en: "Hnivan"},
        207: {ua: "Городок", en: "Horodok"},
        208: {ua: "Жмеринка", en: "Zhmerinka"},
        209: {ua: "Іллінці", en: "Illintsi"},
        210: {ua: "Калинівка", en: "Kalinovka"},
        211: {ua: "Козятин", en: "Kozyatyn"},
        212: {ua: "Крижопіль", en: "Kryzhopil"},
        213: {ua: "Ладижин", en: "Ladyzhin"},
        214: {ua: "Липовець", en: "Lipovets"},
        215: {ua: "Могилів-Подільський", en: "Mohyliv-Podilskyi"},
        216: {ua: "Немирів", en: "Nemiriv"},
        217: {ua: "Пісочин", en: "Pisochyn"},
        218: {ua: "Погребище", en: "Pohrebyshche"},
        219: {ua: "Стрижавка", en: "Stryzhavka"},
        220: {ua: "Тернівка", en: "Ternivka"},
        221: {ua: "Тульчин", en: "Tulchyn"},
        222: {ua: "Хмільник", en: "Khmilnyk"},
        223: {ua: "Чечельник", en: "Chechelnyk"},
        224: {ua: "Шаргород", en: "Shargorod"},
        225: {ua: "Ямпіль", en: "Yampil"},

        300: {ua: "Волинська", en: "Volyn region"},
        301: {ua: "Броди", en: "Brody"},
        302: {ua: "Володимир", en: "Volodymyr"},
        303: {ua: "Горохів", en: "Horohiv"},
        304: {ua: "Іваничі", en: "Ivanychi"},
        305: {ua: "Камінь-Каширський", en: "Kamin-Kashirskyi"},
        306: {ua: "Ківерці", en: "Kivertsi"},
        307: {ua: "Ковель", en: "Kovel"},
        308: {ua: "Кременець", en: "Kremenets"},
        309: {ua: "Луцьк", en: "Lutsk"},
        310: {ua: "Любешів", en: "Lyubeshiv"},
        311: {ua: "Любомль", en: "Luboml"},
        312: {ua: "Маневичі", en: "Manevichi"},
        313: {ua: "Нововолинськ", en: "Novovolynsk"},
        314: {ua: "Ратне", en: "Ratne"},
        315: {ua: "Рожище", en: "Rozhishche"},
        316: {ua: "Стара Вижівка", en: "Stara Vyzhivka"},
        317: {ua: "Турійськ", en: "Turiysk"},
        318: {ua: "Устилуг", en: "Ustylug"},
        319: {ua: "Цумань", en: "Tsuman"},
        320: {ua: "Шацьк", en: "Shatsk"},

        400: {ua: "Дніпропетровська", en: "Dnipropetrovsk region"},
        401: {ua: "Апостолове", en: "Apostolove"},
        402: {ua: "Богуслав", en: "Boguslav"},
        403: {ua: "Верхньодніпровськ", en: "Verkhnyodniprovsk"},
        404: {ua: "Вільногірськ", en: "Vilnohorsk"},
        405: {ua: "Дніпро", en: "Dnipro"},
        406: {ua: "Жовті Води", en: "Zhovti vody"},
        407: {ua: "Кам'янське", en: "Kamianske"},
        408: {ua: "Кривий Ріг", en: "Kryvyi Rih"},
        409: {ua: "Марганець", en: "Manganets"},
        410: {ua: "Нікополь", en: "Nikopol"},
        411: {ua: "Новомосковськ", en: "Novomoskovsk"},
        412: {ua: "П'ятихатки", en: "Pyatikhatky"},
        413: {ua: "Павлоград", en: "Pavlograd"},
        414: {ua: "Перещепине", en: "Pereshchepyne"},
        415: {ua: "Першотравенськ", en: "Pershotravensk"},
        416: {ua: "Підгородне", en: "Pidhorodne"},
        417: {ua: "Синельникове", en: "Synelnikove"},
        418: {ua: "Чаплинка", en: "Chaplinka"},

        500: {ua: "Донецька", en: "Donetsk region"},
        501: {ua: "Авдіївка", en: "Avdiivka"},
        502: {ua: "Амвросіївка", en: "Amvrosiivka"},
        503: {ua: "Бахмут", en: "Bakhmut"},
        504: {ua: "Волноваха", en: "Volnovakha"},
        505: {ua: "Вугледар", en: "Vyhledar"},
        506: {ua: "Горлівка", en: "Horlivka"},
        507: {ua: "Дебальцеве", en: "Debaltseve"},
        508: {ua: "Добропілля", en: "Dobropillia"},
        509: {ua: "Докучаєвськ", en: "Dokuchaevsk"},
        510: {ua: "Донецьк", en: "Donetsk"},
        511: {ua: "Дружківка", en: "Druzhkivka"},
        512: {ua: "Єнакієве", en: "Yenakiyeve"},
        513: {ua: "Зугрес", en: "Zuhres"},
        515: {ua: "Кіровське", en: "Kirovske"},
        516: {ua: "Костянтинівка", en: "Kostyantynivka"},
        517: {ua: "Краматорськ", en: "Kramatorsk"},
        518: {ua: "Красний лиман", en: "Krasny Liman"},
        519: {ua: "Майорськ", en: "Mayorsk"},
        520: {ua: "Макіївка", en: "Makiivka"},
        521: {ua: "Мар'їнка", en: "Maryinka"},
        522: {ua: "Маріуполь", en: "Mariupol"},
        523: {ua: "Мирноград", en: "Myrnograd"},
        524: {ua: "Новоазовськ", en: "Novoazovsk"},
        525: {ua: "Новогродівка", en: "Novohrodivka"},
        526: {ua: "Олександрівка", en: "Oleksandrivka"},
        527: {ua: "Покровськ", en: "Pokrovsk"},
        528: {ua: "Селидове", en: "Selidove"},
        529: {ua: "Слов'янськ", en: "Slovyansk"},
        530: {ua: "Сніжне", en: "Snizhne"},
        531: {ua: "Соледар", en: "Soledar"},
        532: {ua: "Старобешеве", en: "Starobesheve"},
        533: {ua: "Торез", en: "Torez"},
        534: {ua: "Торецьк", en: "Toretsk"},
        535: {ua: "Харцизьк", en: "Khartsyzk"},
        536: {ua: "Шахтарськ", en: "Shakhtarsk"},
        537: {ua: "Ясинувата", en: "Yasynuvata"},

        600: {ua: "Житомирська", en: "Zhytomyr region"},
        601: {ua: "Андрушівка", en: "Andrushivka"},
        602: {ua: "Баранівка", en: "Baranivka"},
        603: {ua: "Бердичів", en: "Berdychiv"},
        604: {ua: "Володарськ-Волинський", en: "Volodarsk-Volynskyi"},
        605: {ua: "Ємільчине", en: "Yemilchyne"},
        606: {ua: "Житомир", en: "Zhytomyr"},
        607: {ua: "Іршанськ", en: "Irshansk"},
        608: {ua: "Коростень", en: "Korosten"},
        609: {ua: "Коростишів", en: "Korostyshiv"},
        610: {ua: "Малин", en: "Malyn"},
        611: {ua: "Новоград-Волинський", en: "Novohrad-Volynskyi"},
        612: {ua: "Носівки", en: "Nosivky"},
        613: {ua: "Овруч", en: "Ovruch"},
        614: {ua: "Олевськ", en: "Olevsk"},
        615: {ua: "Попільня", en: "Popilnya"},
        616: {ua: "Радомишль", en: "Radomyshl"},
        617: {ua: "Романів", en: "Romaniv"},
        618: {ua: "Черняхів", en: "Chernyakhiv"},

        700: {ua: "Закарпатська", en: "Zakarpattia region"},
        701: {ua: "Берегове", en: "Berehove"},
        702: {ua: "Буштино", en: "Bushtyno"},
        703: {ua: "Великий Бичків", en: "Velikiy Bychkiv"},
        704: {ua: "Виноградів", en: "Vynohradiv"},
        705: {ua: "Вишково", en: "Vyshkovo"},
        706: {ua: "Дубове", en: "Dubove"},
        707: {ua: "Іршава", en: "Irshava"},
        708: {ua: "Королево", en: "Korolevo"},
        709: {ua: "Міжгір'я", en: "Mizhhirya"},
        710: {ua: "Мукачеве", en: "Mukacheve"},
        711: {ua: "Перечин", en: "Perechyn"},
        712: {ua: "Рахів", en: "Rakhiv"},
        713: {ua: "Свалява", en: "Svalyava"},
        714: {ua: "Солотвино", en: "Solotvyno"},
        715: {ua: "Тячів", en: "Tyachiv"},
        716: {ua: "Ужгород", en: "Uzhhorod"},
        717: {ua: "Хуст", en: "Khust"},
        718: {ua: "Чоп", en: "Chop"},

        800: {ua: "Запорізька", en: "Zaporizhzhya region"},
        801: {ua: "Бердянськ", en: "Berdyansk"},
        802: {ua: "Біляївка", en: "Bilyaivka"},
        803: {ua: "Василівка", en: "Vasylivka"},
        804: {ua: "Веселе", en: "Vesele"},
        805: {ua: "Вільнянськ", en: "Vilnyansk"},
        806: {ua: "Гуляйполе", en: "Hulyaipole"},
        807: {ua: "Дніпрорудне", en: "Dniprorudne"},
        808: {ua: "Енергодар", en: "Enerhodar"},
        809: {ua: "Запоріжжя", en: "Zaporizhzhya"},
        810: {ua: "Кам'янка-Дніпровська", en: "Kamyanka-Dniprovska"},
        811: {ua: "Куйбишеве", en: "Kuybysheve"},
        812: {ua: "Кушугум", en: "Kushuhum"},
        813: {ua: "Мелітополь", en: "Melitopol"},
        814: {ua: "Михайлівка", en: "Mykhaylivka"},
        815: {ua: "Молочанськ", en: "Molochansk"},
        816: {ua: "Оріхів", en: "Orikhiv"},
        817: {ua: "Пологи", en: "Polohy"},
        818: {ua: "Приморськ", en: "Prymorsk"},
        819: {ua: "Розівка", en: "Rozivka"},
        820: {ua: "Токмак", en: "Tokmak"},
        821: {ua: "Якимівка", en: "Yakymivka"},

        900: {ua: "Кіровоградська", en: "Kirovohradsk region"},
        901: {ua: "Бобринець", en: "Bobrynets"},
        902: {ua: "Власівка", en: "Vlasivka"},
        903: {ua: "Гайворон", en: "Hayvoron"},
        904: {ua: "Долинська", en: "Dolynska"},
        905: {ua: "Знам'янка", en: "Znamyanka"},
        906: {ua: "Кропивницький", en: "Kropyvnytskyy"},
        907: {ua: "Мала Виска", en: "Mala Vyska"},
        908: {ua: "Нова Прага", en: "Nova Praha"},
        909: {ua: "Нове", en: "Nove"},
        910: {ua: "Новоархангельськ", en: "Novoarkhanhelsk"},
        911: {ua: "Новомиргород", en: "Novomyrhorod"},
        912: {ua: "Новоукраїнка", en: "Novoukrayinka"},
        913: {ua: "Олександрія", en: "Alexandriya"},
        914: {ua: "Первомайськ", en: "Pervomaysk"},
        915: {ua: "Петрово", en: "Petrovo"},
        916: {ua: "Помічна", en: "Pomichna"},
        917: {ua: "Світловодськ", en: "Svitlovodsk"},
        918: {ua: "Смолине", en: "Smolyne"},

        1000: {ua: "Київська", en: "Kyiv region"},
        1001: {ua: "Баришівка", en: "Baryshivka"},
        1002: {ua: "Березань", en: "Berezan"},
        1003: {ua: "Біла Церква", en: "Bila Tserkva"},
        1004: {ua: "Бориспіль", en: "Boryspil"},
        1005: {ua: "Бородянка", en: "Borodyanka"},
        1006: {ua: "Боярка", en: "Boyarka"},
        1007: {ua: "Бровари", en: "Brovary"},
        1008: {ua: "Буча", en: "Bucha"},
        1009: {ua: "Васильків", en: "Vasylkiv"},
        1010: {ua: "Вишгород", en: "Vyshhorod"},
        1011: {ua: "Вишневе", en: "Vyshneve"},
        1012: {ua: "Володарка", en: "Volodarka"},
        1013: {ua: "Глеваха", en: "Hlevakha"},
        1014: {ua: "Гостомель", en: "Hostomel"},
        1015: {ua: "Іваньків", en: "Ivankiv"},
        1016: {ua: "Ірпінь", en: "Irpin"},
        1017: {ua: "Кагарлик", en: "Kaharlyk"},
        1018: {ua: "Київ", en: "Kyiv"},
        1019: {ua: "Коцюбинське", en: "Kotsyubynske"},
        1020: {ua: "Макарів", en: "Makariv"},
        1021: {ua: "Миронівка", en: "Myronivka"},
        1022: {ua: "Обухів", en: "Obukhiv"},
        1023: {ua: "Переяслав-Хмельницький", en: "Pereyaslav-Khmelnytskyi"},
        1024: {ua: "Прип'ять", en: "Pripyat"},
        1025: {ua: "Ржищів", en: "Rzhyshchiv"},
        1026: {ua: "Рокитне", en: "Rokytne"},
        1027: {ua: "Сквира", en: "Skvyra"},
        1028: {ua: "Славутич", en: "Slavutych"},
        1029: {ua: "Тараща", en: "Tarashcha"},
        1030: {ua: "Тетіїв", en: "Tetiiv"},
        1031: {ua: "Узин", en: "Uzyn"},
        1032: {ua: "Українка", en: "Ukrainka"},
        1033: {ua: "Фастів", en: "Fastiv"},
        1034: {ua: "Чорнобиль", en: "Chornobyl"},
        1035: {ua: "Яготин", en: "Yahotyn"},

        1100: {ua: "Крим (АРК)", en: "Crimea"},
        1101: {ua: "Алупка", en: "Alupka"},
        1102: {ua: "Алушта", en: "Alushta"},
        1103: {ua: "Армянськ", en: "Armyansk"},
        1104: {ua: "Бахчисарай", en: "Bakhchisarai"},
        1105: {ua: "Берегове", en: "Berehove"},
        1106: {ua: "Білогірськ", en: "Biloghirsk"},
        1107: {ua: "Джанкой", en: "Dzhankoy"},
        1108: {ua: "Євпаторія", en: "Yevpatoria"},
        1109: {ua: "Знам'янка", en: "Znamyanka"},
        1110: {ua: "Інкерман", en: "Inkerman"},
        1111: {ua: "Керч", en: "Kerch"},
        1112: {ua: "Красногвардійське", en: "Krasnogvardiyske"},
        1113: {ua: "Красноперекопськ", en: "Krasnoperekopsk"},
        1114: {ua: "Орджонікідзе", en: "Ordzhonikidze"},
        1115: {ua: "Роздольне", en: "Rozdolne"},
        1116: {ua: "Саки", en: "Sakн"},
        1117: {ua: "Севастополь", en: "Sevastopol"},
        1118: {ua: "Сімферополь", en: "Simferopol"},
        1119: {ua: "Старий Крим", en: "Stary Krym"},
        1120: {ua: "Судак", en: "Sudak"},
        1121: {ua: "Феодосія", en: "Feodosiya"},
        1122: {ua: "Чорноморське", en: "Chornomorske"},
        1123: {ua: "Щолкіне", en: "Shcholkine"},
        1124: {ua: "Ялта", en: "Yalta"},

        1200: {ua: "Луганська", en: "Luhansk region"},
        1201: {ua: "Алмазна", en: "Almazna"},
        1202: {ua: "Алчевськ", en: "Alchevsk"},
        1203: {ua: "Антрацит", en: "Anthratsyt"},
        1204: {ua: "Артемівськ", en: "Artemivsk"},
        1205: {ua: "Брянка", en: "Bryanka"},
        1206: {ua: "Вахрушеве", en: "Vakhrushevo"},
        1207: {ua: "Гірне", en: "Girne"},
        1208: {ua: "Гірське", en: "Girske"},
        1209: {ua: "Зимогір'я", en: "Zymohirya"},
        1210: {ua: "Золоте", en: "Zymohirya"},
        1211: {ua: "Зоринськ", en: "Zorynsk"},
        1212: {ua: "Ірміно", en: "Irmino"},
        1213: {ua: "Кадіївка", en: "Kadiivka"},
        1214: {ua: "Кіровськ", en: "Kirovsk"},
        1215: {ua: "Краснодон", en: "Krasnodon"},
        1216: {ua: "Кремінна", en: "Kreminna"},
        1217: {ua: "Лисичанськ", en: "Lysychansk"},
        1218: {ua: "Луганськ", en: "Luhansk"},
        1219: {ua: "Лутугине", en: "Lutugine"},
        1220: {ua: "Міусинськ", en: "Miusynsk"},
        1221: {ua: "Молодогвардійськ", en: "Molodogvardiysk"},
        1222: {ua: "Новодружеськ", en: "Novodruzhesk"},
        1223: {ua: "Новопсков", en: "Novopskov"},
        1224: {ua: "Олександрівськ", en: "Oleksandrivsk"},
        1225: {ua: "Первомайськ", en: "Pervomaisk"},
        1226: {ua: "Перевальськ", en: "Perevalsk"},
        1227: {ua: "Петрівське", en: "Petrivske"},
        1228: {ua: "Попасна", en: "Popasna"},
        1229: {ua: "Привілля", en: "Pryvillya"},
        1230: {ua: "Ровеньки", en: "Rovenky"},
        1231: {ua: "Рубіжне", en: "Rubizhne"},
        1232: {ua: "Сватове", en: "Svatove"},
        1233: {ua: "Свердловськ", en: "Sverdlovsk"},
        1234: {ua: "Сєверодонецьк", en: "Severodonetsk"},
        1235: {ua: "Станиця Луганська", en: "Stanytsia Luhansk"},
        1236: {ua: "Старобільськ", en: "Starobilsk"},
        1237: {ua: "Суходільськ", en: "Sukhodilsk"},
        1238: {ua: "Червоний Промінь", en: "Chervonyy Promin"},
        1239: {ua: "Червонопартизанськ", en: "Chervonopartyzansk"},
        1240: {ua: "Чорнухине", en: "Chornukhyne"},
        1241: {ua: "Щастя", en: "Shchastya"},

        1300: {ua: "Львівська", en: "Lviv region"},
        1301: {ua: "Белз", en: "Belz"},
        1302: {ua: "Бібрка", en: "Bibrka"},
        1303: {ua: "Борислав", en: "Boryslav"},
        1304: {ua: "Буськ", en: "Busk"},
        1305: {ua: "Великі Мости", en: "Velyki Mosty"},
        1306: {ua: "Винники", en: "Vynnyky"},
        1307: {ua: "Глиняни", en: "Hlynyany"},
        1308: {ua: "Городок", en: "Horodok"},
        1309: {ua: "Добромиль", en: "Dobromil"},
        1310: {ua: "Дрогобич", en: "Drohobych"},
        1311: {ua: "Дубляни", en: "Dublyany"},
        1312: {ua: "Жидачiв", en: "Zhydachyv"},
        1313: {ua: "Жовква", en: "Zhovkva"},
        1314: {ua: "Золочів", en: "Zolochiv"},
        1315: {ua: "Кам'янка-Бузька", en: "Kamyanka-Buzka"},
        1316: {ua: "Львів", en: "Lviv"},
        1317: {ua: "Миколаїв", en: "Mykolaiv"},
        1318: {ua: "Мостиська", en: "Mostyska"},
        1319: {ua: "Новий Розділ", en: "Noviy Rozdil"},
        1320: {ua: "Новояворівськ", en: "Novoyavorivsk"},
        1321: {ua: "Перемишляни", en: "Peremyslany"},
        1322: {ua: "Пустомити", en: "Pustomyty"},
        1323: {ua: "Рава-Руська", en: "Rava-Ruska"},
        1324: {ua: "Радехів", en: "Radekhiv"},
        1325: {ua: "Рудки", en: "Rudky"},
        1326: {ua: "Самбір", en: "Sambir"},
        1327: {ua: "Сколе", en: "Skole"},
        1328: {ua: "Сокаль", en: "Sokal"},
        1329: {ua: "Соснівка", en: "Sosnivka"},
        1330: {ua: "Старий Самбір", en: "Stary Sambir"},
        1331: {ua: "Стрий", en: "Stryi"},
        1332: {ua: "Трускавець", en: "Truskavets"},
        1333: {ua: "Угнів", en: "Ugniv"},
        1334: {ua: "Хирiв", en: "Khyriv"},
        1335: {ua: "Червоноград", en: "Chervonohrad"},
        1336: {ua: "Яворів", en: "Yavoriv"},

        1400: {ua: "Миколаївська", en: "Mykolaiv region"},
        1401: {ua: "Арбузинка", en: "Arbuzynka"},
        1402: {ua: "Баштанка", en: "Bashtanka"},
        1403: {ua: "Березнегувате", en: "Berezneguvate"},
        1404: {ua: "Братське", en: "Bratske"},
        1405: {ua: "Веселинове", en: "Veselynove"},
        1406: {ua: "Вознесенськ", en: "Voznesensk"},
        1407: {ua: "Врадіївка", en: "Vradiyivka"},
        1408: {ua: "Доманівка", en: "Domanivka"},
        1409: {ua: "Єланець", en: "Yelanets"},
        1410: {ua: "Казанка", en: "Kazanka"},
        1411: {ua: "Криве Озеро", en: "Kryve Ozero"},
        1412: {ua: "Миколаїв", en: "Mykolaiv"},
        1413: {ua: "Нова Одеса", en: "Nova Odesa"},
        1414: {ua: "Новий Буг", en: "Novyy Buh"},
        1415: {ua: "Олександрівка", en: "Oleksandrivka"},
        1416: {ua: "Очаків", en: "Ochakiv"},
        1417: {ua: "Первомайськ", en: "Pervomaisk"},
        1418: {ua: "Снігурівка", en: "Snihurivka"},
        1419: {ua: "Южноукраїнськ", en: "Yuzhnoukrainsk"},

        1500: {ua: "Одеська", en: "Odesa region"},
        1501: {ua: "Ананьїв", en: "Ananyiv"},
        1502: {ua: "Арциз", en: "Artsyz"},
        1503: {ua: "Балта", en: "Balta"},
        1504: {ua: "Березівка", en: "Berezivka"},
        1505: {ua: "Білгород-Дністровський", en: "Bilhorod-Dnistrovskyi"},
        1506: {ua: "Біляївка", en: "Bilyaivka"},
        1507: {ua: "Болград", en: "Bolgrad"},
        1508: {ua: "Великодолинське", en: "Velykodolynske"},
        1509: {ua: "Ізмаїл", en: "Ishmyil"},
        1510: {ua: "Кілія", en: "Kiliya"},
        1511: {ua: "Кодима", en: "Kodyma"},
        1512: {ua: "Любашівка", en: "Lyubashivka"},
        1513: {ua: "Овідіополь", en: "Ovidiopol"},
        1514: {ua: "Одеса", en: "Odesa"},
        1515: {ua: "Подільськ", en: "Podilsk"},
        1516: {ua: "Рені", en: "Reni"},
        1517: {ua: "Роздільна", en: "Rozdilna"},
        1518: {ua: "Татарбунари", en: "Tatarbunary"},
        1519: {ua: "Теплодар", en: "Teplodar"},
        1520: {ua: "Чорноморськ", en: "Chornomorsk"},
        1521: {ua: "Ширяєве", en: "Shyryaeve"},
        1522: {ua: "Южне", en: "Yuzhne"},

        1600: {ua:"Полтавська", en:"Poltava region"},
        1601: {ua:"Гадяч", en:"Hadyach"},
        1602: {ua:"Глобино", en:"Globyno"},
        1603: {ua:"Горішні Плавні", en:"Horishni Plavni"},
        1604: {ua:"Гребінка", en:"Hrebinka"},
        1605: {ua:"Градизьк", en:"Hradizk"},
        1606: {ua:"Дергачі", en:"Derhachi"},
        1607: {ua:"Диканька", en:"Dykanka"},
        1608: {ua:"Заводське", en:"Zavodske"},
        1609: {ua:"Зеньків", en:"Zenkiv"},
        1610: {ua:"Карлівка", en:"Karlivka"},
        1611: {ua:"Кобеляки", en:"Kobelyaky"},
        1612: {ua:"Котельва", en:"Kotelva"},
        1613: {ua:"Кременчуг", en:"Kremenchuh"},
        1614: {ua:"Лохвиця", en:"Lokhvytsa"},
        1615: {ua:"Лубни", en:"Lubny"},
        1616: {ua:"Миргород", en:"Myrhorod"},
        1617: {ua:"Нові Санжари", en:"Novi Sanzhary"},
        1618: {ua:"Пирятин", en:"Pyryatyn"},
        1619: {ua:"Полтава", en:"Poltava"},
        1620: {ua:"Решетилівка", en:"Reshetylivka"},
        1621: {ua:"Хорол", en:"Khorol"},
        1622: {ua:"Краснозаводське", en:"Krasnozavodske"},
        1623: {ua:"Слишне", en:"Slyshne"},

        1700:{ua:"Рівненська",en:"Rivne region"},
        1701:{ua:"Березине",en:"Berezyne"},
        1702:{ua:"Вараш",en:"Varash"},
        1703:{ua:"Володимирець",en:"Volodymyrets"},
        1704:{ua:"Дубно",en:"Dubno"},
        1705:{ua:"Дубровиця",en:"Dubrovytsa"},
        1706:{ua:"Зарічне",en:"Zarichne"},
        1707:{ua:"Здолбунів",en:"Zdolbuniv"},
        1708:{ua:"Квасилів",en:"Kvasylov"},
        1709:{ua:"Клевань",en:"Klevan"},
        1710:{ua:"Корець",en:"Korets"},
        1711:{ua:"Костопіль",en:"Kostopil"},
        1712:{ua:"Млинівці",en:"Mlynivtsi"},
        1713:{ua:"Острог",en:"Ostrog"},
        1714:{ua:"Радивилів",en:"Radyvyliv"},
        1715:{ua:"Рівне",en:"Rivne"},
        1716:{ua:"Рокитне",en:"Rokytne"},
        1717:{ua:"Сарни",en:"Sarny"},

        1800: {ua:"Сумська",en:"Sumy region"},
        1801: {ua:"Білопілля",en:"Bilopillya"},
        1802: {ua:"Буринь",en:"Buryn"},
        1803: {ua:"Ворожба",en:"Vorozhba"},
        1804: {ua:"Воронеж",en:"Voronezh"},
        1805: {ua:"Глухів",en:"Hlukhiv"},
        1806: {ua:"Дружба",en:"Druzhba"},
        1807: {ua:"Конотоп",en:"Konotop"},
        1808: {ua:"Краснопілля",en:"Krasnopilya"},
        1809: {ua:"Кролевець",en:"Krolevets"},
        1810: {ua:"Лебедин",en:"Lebedyn"},
        1811: {ua:"Охтирка",en:"Okhtyrka"},
        1812: {ua:"Путивль",en:"Putivl"},
        1813: {ua:"Ромни",en:"Romny"},
        1814: {ua:"Свеса",en:"Svesa"},
        1815: {ua:"Середина-Буда",en:"Seredyna-Buda"},
        1816: {ua:"Суми",en:"Sumy"},
        1817: {ua:"Тростянець",en:"Trostyanets"},
        1818: {ua:"Шостка",en:"Shostka"},


        1900: {ua:"Тернопільська",en:"Ternopil region"},
        1901: {ua:"Бережани",en:"Berezhany"},
        1902: {ua:"Борщів",en:"Borshchiv"},
        1903: {ua:"Бучач",en:"Buchach"},
        1904: {ua:"Велика Березовиця",en:"Velika Berezovitsa"},
        1905: {ua:"Вишнівець",en:"Vyshnivets"},
        1906: {ua:"Гусятин", en:"Husyatyn"},
        1907: {ua:"Заліщики",en:"Zalishchyki"},
        1908: {ua:"Збараж",en:"Zbarazh"},
        1909: {ua:"Зборів", en:"Zboriv"},
        1910: {ua:"Козова", en:"Kozova"},
        1911: {ua:"Копичинці", en:"Kopychyntsi"},
        1912: {ua:"Ланівці", en:"Lanivtsi"},
        1913: {ua:"Монастириська",en:"Monastyriska"},
        1914: {ua:"Підволочиск",en:"Pidvolochysk"},
        1915: {ua:"Підгайці",en:"Pidgaitsi"},
        1916: {ua:"Почаїв", en:"Pochaiv"},
        1917: {ua:"Скалат",en:"Skalat"},
        1918: {ua:"Теребовля",en:"Terebovlia"},
        1919: {ua:"Тернопіль", en:"Ternopil"},
        1920: {ua:"Хоростків", en:"Khorostkiv"},
        1921: {ua:"Чортків", en:"Chortkiv"},
        1922: {ua:"Шумськ",en:"Shumsk"},


        2000:{ua:"Харківська",en:"Kharkiv region"},
        2001:{ua:"Балаклія",en:"Balaklia"},
        2002:{ua:"Барвінкове",en:"Barvinkove"},
        2003:{ua:"Богодухів",en:"Bohodukhiv"},
        2004:{ua:"Валки", en:"Valky"},
        2005:{ua:"Великий Бурлук", en:"Velikiy Burluk"},
        2006:{ua:"Високий", en:"Vysoky"},
        2007:{ua:"Вовчанськ", en:"Vovchansk"},
        2008:{ua:"Дергачі", en:"Dergachi"},
        2009:{ua:"Зміїв", en:"Zmiyiv"},
        2010:{ua:"Ізюм",en:"Izyum"},
        2011:{ua:"Красноград", en:"Krasnograd"},
        2012:{ua:"Куп'янск", en:"Kupyansk"},
        2013:{ua:"Лозова",en:"Lozova"},
        2014:{ua:"Люботин", en:"Lubotyn"},
        2015:{ua:"Мерефа", en:"Merefa"},
        2016:{ua:"Нова Водолага", en:"Nova Vodolaha"},
        2017:{ua:"Первомайский",en:"Pervomayskyi"},
        2018:{ua:"Слобожанське",en:"Slobozhanske"},
        2019:{ua:"Солоницівка",en:"Solonytsivka"},
        2020:{ua:"Харків", en:"Kharkiv"},
        2021:{ua:"Чугуїв",en:"Chuhuiv"},

        2100:{ua:"Херсонська",en:"Kherson region"},
        2101:{ua:"Антонівка", en:"Antonivka"},
        2102:{ua:"Берислав",en:"Beryslav"},
        2103:{ua:"Білозерка",en:"Bilozerka"},
        2104:{ua:"Велика Лепетиха",en:"Velyka Lepetykha"},
        2105:{ua:"Велика Олександрівка",en:"Velyka Oleksandrivka"},
        2106:{ua:"Генічеськ", en:"Henichesk"},
        2107:{ua:"Гола Пристань", en:"Hola Prystan"},
        2108:{ua:"Каланчак", en:"Kalanchak"},
        2109:{ua:"Каховка", en:"Kakhovka"},
        2110:{ua:"Комишани",en:"Komyshany"},
        2111:{ua:"Нова Каховка", en:"Nova Kakhovka"},
        2112:{ua:"Нова Маячка", en:"Nova Mayachka"},
        2113:{ua:"Новоолексіївка",en:"Novooleksiyivka"},
        2114:{ua:"Новотроїцьке",en:"Novotroitske"},
        2115:{ua:"Олешки", en:"Oleshky"},
        2116:{ua:"Скадовськ", en:"Skadovsk"},
        2117:{ua:"Таврійськ",en:"Tavriysk"},
        2118:{ua:"Херсон",en:"Kherson"},

        2200:{ua:"Хмельницька",en:"Khmelnytskyi region"},
        2201:{ua:"Віньківці",en:"Vinkivtsi"},
        2202:{ua:"Волочиськ", en:"Vinkivtsi"},
        2203:{ua:"Деражня",en:"Derazhnya"},
        2204:{ua:"Дунаївці",en:"Dunaivtsi"},
        2205:{ua:"Ізяслав", en:"Izyaslav"},
        2206:{ua:"Кам'янець-Подільський", en:"Kamianets-Podilskyi"},
        2207:{ua:"Красилів",en:"Krasyliv"},
        2208:{ua:"Летичів",en:"Letychiv"},
        2209:{ua:"Нетішин",en:"Netishyn"},
        2210:{ua:"Полонне",en:"Polonne"},
        2211:{ua:"Понинка", en:"Ponynka"},
        2212:{ua:"Славута",en:"Slavuta"},
        2213:{ua:"Старокостянтинів",en:"Starokostiantyniv"},
        2214:{ua:"Теофіполь", en:"Teofipol"},
        2215:{ua:"Хмельницкий",en:"Khmelnytskyi"},
        2216:{ua:"Шепетівка",en:"Shepetivka"},

        2300:{ua:"Черкаська",en:"Cherkasy купшщт"},
        2301:{ua:"Ватутіне",en:"Vatutine"},
        2302:{ua:"Городище", en:"Horodyshche"},
        2303:{ua:"Драбів",en:"Drabiv"},
        2304:{ua:"Жашків",en:"Zhashkiv"},
        2305:{ua:"Звенигородка",en:"Zvenigorodka"},
        2306:{ua:"Золотоноша",en:"Zolotonosha"},
        2307:{ua:"Кам'янка",en:"Kamianka"},
        2308:{ua:"Канів",en:"Kaniv"},
        2309:{ua:"Корсунь-Шевченківський",en:"Korsun-Shevchenkivskyi"},
        2310:{ua:"Лисянка",en:"Lysyanka"},
        2311:{ua:"Маньківка",en:"Mankivka"},
        2312:{ua:"Монастирище",en:"Monastyryshche"},
        2313:{ua:"Сміла", en:"Smila"},
        2314:{ua:"Тальне",en:"Talne"},
        2315:{ua:"Умань",en:"Uman"},
        2316:{ua:"Христинівка",en:"Khrystynivka"},
        2317:{ua:"Черкаси",en:"Cherkasy"},
        2318:{ua:"Чигирин",en:"Chyhyryn"},
        2319:{ua:"Чорнобай",en:"Chornobay"},
        2320:{ua:"Шпола",en:"Shpola"},

        2400:{ua:"Чернівецька",en:"Chernivtsi"},
        2401:{ua:"Берегомет",en:""},
        2402:{ua:"Вашківці",en:""},
        2403:{ua:"Вижниця",en:""},
        2404:{ua:"Герцо",en:""},
        2405:{ua:"Глибока",en:""},
        2406:{ua:"Заставна",en:""},
        2407:{ua:"Кельменці",en:""},
        2408:{ua:"Кіцмань",en:""},
        2409:{ua:"Красноїльськ",en:""},
        2410:{ua:"Новодністровськ",en:""},
        2411:{ua:"Новоселиця",en:""},
        2412:{ua:"Путила",en:""},
        2413:{ua:"Сокиряни",en:""},
        2414:{ua:"Сторожинець",en:""},
        2415:{ua:"Хотин", en:""},
        2416:{ua:"Чернівці",en:"Chernivtsi"},

        2500:{ua:"Чернігівська",en:""},
        2501:{ua:"Бахмач",en:""},
        2502:{ua:"Бобровица",en:""},
        2503:{ua:"Борзна",en:""},
        2504:{ua:"Огородная",en:""},
        2505:{ua:"Десна",en:""},
        2506:{ua:"Ичня",en:""},
        2507:{ua:"Козелец",en:""},
        2508:{ua:"Корюковка",en:""},
        2509:{ua:"Меня",en:""},
        2510:{ua:"Нежин",en:""},
        2511:{ua:"Новгород-Северский",en:""},
        2512:{ua:"Прилуки",en:""},
        2513:{ua:"Седнев",en:""},
        2514:{ua:"Семеновка",en:""},
        2515:{ua:"Чернигов",en:""},
        2516:{ua:"Щорс",en:""},
}
