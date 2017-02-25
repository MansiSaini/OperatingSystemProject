

//*************************************************************************************************************

var psHashMap = {};
psHashMap[0]= "bankAccount.js";
psHashMap[1]= "contactManager.js";
psHashMap[2]= "securityFile.js";
psHashMap[3]= "findRoutes.js";
psHashMap[4]= "calculateVectors.js";
psHashMap[5]= "calculateStats.js";
psHashMap[6]= "phoneBook.js";
psHashMap[7]= "characterCounter.js";
psHashMap[8]= "copyOver.js";


// ***************************************************************************************************************
var acctTrans = [
42, 107, -142, -33, 192, -19, 186, 137, 97, -68, 169, 78, 85, 92,124,128,141,-109,-157,-30,84,93,190,-9,196,-139,
144,-155,-166,-183,-163,-128,33,-9,-40,167,69,163,14,176,165,36,9,115,180,72,-145,147,73,120,-53,131,27,-150,139,
-28,-119,101,-16,-194,41,175,152,133,166,-128,129,101,-150,-116,170,41,-37,-9,61,111,-57,-57,53,-60,-35,168,126,-111,
-95,165,35,93,158,184,79,44,-30,-27,121,-179,-6,-124,-163,-7 ];

function getAccInfo(){
  return acctTrans;
}

function getAccLength() {
	return acctTrans.length;
}

// ***************************************************************************************************************
var contacts = ["Mansi Saini",
                "Harish Chowdhary",
                "Patrick Starr",
                "Steve Jobs",
                "Sannuj Singhal",
                "Karan Gupta",
                "Mayank Sachdeva",
                "Nimitha Ramesh",
                "Rose Allen",
                "Kayla Hall",
                "Celeste Mica",
                "Katelyn Adams",
                "Rachel Kelly",
                "Sam Davis",
                "Erik Torres",
                "Amber Talwar",
                "Maahi Tiwari",
                "Katie Smith",
                "Alex Thompson",
                "Eugene Crabs",
                "Arnold Lang",
                "Mickey Singh",
                "Drake Bell",
                "Zach Efron",
                "Ryan Gosling",
                "Channing Tatum",
                "Jane Varga",
                "Minnie Mouse",
                "Bianca Gibson",
                "Alison Turner",
                "Michael Kors",
                "Zara Michaels",
                "Javiva Saini",
                "Myra Saini",
                "Akash Gupta",
                "Chicken McNuggets",
                "Sannuj Fatbutt",
                "Tina Fey",
                "Reese Witherspoon",
                "Robert Pattinson",
                "Justin Timberlake",
                "Mila Kunis",
                "Ashton Kutcher",
                "Jessica Baxtor",
                "Sammie Reyes",
                "Rodrigo Rodriguez",
                "Miles Tan",
                "Miguel Cruz",
                "Brandon Smith",
                "Yongcai Huang"
];

function getContacts(){
  return contacts;
}

function getContactLngth(){
  return contacts.length;
}
// ***************************************************************************************************************

var arraylistUser = [
"clawshortcrust",
"sordiniboar",
"anglestrip",
"informalmuch",
"customerssuckling",
"merryplants",
"membersdrizzly",
"coronagraphnavel",
"bellowingwobbling",
"chancefunding",
"bootedconcur",
"whistleligament",
"everestvapid",
"potplanitia",
"nominationworm",
"criteriawildebeest",
"smallpeeler",
"unmannedbite",
"readoctagon",
"iamsuperman",
"kneelkestrel",
"dingdongtime",
"carnotchromate",
"chromespud",
"shakinghinny",
"muddyhoop",
"sourdoughbargain",
"jukeboxsociable",
"threatencaper",
"equatorflickering"
];

var arraylistPass = [
"S28ecsCp",
"7nXex8rV",
"KFkWc4qK",
"9eEq2QEc",
"LLaSUVfn",
"nwSJzJBD",
"WCGUfJKF",
"9UukDUwn",
"jZPMknZz",
"em7k2xvu",
"WHdJcdQr",
"CYFHLqyk",
"n6ZA9NKL",
"StZdtEyT",
"7Bjpemyf",
"WKPQyJSq",
"6bJG9EUQ",
"3G2zXupD",
"U8pV2GtY",
"fVjDMrsv",
"8eeu3k87",
"B7LwZcBz",
"ELRmhRDU",
"faBnb6VX",
"YVfaZ5fZ",
"DgTPNPH3",
"KqK7cvqZ",
"HGtGVj2L",
"PKRQPqQG",
"2Z7kGvrC"
];

var securityList = [arraylistUser , arraylistPass];

var numberOfAccount = 30;

function getUsernames() {
	return arraylistUser;
}

function getPasswords() {
	return arraylistPass;
}


function getUsernameAtPos(pos) {
	return arraylistUser[pos];
}

function getPasswordAtPos(pos) {
	return arraylistPass[pos];
}

function getNumberOfAccount() {
	return numberOfAccount;
}

function setUsernameAndPasswrod(new_name, new_password, position) {
	arraylistUser[position] = new_name;
	arraylistPass[position] = new_password;
}

// ***************************************************************************************************************
var vector1 = [1,2];
var vector2 = [4,7];
var vector3 = [-3,-9];
var vector4 = [6,1];
var vector5 = [1,-6];
var vector6 = [4,-2];
var vector7 = [-10,-7];
var vector8 = [3,-8];
var vector9 = [5,0];
var vector10 = [2,6];
var vector11 = [7,-5];
var vector12 = [-2,-9];
var vector13 = [10,5];
var vector14 = [2,7];
var vector15 = [-1,2];
var vector16 = [-3,0];
var vector17 = [2,9];
var vector18 = [-7,-2];
var vector19 = [0,0];
var vector20 = [3,2];
var vector21 = [6,-9];
var vector22 = [-4,-1];
var vector23 = [0,-2];
var vector24 = [-5,4];
var vector25 = [3,4];
var vector26 = [0,-1];
var vector27 = [-3,5];
var vector28 = [9,-9];
var vector29 = [3,-1];
var vector30 = [-2,8];
var vector31 = [6,6];
var vector32 = [3,7];
var vector33 = [0,-4];
var vector34 = [-7,-9];
var vector35 = [4,4];
var vector36 = [7,0];
var vector37 = [-2,4];
var vector38 = [6,-1];
var vector39 = [2,-9];
var vector40 = [3,4];
var vector41 = [-1,-2];
var vector42 = [6,-2];
var vector43 = [-4,-2];
var vector44 = [-5,-7];
var vector45 = [1,6];
var vector46 = [-7,-4];
var vector47 = [-4,2];
var vector48 = [-1,5];
var vector49 = [-4,6];
var vector50 = [2,-10];

var vectors = [
    vector1,
    vector2,
    vector3,
    vector4,
    vector5,
    vector6,
    vector7,
    vector8,
    vector9,
    vector10,
    vector11,
    vector12,
    vector13,
    vector14,
    vector15,
    vector16,
    vector17,
    vector18,
    vector19,
    vector20,
    vector21,
    vector22,
    vector23,
    vector24,
    vector25,
    vector26,
    vector27,
    vector28,
    vector29,
    vector30,
    vector31,
    vector32,
    vector33,
    vector34,
    vector35,
    vector36,
    vector37,
    vector38,
    vector39,
    vector40,
    vector41,
    vector42,
    vector43,
    vector44,
    vector45,
    vector46,
    vector47,
    vector48,
    vector49,
    vector50
];

function getVector() {
	return vectors;
}

function getVectorLength() {
	return vectors.length;
}

// ***************************************************************************************************************
var stats = [10, 13, 12, 17, 56, 36, 29, 14, 10, 24, 110, 28, 17, 8, 30, 9, 47, 35, 29, 14, 56, 14, 11,
            46, 11, 23, 65, 26, 69, 61, 94, 10, 18, 9, 10, 28, 31, 26, 29, 31, 16];
	
function getStats(statsPos){
  return stats[statsPos];
}

function getStatsLen(){
  return stats.length;
}

function gerStatsList() {
	return stats;
}

// ***************************************************************************************************************	
var phoneNumbersArr = ["415-222-3373" , "415-222-3733" ,"415-222-3033" ,"415-522-3143" ,"415-122-7833" ,
"415-252-3333" ,"415-522-3333" ,"415-222-3373" ,"415-222-3883" ,"415-222-3353" ,"415-222-3313" ,"415-222-3378" ,
"415-212-3373" ,"415-222-3393" ,"415-202-3333" ,"415-222-3333" ,"415-000-8933" ,"415-222-4474" ,"415-100-7785" ,
"415-282-3333" ,"415-222-3113" ,"415-222-3153" ,"415-172-7854" ,"415-222-1234" ,"415-222-3123" ,"415-222-4133" ,
"415-022-3633" ,"415-442-1414" ,"415-222-3323" ,"415-222-5633" ];

var namesArr = [
"John" , "Malka" ,"James" ,"Oren" ,"Mike" ,
"Boris" ,"Monika" ,"Andrea" ,"Oleg" ,"Abraham" ,
"Amit" ,"Amir" ,"Moris" ,"Noel" ,"Paul" ,
"Peter" ,"Chris" ,"Emmanuel" ,"Eric" ,"Kolin" ,
"Nora" ,"Lavar" ,"Meg" ,"Miriam" ,"Shannon" ,
"Savannah" ,"Dana" ,"Anna" ,"Maddie" ,"Janice" 
];			
			
var phoneBook = [phoneNumbersArr,  namesArr];

function getNameAtIndex(index)
{
	return namesArr[index];
}

function getPhoneAtIndex(index)
{
	return phoneNumbersArr[index];
}

function getNameLength() {
	return phoneNumbersArr.length;
}

// ***************************************************************************************************************

 var textFile = ["Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus", 
                " mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim jus", 
                "to, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend ", 
                "tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.", 
                " Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem q", 
                "uam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut ", 
                "libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget", 
                " bibendum sodales, augue velit cursus nunc,"];
				
// ***************************************************************************************************************				

// MTP Process2

var pcMTP0 = 0;
var pcMTP1 = 0;
var pcMTP2 = 0;
var pcMTP3 = 0;
var pcMTP4 = 0;
var pcMTP5 = 0;
var pcMTP6 = 0;
var pcMTP7 = 0;

var eolMTP = [false, false, false, false, false, false, false, false];
var eofMTP = false;

var characterCounts = []; 

for (var i = 0, characterCounts = new Array(128); i < 128;) characterCounts[i++] = 0;

var available = true;				

// ***************************************************************************************************************
				
var file1 = { 
	name: "bankAccount.js" , owner: "Jagat", time: "02/15/2016", access: "r-xr-xr-x", file: acctTrans, type: "file"
};

var file2 = { 
	name: "contactManager.js" , owner: "Mansi", time: "02/15/2016", access: "r-xr-xr-x", file: contacts, type: "file"
};
var file3 = { 
	name: "securityFile.js" , owner: "Yongcai", time: "02/15/2016", access: "r-xr-xr-x", file: securityList, type: "file"
};

/*
var file4 = { 
name: "findRoutes.js" , owner: "Mayank", time: "02/15/2016", access: "r-xr-xr-x"
};
*/

var file5 = { 
	name: "calculateVectors.js" , owner: "Tony", time: "02/15/2016", access: "r-xr-xr-x", file: vectors, type: "file"
};

var file6 = { 
	name: "calculateStats.js" , owner: "Nimitha", time: "02/15/2016", access: "r-xr-xr-x", file: stats,type: "file"
};

var file7 = { 
	name: "phoneBook.js" , owner: "Asaf", time: "02/15/2016", access: "r-xr-xr-x", file: phoneBook, type: "file"
};

var file8 = { 
	name: "characterCounter.js" , owner: "Yongcai", time: "04/11/2016", access: "r-xr-xr-x", file: characterCounts, type: "file"
};

var file9 = { name: "copyOver.js" , owner: "Mansi", time: "04/27/2016", access: "--x--x--x", file: null , type: "file" };

var file10 = { name: "dijkstra.js" , owner: "Tony", time: "05/05/2016", access: "--x--x--x", file: null, type: "file" };

var file100 = { name: "IOdevice.js" , owner: "admin", time: "03/02/2016", access: "---------", file: null, type: "file" };

var jFDir = [ file1 ];
var mFDir = [ file2, file9 ];
var yFDir = [ file3, file8 ];
var tFDir = [ file5 ];
var nFDir = [ file6 ];
var aFDir = [ file7 ];

// ########################################################################################################
// HASH MAP
 
//  users hash map
var usersHashMap = {};
usersHashMap["jagatFolder"]= "Bank Account";
usersHashMap["mansiFolder"]= "Contact Manager";
usersHashMap["yongcaiFolder"]= "Security File";
//usersHashMap["findRoutes.js"]= "Find Routes";
usersHashMap["tonyFolder"]= "Calculate Vectors";
usersHashMap["nimithaFolder"]= "Calculate Stats";
usersHashMap["asafFolder"]= "Phone Book";
usersHashMap["dijkstra.js"]= "Dijkstra's dining philosophers";
//usersHashMap["test.js"]= "test case";

// os folder hash map
var osHashMap = {};
osHashMap["IOdevice.js"]= "IO decive file";
// main folder hash map

var mainHashMap = {};
mainHashMap["user"]= "user folder";
mainHashMap["os"]= "os folder";

// individuals folder hash map

var jagatHashMap = {};
jagatHashMap["bankAccount.js"] = "Bank Account";

var mansiHashMap = {};
mansiHashMap["contactManager.js"] = "Contact Manager";
mansiHashMap["copyOver.js"] = "Copy Over";

var yongcaiHashMap = {};
yongcaiHashMap["securityFile.js"] = "Security File";
yongcaiHashMap["characterCounter.js"] = " character Counter";

var tonyHashMap = {};
tonyHashMap["calculateVectors.js"] = "Calculate Vectors";

var nimithaHashMap = {};
nimithaHashMap["calculateStats.js"] = "Calculate Stats";

var asafHashMap = {};
asafHashMap["phoneBook.js"] = "Phone Book";

//*****************************************************************************************************************************************************

var jMap = [];
var mMap = [];
var yMap = [];
var tMap = [];
var nMap = [];
var aMap = [];
var uMap = [];
var oMap =[];
var mainMap = [];

var jagatFolder = {name: "Jagatdeep" , owner: "Jagatdeep", time: "04/11/2016", access: "r--r--r--", type: "folder", file: jFDir, hashMap: jagatHashMap, parentF: uMap};

var mansiFolder = {name: "Mansi" , owner: "Mansi", time: "04/11/2016", access: "r--r--r--", type: "folder", file: mFDir, hashMap: mansiHashMap, parentF: uMap};

var yongcaiFolder = {name: "Yongcai" , owner: "Yongcai", time: "04/11/2016", access: "r--r--r--", type: "folder", file: yFDir, hashMap: yongcaiHashMap, parentF: uMap};

var tonyFolder = {name: "Tony" , owner: "Tony", time: "04/11/2016", access: "r--r--r--", type: "folder", file: tFDir, hashMap: tonyHashMap, parentF: uMap};

var nimithaFolder = {name: "Nimitha" , owner: "Nimitha", time: "04/11/2016", access: "r--r--r--", type: "folder", file: nFDir, hashMap: nimithaHashMap, parentF: uMap};

var asafFolder = {name: "Asaf" , owner: "Asaf", time: "04/11/2016", access: "r--r--r--", type: "folder", file: aFDir, hashMap: asafHashMap, parentF: uMap};

//var directories = [ jagatFolder, mansiFolder, yongcaiFolder, tonyFolder, nimithaFolder, asafFolder, file8, file10 ];
var uFDir = [jagatFolder, mansiFolder, yongcaiFolder, tonyFolder, nimithaFolder, asafFolder, file10];

var usersFolder = {name: "user" , owner: "Yongcai", time: "05/08/2016", access: "r--r--r--", type: "folder", file: uFDir, hashMap: usersHashMap, parentF: mainMap};

var oFDir = [file100];

var osFolder = {name: "OperatingSystem" , owner: "Yongcai", time: "05/08/2016", access: "r--------", type: "folder", file: oFDir, hashMap: osHashMap, parentF: mainMap};

var mainFDir = [ usersFolder, osFolder ];

var mainFolder = {name: "csc415" , owner: "Yongcai", time: "05/09/2016", access: "r--r-----", type: "folder", file: mainFDir, hashMap: mainHashMap, parentF: "null"};

 jMap = [jagatFolder, jagatHashMap];
 mMap = [mansiFolder, mansiHashMap];
 yMap = [yongcaiFolder, yongcaiHashMap];
 tMap = [tonyFolder, tonyHashMap];
 nMap = [nimithaFolder, nimithaHashMap];
 aMap = [asafFolder, asafHashMap];
 uMap = [usersFolder, usersHashMap];
 oMap = [osFolder, osHashMap];
 mainMap = [mainFolder, mainHashMap];
 
jagatFolder.parentF = uMap;
mansiFolder.parentF = uMap;
yongcaiFolder.parentF = uMap;
tonyFolder.parentF = uMap;
nimithaFolder.parentF = uMap;
asafFolder.parentF = uMap;
osFolder.parentF = mainMap;
usersFolder.parentF = mainMap;

// ***************************************************************************************************************
var arrayOfUsers = [
["nimitha", "S28ecsCp" ],
["tony", "12345678" ],
["yongcai", "87654321" ],
["mansi", "55443322" ],
["mayank", "zero1234" ],
["chihuahua", "jagatchi" ],
["loloco", "aaaa1111" ],
];

var superUsers = [
["admin", "admin123" ]
];

var currentUser = "";

// ***************************************************************************************************************

var checkFilesMap = {};
checkFilesMap["bankAccount.js"] = "Executable: Yes | Everyone";
checkFilesMap["contactManager.js"] = "Executable: Yes | Everyone";
checkFilesMap["securityFile.js"] = "Executable: Yes | Everyone";
checkFilesMap["calculateVectors.js"] = "Executable: Yes | Everyone";
checkFilesMap["calculateStats.js"] = "Executable: Yes | Everyone";
checkFilesMap["phoneBook.js"] = "Executable: Yes | Everyone";
checkFilesMap["characterCounter.js"] = "Executable: Yes | Everyone";
checkFilesMap["copyOver.js"] = "Executable: No";
checkFilesMap["AccessibilityDefinitions.plist"] = "Executable: No";
checkFilesMap["CloudKitAccessPlugin.bundle"] = "Executable: No";
checkFilesMap["DefaultAccessPlugin.bundle"] = "Executable: No";
checkFilesMap["FacebookAccessPlugin.bundle"] = "Executable: No";
checkFilesMap["LinkedInAccessPlugin.bundle"] = "Executable: No";
checkFilesMap["TencentWeiboAccessPlugin.bundle"] = "Executable: No";
checkFilesMap["EmailAuthenticationPlugin.bundle"] = "Executable: No";
checkFilesMap["CalendarAuthenticationPlugin.bundle"] = "Executable: No";
checkFilesMap["ExchangeAuthenticationPlugin.bundle"] = "Executable: No";
checkFilesMap["AppliIDSSOAuthenticationPlugin.bundle"] = "Executable: No";
checkFilesMap["CloudKitAuthenticationPlugin.bundle"] = "Executable: No";
checkFilesMap["ContactsAccountsAuthenticationPlugin.bundle"] = "Executable: No";
checkFilesMap["EmailAuthenticationPlugin.bundle"] = "Executable: No";
checkFilesMap["FacebookAuthenticationPlugin.bundle"] = "Executable: No";
checkFilesMap["FlickrAuthenticationPlugin.bundle"] = "Executable: No";
checkFilesMap["GoogleAuthenticationPlugin.bundle"] = "Executable: No";
checkFilesMap["iCloudIDAuthenticationPlugin.bundle"] = "Executable: No";
checkFilesMap["LinkedInAuthenticationPlugin.bundle"] = "Executable: No";
checkFilesMap["ServerAuthenticationPlugin.bundle"] = "Executable: No";
checkFilesMap["TencentWeiboAuthenticationPlugin.bundle"] = "Executable: No";
checkFilesMap["TudouAuthenticationPlugin.bundle"] = "Executable: No";
checkFilesMap["TwitterAuthenticationPlugin.bundle"] = "Executable: No";
checkFilesMap["VimeoAuthenticationPlugin.bundle"] = "Executable: No";
checkFilesMap["WeiboAuthenticationPlugin.bundle"] = "Executable: No";
checkFilesMap["YahooAuthenticationPlugin.bundle"] = "Executable: No";
checkFilesMap["YoukuAuthenticationPlugin.bundle"] = "Executable: No";
checkFilesMap["Info.plist"] = "Executable: No";
checkFilesMap["version.plist"] = "Executable: No";
checkFilesMap["AOSKitNotificationPlugin.bundle"] = "Executable: No";
checkFilesMap["AppleISSONotificationPlugin.bundle"] = "Executable: No";
checkFilesMap["CalendarNotificationPlugin.bundle"] = "Executable: No";
checkFilesMap["CloudDocsAccountNotificationPlugin.bundle"] = "Executable: No";
checkFilesMap["CloudKitNotificationPlugin.bundle"] = "Executable: No";
checkFilesMap["CLoudPhotosServicesNotificationPlugin.bundle"] = "Executable: No";
checkFilesMap["ContactsAccountsNotificationPlugin.bundle"] = "Executable: No";
checkFilesMap["EmailNotificationPlugin.bundle"] = "Executable: No";
checkFilesMap["ExchangeNotificationPlugin.bundle"] = "Executable: No";
checkFilesMap["iCloudIDNotificationPlugin.bundle"] = "Executable: No";
checkFilesMap["InternetAccountNotificationPlugin.bundle"] = "Executable: No";
checkFilesMap["MessagesAccountNotificationPlugin.bundle"] = "Executable: No";
checkFilesMap["NotesAccountNotificationPlugin.bundle"] = "Executable: No";
checkFilesMap["PCSAccountNotificationPlugin.bundle"] = "Executable: No";
checkFilesMap["ServerNotificationPlugin.bundle"] = "Executable: No";
checkFilesMap["ShareKitNotificationPlugin.bundle"] = "Executable: No";
checkFilesMap["SPAANotificationPlugin.bundle"] = "Executable: No";
checkFilesMap["test.java"] = "Executable: No";
checkFilesMap["acfs.kext"] = "Executable: No";
checkFilesMap["AFL.kext"] = "Executable: No";
checkFilesMap["triggers.kext"] = "Executable: No";
checkFilesMap["MRJToolkit.jar"] = "Executable: No";
checkFilesMap["alaised.pm"] = "Executable: No";