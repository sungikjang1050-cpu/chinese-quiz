


// =======================================================
// 1. 중국어 단어 데이터 저장소
// =======================================================
const quizData = [
{"hanzi":"我","pinyin":"wǒ","options":["너","나","그","우리"],"correct":1},
{"hanzi":"你","pinyin":"nǐ","options":["나","너","그녀","그들"],"correct":1},
{"hanzi":"他","pinyin":"tā","options":["그","나","우리","너희"],"correct":0},
{"hanzi":"她","pinyin":"tā","options":["그들","그녀","너","저것"],"correct":1},
{"hanzi":"它","pinyin":"tā","options":["그것","그","그녀","이것"],"correct":0},
{"hanzi":"我们","pinyin":"wǒmen","options":["너희","그들","우리","그녀들"],"correct":2},
{"hanzi":"你们","pinyin":"nǐmen","options":["우리","너희","그들","저희"],"correct":1},
{"hanzi":"他们","pinyin":"tāmen","options":["그들","우리","너희","그녀"],"correct":0},
{"hanzi":"她们","pinyin":"tāmen","options":["우리","그녀들","너희","그것들"],"correct":1},
{"hanzi":"大家","pinyin":"dàjiā","options":["자기 자신","여러분","다른 사람","친구"],"correct":1},
{"hanzi":"自己","pinyin":"zìjǐ","options":["다른 사람","우리","자기 자신","상대방"],"correct":2},
{"hanzi":"别人","pinyin":"biérén","options":["다른 사람","자기 자신","친척","친구"],"correct":0},
{"hanzi":"这","pinyin":"zhè","options":["저것","어느 것","이것","무엇"],"correct":2},
{"hanzi":"那","pinyin":"nà","options":["이것","저것","어느 것","무엇"],"correct":1},
{"hanzi":"哪","pinyin":"nǎ","options":["어느","이","저","그"],"correct":0},
{"hanzi":"这里","pinyin":"zhèlǐ","options":["저기","여기","어디","거기"],"correct":1},
{"hanzi":"那里","pinyin":"nàlǐ","options":["여기","어디","저기","이곳"],"correct":2},
{"hanzi":"哪儿","pinyin":"nǎr","options":["언제","어디","누구","얼마"],"correct":1},
{"hanzi":"谁","pinyin":"shuí","options":["누구","무엇","어디","언제"],"correct":0},
{"hanzi":"什么","pinyin":"shénme","options":["왜","누구","무엇","어떻게"],"correct":2},
{"hanzi":"怎么","pinyin":"zěnme","options":["어디","어떻게","언제","얼마나"],"correct":1},
{"hanzi":"为什么","pinyin":"wèishénme","options":["어떻게","왜","무엇","어디"],"correct":1},
{"hanzi":"多少","pinyin":"duōshao","options":["조금","많이","얼마","몇"],"correct":2},
{"hanzi":"几","pinyin":"jǐ","options":["몇","많이","어느","조금"],"correct":0},
{"hanzi":"一","pinyin":"yī","options":["둘","하나","셋","열"],"correct":1},
{"hanzi":"二","pinyin":"èr","options":["하나","셋","둘","넷"],"correct":2},
{"hanzi":"两","pinyin":"liǎng","options":["둘·두","셋","하나","여섯"],"correct":0},
{"hanzi":"三","pinyin":"sān","options":["넷","셋","둘","다섯"],"correct":1},
{"hanzi":"四","pinyin":"sì","options":["셋","다섯","넷","여섯"],"correct":2},
{"hanzi":"五","pinyin":"wǔ","options":["다섯","넷","여섯","아홉"],"correct":0},
{"hanzi":"六","pinyin":"liù","options":["일곱","여섯","다섯","여덟"],"correct":1},
{"hanzi":"七","pinyin":"qī","options":["여섯","여덟","일곱","아홉"],"correct":2},
{"hanzi":"八","pinyin":"bā","options":["여덟","일곱","아홉","열"],"correct":0},
{"hanzi":"九","pinyin":"jiǔ","options":["여덟","아홉","열","일곱"],"correct":1},
{"hanzi":"十","pinyin":"shí","options":["아홉","백","열","천"],"correct":2},
{"hanzi":"零","pinyin":"líng","options":["영·제로","하나","둘","십"],"correct":0},
{"hanzi":"百","pinyin":"bǎi","options":["십","백","천","만"],"correct":1},
{"hanzi":"千","pinyin":"qiān","options":["백","만","천","억"],"correct":2},
{"hanzi":"万","pinyin":"wàn","options":["만","천","백","십"],"correct":0},
{"hanzi":"第一","pinyin":"dì yī","options":["두 번째","첫 번째","마지막","다음"],"correct":1},
{"hanzi":"个","pinyin":"gè","options":["권","개","장","잔"],"correct":1},
{"hanzi":"岁","pinyin":"suì","options":["월","살·나이","일","시"],"correct":1},
{"hanzi":"元","pinyin":"yuán","options":["원·위안","달러","각","분"],"correct":0},
{"hanzi":"块","pinyin":"kuài","options":["시간 단위","위안 구어 단위","책 수량사","사람 수량사"],"correct":1},
{"hanzi":"毛","pinyin":"máo","options":["원","십 전","백 원","달러"],"correct":1},
{"hanzi":"分","pinyin":"fēn","options":["분·점수","시","일","월"],"correct":0},
{"hanzi":"次","pinyin":"cì","options":["장","권","번·차례","잔"],"correct":2},
{"hanzi":"本","pinyin":"běn","options":["권","개","장","명"],"correct":0},
{"hanzi":"张","pinyin":"zhāng","options":["권","잔","장","마리"],"correct":2},
{"hanzi":"口","pinyin":"kǒu","options":["식구 수량사·입","권","대","병"],"correct":0},
{"hanzi":"人","pinyin":"rén","options":["학생","친구","사람","선생님"],"correct":2},
{"hanzi":"名字","pinyin":"míngzi","options":["번호","주소","이름","성"],"correct":2},
{"hanzi":"姓","pinyin":"xìng","options":["이름","성","나이","주소"],"correct":1},
{"hanzi":"爸爸","pinyin":"bàba","options":["아빠","엄마","형","아들"],"correct":0},
{"hanzi":"妈妈","pinyin":"māma","options":["아빠","엄마","딸","누나"],"correct":1},
{"hanzi":"儿子","pinyin":"érzi","options":["딸","남편","아들","동생"],"correct":2},
{"hanzi":"女儿","pinyin":"nǚ'ér","options":["아내","딸","엄마","누나"],"correct":1},
{"hanzi":"孩子","pinyin":"háizi","options":["학생","아이","친구","가족"],"correct":1},
{"hanzi":"家人","pinyin":"jiārén","options":["가족","친구","동료","손님"],"correct":0},
{"hanzi":"哥哥","pinyin":"gēge","options":["남동생","형·오빠","누나","아빠"],"correct":1},
{"hanzi":"姐姐","pinyin":"jiějie","options":["여동생","엄마","누나·언니","딸"],"correct":2},
{"hanzi":"弟弟","pinyin":"dìdi","options":["남동생","형","아들","아빠"],"correct":0},
{"hanzi":"妹妹","pinyin":"mèimei","options":["누나","여동생","딸","엄마"],"correct":1},
{"hanzi":"妻子","pinyin":"qīzi","options":["남편","아내","딸","엄마"],"correct":1},
{"hanzi":"丈夫","pinyin":"zhàngfu","options":["남편","아내","아들","아빠"],"correct":0},
{"hanzi":"朋友","pinyin":"péngyou","options":["가족","친구","손님","아이"],"correct":1},
{"hanzi":"男朋友","pinyin":"nánpéngyou","options":["남자친구","친구","남편","동료"],"correct":0},
{"hanzi":"女朋友","pinyin":"nǚpéngyou","options":["친구","여자친구","아내","동료"],"correct":1},
{"hanzi":"老师","pinyin":"lǎoshī","options":["학생","의사","선생님","친구"],"correct":2},
{"hanzi":"学生","pinyin":"xuésheng","options":["학생","직원","손님","운전사"],"correct":0},
{"hanzi":"同学","pinyin":"tóngxué","options":["동료","반 친구","선생님","이웃"],"correct":1},
{"hanzi":"先生","pinyin":"xiānsheng","options":["아가씨","부인","선생·남편","학생"],"correct":2},
{"hanzi":"小姐","pinyin":"xiǎojiě","options":["아가씨","부인","할머니","선생님"],"correct":0},
{"hanzi":"太太","pinyin":"tàitai","options":["할아버지","부인","사장","동료"],"correct":1},
{"hanzi":"医生","pinyin":"yīshēng","options":["간호사","의사","교사","경찰"],"correct":1},
{"hanzi":"服务员","pinyin":"fúwùyuán","options":["종업원","손님","의사","교사"],"correct":0},
{"hanzi":"司机","pinyin":"sījī","options":["손님","운전사","경찰","직원"],"correct":1},
{"hanzi":"今天","pinyin":"jīntiān","options":["어제","오늘","내일","올해"],"correct":1},
{"hanzi":"昨天","pinyin":"zuótiān","options":["오늘","어제","내일","모레"],"correct":1},
{"hanzi":"明天","pinyin":"míngtiān","options":["어제","오늘","내일","작년"],"correct":2},
{"hanzi":"现在","pinyin":"xiànzài","options":["방금","지금","나중","이미"],"correct":1},
{"hanzi":"时候","pinyin":"shíhou","options":["시간·때","장소","방법","이유"],"correct":0},
{"hanzi":"时间","pinyin":"shíjiān","options":["장소","시간","이유","방법"],"correct":1},
{"hanzi":"年","pinyin":"nián","options":["월","년","일","주"],"correct":1},
{"hanzi":"月","pinyin":"yuè","options":["년","월","일","시"],"correct":1},
{"hanzi":"日","pinyin":"rì","options":["월","일","주","시"],"correct":1},
{"hanzi":"号","pinyin":"hào","options":["날짜·번호","시간","분","요일"],"correct":0},
{"hanzi":"星期","pinyin":"xīngqī","options":["요일·주","월","해","계절"],"correct":0},
{"hanzi":"周末","pinyin":"zhōumò","options":["주말","평일","오늘","내일"],"correct":0},
{"hanzi":"点","pinyin":"diǎn","options":["시","분","초","날"],"correct":0},
{"hanzi":"分钟","pinyin":"fēnzhōng","options":["시간","분","초","하루"],"correct":1},
{"hanzi":"上午","pinyin":"shàngwǔ","options":["오전","오후","저녁","밤"],"correct":0},
{"hanzi":"中午","pinyin":"zhōngwǔ","options":["정오","저녁","오전","새벽"],"correct":0},
{"hanzi":"下午","pinyin":"xiàwǔ","options":["오전","오후","새벽","아침"],"correct":1},
{"hanzi":"晚上","pinyin":"wǎnshang","options":["아침","저녁","정오","오후"],"correct":1},
{"hanzi":"早上","pinyin":"zǎoshang","options":["아침","저녁","오후","밤"],"correct":0},
{"hanzi":"今年","pinyin":"jīnnián","options":["작년","올해","내년","오늘"],"correct":1},
{"hanzi":"去年","pinyin":"qùnián","options":["작년","올해","내년","어제"],"correct":0},
{"hanzi":"明年","pinyin":"míngnián","options":["올해","내년","작년","내일"],"correct":1},
{"hanzi":"生日","pinyin":"shēngrì","options":["명절","생일","기념일","휴일"],"correct":1},
{"hanzi":"是","pinyin":"shì","options":["있다","가다","이다","보다"],"correct":2},
{"hanzi":"有","pinyin":"yǒu","options":["없다","있다","이다","하다"],"correct":1},
{"hanzi":"没有","pinyin":"méiyǒu","options":["있지 않다·없다","아니다","가지다","이다"],"correct":0},
{"hanzi":"在","pinyin":"zài","options":["에서·있다","에게","부터","까지"],"correct":0},
{"hanzi":"去","pinyin":"qù","options":["오다","가다","돌아가다","도착하다"],"correct":1},
{"hanzi":"来","pinyin":"lái","options":["가다","오다","나가다","들어오다"],"correct":1},
{"hanzi":"回","pinyin":"huí","options":["돌아가다","오다","떠나다","도착하다"],"correct":0},
{"hanzi":"到","pinyin":"dào","options":["떠나다","도착하다","지나다","돌아가다"],"correct":1},
{"hanzi":"走","pinyin":"zǒu","options":["걷다·떠나다","오다","앉다","서다"],"correct":0},
{"hanzi":"跑","pinyin":"pǎo","options":["걷다","달리다","앉다","서다"],"correct":1},
{"hanzi":"进","pinyin":"jìn","options":["나가다","들어가다","돌아가다","떠나다"],"correct":1},
{"hanzi":"出","pinyin":"chū","options":["들어가다","나가다","올라가다","내려가다"],"correct":1},
{"hanzi":"上","pinyin":"shàng","options":["위·오르다","아래","안","밖"],"correct":0},
{"hanzi":"下","pinyin":"xià","options":["위","아래·내리다","앞","뒤"],"correct":1},
{"hanzi":"坐","pinyin":"zuò","options":["앉다","서다","가다","보다"],"correct":0},
{"hanzi":"站","pinyin":"zhàn","options":["서다","앉다","눕다","걷다"],"correct":0},
{"hanzi":"看","pinyin":"kàn","options":["듣다","보다","말하다","읽다"],"correct":1},
{"hanzi":"听","pinyin":"tīng","options":["보다","듣다","읽다","쓰다"],"correct":1},
{"hanzi":"说","pinyin":"shuō","options":["말하다","듣다","보다","쓰다"],"correct":0},
{"hanzi":"读","pinyin":"dú","options":["쓰다","읽다","듣다","말하다"],"correct":1},
{"hanzi":"写","pinyin":"xiě","options":["읽다","쓰다","말하다","묻다"],"correct":1},
{"hanzi":"问","pinyin":"wèn","options":["대답하다","묻다","말하다","알리다"],"correct":1},
{"hanzi":"回答","pinyin":"huídá","options":["질문하다","대답하다","설명하다","말하다"],"correct":1},
{"hanzi":"叫","pinyin":"jiào","options":["부르다","듣다","보다","쓰다"],"correct":0},
{"hanzi":"告诉","pinyin":"gàosu","options":["알리다","질문하다","대답하다","듣다"],"correct":0},
{"hanzi":"吃","pinyin":"chī","options":["마시다","먹다","사다","만들다"],"correct":1},
{"hanzi":"喝","pinyin":"hē","options":["먹다","마시다","사다","주다"],"correct":1},
{"hanzi":"买","pinyin":"mǎi","options":["팔다","사다","주다","찾다"],"correct":1},
{"hanzi":"卖","pinyin":"mài","options":["사다","팔다","빌리다","주문하다"],"correct":1},
{"hanzi":"做","pinyin":"zuò","options":["하다·만들다","서다","가다","보다"],"correct":0},
{"hanzi":"工作","pinyin":"gōngzuò","options":["공부하다","일하다","쉬다","놀다"],"correct":1},
{"hanzi":"学习","pinyin":"xuéxí","options":["일하다","공부하다","쉬다","운동하다"],"correct":1},
{"hanzi":"休息","pinyin":"xiūxi","options":["쉬다","일하다","운동하다","공부하다"],"correct":0},
{"hanzi":"睡觉","pinyin":"shuìjiào","options":["일어나다","자다","쉬다","눕다"],"correct":1},
{"hanzi":"起床","pinyin":"qǐchuáng","options":["자다","일어나다","쉬다","앉다"],"correct":1},
{"hanzi":"开","pinyin":"kāi","options":["닫다","열다·운전하다","멈추다","내리다"],"correct":1},
{"hanzi":"关","pinyin":"guān","options":["열다","닫다","켜다","보다"],"correct":1},
{"hanzi":"给","pinyin":"gěi","options":["받다","주다","사다","팔다"],"correct":1},
{"hanzi":"拿","pinyin":"ná","options":["가지다·들다","주다","놓다","빌리다"],"correct":0},
{"hanzi":"放","pinyin":"fàng","options":["놓다","들다","찾다","빌리다"],"correct":0},
{"hanzi":"找","pinyin":"zhǎo","options":["찾다","기다리다","만나다","잃다"],"correct":0},
{"hanzi":"等","pinyin":"děng","options":["찾다","기다리다","도착하다","시작하다"],"correct":1},
{"hanzi":"认识","pinyin":"rènshi","options":["알다·인식하다","잊다","소개하다","배우다"],"correct":0},
{"hanzi":"知道","pinyin":"zhīdào","options":["알다","생각하다","믿다","느끼다"],"correct":0},
{"hanzi":"明白","pinyin":"míngbai","options":["모르다","이해하다","기억하다","대답하다"],"correct":1},
{"hanzi":"想","pinyin":"xiǎng","options":["생각하다·원하다","배우다","말하다","알다"],"correct":0},
{"hanzi":"要","pinyin":"yào","options":["필요하다·원하다","좋아하다","알다","도착하다"],"correct":0},
{"hanzi":"喜欢","pinyin":"xǐhuan","options":["싫어하다","좋아하다","이해하다","기다리다"],"correct":1},
{"hanzi":"爱","pinyin":"ài","options":["좋아하다","사랑하다","배우다","도와주다"],"correct":1},
{"hanzi":"会","pinyin":"huì","options":["할 줄 알다","좋아하다","필요하다","원하다"],"correct":0},
{"hanzi":"能","pinyin":"néng","options":["할 수 있다","해야 한다","원하다","알다"],"correct":0},
{"hanzi":"可以","pinyin":"kěyǐ","options":["가능하다·해도 된다","반드시 해야 한다","원하다","좋아하다"],"correct":0},
{"hanzi":"帮助","pinyin":"bāngzhù","options":["방해하다","도와주다","기다리다","찾다"],"correct":1},
{"hanzi":"打电话","pinyin":"dǎ diànhuà","options":["전화하다","사진 찍다","문자 보내다","편지 쓰다"],"correct":0},
{"hanzi":"看见","pinyin":"kànjiàn","options":["듣게 되다","보게 되다","알게 되다","찾게 되다"],"correct":1},
{"hanzi":"觉得","pinyin":"juéde","options":["느끼다·생각하다","알리다","기억하다","믿다"],"correct":0},
{"hanzi":"开始","pinyin":"kāishǐ","options":["끝나다","시작하다","준비하다","멈추다"],"correct":1},
{"hanzi":"结束","pinyin":"jiéshù","options":["계속하다","끝나다","시작하다","출발하다"],"correct":1},
{"hanzi":"穿","pinyin":"chuān","options":["입다","벗다","씻다","사다"],"correct":0},
{"hanzi":"洗","pinyin":"xǐ","options":["씻다","입다","벗다","고르다"],"correct":0},
{"hanzi":"玩儿","pinyin":"wánr","options":["놀다","일하다","공부하다","쉬다"],"correct":0},
{"hanzi":"运动","pinyin":"yùndòng","options":["운동하다","쉬다","자다","일하다"],"correct":0},
{"hanzi":"住","pinyin":"zhù","options":["살다·거주하다","가다","오다","앉다"],"correct":0},
{"hanzi":"家","pinyin":"jiā","options":["학교","집","회사","식당"],"correct":1},
{"hanzi":"学校","pinyin":"xuéxiào","options":["회사","학교","병원","공항"],"correct":1},
{"hanzi":"医院","pinyin":"yīyuàn","options":["병원","학교","은행","공원"],"correct":0},
{"hanzi":"商店","pinyin":"shāngdiàn","options":["식당","상점","은행","호텔"],"correct":1},
{"hanzi":"饭馆","pinyin":"fànguǎn","options":["호텔","식당","상점","카페"],"correct":1},
{"hanzi":"公司","pinyin":"gōngsī","options":["학교","회사","식당","상점"],"correct":1},
{"hanzi":"车站","pinyin":"chēzhàn","options":["공항","역·정류장","항구","거리"],"correct":1},
{"hanzi":"机场","pinyin":"jīchǎng","options":["기차역","공항","호텔","은행"],"correct":1},
{"hanzi":"北京","pinyin":"běijīng","options":["상하이","베이징","서울","도쿄"],"correct":1},
{"hanzi":"中国","pinyin":"zhōngguó","options":["한국","일본","중국","미국"],"correct":2},
{"hanzi":"韩国","pinyin":"hánguó","options":["한국","일본","중국","프랑스"],"correct":0},
{"hanzi":"美国","pinyin":"měiguó","options":["미국","영국","일본","독일"],"correct":0},
{"hanzi":"汉语","pinyin":"hànyǔ","options":["영어","중국어","한국어","일본어"],"correct":1},
{"hanzi":"中文","pinyin":"zhōngwén","options":["중국어","외국어","본문","문장"],"correct":0},
{"hanzi":"书","pinyin":"shū","options":["책","신문","편지","공책"],"correct":0},
{"hanzi":"字","pinyin":"zì","options":["문자","책","종이","말"],"correct":0},
{"hanzi":"电话","pinyin":"diànhuà","options":["전화","사진","영화","컴퓨터"],"correct":0},
{"hanzi":"手机","pinyin":"shǒujī","options":["시계","휴대폰","컴퓨터","카메라"],"correct":1},
{"hanzi":"电脑","pinyin":"diànnǎo","options":["전화","컴퓨터","텔레비전","휴대폰"],"correct":1},
{"hanzi":"水","pinyin":"shuǐ","options":["차","물","우유","커피"],"correct":1},
{"hanzi":"茶","pinyin":"chá","options":["물","차","술","주스"],"correct":1},
{"hanzi":"米饭","pinyin":"mǐfàn","options":["국수","밥","빵","만두"],"correct":1},
{"hanzi":"面条","pinyin":"miàntiáo","options":["밥","국수","빵","죽"],"correct":1},
{"hanzi":"水果","pinyin":"shuǐguǒ","options":["채소","과일","음료","고기"],"correct":1},
{"hanzi":"苹果","pinyin":"píngguǒ","options":["바나나","사과","배","포도"],"correct":1},
{"hanzi":"衣服","pinyin":"yīfu","options":["신발","옷","모자","가방"],"correct":1},
{"hanzi":"钱","pinyin":"qián","options":["돈","표","카드","물건"],"correct":0},
{"hanzi":"车","pinyin":"chē","options":["차·차량","배","비행기","자전거"],"correct":0},
{"hanzi":"出租车","pinyin":"chūzūchē","options":["버스","택시","기차","지하철"],"correct":1},
{"hanzi":"请","pinyin":"qǐng","options":["미안합니다","부탁하다·청하다","감사합니다","괜찮다"],"correct":1},
{"hanzi":"谢谢","pinyin":"xièxie","options":["안녕하세요","감사합니다","미안합니다","안녕히 가세요"],"correct":1},
{"hanzi":"不客气","pinyin":"bú kèqi","options":["괜찮습니다","천만에요","실례합니다","어서 오세요"],"correct":1},
{"hanzi":"对不起","pinyin":"duìbuqǐ","options":["죄송합니다","감사합니다","축하합니다","괜찮습니다"],"correct":0},
{"hanzi":"没关系","pinyin":"méi guānxi","options":["상관없다·괜찮다","문제 있다","모르겠다","맞지 않다"],"correct":0},
{"hanzi":"再见","pinyin":"zàijiàn","options":["안녕하세요","안녕히 가세요","고맙습니다","미안합니다"],"correct":1},
{"hanzi":"你好","pinyin":"nǐ hǎo","options":["안녕하세요","잘 가요","감사합니다","죄송합니다"],"correct":0},
{"hanzi":"好","pinyin":"hǎo","options":["좋다","크다","많다","빠르다"],"correct":0},
{"hanzi":"大","pinyin":"dà","options":["작다","크다","많다","높다"],"correct":1},
{"hanzi":"小","pinyin":"xiǎo","options":["적다","작다","짧다","낮다"],"correct":1},
{"hanzi":"多","pinyin":"duō","options":["적다","많다","크다","비싸다"],"correct":1},
{"hanzi":"少","pinyin":"shǎo","options":["작다","적다","짧다","느리다"],"correct":1},
{"hanzi":"很","pinyin":"hěn","options":["조금","매우","이미","다시"],"correct":1},
{"hanzi":"不","pinyin":"bù","options":["안","못","없음","아직"],"correct":0},
{"hanzi":"都","pinyin":"dōu","options":["모두","또","아직","곧"],"correct":0},
{"hanzi":"也","pinyin":"yě","options":["만","또한","늘","곧"],"correct":1},
{"hanzi":"和","pinyin":"hé","options":["또는","하지만","그리고","그래서"],"correct":2},
{"hanzi":"的","pinyin":"de","options":["의","에","와","를"],"correct":0},
{"hanzi":"慢","pinyin":"màn","options":["빠르다","느리다","가깝다","멀다"],"correct":1},
{"hanzi":"快","pinyin":"kuài","options":["느리다","빠르다","비싸다","작다"],"correct":1},
{"hanzi":"高","pinyin":"gāo","options":["높다·키가 크다","낮다","짧다","가깝다"],"correct":0},
{"hanzi":"矮","pinyin":"ǎi","options":["길다","키가 작다","무겁다","넓다"],"correct":1},
{"hanzi":"长","pinyin":"cháng","options":["짧다","좁다","길다","낮다"],"correct":2},
{"hanzi":"短","pinyin":"duǎn","options":["짧다","길다","높다","멀다"],"correct":0},
{"hanzi":"重","pinyin":"zhòng","options":["가볍다","크다","무겁다","적다"],"correct":2},
{"hanzi":"轻","pinyin":"qīng","options":["무겁다","가볍다","낮다","비싸다"],"correct":1},
{"hanzi":"新","pinyin":"xīn","options":["오래된","새로운","젊은","어두운"],"correct":1},
{"hanzi":"旧","pinyin":"jiù","options":["새로운","오래된","깨끗한","빠른"],"correct":1},
{"hanzi":"贵","pinyin":"guì","options":["싸다","비싸다","많다","무겁다"],"correct":1},
{"hanzi":"便宜","pinyin":"piányi","options":["비싸다","싸다","적다","가볍다"],"correct":1},
{"hanzi":"忙","pinyin":"máng","options":["바쁘다","한가하다","피곤하다","느리다"],"correct":0},
{"hanzi":"累","pinyin":"lèi","options":["피곤하다","바쁘다","배고프다","목마르다"],"correct":0},
{"hanzi":"饿","pinyin":"è","options":["목마르다","배고프다","배부르다","피곤하다"],"correct":1},
{"hanzi":"渴","pinyin":"kě","options":["배고프다","목마르다","배부르다","아프다"],"correct":1},
{"hanzi":"饱","pinyin":"bǎo","options":["배부르다","배고프다","목마르다","피곤하다"],"correct":0},
{"hanzi":"冷","pinyin":"lěng","options":["덥다","춥다","따뜻하다","시원하다"],"correct":1},
{"hanzi":"热","pinyin":"rè","options":["춥다","덥다","차갑다","시원하다"],"correct":1},
{"hanzi":"漂亮","pinyin":"piàoliang","options":["깨끗하다","예쁘다","조용하다","편리하다"],"correct":1},
{"hanzi":"高兴","pinyin":"gāoxìng","options":["슬프다","기쁘다","화나다","긴장하다"],"correct":1},
{"hanzi":"开心","pinyin":"kāixīn","options":["즐겁다","슬프다","화나다","두렵다"],"correct":0},
{"hanzi":"伤心","pinyin":"shāngxīn","options":["즐겁다","슬프다","만족하다","안심하다"],"correct":1},
{"hanzi":"生气","pinyin":"shēngqì","options":["기뻐하다","화내다","걱정하다","놀라다"],"correct":1},
{"hanzi":"害怕","pinyin":"hàipà","options":["두려워하다","좋아하다","믿다","기뻐하다"],"correct":0},
{"hanzi":"放心","pinyin":"fàngxīn","options":["걱정하다","안심하다","긴장하다","화내다"],"correct":1},
{"hanzi":"担心","pinyin":"dānxīn","options":["안심하다","걱정하다","기뻐하다","웃다"],"correct":1},
{"hanzi":"紧张","pinyin":"jǐnzhāng","options":["편안하다","긴장하다","즐겁다","피곤하다"],"correct":1},
{"hanzi":"可爱","pinyin":"kěài","options":["귀엽다","예쁘다","깨끗하다","친절하다"],"correct":0},
{"hanzi":"聪明","pinyin":"cōngming","options":["조용하다","똑똑하다","편리하다","안전하다"],"correct":1},
{"hanzi":"热情","pinyin":"rèqíng","options":["조용하다","열정적이다","깨끗하다","엄격하다"],"correct":1},
{"hanzi":"友好","pinyin":"yǒuhǎo","options":["우호적이다","위험하다","복잡하다","보통이다"],"correct":0},
{"hanzi":"难","pinyin":"nán","options":["쉽다","어렵다","바쁘다","피곤하다"],"correct":1},
{"hanzi":"容易","pinyin":"róngyì","options":["쉽다","어렵다","복잡하다","중요하다"],"correct":0},
{"hanzi":"简单","pinyin":"jiǎndān","options":["복잡하다","간단하다","위험하다","특별하다"],"correct":1},
{"hanzi":"复杂","pinyin":"fùzá","options":["복잡하다","간단하다","정확하다","편리하다"],"correct":0},
{"hanzi":"重要","pinyin":"zhòngyào","options":["필요하다","중요하다","위험하다","편리하다"],"correct":1},
{"hanzi":"必要","pinyin":"bìyào","options":["필요하다","간단하다","보통이다","위험하다"],"correct":0},
{"hanzi":"清楚","pinyin":"qīngchu","options":["분명하다","깨끗하다","조용하다","간단하다"],"correct":0},
{"hanzi":"干净","pinyin":"gānjìng","options":["더럽다","깨끗하다","복잡하다","위험하다"],"correct":1},
{"hanzi":"安静","pinyin":"ānjìng","options":["시끄럽다","조용하다","깨끗하다","편리하다"],"correct":1},
{"hanzi":"舒服","pinyin":"shūfu","options":["불편하다","편안하다","깨끗하다","안전하다"],"correct":1},
{"hanzi":"方便","pinyin":"fāngbiàn","options":["불편하다","중요하다","편리하다","복잡하다"],"correct":2},
{"hanzi":"安全","pinyin":"ānquán","options":["위험하다","안전하다","조용하다","깨끗하다"],"correct":1},
{"hanzi":"危险","pinyin":"wēixiǎn","options":["위험하다","안전하다","편리하다","중요하다"],"correct":0},
{"hanzi":"健康","pinyin":"jiànkāng","options":["아프다","건강하다","피곤하다","배고프다"],"correct":1},
{"hanzi":"正常","pinyin":"zhèngcháng","options":["이상하다","정상이다","위험하다","특별하다"],"correct":1},
{"hanzi":"奇怪","pinyin":"qíguài","options":["정상이다","이상하다","간단하다","편리하다"],"correct":1},
{"hanzi":"有名","pinyin":"yǒumíng","options":["유명하다","조용하다","신선하다","평범하다"],"correct":0},
{"hanzi":"普通","pinyin":"pǔtōng","options":["특별하다","보통이다","유명하다","위험하다"],"correct":1},
{"hanzi":"满意","pinyin":"mǎnyì","options":["실망하다","만족하다","걱정하다","긴장하다"],"correct":1},
{"hanzi":"生病","pinyin":"shēngbìng","options":["아프다·병나다","운동하다","쉬다","건강하다"],"correct":0},
{"hanzi":"疼","pinyin":"téng","options":["피곤하다","아프다","배고프다","목마르다"],"correct":1},
{"hanzi":"胖","pinyin":"pàng","options":["마르다","뚱뚱하다","키가 크다","낮다"],"correct":1},
{"hanzi":"瘦","pinyin":"shòu","options":["마르다","뚱뚱하다","작다","약하다"],"correct":0},
{"hanzi":"好吃","pinyin":"hǎochī","options":["맛없다","맛있다","신선하다","배부르다"],"correct":1},
{"hanzi":"好喝","pinyin":"hǎohē","options":["마시기 좋다","맛있다","배부르다","달다"],"correct":0},
{"hanzi":"新鲜","pinyin":"xīnxiān","options":["신선하다","새롭다","깨끗하다","맛있다"],"correct":0},
{"hanzi":"甜","pinyin":"tián","options":["맵다","달다","짜다","시다"],"correct":1},
{"hanzi":"辣","pinyin":"là","options":["맵다","달다","짜다","쓰다"],"correct":0},
{"hanzi":"苦","pinyin":"kǔ","options":["달다","쓰다","맵다","짜다"],"correct":1},
{"hanzi":"酸","pinyin":"suān","options":["시다","달다","쓰다","짜다"],"correct":0},
{"hanzi":"咸","pinyin":"xián","options":["짜다","달다","시다","맵다"],"correct":0},
{"hanzi":"香","pinyin":"xiāng","options":["향기롭다","맵다","짜다","쓰다"],"correct":0},
{"hanzi":"凉快","pinyin":"liángkuai","options":["시원하다","춥다","덥다","따뜻하다"],"correct":0},
{"hanzi":"暖和","pinyin":"nuǎnhuo","options":["따뜻하다","춥다","시원하다","건조하다"],"correct":0},
{"hanzi":"干燥","pinyin":"gānzào","options":["습하다","건조하다","따뜻하다","시원하다"],"correct":1},
{"hanzi":"晴","pinyin":"qíng","options":["맑다","흐리다","비 오다","눈 오다"],"correct":0},
{"hanzi":"阴","pinyin":"yīn","options":["맑다","흐리다","덥다","춥다"],"correct":1},
{"hanzi":"远","pinyin":"yuǎn","options":["가깝다","멀다","높다","낮다"],"correct":1},
{"hanzi":"近","pinyin":"jìn","options":["멀다","가깝다","빠르다","늦다"],"correct":1},
{"hanzi":"对","pinyin":"duì","options":["맞다","틀리다","좋다","나쁘다"],"correct":0},
{"hanzi":"错","pinyin":"cuò","options":["틀리다","맞다","좋다","쉽다"],"correct":0},
{"hanzi":"不错","pinyin":"búcuò","options":["괜찮다·좋다","틀리다","어렵다","위험하다"],"correct":0},
{"hanzi":"认真","pinyin":"rènzhēn","options":["진지하다","유명하다","편리하다","위험하다"],"correct":0},
{"hanzi":"仔细","pinyin":"zǐxì","options":["꼼꼼하다","간단하다","조용하다","특별하다"],"correct":0},
{"hanzi":"马虎","pinyin":"mǎhu","options":["부주의하다","진지하다","꼼꼼하다","정확하다"],"correct":0},
{"hanzi":"准确","pinyin":"zhǔnquè","options":["정확하다","부주의하다","복잡하다","위험하다"],"correct":0},
{"hanzi":"厉害","pinyin":"lìhai","options":["대단하다","보통이다","간단하다","조용하다"],"correct":0},
{"hanzi":"优秀","pinyin":"yōuxiù","options":["우수하다","보통이다","위험하다","복잡하다"],"correct":0},
{"hanzi":"幸福","pinyin":"xìngfú","options":["행복하다","슬프다","긴장하다","위험하다"],"correct":0},
{"hanzi":"快乐","pinyin":"kuàilè","options":["즐겁다","화나다","두렵다","피곤하다"],"correct":0},
{"hanzi":"孤单","pinyin":"gūdān","options":["외롭다","즐겁다","화나다","편안하다"],"correct":0},
{"hanzi":"失望","pinyin":"shīwàng","options":["만족하다","실망하다","기뻐하다","안심하다"],"correct":1},
{"hanzi":"后悔","pinyin":"hòuhuǐ","options":["후회하다","축하하다","동의하다","믿다"],"correct":0},
{"hanzi":"激动","pinyin":"jīdòng","options":["흥분하다","안심하다","피곤하다","조용하다"],"correct":0},
{"hanzi":"严重","pinyin":"yánzhòng","options":["심각하다","간단하다","편리하다","보통이다"],"correct":0},
{"hanzi":"轻松","pinyin":"qīngsōng","options":["홀가분하다","심각하다","위험하다","복잡하다"],"correct":0},
{"hanzi":"客气","pinyin":"kèqi","options":["예의 바르다","바쁘다","긴장하다","위험하다"],"correct":0},
{"hanzi":"诚实","pinyin":"chéngshí","options":["성실하다","똑똑하다","조용하다","편리하다"],"correct":0},
{"hanzi":"勇敢","pinyin":"yǒnggǎn","options":["용감하다","두렵다","조용하다","편하다"],"correct":0},
{"hanzi":"麻烦","pinyin":"máfan","options":["번거롭다","간단하다","편리하다","편안하다"],"correct":0},
{"hanzi":"够","pinyin":"gòu","options":["부족하다","충분하다","비싸다","틀리다"],"correct":1},
{"hanzi":"满","pinyin":"mǎn","options":["비어 있다","가득하다","부족하다","작다"],"correct":1},
{"hanzi":"空","pinyin":"kōng","options":["비어 있다","가득하다","복잡하다","무겁다"],"correct":0},
{"hanzi":"活","pinyin":"huó","options":["살아 있다","죽다","피곤하다","아프다"],"correct":0},
{"hanzi":"死","pinyin":"sǐ","options":["살다","죽다","낳다","자다"],"correct":1},
{"hanzi":"年轻","pinyin":"niánqīng","options":["늙다","젊다","바쁘다","피곤하다"],"correct":1},
{"hanzi":"老","pinyin":"lǎo","options":["젊다","늙다","새롭다","빠르다"],"correct":1},
{"hanzi":"宽","pinyin":"kuān","options":["넓다","좁다","깊다","얕다"],"correct":0},
{"hanzi":"窄","pinyin":"zhǎi","options":["좁다","넓다","길다","짧다"],"correct":0},
{"hanzi":"深","pinyin":"shēn","options":["깊다","얕다","가깝다","낮다"],"correct":0},
{"hanzi":"浅","pinyin":"qiǎn","options":["얕다","깊다","높다","멀다"],"correct":0},
{"hanzi":"厚","pinyin":"hòu","options":["두껍다","얇다","가볍다","좁다"],"correct":0},
{"hanzi":"薄","pinyin":"báo","options":["얇다","두껍다","무겁다","넓다"],"correct":0},
{"hanzi":"软","pinyin":"ruǎn","options":["부드럽다","딱딱하다","무겁다","차갑다"],"correct":0},
{"hanzi":"硬","pinyin":"yìng","options":["딱딱하다","부드럽다","가볍다","따뜻하다"],"correct":0},
{"hanzi":"暗","pinyin":"àn","options":["밝다","어둡다","뜨겁다","차갑다"],"correct":1},
{"hanzi":"亮","pinyin":"liàng","options":["밝다","어둡다","흐리다","조용하다"],"correct":0},
{"hanzi":"透明","pinyin":"tòumíng","options":["투명하다","어둡다","두껍다","좁다"],"correct":0},
{"hanzi":"平常","pinyin":"píngcháng","options":["평범하다","특별하다","위험하다","유명하다"],"correct":0},
{"hanzi":"独特","pinyin":"dútè","options":["독특하다","평범하다","위험하다","간단하다"],"correct":0},
{"hanzi":"完整","pinyin":"wánzhěng","options":["완전하다","깨지다","부족하다","복잡하다"],"correct":0},
{"hanzi":"整齐","pinyin":"zhěngqí","options":["가지런하다","어지럽다","복잡하다","위험하다"],"correct":0},
{"hanzi":"乱","pinyin":"luàn","options":["어지럽다","가지런하다","깨끗하다","분명하다"],"correct":0},
{"hanzi":"吃饭","pinyin":"chī fàn","options":["밥을 먹다","물을 마시다","잠을 자다","장을 보다"],"correct":0},
{"hanzi":"喝水","pinyin":"hē shuǐ","options":["물을 마시다","밥을 먹다","차를 사다","요리하다"],"correct":0},
{"hanzi":"做饭","pinyin":"zuò fàn","options":["밥을 짓다·요리하다","밥을 먹다","청소하다","장을 보다"],"correct":0},
{"hanzi":"点菜","pinyin":"diǎn cài","options":["음식을 주문하다","돈을 내다","자리를 잡다","설거지하다"],"correct":0},
{"hanzi":"结账","pinyin":"jiézhàng","options":["주문하다","계산하다","예약하다","취소하다"],"correct":1},
{"hanzi":"刷卡","pinyin":"shuākǎ","options":["현금 내다","카드를 긁다","돈을 찾다","잔돈을 주다"],"correct":1},
{"hanzi":"付款","pinyin":"fùkuǎn","options":["지불하다","받다","저축하다","환불하다"],"correct":0},
{"hanzi":"花钱","pinyin":"huā qián","options":["돈을 쓰다","돈을 저축하다","돈을 빌리다","돈을 찾다"],"correct":0},
{"hanzi":"存钱","pinyin":"cún qián","options":["돈을 저축하다","돈을 쓰다","돈을 빌리다","돈을 갚다"],"correct":0},
{"hanzi":"取钱","pinyin":"qǔ qián","options":["돈을 입금하다","돈을 인출하다","돈을 송금하다","돈을 계산하다"],"correct":1},
{"hanzi":"借","pinyin":"jiè","options":["빌리다","사다","팔다","주다"],"correct":0},
{"hanzi":"还","pinyin":"huán","options":["돌려주다","빌리다","사다","팔다"],"correct":0},
{"hanzi":"送","pinyin":"sòng","options":["선물하다·보내다","받다","찾다","고치다"],"correct":0},
{"hanzi":"收","pinyin":"shōu","options":["받다·거두다","주다","보내다","잃다"],"correct":0},
{"hanzi":"发","pinyin":"fā","options":["보내다·발송하다","받다","찾다","바꾸다"],"correct":0},
{"hanzi":"寄","pinyin":"jì","options":["부치다","받다","잊다","빌리다"],"correct":0},
{"hanzi":"带","pinyin":"dài","options":["가지고 가다","놓다","잃다","고치다"],"correct":0},
{"hanzi":"戴","pinyin":"dài","options":["착용하다","씻다","바꾸다","보내다"],"correct":0},
{"hanzi":"脱","pinyin":"tuō","options":["벗다","입다","신다","고치다"],"correct":0},
{"hanzi":"刷","pinyin":"shuā","options":["닦다","씻다","입다","고치다"],"correct":0},
{"hanzi":"换","pinyin":"huàn","options":["바꾸다","씻다","찾다","빌리다"],"correct":0},
{"hanzi":"搬","pinyin":"bān","options":["이사하다·옮기다","빌리다","보내다","바꾸다"],"correct":0},
{"hanzi":"搬家","pinyin":"bān jiā","options":["이사하다","집에 가다","방을 빌리다","청소하다"],"correct":0},
{"hanzi":"打扫","pinyin":"dǎsǎo","options":["청소하다","씻다","요리하다","수리하다"],"correct":0},
{"hanzi":"修","pinyin":"xiū","options":["수리하다","씻다","바꾸다","빌리다"],"correct":0},
{"hanzi":"哭","pinyin":"kū","options":["울다","웃다","노래하다","말하다"],"correct":0},
{"hanzi":"笑","pinyin":"xiào","options":["웃다","울다","화내다","놀라다"],"correct":0},
{"hanzi":"唱歌","pinyin":"chànggē","options":["노래하다","춤추다","말하다","듣다"],"correct":0},
{"hanzi":"跳舞","pinyin":"tiàowǔ","options":["춤추다","노래하다","운동하다","달리다"],"correct":0},
{"hanzi":"跑步","pinyin":"pǎobù","options":["달리기 하다","수영하다","춤추다","노래하다"],"correct":0},
{"hanzi":"游泳","pinyin":"yóuyǒng","options":["수영하다","달리다","걷다","춤추다"],"correct":0},
{"hanzi":"散步","pinyin":"sànbù","options":["산책하다","달리다","수영하다","운전하다"],"correct":0},
{"hanzi":"旅行","pinyin":"lǚxíng","options":["여행하다","일하다","공부하다","운동하다"],"correct":0},
{"hanzi":"旅游","pinyin":"lǚyóu","options":["여행하다","일하다","공부하다","운동하다"],"correct":0},
{"hanzi":"拍照","pinyin":"pāizhào","options":["사진을 찍다","전화를 걸다","편지를 쓰다","노래하다"],"correct":0},
{"hanzi":"照相","pinyin":"zhàoxiàng","options":["사진을 찍다","전화를 걸다","편지를 쓰다","노래하다"],"correct":0},
{"hanzi":"上网","pinyin":"shàngwǎng","options":["인터넷을 하다","전화하다","쇼핑하다","운전하다"],"correct":0},
{"hanzi":"聊天","pinyin":"liáotiān","options":["수다 떨다","공부하다","운동하다","잠자다"],"correct":0},
{"hanzi":"见面","pinyin":"jiànmiàn","options":["만나다","헤어지다","소개하다","기다리다"],"correct":0},
{"hanzi":"遇到","pinyin":"yùdào","options":["만나다·마주치다","떠나다","기다리다","잊다"],"correct":0},
{"hanzi":"离开","pinyin":"líkāi","options":["떠나다","도착하다","돌아오다","들어가다"],"correct":0},
{"hanzi":"出发","pinyin":"chūfā","options":["출발하다","도착하다","돌아오다","멈추다"],"correct":0},
{"hanzi":"到达","pinyin":"dàodá","options":["도착하다","출발하다","떠나다","지나다"],"correct":0},
{"hanzi":"迟到","pinyin":"chídào","options":["지각하다","일찍 오다","출발하다","도착하다"],"correct":0},
{"hanzi":"起立","pinyin":"qǐlì","options":["일어서다","앉다","눕다","들어가다"],"correct":0},
{"hanzi":"躺","pinyin":"tǎng","options":["눕다","서다","앉다","걷다"],"correct":0},
{"hanzi":"跳","pinyin":"tiào","options":["뛰다","걷다","앉다","눕다"],"correct":0},
{"hanzi":"拉","pinyin":"lā","options":["당기다","밀다","들다","놓다"],"correct":0},
{"hanzi":"推","pinyin":"tuī","options":["밀다","당기다","들다","놓다"],"correct":0},
{"hanzi":"抱","pinyin":"bào","options":["안다·껴안다","놓다","밀다","던지다"],"correct":0},
{"hanzi":"敲","pinyin":"qiāo","options":["두드리다","밀다","당기다","던지다"],"correct":0},
{"hanzi":"打开","pinyin":"dǎkāi","options":["열다","닫다","밀다","던지다"],"correct":0},
{"hanzi":"关上","pinyin":"guānshàng","options":["닫다","열다","밀다","당기다"],"correct":0},
{"hanzi":"打破","pinyin":"dǎpò","options":["깨뜨리다","수리하다","열다","닫다"],"correct":0},
{"hanzi":"破","pinyin":"pò","options":["깨지다","새롭다","완전하다","깨끗하다"],"correct":0},
{"hanzi":"丢","pinyin":"diū","options":["잃어버리다","찾다","얻다","보내다"],"correct":0},
{"hanzi":"捡","pinyin":"jiǎn","options":["줍다","잃다","빌리다","사다"],"correct":0},
{"hanzi":"扔","pinyin":"rēng","options":["버리다","줍다","받다","빌리다"],"correct":0},
{"hanzi":"检查","pinyin":"jiǎnchá","options":["검사하다","준비하다","설명하다","결정하다"],"correct":0},
{"hanzi":"注意","pinyin":"zhùyì","options":["주의하다","잊다","찾다","떠나다"],"correct":0},
{"hanzi":"记得","pinyin":"jìde","options":["기억하다","잊다","알다","묻다"],"correct":0},
{"hanzi":"忘记","pinyin":"wàngjì","options":["잊어버리다","기억하다","알다","이해하다"],"correct":0},
{"hanzi":"发现","pinyin":"fāxiàn","options":["발견하다","잊다","결정하다","반대하다"],"correct":0},
{"hanzi":"发明","pinyin":"fāmíng","options":["발명하다","발견하다","설명하다","준비하다"],"correct":0},
{"hanzi":"介绍","pinyin":"jièshào","options":["소개하다","설명하다","대답하다","반대하다"],"correct":0},
{"hanzi":"解释","pinyin":"jiěshì","options":["설명하다","소개하다","대답하다","질문하다"],"correct":0},
{"hanzi":"同意","pinyin":"tóngyì","options":["동의하다","반대하다","걱정하다","거절하다"],"correct":0},
{"hanzi":"反对","pinyin":"fǎnduì","options":["반대하다","동의하다","찬성하다","믿다"],"correct":0},
{"hanzi":"相信","pinyin":"xiāngxìn","options":["믿다","의심하다","잊다","걱정하다"],"correct":0},
{"hanzi":"感觉","pinyin":"gǎnjué","options":["느끼다","기억하다","잊다","결정하다"],"correct":0},
{"hanzi":"认为","pinyin":"rènwéi","options":["~라고 여기다","기억하다","돕다","찾다"],"correct":0},
{"hanzi":"决定","pinyin":"juédìng","options":["결정하다","기다리다","설명하다","잊다"],"correct":0},
{"hanzi":"打算","pinyin":"dǎsuàn","options":["계획하다","끝내다","돕다","대답하다"],"correct":0},
{"hanzi":"准备","pinyin":"zhǔnbèi","options":["준비하다","시작하다","멈추다","도착하다"],"correct":0},
{"hanzi":"完成","pinyin":"wánchéng","options":["완성하다","시작하다","계획하다","잊다"],"correct":0},
{"hanzi":"提高","pinyin":"tígāo","options":["향상시키다","낮추다","멈추다","잊다"],"correct":0},
{"hanzi":"练习","pinyin":"liànxí","options":["연습하다","쉬다","운동하다","설명하다"],"correct":0},
{"hanzi":"复习","pinyin":"fùxí","options":["복습하다","예습하다","쉬다","일하다"],"correct":0},
{"hanzi":"预习","pinyin":"yùxí","options":["예습하다","복습하다","연습하다","시험보다"],"correct":0},
{"hanzi":"考试","pinyin":"kǎoshì","options":["시험보다","공부하다","복습하다","졸업하다"],"correct":0},
{"hanzi":"比较","pinyin":"bǐjiào","options":["비교하다","연습하다","검사하다","소개하다"],"correct":0},
{"hanzi":"帮忙","pinyin":"bāngmáng","options":["도와주다","방해하다","기다리다","찾다"],"correct":0},
{"hanzi":"照顾","pinyin":"zhàogù","options":["돌보다","기다리다","찾다","떠나다"],"correct":0},
{"hanzi":"选择","pinyin":"xuǎnzé","options":["선택하다","결정하다","준비하다","소개하다"],"correct":0},
{"hanzi":"成功","pinyin":"chénggōng","options":["성공하다","실패하다","시작하다","멈추다"],"correct":0},
{"hanzi":"失败","pinyin":"shībài","options":["실패하다","성공하다","완성하다","시작하다"],"correct":0},
{"hanzi":"参加","pinyin":"cānjiā","options":["참가하다","떠나다","거절하다","준비하다"],"correct":0},
{"hanzi":"邀请","pinyin":"yāoqǐng","options":["초대하다","거절하다","방문하다","기다리다"],"correct":0},
{"hanzi":"祝贺","pinyin":"zhùhè","options":["축하하다","사과하다","감사하다","거절하다"],"correct":0},
{"hanzi":"感谢","pinyin":"gǎnxiè","options":["감사하다","사과하다","축하하다","거절하다"],"correct":0},
{"hanzi":"道歉","pinyin":"dàoqiàn","options":["사과하다","감사하다","축하하다","초대하다"],"correct":0},
{"hanzi":"拒绝","pinyin":"jùjué","options":["거절하다","동의하다","초대하다","참가하다"],"correct":0},
{"hanzi":"接受","pinyin":"jiēshòu","options":["받아들이다","거절하다","반대하다","잊다"],"correct":0},
{"hanzi":"允许","pinyin":"yǔnxǔ","options":["허락하다","거절하다","반대하다","잊다"],"correct":0},
{"hanzi":"要求","pinyin":"yāoqiú","options":["요구하다","허락하다","거절하다","축하하다"],"correct":0},
{"hanzi":"建议","pinyin":"jiànyì","options":["건의하다","거절하다","잊다","떠나다"],"correct":0},
{"hanzi":"提醒","pinyin":"tíxǐng","options":["상기시키다","잊다","반대하다","떠나다"],"correct":0},
{"hanzi":"答应","pinyin":"dāying","options":["응낙하다","거절하다","반대하다","잊다"],"correct":0},
{"hanzi":"怀疑","pinyin":"huáiyí","options":["의심하다","믿다","기억하다","동의하다"],"correct":0},
{"hanzi":"支持","pinyin":"zhīchí","options":["지지하다","반대하다","거절하다","잊다"],"correct":0},
{"hanzi":"鼓励","pinyin":"gǔlì","options":["격려하다","반대하다","거절하다","비교하다"],"correct":0},
{"hanzi":"批评","pinyin":"pīpíng","options":["비판하다","칭찬하다","격려하다","지지하다"],"correct":0},
{"hanzi":"表扬","pinyin":"biǎoyáng","options":["칭찬하다","비판하다","반대하다","거절하다"],"correct":0},
{"hanzi":"尊重","pinyin":"zūnzhòng","options":["존중하다","비판하다","거절하다","속이다"],"correct":0},
{"hanzi":"理解","pinyin":"lǐjiě","options":["이해하다","의심하다","반대하다","거절하다"],"correct":0},
{"hanzi":"原谅","pinyin":"yuánliàng","options":["용서하다","비판하다","반대하다","의심하다"],"correct":0},
{"hanzi":"打扰","pinyin":"dǎrǎo","options":["방해하다","도와주다","초대하다","격려하다"],"correct":0},
{"hanzi":"银行","pinyin":"yínháng","options":["은행","상점","병원","학교"],"correct":0},
{"hanzi":"饭店","pinyin":"fàndiàn","options":["호텔·식당","병원","은행","공항"],"correct":0},
{"hanzi":"宾馆","pinyin":"bīnguǎn","options":["여관·호텔","식당","은행","병원"],"correct":0},
{"hanzi":"旅馆","pinyin":"lǚguǎn","options":["호텔·여관","식당","상점","회사"],"correct":0},
{"hanzi":"超市","pinyin":"chāoshì","options":["슈퍼마켓","상점","은행","식당"],"correct":0},
{"hanzi":"市场","pinyin":"shìchǎng","options":["시장","상점","회사","식당"],"correct":0},
{"hanzi":"公园","pinyin":"gōngyuán","options":["공원","학교","은행","병원"],"correct":0},
{"hanzi":"图书馆","pinyin":"túshūguǎn","options":["도서관","교실","회사","상점"],"correct":0},
{"hanzi":"教室","pinyin":"jiàoshì","options":["교실","학교","사무실","도서관"],"correct":0},
{"hanzi":"办公室","pinyin":"bàngōngshì","options":["사무실","교실","도서관","식당"],"correct":0},
{"hanzi":"大学","pinyin":"dàxué","options":["대학교","중학교","초등학교","회사"],"correct":0},
{"hanzi":"工厂","pinyin":"gōngchǎng","options":["공장","회사","학교","은행"],"correct":0},
{"hanzi":"邮局","pinyin":"yóujú","options":["우체국","은행","병원","상점"],"correct":0},
{"hanzi":"警察局","pinyin":"jǐngchájú","options":["경찰서","우체국","은행","병원"],"correct":0},
{"hanzi":"派出所","pinyin":"pàichūsuǒ","options":["파출소","우체국","호텔","시장"],"correct":0},
{"hanzi":"药店","pinyin":"yàodiàn","options":["약국","병원","상점","은행"],"correct":0},
{"hanzi":"书店","pinyin":"shūdiàn","options":["서점","도서관","상점","학교"],"correct":0},
{"hanzi":"咖啡馆","pinyin":"kāfēiguǎn","options":["카페","식당","호텔","상점"],"correct":0},
{"hanzi":"茶馆","pinyin":"cháguǎn","options":["찻집","카페","식당","상점"],"correct":0},
{"hanzi":"电影院","pinyin":"diànyǐngyuàn","options":["영화관","도서관","체육관","박물관"],"correct":0},
{"hanzi":"博物馆","pinyin":"bówùguǎn","options":["박물관","영화관","도서관","체육관"],"correct":0},
{"hanzi":"体育馆","pinyin":"tǐyùguǎn","options":["체육관","영화관","박물관","도서관"],"correct":0},
{"hanzi":"游泳馆","pinyin":"yóuyǒngguǎn","options":["수영장","체육관","공원","병원"],"correct":0},
{"hanzi":"健身房","pinyin":"jiànshēnfáng","options":["헬스장","교실","사무실","식당"],"correct":0},
{"hanzi":"厕所","pinyin":"cèsuǒ","options":["화장실","주방","거실","침실"],"correct":0},
{"hanzi":"卫生间","pinyin":"wèishēngjiān","options":["화장실","주방","거실","침실"],"correct":0},
{"hanzi":"厨房","pinyin":"chúfáng","options":["주방","거실","침실","화장실"],"correct":0},
{"hanzi":"客厅","pinyin":"kètīng","options":["거실","주방","침실","화장실"],"correct":0},
{"hanzi":"卧室","pinyin":"wòshì","options":["침실","거실","주방","서재"],"correct":0},
{"hanzi":"书房","pinyin":"shūfáng","options":["서재","침실","거실","주방"],"correct":0},
{"hanzi":"房间","pinyin":"fángjiān","options":["방","집","교실","사무실"],"correct":0},
{"hanzi":"楼","pinyin":"lóu","options":["건물·층","방","문","집"],"correct":0},
{"hanzi":"门口","pinyin":"ménkǒu","options":["문 앞","창가","방 안","길가"],"correct":0},
{"hanzi":"门","pinyin":"mén","options":["창문","문","방","길"],"correct":1},
{"hanzi":"窗户","pinyin":"chuānghu","options":["창문","문","벽","침대"],"correct":0},
{"hanzi":"墙","pinyin":"qiáng","options":["벽","문","창문","바닥"],"correct":0},
{"hanzi":"地板","pinyin":"dìbǎn","options":["바닥","천장","벽","문"],"correct":0},
{"hanzi":"桌子","pinyin":"zhuōzi","options":["의자","책상·탁자","침대","문"],"correct":1},
{"hanzi":"椅子","pinyin":"yǐzi","options":["책상","의자","침대","소파"],"correct":1},
{"hanzi":"床","pinyin":"chuáng","options":["의자","침대","책상","문"],"correct":1},
{"hanzi":"沙发","pinyin":"shāfā","options":["소파","침대","의자","책상"],"correct":0},
{"hanzi":"灯","pinyin":"dēng","options":["전등","문","창문","시계"],"correct":0},
{"hanzi":"空调","pinyin":"kōngtiáo","options":["에어컨","냉장고","세탁기","텔레비전"],"correct":0},
{"hanzi":"冰箱","pinyin":"bīngxiāng","options":["냉장고","에어컨","세탁기","전자레인지"],"correct":0},
{"hanzi":"洗衣机","pinyin":"xǐyījī","options":["세탁기","냉장고","에어컨","프린터"],"correct":0},
{"hanzi":"电视","pinyin":"diànshì","options":["영화","방송","텔레비전","전화"],"correct":2},
{"hanzi":"钥匙","pinyin":"yàoshi","options":["열쇠","지갑","가방","휴대폰"],"correct":0},
{"hanzi":"钱包","pinyin":"qiánbāo","options":["지갑","가방","상자","휴대폰"],"correct":0},
{"hanzi":"包","pinyin":"bāo","options":["가방","상자","봉투","옷"],"correct":0},
{"hanzi":"书包","pinyin":"shūbāo","options":["책가방","책상","공책","상자"],"correct":0},
{"hanzi":"行李","pinyin":"xíngli","options":["짐","가방","옷","상자"],"correct":0},
{"hanzi":"箱子","pinyin":"xiāngzi","options":["상자","가방","짐","봉투"],"correct":0},
{"hanzi":"礼物","pinyin":"lǐwù","options":["선물","물건","돈","표"],"correct":0},
{"hanzi":"东西","pinyin":"dōngxi","options":["물건","음식","옷","선물"],"correct":0},
{"hanzi":"票","pinyin":"piào","options":["돈","표","책","카드"],"correct":1},
{"hanzi":"发票","pinyin":"fāpiào","options":["영수증·세금계산서","표","카드","계약서"],"correct":0},
{"hanzi":"现金","pinyin":"xiànjīn","options":["카드","현금","영수증","가격"],"correct":1},
{"hanzi":"信用卡","pinyin":"xìnyòngkǎ","options":["신용카드","현금","영수증","통장"],"correct":0},
{"hanzi":"价格","pinyin":"jiàgé","options":["가격","품질","색깔","크기"],"correct":0},
{"hanzi":"质量","pinyin":"zhìliàng","options":["가격","품질","수량","모양"],"correct":1},
{"hanzi":"数量","pinyin":"shùliàng","options":["수량","가격","품질","색깔"],"correct":0},
{"hanzi":"折扣","pinyin":"zhékòu","options":["할인","가격","품질","영수증"],"correct":0},
{"hanzi":"打折","pinyin":"dǎzhé","options":["할인하다","계산하다","주문하다","교환하다"],"correct":0},
{"hanzi":"菜单","pinyin":"càidān","options":["메뉴","영수증","표","지도"],"correct":0},
{"hanzi":"早饭","pinyin":"zǎofàn","options":["점심","아침밥","저녁밥","간식"],"correct":1},
{"hanzi":"午饭","pinyin":"wǔfàn","options":["아침밥","저녁밥","점심","야식"],"correct":2},
{"hanzi":"晚饭","pinyin":"wǎnfàn","options":["저녁밥","점심","아침밥","간식"],"correct":0},
{"hanzi":"菜","pinyin":"cài","options":["과일","요리·채소","고기","간식"],"correct":1},
{"hanzi":"蔬菜","pinyin":"shūcài","options":["채소","과일","고기","음료"],"correct":0},
{"hanzi":"肉","pinyin":"ròu","options":["생선","고기","채소","밥"],"correct":1},
{"hanzi":"鸡蛋","pinyin":"jīdàn","options":["닭고기","계란","두부","우유"],"correct":1},
{"hanzi":"面包","pinyin":"miànbāo","options":["빵","국수","밥","과자"],"correct":0},
{"hanzi":"牛奶","pinyin":"niúnǎi","options":["우유","차","콜라","물"],"correct":0},
{"hanzi":"咖啡","pinyin":"kāfēi","options":["커피","우유","차","물"],"correct":0},
{"hanzi":"饮料","pinyin":"yǐnliào","options":["음료","음식","과일","채소"],"correct":0},
{"hanzi":"可乐","pinyin":"kělè","options":["콜라","커피","우유","차"],"correct":0},
{"hanzi":"果汁","pinyin":"guǒzhī","options":["주스","물","차","커피"],"correct":0},
{"hanzi":"啤酒","pinyin":"píjiǔ","options":["맥주","와인","차","커피"],"correct":0},
{"hanzi":"葡萄酒","pinyin":"pútáojiǔ","options":["포도주","맥주","커피","우유"],"correct":0},
{"hanzi":"酒","pinyin":"jiǔ","options":["술","차","우유","주스"],"correct":0},
{"hanzi":"汤","pinyin":"tāng","options":["국·탕","밥","면","빵"],"correct":0},
{"hanzi":"粥","pinyin":"zhōu","options":["죽","밥","국수","빵"],"correct":0},
{"hanzi":"饺子","pinyin":"jiǎozi","options":["만두","국수","밥","빵"],"correct":0},
{"hanzi":"包子","pinyin":"bāozi","options":["찐빵","만두","국수","밥"],"correct":0},
{"hanzi":"豆腐","pinyin":"dòufu","options":["두부","계란","고기","생선"],"correct":0},
{"hanzi":"鱼","pinyin":"yú","options":["생선","고기","채소","계란"],"correct":0},
{"hanzi":"鸡肉","pinyin":"jīròu","options":["닭고기","돼지고기","소고기","생선"],"correct":0},
{"hanzi":"牛肉","pinyin":"niúròu","options":["소고기","닭고기","돼지고기","양고기"],"correct":0},
{"hanzi":"猪肉","pinyin":"zhūròu","options":["돼지고기","소고기","닭고기","생선"],"correct":0},
{"hanzi":"羊肉","pinyin":"yángròu","options":["양고기","소고기","돼지고기","닭고기"],"correct":0},
{"hanzi":"烤鸭","pinyin":"kǎoyā","options":["구운 오리","닭고기","생선찜","만두"],"correct":0},
{"hanzi":"火锅","pinyin":"huǒguō","options":["볶음밥","훠궈","국수","죽"],"correct":1},
{"hanzi":"炒饭","pinyin":"chǎofàn","options":["볶음밥","흰밥","국수","만두"],"correct":0},
{"hanzi":"炒面","pinyin":"chǎomiàn","options":["볶음면","볶음밥","탕면","죽"],"correct":0},
{"hanzi":"快餐","pinyin":"kuàicān","options":["디저트","패스트푸드","중국요리","음료"],"correct":1},
{"hanzi":"西红柿","pinyin":"xīhóngshì","options":["토마토","감자","오이","양파"],"correct":0},
{"hanzi":"土豆","pinyin":"tǔdòu","options":["감자","토마토","오이","당근"],"correct":0},
{"hanzi":"黄瓜","pinyin":"huángguā","options":["오이","감자","토마토","양파"],"correct":0},
{"hanzi":"胡萝卜","pinyin":"húluóbo","options":["당근","오이","감자","토마토"],"correct":0},
{"hanzi":"洋葱","pinyin":"yángcōng","options":["양파","당근","오이","감자"],"correct":0},
{"hanzi":"辣椒","pinyin":"làjiāo","options":["고추","마늘","양파","생강"],"correct":0},
{"hanzi":"大蒜","pinyin":"dàsuàn","options":["생강","마늘","고추","파"],"correct":1},
{"hanzi":"生姜","pinyin":"shēngjiāng","options":["마늘","생강","양파","고추"],"correct":1},
{"hanzi":"盐","pinyin":"yán","options":["설탕","소금","간장","식초"],"correct":1},
{"hanzi":"糖","pinyin":"táng","options":["소금","설탕","식초","고추"],"correct":1},
{"hanzi":"醋","pinyin":"cù","options":["간장","기름","식초","소금"],"correct":2},
{"hanzi":"油","pinyin":"yóu","options":["기름","소금","설탕","간장"],"correct":0},
{"hanzi":"酱油","pinyin":"jiàngyóu","options":["식초","간장","기름","소금"],"correct":1},
{"hanzi":"香蕉","pinyin":"xiāngjiāo","options":["수박","바나나","사과","귤"],"correct":1},
{"hanzi":"西瓜","pinyin":"xīguā","options":["수박","바나나","사과","포도"],"correct":0},
{"hanzi":"葡萄","pinyin":"pútao","options":["포도","수박","사과","배"],"correct":0},
{"hanzi":"梨","pinyin":"lí","options":["배","사과","포도","귤"],"correct":0},
{"hanzi":"橘子","pinyin":"júzi","options":["귤","사과","바나나","배"],"correct":0},
{"hanzi":"草莓","pinyin":"cǎoméi","options":["딸기","포도","수박","귤"],"correct":0},
{"hanzi":"芒果","pinyin":"mángguǒ","options":["망고","딸기","포도","수박"],"correct":0},
{"hanzi":"零食","pinyin":"língshí","options":["간식","과일","채소","음료"],"correct":0},
{"hanzi":"蛋糕","pinyin":"dàngāo","options":["케이크","사탕","과자","빵"],"correct":0},
{"hanzi":"饼干","pinyin":"bǐnggān","options":["과자·비스킷","케이크","사탕","빵"],"correct":0},
{"hanzi":"冰淇淋","pinyin":"bīngqílín","options":["아이스크림","케이크","사탕","주스"],"correct":0},
{"hanzi":"碗","pinyin":"wǎn","options":["그릇","병","잔","접시"],"correct":0},
{"hanzi":"盘子","pinyin":"pánzi","options":["접시","그릇","컵","병"],"correct":0},
{"hanzi":"杯子","pinyin":"bēizi","options":["그릇","컵","접시","병"],"correct":1},
{"hanzi":"筷子","pinyin":"kuàizi","options":["숟가락","젓가락","컵","그릇"],"correct":1},
{"hanzi":"勺子","pinyin":"sháozi","options":["숟가락","젓가락","접시","컵"],"correct":0},
{"hanzi":"瓶子","pinyin":"píngzi","options":["병","컵","접시","그릇"],"correct":0},
{"hanzi":"红","pinyin":"hóng","options":["빨갛다","파랗다","하얗다","검다"],"correct":0},
{"hanzi":"蓝","pinyin":"lán","options":["파랗다","빨갛다","노랗다","검다"],"correct":0},
{"hanzi":"黄","pinyin":"huáng","options":["노랗다","파랗다","하얗다","초록색이다"],"correct":0},
{"hanzi":"白","pinyin":"bái","options":["하얗다","검다","빨갛다","노랗다"],"correct":0},
{"hanzi":"黑","pinyin":"hēi","options":["검다","하얗다","파랗다","빨갛다"],"correct":0},
{"hanzi":"绿","pinyin":"lǜ","options":["초록색이다","노랗다","파랗다","검다"],"correct":0},
{"hanzi":"粉色","pinyin":"fěnsè","options":["분홍색","초록색","갈색","회색"],"correct":0},
{"hanzi":"灰色","pinyin":"huīsè","options":["회색","분홍색","갈색","보라색"],"correct":0},
{"hanzi":"紫色","pinyin":"zǐsè","options":["보라색","분홍색","회색","갈색"],"correct":0},
{"hanzi":"棕色","pinyin":"zōngsè","options":["갈색","보라색","회색","분홍색"],"correct":0},
{"hanzi":"颜色","pinyin":"yánsè","options":["색깔","모양","크기","가격"],"correct":0},
{"hanzi":"帽子","pinyin":"màozi","options":["모자","신발","바지","가방"],"correct":0},
{"hanzi":"鞋","pinyin":"xié","options":["신발","모자","셔츠","바지"],"correct":0},
{"hanzi":"袜子","pinyin":"wàzi","options":["양말","신발","모자","장갑"],"correct":0},
{"hanzi":"裤子","pinyin":"kùzi","options":["바지","치마","셔츠","외투"],"correct":0},
{"hanzi":"裙子","pinyin":"qúnzi","options":["치마","바지","셔츠","외투"],"correct":0},
{"hanzi":"衬衫","pinyin":"chènshān","options":["셔츠","바지","치마","모자"],"correct":0},
{"hanzi":"外套","pinyin":"wàitào","options":["외투","셔츠","바지","양말"],"correct":0},
{"hanzi":"毛衣","pinyin":"máoyī","options":["스웨터","외투","셔츠","바지"],"correct":0},
{"hanzi":"手套","pinyin":"shǒutào","options":["장갑","양말","모자","신발"],"correct":0},
{"hanzi":"围巾","pinyin":"wéijīn","options":["목도리","장갑","모자","양말"],"correct":0},
{"hanzi":"眼镜","pinyin":"yǎnjìng","options":["안경","모자","시계","열쇠"],"correct":0},
{"hanzi":"手表","pinyin":"shǒubiǎo","options":["손목시계","안경","지갑","열쇠"],"correct":0},
{"hanzi":"伞","pinyin":"sǎn","options":["우산","모자","가방","외투"],"correct":0},
{"hanzi":"路","pinyin":"lù","options":["길","차","문","다리"],"correct":0},
{"hanzi":"马路","pinyin":"mǎlù","options":["큰길·도로","역","공항","다리"],"correct":0},
{"hanzi":"街","pinyin":"jiē","options":["거리","길","시장","공원"],"correct":0},
{"hanzi":"桥","pinyin":"qiáo","options":["다리","길","문","창문"],"correct":0},
{"hanzi":"地铁","pinyin":"dìtiě","options":["지하철","기차","택시","버스"],"correct":0},
{"hanzi":"公共汽车","pinyin":"gōnggòng qìchē","options":["버스","택시","기차","비행기"],"correct":0},
{"hanzi":"汽车","pinyin":"qìchē","options":["자동차","자전거","택시","기차"],"correct":0},
{"hanzi":"火车","pinyin":"huǒchē","options":["버스","기차","택시","비행기"],"correct":1},
{"hanzi":"自行车","pinyin":"zìxíngchē","options":["오토바이","자전거","자동차","버스"],"correct":1},
{"hanzi":"飞机","pinyin":"fēijī","options":["기차","비행기","배","택시"],"correct":1},
{"hanzi":"船","pinyin":"chuán","options":["배","차","비행기","기차"],"correct":0},
{"hanzi":"地图","pinyin":"dìtú","options":["지도","사진","표","신문"],"correct":0},
{"hanzi":"地址","pinyin":"dìzhǐ","options":["주소","계정","이름","번호"],"correct":0},
{"hanzi":"城市","pinyin":"chéngshì","options":["도시","국가","고향","거리"],"correct":0},
{"hanzi":"地方","pinyin":"dìfāng","options":["장소·지방","도시","나라","거리"],"correct":0},
{"hanzi":"首都","pinyin":"shǒudū","options":["수도","도시","고향","지방"],"correct":0},
{"hanzi":"上海","pinyin":"shànghǎi","options":["상하이","베이징","서울","도쿄"],"correct":0},
{"hanzi":"日本","pinyin":"rìběn","options":["일본","중국","한국","미국"],"correct":0},
{"hanzi":"英国","pinyin":"yīngguó","options":["영국","미국","프랑스","독일"],"correct":0},
{"hanzi":"法国","pinyin":"fǎguó","options":["프랑스","영국","미국","독일"],"correct":0},
{"hanzi":"德国","pinyin":"déguó","options":["독일","프랑스","영국","미국"],"correct":0},
{"hanzi":"外国","pinyin":"wàiguó","options":["외국","중국","고향","나라"],"correct":0},
{"hanzi":"国家","pinyin":"guójiā","options":["국가","도시","고향","지방"],"correct":0},
{"hanzi":"故乡","pinyin":"gùxiāng","options":["고향","도시","나라","거리"],"correct":0},
{"hanzi":"附近","pinyin":"fùjìn","options":["먼 곳","근처","바깥","뒤쪽"],"correct":1},
{"hanzi":"旁边","pinyin":"pángbiān","options":["옆","앞","뒤","위"],"correct":0},
{"hanzi":"对面","pinyin":"duìmiàn","options":["옆","위","맞은편","안쪽"],"correct":2},
{"hanzi":"中间","pinyin":"zhōngjiān","options":["왼쪽","가운데","바깥","뒤쪽"],"correct":1},
{"hanzi":"前面","pinyin":"qiánmiàn","options":["뒤쪽","앞쪽","왼쪽","오른쪽"],"correct":1},
{"hanzi":"后面","pinyin":"hòumiàn","options":["앞쪽","뒤쪽","위쪽","아래쪽"],"correct":1},
{"hanzi":"里面","pinyin":"lǐmiàn","options":["밖","옆","안쪽","위"],"correct":2},
{"hanzi":"外面","pinyin":"wàimiàn","options":["안쪽","바깥쪽","가운데","옆"],"correct":1},
{"hanzi":"上面","pinyin":"shàngmiàn","options":["아래쪽","위쪽","앞쪽","뒤쪽"],"correct":1},
{"hanzi":"下面","pinyin":"xiàmiàn","options":["위쪽","아래쪽","옆쪽","안쪽"],"correct":1},
{"hanzi":"左边","pinyin":"zuǒbiān","options":["오른쪽","왼쪽","앞쪽","뒤쪽"],"correct":1},
{"hanzi":"右边","pinyin":"yòubiān","options":["왼쪽","오른쪽","위쪽","아래쪽"],"correct":1},
{"hanzi":"南边","pinyin":"nánbiān","options":["북쪽","남쪽","동쪽","서쪽"],"correct":1},
{"hanzi":"北边","pinyin":"běibiān","options":["남쪽","동쪽","북쪽","서쪽"],"correct":2},
{"hanzi":"东边","pinyin":"dōngbiān","options":["동쪽","서쪽","남쪽","북쪽"],"correct":0},
{"hanzi":"西边","pinyin":"xībiān","options":["동쪽","남쪽","서쪽","북쪽"],"correct":2},
{"hanzi":"位置","pinyin":"wèizhì","options":["위치","거리","속도","범위"],"correct":0},
{"hanzi":"方向","pinyin":"fāngxiàng","options":["방향","위치","거리","범위"],"correct":0},
{"hanzi":"距离","pinyin":"jùlí","options":["거리","속도","위치","방향"],"correct":0},
{"hanzi":"座位","pinyin":"zuòwèi","options":["좌석","방","문","창문"],"correct":0},
{"hanzi":"入口","pinyin":"rùkǒu","options":["입구","출구","문 앞","복도"],"correct":0},
{"hanzi":"出口","pinyin":"chūkǒu","options":["출구","입구","문 앞","복도"],"correct":0},
{"hanzi":"电梯","pinyin":"diàntī","options":["엘리베이터","계단","문","창문"],"correct":0},
{"hanzi":"楼梯","pinyin":"lóutī","options":["계단","엘리베이터","복도","문"],"correct":0},
{"hanzi":"走廊","pinyin":"zǒuláng","options":["복도","계단","엘리베이터","방"],"correct":0},
{"hanzi":"售货员","pinyin":"shòuhuòyuán","options":["판매원","손님","의사","교사"],"correct":0},
{"hanzi":"顾客","pinyin":"gùkè","options":["고객","직원","사장","운전사"],"correct":0},
{"hanzi":"客人","pinyin":"kèrén","options":["손님","친구","가족","직원"],"correct":0},
{"hanzi":"顾客服务","pinyin":"gùkè fúwù","options":["고객 서비스","상품 가격","계산대","할인 행사"],"correct":0},
{"hanzi":"收银台","pinyin":"shōuyíntái","options":["계산대","입구","진열대","창고"],"correct":0},
{"hanzi":"货架","pinyin":"huòjià","options":["진열대","계산대","창고","입구"],"correct":0},
{"hanzi":"商品","pinyin":"shāngpǐn","options":["상품","가격","수량","영수증"],"correct":0},
{"hanzi":"产品","pinyin":"chǎnpǐn","options":["제품","가격","수량","품질"],"correct":0},
{"hanzi":"品牌","pinyin":"pǐnpái","options":["브랜드","가격","수량","가게"],"correct":0},
{"hanzi":"护照","pinyin":"hùzhào","options":["여권","표","카드","영수증"],"correct":0},
{"hanzi":"签证","pinyin":"qiānzhèng","options":["비자","여권","표","계약서"],"correct":0},
{"hanzi":"身份证","pinyin":"shēnfènzhèng","options":["신분증","여권","비자","영수증"],"correct":0},
{"hanzi":"机票","pinyin":"jīpiào","options":["비행기표","기차표","입장권","영수증"],"correct":0},
{"hanzi":"火车票","pinyin":"huǒchēpiào","options":["기차표","비행기표","입장권","영수증"],"correct":0},
{"hanzi":"船票","pinyin":"chuánpiào","options":["배표","기차표","비행기표","입장권"],"correct":0},
{"hanzi":"门票","pinyin":"ménpiào","options":["입장권","기차표","비행기표","영수증"],"correct":0},
{"hanzi":"登机牌","pinyin":"dēngjīpái","options":["탑승권","여권","비자","영수증"],"correct":0},
{"hanzi":"航班","pinyin":"hángbān","options":["항공편","기차역","버스","택시"],"correct":0},
{"hanzi":"单程","pinyin":"dānchéng","options":["편도","왕복","출발","도착"],"correct":0},
{"hanzi":"往返","pinyin":"wǎngfǎn","options":["왕복","편도","출발","도착"],"correct":0},
{"hanzi":"行程","pinyin":"xíngchéng","options":["일정","가격","좌석","짐"],"correct":0},
{"hanzi":"路线","pinyin":"lùxiàn","options":["노선","지도","주소","방향"],"correct":0},
{"hanzi":"景点","pinyin":"jǐngdiǎn","options":["관광지","호텔","공항","은행"],"correct":0},
{"hanzi":"风景","pinyin":"fēngjǐng","options":["풍경","날씨","장소","지도"],"correct":0},
{"hanzi":"游客","pinyin":"yóukè","options":["관광객","가이드","직원","학생"],"correct":0},
{"hanzi":"导游","pinyin":"dǎoyóu","options":["가이드","운전사","손님","종업원"],"correct":0},
{"hanzi":"名胜古迹","pinyin":"míngshèng gǔjì","options":["명승고적","현대건물","공원","시장"],"correct":0},
{"hanzi":"登记","pinyin":"dēngjì","options":["등록하다","취소하다","거절하다","떠나다"],"correct":0},
{"hanzi":"报名","pinyin":"bàomíng","options":["신청하다","취소하다","거절하다","졸업하다"],"correct":0},
{"hanzi":"预订","pinyin":"yùdìng","options":["예약하다","취소하다","계산하다","출발하다"],"correct":0},
{"hanzi":"取消","pinyin":"qǔxiāo","options":["취소하다","예약하다","신청하다","참가하다"],"correct":0},
{"hanzi":"退票","pinyin":"tuì piào","options":["표를 환불하다","표를 사다","표를 검사하다","표를 예약하다"],"correct":0},
{"hanzi":"改签","pinyin":"gǎi qiān","options":["일정을 변경하다","표를 사다","표를 잃다","짐을 부치다"],"correct":0},
{"hanzi":"登机","pinyin":"dēngjī","options":["비행기에 탑승하다","예약하다","출발하다","도착하다"],"correct":0},
{"hanzi":"托运","pinyin":"tuōyùn","options":["위탁 운송하다","예약하다","계산하다","취소하다"],"correct":0},
{"hanzi":"安检","pinyin":"ānjiǎn","options":["보안 검사","건강검진","시험","등록"],"correct":0},
{"hanzi":"出差","pinyin":"chūchāi","options":["출장 가다","여행하다","휴가 가다","등교하다"],"correct":0},
{"hanzi":"度假","pinyin":"dùjià","options":["휴가를 보내다","출장 가다","출근하다","퇴근하다"],"correct":0},
{"hanzi":"迷路","pinyin":"mí lù","options":["길을 잃다","길을 묻다","표를 사다","차를 타다"],"correct":0},
{"hanzi":"问路","pinyin":"wèn lù","options":["길을 묻다","길을 잃다","짐을 찾다","표를 사다"],"correct":0},
{"hanzi":"换乘","pinyin":"huànchéng","options":["환승하다","출발하다","도착하다","예약하다"],"correct":0},
{"hanzi":"堵车","pinyin":"dǔchē","options":["차가 막히다","차를 타다","길을 묻다","표를 사다"],"correct":0},
{"hanzi":"开车","pinyin":"kāi chē","options":["운전하다","차를 기다리다","차를 세우다","환승하다"],"correct":0},
{"hanzi":"坐车","pinyin":"zuò chē","options":["차를 타다","차를 몰다","차를 고치다","차를 기다리다"],"correct":0},
{"hanzi":"下车","pinyin":"xià chē","options":["차에서 내리다","차를 타다","차를 몰다","차를 기다리다"],"correct":0},
{"hanzi":"上车","pinyin":"shàng chē","options":["차에 타다","차에서 내리다","차를 고치다","길을 묻다"],"correct":0},
{"hanzi":"停车","pinyin":"tíng chē","options":["주차하다","차를 타다","환승하다","출발하다"],"correct":0},
{"hanzi":"加油站","pinyin":"jiāyóuzhàn","options":["주유소","정류장","공항","역"],"correct":0},
{"hanzi":"停车场","pinyin":"tíngchēchǎng","options":["주차장","기차역","공항","정류장"],"correct":0},
{"hanzi":"红绿灯","pinyin":"hónglǜdēng","options":["신호등","횡단보도","정류장","주차장"],"correct":0},
{"hanzi":"人行道","pinyin":"rénxíngdào","options":["보도","차도","다리","터널"],"correct":0},
{"hanzi":"十字路口","pinyin":"shízì lùkǒu","options":["사거리","정류장","주차장","공항"],"correct":0},
{"hanzi":"司机师傅","pinyin":"sījī shīfu","options":["기사님","가이드","승객","판매원"],"correct":0},
{"hanzi":"乘客","pinyin":"chéngkè","options":["승객","기사","가이드","손님"],"correct":0},
{"hanzi":"站台","pinyin":"zhàntái","options":["승강장","계산대","교실","사무실"],"correct":0},
{"hanzi":"候车室","pinyin":"hòuchēshì","options":["대합실","교실","회의실","화장실"],"correct":0},
{"hanzi":"卧铺","pinyin":"wòpù","options":["침대칸","좌석","입구","창가"],"correct":0},
{"hanzi":"硬座","pinyin":"yìngzuò","options":["일반 좌석","침대칸","창가 자리","통로 자리"],"correct":0},
{"hanzi":"软卧","pinyin":"ruǎnwò","options":["고급 침대칸","일반 좌석","입석","통로 자리"],"correct":0},
{"hanzi":"爱好","pinyin":"àihào","options":["취미","흥미","습관","성격"],"correct":0},
{"hanzi":"兴趣","pinyin":"xìngqù","options":["흥미","습관","취미","경험"],"correct":0},
{"hanzi":"音乐","pinyin":"yīnyuè","options":["노래","음악","영화","춤"],"correct":1},
{"hanzi":"电影","pinyin":"diànyǐng","options":["영화","음악","신문","드라마"],"correct":0},
{"hanzi":"小说","pinyin":"xiǎoshuō","options":["소설","신문","잡지","사전"],"correct":0},
{"hanzi":"故事","pinyin":"gùshi","options":["이야기","역사","뉴스","문장"],"correct":0},
{"hanzi":"画","pinyin":"huà","options":["그림","사진","지도","신문"],"correct":0},
{"hanzi":"照片","pinyin":"zhàopiàn","options":["사진","영화","그림","신문"],"correct":0},
{"hanzi":"图片","pinyin":"túpiàn","options":["그림·이미지","사진","문자","신문"],"correct":0},
{"hanzi":"游戏","pinyin":"yóuxì","options":["게임","운동","음악","영화"],"correct":0},
{"hanzi":"篮球","pinyin":"lánqiú","options":["농구","축구","배구","탁구"],"correct":0},
{"hanzi":"足球","pinyin":"zúqiú","options":["축구","농구","배구","테니스"],"correct":0},
{"hanzi":"排球","pinyin":"páiqiú","options":["배구","농구","축구","탁구"],"correct":0},
{"hanzi":"乒乓球","pinyin":"pīngpāngqiú","options":["탁구","농구","축구","배구"],"correct":0},
{"hanzi":"羽毛球","pinyin":"yǔmáoqiú","options":["배드민턴","탁구","농구","축구"],"correct":0},
{"hanzi":"网球","pinyin":"wǎngqiú","options":["테니스","축구","탁구","배구"],"correct":0},
{"hanzi":"爬山","pinyin":"páshān","options":["등산하다","수영하다","산책하다","노래하다"],"correct":0},
{"hanzi":"钓鱼","pinyin":"diàoyú","options":["낚시하다","수영하다","등산하다","사진 찍다"],"correct":0},
{"hanzi":"画画","pinyin":"huà huà","options":["그림을 그리다","사진을 찍다","노래하다","춤추다"],"correct":0},
{"hanzi":"弹钢琴","pinyin":"tán gāngqín","options":["피아노를 치다","노래하다","춤추다","그림을 그리다"],"correct":0},
{"hanzi":"拉小提琴","pinyin":"lā xiǎotíqín","options":["바이올린을 켜다","피아노를 치다","노래하다","춤추다"],"correct":0},
{"hanzi":"看书","pinyin":"kàn shū","options":["책을 보다","음악을 듣다","영화를 보다","공부하다"],"correct":0},
{"hanzi":"听音乐","pinyin":"tīng yīnyuè","options":["음악을 듣다","영화를 보다","책을 읽다","운동하다"],"correct":0},
{"hanzi":"看电影","pinyin":"kàn diànyǐng","options":["영화를 보다","음악을 듣다","책을 읽다","사진 찍다"],"correct":0},
{"hanzi":"逛街","pinyin":"guàngjiē","options":["거리를 돌아다니다","집에 머물다","차를 타다","길을 묻다"],"correct":0},
{"hanzi":"购物","pinyin":"gòuwù","options":["쇼핑하다","요리하다","운동하다","공부하다"],"correct":0},
{"hanzi":"网购","pinyin":"wǎnggòu","options":["인터넷 쇼핑하다","가게를 열다","카드를 긁다","돈을 찾다"],"correct":0},
{"hanzi":"休闲","pinyin":"xiūxián","options":["여가","근무","수업","시험"],"correct":0},
{"hanzi":"活动","pinyin":"huódòng","options":["활동","회의","시험","숙제"],"correct":0},
{"hanzi":"比赛","pinyin":"bǐsài","options":["시합","시험","회의","수업"],"correct":0},
{"hanzi":"观众","pinyin":"guānzhòng","options":["관중","선수","가수","배우"],"correct":0},
{"hanzi":"运动员","pinyin":"yùndòngyuán","options":["운동선수","관중","가수","배우"],"correct":0},
{"hanzi":"队","pinyin":"duì","options":["팀·줄","반","회사","장소"],"correct":0},
{"hanzi":"得分","pinyin":"défēn","options":["득점하다","실패하다","출발하다","예약하다"],"correct":0},
{"hanzi":"赢","pinyin":"yíng","options":["이기다","지다","시작하다","멈추다"],"correct":0},
{"hanzi":"输","pinyin":"shū","options":["지다","이기다","시작하다","완성하다"],"correct":0},
{"hanzi":"办公室文化","pinyin":"bàngōngshì wénhuà","options":["사무실 문화","학교 규칙","여행 일정","운동 경기"],"correct":0},
{"hanzi":"同事","pinyin":"tóngshì","options":["동료","친척","학생","손님"],"correct":0},
{"hanzi":"老板","pinyin":"lǎobǎn","options":["직원","사장","손님","운전사"],"correct":1},
{"hanzi":"员工","pinyin":"yuángōng","options":["직원","사장","손님","학생"],"correct":0},
{"hanzi":"主任","pinyin":"zhǔrèn","options":["주임","손님","학생","운전사"],"correct":0},
{"hanzi":"经理","pinyin":"jīnglǐ","options":["매니저","직원","손님","선생님"],"correct":0},
{"hanzi":"领导","pinyin":"lǐngdǎo","options":["지도자·이끌다","직원","손님","학생"],"correct":0},
{"hanzi":"会议","pinyin":"huìyì","options":["회의","수업","시험","파티"],"correct":0},
{"hanzi":"会场","pinyin":"huìchǎng","options":["회의장","교실","식당","공항"],"correct":0},
{"hanzi":"项目","pinyin":"xiàngmù","options":["프로젝트","문제","결과","이유"],"correct":0},
{"hanzi":"任务","pinyin":"rènwu","options":["임무","기회","목표","결과"],"correct":0},
{"hanzi":"计划","pinyin":"jìhuà","options":["계획","회의","약속","준비"],"correct":0},
{"hanzi":"安排","pinyin":"ānpái","options":["안배하다","취소하다","거절하다","삭제하다"],"correct":0},
{"hanzi":"组织","pinyin":"zǔzhī","options":["조직하다","취소하다","거절하다","잊다"],"correct":0},
{"hanzi":"管理","pinyin":"guǎnlǐ","options":["관리하다","삭제하다","거절하다","빌리다"],"correct":0},
{"hanzi":"主持","pinyin":"zhǔchí","options":["진행하다","취소하다","거절하다","삭제하다"],"correct":0},
{"hanzi":"发言","pinyin":"fāyán","options":["발언하다","듣다","기록하다","읽다"],"correct":0},
{"hanzi":"讨论","pinyin":"tǎolùn","options":["토론하다","대답하다","기억하다","연습하다"],"correct":0},
{"hanzi":"记录","pinyin":"jìlù","options":["기록하다","발언하다","질문하다","토론하다"],"correct":0},
{"hanzi":"报告","pinyin":"bàogào","options":["보고","계약","광고","표"],"correct":0},
{"hanzi":"总结","pinyin":"zǒngjié","options":["총결하다","시작하다","취소하다","잊다"],"correct":0},
{"hanzi":"分析","pinyin":"fēnxī","options":["분석하다","조사하다","복습하다","삭제하다"],"correct":0},
{"hanzi":"调查","pinyin":"diàochá","options":["조사하다","연습하다","복습하다","저장하다"],"correct":0},
{"hanzi":"研究","pinyin":"yánjiū","options":["연구하다","복습하다","운동하다","청소하다"],"correct":0},
{"hanzi":"资料","pinyin":"zīliào","options":["자료","정보","신문","편지"],"correct":0},
{"hanzi":"文件","pinyin":"wénjiàn","options":["파일·문서","웹사이트","소프트웨어","사진"],"correct":0},
{"hanzi":"表格","pinyin":"biǎogé","options":["표","문서","사진","지도"],"correct":0},
{"hanzi":"内容","pinyin":"nèiróng","options":["내용","제목","문장","단어"],"correct":0},
{"hanzi":"题目","pinyin":"tímù","options":["제목","내용","문장","단어"],"correct":0},
{"hanzi":"答案","pinyin":"dá'àn","options":["정답","문제","이유","방법"],"correct":0},
{"hanzi":"问题","pinyin":"wèntí","options":["문제","대답","방법","이유"],"correct":0},
{"hanzi":"方法","pinyin":"fāngfǎ","options":["방법","문제","결과","목표"],"correct":0},
{"hanzi":"原因","pinyin":"yuányīn","options":["이유","방법","결과","문제"],"correct":0},
{"hanzi":"结果","pinyin":"jiéguǒ","options":["결과","이유","방법","시작"],"correct":0},
{"hanzi":"目标","pinyin":"mùbiāo","options":["목표","결과","이유","방법"],"correct":0},
{"hanzi":"机会","pinyin":"jīhuì","options":["기회","계획","방법","이유"],"correct":0},
{"hanzi":"经验","pinyin":"jīngyàn","options":["경험","목표","계획","이유"],"correct":0},
{"hanzi":"能力","pinyin":"nénglì","options":["능력","기회","목표","이유"],"correct":0},
{"hanzi":"水平","pinyin":"shuǐpíng","options":["수준","가격","수량","거리"],"correct":0},
{"hanzi":"标准","pinyin":"biāozhǔn","options":["표준","가격","수량","주소"],"correct":0},
{"hanzi":"规定","pinyin":"guīdìng","options":["규정","문제","방법","계획"],"correct":0},
{"hanzi":"制度","pinyin":"zhìdù","options":["제도","규정","법률","계획"],"correct":0},
{"hanzi":"合同","pinyin":"hétong","options":["계약","영수증","표","광고"],"correct":0},
{"hanzi":"签名","pinyin":"qiānmíng","options":["서명하다","취소하다","검색하다","복사하다"],"correct":0},
{"hanzi":"证明","pinyin":"zhèngmíng","options":["증명하다","의심하다","반대하다","삭제하다"],"correct":0},
{"hanzi":"提供","pinyin":"tígōng","options":["제공하다","거절하다","삭제하다","잃다"],"correct":0},
{"hanzi":"服务","pinyin":"fúwù","options":["서비스","제품","가격","수량"],"correct":0},
{"hanzi":"保证","pinyin":"bǎozhèng","options":["보증하다","의심하다","거절하다","삭제하다"],"correct":0},
{"hanzi":"销售","pinyin":"xiāoshòu","options":["판매하다","구매하다","저장하다","환불하다"],"correct":0},
{"hanzi":"购买","pinyin":"gòumǎi","options":["구매하다","판매하다","환불하다","저장하다"],"correct":0},
{"hanzi":"生产","pinyin":"shēngchǎn","options":["생산하다","판매하다","구매하다","저장하다"],"correct":0},
{"hanzi":"生意","pinyin":"shēngyì","options":["장사","공부","여행","운동"],"correct":0},
{"hanzi":"买卖","pinyin":"mǎimài","options":["매매·거래","공부","운동","휴식"],"correct":0},
{"hanzi":"广告","pinyin":"guǎnggào","options":["광고","뉴스","통지","문제"],"correct":0},
{"hanzi":"通知","pinyin":"tōngzhī","options":["통지","문제","결과","이유"],"correct":0},
{"hanzi":"联系","pinyin":"liánxì","options":["연락하다","떠나다","기다리다","거절하다"],"correct":0},
{"hanzi":"合作","pinyin":"hézuò","options":["협력하다","반대하다","비교하다","연습하다"],"correct":0},
{"hanzi":"关系","pinyin":"guānxì","options":["관계","문제","방법","결과"],"correct":0},
{"hanzi":"影响","pinyin":"yǐngxiǎng","options":["영향","결과","이유","목표"],"correct":0},
{"hanzi":"作用","pinyin":"zuòyòng","options":["작용·역할","문제","이유","방법"],"correct":0},
{"hanzi":"效果","pinyin":"xiàoguǒ","options":["효과","원인","문제","계획"],"correct":0},
{"hanzi":"条件","pinyin":"tiáojiàn","options":["조건","결과","기회","목표"],"correct":0},
{"hanzi":"情况","pinyin":"qíngkuàng","options":["상황","문제","이유","방법"],"correct":0},
{"hanzi":"环境","pinyin":"huánjìng","options":["환경","상황","조건","장소"],"correct":0},
{"hanzi":"同学们","pinyin":"tóngxuémen","options":["학우들","선생님들","직원들","손님들"],"correct":0},
{"hanzi":"课程","pinyin":"kèchéng","options":["과정·수업","성적","숙제","학기"],"correct":0},
{"hanzi":"年级","pinyin":"niánjí","options":["학년","학교","학기","전공"],"correct":0},
{"hanzi":"班级","pinyin":"bānjí","options":["학급","학년","수업","시험"],"correct":0},
{"hanzi":"学期","pinyin":"xuéqī","options":["학기","학년","방학","수업"],"correct":0},
{"hanzi":"专业","pinyin":"zhuānyè","options":["전공","직업","수업","과목"],"correct":0},
{"hanzi":"科目","pinyin":"kēmù","options":["과목","교실","학년","시험"],"correct":0},
{"hanzi":"数学","pinyin":"shùxué","options":["수학","역사","중국어","음악"],"correct":0},
{"hanzi":"物理","pinyin":"wùlǐ","options":["물리","화학","수학","역사"],"correct":0},
{"hanzi":"化学","pinyin":"huàxué","options":["화학","물리","생물","수학"],"correct":0},
{"hanzi":"生物","pinyin":"shēngwù","options":["생물","화학","물리","역사"],"correct":0},
{"hanzi":"地理","pinyin":"dìlǐ","options":["지리","역사","수학","미술"],"correct":0},
{"hanzi":"历史","pinyin":"lìshǐ","options":["역사","이야기","문화","뉴스"],"correct":0},
{"hanzi":"文化","pinyin":"wénhuà","options":["문화","역사","문장","뉴스"],"correct":0},
{"hanzi":"美术","pinyin":"měishù","options":["미술","음악","체육","역사"],"correct":0},
{"hanzi":"体育","pinyin":"tǐyù","options":["체육","미술","음악","수학"],"correct":0},
{"hanzi":"英语","pinyin":"yīngyǔ","options":["영어","중국어","한국어","일본어"],"correct":0},
{"hanzi":"语言","pinyin":"yǔyán","options":["언어","문법","단어","문장"],"correct":0},
{"hanzi":"普通话","pinyin":"pǔtōnghuà","options":["표준 중국어","방언","외국어","한국어"],"correct":0},
{"hanzi":"方言","pinyin":"fāngyán","options":["방언","표준어","외국어","발음"],"correct":0},
{"hanzi":"语法","pinyin":"yǔfǎ","options":["문법","단어","발음","본문"],"correct":0},
{"hanzi":"词语","pinyin":"cíyǔ","options":["어휘","문법","문장","발음"],"correct":0},
{"hanzi":"单词","pinyin":"dāncí","options":["단어","문장","문법","단락"],"correct":0},
{"hanzi":"生词","pinyin":"shēngcí","options":["새 단어","문장","발음","성조"],"correct":0},
{"hanzi":"发音","pinyin":"fāyīn","options":["발음","문법","단어","뜻"],"correct":0},
{"hanzi":"声调","pinyin":"shēngdiào","options":["성조","발음","문법","문자"],"correct":0},
{"hanzi":"句子","pinyin":"jùzi","options":["문장","단어","문법","본문"],"correct":0},
{"hanzi":"段落","pinyin":"duànluò","options":["단락","문장","단어","제목"],"correct":0},
{"hanzi":"作业","pinyin":"zuòyè","options":["숙제","시험","수업","성적"],"correct":0},
{"hanzi":"成绩","pinyin":"chéngjì","options":["성적","시험","학기","숙제"],"correct":0},
{"hanzi":"课堂","pinyin":"kètáng","options":["교실 수업","숙제","시험","방학"],"correct":0},
{"hanzi":"上课","pinyin":"shàngkè","options":["수업하다","퇴근하다","쉬다","졸업하다"],"correct":0},
{"hanzi":"下课","pinyin":"xiàkè","options":["수업이 끝나다","수업하다","시험보다","출근하다"],"correct":0},
{"hanzi":"毕业","pinyin":"bìyè","options":["졸업하다","입학하다","수업하다","시험보다"],"correct":0},
{"hanzi":"入学","pinyin":"rùxué","options":["입학하다","졸업하다","복습하다","시험보다"],"correct":0},
{"hanzi":"及格","pinyin":"jígé","options":["합격하다","불합격하다","졸업하다","입학하다"],"correct":0},
{"hanzi":"不及格","pinyin":"bù jígé","options":["불합격하다","합격하다","입학하다","졸업하다"],"correct":0},
{"hanzi":"进步","pinyin":"jìnbù","options":["진보하다","후퇴하다","실패하다","멈추다"],"correct":0},
{"hanzi":"努力","pinyin":"nǔlì","options":["노력하다","쉬다","놀다","기다리다"],"correct":0},
{"hanzi":"提问","pinyin":"tíwèn","options":["질문하다","대답하다","설명하다","기억하다"],"correct":0},
{"hanzi":"翻译","pinyin":"fānyì","options":["번역하다","설명하다","질문하다","연습하다"],"correct":0},
{"hanzi":"表达","pinyin":"biǎodá","options":["표현하다","기록하다","비교하다","복습하다"],"correct":0},
{"hanzi":"表示","pinyin":"biǎoshì","options":["나타내다","기록하다","반대하다","잊다"],"correct":0},
{"hanzi":"交流","pinyin":"jiāoliú","options":["교류하다","복습하다","시험보다","기록하다"],"correct":0},
{"hanzi":"主要","pinyin":"zhǔyào","options":["주요하다","특별하다","간단하다","보통이다"],"correct":0},
{"hanzi":"基本","pinyin":"jīběn","options":["기본적인","특별한","복잡한","위험한"],"correct":0},
{"hanzi":"详细","pinyin":"xiángxì","options":["상세하다","간단하다","보통이다","위험하다"],"correct":0},
{"hanzi":"简略","pinyin":"jiǎnlüè","options":["간략하다","상세하다","복잡하다","정확하다"],"correct":0},
{"hanzi":"逻辑","pinyin":"luóji","options":["논리","문법","단어","제목"],"correct":0},
{"hanzi":"正确","pinyin":"zhèngquè","options":["정확하다","틀리다","복잡하다","위험하다"],"correct":0},
{"hanzi":"错误","pinyin":"cuòwù","options":["오류","정답","방법","기회"],"correct":0},
{"hanzi":"确认","pinyin":"quèrèn","options":["확인하다","취소하다","삭제하다","거절하다"],"correct":0},
{"hanzi":"确定","pinyin":"quèdìng","options":["확정하다","의심하다","거절하다","삭제하다"],"correct":0},
{"hanzi":"出席","pinyin":"chūxí","options":["참석하다","결석하다","떠나다","거절하다"],"correct":0},
{"hanzi":"缺席","pinyin":"quēxí","options":["결석하다","참석하다","초대하다","준비하다"],"correct":0},
{"hanzi":"常常","pinyin":"chángcháng","options":["가끔","자주","방금","곧"],"correct":1},
{"hanzi":"经常","pinyin":"jīngcháng","options":["항상·자주","아직","즉시","겨우"],"correct":0},
{"hanzi":"总是","pinyin":"zǒngshì","options":["가끔","늘·항상","아마","방금"],"correct":1},
{"hanzi":"一直","pinyin":"yìzhí","options":["계속","따로","가끔","이미"],"correct":0},
{"hanzi":"一起","pinyin":"yìqǐ","options":["혼자","함께","먼저","나중에"],"correct":1},
{"hanzi":"一块儿","pinyin":"yíkuàir","options":["따로","함께","방금","드디어"],"correct":1},
{"hanzi":"马上","pinyin":"mǎshàng","options":["이미","곧·바로","가끔","아마"],"correct":1},
{"hanzi":"立刻","pinyin":"lìkè","options":["즉시","나중에","천천히","가끔"],"correct":0},
{"hanzi":"刚","pinyin":"gāng","options":["아직","방금","항상","다시"],"correct":1},
{"hanzi":"刚才","pinyin":"gāngcái","options":["나중에","방금 전","언젠가","늘"],"correct":1},
{"hanzi":"已经","pinyin":"yǐjīng","options":["아직","이미","곧","가끔"],"correct":1},
{"hanzi":"还没","pinyin":"hái méi","options":["이미","아직 ~않다","곧","자주"],"correct":1},
{"hanzi":"正在","pinyin":"zhèngzài","options":["막 ~하고 있다","이미 했다","가끔 한다","곧 한다"],"correct":0},
{"hanzi":"正","pinyin":"zhèng","options":["마침 ~하는 중","이미","다시","따로"],"correct":0},
{"hanzi":"才","pinyin":"cái","options":["이미","겨우·이제야","또","늘"],"correct":1},
{"hanzi":"就","pinyin":"jiù","options":["곧·바로","아직","아마","따로"],"correct":0},
{"hanzi":"只","pinyin":"zhǐ","options":["모두","오직","다시","함께"],"correct":1},
{"hanzi":"仅仅","pinyin":"jǐnjǐn","options":["겨우·단지","모두","자주","곧"],"correct":0},
{"hanzi":"一共","pinyin":"yígòng","options":["따로","모두 합쳐","가끔","즉시"],"correct":1},
{"hanzi":"共同","pinyin":"gòngtóng","options":["공동으로","혼자","가끔","방금"],"correct":0},
{"hanzi":"互相","pinyin":"hùxiāng","options":["서로","각자","혼자","바로"],"correct":0},
{"hanzi":"各自","pinyin":"gèzì","options":["함께","각자","서로","이미"],"correct":1},
{"hanzi":"另外","pinyin":"lìngwài","options":["또한·별도로","이미","겨우","항상"],"correct":0},
{"hanzi":"特别","pinyin":"tèbié","options":["보통","특별히","가끔","이미"],"correct":1},
{"hanzi":"尤其","pinyin":"yóuqí","options":["특히","대략","겨우","아직"],"correct":0},
{"hanzi":"非常","pinyin":"fēicháng","options":["조금","매우","가끔","방금"],"correct":1},
{"hanzi":"十分","pinyin":"shífēn","options":["매우","겨우","아마","아직"],"correct":0},
{"hanzi":"十分地","pinyin":"shífēn de","options":["매우","가끔","따로","곧"],"correct":0},
{"hanzi":"挺","pinyin":"tǐng","options":["꽤","전혀","이미","곧"],"correct":0},
{"hanzi":"相当","pinyin":"xiāngdāng","options":["상당히","전혀","가끔","아직"],"correct":0},
{"hanzi":"比较","pinyin":"bǐjiào","options":["비교적","전혀","즉시","방금"],"correct":0},
{"hanzi":"稍微","pinyin":"shāowēi","options":["조금","아주","늘","즉시"],"correct":0},
{"hanzi":"有点儿","pinyin":"yǒudiǎnr","options":["조금","매우","항상","모두"],"correct":0},
{"hanzi":"太","pinyin":"tài","options":["너무","조금","가끔","아마"],"correct":0},
{"hanzi":"更","pinyin":"gèng","options":["더욱","이미","따로","겨우"],"correct":0},
{"hanzi":"最","pinyin":"zuì","options":["가장","조금","서로","방금"],"correct":0},
{"hanzi":"越","pinyin":"yuè","options":["~할수록","이미","곧","혼자"],"correct":0},
{"hanzi":"越来越","pinyin":"yuèláiyuè","options":["점점 더","가끔","이미","각자"],"correct":0},
{"hanzi":"差不多","pinyin":"chàbuduō","options":["거의·비슷하다","전혀 아니다","매우 적다","곧"],"correct":0},
{"hanzi":"大概","pinyin":"dàgài","options":["대략·아마","반드시","전혀","이미"],"correct":0},
{"hanzi":"可能","pinyin":"kěnéng","options":["반드시","아마·가능하다","절대","이미"],"correct":1},
{"hanzi":"也许","pinyin":"yěxǔ","options":["아마도","반드시","전혀","이미"],"correct":0},
{"hanzi":"一定","pinyin":"yídìng","options":["아마","반드시","가끔","방금"],"correct":1},
{"hanzi":"必须","pinyin":"bìxū","options":["반드시","아마도","가끔","조금"],"correct":0},
{"hanzi":"千万","pinyin":"qiānwàn","options":["절대로·부디","대략","조금","이미"],"correct":0},
{"hanzi":"最好","pinyin":"zuìhǎo","options":["가장 좋게·되도록","가끔","방금","각자"],"correct":0},
{"hanzi":"还是","pinyin":"háishi","options":["여전히·그래도","곧","겨우","따로"],"correct":0},
{"hanzi":"仍然","pinyin":"réngrán","options":["여전히","즉시","가끔","방금"],"correct":0},
{"hanzi":"依然","pinyin":"yīrán","options":["여전히","방금","따로","겨우"],"correct":0},
{"hanzi":"重新","pinyin":"chóngxīn","options":["다시·새로","아직","곧","대략"],"correct":0},
{"hanzi":"再一次","pinyin":"zài yí cì","options":["다시 한 번","단 한 번","곧","따로"],"correct":0},
{"hanzi":"又","pinyin":"yòu","options":["또","아직","겨우","즉시"],"correct":0},
{"hanzi":"再","pinyin":"zài","options":["다시","이미","방금","서로"],"correct":0},
{"hanzi":"先","pinyin":"xiān","options":["먼저","나중에","함께","이미"],"correct":0},
{"hanzi":"然后","pinyin":"ránhòu","options":["그런 다음","먼저","그러나","그래서"],"correct":0},
{"hanzi":"最后","pinyin":"zuìhòu","options":["마지막에","처음에","바로","자주"],"correct":0},
{"hanzi":"终于","pinyin":"zhōngyú","options":["드디어","가끔","방금","아마"],"correct":0},
{"hanzi":"原来","pinyin":"yuánlái","options":["원래·알고 보니","즉시","따로","가끔"],"correct":0},
{"hanzi":"本来","pinyin":"běnlái","options":["본래","갑자기","대략","아직"],"correct":0},
{"hanzi":"突然","pinyin":"tūrán","options":["갑자기","천천히","자주","이미"],"correct":0},
{"hanzi":"忽然","pinyin":"hūrán","options":["갑자기","미리","계속","가끔"],"correct":0},
{"hanzi":"慢慢","pinyin":"mànmàn","options":["천천히","빨리","즉시","이미"],"correct":0},
{"hanzi":"赶快","pinyin":"gǎnkuài","options":["서둘러","천천히","가끔","아직"],"correct":0},
{"hanzi":"赶紧","pinyin":"gǎnjǐn","options":["서둘러","천천히","대략","따로"],"correct":0},
{"hanzi":"顺便","pinyin":"shùnbiàn","options":["하는 김에","일부러","즉시","가끔"],"correct":0},
{"hanzi":"故意","pinyin":"gùyì","options":["일부러","우연히","방금","함께"],"correct":0},
{"hanzi":"偶尔","pinyin":"ǒu'ěr","options":["가끔","늘","즉시","이미"],"correct":0},
{"hanzi":"从来","pinyin":"cónglái","options":["여태껏","곧","함께","방금"],"correct":0},
{"hanzi":"从不","pinyin":"cóng bù","options":["전혀 ~하지 않다","자주 하다","곧 하다","이미 하다"],"correct":0},
{"hanzi":"平时","pinyin":"píngshí","options":["평소에","방금","나중에","즉시"],"correct":0},
{"hanzi":"一般","pinyin":"yìbān","options":["일반적으로","특별히","겨우","즉시"],"correct":0},
{"hanzi":"通常","pinyin":"tōngcháng","options":["보통","가끔","갑자기","이미"],"correct":0},
{"hanzi":"按时","pinyin":"ànshí","options":["제시간에","늦게","가끔","따로"],"correct":0},
{"hanzi":"提前","pinyin":"tíqián","options":["앞당겨·미리","늦게","방금","따로"],"correct":0},
{"hanzi":"准时","pinyin":"zhǔnshí","options":["정시에","늦게","가끔","곧"],"correct":0},
{"hanzi":"及时","pinyin":"jíshí","options":["제때에","늦게","가끔","방금"],"correct":0},
{"hanzi":"亲自","pinyin":"qīnzì","options":["직접","대신","함께","우연히"],"correct":0},
{"hanzi":"直接","pinyin":"zhíjiē","options":["직접","간접적으로","가끔","이미"],"correct":0},
{"hanzi":"间接","pinyin":"jiànjiē","options":["간접적으로","직접","바로","항상"],"correct":0},
{"hanzi":"轻轻","pinyin":"qīngqīng","options":["살살","세게","빨리","갑자기"],"correct":0},
{"hanzi":"偷偷","pinyin":"tōutōu","options":["몰래","공개적으로","함께","바로"],"correct":0},
{"hanzi":"悄悄","pinyin":"qiāoqiāo","options":["조용히·몰래","시끄럽게","빨리","자주"],"correct":0},
{"hanzi":"正式","pinyin":"zhèngshì","options":["공식적으로","몰래","대략","우연히"],"correct":0},
{"hanzi":"主要地","pinyin":"zhǔyào de","options":["주로","가끔","방금","따로"],"correct":0},
{"hanzi":"完全","pinyin":"wánquán","options":["완전히","조금","대략","가끔"],"correct":0},
{"hanzi":"几乎","pinyin":"jīhū","options":["거의","전혀","즉시","따로"],"correct":0},
{"hanzi":"根本","pinyin":"gēnběn","options":["근본적으로·전혀","가끔","방금","아마"],"correct":0},
{"hanzi":"到底","pinyin":"dàodǐ","options":["도대체·끝까지","가끔","함께","이미"],"correct":0},
{"hanzi":"难道","pinyin":"nándào","options":["설마","분명히","곧","방금"],"correct":0},
{"hanzi":"恐怕","pinyin":"kǒngpà","options":["아마도·염려컨대","반드시","즉시","자주"],"correct":0},
{"hanzi":"却","pinyin":"què","options":["오히려·그런데","그래서","그리고","또는"],"correct":0},
{"hanzi":"反而","pinyin":"fǎn'ér","options":["오히려","따라서","먼저","이미"],"correct":0},
{"hanzi":"因此","pinyin":"yīncǐ","options":["그래서·따라서","하지만","또는","그리고"],"correct":0},
{"hanzi":"所以","pinyin":"suǒyǐ","options":["그래서","하지만","또는","그리고"],"correct":0},
{"hanzi":"因为","pinyin":"yīnwèi","options":["왜냐하면","그래서","하지만","또는"],"correct":0},
{"hanzi":"虽然","pinyin":"suīrán","options":["비록","그래서","만약","그리고"],"correct":0},
{"hanzi":"但是","pinyin":"dànshì","options":["하지만","그래서","그리고","또는"],"correct":0},
{"hanzi":"可是","pinyin":"kěshì","options":["하지만","따라서","그리고","만약"],"correct":0},
{"hanzi":"如果","pinyin":"rúguǒ","options":["만약","비록","그래서","하지만"],"correct":0},
{"hanzi":"要是","pinyin":"yàoshi","options":["만약","그러나","따라서","비록"],"correct":0},
{"hanzi":"或者","pinyin":"huòzhě","options":["또는","그리고","하지만","그래서"],"correct":0},
{"hanzi":"而且","pinyin":"érqiě","options":["게다가","하지만","또는","그래서"],"correct":0},
{"hanzi":"并且","pinyin":"bìngqiě","options":["그리고 또한","하지만","만약","그러므로"],"correct":0},
{"hanzi":"不过","pinyin":"búguò","options":["다만·하지만","그래서","또는","왜냐하면"],"correct":0},
{"hanzi":"比如","pinyin":"bǐrú","options":["예를 들면","따라서","하지만","만약"],"correct":0},
{"hanzi":"例如","pinyin":"lìrú","options":["예를 들어","그래서","하지만","또는"],"correct":0},
{"hanzi":"关于","pinyin":"guānyú","options":["~에 관하여","~때문에","~부터","~까지"],"correct":0},
{"hanzi":"为了","pinyin":"wèile","options":["~을 위하여","~부터","~처럼","~보다"],"correct":0},
{"hanzi":"按照","pinyin":"ànzhào","options":["~에 따라","~을 위해","~보다","~부터"],"correct":0},
{"hanzi":"根据","pinyin":"gēnjù","options":["~에 근거하여","~까지","~처럼","~와"],"correct":0},
{"hanzi":"通过","pinyin":"tōngguò","options":["~을 통해","~부터","~보다","~때문에"],"correct":0},
{"hanzi":"除了","pinyin":"chúle","options":["~을 제외하고","~때문에","~까지","~처럼"],"correct":0},
{"hanzi":"由于","pinyin":"yóuyú","options":["~때문에","~부터","~까지","~와"],"correct":0},
{"hanzi":"对于","pinyin":"duìyú","options":["~에 대하여","~부터","~까지","~처럼"],"correct":0},
{"hanzi":"向","pinyin":"xiàng","options":["~을 향해","~부터","~까지","~없이"],"correct":0},
{"hanzi":"往","pinyin":"wǎng","options":["~쪽으로","~부터","~까지","~보다"],"correct":0},
{"hanzi":"从","pinyin":"cóng","options":["~부터","~까지","~와","~보다"],"correct":0},
{"hanzi":"离","pinyin":"lí","options":["~에서 떨어져","~까지","~와","~보다"],"correct":0},
{"hanzi":"比","pinyin":"bǐ","options":["~보다","~부터","~까지","~와"],"correct":0},
{"hanzi":"被","pinyin":"bèi","options":["~에게 당하다","~부터","~까지","~와"],"correct":0},
{"hanzi":"把","pinyin":"bǎ","options":["~을·를 처리하여","~와","~부터","~까지"],"correct":0},
{"hanzi":"让","pinyin":"ràng","options":["~하게 하다","~보다","~부터","~없이"],"correct":0},
{"hanzi":"使","pinyin":"shǐ","options":["~하게 만들다","~에게서","~까지","~없이"],"correct":0},
{"hanzi":"张","pinyin":"zhāng","options":["장","권","대","마리"],"correct":0},
{"hanzi":"只","pinyin":"zhī","options":["마리·짝","권","장","잔"],"correct":0},
{"hanzi":"条","pinyin":"tiáo","options":["줄·마리","권","대","송이"],"correct":0},
{"hanzi":"件","pinyin":"jiàn","options":["건·벌","잔","병","권"],"correct":0},
{"hanzi":"位","pinyin":"wèi","options":["분·명","개","권","장"],"correct":0},
{"hanzi":"名","pinyin":"míng","options":["명","잔","권","대"],"correct":0},
{"hanzi":"双","pinyin":"shuāng","options":["켤레","장","권","대"],"correct":0},
{"hanzi":"辆","pinyin":"liàng","options":["대·량","권","잔","벌"],"correct":0},
{"hanzi":"匹","pinyin":"pǐ","options":["필·마리","권","잔","장"],"correct":0},
{"hanzi":"头","pinyin":"tóu","options":["마리","권","장","잔"],"correct":0},
{"hanzi":"支","pinyin":"zhī","options":["자루·개비","권","마리","벌"],"correct":0},
{"hanzi":"枝","pinyin":"zhī","options":["가지·송이","대","권","잔"],"correct":0},
{"hanzi":"朵","pinyin":"duǒ","options":["송이","권","대","잔"],"correct":0},
{"hanzi":"棵","pinyin":"kē","options":["그루","권","잔","대"],"correct":0},
{"hanzi":"颗","pinyin":"kē","options":["알·颗","권","대","잔"],"correct":0},
{"hanzi":"粒","pinyin":"lì","options":["알갱이","권","장","대"],"correct":0},
{"hanzi":"片","pinyin":"piàn","options":["조각·편","권","잔","대"],"correct":0},
{"hanzi":"块儿","pinyin":"kuàir","options":["조각·덩어리","권","잔","대"],"correct":0},
{"hanzi":"把","pinyin":"bǎ","options":["자루·손잡이 있는 물건","권","마리","잔"],"correct":0},
{"hanzi":"顶","pinyin":"dǐng","options":["정·개","권","대","잔"],"correct":0},
{"hanzi":"台","pinyin":"tái","options":["대","권","마리","벌"],"correct":0},
{"hanzi":"部","pinyin":"bù","options":["대·편","잔","송이","벌"],"correct":0},
{"hanzi":"家","pinyin":"jiā","options":["집·업체 수량사","잔","권","마리"],"correct":0},
{"hanzi":"所","pinyin":"suǒ","options":["곳·채","권","잔","마리"],"correct":0},
{"hanzi":"间","pinyin":"jiān","options":["칸·방","권","대","마리"],"correct":0},
{"hanzi":"座","pinyin":"zuò","options":["채·좌","권","잔","벌"],"correct":0},
{"hanzi":"层","pinyin":"céng","options":["층","권","마리","잔"],"correct":0},
{"hanzi":"班","pinyin":"bān","options":["편·반","잔","권","마리"],"correct":0},
{"hanzi":"门","pinyin":"mén","options":["과목 수량사","대","잔","마리"],"correct":0},
{"hanzi":"节","pinyin":"jié","options":["교시·마디","권","대","잔"],"correct":0},
{"hanzi":"篇","pinyin":"piān","options":["편","권","잔","대"],"correct":0},
{"hanzi":"封","pinyin":"fēng","options":["통","권","마리","대"],"correct":0},
{"hanzi":"份","pinyin":"fèn","options":["부·몫","권","잔","마리"],"correct":0},
{"hanzi":"套","pinyin":"tào","options":["세트·벌","권","잔","마리"],"correct":0},
{"hanzi":"瓶","pinyin":"píng","options":["병","권","마리","장"],"correct":0},
{"hanzi":"杯","pinyin":"bēi","options":["잔·컵","권","마리","대"],"correct":0},
{"hanzi":"碗","pinyin":"wǎn","options":["그릇","권","마리","대"],"correct":0},
{"hanzi":"盘","pinyin":"pán","options":["접시","권","대","마리"],"correct":0},
{"hanzi":"盒","pinyin":"hé","options":["상자·갑","권","잔","대"],"correct":0},
{"hanzi":"袋","pinyin":"dài","options":["봉지","권","마리","잔"],"correct":0},
{"hanzi":"公斤","pinyin":"gōngjīn","options":["킬로그램","미터","리터","킬로미터"],"correct":0},
{"hanzi":"斤","pinyin":"jīn","options":["근","그램","미터","리터"],"correct":0},
{"hanzi":"克","pinyin":"kè","options":["그램","킬로미터","미터","리터"],"correct":0},
{"hanzi":"米","pinyin":"mǐ","options":["미터","그램","리터","킬로그램"],"correct":0},
{"hanzi":"公里","pinyin":"gōnglǐ","options":["킬로미터","미터","그램","리터"],"correct":0},
{"hanzi":"厘米","pinyin":"límǐ","options":["센티미터","킬로미터","리터","그램"],"correct":0},
{"hanzi":"升","pinyin":"shēng","options":["리터","미터","그램","킬로미터"],"correct":0},
{"hanzi":"毫升","pinyin":"háoshēng","options":["밀리리터","그램","센티미터","킬로미터"],"correct":0},
{"hanzi":"遍","pinyin":"biàn","options":["번·회","권","잔","마리"],"correct":0},
{"hanzi":"趟","pinyin":"tàng","options":["차례·왕복","권","잔","마리"],"correct":0},
{"hanzi":"回","pinyin":"huí","options":["회·번","잔","권","마리"],"correct":0},
{"hanzi":"场","pinyin":"chǎng","options":["차례·경기","권","잔","마리"],"correct":0},
{"hanzi":"顿","pinyin":"dùn","options":["끼·번","권","잔","대"],"correct":0},
{"hanzi":"番","pinyin":"fān","options":["차례·번","권","잔","대"],"correct":0},
{"hanzi":"阵","pinyin":"zhèn","options":["한바탕","권","잔","마리"],"correct":0},
{"hanzi":"批","pinyin":"pī","options":["무리·차수","권","잔","마리"],"correct":0},
{"hanzi":"群","pinyin":"qún","options":["무리","권","잔","대"],"correct":0},
{"hanzi":"组","pinyin":"zǔ","options":["조·그룹","권","잔","마리"],"correct":0},
{"hanzi":"对","pinyin":"duì","options":["쌍","권","잔","마리"],"correct":0},
{"hanzi":"副","pinyin":"fù","options":["벌·쌍","권","잔","대"],"correct":0},
{"hanzi":"段","pinyin":"duàn","options":["단락·구간","권","잔","마리"],"correct":0},
{"hanzi":"句","pinyin":"jù","options":["마디·문장","권","잔","대"],"correct":0},
{"hanzi":"行","pinyin":"háng","options":["줄","권","잔","마리"],"correct":0},
{"hanzi":"页","pinyin":"yè","options":["쪽·페이지","권","잔","마리"],"correct":0},
{"hanzi":"号","pinyin":"hào","options":["호·사이즈","권","잔","마리"],"correct":0},
{"hanzi":"级","pinyin":"jí","options":["급·등급","권","잔","마리"],"correct":0},
{"hanzi":"种","pinyin":"zhǒng","options":["종류","권","잔","마리"],"correct":0},
{"hanzi":"类","pinyin":"lèi","options":["부류","권","잔","마리"],"correct":0},
{"hanzi":"样","pinyin":"yàng","options":["종류·모양","권","잔","마리"],"correct":0},
{"hanzi":"样子","pinyin":"yàngzi","options":["모양·모습","수량","가격","색깔"],"correct":0},
{"hanzi":"心情","pinyin":"xīnqíng","options":["기분","성격","습관","능력"],"correct":0},
{"hanzi":"情绪","pinyin":"qíngxù","options":["정서·감정","습관","능력","경험"],"correct":0},
{"hanzi":"感情","pinyin":"gǎnqíng","options":["감정","취미","습관","규정"],"correct":0},
{"hanzi":"心里","pinyin":"xīnlǐ","options":["마음속","겉모습","장소","방향"],"correct":0},
{"hanzi":"心疼","pinyin":"xīnténg","options":["마음 아파하다","즐거워하다","화내다","안심하다"],"correct":0},
{"hanzi":"感动","pinyin":"gǎndòng","options":["감동하다","실망하다","긴장하다","화내다"],"correct":0},
{"hanzi":"感兴趣","pinyin":"gǎn xìngqù","options":["흥미를 느끼다","화내다","걱정하다","후회하다"],"correct":0},
{"hanzi":"羡慕","pinyin":"xiànmù","options":["부러워하다","싫어하다","의심하다","걱정하다"],"correct":0},
{"hanzi":"嫉妒","pinyin":"jídù","options":["질투하다","감동하다","안심하다","만족하다"],"correct":0},
{"hanzi":"骄傲","pinyin":"jiāo'ào","options":["자랑스럽다·교만하다","겸손하다","슬프다","긴장하다"],"correct":0},
{"hanzi":"自豪","pinyin":"zìháo","options":["자랑스럽다","외롭다","무섭다","실망하다"],"correct":0},
{"hanzi":"惭愧","pinyin":"cánkuì","options":["부끄럽다","자랑스럽다","기쁘다","안심하다"],"correct":0},
{"hanzi":"尴尬","pinyin":"gāngà","options":["난처하다","기쁘다","편안하다","만족하다"],"correct":0},
{"hanzi":"郁闷","pinyin":"yùmèn","options":["답답하다·우울하다","즐겁다","안심하다","흥분하다"],"correct":0},
{"hanzi":"烦","pinyin":"fán","options":["짜증나다","기쁘다","편안하다","만족하다"],"correct":0},
{"hanzi":"讨厌","pinyin":"tǎoyàn","options":["싫어하다","좋아하다","존중하다","믿다"],"correct":0},
{"hanzi":"可惜","pinyin":"kěxī","options":["아쉽다","즐겁다","화나다","무섭다"],"correct":0},
{"hanzi":"遗憾","pinyin":"yíhàn","options":["유감스럽다","만족하다","기쁘다","안심하다"],"correct":0},
{"hanzi":"满意地","pinyin":"mǎnyì de","options":["만족스럽게","슬프게","화나게","걱정스럽게"],"correct":0},
{"hanzi":"兴奋","pinyin":"xīngfèn","options":["흥분하다","실망하다","외롭다","부끄럽다"],"correct":0},
{"hanzi":"平静","pinyin":"píngjìng","options":["평온하다","흥분하다","긴장하다","화나다"],"correct":0},
{"hanzi":"冷静","pinyin":"lěngjìng","options":["침착하다","흥분하다","실망하다","두렵다"],"correct":0},
{"hanzi":"着急","pinyin":"zháojí","options":["초조해하다","안심하다","기뻐하다","만족하다"],"correct":0},
{"hanzi":"焦虑","pinyin":"jiāolǜ","options":["초조하다·불안하다","평온하다","기쁘다","만족하다"],"correct":0},
{"hanzi":"忧愁","pinyin":"yōuchóu","options":["근심스럽다","즐겁다","흥분하다","자랑스럽다"],"correct":0},
{"hanzi":"痛苦","pinyin":"tòngkǔ","options":["고통스럽다","행복하다","편안하다","만족하다"],"correct":0},
{"hanzi":"难受","pinyin":"nánshòu","options":["괴롭다·불편하다","편안하다","즐겁다","만족하다"],"correct":0},
{"hanzi":"无聊","pinyin":"wúliáo","options":["심심하다","재미있다","기쁘다","흥분하다"],"correct":0},
{"hanzi":"有趣","pinyin":"yǒuqù","options":["재미있다","심심하다","짜증나다","무섭다"],"correct":0},
{"hanzi":"熟悉","pinyin":"shúxī","options":["익숙하다","낯설다","위험하다","복잡하다"],"correct":0},
{"hanzi":"陌生","pinyin":"mòshēng","options":["낯설다","익숙하다","친절하다","편안하다"],"correct":0},
{"hanzi":"亲切","pinyin":"qīnqiè","options":["친절하고 다정하다","낯설다","무섭다","심각하다"],"correct":0},
{"hanzi":"温柔","pinyin":"wēnróu","options":["부드럽고 상냥하다","거칠다","무섭다","심각하다"],"correct":0},
{"hanzi":"严格","pinyin":"yángé","options":["엄격하다","상냥하다","부드럽다","재미있다"],"correct":0},
{"hanzi":"害羞","pinyin":"hàixiū","options":["부끄러워하다","자랑스러워하다","화내다","안심하다"],"correct":0},
{"hanzi":"敏感","pinyin":"mǐngǎn","options":["민감하다","둔하다","편안하다","보통이다"],"correct":0},
{"hanzi":"镇定","pinyin":"zhèndìng","options":["침착하다","초조하다","흥분하다","실망하다"],"correct":0},
{"hanzi":"乐观","pinyin":"lèguān","options":["낙관적이다","비관적이다","초조하다","외롭다"],"correct":0},
{"hanzi":"悲观","pinyin":"bēiguān","options":["비관적이다","낙관적이다","만족하다","기쁘다"],"correct":0},
{"hanzi":"积极","pinyin":"jījí","options":["적극적이다","소극적이다","슬프다","두렵다"],"correct":0},
{"hanzi":"消极","pinyin":"xiāojí","options":["소극적이다","적극적이다","흥분하다","기쁘다"],"correct":0},
{"hanzi":"自信","pinyin":"zìxìn","options":["자신 있다","부끄럽다","초조하다","외롭다"],"correct":0},
{"hanzi":"自卑","pinyin":"zìbēi","options":["열등감을 느끼다","자신 있다","자랑스럽다","안심하다"],"correct":0},
{"hanzi":"冷淡","pinyin":"lěngdàn","options":["냉담하다","열정적이다","상냥하다","즐겁다"],"correct":0},
{"hanzi":"怀念","pinyin":"huáiniàn","options":["그리워하다","싫어하다","화내다","걱정하다"],"correct":0}
];


// =======================================================
// 2. 타임어택 및 카톡 강제 소환 시스템 (절대 수정 금지)
// =======================================================
let shuffledQuestions = []; 
let currentIdx = 0;
let score = 0;
let totalSolved = 0;
let isClickable = false;

let wrongAnswers = []; 
let correctAnswers = []; 

let currentCorrectText = "";
let timeLeft = 60;
let timerInterval = null;


let currentHanzi = ""; // ★ 추가: 현재 문제의 한자를 저장해서 발음재생에 사용


// =======================================================
// 발음이 여러 개인 다음자(多音字) 단어는 화면 병음과
// 실제 소리가 어긋나는 문제가 있어 퀴즈에서 완전히 제외합니다.
// =======================================================
const EXCLUDED_HANZI = [
    "还", "重", "长", "行", "地", "了", "得", "觉",
    "教", "差", "空", "只", "都", "为", "分", "干",
    "会", "乐", "少", "好", "着", "发", "种", "兴",
    "假", "便", "累"
];

function shuffleQuestions() {
    // quizData에서 다음자 단어를 제외한 목록으로 섞기 시작
    shuffledQuestions = quizData.filter(item => !EXCLUDED_HANZI.includes(item.hanzi));

    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
    }
}


function startTimer() {
    clearInterval(timerInterval); 
    timeLeft = 60;
    document.getElementById('timer-display').innerText = `⏱️ ${timeLeft}초`;

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer-display').innerText = `⏱️ ${timeLeft}초`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

function loadQuiz() {
    isClickable = true;
    
    if (currentIdx >= shuffledQuestions.length) {
        shuffleQuestions(); 
        currentIdx = 0;
    }

    document.getElementById('progress-text').innerText = `푼 문제: ${totalSolved}개`;

    const currentQuiz = shuffledQuestions[currentIdx];
    document.getElementById('pinyin').innerHTML = `<div>${currentQuiz.pinyin}</div>`;
    
    currentHanzi = currentQuiz.hanzi;   // ★ 추가
    speakChinese(currentQuiz.hanzi);    // ★ 추가 

    currentCorrectText = currentQuiz.options[currentQuiz.correct];

    let displayOptions = [...currentQuiz.options];
    for (let i = displayOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [displayOptions[i], displayOptions[j]] = [displayOptions[j], displayOptions[i]];
    }
    
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, index) => {
        if(btn && displayOptions[index]) {
            btn.innerText = displayOptions[index];
            btn.className = 'option-btn'; 
            btn.setAttribute('data-text', displayOptions[index]);
        }
    });
}

// =======================================================
// [수정] 오답 선택 시 정답이 여유롭게 깜빡인 뒤 다음 문제로 이동
// 정답을 맞혔을 때는 기존처럼 0.5초 후 바로 다음 문제로 넘어가지만,
// 오답을 선택했을 때는 정답 버튼이 0.6초 간격으로 깜빡여서
// 학습자가 정답을 눈으로 확인하고 암기할 시간을 벌어줍니다.
// =======================================================
function checkAnswer(selectedIdx) {
    if (!isClickable || timeLeft <= 0) return;
    isClickable = false;

    const buttons = document.querySelectorAll('.option-btn');
    const selectedButton = buttons[selectedIdx];
    const selectedText = selectedButton.getAttribute('data-text');

    totalSolved++;

    if (selectedText === currentCorrectText) {
        // ✅ 정답을 맞힌 경우: 초록색 표시 후 0.5초 뒤 바로 다음 문제로 이동
        selectedButton.classList.add('correct');
        score++;

        correctAnswers.push({
            hanzi: shuffledQuestions[currentIdx].hanzi,
            pinyin: shuffledQuestions[currentIdx].pinyin,
            meaning: currentCorrectText
        });

        setTimeout(() => {
            if (timeLeft > 0) {
                currentIdx++;
                loadQuiz();
            }
        }, 500);

    } else {
        // ❌ 오답을 선택한 경우: 오답 버튼은 빨갛게, 정답 버튼은 여러 번 깜빡이게 처리
        selectedButton.classList.add('wrong');

        let correctButton = null;
        buttons.forEach((btn) => {
            if (btn.getAttribute('data-text') === currentCorrectText) {
                correctButton = btn;
            }
        });

        wrongAnswers.push({
            hanzi: shuffledQuestions[currentIdx].hanzi,
            pinyin: shuffledQuestions[currentIdx].pinyin,
            meaning: currentCorrectText
        });

        if (correctButton) {
            let blinkCount = 0;
            const maxBlinks = 6; // 켜짐+꺼짐을 한 세트로 보면 총 3회 깜빡임
            const blinkTimer = setInterval(() => {
                if (blinkCount % 2 === 0) {
                    correctButton.classList.add('correct');
                } else {
                    correctButton.classList.remove('correct');
                }
                blinkCount++;

                if (blinkCount >= maxBlinks) {
                    clearInterval(blinkTimer);
                    correctButton.classList.add('correct'); // 마지막엔 항상 켜진 채로 마무리

                    // 깜빡임이 끝난 뒤 학습자가 잠깐 더 볼 수 있게 0.4초 대기 후 다음 문제로 이동
                    setTimeout(() => {
                        if (timeLeft > 0) {
                            currentIdx++;
                            loadQuiz();
                        }
                    }, 400);
                }
            }, 600); // 0.6초 간격으로 느리게 깜빡임
        }
    }
}


function endGame() {
    isClickable = false;
    document.getElementById('quiz-card').style.display = 'none';
    document.getElementById('result-card').style.display = 'block';
    
    document.getElementById('score-text').innerText = score;
    document.getElementById('total-solved-text').innerText = totalSolved;

    const wrongContainer = document.getElementById('wrong-answers-container');
    const wrongListDiv = document.getElementById('wrong-list');
    if (wrongAnswers.length > 0) {
        wrongListDiv.innerHTML = ""; 
        wrongAnswers.forEach((item) => {
            const itemParagraph = document.createElement('div');
            itemParagraph.className = 'wrong-item';
            itemParagraph.innerHTML = `📍 <span class="wrong-pinyin">${item.hanzi} [${item.pinyin}]</span> ➜ 올바른 뜻: <span class="wrong-meaning">${item.meaning}</span> <button class="note-speak-btn" type="button" onclick="speakChinese('${item.hanzi}')">🔊</button>`;
            wrongListDiv.appendChild(itemParagraph);
        });
        wrongContainer.style.display = 'block'; 
    } else {
        wrongContainer.style.display = 'none'; 
    }

    const correctContainer = document.getElementById('correct-answers-container');
    const correctListDiv = document.getElementById('correct-list');
    if (correctAnswers.length > 0) {
        correctListDiv.innerHTML = ""; 
        correctAnswers.forEach((item) => {
            const itemParagraph = document.createElement('div');
            itemParagraph.className = 'wrong-item';
            itemParagraph.innerHTML = `✅ <span class="wrong-pinyin" style="color: #2E7D32;">${item.hanzi} [${item.pinyin}]</span> ➜ 맞힌 뜻: <span class="wrong-meaning">${item.meaning}</span> <button class="note-speak-btn" type="button" onclick="speakChinese('${item.hanzi}')">🔊</button>`;
            correctListDiv.appendChild(itemParagraph);
        });
        correctContainer.style.display = 'block'; 
    } else {
        correctContainer.style.display = 'none'; 
    }
}


function restartQuiz() {
    // 1️⃣ 모든 점수와 기록 데이터를 처음 상태(0, 빈 배열)로 완전히 초기화합니다.
    score = 0;
    totalSolved = 0;
    currentIdx = 0;
    wrongAnswers = [];
    correctAnswers = [];
    isClickable = false;

    // 2️⃣ 결과 화면(result-card)은 숨기고, 퀴즈 화면(quiz-card)을 다시 보여줍니다.
    const resultCard = document.getElementById('result-card');
    const quizCard = document.getElementById('quiz-card');
    if (resultCard) resultCard.style.display = 'none';
    if (quizCard) quizCard.style.display = 'block';

    // 3️⃣ 문제 순서를 새로 섞고, 60초 타이머를 처음부터 다시 가동합니다.
    shuffleQuestions();
    startTimer();

    // 4️⃣ 첫 번째 문제를 화면에 불러옵니다.
    loadQuiz();
}

// =======================================================
// 3. 카카오톡 "내 점수 자랑하기" 공유 기능
// (모바일 카톡 먹통 버그 해결판: 클립보드 우선 복사 + 카톡 앱 단순 실행)
// =======================================================
function copyScoreToClipboard() {
    const currentUrl = window.location.href;
    const scoreText = document.getElementById('score-text').innerText || '0';

    // 1️⃣ 전처리 세척 함수: 카톡 인코딩 오류를 유발하는 특수문자를 미리 청소합니다.
    function sanitizeText(text) {
        return String(text).replace(/·/g, ' ').trim();
    }

    const shareTitle = sanitizeText("[중국어 1000단어 퀴즈 타임어택!]");
    const cleanScore = sanitizeText(scoreText);

    let shareMessage = `${shareTitle}\n\n나 방금 60초 동안 중국어 단어 ${cleanScore}문제 맞혔어! 🔥\n너도 내 기록 깨러 도전해봐! 👇\n${currentUrl}`;
    shareMessage = sanitizeText(shareMessage);

    // 2️⃣ 클립보드 복사를 먼저 확실하게 처리하는 함수 (최신 방식 + 구형 대체 방식 이중 안전장치)
    function copyTextRobust(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
        } else {
            fallbackCopy(text);
        }
    }

    function fallbackCopy(text) {
        const dummyInput = document.createElement("textarea");
        dummyInput.style.position = "fixed";
        dummyInput.style.opacity = "0";
        document.body.appendChild(dummyInput);
        dummyInput.value = text;
        dummyInput.select();
        document.execCommand("copy");
        document.body.removeChild(dummyInput);
    }

    // 3️⃣ 텍스트를 클립보드에 먼저 복사합니다. (길이/특수문자 무관하게 100% 성공)
    copyTextRobust(shareMessage);

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
        // 4️⃣ 카톡 앱을 "실행만" 시킵니다. (텍스트를 URL에 실어보내지 않아 먹통 문제 없음)
        alert("점수와 링크가 복사되었습니다! 📋\n곧 열리는 카카오톡 채팅방에 '붙여넣기'만 눌러주세요!");
        window.location.href = "kakaotalk://";
    } else {
        // PC 환경: 클립보드 복사로 대체
        alert("PC 환경입니다! 점수와 링크가 복사되었습니다. 📋\n카톡방에 붙여넣기(Ctrl+V)해서 자랑해 보세요!");
    }
}

// =======================================================
// 4. 카카오톡 공유 버튼 연결 다리
// HTML 버튼이 호출하는 이름(shareToKakao)과
// 실제 기능 함수 이름(copyScoreToClipboard)을 서로 연결해줍니다.
// =======================================================
function shareToKakao() {
    copyScoreToClipboard();
}

// =======================================================
// 5. 오답노트/정답노트 글씨 크게 만들기
// 기존 style.css 파일은 전혀 건드리지 않고,
// 페이지가 열릴 때 자동으로 더 큰 글씨 스타일을 덧씌웁니다.
// =======================================================
(function injectBiggerNoteStyle() {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
        .wrong-title, .correct-title {
            font-size: 20px !important;
            font-weight: bold !important;
            margin-bottom: 10px !important;
        }
        .wrong-item {
            font-size: 18px !important;
            line-height: 1.8 !important;
            margin-bottom: 10px !important;
        }
        .wrong-pinyin {
            font-size: 19px !important;
            font-weight: bold !important;
        }
        .wrong-meaning {
            font-size: 18px !important;
            font-weight: bold !important;
            color: #1565C0 !important;
        }
    `;
    document.head.appendChild(styleTag);
})();

// =======================================================
// 6. 오답노트 + 정답노트 카카오톡 공유
// (모바일 먹통 버그 해결판: 클립보드 우선 복사 + 카톡 앱 단순 실행)
// 문제 수가 많아지면 텍스트가 길어져서 카톡 링크 방식(kakaolink://send)이
// 실패하는 것을 막기 위해, 텍스트를 클립보드에 먼저 확실히 복사한 뒤
// 카톡 앱만 단순히 실행시키는 방식으로 변경했습니다.
// 이렇게 하면 텍스트 길이에 상관없이 100% 안정적으로 작동합니다.
// =======================================================
function shareNotesToKakao() {
    // 카톡 인코딩 오류를 막기 위한 특수문자 세척 함수
    function sanitizeText(text) {
        return String(text).replace(/·/g, ' ').trim();
    }

    let noteMessage = `[중국어 1000단어 퀴즈 - 나의 학습노트]\n\n`;
    noteMessage += `점수: ${score} / ${totalSolved}문제\n\n`;

    if (wrongAnswers.length > 0) {
        noteMessage += `틀린 단어 (${wrongAnswers.length}개)\n`;
        wrongAnswers.forEach((item, idx) => {
            noteMessage += `${idx + 1}. ${item.hanzi} [${item.pinyin}] - ${item.meaning}\n`;
        });
        noteMessage += `\n`;
    }

    if (correctAnswers.length > 0) {
        noteMessage += `맞힌 단어 (${correctAnswers.length}개)\n`;
        correctAnswers.forEach((item, idx) => {
            noteMessage += `${idx + 1}. ${item.hanzi} [${item.pinyin}] - ${item.meaning}\n`;
        });
    }

    noteMessage = sanitizeText(noteMessage);

    // 1️⃣ 클립보드 복사를 먼저 확실하게 처리하는 함수 (최신 방식 + 구형 대체 방식 이중 안전장치)
    function copyTextRobust(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
        } else {
            fallbackCopy(text);
        }
    }

    function fallbackCopy(text) {
        const dummyInput = document.createElement("textarea");
        dummyInput.style.position = "fixed";
        dummyInput.style.opacity = "0";
        document.body.appendChild(dummyInput);
        dummyInput.value = text;
        dummyInput.select();
        document.execCommand("copy");
        document.body.removeChild(dummyInput);
    }

    // 2️⃣ 텍스트를 클립보드에 먼저 복사합니다. (길이가 길어도 100% 성공)
    copyTextRobust(noteMessage);

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
        // 3️⃣ 카톡 앱을 "실행만" 시킵니다. (텍스트를 URL에 실어보내지 않아서 길이 제한 문제가 없음)
        alert("오답/정답 노트가 복사되었습니다! 📋\n곧 열리는 카카오톡 채팅방에 '붙여넣기'만 눌러주세요!");
        window.location.href = "kakaotalk://";
    } else {
        // PC 환경: 복사만 안내
        alert("PC 환경입니다! 오답/정답 노트가 복사되었습니다. 📋\n카톡방에 붙여넣기(Ctrl+V)해서 공유해 보세요!");
    }
}
function toggleAcc(btn) {
    const panel = btn.nextElementSibling;
    panel.classList.toggle('open');
}

// =======================================================
// 7. 중국어 발음 재생 기능 (Web Speech API, 서버/비용 없음)
// =======================================================
let zhVoice = null;

function initVoices() {
    const voices = speechSynthesis.getVoices();
    zhVoice = voices.find(v => v.lang.includes('zh')) || null;
}

if ('speechSynthesis' in window) {
    speechSynthesis.onvoiceschanged = initVoices;
    initVoices();
}

function speakChinese(hanzi, correctPinyin) {
    if (!('speechSynthesis' in window) || !hanzi) return;
    speechSynthesis.cancel();

    // 1차: 보정 사전에 있으면 대체 단어로, 없으면 원문 그대로
    const textToSpeak = hanzi;


    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'zh-CN';
    if (zhVoice) utterance.voice = zhVoice;
    utterance.rate = 0.85;
    utterance.pitch = 1;

    speechSynthesis.speak(utterance);
}


// 아이폰 소리 재생 제한을 풀어주는 함수 (index.html에서 첫 클릭 시 자동 호출됨)
function unlockAudio() {
    if (!('speechSynthesis' in window)) return;
    const dummy = new SpeechSynthesisUtterance('');
    dummy.volume = 0;
    speechSynthesis.speak(dummy);
}

// 🔊 수동 버튼 클릭 시 호출되는 함수
function playCurrentSound() {
    speakChinese(currentHanzi);
}
