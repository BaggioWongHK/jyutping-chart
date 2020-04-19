angular.module('JyutpingApp')
		.value('sampleWords', sampleWordsFunc());

/**
 *	@description
 *	JSON structure
 *	sampleWords[jyutping][tone][("chinese"|"jyutping"|"english")]
 *
 *	Empty entries sampleWords[jyutping][tone] are represented by
 *	{} or {"chinese": ""}
 */
function sampleWordsFunc() {
var sampleWords = {
	"aa": {
		"1": {
			"chinese": "烏鴉",
			"jyutping": "wu1 aa1",
			"english": "crow; raven"
		},
		"2": {
			"chinese": "啞巴",
			"jyutping": "aa2 baa1",
			"english": "a mute person"
		},
		"3": {
			"chinese": "亞洲",
			"jyutping": "aa3 zau1",
			"english": "Asia"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"baa": {
		"1": {
			"chinese": "爸爸",
			"jyutping": "baa4 baa1",
			"english": "father"
		},
		"2": {
			"chinese": "把持",
			"jyutping": "baa2 ci4",
			"english": "to hold (stocks)"
		},
		"3": {
			"chinese": "霸王",
			"jyutping": "baa3 wong4",
			"english": "tyrannical"
		},
		"4": {
			"chinese": "爸爸",
			"jyutping": "baa4 baa1",
			"english": "father"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "罷就",
			"jyutping": "baa6 zau6",
			"english": "So be it."
		}
	},
	"caa": {
		"1": {
			"chinese": "差",
			"jyutping": "caa1",
			"english": "bad, terrible"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "樹杈",
			"jyutping": "syu6 caa3",
			"english": "tree branches"
		},
		"4": {
			"chinese": "綠茶",
			"jyutping": "luk6 caa4",
			"english": "green tea"
		},
		"5": {
			"chinese": "扠𢰸",
			"jyutping": "caa5 wo6",
			"english": "to ruin others' things or events"
		},
		"6": {
			"chinese": ""
		}
	},
	"daa": {
		"1": {
			"chinese": "一打",
			"jyutping": "jat1 daa1",
			"english": "a dozen"
		},
		"2": {
			"chinese": "打鼓",
			"jyutping": "daa2 gu2",
			"english": "to play the drums"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"faa": {
		"1": {
			"chinese": "花",
			"jyutping": "faa1",
			"english": "flowers"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "變化",
			"jyutping": "bin3 faa3",
			"english": "change (noun)"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gaa": {
		"1": {
			"chinese": "家庭",
			"jyutping": "gaa1 ting4",
			"english": "family"
		},
		"2": {
			"chinese": "假貨",
			"jyutping": "gaa2 fo3",
			"english": "fake goods"
		},
		"3": {
			"chinese": "放假",
			"jyutping": "fong3 gaa3",
			"english": "to be on vacation"
		},
		"4": {
			"chinese": "㗎",
			"jyutping": "gaa4",
			"english": "Cantonese final particle"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gwaa": {
		"1": {
			"chinese": "西瓜",
			"jyutping": "sai1 gwaa1",
			"english": "watermelon"
		},
		"2": {
			"chinese": "寡婦",
			"jyutping": "gwaa2 fuu5",
			"english": "widow"
		},
		"3": {
			"chinese": "掛住",
			"jyutping": "gwaa3 zyu6",
			"english": "to miss (someone or something)"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"haa": {
		"1": {
			"chinese": "蝦仁",
			"jyutping": "haa1 jan4",
			"english": "a kind of prawn"
		},
		"2": {
			"chinese": "吓",
			"jyutping": "haa2",
			"english": "something you say in mild surprise"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "瑕疵",
			"jyutping": "haa4 ci1",
			"english": "flaw; defect"
		},
		"5": {
			"chinese": "烚吓烚吓",
			"jyutping": "saap6 haa5 saap6 haa5",
			"english": "to go through life and you're really out of it"
		},
		"6": {
			"chinese": "下面",
			"jyutping": "haa6 min6",
			"english": "below"
		}
	},
	"jaa": {
		"1": {
			"chinese": "哎呀",
			"jyutping": "ai1 jaa1",
			"english": "something you say when exclaiming how ungrateful someone is"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": "也",
			"jyutping": "jaa5",
			"english": "also (written)"
		},
		"6": {
			"chinese": "廿個人",
			"jyutping": "jaa6 go3 jan4",
			"english": "twenty people"
		}
	},
	"kaa": {
		"1": {
			"chinese": "卡位",
			"jyutping": "kaa1 wai2",
			"english": "booth seating"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "咔咔聲",
			"jyutping": "kaa4 kaa2 seng1",
			"english": "sound of laughing"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwaa": {
		"1": {
			"chinese": "誇張",
			"jyutping": "kwaa1 zoeng1",
			"english": "exaggerated"
		},
		"2": {
			"chinese": "黃馬褂",
			"jyutping": "wong4 maa5 kwaa2",
			"english": "someone who has special power"
		},
		"3": {
			"chinese": "胯下",
			"jyutping": "kwaa3 haa6",
			"english": "groin"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"laa": {
		"1": {
			"chinese": "啦啦隊",
			"jyutping": "laa1 laa1 deoi2",
			"english": "cheerleading team"
		},
		"2": {
			"chinese": "揦手",
			"jyutping": "laa2 sau2",
			"english": "to be difficult to handle"
		},
		"3": {
			"chinese": "門罅",
			"jyutping": "mun4 laa3",
			"english": "door gap"
		},
		"4": {
			"chinese": "啦啦林",
			"jyutping": "laa4 laa4 lam4",
			"english": "quickly (when telling someone to do something)"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"maa": {
		"1": {
			"chinese": "媽媽",
			"jyutping": "maa4 maa1",
			"english": "mother"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "之嘛",
			"jyutping": "zi1 maa3",
			"english": "Cantonese final particle"
		},
		"4": {
			"chinese": "嫲嫲",
			"jyutping": "maa4 maa4",
			"english": "grandmother"
		},
		"5": {
			"chinese": "馬",
			"jyutping": "maa5",
			"english": "horse"
		},
		"6": {
			"chinese": "罵人",
			"jyutping": "maa6 jan4",
			"english": "to yell at someone (scolding them)"
		}
	},
	"naa": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "乸型",
			"jyutping": "naa2 jing4",
			"english": "sissy"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "加拿大",
			"jyutping": "gaa1 naa4 daai6",
			"english": "Canada"
		},
		"5": {
			"chinese": "那",
			"jyutping": "naa5",
			"english": "that"
		},
		"6": {
			"chinese": ""
		}
	},
	"ngaa": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "門牙",
			"jyutping": "mun4 ngaa4",
			"english": "incisor"
		},
		"5": {
			"chinese": "優雅",
			"jyutping": "jau1 ngaa5",
			"english": "elegant"
		},
		"6": {
			"chinese": "掗埞",
			"jyutping": "ngaa6 deng6",
			"english": "something / someone that takes up too much space"
		}
	},
	"paa": {
		"1": {
			"chinese": "趴低",
			"jyutping": "paa1 dai1",
			"english": "to be on all fours"
		},
		"2": {
			"chinese": "牛扒",
			"jyutping": "ngau4 paa2",
			"english": "steak"
		},
		"3": {
			"chinese": "怕醜",
			"jyutping": "paa3 cau2",
			"english": "shy"
		},
		"4": {
			"chinese": "爬山",
			"jyutping": "paa4 saan1",
			"english": "to go hiking"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"saa": {
		"1": {
			"chinese": "沙灘",
			"jyutping": "saa1 taan1",
			"english": "beach"
		},
		"2": {
			"chinese": "灑",
			"jyutping": "saa2",
			"english": "to sprinkle"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "沙沙滾",
			"jyutping": "saa4 saa4 gwan2",
			"english": "men cheating on their wives or girlfriends"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"taa": {
		"1": {
			"chinese": "他條",
			"jyutping": "taa1 tiu4",
			"english": "describing someone who takes it easy"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"waa": {
		"1": {
			"chinese": "青蛙",
			"jyutping": "cing1 waa1",
			"english": "frog"
		},
		"2": {
			"chinese": "畫家",
			"jyutping": "waa2 gaa1",
			"english": "painter"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "華人",
			"jyutping": "waa4 jan4",
			"english": "someone of Chinese descent"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "話事權",
			"jyutping": "waa6 si6 kyun4",
			"english": "the power to decide, to have the last say"
		}
	},
	"zaa": {
		"1": {
			"chinese": "揸車",
			"jyutping": "zaa1 ce1",
			"english": "to drive"
		},
		"2": {
			"chinese": "渣",
			"jyutping": "zaa2",
			"english": "someone who's bad at something"
		},
		"3": {
			"chinese": "油炸鬼",
			"jyutping": "jau4 zaa3 gwai2",
			"english": "deep fried dough stick"
		},
		"4": {
			"chinese": "咋咋臨",
			"jyutping": "zaa4 zaa4 lam4",
			"english": "quickly (when telling someone to do something)"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "掗拃",
			"jyutping": "ngaa6 zaa6",
			"english": "someone / something that takes up a lot of space"
		}
	},
	"aai": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "狹隘",
			"jyutping": "haap6 aai3",
			"english": "narrow (in terms of knowledge, way of thinking)"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"baai": {
		"1": {
			"chinese": "拜拜",
			"jyutping": "baai1 baai3",
			"english": "bye bye"
		},
		"2": {
			"chinese": "擺設",
			"jyutping": "baai2 cit3",
			"english": "ornaments"
		},
		"3": {
			"chinese": "禮拜",
			"jyutping": "lai5 baai3",
			"english": "week"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "失敗",
			"jyutping": "sat1 baai6",
			"english": "failure"
		}
	},
	"caai": {
		"1": {
			"chinese": "差人",
			"jyutping": "caai1 jan4",
			"english": "cop"
		},
		"2": {
			"chinese": "踩",
			"jyutping": "caai2",
			"english": "to step on"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "豺狼",
			"jyutping": "caai4 long4",
			"english": "wolf"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"daai": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "好歹",
			"jyutping": "hou2 daai2",
			"english": "in any case"
		},
		"3": {
			"chinese": "攜帶",
			"jyutping": "kwai4 daai3",
			"english": "to carry"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "大陸",
			"jyutping": "daai6 luk6",
			"english": "mainland China"
		}
	},
	"faai": {
		"1": {
			"chinese": "快勞",
			"jyutping": "faai1 lou2",
			"english": "file"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "大快活",
			"jyutping": "daai6 faai3 wut6",
			"english": "Fairwood"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gaai": {
		"1": {
			"chinese": "行街",
			"jyutping": "haang4 gaai1",
			"english": "to go shopping"
		},
		"2": {
			"chinese": "解釋",
			"jyutping": "gaai2 sik1",
			"english": "to explain"
		},
		"3": {
			"chinese": "介意",
			"jyutping": "gaai3 ji3",
			"english": "to mind"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gwaai": {
		"1": {
			"chinese": "乖仔",
			"jyutping": "gwaai1 zai2",
			"english": "good boy"
		},
		"2": {
			"chinese": "拐杖",
			"jyutping": "gwaai2 zoeng2",
			"english": "walking cane"
		},
		"3": {
			"chinese": "怪獸",
			"jyutping": "gwaai3 sau3",
			"english": "monster"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"haai": {
		"1": {
			"chinese": "揩",
			"jyutping": "haai1",
			"english": "to brush against"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "波鞋",
			"jyutping": "bo1 haai4",
			"english": "sport shoes"
		},
		"5": {
			"chinese": "毛蟹",
			"jyutping": "mou4 haai5",
			"english": "Horsehair crab"
		},
		"6": {
			"chinese": "鬆懈",
			"jyutping": "sung1 haai6",
			"english": "unguarded"
		}
	},
	"jaai": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "跴",
			"jyutping": "jaai2",
			"english": "to step on"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kaai": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "楷書",
			"jyutping": "kaai2 syu1",
			"english": "Chinese regular script (a style of calligraphy)"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwaai": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"laai": {
		"1": {
			"chinese": "拉人",
			"jyutping": "laai1 jan4",
			"english": "to arrest sb"
		},
		"2": {
			"chinese": "瀨嘢",
			"jyutping": "laai2 je5",
			"english": "to make a mistake and be caught"
		},
		"3": {
			"chinese": "癩瘡",
			"jyutping": "laai3 cong1",
			"english": "to have leprosy"
		},
		"4": {
			"chinese": "癐拉拉",
			"jyutping": "gui6 laai4 laai4",
			"english": "to be really tired"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "依賴",
			"jyutping": "ji1 laai6",
			"english": "to depend on"
		}
	},
	"maai": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "瞇埋眼",
			"jyutping": "mei1 maai4 ngaan5",
			"english": "to close one's eyes"
		},
		"5": {
			"chinese": "買嘢",
			"jyutping": "maai5 je5",
			"english": "to go shopping"
		},
		"6": {
			"chinese": "炒賣",
			"jyutping": "caau2 maai6",
			"english": "to resell at a high profit (e.g. on the black market)"
		}
	},
	"naai": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "奶奶",
			"jyutping": "naai4 naai2",
			"english": "grandmother"
		},
		"5": {
			"chinese": "牛奶",
			"jyutping": "ngau4 naai5",
			"english": "milk"
		},
		"6": {
			"chinese": ""
		}
	},
	"ngaai": {
		"1": {
			"chinese": "挨",
			"jyutping": "ngaai1",
			"english": "to lean against"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "捱苦",
			"jyutping": "ngaai4 fu2",
			"english": "to endure hardships"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"paai": {
		"1": {
			"chinese": "派",
			"jyutping": "paai1",
			"english": "a faction"
		},
		"2": {
			"chinese": "啤牌",
			"jyutping": "pe1 paai2",
			"english": "cards"
		},
		"3": {
			"chinese": "派糖",
			"jyutping": "paai3 tong2",
			"english": "to distribute money back to the people (from the government)"
		},
		"4": {
			"chinese": "排隊",
			"jyutping": "paai4 deoi2",
			"english": "to line up"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"saai": {
		"1": {
			"chinese": "嘥錢",
			"jyutping": "saai1 cin2",
			"english": "waste money (adjective)"
		},
		"2": {
			"chinese": "玉璽",
			"jyutping": "juk6 saai2",
			"english": "official seal of a Chinese emperor"
		},
		"3": {
			"chinese": "曬相",
			"jyutping": "saai3 soeng2",
			"english": "develop film (photography)"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": "舐犢",
			"jyutping": "saai5 duk6",
			"english": "parental love towards children"
		},
		"6": {
			"chinese": ""
		}
	},
	"taai": {
		"1": {
			"chinese": "車呔",
			"jyutping": "ce1 taai1",
			"english": "car tires"
		},
		"2": {
			"chinese": "闊太",
			"jyutping": "fut3 taai2",
			"english": "rich lady"
		},
		"3": {
			"chinese": "太極",
			"jyutping": "taai3 gik6",
			"english": "Tai Chi"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": "轉軚",
			"jyutping": "zyun3 taai5",
			"english": "to change one's standpoint or mind"
		},
		"6": {
			"chinese": ""
		}
	},
	"waai": {
		"1": {
			"chinese": "歪",
			"jyutping": "waai1",
			"english": "crooked"
		},
		"2": {
			"chinese": "崴子",
			"jyutping": "waai2 zi2",
			"english": "river bend"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "懷疑",
			"jyutping": "waai4 ji4",
			"english": "to suspect"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "壞處",
			"jyutping": "waai6 cyu5",
			"english": "cons"
		}
	},
	"zaai": {
		"1": {
			"chinese": "齋",
			"jyutping": "zaai1",
			"english": "vegetarian dishes"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "債務",
			"jyutping": "zaai3 mou6",
			"english": "debt"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"aau": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "拗柴",
			"jyutping": "aau2 caai4",
			"english": "twist one's ankle"
		},
		"3": {
			"chinese": "包拗頸",
			"jyutping": "baau1 aau3 geng2",
			"english": "someone who is very stubborn, someone who enjoys arguing, rational or not"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"baau": {
		"1": {
			"chinese": "麵包",
			"jyutping": "min6 baau1",
			"english": "bread"
		},
		"2": {
			"chinese": "飽肚",
			"jyutping": "baau2 tou5",
			"english": "something that's filling"
		},
		"3": {
			"chinese": "爆石",
			"jyutping": "baau3 sek6",
			"english": "to take a dump"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "齙",
			"jyutping": "baau6",
			"english": "bucktooth, protruding front teeth"
		}
	},
	"caau": {
		"1": {
			"chinese": "抄牌",
			"jyutping": "caau1 paai4",
			"english": "to write a parking ticket"
		},
		"2": {
			"chinese": "炒股",
			"jyutping": "caau2 gu2",
			"english": "to invest in stocks"
		},
		"3": {
			"chinese": "抄櫃桶",
			"jyutping": "caau3 gwai6 tung2",
			"english": "to ruffle through drawers"
		},
		"4": {
			"chinese": "雀巢",
			"jyutping": "zeuk3 caau4",
			"english": "the food brand Nestle, or a nest"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"daau": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"faau": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gaau": {
		"1": {
			"chinese": "膠袋",
			"jyutping": "gaau1 doi2",
			"english": "plastic bag"
		},
		"2": {
			"chinese": "搞搞震",
			"jyutping": "gaau2 gaau2 zan3",
			"english": "to horse around"
		},
		"3": {
			"chinese": "比較",
			"jyutping": "bei2 gaau3",
			"english": "comparison"
		},
		"4": {
			"chinese": "覺覺豬",
			"jyutping": "gaau4 gaau1 zyu1",
			"english": "sleep (baby talk)"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "撈攪",
			"jyutping": "laau2 gaau6",
			"english": "someone who's very messy and disorganized"
		}
	},
	"gwaau": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"haau": {
		"1": {
			"chinese": "燒烤",
			"jyutping": "siu1 haau1",
			"english": "barbecue"
		},
		"2": {
			"chinese": "考試",
			"jyutping": "haau2 si3",
			"english": "to sit an exam"
		},
		"3": {
			"chinese": "孝順",
			"jyutping": "haau3 seon6",
			"english": "to be good to one's parents"
		},
		"4": {
			"chinese": "發姣",
			"jyutping": "faat3 haau4",
			"english": "to be flirtatious"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "效果",
			"jyutping": "haau6 gwo2",
			"english": "effects"
		}
	},
	"jaau": {
		"1": {
			"chinese": "左 jaau1",
			"jyutping": "zo2 jaau1",
			"english": "left handed"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kaau": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "依靠",
			"jyutping": "ji1 kaau3",
			"english": "to rely on"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwaau": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"laau": {
		"1": {
			"chinese": "撈仔",
			"jyutping": "laau1 zai2",
			"english": "guys from other regions"
		},
		"2": {
			"chinese": "撈攪",
			"jyutping": "laau2 gaau6",
			"english": "someone who's messy and disorganized"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "撈起",
			"jyutping": "laau4 hei2",
			"english": "to fish out (something from a pile of something)"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"maau": {
		"1": {
			"chinese": "出貓",
			"jyutping": "ceot1 maau1",
			"english": "to cheat (on exams)"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "矛盾",
			"jyutping": "maau4 teon5",
			"english": "contradiction; contradictory"
		},
		"5": {
			"chinese": "卯時",
			"jyutping": "maau5 si4",
			"english": "a time slice used in astrology equivalent to 0500-0659"
		},
		"6": {
			"chinese": "禮貌",
			"jyutping": "lai5 maau6",
			"english": "manners"
		}
	},
	"naau": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "撓腮",
			"jyutping": "naau4 soi1",
			"english": "to scratch one's cheek / jawline"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "鬧交",
			"jyutping": "naau6 gaau1",
			"english": "to have a fight"
		}
	},
	"ngaau": {
		"1": {
			"chinese": "咬痕",
			"jyutping": "ngaau1 han4",
			"english": "to scratch (to ease an itch)"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "拗交",
			"jyutping": "ngaau3 gaau1",
			"english": "to have a fight"
		},
		"4": {
			"chinese": "混淆",
			"jyutping": "wan6 ngaau4",
			"english": "to confuse"
		},
		"5": {
			"chinese": "咬人",
			"jyutping": "ngaau5 jan4",
			"english": "to bite someone"
		},
		"6": {
			"chinese": ""
		}
	},
	"paau": {
		"1": {
			"chinese": "拋離",
			"jyutping": "paau1 lei4",
			"english": "to dump someone and leave them"
		},
		"2": {
			"chinese": "筆刨",
			"jyutping": "baat1 paau2",
			"english": "pencil sharpener"
		},
		"3": {
			"chinese": "炮台山",
			"jyutping": "paau3 toi4 saan1",
			"english": "Fortress Hill (MTR station)"
		},
		"4": {
			"chinese": "刨",
			"jyutping": "paau4",
			"english": "to sharpen (a pencil)"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"saau": {
		"1": {
			"chinese": "筲箕灣",
			"jyutping": "saau1 gei1 waan1",
			"english": "Shau Kei Wan (MTR station)"
		},
		"2": {
			"chinese": "稍為",
			"jyutping": "saau2 wai4",
			"english": "slightly"
		},
		"3": {
			"chinese": "哨牙",
			"jyutping": "saau3 ngaa4",
			"english": "protruding teeth"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"taau": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"waau": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zaau": {
		"1": {
			"chinese": "嘲笑",
			"jyutping": "zaau1 siu3",
			"english": "to mock"
		},
		"2": {
			"chinese": "鳳爪",
			"jyutping": "fung6 zaau2",
			"english": "chicken feet"
		},
		"3": {
			"chinese": "口罩",
			"jyutping": "hau2 zaau3",
			"english": "mask"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "棹忌",
			"jyutping": "zaau6 gei6",
			"english": "something that's highly frowned upon"
		}
	},
	"aam": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"baam": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"caam": {
		"1": {
			"chinese": "參加",
			"jyutping": "caam1 gaa1",
			"english": "to participate in"
		},
		"2": {
			"chinese": "悲慘",
			"jyutping": "bei1 caam2",
			"english": "tragic"
		},
		"3": {
			"chinese": "頂心杉",
			"jyutping": "ding2 sam1 caam3",
			"english": "a thorn in someone's side"
		},
		"4": {
			"chinese": "巖巉",
			"jyutping": "aam4 caam4",
			"english": "uneven"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"daam": {
		"1": {
			"chinese": "擔心",
			"jyutping": "daam1 sam1",
			"english": "to worry"
		},
		"2": {
			"chinese": "膽色",
			"jyutping": "daam2 sik1",
			"english": "guts"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "淡定",
			"jyutping": "daam6 ding6",
			"english": "calm and steady"
		}
	},
	"faam": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gaam": {
		"1": {
			"chinese": "監獄",
			"jyutping": "gaam1 juk6",
			"english": "a prison; jail"
		},
		"2": {
			"chinese": "減小",
			"jyutping": "gaam2 siu2",
			"english": "to reduce"
		},
		"3": {
			"chinese": "太監",
			"jyutping": "taai3 gaam3",
			"english": "eunuch"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gwaam": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"haam": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "餡",
			"jyutping": "haam2",
			"english": "fillings (in pastries and dumplings)"
		},
		"3": {
			"chinese": "喊",
			"jyutping": "haam3",
			"english": "to cry out loud (not in tears); to cry in tears"
		},
		"4": {
			"chinese": "鹹菜",
			"jyutping": "haam4 coi3",
			"english": "salty vegetables"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"jaam": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kaam": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwaam": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"laam": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "攬枕",
			"jyutping": "laam2 zam2",
			"english": "body pillows used for hugging"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "藍色",
			"jyutping": "laam4 sik1",
			"english": "blue"
		},
		"5": {
			"chinese": "展覽",
			"jyutping": "zin2 laam5",
			"english": "exhibition"
		},
		"6": {
			"chinese": "纜車",
			"jyutping": "laam6 ce1",
			"english": "cable car"
		}
	},
	"maam": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"naam": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "南方人",
			"jyutping": "naam4 fong1 jan4",
			"english": "Southerner"
		},
		"5": {
			"chinese": "魚腩",
			"jyutping": "jyu4 naam5",
			"english": "fish belly"
		},
		"6": {
			"chinese": ""
		}
	},
	"ngaam": {
		"1": {
			"chinese": "啱心水",
			"jyutping": "ngaam1 sam1 seoi2",
			"english": "something that you really like"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "癌症",
			"jyutping": "ngaam4 zing3",
			"english": "cancer"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"paam": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"saam": {
		"1": {
			"chinese": "三千",
			"jyutping": "saam1 cin1",
			"english": "three thousand"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "三思",
			"jyutping": "saam3 si1",
			"english": "to think thrice before doing"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"taam": {
		"1": {
			"chinese": "貪心",
			"jyutping": "taam1 sam1",
			"english": "greedy"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "探",
			"jyutping": "taam3",
			"english": "to visit"
		},
		"4": {
			"chinese": "談判",
			"jyutping": "taam4 pun3",
			"english": "to negotiate"
		},
		"5": {
			"chinese": "淡味",
			"jyutping": "taam5 mei6",
			"english": "light flavour"
		},
		"6": {
			"chinese": ""
		}
	},
	"waam": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zaam": {
		"1": {
			"chinese": "簪",
			"jyutping": "zaam1",
			"english": "hairpin"
		},
		"2": {
			"chinese": "斬件",
			"jyutping": "zaam2 gin2",
			"english": "to split into pieces"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "巴士站",
			"jyutping": "baa1 si2 zaam6",
			"english": "bus stop"
		}
	},
	"aan": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "晏晝",
			"jyutping": "aan3 zau3",
			"english": "afternoon"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"baan": {
		"1": {
			"chinese": "班房",
			"jyutping": "baan1 fong2",
			"english": "classroom"
		},
		"2": {
			"chinese": "木板",
			"jyutping": "muk6 baan2",
			"english": "wooden floorboard"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "扮鬼",
			"jyutping": "baan6 gwai2",
			"english": "to dress up in a costume"
		}
	},
	"caan": {
		"1": {
			"chinese": "餐廳",
			"jyutping": "caan1 teng1",
			"english": "café; restaurant"
		},
		"2": {
			"chinese": "地產",
			"jyutping": "dei6 caan2",
			"english": "real estate"
		},
		"3": {
			"chinese": "燦爛",
			"jyutping": "caan3 laan6",
			"english": "bright; magnificent"
		},
		"4": {
			"chinese": "巉眼",
			"jyutping": "caan4 ngaan5",
			"english": "bright (to the eye)"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"daan": {
		"1": {
			"chinese": "單據",
			"jyutping": "daan1 geoi3",
			"english": "receipts; invoices"
		},
		"2": {
			"chinese": "雞蛋",
			"jyutping": "gai1 daan2",
			"english": "eggs"
		},
		"3": {
			"chinese": "聖誕",
			"jyutping": "sing3 daan3",
			"english": "Christmas"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "彈弓",
			"jyutping": "daan6 gung1",
			"english": "a spring (as in one that's elastic)"
		}
	},
	"faan": {
		"1": {
			"chinese": "返去",
			"jyutping": "faan1 heoi3",
			"english": "to go back"
		},
		"2": {
			"chinese": "反對",
			"jyutping": "faan2 deoi3",
			"english": "to oppose"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "煩人",
			"jyutping": "faan4 jan4",
			"english": "annoying"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "犯罪",
			"jyutping": "faan6 zeoi6",
			"english": "to commit a crime"
		}
	},
	"gaan": {
		"1": {
			"chinese": "間",
			"jyutping": "gaan1",
			"english": "measure word for a room, building"
		},
		"2": {
			"chinese": "簡體",
			"jyutping": "gaan2 tai2",
			"english": "simplified"
		},
		"3": {
			"chinese": "間諜",
			"jyutping": "gaan3 dip6",
			"english": "spy"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gwaan": {
		"1": {
			"chinese": "關係",
			"jyutping": "gwaan1 hai6",
			"english": "relationship"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "習慣",
			"jyutping": "zap6 gwaan3",
			"english": "habit"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"haan": {
		"1": {
			"chinese": "慳錢",
			"jyutping": "haan1 cin2",
			"english": "thrifty"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "得閒",
			"jyutping": "dak1 haan4",
			"english": "free (in temrs of time)"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "限制",
			"jyutping": "haan6 zai3",
			"english": "restrictions"
		}
	},
	"jaan": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kaan": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwaan": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"laan": {
		"1": {
			"chinese": "躝癱",
			"jyutping": "laan1 taan2",
			"english": "someone who's lazy to the extent they might resemble a cripple"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "欄杆",
			"jyutping": "laan4 gon1",
			"english": "railing"
		},
		"5": {
			"chinese": "懶蟲",
			"jyutping": "laan5 cung4",
			"english": "lazy person"
		},
		"6": {
			"chinese": "爛咗",
			"jyutping": "laan6 zo2",
			"english": "broken"
		}
	},
	"maan": {
		"1": {
			"chinese": "摱車邊",
			"jyutping": "maan1 ce1 bin1",
			"english": "to receive benefits simply by being around someone"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "野蠻",
			"jyutping": "je5 maan4",
			"english": "savage"
		},
		"5": {
			"chinese": "尋晚",
			"jyutping": "cam4 maan5",
			"english": "last night"
		},
		"6": {
			"chinese": "慢跑",
			"jyutping": "maan6 paau2",
			"english": "slow jog"
		}
	},
	"naan": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "蚊赧",
			"jyutping": "man1 naan3",
			"english": "swelling from mosquito bite"
		},
		"4": {
			"chinese": "左右為難",
			"jyutping": "zo2 jau6 wai4 naan4",
			"english": "to be in a dilemma"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "災難",
			"jyutping": "zoi1 naan6",
			"english": "natural disaster"
		}
	},
	"ngaan": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "瞓晏覺",
			"jyutping": "fan3 ngaan3 gaau3",
			"english": "to take an afternoon nap"
		},
		"4": {
			"chinese": "顏色",
			"jyutping": "ngaan4 sik1",
			"english": "colour"
		},
		"5": {
			"chinese": "眼鏡",
			"jyutping": "ngaan5 geng2",
			"english": "glasses"
		},
		"6": {
			"chinese": "魚雁",
			"jyutping": "jyu4 ngaan6",
			"english": "an old term used to refer to letters (used for communication)"
		}
	},
	"paan": {
		"1": {
			"chinese": "攀爬",
			"jyutping": "paan1 paa4",
			"english": "to climb (mountains)"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "盼望",
			"jyutping": "paan3 mong6",
			"english": "to look forward to"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"saan": {
		"1": {
			"chinese": "閂門",
			"jyutping": "saan1 mun4",
			"english": "to close a door; to close up"
		},
		"2": {
			"chinese": "散紙",
			"jyutping": "saan2 zi2",
			"english": "loose change"
		},
		"3": {
			"chinese": "開枝散葉",
			"jyutping": "hoi1 zi1 saan3 jip6",
			"english": "have children"
		},
		"4": {
			"chinese": "潺",
			"jyutping": "saan4",
			"english": "to be in a weak state especially when sick"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"taan": {
		"1": {
			"chinese": "攤檔",
			"jyutping": "taan1 dong3",
			"english": "a stall"
		},
		"2": {
			"chinese": "癱瘓",
			"jyutping": "taan2 wun4",
			"english": "paralysis"
		},
		"3": {
			"chinese": "嘆茶",
			"jyutping": "taan3 caa4",
			"english": "to enjoy afternoon tea"
		},
		"4": {
			"chinese": "論壇",
			"jyutping": "leon6 taan4",
			"english": "forum"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"waan": {
		"1": {
			"chinese": "灣仔",
			"jyutping": "waan1 zai2",
			"english": "Wan Chai (MTR station)"
		},
		"2": {
			"chinese": "玩",
			"jyutping": "waan2",
			"english": "to play"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": "挽救",
			"jyutping": "waan5 gau3",
			"english": "to save (from trouble)"
		},
		"6": {
			"chinese": "患者",
			"jyutping": "waan6 ze2",
			"english": "a patient"
		}
	},
	"zaan": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "客棧",
			"jyutping": "haak3 zaan2",
			"english": "a guest house"
		},
		"3": {
			"chinese": "讚",
			"jyutping": "zaan3",
			"english": "to praise"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "賺錢",
			"jyutping": "zaan6 cin2",
			"english": "to earn money"
		}
	},
	"aang": {
		"1": {
			"chinese": "罌",
			"jyutping": "aang1",
			"english": "a piggy bank"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"baang": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "乒鈴𠾴唥",
			"jyutping": "ping4 ling1 baang4 laang4",
			"english": "something that's making a lot of noise (onomatopoeia)"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "冚唪唥",
			"jyutping": "ham6 baang6 laang6",
			"english": "all"
		}
	},
	"caang": {
		"1": {
			"chinese": "撐船",
			"jyutping": "caang1 syun4",
			"english": "rowing a boat"
		},
		"2": {
			"chinese": "橙",
			"jyutping": "caang2",
			"english": "orange"
		},
		"3": {
			"chinese": "撐枱腳",
			"jyutping": "caang3 toi2 geok3",
			"english": "a couple having a date together"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"daang": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"faang": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gaang": {
		"1": {
			"chinese": "耕田",
			"jyutping": "gaang1 tin4",
			"english": "to farm"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gwaang": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"haang": {
		"1": {
			"chinese": "坑渠",
			"jyutping": "haang1 keoi4",
			"english": "drain; ditch"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "行街",
			"jyutping": "haang4 gaai1",
			"english": "to go shopping"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"jaang": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kaang": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwaang": {
		"1": {
			"chinese": "框架",
			"jyutping": "kwaang1 gaa2",
			"english": "framework"
		},
		"2": {
			"chinese": "筐",
			"jyutping": "kwaang2",
			"english": "a Chinese style basket"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"laang": {
		"1": {
			"chinese": "冷衫",
			"jyutping": "laang1 saam1",
			"english": "sweater"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "乒鈴𠾴唥",
			"jyutping": "ping4 ling1 paang4 laang4",
			"english": "something that's making a very loud noise (onomatopoeia)"
		},
		"5": {
			"chinese": "冷氣",
			"jyutping": "laang5 hei3",
			"english": "A/C"
		},
		"6": {
			"chinese": "冚唪唥",
			"jyutping": "ham6 baang6 laang6",
			"english": "all"
		}
	},
	"maang": {
		"1": {
			"chinese": "繃緊",
			"jyutping": "maang1 gan2",
			"english": "to stretch taut"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "盲人",
			"jyutping": "maang4 jan4",
			"english": "a blind person"
		},
		"5": {
			"chinese": "威猛",
			"jyutping": "wai1 maang5",
			"english": "mighty and strong (physically)"
		},
		"6": {
			"chinese": "孟母三遷",
			"jyutping": "maang6 mou5 saam1 cin1",
			"english": "a famous story where the mother of Mencius moves thrice in order to provide the best environment for her son"
		}
	},
	"naang": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ngaang": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "硬係",
			"jyutping": "ngaang2 hai6",
			"english": "always (habitual characteristics)"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "硬",
			"jyutping": "ngaang6",
			"english": "hard"
		}
	},
	"paang": {
		"1": {
			"chinese": "烹飪",
			"jyutping": "paang1 jam6",
			"english": "cooking (noun)"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "爆棚",
			"jyutping": "baau3 paang4",
			"english": "extremely"
		},
		"5": {
			"chinese": "火棒",
			"jyutping": "fo2 paang5",
			"english": "lit torch"
		},
		"6": {
			"chinese": ""
		}
	},
	"saang": {
		"1": {
			"chinese": "生字",
			"jyutping": "saang1 zi6",
			"english": "vocabulary"
		},
		"2": {
			"chinese": "省份",
			"jyutping": "saang2 fan6",
			"english": "province"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"taang": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"waang": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "打橫",
			"jyutping": "daa2 waang4",
			"english": "someone who's unreasonable and irrational"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zaang": {
		"1": {
			"chinese": "爭",
			"jyutping": "zaang1",
			"english": "to fight with someone over something"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"aap": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "填鴨式教育",
			"jyutping": "tin4 aap2 sik1 gaau3 juk6",
			"english": "spoon feeding education"
		},
		"3": {
			"chinese": "燒鴨",
			"jyutping": "siu1 aap3",
			"english": "roast duck"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"baap": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"caap": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "插蘇",
			"jyutping": "caap3 sou1",
			"english": "electrical plug"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"daap": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "搭車",
			"jyutping": "daap3 ce1",
			"english": "to go somewhere by some form of transport"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "疊",
			"jyutping": "daap6",
			"english": "pile"
		}
	},
	"faap": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gaap": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "萬字夾",
			"jyutping": "maan6 zi6 gaap2",
			"english": "paper clip"
		},
		"3": {
			"chinese": "夾萬",
			"jyutping": "gaap3 maan6",
			"english": "a safe"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gwaap": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"haap": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "呷醋",
			"jyutping": "haap3 cou3",
			"english": "jealous"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "狹窄",
			"jyutping": "haap6 zaak6",
			"english": "narrow"
		}
	},
	"jaap": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "押高褲腳",
			"jyutping": "jaap3 gou1 fu3 goek3",
			"english": "to roll up the trouser cuffs"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kaap": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwaap": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"laap": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "擸埋",
			"jyutping": "laap3 maai4",
			"english": "to buy the remainder of the goods left in a shop"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "獨立",
			"jyutping": "duk6 laap6",
			"english": "independence"
		}
	},
	"maap": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"naap": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "接納",
			"jyutping": "zip3 naap6",
			"english": "to accept"
		}
	},
	"ngaap": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "鴨",
			"jyutping": "ngaap3",
			"english": "duck"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"paap": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"saap": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "垃圾",
			"jyutping": "laap6 saap3",
			"english": "garbage"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "烚吓烚吓",
			"jyutping": "saap6 haa5 saap6 haa5",
			"english": "to live aimlessly, lost, not knowing what one is doing"
		}
	},
	"taap": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "金字塔",
			"jyutping": "gam1 zi6 taap3",
			"english": "pyramid"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"waap": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zaap": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "咂嘴",
			"jyutping": "zaap3 zeoi2",
			"english": "lip smacking"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "拉閘",
			"jyutping": "laai1 zaap6",
			"english": "to close up (shop)"
		}
	},
	"aat": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "大押",
			"jyutping": "daai6 aat3",
			"english": "Pawnshop"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"baat": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "八卦",
			"jyutping": "baat3 gwaa3",
			"english": "the eight trigrams; gossip"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"caat": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "摩擦",
			"jyutping": "mo4 caat3",
			"english": "friction"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"daat": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "大笪地",
			"jyutping": "daai6 daat3 dei2",
			"english": "public square"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "達到",
			"jyutping": "daat6 dou3",
			"english": "to reach"
		}
	},
	"faat": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "發達",
			"jyutping": "faat3 daat6",
			"english": "developed (as in country)"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gaat": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "曱甴",
			"jyutping": "gaat6 zaak2",
			"english": "cockroach"
		}
	},
	"gwaat": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "刮",
			"jyutping": "gwaat3",
			"english": "to scrape off"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"haat": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"jaat": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kaat": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwaat": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"laat": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "瘌痢",
			"jyutping": "laat3 lei1",
			"english": "favus of the scalp (a medical condition)"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "邋遢",
			"jyutping": "laat6 taat3",
			"english": "someone who's untidy and disorganized"
		}
	},
	"maat": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "抹枱",
			"jyutping": "maat3 toi2",
			"english": "to wipe a table"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"naat": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ngaat": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"paat": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"saat": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "殺人",
			"jyutping": "saat3 jan4",
			"english": "to kill someone"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"taat": {
		"1": {
			"chinese": "蛋撻",
			"jyutping": "daan6 taat1",
			"english": "egg tart"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "撻訂",
			"jyutping": "taat3 deng6",
			"english": "to forgo the deposit"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"waat": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "滑梯",
			"jyutping": "waat6 tai1",
			"english": "slide (playgrounds)"
		}
	},
	"zaat": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "牛軋糖",
			"jyutping": "ngau4 zaat3 tong2",
			"english": "nougat"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"aak": {
		"1": {
			"chinese": "把握",
			"jyutping": "baa2 aak1",
			"english": "to grasp"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"baak": {
		"1": {
			"chinese": "啪紐",
			"jyutping": "baak1 lau2",
			"english": "to pop a button in place"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "百事",
			"jyutping": "baak3 si6",
			"english": "Pepsi"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "白色",
			"jyutping": "baak6 sik1",
			"english": "white"
		}
	},
	"caak": {
		"1": {
			"chinese": "測驗",
			"jyutping": "caak1 jim6",
			"english": "test; to test"
		},
		"2": {
			"chinese": "賊",
			"jyutping": "caak2",
			"english": "thief"
		},
		"3": {
			"chinese": "擦膠",
			"jyutping": "caak3 gaau1",
			"english": "rubber; eraser"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"daak": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"faak": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gaak": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "隔離",
			"jyutping": "gaak3 lei4",
			"english": "next to"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gwaak": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "摑",
			"jyutping": "gwaak3",
			"english": "to smack someone (in the face)"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"haak": {
		"1": {
			"chinese": "赫爾辛基",
			"jyutping": "haak1 ji5 san1 gei1",
			"english": "Helsinski"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"jaak": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kaak": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwaak": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"laak": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "嘞",
			"jyutping": "laak3",
			"english": "Cantonese final particle"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "勒索",
			"jyutping": "laak6 sok3",
			"english": "to blackmail"
		}
	},
	"maak": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "擘大眼",
			"jyutping": "maak3 daai6 ngaan5",
			"english": "to open one's eyes wide"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"naak": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ngaak": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "額頭",
			"jyutping": "ngaak6 tau4",
			"english": "forehead"
		}
	},
	"paak": {
		"1": {
			"chinese": "啪丸",
			"jyutping": "paak1 jyun2",
			"english": "to take drugs"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "拍子",
			"jyutping": "paak3 zi2",
			"english": "tempo (as in musical tempo)"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"saak": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"taak": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"waak": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "計劃",
			"jyutping": "gai3 waak6",
			"english": "plan"
		}
	},
	"zaak": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "責備",
			"jyutping": "zaak3 bei6",
			"english": "to blame"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "擲",
			"jyutping": "zaak6",
			"english": "to throw"
		}
	},
	"ai": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "矮",
			"jyutping": "ai2",
			"english": "short"
		},
		"3": {
			"chinese": "翳焗",
			"jyutping": "ai3 guk6",
			"english": "hot and stuffy (room)"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"bai": {
		"1": {
			"chinese": "跛",
			"jyutping": "bai1",
			"english": "the lame (someone who cannot walk)"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "自閉",
			"jyutping": "zi6 bai3",
			"english": "autistic"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "貨幣",
			"jyutping": "fo3 bai6",
			"english": "currency"
		}
	},
	"cai": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "砌圖",
			"jyutping": "cai3 tou4",
			"english": "jigsaw puzzle"
		},
		"4": {
			"chinese": "一齊",
			"jyutping": "jat1 cai4",
			"english": "together"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"dai": {
		"1": {
			"chinese": "低B",
			"jyutping": "dai1 B",
			"english": "idiot"
		},
		"2": {
			"chinese": "底線",
			"jyutping": "dai2 sin3",
			"english": "bottom line"
		},
		"3": {
			"chinese": "皇帝",
			"jyutping": "wong4 dai3",
			"english": "emperor"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "速遞",
			"jyutping": "cuk1 dai6",
			"english": "delivery"
		}
	},
	"fai": {
		"1": {
			"chinese": "揮手",
			"jyutping": "fai1 sau2",
			"english": "to wave at someone"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "廢氣",
			"jyutping": "fai3 hei3",
			"english": "exhaust gas"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gai": {
		"1": {
			"chinese": "雞腳",
			"jyutping": "gai1 goek3",
			"english": "chicken feet"
		},
		"2": {
			"chinese": "計仔",
			"jyutping": "gai2 zai2",
			"english": "an idea"
		},
		"3": {
			"chinese": "計數",
			"jyutping": "gai3 sou3",
			"english": "to do arithmetic"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gwai": {
		"1": {
			"chinese": "烏龜",
			"jyutping": "wu1 gwai1",
			"english": "tortoise"
		},
		"2": {
			"chinese": "鬼仔",
			"jyutping": "gwai2 zai2",
			"english": "foreigner"
		},
		"3": {
			"chinese": "貴格",
			"jyutping": "gwai3 gaak3",
			"english": "expensive"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "櫃桶",
			"jyutping": "gwai6 tung2",
			"english": "the drawers"
		}
	},
	"hai": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "喺",
			"jyutping": "hai2",
			"english": "to be (somewhere)"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "係",
			"jyutping": "hai6",
			"english": "to be (someone)"
		}
	},
	"jai": {
		"1": {
			"chinese": "曳曳",
			"jyutping": "jai1 jai1",
			"english": "naughty (used by parents to describe their children)"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": "曳",
			"jyutping": "jai5",
			"english": "naughty"
		},
		"6": {
			"chinese": ""
		}
	},
	"kai": {
		"1": {
			"chinese": "溪",
			"jyutping": "kai1",
			"english": "a small stream"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "契弟",
			"jyutping": "kai3 dai6",
			"english": "bastard (vulgar)"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwai": {
		"1": {
			"chinese": "規矩",
			"jyutping": "kwai1 geoi",
			"english": "rules"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "葵涌",
			"jyutping": "kwai4 cung1",
			"english": "Kwai Chung (MTR station)"
		},
		"5": {
			"chinese": "愧疚",
			"jyutping": "kwai5 gau3",
			"english": "guilty"
		},
		"6": {
			"chinese": ""
		}
	},
	"lai": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "黎姿",
			"jyutping": "lai4 zi1",
			"english": "Gigi Lai, a Hong Kong actress"
		},
		"5": {
			"chinese": "禮儀",
			"jyutping": "lai5 ji4",
			"english": "etiquette"
		},
		"6": {
			"chinese": "例子",
			"jyutping": "lai6 zi2",
			"english": "example"
		}
	},
	"mai": {
		"1": {
			"chinese": "咪書",
			"jyutping": "mai1 syu1",
			"english": "to study excessively (derogatory)"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "迷宮",
			"jyutping": "mai4 gung1",
			"english": "maze"
		},
		"5": {
			"chinese": "米粉",
			"jyutping": "mai5 fan2",
			"english": "vermicilli"
		},
		"6": {
			"chinese": "係咪",
			"jyutping": "hai6 mai6",
			"english": "whether something is or not (yes no question)"
		}
	},
	"nai": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "泥土",
			"jyutping": "nai4 tou2",
			"english": "soil"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ngai": {
		"1": {
			"chinese": "ngai1",
			"jyutping": "ngai1",
			"english": "to beg someone"
		},
		"2": {
			"chinese": "矮瓜",
			"jyutping": "ngai2 gwaa1",
			"english": "eggplant"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "危險",
			"jyutping": "ngai4 him2",
			"english": "danger"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "藝術",
			"jyutping": "ngai6 seot6",
			"english": "art"
		}
	},
	"pai": {
		"1": {
			"chinese": "批准",
			"jyutping": "pai1 zeon2",
			"english": "to approve (a project, a decision)"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"sai": {
		"1": {
			"chinese": "篩選",
			"jyutping": "sai1 syun2",
			"english": "to filter"
		},
		"2": {
			"chinese": "洗車",
			"jyutping": "sai2 ce1",
			"english": "to wash (cars)"
		},
		"3": {
			"chinese": "細路仔",
			"jyutping": "sai3 lou6 zai2",
			"english": "kids"
		},
		"4": {
			"chinese": "笑口噬噬",
			"jyutping": "siu3 hau2 sai4 sai4",
			"english": "feining cheerfulness"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "發誓",
			"jyutping": "faat3 sai6",
			"english": "to swear (to do something)"
		}
	},
	"tai": {
		"1": {
			"chinese": "樓梯",
			"jyutping": "laau4 tai1",
			"english": "stairs"
		},
		"2": {
			"chinese": "睇戲",
			"jyutping": "tai2 hei3",
			"english": "to watch a movie"
		},
		"3": {
			"chinese": "鼻涕",
			"jyutping": "bei6 tai3",
			"english": "snot"
		},
		"4": {
			"chinese": "提到",
			"jyutping": "tai4 dou3",
			"english": "to mention"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"wai": {
		"1": {
			"chinese": "示威",
			"jyutping": "si6 wai1",
			"english": "to protest"
		},
		"2": {
			"chinese": "喂",
			"jyutping": "wai2",
			"english": "hello (on the phone)"
		},
		"3": {
			"chinese": "餵",
			"jyutping": "wai3",
			"english": "to feed"
		},
		"4": {
			"chinese": "大圍",
			"jyutping": "daai6 wai4",
			"english": "Tai Wai (MTR station)"
		},
		"5": {
			"chinese": "偉大",
			"jyutping": "wai5 daai6",
			"english": "grand"
		},
		"6": {
			"chinese": "位置",
			"jyutping": "wai6 zi3",
			"english": "place"
		}
	},
	"zai": {
		"1": {
			"chinese": "擠迫",
			"jyutping": "zai1 bik1",
			"english": "crowded"
		},
		"2": {
			"chinese": "孫仔",
			"jyutping": "syun1 zai2",
			"english": "grandson"
		},
		"3": {
			"chinese": "經濟",
			"jyutping": "ging1 zai3",
			"english": "economics"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "滯",
			"jyutping": "zai6",
			"english": "to be stuck in a place (progress)"
		}
	},
	"au": {
		"1": {
			"chinese": "歐洲",
			"jyutping": "au1 zau1",
			"english": "Europe"
		},
		"2": {
			"chinese": "嘔吐",
			"jyutping": "au2 tou3",
			"english": "to vomit"
		},
		"3": {
			"chinese": "慪氣",
			"jyutping": "au3 hei3",
			"english": "to sulk"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"bau": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"cau": {
		"1": {
			"chinese": "秋天",
			"jyutping": "cau1 tin1",
			"english": "fall; autumn"
		},
		"2": {
			"chinese": "小丑",
			"jyutping": "siu2 cau2",
			"english": "clown"
		},
		"3": {
			"chinese": "臭味",
			"jyutping": "cau3 mei6",
			"english": "a stench"
		},
		"4": {
			"chinese": "籌款",
			"jyutping": "cau4 fun2",
			"english": "to gather funds"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"dau": {
		"1": {
			"chinese": "兜",
			"jyutping": "dau1",
			"english": "a bowl"
		},
		"2": {
			"chinese": "豆",
			"jyutping": "dau2",
			"english": "peas"
		},
		"3": {
			"chinese": "狗竇",
			"jyutping": "gau2 dau3",
			"english": "a messy place"
		},
		"4": {
			"chinese": "豆豆",
			"jyutping": "dau4 dau2",
			"english": "peas"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "豆腐",
			"jyutping": "dau6 fu6",
			"english": "tofu"
		}
	},
	"fau": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "否定",
			"jyutping": "fau2 ding6",
			"english": "to deny"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "浮",
			"jyutping": "fau4",
			"english": "to float"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "埠",
			"jyutping": "fau6",
			"english": "port"
		}
	},
	"gau": {
		"1": {
			"chinese": "鳩",
			"jyutping": "gau1",
			"english": "turtledove; also a rude word"
		},
		"2": {
			"chinese": "狗仔",
			"jyutping": "gau2 zai2",
			"english": "paparazzi"
		},
		"3": {
			"chinese": "足夠",
			"jyutping": "zuk1 gau3",
			"english": "sufficient"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "舊樓",
			"jyutping": "gau6 lau2",
			"english": "old building"
		}
	},
	"gwau": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"hau": {
		"1": {
			"chinese": "吼",
			"jyutping": "hau1",
			"english": "to howl"
		},
		"2": {
			"chinese": "口",
			"jyutping": "hau2",
			"english": "mouth"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "膠喉",
			"jyutping": "gaau1 hau4",
			"english": "plastic tube"
		},
		"5": {
			"chinese": "厚薄",
			"jyutping": "hau5 bok6",
			"english": "thickness"
		},
		"6": {
			"chinese": "季候風",
			"jyutping": "gwai3 hau6 fung1",
			"english": "monsoon winds"
		}
	},
	"jau": {
		"1": {
			"chinese": "優秀",
			"jyutping": "jau1 sau3",
			"english": "outstanding"
		},
		"2": {
			"chinese": "偈油",
			"jyutping": "gai2 jau2",
			"english": "lubricating oil"
		},
		"3": {
			"chinese": "幼稚園",
			"jyutping": "jau3 zi6 jyun2",
			"english": "kindergarten"
		},
		"4": {
			"chinese": "食油",
			"jyutping": "sik6 jau4",
			"english": "cooking oil"
		},
		"5": {
			"chinese": "有冇",
			"jyutping": "jau5 mou5",
			"english": "Do you have...? Is there...?"
		},
		"6": {
			"chinese": "右手",
			"jyutping": "jau6 sau2",
			"english": "right hand"
		}
	},
	"kau": {
		"1": {
			"chinese": "溝通",
			"jyutping": "kau1 tung1",
			"english": "communication"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "扣分",
			"jyutping": "kau3 fan1",
			"english": "to dock points from"
		},
		"4": {
			"chinese": "祈求",
			"jyutping": "kei4 kau4",
			"english": "to pray and hope for"
		},
		"5": {
			"chinese": "杵臼",
			"jyutping": "cyu5 kau5",
			"english": "mortar and pestle"
		},
		"6": {
			"chinese": ""
		}
	},
	"kwau": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"lau": {
		"1": {
			"chinese": "褸尾",
			"jyutping": "lau1 mei1",
			"english": "dead last"
		},
		"2": {
			"chinese": "睇樓",
			"jyutping": "tai2 lau2",
			"english": "to go around looking at property"
		},
		"3": {
			"chinese": "嘍打",
			"jyutping": "lau3 daa2",
			"english": "to pick a fight"
		},
		"4": {
			"chinese": "留低",
			"jyutping": "lau4 dai1",
			"english": "to stay behind"
		},
		"5": {
			"chinese": "柳樹",
			"jyutping": "lau5 syu6",
			"english": "willow"
		},
		"6": {
			"chinese": "洩漏",
			"jyutping": "sit3 lau6",
			"english": "to leak (a secret)"
		}
	},
	"mau": {
		"1": {
			"chinese": "踎低",
			"jyutping": "mau1 dai1",
			"english": "to crouch"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "參謀",
			"jyutping": "caam1 mau4",
			"english": "a strategist"
		},
		"5": {
			"chinese": "某人",
			"jyutping": "mau5 jan4",
			"english": "someone"
		},
		"6": {
			"chinese": "貿易",
			"jyutping": "mau6 jik6",
			"english": "trade"
		}
	},
	"nau": {
		"1": {
			"chinese": "嬲",
			"jyutping": "nau1",
			"english": "angry"
		},
		"2": {
			"chinese": "扭計",
			"jyutping": "nau2 gai2",
			"english": "to sulk (children)"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ngau": {
		"1": {
			"chinese": "勾引",
			"jyutping": "ngau1 jan5",
			"english": "to seduce"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "蝸牛",
			"jyutping": "wo1 ngau4",
			"english": "snail"
		},
		"5": {
			"chinese": "偶像",
			"jyutping": "ngau5 zoeng6",
			"english": "idol"
		},
		"6": {
			"chinese": "發吽豆",
			"jyutping": "faat3 ngau6 dau6",
			"english": "to stare off blankly into space"
		}
	},
	"pau": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "裒輯",
			"jyutping": "pau4 cap1",
			"english": "to compile"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"sau": {
		"1": {
			"chinese": "收埋",
			"jyutping": "sau1 maai4",
			"english": "to hide (something)"
		},
		"2": {
			"chinese": "手套",
			"jyutping": "sau2 tou3",
			"english": "gloves"
		},
		"3": {
			"chinese": "瘦肉",
			"jyutping": "sau3 juk6",
			"english": "lean pork"
		},
		"4": {
			"chinese": "報仇",
			"jyutping": "bou3 sau4",
			"english": "to exact revenge on"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "長壽",
			"jyutping": "coeng4 sau6",
			"english": "long lived"
		}
	},
	"tau": {
		"1": {
			"chinese": "小偷",
			"jyutping": "siu2 tau1",
			"english": "thief"
		},
		"2": {
			"chinese": "唞氣",
			"jyutping": "tau2 hei3",
			"english": "to catch one's breath"
		},
		"3": {
			"chinese": "透明",
			"jyutping": "tau3 ming4",
			"english": "transparent"
		},
		"4": {
			"chinese": "頭髮",
			"jyutping": "tau4 faat3",
			"english": "hair"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"wau": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zau": {
		"1": {
			"chinese": "溫州",
			"jyutping": "wan1 zau1",
			"english": "Wenzhou (a place in China)"
		},
		"2": {
			"chinese": "酒吧",
			"jyutping": "zau2 baa1",
			"english": "bar"
		},
		"3": {
			"chinese": "咀咒",
			"jyutping": "zeoi2 zau3",
			"english": "curse (magic)"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "衫袖",
			"jyutping": "saam1 zau6",
			"english": "sleeve"
		}
	},
	"am": {
		"1": {
			"chinese": "鵪鶉",
			"jyutping": "am1 ceon1",
			"english": "quail"
		},
		"2": {
			"chinese": "黯然失色",
			"jyutping": "am2 jin4 sat1 sik1",
			"english": "to look down, not have colour in one's face on account of being depressed"
		},
		"3": {
			"chinese": "暗殺",
			"jyutping": "am3 saat3",
			"english": "to assassinate"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"bam": {
		"1": {
			"chinese": "泵",
			"jyutping": "bam1",
			"english": "a pump"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"cam": {
		"1": {
			"chinese": "侵犯",
			"jyutping": "cam1 faan6",
			"english": "to invade"
		},
		"2": {
			"chinese": "寢室",
			"jyutping": "cam2 sat1",
			"english": "bedroom"
		},
		"3": {
			"chinese": "噆氣",
			"jyutping": "cam3 hei3",
			"english": "someone who talks too much"
		},
		"4": {
			"chinese": "陰沉",
			"jyutping": "jam1 cam4",
			"english": "dark and brooding"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"dam": {
		"1": {
			"chinese": "揼時間",
			"jyutping": "dam1 si4 gaan3",
			"english": "something that's dragging on (especially when waiting for something)"
		},
		"2": {
			"chinese": "抌",
			"jyutping": "dam2",
			"english": "to throw away"
		},
		"3": {
			"chinese": "髧",
			"jyutping": "dam3",
			"english": "to droop"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"fam": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gam": {
		"1": {
			"chinese": "金",
			"jyutping": "gam1",
			"english": "gold"
		},
		"2": {
			"chinese": "感冒",
			"jyutping": "gam2 mou6",
			"english": "a cold"
		},
		"3": {
			"chinese": "禁止",
			"jyutping": "gam3 zi2",
			"english": "to forbid"
		},
		"4": {
			"chinese": "黃黚黚",
			"jyutping": "wong4 gam4 gam4",
			"english": "something yellowish (that's disgusting)"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "撳𨋢",
			"jyutping": "gam6 lip1",
			"english": "to press the lift button"
		}
	},
	"gwam": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ham": {
		"1": {
			"chinese": "坎坷",
			"jyutping": "ham1 ho1",
			"english": "describes a life with much adversity and hardships"
		},
		"2": {
			"chinese": "砍頭",
			"jyutping": "ham2 tau4",
			"english": "to hit one's head (esp. against a wall)"
		},
		"3": {
			"chinese": "勘誤",
			"jyutping": "ham3 m6",
			"english": "errata"
		},
		"4": {
			"chinese": "包含",
			"jyutping": "baau1 ham4",
			"english": "to include"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "陷阱",
			"jyutping": "ham6 zeng6",
			"english": "a trap"
		}
	},
	"jam": {
		"1": {
			"chinese": "音樂",
			"jyutping": "jam1 ngok6",
			"english": "music"
		},
		"2": {
			"chinese": "飲水",
			"jyutping": "jam2 seoi2",
			"english": "to drink water"
		},
		"3": {
			"chinese": "樹蔭",
			"jyutping": "syu6 jam3",
			"english": "shade under a tree"
		},
		"4": {
			"chinese": "吟詩作對",
			"jyutping": "jam4 si1 zok3 deoi3",
			"english": "composing poems and couplets"
		},
		"5": {
			"chinese": "荏苒",
			"jyutping": "jam5 jim5",
			"english": "time flies"
		},
		"6": {
			"chinese": "責任",
			"jyutping": "zaak3 jam6",
			"english": "responsibility"
		}
	},
	"kam": {
		"1": {
			"chinese": "胸襟",
			"jyutping": "hung1 kam1",
			"english": "breadth of heart"
		},
		"2": {
			"chinese": "搇被",
			"jyutping": "kam2 pei5",
			"english": "to pull a blanket over oneself"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "鋼琴",
			"jyutping": "gong3 kam4",
			"english": "a piano"
		},
		"5": {
			"chinese": "大妗",
			"jyutping": "daai6 kam5",
			"english": "matchmaker"
		},
		"6": {
			"chinese": ""
		}
	},
	"kwam": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"lam": {
		"1": {
			"chinese": "冧巴",
			"jyutping": "lam1 baa2",
			"english": "number (transliteration)"
		},
		"2": {
			"chinese": "諗",
			"jyutping": "lam2",
			"english": "to think"
		},
		"3": {
			"chinese": "冧樓",
			"jyutping": "lam3 lau2",
			"english": "to collapse (a building)"
		},
		"4": {
			"chinese": "臨時",
			"jyutping": "lam4 si4",
			"english": "temporary"
		},
		"5": {
			"chinese": "凜然",
			"jyutping": "lam5 jin4",
			"english": "righteousness"
		},
		"6": {
			"chinese": "油淋淋",
			"jyutping": "jau4 lam6 lam6",
			"english": "oily"
		}
	},
	"mam": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"nam": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "諗法",
			"jyutping": "nam2 faat3",
			"english": "way of thinking, thoughts"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "腍",
			"jyutping": "nam4",
			"english": "soft"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "濕淰淰",
			"jyutping": "sap1 nam6 nam6",
			"english": "to be wet"
		}
	},
	"ngam": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "揞住",
			"jyutping": "ngam2 zyu6",
			"english": "to cover up (one's ears / nose)"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "吟沉",
			"jyutping": "ngam4 cam4",
			"english": "someone who drones on and on"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"pam": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"sam": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "審美",
			"jyutping": "sam2 mei5",
			"english": "to judge something in terms of its aesthetics"
		},
		"3": {
			"chinese": "滲透",
			"jyutping": "sam3 tau3",
			"english": "to permeate"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "甚至",
			"jyutping": "sam6 zi3",
			"english": "even, to the extent that"
		}
	},
	"tam": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "氹",
			"jyutping": "tam3",
			"english": "to cajole"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"wam": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zam": {
		"1": {
			"chinese": "斟",
			"jyutping": "zam1",
			"english": "to pour (a drink)"
		},
		"2": {
			"chinese": "枕頭",
			"jyutping": "zam2 tau4",
			"english": "pillow"
		},
		"3": {
			"chinese": "水浸",
			"jyutping": "seoi2 zam3",
			"english": "flood"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "鴆毒",
			"jyutping": "zam6 duk6",
			"english": "the poison of the Zhenniao (a poisonous bird that was said to have existed in ancient China"
		}
	},
	"an": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ban": {
		"1": {
			"chinese": "賓館",
			"jyutping": "ban1 gun2",
			"english": "guesthouse"
		},
		"2": {
			"chinese": "獎品",
			"jyutping": "zoeng2 ban2",
			"english": "prize"
		},
		"3": {
			"chinese": "殯儀館",
			"jyutping": "ban3 ji4 gun2",
			"english": "funeral home"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "大笨象",
			"jyutping": "daai6 ban6 zoeng6",
			"english": "elephant"
		}
	},
	"can": {
		"1": {
			"chinese": "親戚",
			"jyutping": "can1 cik1",
			"english": "relatives"
		},
		"2": {
			"chinese": "診斷",
			"jyutping": "can2 dyun6",
			"english": "to diagnose"
		},
		"3": {
			"chinese": "親家",
			"jyutping": "can3 gaa1",
			"english": "son / daughter's spouse's family"
		},
		"4": {
			"chinese": "塵埃",
			"jyutping": "can4 oi1",
			"english": "dust"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"dan": {
		"1": {
			"chinese": "踎墩",
			"jyutping": "mau1 dan1",
			"english": "unemployed"
		},
		"2": {
			"chinese": "躉",
			"jyutping": "dan2",
			"english": "measure word for buildings"
		},
		"3": {
			"chinese": "撉",
			"jyutping": "dan3",
			"english": "to hit the ground suddenly, with a lot of force"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "燉奶",
			"jyutping": "dan6 naai5",
			"english": "steamed milk pudding"
		}
	},
	"fan": {
		"1": {
			"chinese": "分享",
			"jyutping": "fan1 hoeng2",
			"english": "to share"
		},
		"2": {
			"chinese": "粉紅",
			"jyutping": "fan2 hung4",
			"english": "pink"
		},
		"3": {
			"chinese": "糞便",
			"jyutping": "fan3 bin6",
			"english": "dung"
		},
		"4": {
			"chinese": "焚化爐",
			"jyutping": "fan4 faa3 lou4",
			"english": "incinerator"
		},
		"5": {
			"chinese": "憤怒",
			"jyutping": "fan5 nou6",
			"english": "anger"
		},
		"6": {
			"chinese": "份數",
			"jyutping": "fan6 sou3",
			"english": "fraction"
		}
	},
	"gan": {
		"1": {
			"chinese": "跟住",
			"jyutping": "gan1 zyu6",
			"english": "and then; to follow"
		},
		"2": {
			"chinese": "緊張",
			"jyutping": "gan2 zoeng1",
			"english": "nervous"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "接近",
			"jyutping": "zip3 gan6",
			"english": "close to"
		}
	},
	"gwan": {
		"1": {
			"chinese": "軍人",
			"jyutping": "gwan1 jan4",
			"english": "soldier"
		},
		"2": {
			"chinese": "滾水",
			"jyutping": "gwan2 seoi2",
			"english": "boiling water"
		},
		"3": {
			"chinese": "棍",
			"jyutping": "gwan3",
			"english": "a stick"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"han": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "很",
			"jyutping": "han2",
			"english": "very"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "身痕",
			"jyutping": "san1 han4",
			"english": "body itchy; having a strong urge to do something"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "恨",
			"jyutping": "han6",
			"english": "to wish for something badly; to hate"
		}
	},
	"jan": {
		"1": {
			"chinese": "原因",
			"jyutping": "jyun4 jan1",
			"english": "reason"
		},
		"2": {
			"chinese": "忍者",
			"jyutping": "jan2 ze2",
			"english": "ninja"
		},
		"3": {
			"chinese": "印刷",
			"jyutping": "jan3 caat3",
			"english": "print; printing"
		},
		"4": {
			"chinese": "香港人",
			"jyutping": "hoeng1 gong2 jan4",
			"english": "Hongkonger"
		},
		"5": {
			"chinese": "上癮",
			"jyutping": "soeng5 jan5",
			"english": "to become addicted to"
		},
		"6": {
			"chinese": "懷孕",
			"jyutping": "waai4 jan6",
			"english": "to be pregnant, to have conceived"
		}
	},
	"kan": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "勤力",
			"jyutping": "kan4 lik6",
			"english": "hard-working"
		},
		"5": {
			"chinese": "近",
			"jyutping": "kan5",
			"english": "nearby"
		},
		"6": {
			"chinese": ""
		}
	},
	"kwan": {
		"1": {
			"chinese": "昆蟲",
			"jyutping": "kwan1 cung4",
			"english": "insects"
		},
		"2": {
			"chinese": "細菌",
			"jyutping": "sai3 kwan2",
			"english": "bacteria"
		},
		"3": {
			"chinese": "困難",
			"jyutping": "kwan3 naan4",
			"english": "difficult; hard"
		},
		"4": {
			"chinese": "人群",
			"jyutping": "jan4 kwan4",
			"english": "a crowd of people"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"lan": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "撚",
			"jyutping": "lan2",
			"english": "word you add in phrases to make it rude"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"man": {
		"1": {
			"chinese": "蚊",
			"jyutping": "man1",
			"english": "dollar"
		},
		"2": {
			"chinese": "新聞",
			"jyutping": "san1 man2",
			"english": "news"
		},
		"3": {
			"chinese": "man3",
			"jyutping": "man3",
			"english": "to be very close to (e.g. a deadline)"
		},
		"4": {
			"chinese": "文化",
			"jyutping": "man4 faa3",
			"english": "culture"
		},
		"5": {
			"chinese": "初吻",
			"jyutping": "co1 man5",
			"english": "first kiss"
		},
		"6": {
			"chinese": "問題",
			"jyutping": "man6 tai4",
			"english": "question; problem"
		}
	},
	"nan": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ngan": {
		"1": {
			"chinese": "奀皮",
			"jyutping": "ngan1 pei4",
			"english": "naughty (to children)"
		},
		"2": {
			"chinese": "銀仔",
			"jyutping": "ngan2 zai2",
			"english": "coins"
		},
		"3": {
			"chinese": "䟴腳",
			"jyutping": "ngan3 goek3",
			"english": "shake one's leg up and down when sitting, believed to be bad behaviour in Chinese culture"
		},
		"4": {
			"chinese": "銀行",
			"jyutping": "ngan4 hong4",
			"english": "bank"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "煙韌",
			"jyutping": "jin1 ngan6",
			"english": "chewy"
		}
	},
	"pan": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "噴火",
			"jyutping": "pan3 fo2",
			"english": "breathe fire"
		},
		"4": {
			"chinese": "頻繁",
			"jyutping": "pan4 faan4",
			"english": "frequent"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"san": {
		"1": {
			"chinese": "新年",
			"jyutping": "san1 nin4",
			"english": "New Year"
		},
		"2": {
			"chinese": "神神地",
			"jyutping": "san5 san2 dei2",
			"english": "mentally defective"
		},
		"3": {
			"chinese": "呻窮",
			"jyutping": "san3 kung4",
			"english": "to lament oneself is poor"
		},
		"4": {
			"chinese": "神",
			"jyutping": "san4",
			"english": "God"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "腎臟",
			"jyutping": "san6 zong6",
			"english": "kidney"
		}
	},
	"tan": {
		"1": {
			"chinese": "雲吞",
			"jyutping": "wan4 tan1",
			"english": "Wantons (dumplings)"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "褪後",
			"jyutping": "tan3 hau6",
			"english": "to go backwards (usually when driving)"
		},
		"4": {
			"chinese": "惡揗揗",
			"jyutping": "ok3 tan4 tan4",
			"english": "someone who's fierce"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"wan": {
		"1": {
			"chinese": "溫書",
			"jyutping": "wan1 syu1",
			"english": "to revise"
		},
		"2": {
			"chinese": "搵人",
			"jyutping": "wan2 jan4",
			"english": "to look for someone"
		},
		"3": {
			"chinese": "慍",
			"jyutping": "wan3",
			"english": "to lock something / someone up"
		},
		"4": {
			"chinese": "雲",
			"jyutping": "wan4",
			"english": "cloud"
		},
		"5": {
			"chinese": "允許",
			"jyutping": "wan5 heoi2",
			"english": "to permit"
		},
		"6": {
			"chinese": "運氣",
			"jyutping": "wan6 hei3",
			"english": "luck"
		}
	},
	"zan": {
		"1": {
			"chinese": "真假",
			"jyutping": "zan1 gaa2",
			"english": "truth"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "地震",
			"jyutping": "dei6 zan3",
			"english": "earthquake"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "陣間",
			"jyutping": "zan6 gaan1",
			"english": "later"
		}
	},
	"ang": {
		"1": {
			"chinese": "鶯",
			"jyutping": "ang1",
			"english": "oriole"
		},
		"2": {
			"chinese": "哽耳",
			"jyutping": "ang2 ji5",
			"english": "something that's uncomfortable to listen to (e.g. reprimanding)"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"bang": {
		"1": {
			"chinese": "崩潰",
			"jyutping": "bang1 kui2",
			"english": "collapse; crumble; fall apart"
		},
		"2": {
			"chinese": "甭",
			"jyutping": "bang2",
			"english": "no need to"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"cang": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "層次",
			"jyutping": "cang4 ci3",
			"english": "level; arrangement of ideas"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"dang": {
		"1": {
			"chinese": "燈膽",
			"jyutping": "dang1 daam2",
			"english": "light bulb"
		},
		"2": {
			"chinese": "等待",
			"jyutping": "dang2 doi6",
			"english": "to wait"
		},
		"3": {
			"chinese": "櫈",
			"jyutping": "dang3",
			"english": "a stool; a chair"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "鄧麗欣",
			"jyutping": "dang6 lai6 jan1",
			"english": "Stephy Teng, a singer"
		}
	},
	"fang": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "揈",
			"jyutping": "fang4",
			"english": "to fling"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "亂揈",
			"jyutping": "lyun2 fang6",
			"english": "to splurge excessively"
		}
	},
	"gang": {
		"1": {
			"chinese": "匙羹",
			"jyutping": "ci4 gang1",
			"english": "spoon"
		},
		"2": {
			"chinese": "耿直",
			"jyutping": "gang2 zik6",
			"english": "someone who's a straight shooter"
		},
		"3": {
			"chinese": "更加",
			"jyutping": "gang3 gaa1",
			"english": "even more"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gwang": {
		"1": {
			"chinese": "轟炸",
			"jyutping": "gwang1 zaa3",
			"english": "to bomb"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"hang": {
		"1": {
			"chinese": "大亨",
			"jyutping": "daai6 hang1",
			"english": "extremely wealthy individual"
		},
		"2": {
			"chinese": "肯定",
			"jyutping": "hang2 ding6",
			"english": "definitely"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "行人路",
			"jyutping": "hang4 jan4 lou6",
			"english": "sidewalk"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "杏仁",
			"jyutping": "hang6 jan4",
			"english": "almond"
		}
	},
	"jang": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kang": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "鯁住",
			"jyutping": "kang2 zyu6",
			"english": "endure it for now"
		},
		"3": {
			"chinese": "掯",
			"jyutping": "kang3",
			"english": "a smell that's difficult to endure (like cigarette smoke)"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwang": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"lang": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "lang3",
			"jyutping": "lang3",
			"english": "to associate an event with something"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"mang": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "忟憎",
			"jyutping": "mang2 zang2",
			"english": "irritable"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "盟塞",
			"jyutping": "mang4 sak1",
			"english": "close minded"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"nang": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ngang": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"pang": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "朋友",
			"jyutping": "pang4 jau5",
			"english": "friends"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"sang": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "擤鼻涕",
			"jyutping": "sang3 bei6 tai3",
			"english": "to blow one's nose"
		},
		"4": {
			"chinese": "毛鬙鬙",
			"jyutping": "mou4 sang4 sang4",
			"english": "hairy"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"tang": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "熱騰騰",
			"jyutping": "jit6 tang4 tang4",
			"english": "very hot (usually food)"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"wang": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zang": {
		"1": {
			"chinese": "憎",
			"jyutping": "zang1",
			"english": "to hate"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "贈券",
			"jyutping": "zang6 hyun3",
			"english": "voucher; coupon"
		}
	},
	"ap": {
		"1": {
			"chinese": "罨耷",
			"jyutping": "ap1 dap1",
			"english": "run-down; dilapidated"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"bap": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"cap": {
		"1": {
			"chinese": "編輯",
			"jyutping": "pin1 cap1",
			"english": "edit; editor"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"dap": {
		"1": {
			"chinese": "耷",
			"jyutping": "dap1",
			"english": "to droop"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "包剪揼",
			"jyutping": "baau1 zin2 dap6",
			"english": "rock paper scissors"
		}
	},
	"fap": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gap": {
		"1": {
			"chinese": "急",
			"jyutping": "gap1",
			"english": "to be in a hurry"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "𥄫",
			"jyutping": "gap6",
			"english": "to stare at (usually girls, or people)"
		}
	},
	"gwap": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"hap": {
		"1": {
			"chinese": "恰當",
			"jyutping": "hap1 dong3",
			"english": "appropriate"
		},
		"2": {
			"chinese": "盒",
			"jyutping": "hap2",
			"english": "box"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "合桃",
			"jyutping": "hap6 tou4",
			"english": "walnut"
		}
	},
	"jap": {
		"1": {
			"chinese": "哭泣",
			"jyutping": "huk1 jap1",
			"english": "to sob; to weep"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "入口",
			"jyutping": "jap6 hau2",
			"english": "entrance"
		}
	},
	"kap": {
		"1": {
			"chinese": "年級",
			"jyutping": "nin4 kap1",
			"english": "grade; year"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "顧及",
			"jyutping": "gu3 kap6",
			"english": "take into account, take into consideration"
		}
	},
	"kwap": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"lap": {
		"1": {
			"chinese": "暖笠笠",
			"jyutping": "lyun5 lap1 lap1",
			"english": "warm (e.g. food, electric blanket)"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "黐立立",
			"jyutping": "ci1 lap6 lap6",
			"english": "sticky"
		}
	},
	"map": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"nap": {
		"1": {
			"chinese": "凹凸",
			"jyutping": "nap1 dat6",
			"english": "bumpy, uneven"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "𣲷懦",
			"jyutping": "nap6 no6",
			"english": "slow; sluggish"
		}
	},
	"ngap": {
		"1": {
			"chinese": "罨",
			"jyutping": "ngap1",
			"english": "the smell of something left outside too long (food, sweaty clothes)"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"pap": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"sap": {
		"1": {
			"chinese": "濕",
			"jyutping": "sap1",
			"english": "wet"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "十",
			"jyutping": "sap6",
			"english": "ten"
		}
	},
	"tap": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"wap": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zap": {
		"1": {
			"chinese": "執",
			"jyutping": "zap1",
			"english": "to tidy up stuff"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"at": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"bat": {
		"1": {
			"chinese": "筆",
			"jyutping": "bat1",
			"english": "pen"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "拔河",
			"jyutping": "bat6 ho4",
			"english": "tug-of-war"
		}
	},
	"cat": {
		"1": {
			"chinese": "七",
			"jyutping": "cat1",
			"english": "seven"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"dat": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "核突",
			"jyutping": "wat6 dat6",
			"english": "disgusting"
		}
	},
	"fat": {
		"1": {
			"chinese": "忽然",
			"jyutping": "fat1 jin4",
			"english": "suddenly"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "佛像",
			"jyutping": "fat6 zoeng6",
			"english": "Buddha statue"
		}
	},
	"gat": {
		"1": {
			"chinese": "吉祥",
			"jyutping": "gat1 coeng4",
			"english": "lucky"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "趌腳",
			"jyutping": "gat6 goek3",
			"english": "to tiptoe"
		}
	},
	"gwat": {
		"1": {
			"chinese": "骨頭",
			"jyutping": "gwat1 tau4",
			"english": "bone"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "倔強",
			"jyutping": "gwat6 koeng5",
			"english": "stubborn"
		}
	},
	"hat": {
		"1": {
			"chinese": "乞衣",
			"jyutping": "hat1 ji1",
			"english": "beggar"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "核心",
			"jyutping": "hat6 sam1",
			"english": "core"
		}
	},
	"jat": {
		"1": {
			"chinese": "一",
			"jyutping": "jat1",
			"english": "one"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "日子",
			"jyutping": "jat6 zi2",
			"english": "days"
		}
	},
	"kat": {
		"1": {
			"chinese": "咳藥水",
			"jyutping": "kat1 joek6 seoi2",
			"english": "cough syrup"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwat": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"lat": {
		"1": {
			"chinese": "甩色",
			"jyutping": "lat1 sik1",
			"english": "to go through discoloration"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"mat": {
		"1": {
			"chinese": "乜嘢",
			"jyutping": "mat1 je5",
			"english": "what"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "物價",
			"jyutping": "mat6 gaa3",
			"english": "price of goods"
		}
	},
	"nat": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ngat": {
		"1": {
			"chinese": "扤實",
			"jyutping": "ngat1 sat6",
			"english": "to firmly apply pressure on so as to seal it"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "屹腳",
			"jyutping": "ngat6 goek3",
			"english": "to tiptoe"
		}
	},
	"pat": {
		"1": {
			"chinese": "匹配",
			"jyutping": "pat1 pui3",
			"english": "to be a match for"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"sat": {
		"1": {
			"chinese": "失去",
			"jyutping": "sat1 heoi3",
			"english": "to lose"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "實惠",
			"jyutping": "sat6 wai6",
			"english": "furniture brand Pricerite; something that has a great price"
		}
	},
	"tat": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"wat": {
		"1": {
			"chinese": "抑鬱",
			"jyutping": "jik1 wat1",
			"english": "depression"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "果核",
			"jyutping": "gwo2 wat6",
			"english": "fruit seed"
		}
	},
	"zat": {
		"1": {
			"chinese": "質地",
			"jyutping": "zat1 dei2",
			"english": "quality"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "疾病",
			"jyutping": "zat6 beng6",
			"english": "disease"
		}
	},
	"ak": {
		"1": {
			"chinese": "厄運",
			"jyutping": "ak1 wan6",
			"english": "misfortune; adversity"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"bak": {
		"1": {
			"chinese": "北京",
			"jyutping": "bak1 ging1",
			"english": "Beijing"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"cak": {
		"1": {
			"chinese": "測量",
			"jyutping": "cak1 loeng4",
			"english": "surveying"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"dak": {
		"1": {
			"chinese": "得到",
			"jyutping": "dak1 dou3",
			"english": "to obtain"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "突出",
			"jyutping": "dak6 ceot1",
			"english": "something that stands out"
		}
	},
	"fak": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gak": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gwak": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"hak": {
		"1": {
			"chinese": "黑色",
			"jyutping": "hak1 sik1",
			"english": "black"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"jak": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kak": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwak": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"lak": {
		"1": {
			"chinese": "竻",
			"jyutping": "lak1",
			"english": "bamboo roots"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"mak": {
		"1": {
			"chinese": "薯嘜",
			"jyutping": "syu4 mak1",
			"english": "schmuk"
		},
		"2": {
			"chinese": "癦",
			"jyutping": "mak2",
			"english": "mole"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "麥片",
			"jyutping": "mak6 pin3",
			"english": "oatmeal"
		}
	},
	"nak": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ngak": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"pak": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"sak": {
		"1": {
			"chinese": "塞車",
			"jyutping": "sak1 ce1",
			"english": "traffic congestion"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"tak": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"wak": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zak": {
		"1": {
			"chinese": "側面",
			"jyutping": "zak1 min6",
			"english": "side"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"e": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"be": {
		"1": {
			"chinese": "啤酒",
			"jyutping": "be1 zau2",
			"english": "beer"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ce": {
		"1": {
			"chinese": "單車",
			"jyutping": "daan1 ce1",
			"english": "bicycle"
		},
		"2": {
			"chinese": "扯上",
			"jyutping": "ce2 soeng5",
			"english": "to be associated with"
		},
		"3": {
			"chinese": "斜路",
			"jyutping": "ce3 lou2",
			"english": "slope"
		},
		"4": {
			"chinese": "邪惡",
			"jyutping": "ce4 ok3",
			"english": "evil"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"de": {
		"1": {
			"chinese": "爹哋",
			"jyutping": "de1 di4",
			"english": "daddy"
		},
		"2": {
			"chinese": "嗲",
			"jyutping": "de2",
			"english": "flirtatious"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "嗲嗲渧",
			"jyutping": "de4 de2 dai3",
			"english": "crying uncontrollably"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"fe": {
		"1": {
			"chinese": "咖啡",
			"jyutping": "kaa3 fe1",
			"english": "coffee"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "啡",
			"jyutping": "fe4",
			"english": "to verbally criticize someone very harshly"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ge": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "嘅",
			"jyutping": "ge3",
			"english": "Cantonese final particle"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gwe": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"he": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "he3",
			"jyutping": "he3",
			"english": "someone who's lazy, carefree, not doing much"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"je": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "太子爺",
			"jyutping": "tai3 zi2 je2",
			"english": "son of a rich family"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "少爺",
			"jyutping": "siu3 je4",
			"english": "young master"
		},
		"5": {
			"chinese": "筍嘢",
			"jyutping": "seon2 je5",
			"english": "something that's sold at a great price"
		},
		"6": {
			"chinese": "夜晚",
			"jyutping": "je6 maan5",
			"english": "night"
		}
	},
	"ke": {
		"1": {
			"chinese": "ke1",
			"jyutping": "ke1",
			"english": "dung"
		},
		"2": {
			"chinese": "茄汁",
			"jyutping": "ke2 zap1",
			"english": "ketchup"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "騎馬",
			"jyutping": "ke4 maa5",
			"english": "to go horse riding"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwe": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"le": {
		"1": {
			"chinese": "哩",
			"jyutping": "le1",
			"english": "Cantonese final particle"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "騎呢",
			"jyutping": "ke4 le4",
			"english": "eccentric"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"me": {
		"1": {
			"chinese": "孭",
			"jyutping": "me1",
			"english": "to carry on one's back; to shoulder (burden)"
		},
		"2": {
			"chinese": "me2",
			"jyutping": "me2",
			"english": "crooked; slanted"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ne": {
		"1": {
			"chinese": "呢",
			"jyutping": "ne1",
			"english": "Cantonese final particle"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"nge": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"pe": {
		"1": {
			"chinese": "啤牌",
			"jyutping": "pe1 paai2",
			"english": "playing cards"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"se": {
		"1": {
			"chinese": "些少",
			"jyutping": "se1 siu2",
			"english": "a bit"
		},
		"2": {
			"chinese": "寫字",
			"jyutping": "se2 zi6",
			"english": "to write characters"
		},
		"3": {
			"chinese": "卸膊",
			"jyutping": "se3 bok3",
			"english": "saggy shoulders"
		},
		"4": {
			"chinese": "毒蛇",
			"jyutping": "duk6 se4",
			"english": "poisonous snake"
		},
		"5": {
			"chinese": "社會",
			"jyutping": "se5 wui2",
			"english": "society"
		},
		"6": {
			"chinese": "射箭",
			"jyutping": "se6 zin3",
			"english": "archery"
		}
	},
	"te": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"we": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ze": {
		"1": {
			"chinese": "遮",
			"jyutping": "ze1",
			"english": "umbrella"
		},
		"2": {
			"chinese": "死者",
			"jyutping": "sei2 ze2",
			"english": "the deceased"
		},
		"3": {
			"chinese": "竹蔗",
			"jyutping": "zuk1 ze3",
			"english": "sugar cane"
		},
		"4": {
			"chinese": "姐姐",
			"jyutping": "ze4 ze1",
			"english": "elder sister"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "新陳代謝",
			"jyutping": "san1 can4 doi6 ze6",
			"english": "metabolism"
		}
	},
	"ei": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"bei": {
		"1": {
			"chinese": "悲慘",
			"jyutping": "bei1 caam2",
			"english": "tragic"
		},
		"2": {
			"chinese": "畀",
			"jyutping": "bei2",
			"english": "to give"
		},
		"3": {
			"chinese": "麻痺",
			"jyutping": "maa4 bei3",
			"english": "to numb"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "鼻哥窿",
			"jyutping": "bei6 go1 lung1",
			"english": "nostril"
		}
	},
	"cei": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"dei": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "神神地",
			"jyutping": "san5 san2 dei2",
			"english": "mentally defective"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "地拖",
			"jyutping": "dei6 to1",
			"english": "mop"
		}
	},
	"fei": {
		"1": {
			"chinese": "飛機",
			"jyutping": "fei1 gei1",
			"english": "airplane"
		},
		"2": {
			"chinese": "緋聞",
			"jyutping": "fei2 man4",
			"english": "scandal"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "肥膏",
			"jyutping": "fei4 gou1",
			"english": "fat"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gei": {
		"1": {
			"chinese": "機器",
			"jyutping": "gei1 hei3",
			"english": "machine"
		},
		"2": {
			"chinese": "幾多",
			"jyutping": "gei2 do1",
			"english": "how much / how many"
		},
		"3": {
			"chinese": "記住",
			"jyutping": "gei3 zyu6",
			"english": "remember"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "棹忌",
			"jyutping": "zaau6 gei6",
			"english": "something that's heavily frowned upon"
		}
	},
	"gwei": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"hei": {
		"1": {
			"chinese": "犧牲",
			"jyutping": "hei1 sang1",
			"english": "sacrifice"
		},
		"2": {
			"chinese": "起身",
			"jyutping": "hei2 san1",
			"english": "to wape up; to stand up (physically)"
		},
		"3": {
			"chinese": "好戲",
			"jyutping": "hou2 hei3",
			"english": "good show"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"jei": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kei": {
		"1": {
			"chinese": "畸形",
			"jyutping": "kei1 jing4",
			"english": "abnormal"
		},
		"2": {
			"chinese": "屋企",
			"jyutping": "uk1 kei2",
			"english": "home"
		},
		"3": {
			"chinese": "冀望",
			"jyutping": "kei3 mong6",
			"english": "hope; to look forward to"
		},
		"4": {
			"chinese": "其他",
			"jyutping": "kei4 taa1",
			"english": "others"
		},
		"5": {
			"chinese": "企業",
			"jyutping": "kei5 jip6",
			"english": "enterprise"
		},
		"6": {
			"chinese": ""
		}
	},
	"kwei": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"lei": {
		"1": {
			"chinese": "喱士",
			"jyutping": "lei1 si2",
			"english": "lace (transliteration)"
		},
		"2": {
			"chinese": "茂利",
			"jyutping": "mou6 lei2",
			"english": "fool; idiot"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "嚟",
			"jyutping": "lei4",
			"english": "to come"
		},
		"5": {
			"chinese": "管理",
			"jyutping": "gun2 lei5",
			"english": "to manage"
		},
		"6": {
			"chinese": "利益",
			"jyutping": "lei6 jik1",
			"english": "interest (as in conflict of interest)"
		}
	},
	"mei": {
		"1": {
			"chinese": "屘二",
			"jyutping": "mei1 ji2",
			"english": "second last"
		},
		"2": {
			"chinese": "滷味",
			"jyutping": "lou6 mei2",
			"english": "Lou mei (dishes made by braising in a sauce called lou sauce)"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "眉毛",
			"jyutping": "mei4 mou4",
			"english": "eyebrow"
		},
		"5": {
			"chinese": "尾",
			"jyutping": "mei5",
			"english": "final"
		},
		"6": {
			"chinese": "仲未",
			"jyutping": "zung6 mei6",
			"english": "not yet"
		}
	},
	"nei": {
		"1": {
			"chinese": "匿埋",
			"jyutping": "nei1 maai4",
			"english": "to hide (a person)"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "尼姑",
			"jyutping": "nei4 gu1",
			"english": "a nun"
		},
		"5": {
			"chinese": "你",
			"jyutping": "nei5",
			"english": "you"
		},
		"6": {
			"chinese": "細膩",
			"jyutping": "sai3 nei6",
			"english": "detailed and delicate"
		}
	},
	"ngei": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"pei": {
		"1": {
			"chinese": "呸",
			"jyutping": "pei1",
			"english": "something you say alongside spitting (in contempt)"
		},
		"2": {
			"chinese": "皮衣",
			"jyutping": "pei2 ji1",
			"english": "leather jacket"
		},
		"3": {
			"chinese": "放屁",
			"jyutping": "fong3 pei3",
			"english": "to fart"
		},
		"4": {
			"chinese": "皮膚",
			"jyutping": "pei4 fu1",
			"english": "skin"
		},
		"5": {
			"chinese": "被",
			"jyutping": "pei5",
			"english": "blanket"
		},
		"6": {
			"chinese": ""
		}
	},
	"sei": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "死屍",
			"jyutping": "sei2 si1",
			"english": "corpse"
		},
		"3": {
			"chinese": "四百",
			"jyutping": "sei3 baak3",
			"english": "four hundred"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"tei": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"wei": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "喂",
			"jyutping": "wei2",
			"english": "hello (on the phone)"
		},
		"3": {
			"chinese": "喂啊",
			"jyutping": "wei3 aa3",
			"english": "hey (in irritation)"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zei": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"eu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"beu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ceu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"deu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"feu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"geu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gweu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"heu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"jeu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"keu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kweu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"leu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"meu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"neu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ngeu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"peu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"seu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"teu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"weu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zeu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"em": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"bem": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"cem": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"dem": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"fem": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gem": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gwem": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"hem": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"jem": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kem": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwem": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"lem": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"mem": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"nem": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ngem": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"pem": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"sem": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"tem": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"wem": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zem": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"eng": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"beng": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "餅乾",
			"jyutping": "beng2 gon1",
			"english": "biscuit"
		},
		"3": {
			"chinese": "手柄",
			"jyutping": "sau2 beng3",
			"english": "handle"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "病人",
			"jyutping": "beng6 jan4",
			"english": "patient (as in sick person)"
		}
	},
	"ceng": {
		"1": {
			"chinese": "面青",
			"jyutping": "min6 ceng1",
			"english": "to look afraid, scared, pale "
		},
		"2": {
			"chinese": "請人",
			"jyutping": "ceng2 jan4",
			"english": "to hire for a position"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"deng": {
		"1": {
			"chinese": "釘",
			"jyutping": "deng1",
			"english": "nails"
		},
		"2": {
			"chinese": "山頂",
			"jyutping": "san1 deng2",
			"english": "The Peak"
		},
		"3": {
			"chinese": "掟",
			"jyutping": "deng3",
			"english": "to throw"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "訂單",
			"jyutping": "deng6 daan1",
			"english": "order (as in to place an order)"
		}
	},
	"feng": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "揈",
			"jyutping": "feng6",
			"english": "to splurge"
		}
	},
	"geng": {
		"1": {
			"chinese": "驚",
			"jyutping": "geng1",
			"english": "scared"
		},
		"2": {
			"chinese": "頸部",
			"jyutping": "geng2 bou6",
			"english": "neck"
		},
		"3": {
			"chinese": "鏡",
			"jyutping": "geng3",
			"english": "mirror"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "鏡錫",
			"jyutping": "geng6 sek3",
			"english": "to treat something carefully (so as not to damage it)"
		}
	},
	"gweng": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"heng": {
		"1": {
			"chinese": "輕",
			"jyutping": "heng1",
			"english": "light (as in not heavy)"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"jeng": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "贏",
			"jyutping": "jeng4",
			"english": "to win"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"keng": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "輕擎",
			"jyutping": "heng1 keng4",
			"english": "light (usually luggage)"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kweng": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"leng": {
		"1": {
			"chinese": "靚模",
			"jyutping": "leng1 mou4",
			"english": "young female model"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "靚",
			"jyutping": "leng3",
			"english": "pretty, beautiful"
		},
		"4": {
			"chinese": "鯪魚球",
			"jyutping": "leng4 jyu5 kau4",
			"english": "Mud carp balls"
		},
		"5": {
			"chinese": "白領",
			"jyutping": "baak6 leng5",
			"english": "white-collar employees"
		},
		"6": {
			"chinese": ""
		}
	},
	"meng": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "出名",
			"jyutping": "ceot1 meng2",
			"english": "famous"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "人命",
			"jyutping": "jan4 meng6",
			"english": "human life"
		}
	},
	"neng": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ngeng": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"peng": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "平嘢",
			"jyutping": "peng4 je5",
			"english": "cheap stuff"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"seng": {
		"1": {
			"chinese": "大聲",
			"jyutping": "daai6 seng1",
			"english": "loud"
		},
		"2": {
			"chinese": "叫醒",
			"jyutping": "giu3 seng2",
			"english": "to wake someone up"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "成世人",
			"jyutping": "seng4 sai3 jan4",
			"english": "one's entire life"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"teng": {
		"1": {
			"chinese": "客廳",
			"jyutping": "haak3 teng1",
			"english": "living room"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": "遊艇",
			"jyutping": "jau4 teng5",
			"english": "yacht"
		},
		"6": {
			"chinese": ""
		}
	},
	"weng": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zeng": {
		"1": {
			"chinese": "精",
			"jyutping": "zeng1",
			"english": "smart"
		},
		"2": {
			"chinese": "石井",
			"jyutping": "sek6 zeng2",
			"english": "stone well"
		},
		"3": {
			"chinese": "好正",
			"jyutping": "hou2 zeng3",
			"english": "really good (experience, products, food, etc.)"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "乾淨",
			"jyutping": "gon1 zeng6",
			"english": "clean"
		}
	},
	"ep": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"bep": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"cep": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"dep": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"fep": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gep": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "頭夾",
			"jyutping": "tau4 gep2",
			"english": "hairpin"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gwep": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"hep": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"jep": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kep": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwep": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"lep": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"mep": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"nep": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ngep": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"pep": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"sep": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"tep": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"wep": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zep": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"bek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"cek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "間尺",
			"jyutping": "gaan3 cek2",
			"english": "ruler (as in the measuring tool)"
		},
		"3": {
			"chinese": "呎價",
			"jyutping": "cek3 gaa3",
			"english": "price per square foot"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"dek": {
		"1": {
			"chinese": "趯更",
			"jyutping": "dek1 gaang1",
			"english": "to skip work"
		},
		"2": {
			"chinese": "笛",
			"jyutping": "dek2",
			"english": "flute"
		},
		"3": {
			"chinese": "趯走",
			"jyutping": "dek3 zau2",
			"english": "to kick someone off the premises"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"fek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gwek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"hek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "吃",
			"jyutping": "hek3",
			"english": "to eat"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"jek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "電視劇",
			"jyutping": "din6 si6 kek6",
			"english": "TV drama"
		}
	},
	"kwek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"lek": {
		"1": {
			"chinese": "叻",
			"jyutping": "lek1",
			"english": "smart, intelligent"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"mek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"nek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ngek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"pek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "雷劈",
			"jyutping": "leoi4 pek3",
			"english": "to be struck by lightning (to be punished by the Heavens)"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"sek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "錫",
			"jyutping": "sek3",
			"english": "to dote on (parents, siblings, partner, children, grandparents)"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "石頭",
			"jyutping": "sek6 tau4",
			"english": "stone"
		}
	},
	"tek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "踢波",
			"jyutping": "tek3 bo1",
			"english": "to play soccer"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"wek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "隻",
			"jyutping": "zek3",
			"english": "measure word for animals (among many other things)"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "草蓆",
			"jyutping": "cou2 zek6",
			"english": "grass mat"
		}
	},
	"i": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"bi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "啤啤女",
			"jyutping": "bi4 bi1 neoi2",
			"english": "baby girl"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ci": {
		"1": {
			"chinese": "痴線",
			"jyutping": "ci1 sin3",
			"english": "crazy"
		},
		"2": {
			"chinese": "開始",
			"jyutping": "hoi1 ci2",
			"english": "to start"
		},
		"3": {
			"chinese": "次序",
			"jyutping": "ci3 zeoi6",
			"english": "order (as in an order with which things are observed)"
		},
		"4": {
			"chinese": "遲到",
			"jyutping": "ci4 dou3",
			"english": "to be late"
		},
		"5": {
			"chinese": "好似",
			"jyutping": "hou2 ci5",
			"english": "to be like; to be very similar"
		},
		"6": {
			"chinese": ""
		}
	},
	"di": {
		"1": {
			"chinese": "啲",
			"jyutping": "di1",
			"english": "some"
		},
		"2": {
			"chinese": "弟弟",
			"jyutping": "di4 di2",
			"english": "younger brothers"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "弟弟",
			"jyutping": "di4 di2",
			"english": "younger brother"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"fi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "飛哩啡呢",
			"jyutping": "fi4 li1 fe4 le4",
			"english": "garbling, someone who talks rapidly but not very articulately"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gwi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"hi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ji": {
		"1": {
			"chinese": "醫生",
			"jyutping": "ji1 sang1",
			"english": "doctor"
		},
		"2": {
			"chinese": "椅子",
			"jyutping": "ji2 zi2",
			"english": "chair"
		},
		"3": {
			"chinese": "意思",
			"jyutping": "ji3 si1",
			"english": "meaning"
		},
		"4": {
			"chinese": "宜家",
			"jyutping": "ji4 gaa1",
			"english": "IKEA; now"
		},
		"5": {
			"chinese": "耳仔",
			"jyutping": "ji5 zai2",
			"english": "ear"
		},
		"6": {
			"chinese": "二十",
			"jyutping": "ji6 sap6",
			"english": "twenty"
		}
	},
	"ki": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"li": {
		"1": {
			"chinese": "呢個",
			"jyutping": "li1 go3",
			"english": "this"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"mi": {
		"1": {
			"chinese": "咪咪摸摸",
			"jyutping": "mi1 mi1 mo1 mo1",
			"english": "slowly"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "媽咪",
			"jyutping": "maa1 mi4",
			"english": "mommy"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ni": {
		"1": {
			"chinese": "呢便",
			"jyutping": "ni1 bin6",
			"english": "this way"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ngi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"pi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"si": {
		"1": {
			"chinese": "撕裂",
			"jyutping": "si1 lit6",
			"english": "tear"
		},
		"2": {
			"chinese": "食屎",
			"jyutping": "sik6 si2",
			"english": "eat dung"
		},
		"3": {
			"chinese": "試下",
			"jyutping": "si3 haa5",
			"english": "try something out"
		},
		"4": {
			"chinese": "時間",
			"jyutping": "si4 gaan3",
			"english": "time"
		},
		"5": {
			"chinese": "市場",
			"jyutping": "si5 coeng4",
			"english": "a market; a marketplace"
		},
		"6": {
			"chinese": "電視",
			"jyutping": "din6 si6",
			"english": "television"
		}
	},
	"ti": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"wi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zi": {
		"1": {
			"chinese": "知道",
			"jyutping": "zi1 dou3",
			"english": "to know"
		},
		"2": {
			"chinese": "紙張",
			"jyutping": "zi2 zoeng1",
			"english": "a piece of paper"
		},
		"3": {
			"chinese": "智慧",
			"jyutping": "zi3 wai3",
			"english": "wisdom"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "字典",
			"jyutping": "zi6 din2",
			"english": "dictionary"
		}
	},
	"iu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"biu": {
		"1": {
			"chinese": "保鏢",
			"jyutping": "bou2 biu1",
			"english": "bodyguard"
		},
		"2": {
			"chinese": "表示",
			"jyutping": "biu2 si6",
			"english": "to indicate"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ciu": {
		"1": {
			"chinese": "超人",
			"jyutping": "ciu1 jan4",
			"english": "Superman"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "不肖子",
			"jyutping": "bat1 ciu3 zi2",
			"english": "ungrateful son"
		},
		"4": {
			"chinese": "潮流",
			"jyutping": "ciu4 lau4",
			"english": "trend"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"diu": {
		"1": {
			"chinese": "雕像",
			"jyutping": "diu1 zoeng6",
			"english": "sculpture"
		},
		"2": {
			"chinese": "屌",
			"jyutping": "diu2",
			"english": "fuck"
		},
		"3": {
			"chinese": "釣魚",
			"jyutping": "diu3 jyu2",
			"english": "to go fishing"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "調查",
			"jyutping": "diu6 caa4",
			"english": "to investigate"
		}
	},
	"fiu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"giu": {
		"1": {
			"chinese": "驕傲",
			"jyutping": "giu1 ou3",
			"english": "arrogant; proud"
		},
		"2": {
			"chinese": "轎車",
			"jyutping": "giu2 ce1",
			"english": "rickshaw"
		},
		"3": {
			"chinese": "叫嘢食",
			"jyutping": "giu3 je5 sik6",
			"english": "to order food"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "詏撬",
			"jyutping": "aau3 giu6",
			"english": "to argue (transliteration)"
		}
	},
	"gwiu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"hiu": {
		"1": {
			"chinese": "囂張",
			"jyutping": "hiu1 zoeng1",
			"english": "arrogant"
		},
		"2": {
			"chinese": "知曉",
			"jyutping": "zi1 hiu2",
			"english": "to know"
		},
		"3": {
			"chinese": "竅門",
			"jyutping": "hiu3 mun4",
			"english": "a trick to doing something"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"jiu": {
		"1": {
			"chinese": "腰",
			"jyutping": "jiu1",
			"english": "waist"
		},
		"2": {
			"chinese": "騷擾",
			"jyutping": "sou1 jiu2",
			"english": "to harass"
		},
		"3": {
			"chinese": "要",
			"jyutping": "jiu3",
			"english": "to want; to need to"
		},
		"4": {
			"chinese": "搖動",
			"jyutping": "jiu4 dung6",
			"english": "to sway"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "黎耀祥",
			"jyutping": "lai4 jiu6 coeng4",
			"english": "Wayne Lai, a Hong Kong actor"
		}
	},
	"kiu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "度橋",
			"jyutping": "dok6 kiu2",
			"english": "to come up with a strategy"
		},
		"3": {
			"chinese": "穚",
			"jyutping": "kiu3",
			"english": "the ears of grain crops"
		},
		"4": {
			"chinese": "天橋",
			"jyutping": "tin1 kiu4",
			"english": "flyover"
		},
		"5": {
			"chinese": "繑起",
			"jyutping": "kiu5 hei2",
			"english": "to stump someone (mentally, resources)"
		},
		"6": {
			"chinese": ""
		}
	},
	"kwiu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"liu": {
		"1": {
			"chinese": "撩",
			"jyutping": "liu1",
			"english": "to pick (one's ear, nose)"
		},
		"2": {
			"chinese": "潦草",
			"jyutping": "liu2 cou2",
			"english": "cursive handwriting"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "治療",
			"jyutping": "zi6 liu4",
			"english": "therapy"
		},
		"5": {
			"chinese": "了解",
			"jyutping": "liu5 gaai2",
			"english": "to understand"
		},
		"6": {
			"chinese": "料理",
			"jyutping": "liu6 lei5",
			"english": "cuisine"
		}
	},
	"miu": {
		"1": {
			"chinese": "喵",
			"jyutping": "miu1",
			"english": "meow"
		},
		"2": {
			"chinese": "寺廟",
			"jyutping": "zi6 miu2",
			"english": "temple"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "瞄準",
			"jyutping": "miu4 zeon2",
			"english": "to aim"
		},
		"5": {
			"chinese": "藐視",
			"jyutping": "miu5 si6",
			"english": "to be in contempt (of the court)"
		},
		"6": {
			"chinese": "妙計",
			"jyutping": "miu6 gai3",
			"english": "a great strategy"
		}
	},
	"niu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": "鴕鳥",
			"jyutping": "to4 niu5",
			"english": "ostrich"
		},
		"6": {
			"chinese": "屙尿",
			"jyutping": "o1 niu6",
			"english": "to take a leak"
		}
	},
	"ngiu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"piu": {
		"1": {
			"chinese": "飄走",
			"jyutping": "piu1 zau2",
			"english": "to drift away"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "機票",
			"jyutping": "gei1 piu3",
			"english": "plane ticket"
		},
		"4": {
			"chinese": "嫖賭飲吹",
			"jyutping": "piu4 dou2 jam2 ceoi1",
			"english": "collective term for frequenting brothels, gambling, drinking, doing drugs"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"siu": {
		"1": {
			"chinese": "燒烤",
			"jyutping": "siu1 haau1",
			"english": "barbecue"
		},
		"2": {
			"chinese": "小小",
			"jyutping": "siu2 siu2",
			"english": "a little bit"
		},
		"3": {
			"chinese": "笑臉",
			"jyutping": "siu3 lim6",
			"english": "smiling face"
		},
		"4": {
			"chinese": "韶光",
			"jyutping": "siu4 gwong1",
			"english": "youth"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "一兆",
			"jyutping": "jat1 siu6",
			"english": "a trillion"
		}
	},
	"tiu": {
		"1": {
			"chinese": "挑剔",
			"jyutping": "tiu1 tik1",
			"english": "to be picky"
		},
		"2": {
			"chinese": "藤條",
			"jyutping": "tang4 tiu2",
			"english": "a cane for beating"
		},
		"3": {
			"chinese": "跳舞",
			"jyutping": "tiu3 mou5",
			"english": "to dance"
		},
		"4": {
			"chinese": "他條",
			"jyutping": "taa1 tiu4",
			"english": "carefree, taking it easy"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"wiu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ziu": {
		"1": {
			"chinese": "香蕉",
			"jyutping": "hoeng1 ziu1",
			"english": "banana"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "照鏡",
			"jyutping": "ziu3 geng3",
			"english": "looking into the mirror"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "召開",
			"jyutping": "ziu6 hoi1",
			"english": "to call for a meeting"
		}
	},
	"im": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"bim": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"cim": {
		"1": {
			"chinese": "牙籤",
			"jyutping": "ngaa4 cim1",
			"english": "toothpick"
		},
		"2": {
			"chinese": "諂笑",
			"jyutping": "cim2 siu3",
			"english": "put on a obsequious smile in order to gain favour from"
		},
		"3": {
			"chinese": "天塹",
			"jyutping": "tin1 cim3",
			"english": "natural moat"
		},
		"4": {
			"chinese": "潛水",
			"jyutping": "cim4 seoi2",
			"english": "to go diving"
		},
		"5": {
			"chinese": "僭建",
			"jyutping": "cim5 gin3",
			"english": "illegal structures"
		},
		"6": {
			"chinese": ""
		}
	},
	"dim": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "指點",
			"jyutping": "zi2 dim2",
			"english": "to point out; to guide"
		},
		"3": {
			"chinese": "店舖",
			"jyutping": "dim3 pou3",
			"english": "store; shop"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "搞掂",
			"jyutping": "gao2 dim6",
			"english": "to handle; to finish"
		}
	},
	"fim": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gim": {
		"1": {
			"chinese": "兼職",
			"jyutping": "gim1 zik1",
			"english": "part time job"
		},
		"2": {
			"chinese": "檢查",
			"jyutping": "gim2 caa4",
			"english": "to inspect"
		},
		"3": {
			"chinese": "劍",
			"jyutping": "gim3",
			"english": "sword"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gwim": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"him": {
		"1": {
			"chinese": "謙虛",
			"jyutping": "him1 heoi1",
			"english": "humble"
		},
		"2": {
			"chinese": "危險",
			"jyutping": "ngai4 him2",
			"english": "danger"
		},
		"3": {
			"chinese": "欠錢",
			"jyutping": "him3 cin2",
			"english": "to owe money"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"jim": {
		"1": {
			"chinese": "奄尖",
			"jyutping": "jim1 zim1",
			"english": "picky"
		},
		"2": {
			"chinese": "掩耳盜鈴",
			"jyutping": "jim2 ji5 dou6 ling4",
			"english": "deceive oneself"
		},
		"3": {
			"chinese": "討厭",
			"jyutping": "tou2 jim3",
			"english": "to hate"
		},
		"4": {
			"chinese": "鹽",
			"jyutping": "jim4",
			"english": "salt"
		},
		"5": {
			"chinese": "染色",
			"jyutping": "jim5 sik1",
			"english": "to dye"
		},
		"6": {
			"chinese": "經驗",
			"jyutping": "ging1 jim6",
			"english": "experience"
		}
	},
	"kim": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "鉗",
			"jyutping": "kim2",
			"english": "pliers"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "鉗眉",
			"jyutping": "kim4 mei4",
			"english": "to pluck one's eyebrow"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwim": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"lim": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "威廉",
			"jyutping": "wai1 lim4",
			"english": "William"
		},
		"5": {
			"chinese": "收斂",
			"jyutping": "sau1 lim5",
			"english": "restrain oneself; convergence"
		},
		"6": {
			"chinese": "殮房",
			"jyutping": "lim6 fong4",
			"english": "morgue"
		}
	},
	"mim": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"nim": {
		"1": {
			"chinese": "黏稠",
			"jyutping": "nim1 cau4",
			"english": "sticky"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "紀念",
			"jyutping": "gei2 nim6",
			"english": "commemoration"
		}
	},
	"ngim": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"pim": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"sim": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "閃電",
			"jyutping": "sim2 din6",
			"english": "lightning"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "冬蟬",
			"jyutping": "dung1 sim4",
			"english": "winter cicadas"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"tim": {
		"1": {
			"chinese": "添加",
			"jyutping": "tim1 gaa1",
			"english": "to add (e.g. to cart)"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "甜品",
			"jyutping": "tim4 ban2",
			"english": "dessert"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"wim": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zim": {
		"1": {
			"chinese": "尖",
			"jyutping": "zim1",
			"english": "sharp"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "霸佔",
			"jyutping": "baa3 zim3",
			"english": "to occupy"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "逐漸",
			"jyutping": "zuk6 zim6",
			"english": "increasingly"
		}
	},
	"in": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"bin": {
		"1": {
			"chinese": "旁邊",
			"jyutping": "pong4 bin1",
			"english": "side"
		},
		"2": {
			"chinese": "扁",
			"jyutping": "bin2",
			"english": "flat"
		},
		"3": {
			"chinese": "變通",
			"jyutping": "bin3 tung1",
			"english": "to be flexible"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "便當",
			"jyutping": "bin6 dong3",
			"english": "lunchbox"
		}
	},
	"cin": {
		"1": {
			"chinese": "老千",
			"jyutping": "lou5 cin1",
			"english": "charlatan"
		},
		"2": {
			"chinese": "有錢",
			"jyutping": "jau5 cin2",
			"english": "rich"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "錢罌",
			"jyutping": "cin4 aang1",
			"english": "piggy bank"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"din": {
		"1": {
			"chinese": "癲癲得得",
			"jyutping": "din1 din1 dak1 dak1",
			"english": "a bit crazy; loopy"
		},
		"2": {
			"chinese": "典型",
			"jyutping": "din2 jing4",
			"english": "classical; typical"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "電話",
			"jyutping": "din6 waa2",
			"english": "phone"
		}
	},
	"fin": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gin": {
		"1": {
			"chinese": "堅定",
			"jyutping": "gin1 ding6",
			"english": "firm (in one's resolve)"
		},
		"2": {
			"chinese": "郵件",
			"jyutping": "jau4 gin2",
			"english": "postal mail"
		},
		"3": {
			"chinese": "建築",
			"jyutping": "gin3 zuk1",
			"english": "architecture"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "健康",
			"jyutping": "gin6 hong1",
			"english": "health"
		}
	},
	"gwin": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"hin": {
		"1": {
			"chinese": "牽涉",
			"jyutping": "hin1 sip3",
			"english": "involved"
		},
		"2": {
			"chinese": "譴責",
			"jyutping": "hin2 zaak3",
			"english": "condemn"
		},
		"3": {
			"chinese": "貢獻",
			"jyutping": "gung3 hin3",
			"english": "to contribute"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"jin": {
		"1": {
			"chinese": "食煙",
			"jyutping": "sik6 jin1",
			"english": "to smoke"
		},
		"2": {
			"chinese": "演技",
			"jyutping": "jin2 gei6",
			"english": "acting"
		},
		"3": {
			"chinese": "宴會",
			"jyutping": "jin3 wui6",
			"english": "banquet"
		},
		"4": {
			"chinese": "語言",
			"jyutping": "jyu5 jin4",
			"english": "language"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "現實",
			"jyutping": "jin6 sat6",
			"english": "reality"
		}
	},
	"kin": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "扭轉乾坤",
			"jyutping": "lau2 zyun2 kin4 kwan1",
			"english": "to turn around the tables"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwin": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"lin": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "頸鏈",
			"jyutping": "geng2 lin2",
			"english": "necklace"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "可憐",
			"jyutping": "ho2 lin4",
			"english": "pitiful"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "練習",
			"jyutping": "lin6 zaap6",
			"english": "to practice"
		}
	},
	"min": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "畀面",
			"jyutping": "bei2 min2",
			"english": "to give face to"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "棉花",
			"jyutping": "min4 faa1",
			"english": "cotton"
		},
		"5": {
			"chinese": "避免",
			"jyutping": "bei6 min5",
			"english": "to prevent"
		},
		"6": {
			"chinese": "面對",
			"jyutping": "min6 deoi3",
			"english": "to confront"
		}
	},
	"nin": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "出年",
			"jyutping": "ceot1 nin2",
			"english": "next year"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "新年",
			"jyutping": "san1 nin4",
			"english": "New Year"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ngin": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"pin": {
		"1": {
			"chinese": "篇",
			"jyutping": "pin1",
			"english": "measure word for essays, articles"
		},
		"2": {
			"chinese": "片",
			"jyutping": "pin2",
			"english": "a video clip"
		},
		"3": {
			"chinese": "片段",
			"jyutping": "pin3 dyun6",
			"english": "extract; fragment"
		},
		"4": {
			"chinese": "便宜",
			"jyutping": "pin4 ji4",
			"english": "cheap"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"sin": {
		"1": {
			"chinese": "先天",
			"jyutping": "sin1 tin1",
			"english": "inborn"
		},
		"2": {
			"chinese": "鱔",
			"jyutping": "sin2",
			"english": "eel"
		},
		"3": {
			"chinese": "風扇",
			"jyutping": "fung1 sin3",
			"english": "fan"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "善良",
			"jyutping": "sin6 loeng4",
			"english": "kind"
		}
	},
	"tin": {
		"1": {
			"chinese": "天國",
			"jyutping": "tin1 gwok3",
			"english": "Heaven"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "北京填鴨",
			"jyutping": "baak1 ging1 tin4 aap2",
			"english": "Beijing roast duck"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"win": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zin": {
		"1": {
			"chinese": "地氈",
			"jyutping": "dei6 zin1",
			"english": "carpet"
		},
		"2": {
			"chinese": "鉸剪",
			"jyutping": "gaau3 zin2",
			"english": "scissors"
		},
		"3": {
			"chinese": "射箭",
			"jyutping": "se6 zin3",
			"english": "archery"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "賤格",
			"jyutping": "zin6 gaak3",
			"english": "contemptible"
		}
	},
	"ing": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"bing": {
		"1": {
			"chinese": "冰",
			"jyutping": "bing1",
			"english": "ice"
		},
		"2": {
			"chinese": "豬頭炳",
			"jyutping": "zyu1 tau4 bing2",
			"english": "idiot"
		},
		"3": {
			"chinese": "併發症",
			"jyutping": "bing3 faat3 zing3",
			"english": "complications (medical)"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "並肩作戰",
			"jyutping": "bing6 gin1 zok3 zin3",
			"english": "to fight side by side"
		}
	},
	"cing": {
		"1": {
			"chinese": "清楚",
			"jyutping": "cing1 co2",
			"english": "clear"
		},
		"2": {
			"chinese": "請問",
			"jyutping": "cing2 man6",
			"english": "excuse me, may I ask...?"
		},
		"3": {
			"chinese": "電子秤",
			"jyutping": "ding6 zi2 cing3",
			"english": "electronic scale"
		},
		"4": {
			"chinese": "情緒",
			"jyutping": "cing4 seoi5",
			"english": "emotions"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ding": {
		"1": {
			"chinese": "叮噹",
			"jyutping": "ding1 dong1",
			"english": "ding-dong (sound of a bell); Doraemon"
		},
		"2": {
			"chinese": "頂多",
			"jyutping": "ding2 do1",
			"english": "at most"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "定位",
			"jyutping": "ding6 wai2",
			"english": "targeting (as in geolocation)"
		}
	},
	"fing": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "𢫕頭",
			"jyutping": "fing6 tau2",
			"english": "to shake one's head"
		}
	},
	"ging": {
		"1": {
			"chinese": "經歷",
			"jyutping": "ging1 lik6",
			"english": "to experience"
		},
		"2": {
			"chinese": "景色",
			"jyutping": "ging2 sik1",
			"english": "scenery"
		},
		"3": {
			"chinese": "敬禮",
			"jyutping": "ging3 lai5",
			"english": "to salute"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "勁辣",
			"jyutping": "ging6 laat6",
			"english": "extremely spicy"
		}
	},
	"gwing": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"hing": {
		"1": {
			"chinese": "潮流興",
			"jyutping": "ciu4 lau4 hing1",
			"english": "popular"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "慶祝",
			"jyutping": "hing3 zuk1",
			"english": "to celebrate"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"jing": {
		"1": {
			"chinese": "英國",
			"jyutping": "jing1 gwok3",
			"english": "England, the United Kingdom"
		},
		"2": {
			"chinese": "影相",
			"jyutping": "jing2 soeng2",
			"english": "to take photos"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "營養",
			"jyutping": "jing4 joeng5",
			"english": "nutrition"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "認錯",
			"jyutping": "jing6 co3",
			"english": "to admit one is wrong"
		}
	},
	"king": {
		"1": {
			"chinese": "傾向",
			"jyutping": "king1 hoeng3",
			"english": "tendency"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "鯨魚",
			"jyutping": "king4 jyu4",
			"english": "whale"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwing": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ling": {
		"1": {
			"chinese": "拎走",
			"jyutping": "ling1 zau2",
			"english": "to take away"
		},
		"2": {
			"chinese": "斗零",
			"jyutping": "dau2 ling2",
			"english": "five cents "
		},
		"3": {
			"chinese": "立立令",
			"jyutping": "laap3 laap3 ling3",
			"english": "nice and shiny (after polishing)"
		},
		"4": {
			"chinese": "菱形",
			"jyutping": "ling4 jing4",
			"english": "rhombus"
		},
		"5": {
			"chinese": "領養",
			"jyutping": "ling5 joeng5",
			"english": "to adopt (a child)"
		},
		"6": {
			"chinese": "命令",
			"jyutping": "ming6 ling6",
			"english": "to order"
		}
	},
	"ming": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "明白",
			"jyutping": "ming4 baak3",
			"english": "to understand"
		},
		"5": {
			"chinese": "冥界",
			"jyutping": "ming5 gaai3",
			"english": "the Underworld"
		},
		"6": {
			"chinese": "使命感",
			"jyutping": "si3 ming6 gam2",
			"english": "feeling of duty"
		}
	},
	"ning": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "寧靜",
			"jyutping": "ning4 zing6",
			"english": "serene"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "擰頭",
			"jyutping": "ning6 tau2",
			"english": "to shake one's head"
		}
	},
	"nging": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ping": {
		"1": {
			"chinese": "抨擊",
			"jyutping": "ping1 gik1",
			"english": "to attack (verbally or in writing)"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "拼音",
			"jyutping": "ping3 jam1",
			"english": "the Mandarin romanization system"
		},
		"4": {
			"chinese": "平靜",
			"jyutping": "ping4 zing6",
			"english": "peaceful"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"sing": {
		"1": {
			"chinese": "聲音",
			"jyutping": "sing1 jam1",
			"english": "noise"
		},
		"2": {
			"chinese": "醒覺",
			"jyutping": "sing2 gok3",
			"english": "to realize"
		},
		"3": {
			"chinese": "性格",
			"jyutping": "sing3 gak3",
			"english": "personality"
		},
		"4": {
			"chinese": "成龍",
			"jyutping": "sing4 lung4",
			"english": "Jackie Chan"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "剩餘",
			"jyutping": "sing6 jyu4",
			"english": "the remaining"
		}
	},
	"ting": {
		"1": {
			"chinese": "聽日",
			"jyutping": "ting1 jat6",
			"english": "tomorrow"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "聽力",
			"jyutping": "ting3 lik6",
			"english": "listening skill"
		},
		"4": {
			"chinese": "停車場",
			"jyutping": "ting4 ce1 coeng4",
			"english": "carpark"
		},
		"5": {
			"chinese": "涼亭",
			"jyutping": "loeng4 ting5",
			"english": "pavilion (place with shade to rest in)"
		},
		"6": {
			"chinese": ""
		}
	},
	"wing": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "榮華富貴",
			"jyutping": "wing4 waa4 fu3 gwai3",
			"english": "prosperous and rich"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "背泳",
			"jyutping": "bui3 wing6",
			"english": "backstroke"
		}
	},
	"zing": {
		"1": {
			"chinese": "精英",
			"jyutping": "zing1 jing1",
			"english": "elite"
		},
		"2": {
			"chinese": "整齊",
			"jyutping": "zing2 cai4",
			"english": "tidy"
		},
		"3": {
			"chinese": "證據",
			"jyutping": "zing3 geoi3",
			"english": "evidence"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "寧靜",
			"jyutping": "ning4 zing6",
			"english": "serene"
		}
	},
	"ip": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"bip": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"cip": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"dip": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "碟",
			"jyutping": "dip2",
			"english": "plate"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "洗碟",
			"jyutping": "sai2 dip6",
			"english": "to wash the dishes"
		}
	},
	"fip": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gip": {
		"1": {
			"chinese": "喼汁",
			"jyutping": "gip1 zap1",
			"english": "Worcestershire sauce"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "打劫",
			"jyutping": "daa2 gip3",
			"english": "to rob"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "逼狹",
			"jyutping": "bik1 gip6",
			"english": "cramped"
		}
	},
	"gwip": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"hip": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "怯場",
			"jyutping": "hip3 coeng4",
			"english": "to get stage fright"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"jip": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "醃",
			"jyutping": "jip3",
			"english": "to marinate"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "樹葉",
			"jyutping": "syu6 jip6",
			"english": "tree leaves"
		}
	},
	"kip": {
		"1": {
			"chinese": "喼弗",
			"jyutping": "kip1 fit1",
			"english": "keep fit (transliteration)"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwip": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"lip": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "打獵",
			"jyutping": "daa2 lip6",
			"english": "to go hunting"
		}
	},
	"mip": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"nip": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "涅槃",
			"jyutping": "nip6 pun4",
			"english": "Nirvana (transliteration)"
		}
	},
	"ngip": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"pip": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"sip": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "攝嚫",
			"jyutping": "sip3 can1",
			"english": "to catch a cold"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"tip": {
		"1": {
			"chinese": "貼士",
			"jyutping": "tip1 si2",
			"english": "tips (transliteration)"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "貼紙",
			"jyutping": "tip3 zi2",
			"english": "stickers"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"wip": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zip": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "摺衫",
			"jyutping": "zip3 saam1",
			"english": "to fold clothes"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"it": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"bit": {
		"1": {
			"chinese": "必需",
			"jyutping": "bit1 seoi1",
			"english": "essential; indispensable"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "特別",
			"jyutping": "dak6 bit6",
			"english": "special"
		}
	},
	"cit": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "假設",
			"jyutping": "gaa2 cit3",
			"english": "conjecture, assumption"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"dit": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "跌低",
			"jyutping": "dit3 dai1",
			"english": "to fall"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "秩序",
			"jyutping": "dit6 zeoi6",
			"english": "order (as in order in society)"
		}
	},
	"fit": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "扉扉聲",
			"jyutping": "fit4 fit2 seng1",
			"english": "the sound of wind"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"git": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "結冰",
			"jyutping": "git3 bing1",
			"english": "to freeze"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "傑出",
			"jyutping": "git6 ceot1",
			"english": "outstanding"
		}
	},
	"gwit": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"hit": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "蠍子",
			"jyutping": "hit3  zi2",
			"english": "scorpion"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"jit": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "打思噎",
			"jyutping": "daa2 si1 jit3",
			"english": "to hiccup"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "好熱",
			"jyutping": "hou2 jit6",
			"english": "very hot"
		}
	},
	"kit": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "揭開",
			"jyutping": "kit3 hoi1",
			"english": "to flip open"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwit": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"lit": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "打纈",
			"jyutping": "daa2 lit3",
			"english": "to tie a knot"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "撕裂",
			"jyutping": "si1 lit6",
			"english": "tear (as in a tear in clothes)"
		}
	},
	"mit": {
		"1": {
			"chinese": "搣",
			"jyutping": "mit1",
			"english": "to pinch; to peel off"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "毀滅",
			"jyutping": "wai2 mit6",
			"english": "to destroy"
		}
	},
	"nit": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ngit": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"pit": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "撇開",
			"jyutping": "pit3 hoi1",
			"english": "putting aside..."
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"sit": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "舌頭",
			"jyutping": "sit3 tau4",
			"english": "tongue"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "蝕錢",
			"jyutping": "sit6 cin2",
			"english": "to lose money"
		}
	},
	"tit": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "地鐵",
			"jyutping": "dei6 tit3",
			"english": "the subway"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"wit": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zit": {
		"1": {
			"chinese": "唧都唔笑",
			"jyutping": "zit1 dou1 m4 siu3",
			"english": "someone who's (too) serious"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "季節",
			"jyutping": "gwai3 zit3",
			"english": "season"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ik": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"bik": {
		"1": {
			"chinese": "擠迫",
			"jyutping": "zai1 bik1",
			"english": "cramped"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "迫力",
			"jyutping": "bik6 lik1",
			"english": "brakes (transliteration)"
		}
	},
	"cik": {
		"1": {
			"chinese": "親戚",
			"jyutping": "can1 cik1",
			"english": "relatives"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"dik": {
		"1": {
			"chinese": "的士",
			"jyutping": "dik1 si2",
			"english": "taxi (transliteration)"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "敵人",
			"jyutping": "dik6 jan4",
			"english": "enemy"
		}
	},
	"fik": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gik": {
		"1": {
			"chinese": "攻擊",
			"jyutping": "gung1 gik1",
			"english": "to attack"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "極端",
			"jyutping": "gik6 dyun1",
			"english": "extreme"
		}
	},
	"gwik": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"hik": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"jik": {
		"1": {
			"chinese": "有益",
			"jyutping": "jau5 jik1",
			"english": "to be beneficial (usually to one's health)"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "翻譯",
			"jyutping": "faan1 jik6",
			"english": "to translate"
		}
	},
	"kik": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwik": {
		"1": {
			"chinese": "空隙",
			"jyutping": "hung1 kwik1",
			"english": "crack or gap between two objects"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"lik": {
		"1": {
			"chinese": "瓦礫",
			"jyutping": "ngaa5 lik1",
			"english": "debris; rubble"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "大力",
			"jyutping": "daai6 lik6",
			"english": "strong (muscular)"
		}
	},
	"mik": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "尋覓",
			"jyutping": "cam4 mik6",
			"english": "to look for"
		}
	},
	"nik": {
		"1": {
			"chinese": "匿名",
			"jyutping": "nik1 ming4",
			"english": "anonymous"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ngik": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"pik": {
		"1": {
			"chinese": "偏僻",
			"jyutping": "pin1 pik1",
			"english": "remote (as in a remote place)"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"sik": {
		"1": {
			"chinese": "識講",
			"jyutping": "sik1 gong2",
			"english": "to know how to speak (a language)"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "嘢食",
			"jyutping": "je5 sik6",
			"english": "food"
		}
	},
	"tik": {
		"1": {
			"chinese": "剔",
			"jyutping": "tik1",
			"english": "tick (as in the opposite of a cross - transliteration)"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"wik": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "區域",
			"jyutping": "keoi1 wik6",
			"english": "area"
		}
	},
	"zik": {
		"1": {
			"chinese": "即刻",
			"jyutping": "zik1 hak1",
			"english": "immediately"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "直接",
			"jyutping": "zik6 zip3",
			"english": "directly"
		}
	},
	"o": {
		"1": {
			"chinese": "柯達",
			"jyutping": "o1 daat6",
			"english": "Kodak"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "咿咿哦哦",
			"jyutping": "ji4 ji1 o4 o4",
			"english": "someone who nags on and on about trivial matters"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"bo": {
		"1": {
			"chinese": "打波",
			"jyutping": "daa2 bo1",
			"english": "to play basketball"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "廣播",
			"jyutping": "gwong2 bo3",
			"english": "broadcast"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"co": {
		"1": {
			"chinese": "初一",
			"jyutping": "co1 jat1",
			"english": "first day of a lunar month"
		},
		"2": {
			"chinese": "清楚",
			"jyutping": "cing1 co2",
			"english": "clear"
		},
		"3": {
			"chinese": "錯",
			"jyutping": "co3",
			"english": "wrong"
		},
		"4": {
			"chinese": "鋤大D",
			"jyutping": "co4 daai6 di2",
			"english": "Big 2"
		},
		"5": {
			"chinese": "坐低",
			"jyutping": "co5 dai1",
			"english": "to sit down"
		},
		"6": {
			"chinese": ""
		}
	},
	"do": {
		"1": {
			"chinese": "多士",
			"jyutping": "do1 si2",
			"english": "toast"
		},
		"2": {
			"chinese": "花朵",
			"jyutping": "faa1 do2",
			"english": "flower"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "墮落",
			"jyutping": "do6 lok6",
			"english": "to fall into depravity"
		}
	},
	"fo": {
		"1": {
			"chinese": "科目",
			"jyutping": "fo1 muk6",
			"english": "subject"
		},
		"2": {
			"chinese": "火焰",
			"jyutping": "fo2 jim6",
			"english": "flame"
		},
		"3": {
			"chinese": "A貨",
			"jyutping": "A fo3",
			"english": "counterfeits"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"go": {
		"1": {
			"chinese": "哥哥",
			"jyutping": "go4 go1",
			"english": "elder brother"
		},
		"2": {
			"chinese": "嗰個",
			"jyutping": "go2 go3",
			"english": "that one"
		},
		"3": {
			"chinese": "個人",
			"jyutping": "go3 jan4",
			"english": "a person"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gwo": {
		"1": {
			"chinese": "干戈",
			"jyutping": "gon1 gwo1",
			"english": "weapons of war"
		},
		"2": {
			"chinese": "生果",
			"jyutping": "saang1 gwo2",
			"english": "fruits"
		},
		"3": {
			"chinese": "過去",
			"jyutping": "gwo3 heoi3",
			"english": "the past"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ho": {
		"1": {
			"chinese": "呵護",
			"jyutping": "ho1 wu6",
			"english": "to protect; to cherish"
		},
		"2": {
			"chinese": "可以",
			"jyutping": "ho2 ji5",
			"english": "to be able to"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "河流",
			"jyutping": "ho4 lau4",
			"english": "river"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "負荷",
			"jyutping": "fu6 ho6",
			"english": "burden"
		}
	},
	"jo": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ko": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwo": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"lo": {
		"1": {
			"chinese": "囉嗦",
			"jyutping": "lo1 so1",
			"english": "nagging"
		},
		"2": {
			"chinese": "攞命",
			"jyutping": "lo2 meng6",
			"english": "something that's awful (maybe you have to put in a lot of effort)"
		},
		"3": {
			"chinese": "𤓓味",
			"jyutping": "lo3 mei6",
			"english": "a burnt smell"
		},
		"4": {
			"chinese": "蘿蔔",
			"jyutping": "lo4 baak3",
			"english": "turnip; carrot"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"mo": {
		"1": {
			"chinese": "魔法",
			"jyutping": "mo1 faat3",
			"english": "magic"
		},
		"2": {
			"chinese": "摸索",
			"jyutping": "mo2 sok3",
			"english": "to explore"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "摩擦力",
			"jyutping": "mo4 caak3 lik6",
			"english": "friction"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"no": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "挪亞方舟",
			"jyutping": "no4 aa3 fong1 zau1",
			"english": "Noah's Ark"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "糯米飯",
			"jyutping": "no6 mai5 faan6",
			"english": "glutinous rice"
		}
	},
	"ngo": {
		"1": {
			"chinese": "痾",
			"jyutping": "ngo1",
			"english": "to excrete"
		},
		"2": {
			"chinese": "燒鵝",
			"jyutping": "siu1 ngo2",
			"english": "roast goose"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "林鄭月娥",
			"jyutping": "lam4 zeng6 jyut6 ngo4",
			"english": "Carrie Lam, 4th Hong Kong Chief Executive"
		},
		"5": {
			"chinese": "我",
			"jyutping": "ngo5",
			"english": "I; me"
		},
		"6": {
			"chinese": "肚餓",
			"jyutping": "tou5 ngo6",
			"english": "hungry"
		}
	},
	"po": {
		"1": {
			"chinese": "棵",
			"jyutping": "po1",
			"english": "measure word for a tree"
		},
		"2": {
			"chinese": "兩公婆",
			"jyutping": "loeng5 gung1 po2",
			"english": "a married couple"
		},
		"3": {
			"chinese": "破壞",
			"jyutping": "po3 waai6",
			"english": "to destroy"
		},
		"4": {
			"chinese": "婆婆",
			"jyutping": "po4 po2",
			"english": "elderly lady"
		},
		"5": {
			"chinese": "頗為",
			"jyutping": "po5 wai4",
			"english": "quite"
		},
		"6": {
			"chinese": ""
		}
	},
	"so": {
		"1": {
			"chinese": "梳頭",
			"jyutping": "so1 tau4",
			"english": "to comb one's hair"
		},
		"2": {
			"chinese": "鎖匙",
			"jyutping": "so2 si4",
			"english": "key"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "傻瓜",
			"jyutping": "so4 gwaa1",
			"english": "idiot"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"to": {
		"1": {
			"chinese": "拍拖",
			"jyutping": "paak3 to1",
			"english": "to go out with (as in a date)"
		},
		"2": {
			"chinese": "陀陀擰",
			"jyutping": "to4 to2 ning6",
			"english": "to go around in circles (physically)"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "駱駝",
			"jyutping": "lok6 to4",
			"english": "camel"
		},
		"5": {
			"chinese": "唔妥",
			"jyutping": "m4 to5",
			"english": "not right (as in something feels off)"
		},
		"6": {
			"chinese": ""
		}
	},
	"wo": {
		"1": {
			"chinese": "蝸牛",
			"jyutping": "wo1 ngau4",
			"english": "snail"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "喎",
			"jyutping": "wo3",
			"english": "Cantonese final particle"
		},
		"4": {
			"chinese": "共和國",
			"jyutping": "gung6 wo4 gwok3",
			"english": "republic"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "闖禍",
			"jyutping": "cong2 wo6",
			"english": "to land oneself in trouble"
		}
	},
	"zo": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "左右",
			"jyutping": "zo2 jau2",
			"english": "around"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "輔助",
			"jyutping": "fu6 zo6",
			"english": "to assist, aid"
		}
	},
	"oi": {
		"1": {
			"chinese": "哀悼",
			"jyutping": "oi1 dou6",
			"english": "to mourn"
		},
		"2": {
			"chinese": "和藹",
			"jyutping": "wo4 oi2",
			"english": "amiable; approachable"
		},
		"3": {
			"chinese": "愛",
			"jyutping": "oi3",
			"english": "love"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"boi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"coi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "彩虹",
			"jyutping": "coi2 hung4",
			"english": "rainbow"
		},
		"3": {
			"chinese": "菠菜",
			"jyutping": "bo1 coi3",
			"english": "spinach"
		},
		"4": {
			"chinese": "財經",
			"jyutping": "coi4 ging1",
			"english": "financial"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"doi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "褲袋",
			"jyutping": "fu3 doi2",
			"english": "pant pocket"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "時代",
			"jyutping": "si6 doi6",
			"english": "the times"
		}
	},
	"foi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"goi": {
		"1": {
			"chinese": "應該",
			"jyutping": "jing1 goi1",
			"english": "should"
		},
		"2": {
			"chinese": "改善",
			"jyutping": "goi2 sin6",
			"english": "to improve"
		},
		"3": {
			"chinese": "蓋",
			"jyutping": "goi3",
			"english": "a lid"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gwoi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"hoi": {
		"1": {
			"chinese": "開門",
			"jyutping": "hoi1 mun4",
			"english": "to open a door"
		},
		"2": {
			"chinese": "大海",
			"jyutping": "daai6 hoi2",
			"english": "big sea"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "害蟲",
			"jyutping": "hoi6 cung4",
			"english": "pest"
		}
	},
	"joi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"koi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "概念",
			"jyutping": "koi3 nim6",
			"english": "concept"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwoi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"loi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "禮尚往來",
			"jyutping": "lai6 soeng6 wong5 loi4",
			"english": "good manners is reciprocal"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"moi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"noi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "耐性",
			"jyutping": "noi6 sing3",
			"english": "patience"
		}
	},
	"ngoi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "割愛",
			"jyutping": "got3 ngoi3",
			"english": "to cast away; to give up on something you love"
		},
		"4": {
			"chinese": "呆板",
			"jyutping": "ngoi4 baan2",
			"english": "sluggish, bored"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "外交官",
			"jyutping": "ngoi6 gaau1 gun1",
			"english": "diplomat"
		}
	},
	"poi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"soi": {
		"1": {
			"chinese": "魚鰓",
			"jyutping": "jyu4 soi1",
			"english": "fish gills"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"toi": {
		"1": {
			"chinese": "胎兒",
			"jyutping": "toi1 ji4",
			"english": "foetus; unborn child"
		},
		"2": {
			"chinese": "枱腳",
			"jyutping": "toi2 goek3",
			"english": "legs of a table"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "台灣",
			"jyutping": "toi4 waan1",
			"english": "Taiwan"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"woi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zoi": {
		"1": {
			"chinese": "災難",
			"jyutping": "zoi1 naan6",
			"english": "disaster; catastrophe"
		},
		"2": {
			"chinese": "十年八載",
			"jyutping": "sap6 nin4 baat3 zoi2",
			"english": "around ten years"
		},
		"3": {
			"chinese": "載客",
			"jyutping": "zoi3 haak3",
			"english": "to take a passenger on board"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "在場",
			"jyutping": "zoi6 coeng4",
			"english": "to be present (in a place)"
		}
	},
	"ou": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "奧運",
			"jyutping": "ou3 wan6",
			"english": "the Olympics"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"bou": {
		"1": {
			"chinese": "煲湯",
			"jyutping": "bou1 tong1",
			"english": "to cook soup"
		},
		"2": {
			"chinese": "漢堡包",
			"jyutping": "hon3 bou2 baau1",
			"english": "hamburger"
		},
		"3": {
			"chinese": "報警",
			"jyutping": "bou3 ging2",
			"english": "to call the cops"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "暴力",
			"jyutping": "bou6 lik6",
			"english": "violent"
		}
	},
	"cou": {
		"1": {
			"chinese": "粗",
			"jyutping": "cou1",
			"english": "thick"
		},
		"2": {
			"chinese": "草地",
			"jyutping": "cou2 dei6",
			"english": "lawn"
		},
		"3": {
			"chinese": "食醋",
			"jyutping": "sik6 cou3",
			"english": "table vinegar"
		},
		"4": {
			"chinese": "曹操",
			"jyutping": "cou4 cou1",
			"english": "Cao cao, a Chinese warlord"
		},
		"5": {
			"chinese": "儲錢",
			"jyutping": "cou5 cin2",
			"english": "to save up money"
		},
		"6": {
			"chinese": ""
		}
	},
	"dou": {
		"1": {
			"chinese": "菜刀",
			"jyutping": "coi3 dou1",
			"english": "vegetable knife"
		},
		"2": {
			"chinese": "離島",
			"jyutping": "lei4 dou2",
			"english": "outlying islands (in Hong Kong)"
		},
		"3": {
			"chinese": "到達",
			"jyutping": "dou3 daat6",
			"english": "to arrive"
		},
		"4": {
			"chinese": "摩度",
			"jyutping": "mo1 dou4",
			"english": "a model (as in the profession)"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "誤導",
			"jyutping": "m6 dou6",
			"english": "to misguide; to mislead"
		}
	},
	"fou": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gou": {
		"1": {
			"chinese": "高大",
			"jyutping": "gou1 daai6",
			"english": "someone who's tall and big"
		},
		"2": {
			"chinese": "改稿",
			"jyutping": "goi2 gou2",
			"english": "to revise a manuscript"
		},
		"3": {
			"chinese": "告別",
			"jyutping": "gou3 bit6",
			"english": "farewell"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gwou": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"hou": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "好人",
			"jyutping": "hou2 jan4",
			"english": "a good person"
		},
		"3": {
			"chinese": "好勝",
			"jyutping": "hou3 sing3",
			"english": "competitive and aggressive"
		},
		"4": {
			"chinese": "豪華",
			"jyutping": "hou4 waa4",
			"english": "luxurious"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "感嘆號",
			"jyutping": "gam2 taam3 hou6",
			"english": "exclamation mark"
		}
	},
	"jou": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kou": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwou": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"lou": {
		"1": {
			"chinese": "撈麵",
			"jyutping": "lou1 min6",
			"english": "noodles mixed with (different types of) sauce"
		},
		"2": {
			"chinese": "細佬",
			"jyutping": "sai3 lou2",
			"english": "younger brother"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "勞工處",
			"jyutping": "lou4 gung1 cyu5",
			"english": "Labour Department"
		},
		"5": {
			"chinese": "老人院",
			"jyutping": "lou5 jan4 jyun2",
			"english": "senior home"
		},
		"6": {
			"chinese": "露台",
			"jyutping": "lou6 toi4",
			"english": "balcony"
		}
	},
	"mou": {
		"1": {
			"chinese": "蟆",
			"jyutping": "mou1",
			"english": "toad"
		},
		"2": {
			"chinese": "高帽",
			"jyutping": "gou1 mou2",
			"english": "tall hat"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "狗毛",
			"jyutping": "gau2 mou4",
			"english": "dog fur"
		},
		"5": {
			"chinese": "冇錢",
			"jyutping": "mou5 cin2",
			"english": "poor"
		},
		"6": {
			"chinese": "一頭霧水",
			"jyutping": "jat1 tau4 mou6 seoi2",
			"english": "baffled"
		}
	},
	"nou": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "奴隸",
			"jyutping": "nou4 dai6",
			"english": "slave"
		},
		"5": {
			"chinese": "煩惱",
			"jyutping": "faan4 nou5",
			"english": "worry"
		},
		"6": {
			"chinese": "憤怒",
			"jyutping": "fan5 nou6",
			"english": "anger"
		}
	},
	"ngou": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "桀驁不馴",
			"jyutping": "git6 ngou4 bat1 seon4",
			"english": "arrogant and stubborn"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "傲慢",
			"jyutping": "ngou6 maan6",
			"english": "arrogant"
		}
	},
	"pou": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "琴譜",
			"jyutping": "kam4 pou2",
			"english": "piano score"
		},
		"3": {
			"chinese": "涼茶舖",
			"jyutping": "loeng4 caa4 pou3",
			"english": "herbal tea shop"
		},
		"4": {
			"chinese": "菩薩",
			"jyutping": "pou4 saat3",
			"english": "Bodhisattva"
		},
		"5": {
			"chinese": "水泡",
			"jyutping": "seoi2 pou5",
			"english": "bubbles; blisters"
		},
		"6": {
			"chinese": ""
		}
	},
	"sou": {
		"1": {
			"chinese": "牢騷",
			"jyutping": "lou4 sou1",
			"english": "complaint"
		},
		"2": {
			"chinese": "大嫂",
			"jyutping": "daai6 sou2",
			"english": "sister-in-law"
		},
		"3": {
			"chinese": "素食",
			"jyutping": "sou3 sik6",
			"english": "vegetarian"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"tou": {
		"1": {
			"chinese": "滔滔不絕",
			"jyutping": "tou1 tou1 bat1 zyut6",
			"english": "someone who talks excessively"
		},
		"2": {
			"chinese": "禱告",
			"jyutping": "tou2 gou3",
			"english": "to pray"
		},
		"3": {
			"chinese": "兔仔",
			"jyutping": "tou3 zai2",
			"english": "rabbit"
		},
		"4": {
			"chinese": "藍圖",
			"jyutping": "laam4 tou4",
			"english": "blueprint"
		},
		"5": {
			"chinese": "肚腩",
			"jyutping": "tou5 laam4",
			"english": "belly"
		},
		"6": {
			"chinese": ""
		}
	},
	"wou": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zou": {
		"1": {
			"chinese": "污糟",
			"jyutping": "wu1 zou1",
			"english": "dirty"
		},
		"2": {
			"chinese": "早晨",
			"jyutping": "zou2 san4",
			"english": "good morning"
		},
		"3": {
			"chinese": "爐灶",
			"jyutping": "lou4 zou3",
			"english": "stove"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "做嘢",
			"jyutping": "zou6 je5",
			"english": "to be working"
		}
	},
	"on": {
		"1": {
			"chinese": "安慰",
			"jyutping": "on1 wai3",
			"english": "to console"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "案件",
			"jyutping": "on3 gin2",
			"english": "case (as in a legal case)"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"bon": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"con": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"don": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"fon": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gon": {
		"1": {
			"chinese": "乾淨",
			"jyutping": "gon1 zeng6",
			"english": "clean, neat"
		},
		"2": {
			"chinese": "趕時間",
			"jyutping": "gon2 si4 gaan3",
			"english": "to be in a hurry"
		},
		"3": {
			"chinese": "幹勁",
			"jyutping": "gon3 ging3",
			"english": "enthusiasm for doing something"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gwon": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"hon": {
		"1": {
			"chinese": "看更",
			"jyutping": "hon1 gaang1",
			"english": "security guard"
		},
		"2": {
			"chinese": "罕有",
			"jyutping": "hon2 jau5",
			"english": "rare"
		},
		"3": {
			"chinese": "漢族",
			"jyutping": "hon3 zuk6",
			"english": "Han nationality (majority population in China)"
		},
		"4": {
			"chinese": "韓國",
			"jyutping": "hon4 gwok3",
			"english": "Korea (South Korea)"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "出汗",
			"jyutping": "ceot1 hon6",
			"english": "to sweat"
		}
	},
	"jon": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kon": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwon": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"lon": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"mon": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"non": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ngon": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "落案",
			"jyutping": "lok6 ngon3",
			"english": "to press charges"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "上岸",
			"jyutping": "soeng5 ngon6",
			"english": "to be rich"
		}
	},
	"pon": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"son": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ton": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"won": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zon": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ong": {
		"1": {
			"chinese": "骯髒",
			"jyutping": "ong1 zong1",
			"english": "dirty"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"bong": {
		"1": {
			"chinese": "幫助",
			"jyutping": "bong1 zo6",
			"english": "to help"
		},
		"2": {
			"chinese": "榜樣",
			"jyutping": "bong2 joeng6",
			"english": "role model"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "磅重",
			"jyutping": "bong6 cung5",
			"english": "to weigh (on a scale)"
		}
	},
	"cong": {
		"1": {
			"chinese": "倉庫",
			"jyutping": "cong1 fu3",
			"english": "warehouse"
		},
		"2": {
			"chinese": "工廠",
			"jyutping": "gung1 cong2",
			"english": "factory"
		},
		"3": {
			"chinese": "創新",
			"jyutping": "cong3 san1",
			"english": "innovation"
		},
		"4": {
			"chinese": "捉迷藏",
			"jyutping": "zuk1 mai4 cong4",
			"english": "hide-and-seek"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"dong": {
		"1": {
			"chinese": "當時",
			"jyutping": "dong1 si4",
			"english": "at that time"
		},
		"2": {
			"chinese": "擋住",
			"jyutping": "dong2 zyu6",
			"english": "to block (like an attack)"
		},
		"3": {
			"chinese": "上當",
			"jyutping": "soeng5 dong3",
			"english": "to be tricked"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "遊蕩",
			"jyutping": "jau4 dong6",
			"english": "to loiter"
		}
	},
	"fong": {
		"1": {
			"chinese": "驚慌",
			"jyutping": "ging1 fong1",
			"english": "to panic"
		},
		"2": {
			"chinese": "睡房",
			"jyutping": "seoi6 fong2",
			"english": "bedroom"
		},
		"3": {
			"chinese": "放棄",
			"jyutping": "fong3 hei3",
			"english": "to give up"
		},
		"4": {
			"chinese": "防守",
			"jyutping": "fong4 sau2",
			"english": "defense"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gong": {
		"1": {
			"chinese": "剛硬",
			"jyutping": "gong1 ngaang6",
			"english": "tough and hard (physically)"
		},
		"2": {
			"chinese": "講嘢",
			"jyutping": "gong2 je5",
			"english": "to talk"
		},
		"3": {
			"chinese": "鋼鐵",
			"jyutping": "gong3 tit3",
			"english": "steel"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gwong": {
		"1": {
			"chinese": "光明",
			"jyutping": "gwong1 ming4",
			"english": "bright"
		},
		"2": {
			"chinese": "廣東",
			"jyutping": "gwong2 dung1",
			"english": "Canton; Guangdong (the region)"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"hong": {
		"1": {
			"chinese": "健康",
			"jyutping": "gin6 hong1",
			"english": "healthy"
		},
		"2": {
			"chinese": "後巷",
			"jyutping": "hau6 hong2",
			"english": "alley"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "行規",
			"jyutping": "hong4 kwai1",
			"english": "professional etiquette"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "街巷",
			"jyutping": "gaai1 hong6",
			"english": "street"
		}
	},
	"jong": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kong": {
		"1": {
			"chinese": "扛",
			"jyutping": "kong1",
			"english": "to carry on one's shoulder"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "抵抗",
			"jyutping": "dai2 kong3",
			"english": "to resist"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwong": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "煤礦",
			"jyutping": "mui4 kwong3",
			"english": "a coal mine"
		},
		"4": {
			"chinese": "瘋狂",
			"jyutping": "fung1 kwong4",
			"english": "madness; lunacy"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"long": {
		"1": {
			"chinese": "狼戾",
			"jyutping": "long1 lai2",
			"english": "insolent; outrageous"
		},
		"2": {
			"chinese": "𠺘口",
			"jyutping": "long2 hau2",
			"english": "to rinse (one's mouth)"
		},
		"3": {
			"chinese": "long3 高",
			"jyutping": "long3 gou1",
			"english": "to hang something up"
		},
		"4": {
			"chinese": "豺狼",
			"jyutping": "caai4 long4",
			"english": "wolf"
		},
		"5": {
			"chinese": "元朗",
			"jyutping": "jyun4 long5",
			"english": "Yuen Long (MTR station)"
		},
		"6": {
			"chinese": "海浪",
			"jyutping": "hoi2 long6",
			"english": "wave"
		}
	},
	"mong": {
		"1": {
			"chinese": "芒果",
			"jyutping": "mong1 gwo2",
			"english": "mango"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "繁忙",
			"jyutping": "faan4 mong4",
			"english": "busy"
		},
		"5": {
			"chinese": "妄想",
			"jyutping": "mong5 soeng2",
			"english": "delusion"
		},
		"6": {
			"chinese": "希望",
			"jyutping": "hei1 mong6",
			"english": "hope"
		}
	},
	"nong": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "背囊",
			"jyutping": "bui3 nong4",
			"english": "knapsack"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ngong": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "昂坪",
			"jyutping": "ngong4 ping4",
			"english": "Ngong Ping (a place in Hong Kong)"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "戇居",
			"jyutping": "ngong6 geoi1",
			"english": "naïve; daft; asinine"
		}
	},
	"pong": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "傍身",
			"jyutping": "pong4 san1",
			"english": "something to keep by one's side"
		},
		"5": {
			"chinese": "蚌",
			"jyutping": "pong5",
			"english": "clam; mussel"
		},
		"6": {
			"chinese": ""
		}
	},
	"song": {
		"1": {
			"chinese": "滄海桑田",
			"jyutping": "cong1 hoi2 song1 tin4",
			"english": "the transformations of the world"
		},
		"2": {
			"chinese": "爽快",
			"jyutping": "song2 faai3",
			"english": "rejuvenated"
		},
		"3": {
			"chinese": "喪失",
			"jyutping": "song3 sat1",
			"english": "to lose (as in someone, an opportunity, etc.)"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"tong": {
		"1": {
			"chinese": "雞湯",
			"jyutping": "gai1 tong1",
			"english": "chicken soup"
		},
		"2": {
			"chinese": "糖",
			"jyutping": "tong2",
			"english": "candy"
		},
		"3": {
			"chinese": "熨斗",
			"jyutping": "tong3 dau2",
			"english": "iron (as in the tool used to iron clothes)"
		},
		"4": {
			"chinese": "蔗糖",
			"jyutping": "ze3 tong4",
			"english": "cane sugar"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"wong": {
		"1": {
			"chinese": "汪",
			"jyutping": "wong1",
			"english": "sound of a dog barking (onomatopoeia)"
		},
		"2": {
			"chinese": "冤枉",
			"jyutping": "jyun1 wong2",
			"english": "to wrongly accuse somebody of something"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "黃色",
			"jyutping": "wong4 sik1",
			"english": "yellow"
		},
		"5": {
			"chinese": "一如往昔",
			"jyutping": "jat1 jyu4 wong5 sik1",
			"english": "as with the past"
		},
		"6": {
			"chinese": "旺角",
			"jyutping": "wong6 gok3",
			"english": "Mong Kok (MTR station)"
		}
	},
	"zong": {
		"1": {
			"chinese": "化妝",
			"jyutping": "faa3 zong1",
			"english": "to put on makeup"
		},
		"2": {
			"chinese": "撞邪",
			"jyutping": "zong2 ce4",
			"english": "to be possessed by evil spirits"
		},
		"3": {
			"chinese": "埋葬",
			"jyutping": "maai4 zong3",
			"english": "to bury (a body)"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "西藏",
			"jyutping": "sai1 zong6",
			"english": "Tibet"
		}
	},
	"ot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"bot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"cot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"dot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"fot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"got": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "諸葛亮",
			"jyutping": "zyu1 got3 loeng6",
			"english": "ZhuGe Liang, a chancellor during the Three Kingdoms period"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gwot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"hot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "口渴",
			"jyutping": "hau2 hot3",
			"english": "thirsty"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"jot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"lot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"mot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"not": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ngot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"pot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"sot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"tot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"wot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ok": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "惡",
			"jyutping": "ok3",
			"english": "ferocious; mean"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"bok": {
		"1": {
			"chinese": "剝",
			"jyutping": "bok1",
			"english": "to thump someone's head"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "駁嘴",
			"jyutping": "bok3 zeoi2",
			"english": "to talk back to someone"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "偷薄",
			"jyutping": "tau1 bok6",
			"english": "to trim one's hair"
		}
	},
	"cok": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "擢樣",
			"jyutping": "cok3 joeng2",
			"english": "to make emo, cool expressions on one's face"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"dok": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "度計",
			"jyutping": "dok6 gai2",
			"english": "to think up a strategy"
		}
	},
	"fok": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "霍亂",
			"jyutping": "fok3 lyun6",
			"english": "cholera"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gok": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "角度",
			"jyutping": "gok3 dou6",
			"english": "angle (as in a perspective, or the mathematical one)"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gwok": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "國家",
			"jyutping": "gwok3 gaa1",
			"english": "country"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"hok": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "紅鶴",
			"jyutping": "hong4 hok2",
			"english": "crane"
		},
		"3": {
			"chinese": "貝殼",
			"jyutping": "bui3 hok3",
			"english": "shell"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "小學",
			"jyutping": "siu2 hok6",
			"english": "primary school"
		}
	},
	"jok": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kok": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "確定",
			"jyutping": "kok3 ding6",
			"english": "certain"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwok": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "輪廓",
			"jyutping": "leon4 kwok3",
			"english": "features of the face"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"lok": {
		"1": {
			"chinese": "咯咯聲",
			"jyutping": "lok1 lok1 seng1",
			"english": "fluently"
		},
		"2": {
			"chinese": "絲瓜絡",
			"jyutping": "si1 gwa1 lok2",
			"english": "loofah"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "樂趣",
			"jyutping": "lok6 ceoi3",
			"english": "fun"
		}
	},
	"mok": {
		"1": {
			"chinese": "剝牙",
			"jyutping": "mok1 ngaa4",
			"english": "to extract a tooth"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "莫講",
			"jyutping": "mok6 gong2",
			"english": "let alone"
		}
	},
	"nok": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "干諾道",
			"jyutping": "gon1 nok6 dou6",
			"english": "Connaught Road (in Hong Kong)"
		}
	},
	"ngok": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "惡作劇",
			"jyutping": "ngok3 zok3 kek6",
			"english": "prank"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "音樂",
			"jyutping": "jam1 ngok6",
			"english": "music"
		}
	},
	"pok": {
		"1": {
			"chinese": "豆卜",
			"jyutping": "dau6 pok1",
			"english": "tofu puffs"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "撲熄",
			"jyutping": "pok3 sik1",
			"english": "to put out a fire"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"sok": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "塑膠",
			"jyutping": "sok3 gaau1",
			"english": "plastic"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"tok": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "托兒所",
			"jyutping": "tok3 ji4 so2",
			"english": "nursery"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"wok": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "鑊",
			"jyutping": "wok6",
			"english": "a Chinese wok"
		}
	},
	"zok": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "作文",
			"jyutping": "zok3 man2",
			"english": "composition"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "鑿穿",
			"jyutping": "zok6 cyun1",
			"english": "to pierce through"
		}
	},
	"oe": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"boe": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"coe": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"doe": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "朵",
			"jyutping": "doe2",
			"english": "measure word for flowers"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"foe": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"goe": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "鋸扒",
			"jyutping": "goe3 paa2",
			"english": "to go out for steak"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gwoe": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"hoe": {
		"1": {
			"chinese": "靴",
			"jyutping": "hoe1",
			"english": "boots"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"joe": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"koe": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwoe": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"loe": {
		"1": {
			"chinese": "loe1",
			"jyutping": "loe1",
			"english": "to spit out slowly (food)"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"moe": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"noe": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ngoe": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"poe": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"soe": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "soe4",
			"jyutping": "soe4",
			"english": "to go down a slide"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"toe": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"woe": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zoe": {
		"1": {
			"chinese": "啫啫",
			"jyutping": "zoe1 zoe1",
			"english": "a method of cooking where one uses a metal pot to cook and serve food"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"oeng": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"boeng": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"coeng": {
		"1": {
			"chinese": "槍",
			"jyutping": "coeng1",
			"english": "gun"
		},
		"2": {
			"chinese": "搶劫",
			"jyutping": "coeng2 gip6",
			"english": "robbery"
		},
		"3": {
			"chinese": "唱歌",
			"jyutping": "coeng3 go1",
			"english": "to sing"
		},
		"4": {
			"chinese": "長頸鹿",
			"jyutping": "coeng4 geng2 luk2",
			"english": "giraffe"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"doeng": {
		"1": {
			"chinese": "啄",
			"jyutping": "doeng1",
			"english": "to peck"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"foeng": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"goeng": {
		"1": {
			"chinese": "殭屍",
			"jyutping": "goeng1 si1",
			"english": "zombie"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gwoeng": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"hoeng": {
		"1": {
			"chinese": "香港",
			"jyutping": "hoeng1 gong2",
			"english": "Hong Kong"
		},
		"2": {
			"chinese": "享受",
			"jyutping": "hoeng2 sau6",
			"english": "to enjoy"
		},
		"3": {
			"chinese": "方向",
			"jyutping": "fong1 hoeng3",
			"english": "direction"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"joeng": {
		"1": {
			"chinese": "鴛鴦",
			"jyutping": "jin1 joeng1",
			"english": "coffee + tea"
		},
		"2": {
			"chinese": "樣",
			"jyutping": "joeng2",
			"english": "face; appearance"

		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "陽光",
			"jyutping": "joeng4 gwong1",
			"english": "sunlight"
		},
		"5": {
			"chinese": "養魚",
			"jyutping": "joeng5 jyu2",
			"english": "to raise fish"
		},
		"6": {
			"chinese": "一樣嘢",
			"jyutping": "jat1 joeng6 je5",
			"english": "one thing"
		}
	},
	"koeng": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "有根蔃",
			"jyutping": "jau5 gan1 koeng2",
			"english": "to have support"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "小強",
			"jyutping": "siu2 koeng4",
			"english": "cockroach"
		},
		"5": {
			"chinese": "強迫",
			"jyutping": "koeng5 bik1",
			"english": "to coerce"
		},
		"6": {
			"chinese": ""
		}
	},
	"kwoeng": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"loeng": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "銀兩",
			"jyutping": "ngan4 loeng2",
			"english": "money"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "橋樑",
			"jyutping": "kiu4 loeng4",
			"english": "a bridge (between people, nations, etc.)"
		},
		"5": {
			"chinese": "兩",
			"jyutping": "loeng5",
			"english": "two (when counting things)"
		},
		"6": {
			"chinese": "力量",
			"jyutping": "lik6 loeng6",
			"english": "power"
		}
	},
	"moeng": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"noeng": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "新娘",
			"jyutping": "san1 noeng2",
			"english": "bride"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "娘娘",
			"jyutping": "noeng4 noeng4",
			"english": "the title used to defer to females in positions of power up to the queen higher than oneself"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ngoeng": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"poeng": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"soeng": {
		"1": {
			"chinese": "受傷",
			"jyutping": "sau6 soeng1",
			"english": "to get hurt"
		},
		"2": {
			"chinese": "夢想",
			"jyutping": "mong6 soeng2",
			"english": "dream"
		},
		"3": {
			"chinese": "面相",
			"jyutping": "ming6 soeng3",
			"english": "countenance (in astrology contexts)"
		},
		"4": {
			"chinese": "經常",
			"jyutping": "ging1 soeng4",
			"english": "often"
		},
		"5": {
			"chinese": "上去",
			"jyutping": "soeng5 heoi3",
			"english": "to go up (the stairs, a floor, etc.)"
		},
		"6": {
			"chinese": "上進心",
			"jyutping": "soeng6 zeon3 sam1",
			"english": "ambition + motivation; drive"
		}
	},
	"toeng": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"woeng": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zoeng": {
		"1": {
			"chinese": "將來",
			"jyutping": "zoeng1 loi4",
			"english": "the future"
		},
		"2": {
			"chinese": "獎勵",
			"jyutping": "zoeng2 lai6",
			"english": "reward"
		},
		"3": {
			"chinese": "打仗",
			"jyutping": "daa2 zoeng3",
			"english": "to wage war"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "景象",
			"jyutping": "ging2 zoeng6",
			"english": "scenery"
		}
	},
	"oek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"boek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"coek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "餐桌",
			"jyutping": "caan1 coek3",
			"english": "dining table"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"doek": {
		"1": {
			"chinese": "剁碎",
			"jyutping": "doek1 seoi3",
			"english": "to chop into bits (usually when preparing meats for culinary purposes)"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "剁豬肉",
			"jyutping": "doek3 zyu1 juk6",
			"english": "to chop pork up until tender"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"foek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"goek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "噱噱聲",
			"jyutping": "goek4 goek2 seng1",
			"english": "to be in deep sleep (onomatopoeia)"
		},
		"3": {
			"chinese": "腳趾",
			"jyutping": "goek3 zi2",
			"english": "toe"
		},
		"4": {
			"chinese": "噱噱聲",
			"jyutping": "goek4 goek2 seng1",
			"english": "to be in deep sleep (onomatopoeia)"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gwoek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"hoek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"joek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "中藥",
			"jyutping": "zung1 joek6",
			"english": "Chinese medicine"
		}
	},
	"koek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "冷卻",
			"jyutping": "laang5 koek3",
			"english": "to cool down (as in to cool down foods, air, the market, etc.)"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwoek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"loek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "概略",
			"jyutping": "koi3 loek6",
			"english": "summary"
		}
	},
	"moek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"noek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ngoek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"poek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"soek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "削減",
			"jyutping": "soek3 gaam2",
			"english": "to reduce"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"toek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"woek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zoek": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "孔雀",
			"jyutping": "hong2 zoek2",
			"english": "peacock"
		},
		"3": {
			"chinese": "着衫",
			"jyutping": "zoek3 saam1",
			"english": "to put on (clothes)"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "着火",
			"jyutping": "zoek6 fo2",
			"english": "to be on fire"
		}
	},
	"eoi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"beoi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ceoi": {
		"1": {
			"chinese": "吹水",
			"jyutping": "ceoi1 seoi2",
			"english": "to talk bullshit"
		},
		"2": {
			"chinese": "博取",
			"jyutping": "bok3 ceoi2",
			"english": "to win over (like to win over others' empathy)"
		},
		"3": {
			"chinese": "脆卜卜",
			"jyutping": "ceoi3 bok1 bok1",
			"english": "crispy"
		},
		"4": {
			"chinese": "加減乘除",
			"jyutping": "gaa1 gaam2 sing4 ceoi4",
			"english": "addition, subtraction, multiplication, division"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"deoi": {
		"1": {
			"chinese": "堆填",
			"jyutping": "deoi1 tin4",
			"english": "landfill"
		},
		"2": {
			"chinese": "排隊",
			"jyutping": "paai4 deoi2",
			"english": "to line up"
		},
		"3": {
			"chinese": "對面",
			"jyutping": "deoi3 min6",
			"english": "opposite side"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "隊伍",
			"jyutping": "deoi6 m5",
			"english": "squad"
		}
	},
	"feoi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"geoi": {
		"1": {
			"chinese": "居住",
			"jyutping": "geoi1 zyu6",
			"english": "to reside in (a country or a city)"
		},
		"2": {
			"chinese": "舉重",
			"jyutping": "geoi2 cung5",
			"english": "to lift (weights)"
		},
		"3": {
			"chinese": "證據",
			"jyutping": "zing3 geoi3",
			"english": "evidence, proof"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "巨人",
			"jyutping": "geoi6 jan4",
			"english": "a giant"
		}
	},
	"gweoi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"heoi": {
		"1": {
			"chinese": "虛弱",
			"jyutping": "heoi1 joek6",
			"english": "in poor health; weak"
		},
		"2": {
			"chinese": "准許",
			"jyutping": "zeon2 heoi2",
			"english": "a permit"
		},
		"3": {
			"chinese": "返去",
			"jyutping": "faan1 heoi3",
			"english": "to go back"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"jeoi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "尖銳",
			"jyutping": "zim1 jeoi6",
			"english": "pointed; sharp;"
		}
	},
	"keoi": {
		"1": {
			"chinese": "區域",
			"jyutping": "keoi1 wik6",
			"english": "region"
		},
		"2": {
			"chinese": "蠄蟝",
			"jyutping": "kam4 keoi2",
			"english": "toad"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "坑渠",
			"jyutping": "haang1 keoi4",
			"english": "drain (in the streets)"
		},
		"5": {
			"chinese": "佢",
			"jyutping": "keoi5",
			"english": "he / she / it"
		},
		"6": {
			"chinese": ""
		}
	},
	"kweoi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"leoi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "雷電",
			"jyutping": "leoi4 din6",
			"english": "lightning"
		},
		"5": {
			"chinese": "屢次",
			"jyutping": "leoi5 ci3",
			"english": "many times"
		},
		"6": {
			"chinese": "眼淚",
			"jyutping": "ngaan5 leoi6",
			"english": "tears"
		}
	},
	"meoi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"neoi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "衰女",
			"jyutping": "seoi1 neoi2",
			"english": "bad girl (parent to daughter)"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": "女人",
			"jyutping": "neoi5 jan2",
			"english": "woman"
		},
		"6": {
			"chinese": ""
		}
	},
	"ngeoi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"peoi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"seoi": {
		"1": {
			"chinese": "衰人",
			"jyutping": "seoi1 jan4",
			"english": "a bad person"
		},
		"2": {
			"chinese": "糖水",
			"jyutping": "tong4 seoi2",
			"english": "Chinese dessert"
		},
		"3": {
			"chinese": "歲",
			"jyutping": "seoi3",
			"english": "years old"
		},
		"4": {
			"chinese": "下垂",
			"jyutping": "haa6 seoi4",
			"english": "to sag"
		},
		"5": {
			"chinese": "情緒",
			"jyutping": "cing4 seoi5",
			"english": "emotions"
		},
		"6": {
			"chinese": "睡眠",
			"jyutping": "seoi6 min4",
			"english": "sleep"
		}
	},
	"teoi": {
		"1": {
			"chinese": "推卸",
			"jyutping": "teoi1 se3",
			"english": "to shirk (responsibility)"
		},
		"2": {
			"chinese": "大腿",
			"jyutping": "daai6 teoi2",
			"english": "thigh"
		},
		"3": {
			"chinese": "退貨",
			"jyutping": "teoi3 fo3",
			"english": "return merchandise"
		},
		"4": {
			"chinese": "頹廢",
			"jyutping": "teoi4 fai3",
			"english": "good-for-nothing"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"weoi": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zeoi": {
		"1": {
			"chinese": "錐形",
			"jyutping": "zeoi1 jing4",
			"english": "cone"
		},
		"2": {
			"chinese": "多嘴",
			"jyutping": "do1 zeoi2",
			"english": "someone who speaks out of turn"
		},
		"3": {
			"chinese": "最多",
			"jyutping": "zeoi3 do1",
			"english": "the most"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "順序",
			"jyutping": "seon6 zeoi6",
			"english": "sequence; order"
		}
	},
	"eon": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"beon": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ceon": {
		"1": {
			"chinese": "春天",
			"jyutping": "ceon1 tin1",
			"english": "spring"
		},
		"2": {
			"chinese": "蠢材",
			"jyutping": "ceon2 coi4",
			"english": "fool"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "循環",
			"jyutping": "ceon4 waan4",
			"english": "loop; cycle"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"deon": {
		"1": {
			"chinese": "倫敦",
			"jyutping": "leon4 deon1",
			"english": "London"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "鈍",
			"jyutping": "deon6",
			"english": "blunt"
		}
	},
	"feon": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"geon": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gweon": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"heon": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"jeon": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "豬潤",
			"jyutping": "zyu1 jeon2",
			"english": "pig liver"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "滋潤",
			"jyutping": "zi1 jeon6",
			"english": "moisten"
		}
	},
	"keon": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kweon": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"leon": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "一輪嘴",
			"jyutping": "jat1 leon2 zeoi2",
			"english": "to talk very quickly without stopping"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "人倫",
			"jyutping": "jan4 leon4",
			"english": "human relations (according to feudal ethics)"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "理論",
			"jyutping": "lei5 leon6",
			"english": "theory"
		}
	},
	"meon": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"neon": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ngeon": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"peon": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"seon": {
		"1": {
			"chinese": "詢問",
			"jyutping": "seon1 man6",
			"english": "to enquire"
		},
		"2": {
			"chinese": "甘筍",
			"jyutping": "gam1 seon2",
			"english": "carrot"
		},
		"3": {
			"chinese": "寫信",
			"jyutping": "se2 seon3",
			"english": "to write letters"
		},
		"4": {
			"chinese": "純真",
			"jyutping": "seon4 zan1",
			"english": "pure and innocent"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "順利",
			"jyutping": "seon6 lei6",
			"english": "smoothly"
		}
	},
	"teon": {
		"1": {
			"chinese": "湍流",
			"jyutping": "teon1 lau4",
			"english": "turbulence"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": "矛盾",
			"jyutping": "maau4 teon5",
			"english": "contradiction"
		},
		"6": {
			"chinese": ""
		}
	},
	"weon": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zeon": {
		"1": {
			"chinese": "樽",
			"jyutping": "zeon1",
			"english": "bottle"
		},
		"2": {
			"chinese": "水準",
			"jyutping": "seoi2 zeon2",
			"english": "level"
		},
		"3": {
			"chinese": "進步",
			"jyutping": "zeon3 bou6",
			"english": "improvement"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "盡頭",
			"jyutping": "zeon6 tau4",
			"english": "dead end"
		}
	},
	"eot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"beot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ceot": {
		"1": {
			"chinese": "出街",
			"jyutping": "ceot1 gaai1",
			"english": "to go outside"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"deot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"feot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"geot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gweot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"heot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"jeot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"keot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kweot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"leot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "賠率",
			"jyutping": "pui4 leot2",
			"english": "odds (in gambling)"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "律師",
			"jyutping": "leot6 si1",
			"english": "lawyer"
		}
	},
	"meot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"neot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ngeot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"peot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"seot": {
		"1": {
			"chinese": "蟋蟀",
			"jyutping": "sik1 seot1",
			"english": "cricket (as in the insect)"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "戰術",
			"jyutping": "zin3 seot6",
			"english": "battle tactics"
		}
	},
	"teot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"weot": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zeot": {
		"1": {
			"chinese": "卒",
			"jyutping": "zeot1",
			"english": "the pawn in Chinese chess"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"u": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"bu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"cu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"du": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"fu": {
		"1": {
			"chinese": "皮膚",
			"jyutping": "pei4 fu1",
			"english": "skin"
		},
		"2": {
			"chinese": "苦心",
			"jyutping": "fu2 sam1",
			"english": "painstaking effort"
		},
		"3": {
			"chinese": "地庫",
			"jyutping": "dei6 fu3",
			"english": "basement"
		},
		"4": {
			"chinese": "扶手電梯",
			"jyutping": "fu4 sau2 din6 tai1",
			"english": "escalator"
		},
		"5": {
			"chinese": "婦女",
			"jyutping": "fu5 neoi5",
			"english": "woman (respectful term)"
		},
		"6": {
			"chinese": "豆腐",
			"jyutping": "dau6 fu6",
			"english": "tofu"
		}
	},
	"gu": {
		"1": {
			"chinese": "姑媽",
			"jyutping": "gu1 maa1",
			"english": "aunt"
		},
		"2": {
			"chinese": "估計",
			"jyutping": "gu2 gai3",
			"english": "to estimate"
		},
		"3": {
			"chinese": "照顧",
			"jyutping": "ziu3 gu3",
			"english": "to take care of"
		},
		"4": {
			"chinese": "咕咕聲",
			"jyutping": "gu4 gu2 seng1",
			"english": "the stomach rumbling (in hunger)"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gwu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"hu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ju": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ku": {
		"1": {
			"chinese": "箍牙",
			"jyutping": "ku1 ngaa4",
			"english": "to put on braces"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"lu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"mu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"nu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ngu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"pu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"su": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"tu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"wu": {
		"1": {
			"chinese": "污染",
			"jyutping": "wu1 jim5",
			"english": "pollution"
		},
		"2": {
			"chinese": "食糊",
			"jyutping": "sik6 wu2",
			"english": "a particular configuration in mahjong"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "湖水",
			"jyutping": "wu4 seoi2",
			"english": "lake water"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "護士",
			"jyutping": "wu6 si6",
			"english": "nurse"
		}
	},
	"zu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ui": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"bui": {
		"1": {
			"chinese": "杯",
			"jyutping": "bui1",
			"english": "cup"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "背脊",
			"jyutping": "bui3 zek3",
			"english": "back (as in the anatomy part)"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "背書",
			"jyutping": "bui6 syu1",
			"english": "to recite content from textbooks"
		}
	},
	"cui": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"dui": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"fui": {
		"1": {
			"chinese": "灰色",
			"jyutping": "fui1 sik1",
			"english": "gray"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "後悔",
			"jyutping": "hau6 fui3",
			"english": "to regret doing something"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gui": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "攰",
			"jyutping": "gui6",
			"english": "tired"
		}
	},
	"gwui": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"hui": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"jui": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kui": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "賄賂",
			"jyutping": "kui2 lou6",
			"english": "bribery"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwui": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"lui": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"mui": {
		"1": {
			"chinese": "鬼妹",
			"jyutping": "gwai2 mui1",
			"english": "a Caucasian girl"
		},
		"2": {
			"chinese": "草莓",
			"jyutping": "cou2 mui2",
			"english": "strawberry"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "發霉",
			"jyutping": "faat3 mui4",
			"english": "to be mouldy"
		},
		"5": {
			"chinese": "每日",
			"jyutping": "mui5 jat6",
			"english": "everyday"
		},
		"6": {
			"chinese": "妹夫",
			"jyutping": "mui6 fu1",
			"english": "younger sister's husband"
		}
	},
	"nui": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ngui": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"pui": {
		"1": {
			"chinese": "胚芽",
			"jyutping": "pui1 ngaa4",
			"english": "bud, sprout"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "配菜",
			"jyutping": "pui3 coi3",
			"english": "side dishes"
		},
		"4": {
			"chinese": "賠償",
			"jyutping": "pui4 soeng4",
			"english": "compensation"
		},
		"5": {
			"chinese": "十倍",
			"jyutping": "sap6 pui5",
			"english": "ten times"
		},
		"6": {
			"chinese": ""
		}
	},
	"sui": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"tui": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"wui": {
		"1": {
			"chinese": "煨",
			"jyutping": "wui1",
			"english": "to simmer"
		},
		"2": {
			"chinese": "開會",
			"jyutping": "hoi1 wui2",
			"english": "to have a meeting"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "回歸",
			"jyutping": "wui4 gwai1",
			"english": "handover (of a colony)"
		},
		"5": {
			"chinese": "會",
			"jyutping": "wui5",
			"english": "will"
		},
		"6": {
			"chinese": "約會",
			"jyutping": "joek3 wui6",
			"english": "date (as in a romantic date)"
		}
	},
	"zui": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"un": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"bun": {
		"1": {
			"chinese": "搬屋",
			"jyutping": "bun1 uk1",
			"english": "to move (as in move from one house to another)"
		},
		"2": {
			"chinese": "本事",
			"jyutping": "bun2 si6",
			"english": "capability"
		},
		"3": {
			"chinese": "一半",
			"jyutping": "jat1 bun3",
			"english": "half"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "伴侶",
			"jyutping": "bun6 leoi5",
			"english": "partner (as in a romantic partner)"
		}
	},
	"cun": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"dun": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"fun": {
		"1": {
			"chinese": "歡樂",
			"jyutping": "fun1 lok6",
			"english": "pleasure; gaiety"
		},
		"2": {
			"chinese": "款式",
			"jyutping": "fun2 sik1",
			"english": "different styles of a product"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gun": {
		"1": {
			"chinese": "官員",
			"jyutping": "gun1 jyun4",
			"english": "government officials"
		},
		"2": {
			"chinese": "管理",
			"jyutping": "gun2 lei5",
			"english": "to manage"
		},
		"3": {
			"chinese": "冠軍",
			"jyutping": "gun3 gwan1",
			"english": "first place"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gwun": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"hun": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"jun": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kun": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwun": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"lun": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"mun": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "熱門",
			"jyutping": "jit6 mun2",
			"english": "popular (goods, sport, search, etc.)"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "門口",
			"jyutping": "mun4 hau2",
			"english": "entrance; doorway"
		},
		"5": {
			"chinese": "滿晒",
			"jyutping": "mun5 saai3",
			"english": "full (as in a course, a container is full)"
		},
		"6": {
			"chinese": "悶",
			"jyutping": "mun6",
			"english": "bored; boring"
		}
	},
	"nun": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ngun": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"pun": {
		"1": {
			"chinese": "番禺",
			"jyutping": "pun1 jyu4",
			"english": "Panyu, a place in China"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "判斷",
			"jyutping": "pun3 dyun6",
			"english": "to judge"
		},
		"4": {
			"chinese": "西營盤",
			"jyutping": "sai1 jing4 pun4",
			"english": "Sai Ying Pun (MTR station)"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"sun": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"tun": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"wun": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "碗筷",
			"jyutping": "wun2 faai3",
			"english": "bowl and chopsticks"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "緩慢",
			"jyutping": "wun4 maan6",
			"english": "slow"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "換貨",
			"jyutping": "wun6 fo3",
			"english": "to exchange a good for another"
		}
	},
	"zun": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ung": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"bung": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "埲",
			"jyutping": "bung6",
			"english": "measure word for a wall"
		}
	},
	"cung": {
		"1": {
			"chinese": "充氣",
			"jyutping": "cung1 hei3",
			"english": "to fill up with air"
		},
		"2": {
			"chinese": "寵物",
			"jyutping": "cung2 mat6",
			"english": "pet"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "昆蟲",
			"jyutping": "kwan1 cung4",
			"english": "insect"
		},
		"5": {
			"chinese": "舉重",
			"jyutping": "geoi2 cung5",
			"english": "weightlifting"
		},
		"6": {
			"chinese": ""
		}
	},
	"dung": {
		"1": {
			"chinese": "冬天",
			"jyutping": "dung1 tin1",
			"english": "winter"
		},
		"2": {
			"chinese": "懵懂",
			"jyutping": "mung2 dung2",
			"english": "muddled; confused"
		},
		"3": {
			"chinese": "凍檸茶",
			"jyutping": "dung3 ning2 caa4",
			"english": "lemon tea"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "運動",
			"jyutping": "wan6 dung6",
			"english": "exercise"
		}
	},
	"fung": {
		"1": {
			"chinese": "大風",
			"jyutping": "daai6 fung1",
			"english": "windy"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "牙縫",
			"jyutping": "ngaa4 fung4",
			"english": "gap between two teeth"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "鳳凰",
			"jyutping": "fung6 wong4",
			"english": "phoenix"
		}
	},
	"gung": {
		"1": {
			"chinese": "公園",
			"jyutping": "gung1 jyun2",
			"english": "park"
		},
		"2": {
			"chinese": "鞏固",
			"jyutping": "gung2 gu3",
			"english": "to consolidate"
		},
		"3": {
			"chinese": "西貢",
			"jyutping": "sai1 gung3",
			"english": "Sai Kung (a place in Hong Kong)"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "一共",
			"jyutping": "jat1 gung6",
			"english": "in total; in all; altogether"
		}
	},
	"gwung": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"hung": {
		"1": {
			"chinese": "空氣",
			"jyutping": "hung1 hei3",
			"english": "air"
		},
		"2": {
			"chinese": "鼻孔",
			"jyutping": "bei6 hung2",
			"english": "nostril"
		},
		"3": {
			"chinese": "控制",
			"jyutping": "hung3 zai3",
			"english": "to control"
		},
		"4": {
			"chinese": "紅色",
			"jyutping": "hung4 sik1",
			"english": "red"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"jung": {
		"1": {
			"chinese": "富翁",
			"jyutping": "fu3 jung1",
			"english": "a wealthy person"
		},
		"2": {
			"chinese": "兵馬俑",
			"jyutping": "bing1 maa5 jung2",
			"english": "terracotta army"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": "勇氣",
			"jyutping": "jung5 hei3",
			"english": "courage"
		},
		"6": {
			"chinese": "有用",
			"jyutping": "jau5 jung6",
			"english": "useful"
		}
	},
	"kung": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "貧窮",
			"jyutping": "pan4 kung4",
			"english": "poor, impoverished"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwung": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"lung": {
		"1": {
			"chinese": "窿",
			"jyutping": "lung1",
			"english": "a hole"
		},
		"2": {
			"chinese": "籠統",
			"jyutping": "lung2 tung2",
			"english": "general; broad"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "恐龍",
			"jyutping": "hung2 lung4",
			"english": "dinosaur"
		},
		"5": {
			"chinese": "壟斷",
			"jyutping": "lung5 dyun6",
			"english": "to monopolize"
		},
		"6": {
			"chinese": "弄",
			"jyutping": "lung6",
			"english": "to make"
		}
	},
	"mung": {
		"1": {
			"chinese": "檸檬",
			"jyutping": "ling4 mung1",
			"english": "lemon"
		},
		"2": {
			"chinese": "懵盛盛",
			"jyutping": "mung2 sing6 sing6",
			"english": "muddled; to do something while not using one's brain"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "蒙古",
			"jyutping": "mung4 gu2",
			"english": "Mongolia"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "發夢",
			"jyutping": "faat3 mung6",
			"english": "to dream"
		}
	},
	"nung": {
		"1": {
			"chinese": "燶起塊面",
			"jyutping": "nung1 hei2 faai3 min6",
			"english": "to screw one's face up"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "農夫",
			"jyutping": "nung4 fu1",
			"english": "farmer"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ngung": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "搈",
			"jyutping": "ngung2",
			"english": "to push (someone physically)"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"pung": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "捧場",
			"jyutping": "pung2 coeng4",
			"english": "to show up in support of someone (during the opening of a new business, a concert, etc.)"
		},
		"3": {
			"chinese": "碰撞",
			"jyutping": "pung3 zong6",
			"english": "to hit against"
		},
		"4": {
			"chinese": "蓬鬆",
			"jyutping": "pung4 sung1",
			"english": "loose and unkempt (usually hair or fur)"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"sung": {
		"1": {
			"chinese": "肉鬆",
			"jyutping": "juk6 sung1",
			"english": "meat floss"
		},
		"2": {
			"chinese": "危言聳聽",
			"jyutping": "ngai4 jin4 sung2 ting3",
			"english": "exaggerate sth. to frighten people"
		},
		"3": {
			"chinese": "餸菜",
			"jyutping": "sung3 coi3",
			"english": "dishes (as in dishes of a meal)"
		},
		"4": {
			"chinese": "崇拜",
			"jyutping": "sung4 baai3",
			"english": "to worship"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"tung": {
		"1": {
			"chinese": "普通話",
			"jyutping": "pou2 tung1 waa2",
			"english": "Mandarin"
		},
		"2": {
			"chinese": "垃圾桶",
			"jyutping": "laap6 saap3 tung2",
			"english": "rubbish bin"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "兒童",
			"jyutping": "ji4 tung4",
			"english": "child"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"wung": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zung": {
		"1": {
			"chinese": "中文",
			"jyutping": "zung1 man2",
			"english": "the Chinese language"
		},
		"2": {
			"chinese": "水腫",
			"jyutping": "seoi2 zung2",
			"english": "swelling"
		},
		"3": {
			"chinese": "縱壞",
			"jyutping": "zung3 waai6",
			"english": "to pamper; to spoil"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "重要",
			"jyutping": "zung6 jiu3",
			"english": "important"
		}
	},
	"ut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"but": {
		"1": {
			"chinese": "砵蘭街",
			"jyutping": "but1 laan4 gaai1",
			"english": "Portland Street (in Hong Kong)"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "缽仔糕",
			"jyutping": "but6 zai2 gou1",
			"english": "a type of Chinese dessert"
		}
	},
	"cut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"dut": {
		"1": {
			"chinese": "嘟一聲",
			"jyutping": "dut1 jat1 seng1",
			"english": "the sound makes when an Octopus card (a transport card) presses against the card reader"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"fut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gwut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"hut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"jut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "包括",
			"jyutping": "baau1 kut3",
			"english": "to include"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"lut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"mut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "出沒",
			"jyutping": "ceot1 mut6",
			"english": "to haunt (to appear and disappear)"
		}
	},
	"nut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ngut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"put": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "潑水",
			"jyutping": "put3 seoi2",
			"english": "to splash water"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"sut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"tut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"wut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "活動",
			"jyutping": "wut6 dung6",
			"english": "activity"
		}
	},
	"zut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"uk": {
		"1": {
			"chinese": "屋企",
			"jyutping": "uk1 kei2",
			"english": "home"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"buk": {
		"1": {
			"chinese": "卜位",
			"jyutping": "buk1 wai2",
			"english": "to make a reservation"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "伏低",
			"jyutping": "buk6 dai1",
			"english": "to lay low"
		}
	},
	"cuk": {
		"1": {
			"chinese": "速度",
			"jyutping": "cuk1 dou6",
			"english": "speed"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"duk": {
		"1": {
			"chinese": "督促",
			"jyutping": "duk1 cuk1",
			"english": "to supervise"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "讀書",
			"jyutping": "duk6 syu1",
			"english": "to study"
		}
	},
	"fuk": {
		"1": {
			"chinese": "福氣",
			"jyutping": "fuk1 hei3",
			"english": "good fortune"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "復活",
			"jyutping": "fuk6 wut6",
			"english": "resurrection"
		}
	},
	"guk": {
		"1": {
			"chinese": "菊花",
			"jyutping": "guk1 faa1",
			"english": "chrysanthemum"
		},
		"2": {
			"chinese": "立法局",
			"jyutping": "laap6 faat3 guk2",
			"english": "Legislative Council"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "焗飯",
			"jyutping": "guk6 faan6",
			"english": "baked rice"
		}
	},
	"gwuk": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"huk": {
		"1": {
			"chinese": "哭泣",
			"jyutping": "huk1 jap1",
			"english": "to weep; to sob"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "鵠望",
			"jyutping": "huk6 mong6",
			"english": "to eagerly look forward to"
		}
	},
	"juk": {
		"1": {
			"chinese": "郁",
			"jyutping": "juk1",
			"english": "to move (as in a physical movement like walking)"
		},
		"2": {
			"chinese": "床褥",
			"jyutping": "cong4 juk2",
			"english": "mattress"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "雞肉",
			"jyutping": "gai1 juk6",
			"english": "chicken meat"
		}
	},
	"kuk": {
		"1": {
			"chinese": "歌曲",
			"jyutping": "go1 kuk1",
			"english": "song track"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwuk": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"luk": {
		"1": {
			"chinese": "轆",
			"jyutping": "luk1",
			"english": "car tire"
		},
		"2": {
			"chinese": "鹿",
			"jyutping": "luk2",
			"english": "deer"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "綠色",
			"jyutping": "luk6 sik1",
			"english": "green"
		}
	},
	"muk": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "木頭",
			"jyutping": "muk6 tau4",
			"english": "log of wood"
		}
	},
	"nuk": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"nguk": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"puk": {
		"1": {
			"chinese": "仆嚫",
			"jyutping": "puk1 can1",
			"english": "to stumble (physically)"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"suk": {
		"1": {
			"chinese": "叔叔",
			"jyutping": "suk1 suk1",
			"english": "uncle; middle aged man (child to adult)"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "成熟",
			"jyutping": "sing4 suk6",
			"english": "mature"
		}
	},
	"tuk": {
		"1": {
			"chinese": "禿鷹",
			"jyutping": "tuk1 jing1",
			"english": "bald eagle"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"wuk": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zuk": {
		"1": {
			"chinese": "粥",
			"jyutping": "zuk1",
			"english": "congee"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "民族",
			"jyutping": "man4 zuk6",
			"english": "ethnic group"
		}
	},
	"yu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"byu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"cyu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "大廚",
			"jyutping": "daai6 cyu2",
			"english": "head chef"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "廚師",
			"jyutping": "cyu4 si1",
			"english": "chef"
		},
		"5": {
			"chinese": "警署",
			"jyutping": "ging2 cyu5",
			"english": "police station"
		},
		"6": {
			"chinese": ""
		}
	},
	"dyu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"fyu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gyu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gwyu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"hyu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"jyu": {
		"1": {
			"chinese": "於是",
			"jyutping": "jyu1 si6",
			"english": "therefore"
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "如果",
			"jyutping": "jyu4 gwo2",
			"english": "if"
		},
		"5": {
			"chinese": "雨水",
			"jyutping": "jyu5 seoi2",
			"english": "rainwater"
		},
		"6": {
			"chinese": "遇到",
			"jyutping": "jyu6 dou3",
			"english": "to encounter"
		}
	},
	"kyu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwyu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"lyu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"myu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"nyu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ngyu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"pyu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"syu": {
		"1": {
			"chinese": "讀書",
			"jyutping": "duk6 syu1",
			"english": "to study"
		},
		"2": {
			"chinese": "老鼠",
			"jyutping": "lou5 syu2",
			"english": "mouse"
		},
		"3": {
			"chinese": "恕我直言",
			"jyutping": "syu3 ngo5 zik6 jin4",
			"english": "excuse me for being blunt"
		},
		"4": {
			"chinese": "薯仔",
			"jyutping": "syu4 zai2",
			"english": "potato"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "樹木",
			"jyutping": "syu6 muk6",
			"english": "tree"
		}
	},
	"tyu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"wyu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zyu": {
		"1": {
			"chinese": "豬肉",
			"jyutping": "zyu1 juk6",
			"english": "pork"
		},
		"2": {
			"chinese": "煮飯",
			"jyutping": "zyu2 faan6",
			"english": "to cook"
		},
		"3": {
			"chinese": "注意",
			"jyutping": "zyu3 ji3",
			"english": "take note; pay attention"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "住",
			"jyutping": "zyu6",
			"english": "to live in"
		}
	},
	"yun": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"byun": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"cyun": {
		"1": {
			"chinese": "四川",
			"jyutping": "sei3 cyun1",
			"english": "Sichuan"
		},
		"2": {
			"chinese": "喘氣",
			"jyutping": "cyun2 hei3",
			"english": "to pant"
		},
		"3": {
			"chinese": "一串",
			"jyutping": "jat1 cyun3",
			"english": "a skewer of (e.g. fishballs)"
		},
		"4": {
			"chinese": "存在",
			"jyutping": "cyun4 zoi6",
			"english": "existence"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"dyun": {
		"1": {
			"chinese": "端午節",
			"jyutping": "dyun1 m5 zit3",
			"english": "Dragon Boat Festival"
		},
		"2": {
			"chinese": "短處",
			"jyutping": "dyun2 cyu5",
			"english": "shortcoming"
		},
		"3": {
			"chinese": "斷估",
			"jyutping": "dyun3 gu2",
			"english": "make a wild guess"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "一段",
			"jyutping": "jat1 dyun6",
			"english": "a section of (a poem, an article)"
		}
	},
	"fyun": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gyun": {
		"1": {
			"chinese": "捐錢",
			"jyutping": "gyun1 cin2",
			"english": "donate money"
		},
		"2": {
			"chinese": "卷",
			"jyutping": "gyun2",
			"english": "roll"
		},
		"3": {
			"chinese": "絹花",
			"jyutping": "gyun3 faa1",
			"english": "silk flower"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "厭倦",
			"jyutping": "jim3 gyun6",
			"english": "to tired of"
		}
	},
	"gwyun": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"hyun": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "犬",
			"jyutping": "hyun2",
			"english": "dog"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"jyun": {
		"1": {
			"chinese": "冤枉",
			"jyutping": "jyun1 wong2",
			"english": "to accuse wrongly"
		},
		"2": {
			"chinese": "屋苑",
			"jyutping": "uk1 jyun2",
			"english": "housing complex"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "完成",
			"jyutping": "jyun4 sing4",
			"english": "to finish"
		},
		"5": {
			"chinese": "腳軟",
			"jyutping": "goek3 jyun5",
			"english": "can hardly stand up or walk"
		},
		"6": {
			"chinese": "願望",
			"jyutping": "jyun6 mong6",
			"english": "wish"
		}
	},
	"kyun": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "拳頭",
			"jyutping": "kyun4 tau4",
			"english": "fist"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwyun": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"lyun": {
		"1": {
			"chinese": "攣毛",
			"jyutping": "lyun1 mou1",
			"english": "curly hair"
		},
		"2": {
			"chinese": "戀愛",
			"jyutping": "lyun2 oi3",
			"english": "(romantic) love; in love; to have an affair"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "聯絡",
			"jyutping": "lyun4 lok3",
			"english": "to contact"
		},
		"5": {
			"chinese": "暖爐",
			"jyutping": "lyun5 lou4",
			"english": "an electric radiator"
		},
		"6": {
			"chinese": "混亂",
			"jyutping": "wan6 lyun6",
			"english": "chaos; befuddled"
		}
	},
	"myun": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"nyun": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "鮮嫩",
			"jyutping": "sin1 nyun6",
			"english": "fresh and tender (as in meat)"
		}
	},
	"ngyun": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"pyun": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"syun": {
		"1": {
			"chinese": "酸味",
			"jyutping": "syun1 mei6",
			"english": "sour taste"
		},
		"2": {
			"chinese": "損害",
			"jyutping": "syun2 hoi6",
			"english": "to harm"
		},
		"3": {
			"chinese": "預算",
			"jyutping": "jyu6 syun3",
			"english": "budget"
		},
		"4": {
			"chinese": "船",
			"jyutping": "syun4",
			"english": "boat"
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"tyun": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": "團聚",
			"jyutping": "tyun4 zeoi6",
			"english": "reunification"
		},
		"5": {
			"chinese": "剪斷",
			"jyutping": "zin2 tyun5",
			"english": "to cut something off (physically with something like a pair of scissors)"
		},
		"6": {
			"chinese": ""
		}
	},
	"wyun": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zyun": {
		"1": {
			"chinese": "專家",
			"jyutping": "zyun1 gaa1",
			"english": "expert"
		},
		"2": {
			"chinese": "婉轉",
			"jyutping": "jyun2 zyun2",
			"english": "indirect"
		},
		"3": {
			"chinese": "鑽石",
			"jyutping": "zyun3 sek6",
			"english": "diamond"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"yut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"byut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"cyut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "撮要",
			"jyutping": "cyut3 jiu3",
			"english": "summary"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"dyut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "奪目",
			"jyutping": "dyut6 muk6",
			"english": "eye catching"
		}
	},
	"fyut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"gyut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "一橛",
			"jyutping": "jat1 gyut6",
			"english": "a small section of something (song, food, etc.)"
		}
	},
	"gwyut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"hyut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "血",
			"jyutping": "hyut3",
			"english": "blood"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"jyut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "月亮",
			"jyutping": "jyut6 loeng6",
			"english": "moon"
		}
	},
	"kyut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "秘訣",
			"jyutping": "bei3 kyut3",
			"english": "the secret to doing something"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"kwyut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"lyut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "惡劣",
			"jyutping": "ok3 lyut6",
			"english": "bad (e.g. quality)"
		}
	},
	"myut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"nyut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"ngyut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"pyut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"syut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "雪糕",
			"jyutping": "syut3 gou1",
			"english": "ice cream"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"tyut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"wyut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
	"zyut": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": "啜",
			"jyutping": "zyut3",
			"english": "to smooch"
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "絕對",
			"jyutping": "zyut6 deoi3",
			"english": "absolute"
		}
	},
	"deu": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": ""
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": "掉",
			"jyutping": "deu6",
			"english": "to throw away"
		}
	},
	"lem": {
		"1": {
			"chinese": ""
		},
		"2": {
			"chinese": "舔",
			"jyutping": "lem2",
			"english": "to lick"
		},
		"3": {
			"chinese": ""
		},
		"4": {
			"chinese": ""
		},
		"5": {
			"chinese": ""
		},
		"6": {
			"chinese": ""
		}
	},
};

	return sampleWords;
}
