SET NAMES UTF8;
DROP DATABASE IF EXISTS flower;
CREATE DATABASE flower CHARSET=UTF8;
USE flower;

#创建用户表
CREATE TABLE flower_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32),
    upwd  VARCHAR(32),
    phone VARCHAR(16),
    email VARCHAR(64),
    sex INT ,            # 0 表示女，1表示男
    user_name VARCHAR(16),
    avatar VARCHAR(64),
    sign VARCHAR(164) DEFAULT "该用户很懒，什么都没留下"
);
INSERT INTO flower_user VALUES (null,"dangdang","a123456",15912348796,"85639571@qq.com",0,null,null,null);

#创建商品类别表
CREATE TABLE flower_variety(
    vid INT PRIMARY KEY AUTO_INCREMENT,
    vname VARCHAR(32)
);
INSERT INTO flower_variety VALUES(null,"百合花");
INSERT INTO flower_variety VALUES(null,"玫瑰花");
INSERT INTO flower_variety VALUES(null,"多肉");
INSERT INTO flower_variety VALUES(null,"风信子");
INSERT INTO flower_variety VALUES(null,"康乃馨");
INSERT INTO flower_variety VALUES(null,"马蹄莲");
INSERT INTO flower_variety VALUES(null,"仙人掌");
INSERT INTO flower_variety VALUES(null,"月季花");
INSERT INTO flower_variety VALUES(null,"郁金香");
INSERT INTO flower_variety VALUES(null,"植物花艺");

#创建商品表
CREATE TABLE flower_product(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    vid INT,                        #商品所属种类的编号
    FOREIGN KEY(vid) REFERENCES flower_variety(vid),
    pname VARCHAR(32),
    ptitle VARCHAR(128),
    plive VARCHAR(128),
    price INT
);
INSERT INTO flower_product VALUES(null,1,"美丽百合","百合具有百年好合美好家庭、伟大的爱之含意，有深深祝福的意义。","喜凉爽，较耐寒。高温地区生长不良。喜干燥，怕水涝。土壤湿度过高则引起鳞茎腐烂死亡。对土壤要求不严，但在土层深厚、肥沃疏松的砂质壤土中，鳞茎色泽洁白、肉质较厚。粘重的土壤不宜栽培。根系粗壮发达，耐肥。",200);
INSERT INTO flower_product VALUES(null,1,"卷丹百合","百合具有百年好合美好家庭、伟大的爱之含意，有深深祝福的意义。","喜凉爽，较耐寒。高温地区生长不良。喜干燥，怕水涝。土壤湿度过高则引起鳞茎腐烂死亡。对土壤要求不严，但在土层深厚、肥沃疏松的砂质壤土中，鳞茎色泽洁白、肉质较厚。粘重的土壤不宜栽培。根系粗壮发达，耐肥。",300);
INSERT INTO flower_product VALUES(null,2,"白玫瑰","白玫瑰代表纯洁、高贵、天真，表达的是一种纯纯的爱。","玫瑰喜阳光充足，耐寒、耐旱，喜排水良好、疏松肥沃的壤土或轻壤土，在粘壤土中生长不良，开花不佳。宜栽植在通风良好、离墙壁较远的地方，以防日光反射，灼伤花苞，影响开花。",400);
INSERT INTO flower_product VALUES(null,2,"黑玫瑰","你是恶魔,且为我所有。黑玫瑰是温柔真心、独一无二、动人爱情的另类表述","玫瑰喜阳光充足，耐寒、耐旱，喜排水良好、疏松肥沃的壤土或轻壤土，在粘壤土中生长不良，开花不佳。宜栽植在通风良好、离墙壁较远的地方，以防日光反射，灼伤花苞，影响开花。",500);
INSERT INTO flower_product VALUES(null,2,"红玫瑰","红玫瑰都是赠与爱人的，代表我爱你、热恋、希望与你泛起激情的爱","玫瑰喜阳光充足，耐寒、耐旱，喜排水良好、疏松肥沃的壤土或轻壤土，在粘壤土中生长不良，开花不佳。宜栽植在通风良好、离墙壁较远的地方，以防日光反射，灼伤花苞，影响开花。",600);
INSERT INTO flower_product VALUES(null,2,"蓝玫瑰","蓝玫瑰则代表敦厚善良。传情花语：暗恋你，却又开不了口，每天想的都是你，你是否也会想起我。","玫瑰喜阳光充足，耐寒、耐旱，喜排水良好、疏松肥沃的壤土或轻壤土，在粘壤土中生长不良，开花不佳。宜栽植在通风良好、离墙壁较远的地方，以防日光反射，灼伤花苞，影响开花。",700);
INSERT INTO flower_product VALUES(null,2,"香槟玫瑰"," 香槟玫瑰的花语是：爱上你是我今生最大的幸福，想你是我最甜蜜的痛苦，和你在一起是我的骄傲。","玫瑰喜阳光充足，耐寒、耐旱，喜排水良好、疏松肥沃的壤土或轻壤土，在粘壤土中生长不良，开花不佳。宜栽植在通风良好、离墙壁较远的地方，以防日光反射，灼伤花苞，影响开花。",800);
INSERT INTO flower_product VALUES(null,3,"多肉","多肉植物喜欢凉爽的半荫环境，主要生长期在春、秋季节，为多肉植物中的“中间型”品种","多肉植物在其原生地环境下每天都会接收到至少3-4小时的日照，有些品种甚至会受到6-8小时的阳光照射。由于日常居住条件的限制，一般家庭不可能每天接收到长时间高质量的日照，但是只要保证有一个朝南的窗户，每天至少2小时的日照，也是足够的。",700);
INSERT INTO flower_product VALUES(null,4,"蓝风信子","代表恒心、贞操、彷佛见到你一样高兴","风信子习性喜阳、耐寒，适合生长在凉爽湿润的环境和疏松、肥沃的砂质土中，忌积水。 喜冬季温暖湿润、夏季凉爽稍干燥、阳光充足或半阴的环境。喜肥，宜肥沃、排水良好的沙壤土。地植、盆栽、水养均可",950);
INSERT INTO flower_product VALUES(null,4,"紫风信子","代表悲伤、妒忌，忧郁的爱。","风信子习性喜阳、耐寒，适合生长在凉爽湿润的环境和疏松、肥沃的砂质土中，忌积水。 喜冬季温暖湿润、夏季凉爽稍干燥、阳光充足或半阴的环境。喜肥，宜肥沃、排水良好的沙壤土。地植、盆栽、水养均可",600);
INSERT INTO flower_product VALUES(null,4,"粉风信子","代表倾慕、浪漫的爱恋。","风信子习性喜阳、耐寒，适合生长在凉爽湿润的环境和疏松、肥沃的砂质土中，忌积水。 喜冬季温暖湿润、夏季凉爽稍干燥、阳光充足或半阴的环境。喜肥，宜肥沃、排水良好的沙壤土。地植、盆栽、水养均可",850);
INSERT INTO flower_product VALUES(null,5,"粉康乃馨"," 伟大、神圣、慈祥的母爱，粉红色康乃馨是不朽的母爱的象征。","康乃馨喜凉爽，不耐炎热，可忍受一定程度的低温。若夏季气温高于35℃，冬季低于9℃，生长均十分缓慢甚至停止。在夏季高温时期，应采取相应降温措施，冬季则需盖塑料薄膜或进入温室，以保持适当的温度。",800);
INSERT INTO flower_product VALUES(null,5,"红康乃馨","代表了爱、魅力和尊敬之情。","康乃馨喜凉爽，不耐炎热，可忍受一定程度的低温。若夏季气温高于35℃，冬季低于9℃，生长均十分缓慢甚至停止。在夏季高温时期，应采取相应降温措施，冬季则需盖塑料薄膜或进入温室，以保持适当的温度。",750);
INSERT INTO flower_product VALUES(null,6,"马蹄莲","白色马蹄莲清雅美丽,代表忠贞不渝,永结同心，象征了纯洁的友情","喜温暖、湿润和阳光充足的环境。不耐寒和干旱。生长适温为15～25℃，夜间温度不低于13℃，若温度高于25℃或低于5℃，被迫休眠。马蹄莲喜水，生长期土壤要保持湿润，夏季高温期块茎进入休眠状态后要控制浇水。土壤要求肥沃、保水性能好的黏质壤土。",700);
INSERT INTO flower_product VALUES(null,7,"仙人掌","仙人掌具有顽强的生命力，坚韧的性格，是坚强、勇敢、不屈、无畏的象征。","仙人掌喜阳光、温暖、耐旱,怕寒冷、怕涝、怕酸性土壤,适合在中性、微碱性土壤生长,家庭栽培仙人掌应选择放在有阳光的窗台上,并选翻冰良好的微碱幽巴沃砂质土为宜。",650);
INSERT INTO flower_product VALUES(null,8,"月季花","月季花姿秀美，花色绮丽，有“花中皇后”之美称，寓意尊敬和崇高。","以疏松、肥沃、富含有机质、微酸性、排水良好的的壤土较为适宜。性喜温暖、日照充足、空气流通的环境。大多数品种最适温度白天为15-26℃，晚上为10-15℃。冬季气温低于5℃即进入休眠。有的品种能耐-15℃的低温和耐35℃的高温；夏季温度持续30℃以上时，即进入半休眠，植株生长不良，虽也能孕蕾，但花小瓣少，色暗淡而无光泽，失去观赏价值。",600);
INSERT INTO flower_product VALUES(null,9,"郁金香","黄色郁金香表示没有希望的爱、无望的恋情 。","郁金香属长日照花卉，性喜向阳、避风，冬季温暖湿润，夏季凉爽干燥的气候。8℃以上即可正常生长，一般可耐-14℃低温。耐寒性很强，在严寒地区如有厚雪覆盖，鳞茎就可在露地越冬，但怕酷暑，如果夏天来的早，盛夏又很炎热，则鳞茎休眠后难于度夏。要求腐殖质丰富、疏松肥沃、排水良好的微酸性沙质壤土。忌碱土和连作。",550);
INSERT INTO flower_product VALUES(null,10,"植物花艺001","植物花艺1","喜阳光、温暖、耐旱,怕寒冷、怕涝、怕酸性土壤,适合在中性、微碱性土壤生长,充足但适度的日照可以使植物变得健壮，株型更紧凑，颜色更鲜艳，状态更健康，且不易被真菌感染，染上虫害的可能性也会更小。",500);
INSERT INTO flower_product VALUES(null,10,"植物花艺002","植物花艺2","喜阳光、温暖、耐旱,怕寒冷、怕涝、怕酸性土壤,适合在中性、微碱性土壤生长,充足但适度的日照可以使植物变得健壮，株型更紧凑，颜色更鲜艳，状态更健康，且不易被真菌感染，染上虫害的可能性也会更小。",450);
INSERT INTO flower_product VALUES(null,10,"植物花艺003","植物花艺3","喜阳光、温暖、耐旱,怕寒冷、怕涝、怕酸性土壤,适合在中性、微碱性土壤生长,充足但适度的日照可以使植物变得健壮，株型更紧凑，颜色更鲜艳，状态更健康，且不易被真菌感染，染上虫害的可能性也会更小。",400);
INSERT INTO flower_product VALUES(null,10,"植物花艺004","植物花艺4","喜阳光、温暖、耐旱,怕寒冷、怕涝、怕酸性土壤,适合在中性、微碱性土壤生长,充足但适度的日照可以使植物变得健壮，株型更紧凑，颜色更鲜艳，状态更健康，且不易被真菌感染，染上虫害的可能性也会更小。",350);
INSERT INTO flower_product VALUES(null,10,"植物花艺005","植物花艺5","喜阳光、温暖、耐旱,怕寒冷、怕涝、怕酸性土壤,适合在中性、微碱性土壤生长,充足但适度的日照可以使植物变得健壮，株型更紧凑，颜色更鲜艳，状态更健康，且不易被真菌感染，染上虫害的可能性也会更小。",300);
INSERT INTO flower_product VALUES(null,10,"植物花艺006","植物花艺6","喜阳光、温暖、耐旱,怕寒冷、怕涝、怕酸性土壤,适合在中性、微碱性土壤生长,充足但适度的日照可以使植物变得健壮，株型更紧凑，颜色更鲜艳，状态更健康，且不易被真菌感染，染上虫害的可能性也会更小。",250);
INSERT INTO flower_product VALUES(null,10,"植物花艺007","植物花艺7","喜阳光、温暖、耐旱,怕寒冷、怕涝、怕酸性土壤,适合在中性、微碱性土壤生长,充足但适度的日照可以使植物变得健壮，株型更紧凑，颜色更鲜艳，状态更健康，且不易被真菌感染，染上虫害的可能性也会更小。",200);
INSERT INTO flower_product VALUES(null,10,"植物花艺008","植物花艺8","喜阳光、温暖、耐旱,怕寒冷、怕涝、怕酸性土壤,适合在中性、微碱性土壤生长,充足但适度的日照可以使植物变得健壮，株型更紧凑，颜色更鲜艳，状态更健康，且不易被真菌感染，染上虫害的可能性也会更小。",150);
INSERT INTO flower_product VALUES(null,10,"植物花艺009","植物花艺9","喜阳光、温暖、耐旱,怕寒冷、怕涝、怕酸性土壤,适合在中性、微碱性土壤生长,充足但适度的日照可以使植物变得健壮，株型更紧凑，颜色更鲜艳，状态更健康，且不易被真菌感染，染上虫害的可能性也会更小。",100);
INSERT INTO flower_product VALUES(null,10,"植物花艺010","植物花艺10","喜阳光、温暖、耐旱,怕寒冷、怕涝、怕酸性土壤,适合在中性、微碱性土壤生长,充足但适度的日照可以使植物变得健壮，株型更紧凑，颜色更鲜艳，状态更健康，且不易被真菌感染，染上虫害的可能性也会更小。",200);

#创建商品图片表
CREATE  TABLE flower_img(
    iid INT PRIMARY KEY AUTO_INCREMENT,
    piid INT,                         #图片所属商品的编号
    FOREIGN KEY (piid) REFERENCES flower_product(pid),
    sm VARCHAR(128),
    md VARCHAR(128),
    lg VARCHAR(128)
);
INSERT INTO flower_img VALUES(NULL,1,"img/product_sm/baihe12.jpg","img/product_md/baihe12.jpg","img/product_lg/baihe12.jpg");
INSERT INTO flower_img VALUES(NULL,1,"img/product_sm/baihe13.jpg","img/product_md/baihe13.jpg","img/product_lg/baihe13.jpg");
INSERT INTO flower_img VALUES(NULL,2,"img/product_sm/baihe21.jpg","img/product_md/baihe21.jpg","img/product_lg/baihe21.jpg");
INSERT INTO flower_img VALUES(NULL,2,"img/product_sm/baihe22.jpg","img/product_md/baihe22.jpg","img/product_lg/baihe22.jpg");
INSERT INTO flower_img VALUES(NULL,3,"img/product_sm/baimeigui11.jpg","img/product_md/baimeigui11.jpg","img/product_lg/baimeigui11.jpg");
INSERT INTO flower_img VALUES(NULL,3,"img/product_sm/baimeigui12.jpg","img/product_md/baimeigui12.jpg","img/product_lg/baimeigui12.jpg");
INSERT INTO flower_img VALUES(NULL,4,"img/product_sm/heimeigui11.jpg","img/product_md/heimeigui11.jpg","img/product_lg/heimeigui11.jpg");
INSERT INTO flower_img VALUES(NULL,4,"img/product_sm/heimeigui12.jpg","img/product_md/heimeigui12.jpg","img/product_lg/heimeigui12.jpg");
INSERT INTO flower_img VALUES(NULL,5,"img/product_sm/hongmeigui11.jpg","img/product_md/hongmeigui11.jpg","img/product_lg/hongmeigui11.jpg");
INSERT INTO flower_img VALUES(NULL,5,"img/product_sm/hongmeigui12.jpg","img/product_md/hongmeigui12.jpg","img/product_lg/hongmeigui12.jpg");
INSERT INTO flower_img VALUES(NULL,6,"img/product_sm/lanmeigui11.jpg","img/product_md/lanmeigui11.jpg","img/product_lg/lanmeigui11.jpg");
INSERT INTO flower_img VALUES(NULL,6,"img/product_sm/lanmeigui12.jpg","img/product_md/lanmeigui12.jpg","img/product_lg/lanmeigui12.jpg");
INSERT INTO flower_img VALUES(NULL,7,"img/product_sm/xiangbinmeigui11.jpg","img/product_md/xiangbinmeigui11.jpg","img/product_lg/xiangbinmeigui11.jpg");
INSERT INTO flower_img VALUES(NULL,7,"img/product_sm/xiangbinmeigui12.jpg","img/product_md/xiangbinmeigui12.jpg","img/product_lg/xiangbinmeigui12.jpg");
INSERT INTO flower_img VALUES(NULL,8,"img/product_sm/duorou11.jpg","img/product_md/duorou11.jpg","img/product_lg/duorou11.jpg");
INSERT INTO flower_img VALUES(NULL,8,"img/product_sm/duorou12.jpg","img/product_md/duorou12.jpg","img/product_lg/duorou12.jpg");
INSERT INTO flower_img VALUES(NULL,8,"img/product_sm/duorou13.jpg","img/product_md/duorou13.jpg","img/product_lg/duorou13.jpg");
INSERT INTO flower_img VALUES(NULL,9,"img/product_sm/fengxinzi11.jpg","img/product_md/fengxinzi11.jpg","img/product_lg/fengxinzi11.jpg");
INSERT INTO flower_img VALUES(NULL,9,"img/product_sm/fengxinzi12.jpg","img/product_md/fengxinzi12.jpg","img/product_lg/fengxinzi12.jpg");
INSERT INTO flower_img VALUES(NULL,10,"img/product_sm/fengxinzi21.jpg","img/product_md/fengxinzi21.jpg","img/product_lg/fengxinzi21.jpg");
INSERT INTO flower_img VALUES(NULL,11,"img/product_sm/fengxinzi31.jpg","img/product_md/fengxinzi31.jpg","img/product_lg/fengxinzi31.jpg");
INSERT INTO flower_img VALUES(NULL,11,"img/product_sm/fengxinzi32.jpg","img/product_md/fengxinzi32.jpg","img/product_lg/fengxinzi32.jpg");
INSERT INTO flower_img VALUES(NULL,12,"img/product_sm/kangnaixin11.jpg","img/product_md/kangnaixin11.jpg","img/product_lg/kangnaixin11.jpg");
INSERT INTO flower_img VALUES(NULL,12,"img/product_sm/kangnaixin12.jpg","img/product_md/kangnaixin12.jpg","img/product_lg/kangnaixin12.jpg");
INSERT INTO flower_img VALUES(NULL,13,"img/product_sm/kangnaixin21.jpg","img/product_md/kangnaixin21.jpg","img/product_lg/kangnaixin21.jpg");
INSERT INTO flower_img VALUES(NULL,13,"img/product_sm/kangnaixin22.jpg","img/product_md/kangnaixin22.jpg","img/product_lg/kangnaixin22.jpg");
INSERT INTO flower_img VALUES(NULL,14,"img/product_sm/matilian11.jpg","img/product_md/matilian11.jpg","img/product_lg/matilian11.jpg");
INSERT INTO flower_img VALUES(NULL,14,"img/product_sm/matilian12.jpg","img/product_md/matilian12.jpg","img/product_lg/matilian12.jpg");
INSERT INTO flower_img VALUES(NULL,15,"img/product_sm/xianrenzhang11.jpg","img/product_md/xianrenzhang11.jpg","img/product_lg/xianrenzhang11.jpg");
INSERT INTO flower_img VALUES(NULL,15,"img/product_sm/xianrenzhang12.jpg","img/product_md/xianrenzhang12.jpg","img/product_lg/xianrenzhang12.jpg");
INSERT INTO flower_img VALUES(NULL,16,"img/product_sm/yueji11.jpg","img/product_md/yueji11.jpg","img/product_lg/yueji11.jpg");
INSERT INTO flower_img VALUES(NULL,16,"img/product_sm/yueji12.jpg","img/product_md/yueji12.jpg","img/product_lg/yueji12.jpg");
INSERT INTO flower_img VALUES(NULL,17,"img/product_sm/yujinxiang11.jpg","img/product_md/yujinxiang11.jpg","img/product_lg/yujinxiang11.jpg");
INSERT INTO flower_img VALUES(NULL,17,"img/product_sm/yujinxiang12.jpg","img/product_md/yujinxiang12.jpg","img/product_lg/yujinxiang12.jpg");
INSERT INTO flower_img VALUES(NULL,17,"img/product_sm/yujinxiang13.jpg","img/product_md/yujinxiang13.jpg","img/product_lg/yujinxiang13.jpg");
INSERT INTO flower_img VALUES(NULL,18,"img/product_sm/plant1.jpg","img/product_md/plant1.jpg","img/product_lg/plant1.jpg");
INSERT INTO flower_img VALUES(NULL,19,"img/product_sm/plant2.jpg","img/product_md/plant2.jpg","img/product_lg/plant2.jpg");
INSERT INTO flower_img VALUES(NULL,20,"img/product_sm/plant3.jpg","img/product_md/plant3.jpg","img/product_lg/plant3.jpg");
INSERT INTO flower_img VALUES(NULL,21,"img/product_sm/plant4.jpg","img/product_md/plant4.jpg","img/product_lg/plant4.jpg");
INSERT INTO flower_img VALUES(NULL,22,"img/product_sm/plant5.jpg","img/product_md/plant5.jpg","img/product_lg/plant5.jpg");
INSERT INTO flower_img VALUES(NULL,23,"img/product_sm/plant6.jpg","img/product_md/plant6.jpg","img/product_lg/plant6.jpg");
INSERT INTO flower_img VALUES(NULL,24,"img/product_sm/plant7.jpg","img/product_md/plant7.jpg","img/product_lg/plant7.jpg");
INSERT INTO flower_img VALUES(NULL,25,"img/product_sm/plant8.jpg","img/product_md/plant8.jpg","img/product_lg/plant8.jpg");
INSERT INTO flower_img VALUES(NULL,26,"img/product_sm/plant9.jpg","img/product_md/plant9.jpg","img/product_lg/plant9.jpg");
INSERT INTO flower_img VALUES(NULL,27,"img/product_sm/plant10.jpg","img/product_md/plant10.jpg","img/product_lg/plant10.jpg");

#创建用户评论表
CREATE TABLE user_comment(
    cid INT PRIMARY KEY AUTO_INCREMENT,
    uid INT,
    FOREIGN KEY(uid) REFERENCES flower_user(uid),
    pid INT,
    FOREIGN KEY(pid) REFERENCES flower_product(pid),
    comment VARCHAR(128)
);
INSERT INTO user_comment VALUES(null,1,5,"很漂亮的，非常喜欢！！");

#购物车表
CREATE  TABLE  flower_shoppingcart(
    sid INT PRIMARY KEY AUTO_INCREMENT,
    uid INT,
    FOREIGN KEY(uid) REFERENCES flower_user(uid),
    spid INT,
    FOREIGN KEY(spid) REFERENCES flower_product(pid),
    count INT
);
INSERT INTO flower_shoppingcart VALUES (null,1,5,2);

#用户订单表
CREATE  TABLE flower_order (
    oid INT PRIMARY KEY AUTO_INCREMENT,
    uid INT,
    FOREIGN KEY(uid) REFERENCES flower_user(uid),
    pid INT,
    FOREIGN KEY(pid) REFERENCES flower_product(pid),
    name VARCHAR(32),        # 收货人姓名
    count INT,
    status INT,              #10 等待  20发货  30运输 40成功
    order_time BIGINT,
    province	VARCHAR(32),
    city VARCHAR(32),
    order_adress VARCHAR(64),
    way INT,        #0 线下银行卡   1支付宝
    code INT,        #邮政编码,
    price INT
);
INSERT INTO flower_order VALUES (NULL ,1,5,"当当",1,10,1532256069642,"山西","汾阳","东一环",0,032200,555);

#首页今日上新
CREATE TABLE new_product(
    nid INT PRIMARY KEY AUTO_INCREMENT,
    pid INT,
    FOREIGN KEY(pid) REFERENCES flower_product(pid),
    pname VARCHAR(32),
    price INT,
    pic VARCHAR(128)
);
INSERT INTO new_product VALUES(null,19,"植物花艺002",450,"img/product_md/plant2.jpg");
INSERT INTO new_product VALUES(null,21,"植物花艺004",350,"img/product_md/plant4.jpg");
INSERT INTO new_product VALUES(null,24,"植物花艺007",400,"img/product_md/plant7.jpg");
INSERT INTO new_product VALUES(null,25,"植物花艺008",150,"img/product_md/plant8.jpg");

#首页装点家园
CREATE TABLE decorate_homes(
    did INT PRIMARY KEY AUTO_INCREMENT,
    pid INT,
    FOREIGN KEY(pid) REFERENCES flower_product(pid),
    pname VARCHAR(32),
    price INT,
    pic VARCHAR(128)
);
INSERT INTO decorate_homes VALUES(null,22,"植物花艺005",300,"img/product_md/plant5.jpg");
INSERT INTO decorate_homes VALUES(null,18,"植物花艺001",500,"img/product_md/plant1.jpg");
INSERT INTO decorate_homes VALUES(null,20,"植物花艺003",400,"img/product_md/plant3.jpg");
INSERT INTO decorate_homes VALUES(null,23,"植物花艺006",500,"img/product_md/plant6.jpg");

#商品详情---热卖列表
CREATE TABLE host_sale(
    hid INT PRIMARY KEY AUTO_INCREMENT,
    pid INT,
    FOREIGN KEY(pid) REFERENCES flower_product(pid),
    pname VARCHAR(32),
    price INT,
    pic VARCHAR(128)
);
INSERT INTO host_sale VALUES(null,5,"红玫瑰",600,"img/product_sm/hongmeigui11.jpg");
INSERT INTO host_sale VALUES(null,19,"植物花艺002",450,"img/product_md/plant2.jpg");
INSERT INTO host_sale VALUES(null,22,"植物花艺005",300,"img/product_md/plant5.jpg");
INSERT INTO host_sale VALUES(null,20,"植物花艺003",400,"img/product_md/plant3.jpg");
INSERT INTO host_sale VALUES(null,25,"植物花艺008",150,"img/product_md/plant8.jpg");