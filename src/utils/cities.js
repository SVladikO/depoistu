
const languageKey = 'ua';

export const convertCitiesIds = (cityIds) => {
    const city = {};

    cityIds.sort((a, b) => a > b).forEach(cityId => {
        const regionId = cityId - (cityId % 100);
        const regionName = cities[regionId][languageKey];
        city[regionName] = [
            ...(city[regionName] || []),
            {name: cities[cityId][languageKey], id: cityId}
        ];
    })

    return city;
}

export const getCityNameById = key => {
    return cities[key][languageKey];
}

export const getAllCities = () => {
    return convertCitiesIds(Object.keys(cities))
}

const cities = {
        100: {ua: "Івано-Франківська", en: ""},
        101: {ua: "Богородчани", en: ""},
        102: {ua: "Болехів", en: ""},
        103: {ua: "Бурштин", en: ""},
        104: {ua: "Галич", en: ""},
        105: {ua: "Городенка", en: ""},
        106: {ua: "Делятин", en: ""},
        107: {ua: "Дземброня", en: ""},
        108: {ua: "Долина", en: ""},
        109: {ua: "Івано-Франківськ", en: ""},
        110: {ua: "Калуш", en: ""},
        111: {ua: "Коломия", en: ""},
        112: {ua: "Косів", en: ""},
        113: {ua: "Ланчин", en: ""},
        114: {ua: "Надвірна", en: ""},
        115: {ua: "Перегінське", en: ""},
        116: {ua: "Рогатин", en: ""},
        117: {ua: "Снятин", en: ""},
        118: {ua: "Стебник", en: ""},
        119: {ua: "Тисмениця", en: ""},
        120: {ua: "Тлумач", en: ""},
        121: {ua: "Яремче", en: ""},

        200: {ua: "Вінницька", en: ""},
        201: {ua: "Бар", en: ""},
        202: {ua: "Бершадь", en: ""},
        203: {ua: "Війтівці", en: ""},
        204: {ua: "Вінниця", en: ""},
        205: {ua: "Гайсин", en: ""},
        206: {ua: "Гнівань", en: ""},
        207: {ua: "Городок", en: ""},
        208: {ua: "Жмеринка", en: ""},
        209: {ua: "Іллінці", en: ""},
        210: {ua: "Калинівка", en: ""},
        211: {ua: "Козятин", en: ""},
        212: {ua: "Крижопіль", en: ""},
        213: {ua: "Ладижин", en: ""},
        214: {ua: "Липовець", en: ""},
        215: {ua: "Могилів-Подільський", en: ""},
        216: {ua: "Немирів", en: ""},
        217: {ua: "Пісочин", en: ""},
        218: {ua: "Погребище", en: ""},
        219: {ua: "Стрижавка", en: ""},
        220: {ua: "Тернівка", en: ""},
        221: {ua: "Тульчин", en: ""},
        222: {ua: "Хмільник", en: ""},
        223: {ua: "Чечельник", en: ""},
        224: {ua: "Шаргород", en: ""},
        225: {ua: "Ямпіль", en: ""},

        300: {ua: "Волинська", en: ""},
        301: {ua: "Броди", en: ""},
        302: {ua: "Володимир", en: ""},
        303: {ua: "Горохів", en: ""},
        304: {ua: "Іваничі", en: ""},
        305: {ua: "Камінь-Каширський", en: ""},
        306: {ua: "Ківерці", en: ""},
        307: {ua: "Ковель", en: ""},
        308: {ua: "Кременець", en: ""},
        309: {ua: "Луцьк", en: ""},
        310: {ua: "Любешів", en: ""},
        311: {ua: "Любомль", en: ""},
        312: {ua: "Маневичі", en: ""},
        313: {ua: "Нововолинськ", en: ""},
        314: {ua: "Ратне", en: ""},
        315: {ua: "Рожище", en: ""},
        316: {ua: "Стара Вижівка", en: ""},
        317: {ua: "Турійськ", en: ""},
        318: {ua: "Устилуг", en: ""},
        319: {ua: "Цумань", en: ""},
        320: {ua: "Шацьк", en: ""},

        400: {ua: "Дніпропетровська", en: ""},
        401: {ua: "Апостолове", en: ""},
        402: {ua: "Богуслав", en: ""},
        403: {ua: "Верхньодніпровськ", en: ""},
        404: {ua: "Вільногірськ", en: ""},
        405: {ua: "Дніпро", en: ""},
        406: {ua: "Жовті Води", en: ""},
        407: {ua: "Кам'янське", en: ""},
        408: {ua: "Кривий Ріг", en: ""},
        409: {ua: "Марганець", en: ""},
        410: {ua: "Нікополь", en: ""},
        411: {ua: "Новомосковськ", en: ""},
        412: {ua: "П'ятихатки", en: ""},
        413: {ua: "Павлоград", en: ""},
        414: {ua: "Перещепине", en: ""},
        415: {ua: "Першотравенськ", en: ""},
        416: {ua: "Підгородне", en: ""},
        417: {ua: "Синельникове", en: ""},
        418: {ua: "Чаплинка", en: ""},

        500: {ua: "Донецька", en: ""},
        501: {ua: "Авдіївка", en: ""},
        502: {ua: "Амвросіївка", en: ""},
        503: {ua: "Бахмут", en: ""},
        504: {ua: "Волноваха", en: ""},
        505: {ua: "Вугледар", en: ""},
        506: {ua: "Горлівка", en: ""},
        507: {ua: "Дебальцеве", en: ""},
        508: {ua: "Добропілля", en: ""},
        509: {ua: "Докучаєвськ", en: ""},
        510: {ua: "Донецьк", en: ""},
        511: {ua: "Дружківка", en: ""},
        512: {ua: "Єнакієве", en: ""},
        513: {ua: "Зугрес", en: ""},
        515: {ua: "Кіровське", en: ""},
        516: {ua: "Костянтинівка", en: ""},
        517: {ua: "Краматорськ", en: ""},
        518: {ua: "Красний лиман", en: ""},
        519: {ua: "Майорськ", en: ""},
        520: {ua: "Макіївка", en: ""},
        521: {ua: "Мар'їнка", en: ""},
        522: {ua: "Маріуполь", en: ""},
        523: {ua: "Мирноград", en: ""},
        524: {ua: "Новоазовськ", en: ""},
        525: {ua: "Новогродівка", en: ""},
        526: {ua: "Олександрівка", en: ""},
        527: {ua: "Покровськ", en: ""},
        528: {ua: "Селидове", en: ""},
        529: {ua: "Слов'янськ", en: ""},
        530: {ua: "Сніжне", en: ""},
        531: {ua: "Соледар", en: ""},
        532: {ua: "Старобешеве", en: ""},
        533: {ua: "Торез", en: ""},
        534: {ua: "Торецьк", en: ""},
        535: {ua: "Харцизьк", en: ""},
        536: {ua: "Шахтарськ", en: ""},
        537: {ua: "Ясинувата", en: ""},

        600: {ua: "Житомирська", en: ""},
        601: {ua: "Андрушівка", en: ""},
        602: {ua: "Баранівка", en: ""},
        603: {ua: "Бердичів", en: ""},
        604: {ua: "Володарськ-Волинський", en: ""},
        605: {ua: "Ємільчине", en: ""},
        606: {ua: "Житомир", en: ""},
        607: {ua: "Іршанськ", en: ""},
        608: {ua: "Коростень", en: ""},
        609: {ua: "Коростишів", en: ""},
        610: {ua: "Малин", en: ""},
        611: {ua: "Новоград-Волинський", en: ""},
        612: {ua: "Носівки", en: ""},
        613: {ua: "Овруч", en: ""},
        614: {ua: "Олевськ", en: ""},
        615: {ua: "Попільня", en: ""},
        616: {ua: "Радомишль", en: ""},
        617: {ua: "Романів", en: ""},
        618: {ua: "Черняхів", en: ""},

        700: {ua: "Закарпатська", en: ""},
        701: {ua: "Берегове", en: ""},
        702: {ua: "Буштино", en: ""},
        703: {ua: "Великий Бичків", en: ""},
        704: {ua: "Виноградів", en: ""},
        705: {ua: "Вишково", en: ""},
        706: {ua: "Дубове", en: ""},
        707: {ua: "Іршава", en: ""},
        708: {ua: "Королево", en: ""},
        709: {ua: "Міжгір'я", en: ""},
        710: {ua: "Мукачеве", en: ""},
        711: {ua: "Перечин", en: ""},
        712: {ua: "Рахів", en: ""},
        713: {ua: "Свалява", en: ""},
        714: {ua: "Солотвино", en: ""},
        715: {ua: "Тячів", en: ""},
        716: {ua: "Ужгород", en: ""},
        717: {ua: "Хуст", en: ""},
        718: {ua: "Чоп", en: ""},

        800: {ua: "Запорізька", en: ""},
        801: {ua: "Бердянськ", en: ""},
        802: {ua: "Біляївка", en: ""},
        803: {ua: "Василівка", en: ""},
        804: {ua: "Веселе", en: ""},
        805: {ua: "Вільнянськ", en: ""},
        806: {ua: "Гуляйполе", en: ""},
        807: {ua: "Дніпрорудне", en: ""},
        808: {ua: "Енергодар", en: ""},
        809: {ua: "Запоріжжя", en: ""},
        810: {ua: "Кам'янка-Дніпровська", en: ""},
        811: {ua: "Куйбишеве", en: ""},
        812: {ua: "Кушугум", en: ""},
        813: {ua: "Мелітополь", en: ""},
        814: {ua: "Михайлівка", en: ""},
        815: {ua: "Молочанськ", en: ""},
        816: {ua: "Оріхів", en: ""},
        817: {ua: "Пологи", en: ""},
        818: {ua: "Приморськ", en: ""},
        819: {ua: "Розівка", en: ""},
        820: {ua: "Токмак", en: ""},
        821: {ua: "Якимівка", en: ""},

        900: {ua: "Кіровоградська", en: ""},
        901: {ua: "Бобринець", en: ""},
        902: {ua: "Власівка", en: ""},
        903: {ua: "Гайворон", en: ""},
        904: {ua: "Долинська", en: ""},
        905: {ua: "Знам'янка", en: ""},
        906: {ua: "Кропивницький", en: ""},
        907: {ua: "Мала Виска", en: ""},
        908: {ua: "Нова Прага", en: ""},
        909: {ua: "Нове", en: ""},
        910: {ua: "Новоархангельськ", en: ""},
        911: {ua: "Новомиргород", en: ""},
        912: {ua: "Новоукраїнка", en: ""},
        913: {ua: "Олександрія", en: ""},
        914: {ua: "Первомайськ", en: ""},
        915: {ua: "Петрово", en: ""},
        916: {ua: "Помічна", en: ""},
        917: {ua: "Світловодськ", en: ""},
        918: {ua: "Смолине", en: ""},

        1000: {ua: "Київська", en: ""},
        1001: {ua: "Баришівка", en: ""},
        1002: {ua: "Березань", en: ""},
        1003: {ua: "Біла Церква", en: ""},
        1004: {ua: "Бориспіль", en: ""},
        1005: {ua: "Бородянка", en: ""},
        1006: {ua: "Боярка", en: ""},
        1007: {ua: "Бровари", en: ""},
        1008: {ua: "Буча", en: ""},
        1009: {ua: "Васильків", en: ""},
        1010: {ua: "Вишгород", en: ""},
        1011: {ua: "Вишневе", en: ""},
        1012: {ua: "Володарка", en: ""},
        1013: {ua: "Глеваха", en: ""},
        1014: {ua: "Гостомель", en: ""},
        1015: {ua: "Іваньків", en: ""},
        1016: {ua: "Ірпінь", en: ""},
        1017: {ua: "Кагарлик", en: ""},
        1018: {ua: "Київ", en: ""},
        1019: {ua: "Коцюбинське", en: ""},
        1020: {ua: "Макарів", en: ""},
        1021: {ua: "Миронівка", en: ""},
        1022: {ua: "Обухів", en: ""},
        1023: {ua: "Переяслав-Хмельницький", en: ""},
        1024: {ua: "Прип'ять", en: ""},
        1025: {ua: "Ржищів", en: ""},
        1026: {ua: "Рокитне", en: ""},
        1027: {ua: "Сквира", en: ""},
        1028: {ua: "Славутич", en: ""},
        1029: {ua: "Тараща", en: ""},
        1030: {ua: "Тетіїв", en: ""},
        1031: {ua: "Узин", en: ""},
        1032: {ua: "Українка", en: ""},
        1033: {ua: "Фастів", en: ""},
        1034: {ua: "Чорнобиль", en: ""},
        1035: {ua: "Яготин", en: ""},

        1100: {ua: "Крим (АРК)", en: ""},
        1101: {ua: "Алупка", en: ""},
        1102: {ua: "Алушта", en: ""},
        1103: {ua: "Армянськ", en: ""},
        1104: {ua: "Бахчисарай", en: ""},
        1105: {ua: "Берегове", en: ""},
        1106: {ua: "Білогірськ", en: ""},
        1107: {ua: "Джанкой", en: ""},
        1108: {ua: "Євпаторія", en: ""},
        1109: {ua: "Знам'янка", en: ""},
        1110: {ua: "Інкерман", en: ""},
        1111: {ua: "Керч", en: ""},
        1112: {ua: "Красногвардійське", en: ""},
        1113: {ua: "Красноперекопськ", en: ""},
        1114: {ua: "Орджонікідзе", en: ""},
        1115: {ua: "Роздольне", en: ""},
        1116: {ua: "Саки", en: ""},
        1117: {ua: "Севастополь", en: ""},
        1118: {ua: "Сімферополь", en: ""},
        1119: {ua: "Старий Крим", en: ""},
        1120: {ua: "Судак", en: ""},
        1121: {ua: "Феодосія", en: ""},
        1122: {ua: "Чорноморське", en: ""},
        1123: {ua: "Щолкіне", en: ""},
        1124: {ua: "Ялта", en: ""},

        1200: {ua: "Луганська", en: ""},
        1201: {ua: "Алмазна", en: ""},
        1202: {ua: "Алчевськ", en: ""},
        1203: {ua: "Антрацит", en: ""},
        1204: {ua: "Артемівськ", en: ""},
        1205: {ua: "Брянка", en: ""},
        1206: {ua: "Вахрушеве", en: ""},
        1207: {ua: "Гірне", en: ""},
        1208: {ua: "Гірське", en: ""},
        1209: {ua: "Зимогір'я", en: ""},
        1210: {ua: "Золоте", en: ""},
        1211: {ua: "Зоринськ", en: ""},
        1212: {ua: "Ірміно", en: ""},
        1213: {ua: "Кадіївка", en: ""},
        1214: {ua: "Кіровськ", en: ""},
        1215: {ua: "Краснодон", en: ""},
        1216: {ua: "Кремінна", en: ""},
        1217: {ua: "Лисичанськ", en: ""},
        1218: {ua: "Луганськ", en: ""},
        1219: {ua: "Лутугине", en: ""},
        1220: {ua: "Міусинськ", en: ""},
        1221: {ua: "Молодогвардійськ", en: ""},
        1222: {ua: "Новодружеськ", en: ""},
        1223: {ua: "Новопсков", en: ""},
        1224: {ua: "Олександрівськ", en: ""},
        1225: {ua: "Первомайськ", en: ""},
        1226: {ua: "Перевальськ", en: ""},
        1227: {ua: "Петрівське", en: ""},
        1228: {ua: "Попасна", en: ""},
        1229: {ua: "Привілля", en: ""},
        1230: {ua: "Ровеньки", en: ""},
        1231: {ua: "Рубіжне", en: ""},
        1232: {ua: "Сватове", en: ""},
        1233: {ua: "Свердловськ", en: ""},
        1234: {ua: "Сєверодонецьк", en: ""},
        1235: {ua: "Станиця Луганська", en: ""},
        1236: {ua: "Старобільськ", en: ""},
        1237: {ua: "Суходільськ", en: ""},
        1238: {ua: "Червоний Промінь", en: ""},
        1239: {ua: "Червонопартизанськ", en: ""},
        1240: {ua: "Червонопартизанськ", en: ""},
        1241: {ua: "Щастя", en: ""},

        1300: {ua: "Львівська", en: ""},
        1301: {ua: "Белз", en: ""},
        1302: {ua: "Бібрка", en: ""},
        1303: {ua: "Борислав", en: ""},
        1304: {ua: "Буськ", en: ""},
        1305: {ua: "Великі Мости", en: ""},
        1306: {ua: "Винники", en: ""},
        1307: {ua: "Глиняни", en: ""},
        1308: {ua: "Городок", en: ""},
        1309: {ua: "Добромиль", en: ""},
        1310: {ua: "Дрогобич", en: ""},
        1311: {ua: "Дубляни", en: ""},
        1312: {ua: "Жидачiв", en: ""},
        1313: {ua: "Жовква", en: ""},
        1314: {ua: "Золочів", en: ""},
        1315: {ua: "Кам'янка-Бузька", en: ""},
        1316: {ua: "Львів", en: ""},
        1317: {ua: "Миколаїв", en: ""},
        1318: {ua: "Мостиська", en: ""},
        1319: {ua: "Новий Розділ", en: ""},
        1320: {ua: "Новояворівськ", en: ""},
        1321: {ua: "Перемишляни", en: ""},
        1322: {ua: "Пустомити", en: ""},
        1323: {ua: "Рава-Руська", en: ""},
        1324: {ua: "Радехів", en: ""},
        1325: {ua: "Рудки", en: ""},
        1326: {ua: "Самбір", en: ""},
        1327: {ua: "Сколе", en: ""},
        1328: {ua: "Сокаль", en: ""},
        1329: {ua: "Соснівка", en: ""},
        1330: {ua: "Старий Самбір", en: ""},
        1331: {ua: "Стрий", en: ""},
        1332: {ua: "Трускавець", en: ""},
        1333: {ua: "Угнів", en: ""},
        1334: {ua: "Хирiв", en: ""},
        1335: {ua: "Червоноград", en: ""},
        1336: {ua: "Яворів", en: ""},

        1400: {ua: "Миколаївська", en: ""},
        1401: {ua: "Арбузинка", en: ""},
        1402: {ua: "Баштанка", en: ""},
        1403: {ua: "Березнегувате", en: ""},
        1404: {ua: "Братське", en: ""},
        1405: {ua: "Веселинове", en: ""},
        1406: {ua: "Вознесенськ", en: ""},
        1407: {ua: "Врадіївка", en: ""},
        1408: {ua: "Доманівка", en: ""},
        1409: {ua: "Єланець", en: ""},
        1410: {ua: "Казанка", en: ""},
        1411: {ua: "Криве Озеро", en: ""},
        1412: {ua: "Миколаїв", en: ""},
        1413: {ua: "Нова Одеса", en: ""},
        1414: {ua: "Новий Буг", en: ""},
        1415: {ua: "Олександрівка", en: ""},
        1416: {ua: "Очаків", en: ""},
        1417: {ua: "Первомайськ", en: ""},
        1418: {ua: "Снігурівка", en: ""},
        1419: {ua: "Южноукраїнськ", en: ""},

        1500: {ua: "Одеська", en: ""},
        1501: {ua: "Ананьїв", en: ""},
        1502: {ua: "Арциз", en: ""},
        1503: {ua: "Балта", en: ""},
        1504: {ua: "Березівка", en: ""},
        1505: {ua: "Білгород-Дністровський", en: ""},
        1506: {ua: "Біляївка", en: ""},
        1507: {ua: "Болград", en: ""},
        1508: {ua: "Великодолинське", en: ""},
        1509: {ua: "Ізмаїл", en: ""},
        1510: {ua: "Кілія", en: ""},
        1511: {ua: "Кодима", en: ""},
        1512: {ua: "Любашівка", en: ""},
        1513: {ua: "Овідіополь", en: ""},
        1514: {ua: "Одеса", en: ""},
        1515: {ua: "Подільськ", en: ""},
        1516: {ua: "Рені", en: ""},
        1517: {ua: "Роздільна", en: ""},
        1518: {ua: "Татарбунари", en: ""},
        1519: {ua: "Теплодар", en: ""},
        1520: {ua: "Чорноморськ", en: ""},
        1521: {ua: "Ширяєве", en: ""},
        1522: {ua: "Южне", en: ""},

        1600: {ua:"Полтавська", en:""},
        1601: {ua:"Гадяч", en:""},
        1602: {ua:"Глобино", en:""},
        1603: {ua:"Горишние", en:""},
        1604: {ua:"Плавные", en:""},
        1605: {ua:"Градижск", en:""},
        1606: {ua:"Гребенка", en:""},
        1607: {ua:"Дергачи", en:""},
        1608: {ua:"Диканька", en:""},
        1609: {ua:"Зеньков", en:""},
        1610: {ua:"Карловка", en:""},
        1611:  {ua:"Кобеляки", en:""},
        1612: {ua:"Котельва", en:""},
        1613: {ua:"Кременчуг", en:""},
        1614: {ua:"Лохвица", en:""},
        1615: {ua:"Лубны", en:""},
        1616: {ua:"Миргород", en:""},
        1617:  {ua:"Новые Санжары", en:""},
        1618:  {ua:"Пирятин", en:""},
        1619: {ua:"Полтава", en:""},
        1620: {ua:"Решетиловка", en:""},
        1621: {ua:"Хорол", en:""},
        1622: {ua:"Краснозаводское", en:""},
        1623: {ua:"Слышное", en:""},

        1700:{ua:"Рівненська",en:""},
        1701:{ua:"Березно",en:""},
        1702:{ua:"Вараш",en:""},
        1703:{ua:"Владимирец",en:""},
        1704:{ua:"Дубно",en:""},
        1705:{ua:"Дубровица",en:""},
        1706:{ua:"Заречное",en:""},
        1707:{ua:"Здолбунов",en:""},
        1708:{ua:"Квасилов",en:""},
        1709:{ua:"Клевань",en:""},
        1710:{ua:"Корец",en:""},
        1711:{ua:"Костополь",en:""},
        1712:{ua:"Мельниц",en:""},
        1713:{ua:"Острог",en:""},
        1714:{ua:"Радивилов",en:""},
        1715:{ua:"Ровно",en:""},
        1716:{ua:"Рокитное",en:""},
        1717:{ua:"Сарны",en:""},

        1800: {ua:"Сумська",en:""},
        1801: {ua:"Белополье",en:""},
        1802: {ua:"Бурынь",en:""},
        1803: {ua:"Гадание",en:""},
        1804: {ua:"Воронеж",en:""},
        1805: {ua:"Глухов",en:""},
        1806: {ua:"Дружба",en:""},
        1807: {ua:"Конотоп",en:""},
        1808: {ua:"Краснополье",en:""},
        1809: {ua:"Кролевец",en:""},
        1810: {ua:"Лебедин",en:""},
        1811: {ua:"Ахтырка",en:""},
        1812: {ua:"Путивль",en:""},
        1813: {ua:"Ромны",en:""},
        1814: {ua:"Свеса",en:""},
        1815: {ua:"Середина-Буда",en:""},
        1816: {ua:"Сумы",en:""},
        1817: {ua:"Тростянец",en:""},
        1818: {ua:"Шостка",en:""},


        1900: {ua:"Тернопільська",en:""},
        1901: {ua:"Бережаны",en:""},
        1902: {ua:"Борщев",en:""},
        1903: {ua:"Бучач",en:""},
        1904: {ua:"Большая",en:""},
        1905: {ua:"Березовица",en:""},
        1906: {ua:"Гусятин", en:""},
        1907: {ua:"Залещики",en:""},
        1908: {ua:"Сбораж",en:""},
        1909: {ua:"Собрания", en:""},
        1910: {ua:"Козовая", en:""},
        1911: {ua:"Копычинцы", en:""},
        1912: {ua:"Лановцы", en:""},
        1913: {ua:"Монастыриска",en:""},
        1914: {ua:"Подволочиск",en:""},
        1915: {ua:"Подгайцы",en:""},
        1916: {ua:"Почаев", en:""},
        1917: {ua:"Скалат",en:""},
        1918: {ua:"Теребовля",en:""},
        1919: {ua:"Тернополь", en:""},
        1920: {ua:"Хоростков", en:""},
        1921: {ua:"Чортков", en:""},
        1922: {ua:"Шумск",en:""},


        2000:{ua:"Харківська",en:""},
        2001:{ua:"Балаклея",en:""},
        2002:{ua:"Барвенково",en:""},
        2003:{ua:"Богодухов",en:""},
        2004:{ua:"Валки", en:""},
        2005:{ua:"Большой Бурлук", en:""},
        2006:{ua:"Высокий", en:""},
        2007:{ua:"Волчанск", en:""},
        2008:{ua:"Дергачи", en:""},
        2009:{ua:"Змиев", en:""},
        2010:{ua:"Изюм",en:""},
        2011:{ua:"Красноград", en:""},
        2012:{ua:"Купянск", en:""},
        2013:{ua:"Лозовая",en:""},
        2014:{ua:"Люботин", en:""},
        2015:{ua:"Мерефа", en:""},
        2016:{ua:"Новая Водолага", en:""},
        2017:{ua:"Первомайский",en:""},
        2018:{ua:"Слобожанское",en:""},
        2019:{ua:"Солоницевка",en:""},
        2020:{ua:"Харьков", en:""},
        2021:{ua:"Чугуев",en:""},

        2100:{ua:"Херсонська",en:""},
        2101:{ua:"Антоновка", en:""},
        2102:{ua:"Берислав",en:""},
        2103:{ua:"Белозерка",en:""},
        2104:{ua:"Большая Лепетиха",en:""},
        2105:{ua:"Большая Александровка",en:""},
        2106:{ua:"Геническ", en:""},
        2107:{ua:"Голая Пристань", en:""},
        2108:{ua:"Каланчак", en:""},
        2109:{ua:"Каховка", en:""},
        2110:{ua:"Камышаны",en:""},
        2111:{ua:"Новая Каховка", en:""},
        2112:{ua:"Новая Маячка", en:""},
        2113:{ua:"Новоалексеевка",en:""},
        2114:{ua:"Новотроицкое",en:""},
        2115:{ua:"Олешки", en:""},
        2116:{ua:"Скадовск", en:""},
        2117:{ua:"Таврийск",en:""},
        2118:{ua:"Херсон",en:""},

        2200:{ua:"Хмельницька",en:""},
        2201:{ua:"Виньковцы",en:""},
        2202:{ua:"Волочиск", en:""},
        2203:{ua:"Деражня",en:""},
        2204:{ua:"Дунаевцы",en:""},
        2205:{ua:"Изяслав", en:""},
        2206:{ua:"Каменец-Подольский", en:""},
        2207:{ua:"Красилов",en:""},
        2208:{ua:"Летичев",en:""},
        2209:{ua:"Нетешин",en:""},
        2210:{ua:"Пленное",en:""},
        2211:{ua:"Понинка", en:""},
        2212:{ua:"Славута",en:""},
        2213:{ua:"Староконстантинов",en:""},
        2214:{ua:"Теофиполь", en:""},
        2215:{ua:"Хмельницкий",en:""},
        2216:{ua:"Шепетовка",en:""},

        2300:{ua:"Черкаська",en:""},
        2301:{ua:"Ватутино",en:""},
        2302:{ua:"Городище", en:""},
        2303:{ua:"Драбов",en:""},
        2304:{ua:"Жашков",en:""},
        2305:{ua:"Звенигородка",en:""},
        2306:{ua:"Золотоноша",en:""},
        2307:{ua:"Каменка",en:""},
        2308:{ua:"Канев",en:""},
        2309:{ua:"Корсунь-Шевченковский",en:""},
        2310:{ua:"Лысянка",en:""},
        2311:{ua:"Маньковка",en:""},
        2312:{ua:"Монастырище",en:""},
        2313:{ua:"Смело", en:""},
        2314:{ua:"Тальное",en:""},
        2315:{ua:"Умань",en:""},
        2316:{ua:"Христиновка",en:""},
        2317:{ua:"Черкассы",en:""},
        2318:{ua:"Чигирин",en:""},
        2319:{ua:"Чернобай",en:""},
        2320:{ua: "Шпола",en:""},

        2400:{ua:"Чернівецька",en:""},
        2401:{ua:"Берегомет",en:""},
        2402:{ua:"Вашковцы",en:""},
        2403:{ua:"Вижница",en:""},
        2404:{ua:"Герцо",en:""},
        2405:{ua:"Глубокая",en:""},
        2406:{ua:"Залогово",en:""},
        2407:{ua:"Кельменцы",en:""},
        2408:{ua:"Кицмань",en:""},
        2409:{ua:"Красноильск",en:""},
        2410:{ua:"Новоднестровск",en:""},
        2411:{ua:"Новоселица",en:""},
        2412:{ua:"Путила",en:""},
        2413:{ua:"Топоры",en:""},
        2414:{ua:"Сторожинец",en:""},
        2415:{ua:"Хотин", en:""},
        2416:{ua:"Черновцы",en:""},

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
