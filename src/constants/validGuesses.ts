import { CONFIG } from './config'

export const VALIDGUESSES = [
"tsahwut",
"tselush",
"shtsepth",
"tsetsuw’",
"tsetsuw’",
"tsulel",
"tsuluw’",
"tsum’ut",
"tsum’et",
"tsum’um",
"tsun’ut",
"stsatxw",
"tsitsulh",
"tsitsulh",
"tsilhus",
"stslhaqw",
"tslhaqwt",
"tsetl’um’",
"tsusut",
"ts’eey’em’",
"ts’elhum’",
"sts’esht",
"ts’ewut",
"ts’ehwul’",
"ts’umiil’",
"ts’um’ut",
"ts’um’et",
"ts’um’ush",
"ts’unum",
"ts’unum",
"sts’at’qw’",
"ts’ut’qw’t",
"ts’at’qw’t",
"sts’uy’hw",
"sts’uy’hw",
"sts’ey’hw",
"ts’uy’hwt",
"ts’ey’hwt",
"ts’iitum",
"ts’uy’ulh",
"ts’ilum",
"ts’imul’",
"ts’isum",
"ts’i’ut",
"ts’aqwul",
"ts’qwulhp",
"ts’uts’uqw’",
"ts’uqw’um’",
"ts’qw’els",
"ts’utum’",
"ts’utum’",
"ts’twa’",
"chumux",
"shch’ekwx",
"ch’ukwxt",
"ch’ekwxt",
"hakwush",
"haqwut",
"haqwum",
"hasut",
"hesum",
"hetth’um",
"hee’wu",
"heeyum’",
"shhwuli",
"hulit",
"humun",
"huye’",
"hiiy’ut",
"hikwut",
"hikwut",
"hikw’ut",
"hilum",
"hiqut",
"hithulh",
"kwulush",
"skwamu",
"kwakwun’",
"kwasun",
"skwati",
"kwahwut",
"kwetsum",
"kwukweel’",
"kweyel",
"kwuy’e’",
"kwunut",
"kwun’et",
"kwun’um",
"kwun’em’",
"kwunus",
"kwuyxt",
"kwu’elh",
"kwimul",
"kwsu’i",
"kwsutst",
"kwsun’s",
"skwthe’",
"skwthe’",
"kwthunu",
"kw’atl’kwa",
"kw’ayukw",
"kw’elukw’",
"kw’ekw’us",
"kw’esut",
"kw’se’q",
"kw’et’un’",
"kw’ekw’i’",
"kw’eli’",
"kw’u’as",
"kw’ulutth’",
"kw’ul’ts’t",
"kw’uluw’",
"kw’elhq’t",
"kw’umut",
"kw’unus",
"kw’utxt",
"kw’uyet",
"kw’uy’ut",
"kw’uyeem’",
"kw’ikw’uts’",
"kw’its’ut",
"kw’ts’els",
"kw’ilhuw’",
"skw’ins",
"kw’inus",
"kw’inus",
"kw’unelh",
"kw’ukw’i’",
"kw’ukw’ulh",
"kw’lhels",
"kw’lhast",
"skw’lhey’",
"tskw’shas",
"tskw’shelh",
"kw’shels",
"kw’eshum’",
"skw’shas",
"lemut",
"lelum’",
"hul’ush",
"sul’its’",
"luts’ut",
"hul’ts’t",
"luts’as",
"luhel’",
"lukli",
"sul’ikw",
"lukwat",
"luluts’",
"lum’ut",
"lupat",
"lupen",
"hul’iq",
"luq’elh",
"sul’iq’",
"luq’ut",
"luqw’ut",
"luqw’uy’",
"lushaan",
"lutem",
"luwen",
"luwux",
"hul’xt",
"luxut",
"sul’ixw",
"luxwut",
"liimus",
"lila’",
"liloot",
"liqwum",
"liqwul",
"lisek",
"liyam",
"lhalhukw’",
"lhaqw’ut",
"lhasut",
"lhasum",
"lhalhutth’",
"lhtsiws",
"lhulheel’",
"lhulhel’",
"lhequm",
"lheq’ut",
"lhetth’ut",
"lhelhuw’",
"lhuw’een",
"lhe’xt",
"lhulut",
"lhul’ut",
"slhel’q",
"lhul’qt",
"lhumts’t",
"lhumts’t",
"lhem’ts’t",
"lhumuhw",
"lhum’uhw",
"lhun’ut",
"lhun’um",
"shlhun’e",
"lhup’qw’t",
"lhup’tth’t",
"lhep’tth’t",
"lhuq’us",
"lhut’q’t",
"lhuyxt",
"lhits’ut",
"lhts’els",
"lhts’eent",
"lhikw’ut",
"lhiput",
"slhihws",
"lhihwus",
"lhhwelu",
"lhixwum’",
"lhkwels",
"lhqelts’",
"tl’amut",
"tl’amut",
"tl’utl’iits’",
"tl’un’uq",
"tl’eshut",
"tl’eshun’",
"tl’elhum",
"tl’lhemt",
"tl’e’um",
"tl’ekw’un’",
"tl’ul’im’",
"stl’ul’u",
"stl’umkw’",
"stl’am’kw’",
"tl’umkw’t",
"tl’em’kw’t",
"stl’epx",
"tl’upxt",
"tl’epxt",
"tl’usip",
"tl’uw’ut",
"tl’uy’q’t",
"tl’itsut",
"tl’tsels",
"tl’its’ut",
"tl’ikw’un’",
"tl’imun",
"tl’i’nu",
"tl’itl’up",
"tl’itl’up",
"tl’upul’",
"tl’pilsh",
"stl’qeen",
"tl’ehwum’",
"tl’hwutst",
"tl’e’hwt",
"machus",
"ma’it",
"matl’ut",
"mutl’el",
"mat’ut",
"mawuch",
"ma’uqw",
"metsun’",
"smeent",
"hum’een’",
"me’lu",
"smel’q",
"mel’qt",
"mel’qth",
"smem’t",
"meqe’",
"mexum",
"sum’e’",
"hum’ush",
"mukwut",
"mukwut",
"mukw’ut",
"mukw’ut",
"mul’ts’t",
"smal’hw",
"mel’hwt",
"mul’ul",
"smul’sh",
"tsmun’u",
"muq’ut",
"muq’ut",
"sum’iqw’",
"muqw’ut",
"musun",
"musuqw",
"mutth’ulh",
"smilhu",
"miq’ut",
"mitth’ut",
"hum’q’t",
"m’iilhe’",
"nanum",
"napus",
"nu’as",
"na’ut",
"na’uth",
"na’tu",
"snents’",
"snents’",
"hun’ut",
"naathut",
"netulh",
"hunum’",
"nelum’",
"nutsim’",
"nuts’a’",
"nuts’us",
"nuts’ehw",
"nuqum",
"sun’iqw",
"nuwus",
"sun’iw’",
"nuw’ush",
"nelu’",
"ni’ulh",
"paatum",
"shpupa",
"hwpaals",
"papuqw",
"pasut",
"patun",
"patun",
"speenhw",
"pepukw’",
"pekw’ut",
"petth’um",
"pethut",
"punut",
"pun’um",
"piq’ut",
"pitut",
"pihwum",
"pupukw’",
"pkw’nehw",
"pukw’um’",
"spkw’um",
"pkw’ast",
"pupuqw",
"pqwels",
"shpsas",
"pshels",
"putum’",
"pou’ps",
"p’up’aam’",
"p’aqwul",
"p’ekw’ut",
"p’etl’ut",
"p’eq’um",
"p’ep’utth’",
"p’etth’ut",
"p’tth’els",
"p’uli’",
"p’ulhqw’t",
"p’alhqw’t",
"shp’q’eelh",
"p’q’enhw",
"p’uwi’",
"p’hwulhp",
"p’uytl’t",
"p’ilum",
"p’isuts’",
"p’up’ukw",
"p’lhiq’t",
"qaanlhp",
"hwqaalt",
"qa’um",
"qaaqa’",
"qeluts’",
"qequm’",
"qemut",
"qequn’",
"qequn’",
"qethuhw",
"qewum",
"sqewth",
"qeyux",
"qe’is",
"qe’is",
"qiqul’",
"qequl",
"qul’as",
"qulum’",
"qul’et",
"quma’",
"qumut",
"qum’ul",
"qetth’q’t",
"quw’ut",
"qilus",
"qiq’ut",
"qiq’ut",
"qutl’um’",
"qp’ast",
"qitut",
"sqtheq",
"q’aq’i’",
"q’aq’i’",
"q’uq’a’",
"q’enuts",
"q’ep’ut",
"q’et’um",
"q’ewut",
"q’ewuth",
"q’eq’uw’",
"sq’eytl’",
"q’uts’i’",
"q’el’p’t",
"sq’el’q’",
"sq’el’q’",
"q’ulq’t",
"q’ul’q’t",
"q’el’q’t",
"q’ulum’",
"q’uwut",
"sq’ey’tth’",
"q’uy’tth’t",
"q’uy’tth’t",
"q’ey’tth’t",
"q’ikw’ut",
"lhq’il’t",
"q’iq’us",
"q’isut",
"q’it’a’",
"q’it’a’",
"q’ixul",
"shq’xeelh",
"q’uq’i’",
"sq’lhan",
"q’uq’up",
"q’pels",
"q’epum’",
"sq’pas",
"q’et’ut",
"q’xuw’lh",
"qwaqwul’",
"qwayul",
"qwa’up",
"shqwuqwe",
"sqwuqwe",
"qwets’ut",
"qwe’un",
"shqwal’s",
"qwul’st",
"qwal’st",
"tsqwum’xw",
"qwunus",
"qwixwut",
"qwuqwus",
"qwusum’",
"qwsels",
"qw’alhut",
"qw’aqwuqw",
"qw’aqwut",
"qw’qwels",
"sqw’tsum",
"sqw’tsim’",
"qw’ulut",
"qw’ulum",
"qw’umut",
"qw’iqw’um’",
"qw’elum",
"qw’imut",
"sqw’qwum",
"satuts",
"sat’ut",
"sa’sxw",
"saxwul",
"sa’ukw",
"setut",
"sexum",
"suse’",
"se’uq",
"sul’ut",
"sul’ts’t",
"suqeen",
"sut’q’t",
"set’q’t",
"suwq’t",
"sew’q’t",
"suxwa’",
"suyum",
"suyum",
"suyum",
"suy’t’t",
"sikw’ut",
"silum",
"si’lu",
"situn",
"siwul",
"sixwum",
"si’em",
"si’em’",
"susuq’",
"lhsesq’",
"susiq’",
"sq’els",
"seq’um’",
"stth’ulhp",
"s’aa’lh",
"shakw’ut",
"shakw’um",
"shapul",
"shaqwul",
"shqwun’u",
"shaya’",
"she’shlh",
"sheshum’",
"shemut",
"shewuq",
"shu’et",
"sheeyulh",
"shul’akw’",
"shumen",
"shun’tsu",
"shuyulh",
"shuyqt",
"shey’qt",
"shishuts’",
"shits’us",
"shikus",
"shiput",
"shitum",
"shushuq",
"shushiq",
"shqwun’u",
"shutum’",
"tutaal’",
"taqw’um",
"taxwut",
"tetsul",
"tuteem’",
"temut",
"tetlu",
"teti’",
"te’ulh",
"te’ulh",
"tuhas",
"tumulh",
"tumus",
"tumuhw",
"tum’ush",
"tuni’",
"tuw’in’",
"tuyul",
"timut",
"tiqw’ut",
"tiwun",
"hwtqet",
"tq’els",
"tutus",
"toohwus",
"toohwelh",
"tutuhw",
"stu’e",
"t’ats’a’",
"t’at’ukw’",
"t’amun",
"t’atulh",
"t’at’uhw",
"t’eluw’",
"t’emut",
"t’emuth",
"t’emukw’",
"t’upul",
"t’epul’",
"t’eqe’",
"t’eqe’",
"t’et’utth’",
"t’etth’ut",
"t’eyuq’",
"t’ulum’",
"st’el’q",
"t’ut’um’",
"t’um’ut",
"t’un’ut",
"t’uqwum’",
"t’uyum’",
"t’itsum",
"t’ilum",
"t’uyum",
"t’iqul’",
"t’ut’ukw",
"hwt’kwat",
"hwt’akwt",
"t’ut’uqw’",
"t’qw’els",
"t’qw’els",
"t’uqw’eem’",
"t’qw’eent",
"t’qw’i’qw",
"tth’alhum’",
"tth’umeen’",
"tth’aqw’um",
"tth’asut",
"hwtth’a’t",
"tth’ekw’ut",
"tth’ekw’ul",
"tth’ele’",
"tth’etth’um’",
"tth’umxt",
"tth’em’xt",
"tth’uxwun’",
"tth’uy’kw’t",
"tth’ikwa’",
"tth’iq’us",
"tth’iq’ul’",
"tth’iqw’ut",
"tth’qw’els",
"tth’qw’en’t",
"tth’isut",
"tth’iwuq’",
"tth’ihwum’",
"tth’lhekw’t",
"tth’eq’um’",
"tth’utth’oom’",
"stth’hwas",
"tth’utth’uxw",
"tth’xwals",
"shtth’xwas",
"thathun",
"thamun",
"thuqi’",
"thuyxt",
"thu’it",
"thithat",
"thithus",
"stheelhp",
"thequn",
"thishun",
"thuthukw’",
"thq’els",
"thq’eent",
"thq’ent",
"shthqw’as",
"thhwi’qw",
"thuhwum’",
"thxels",
"wa’lu",
"wa’lu",
"wawa’",
"wetsi’",
"wekun",
"weq’ut",
"tuwet",
"swetu",
"tswetu",
"wetth’ut",
"suw’e’",
"wulaam’",
"hwswulh",
"wutl’uts’",
"wuq’uq’",
"huw’iqw’",
"wuxus",
"wiqus",
"hwkw’els",
"hwayum",
"hwetum",
"hwathut",
"hweluq",
"hwa’us",
"hwun’a’",
"hwutus",
"hwutth’um’",
"hwuhwuy’",
"hwikwut",
"hwikw’ul",
"hwisut",
"hwuhwiw’",
"hwiwul",
"hwkw’ast",
"xatsa’",
"xat’ut",
"ts’lhxeem’",
"xetl’ut",
"xetth’i’",
"xulum’",
"xul’ut",
"xul’um",
"sxel’ts’",
"xul’ts’t",
"xuxulh",
"xlhi’qw",
"xuxun’",
"sxun’u",
"xushun’",
"xut’kw’t",
"xet’kw’t",
"sxuw’u",
"sxuytl’",
"xuy’ut",
"xikw’ut",
"xilux",
"ximut",
"xpels",
"xiput",
"xip’ut",
"xp’els",
"xiq’ut",
"xisul’",
"xitth’um",
"xitth’ul",
"xlhast",
"xut’eem’",
"xut’ukw’",
"sxt’ekw’",
"xt’ekw’t",
"sxtth’um",
"xwaqw’ut",
"xwaxwi’",
"xwaxwi’",
"xwaxwi’",
"xwul’ut",
"xwaxwum",
"xwi’em’",
"xwiqw’ut",
"huy’aat",
"huyaam’",
"yaala’",
"yakw’ut",
"yakw’um",
"yukw’aalh",
"yatl’ut",
"yaqw’um",
"yathulh",
"yaxwut",
"syaays",
"yaay’us",
"yeq’ut",
"ye’ut",
"huy’ut",
"huy’iit",
"yukw’ut",
"yulqw’t",
"yal’qw’t",
"yul’ew’",
"yutl’q’t",
"yumq’t",
"yem’q’t",
"yunum",
"yunus",
"yuq’ut",
"yuq’us",
"suy’iqw",
"huy’qwt",
"yuthus",
"yuw’en’",
"suy’ixw",
"yuxwut",
"yits’ut",
"yit’um",
"yiqum",
"’a’ut",
"’aatum",
"’a’ulh",
"shhw’aalh",
"’akw’ut",
"’a’lu",
"na’lu",
"’alhut",
"’amut",
"’anuw’",
"’apun",
"’aqwut",
"’aqw’ut",
"’asum",
"s’a’t’",
"’at’ut",
"’at’ul",
"’athut",
"’ayum",
"’e’ut",
"’e’uth",
"’uy’eey’",
"’elush",
"’eluhw",
"’een’thu",
"’etth’ut",
"’e’wu",
"’ulhep",
"’utl’qt",
"’umut",
"’untsu",
"’unuhw",
"’usup’",
"’ushul",
"’uwus",
"’uw’kw’t",
"’uhwiin’",
"’uyqt",
"s’ay’xw",
"shhw’uy’",
"’eli’",
"’iyus",
"’iyas",
"’iyus",
"hw’iint",
"s’i’kw’",
"’ikw’ut",
"’imut",
"’imush",
"’imuth",
"’iput",
"’ipun",
"’ip’ut",
"’iqw’ut",
"’itut",
"’itth’um",
"ts’itth’um",
"s’i’x",
"’ixut",
"’ixum",
"’i’elh",
"ts’qwaqwa",
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
