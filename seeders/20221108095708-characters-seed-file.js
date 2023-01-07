'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const categories = await queryInterface.sequelize.query(
      'SELECT id FROM Categories;',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    )
    await queryInterface.bulkInsert('Characters', [{
      name: 'F91鋼彈',
      year: '1991',
      description: '鋼彈F91武器裝備了VSBR (無段速光束步槍）及光束盾牌；還裝備了生物電腦系統以輔助操作，大幅度提高了機體的追蹤性能，機體的面部一旦打開，瞬間就會發動全部的能力。另外利用重金屬離子現象還可以造成殘像現象，擾亂探測器的機能。',
      avatarName: '西布克·亞諾',
      image: 'https://static.zerochan.net/Gundam.F91.full.3130394.jpg',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4oA7h7jNWz5yLYsu-PxakP87C37bZdemgxXpMzR4m8DJ0M_47mCghIyAp7q84v0VSIZs&usqp=CAU',
      createdAt: new Date(),
      updatedAt: new Date(),
      categoryId: categories[10].id
    }, {
      name: 'RX-78-2鋼彈',
      year: '1979',
      description: 'RX-78-2裝載了新技術所開發的具戰艦主砲出力等級的光束步槍跟將米氏粒子磁性約束在限定範圍所形成的光束軍刀，採用新的合金技術所造的月神鈦裝甲可以輕易擋下一般薩克所使用的機槍，由阿姆羅乘上其潛在的New Type（新類型人）質素，經過數次戰鬥都有傑出表現，被稱為聯邦的白色惡魔。',
      avatarName: '阿姆羅·雷',
      image: 'https://wallpaperaccess.com/full/3738468.jpg',
      avatar: 'https://obs.line-scdn.net/0hZfERwMLFBUl4Ky-BMkx6HkJ9BiZLRxZKHB1UVidFW30HSxUaQk9LJ1svCHsGT0IXFh1OLlouHnhdTxEYEE5L/w644',
      createdAt: new Date(),
      updatedAt: new Date(),
      categoryId: categories[0].id
    }, {
      name: 'Ez8鋼彈',
      year: '1996',
      description: 'Ez8鋼彈是以毀損後的RX-79-G陸戰用先行量產型鋼彈為原型使用預備部件進行修復、改良後所得到的機體，頭部方面改造成地面部隊使用的大功率塔式全方向式收發天線，機體主軀幹廢除了胸部原有的機關炮，代之以對步兵用的12.7mm迴旋式機槍。胸部裝甲採用了輕量化以及耐彈性提升的設計。',
      avatarName: '天田士郎',
      image: 'https://i.pinimg.com/originals/96/58/8e/96588e7b4edf4ebc117e84b56794a7f8.jpg',
      avatar: 'https://pbs.twimg.com/profile_images/730779332096839681/vsDrnkzP_400x400.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
      categoryId: categories[1].id
    }, {
      name: '亞雷克斯NT-1',
      year: '1989',
      description: '亞雷克斯取消了昂貴的核心戰機系統，取而代之的是一個360度的全周天螢幕，本機所有的控制都可以在駕駛員的線性座位上配備的一個面板上完成，這種控制系統給了駕駛員一個幾乎無限制的視野。',
      avatarName: '克莉絲汀娜·麥肯錫',
      image: 'https://i.pinimg.com/564x/95/26/6c/95266c2c553d429fbfef252ebb73083f.jpg',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9DVV9DRLQTyAQQEo4O80A9LR_7q6P3SnaaMs9MNZayJdknnPSYVukwAnkV0GSRLEbGo&usqp=CAU',
      createdAt: new Date(),
      updatedAt: new Date(),
      categoryId: categories[2].id
    }, {
      name: '鋼彈試作3號機 典多洛比姆',
      year: '1991',
      description: 'GP03D設計概念是兼具有MS的汎用性與MA的攻擊力的機動兵器，基於聯邦軍的要求本機具有MA的共通特徵：極大的推進力與戰艦等級的大型光束砲。在遠距離火力戰時發揮高速度與高威力的特性。完成後的GP03成為當代最巨大的機動兵器之一具有對抗一整個MS大隊的火力。',
      avatarName: '浦木宏',
      image: 'https://i.ytimg.com/vi/mD7TA-oEbtQ/maxresdefault.jpg',
      avatar: 'https://patchwiki.biligame.com/images/gundam/thumb/f/fb/jz63uaypkj25jv7jrzs2pwq4lqlrzbm.jpg/250px-Kou.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
      categoryId: categories[3].id
    }, {
      name: 'Z鋼彈',
      year: '1985',
      description: 'Z鋼彈裝備有光束軍刀、光束步槍、2連裝導彈發射器等多種式樣的武器，並且能使用大功率高能MEGA粒子炮，而變型機構的主要部件是背部飛行裝甲在上面裝備有長尾燃燒器式自穩器，提高了逆向動作時的安定性，即使變成MS形態也具有很優良的運動性能。',
      avatarName: '卡蜜兒·維丹',
      image: 'https://i.kym-cdn.com/photos/images/facebook/000/967/755/167',
      avatar: 'https://cdn2.ettoday.net/images/2555/2555600.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
      categoryId: categories[4].id
    }, {
      name: 'ZZ鋼彈',
      year: '1986',
      description: 'ZZ鋼彈頭部的特徵武器高能MEGA粒子炮是一發就能消滅數架敵機的武器，但同時消耗能量較大，再加上2連裝光束步槍、大型光束劍等武器使得ZZ鋼彈不得不在發射完這些武器後檢查機體的剩餘能量，這就使ZZ鋼彈的作戰持續時間限定在了一個很小的範圍之內使其不能進行長時間的戰鬥。',
      avatarName: '傑特·亞希達',
      image: 'https://c4.wallpaperflare.com/wallpaper/751/100/953/gundam-mobile-suit-mobile-suit-gundam-zz-mobile-suit-gundam-wallpaper-preview.jpg',
      avatar: 'https://2.bp.blogspot.com/-LWDn4XSKFR4/VathD_rk1iI/AAAAAAAAr7s/CD-IVxy27RQ/s640/zzg_19.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
      categoryId: categories[5].id
    }, {
      name: 'v(nu)鋼彈',
      year: '1988',
      description: 'v鋼彈並未裝備大型的推進器但是配合出力強化而配置了特殊推進器，使得擁有極高的運動性能而為了能夠提早感應到敵機使用精神感應強化，配合了縮小在精神感應框架的小型化精神感應系統，使得機體感應度向上提升，武器裝備上裝備連射式光束步槍或稱光束機槍，背包中還可以裝備大型火箭炮為此將背包處的一個光劍插口轉移到了左臂。',
      avatarName: '阿姆羅·雷',
      image: 'https://image1.gamme.com.tw/news2/2017/94/75/paCWpKSXlp6Xrw.jpg',
      avatar: 'https://p6-bk.byteimg.com/tos-cn-i-mlhdmxsy5m/0f8407be185f4fbdadf62565a541d138~tplv-mlhdmxsy5m-q75:0:0.image',
      createdAt: new Date(),
      updatedAt: new Date(),
      categoryId: categories[6].id
    }, {
      name: 'Ξ鋼彈',
      year: '1989',
      description: 'Ξ鋼彈搭載有PSYCHOMIU SYSTEM、可以使用腦波控制導彈等多數裝備、在米諾夫斯基粒子散佈化的戰場上對於其他MS具有壓倒性的戰鬥力優勢。同時也搭載了光束護膜，展開時能減少機體和空氣中的粒子發生磨擦，使其能在MS形態底下令到飛行速度達到超音速。',
      avatarName: '哈薩威·諾亞',
      image: 'https://cf.shopee.tw/file/a9810a11de19c36a3df6a63991081b98',
      avatar: 'https://patchwiki.biligame.com/images/gundam/d/dd/fx2g63dk5ap50fv8mk52zthfsovwqw0.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
      categoryId: categories[9].id
    }, {
      name: '獨角獸鋼彈(NT-D)',
      year: '2010',
      description: '獨角獸鋼彈NT-D發動時電腦駕駛系統可以直接讀取及解釋駕駛者的腦波，並透過全身的 PSYCHO-FRAME骨架將思考指令直接演繹成動作以駕駛員的意志轉化為機體的動作，因此NT-D發動時獨角獸的反應及機動性會獲得飛躍的提升，但發動NT- D時駕駛員雖要承受因超加速而產生高於正常操作數倍以上因此對腦部的精神負荷所以只能發動5分鐘。',
      avatarName: '巴納吉·林克斯',
      image: 'http://blog-imgs-36.fc2.com/n/a/n/nantonakuhima/RX-0-01Xs.jpg',
      avatar: 'https://p6-bk.byteimg.com/tos-cn-i-mlhdmxsy5m/ed91a155c55c4bcbac92b762b911720f~tplv-mlhdmxsy5m-q75:0:0.image',
      createdAt: new Date(),
      updatedAt: new Date(),
      categoryId: categories[8].id
    }, {
      name: 'NT鋼彈(C裝備)',
      year: '2018',
      description: '為引誘出不死鳥而將盧歐商會收集到的精神感應框架進行二次加強安裝後的NT鋼彈的姿態。將RX-0系列的精神感應框架最低限度地組裝的應急性加強式樣機體，將精神感應框架作為外裝加強使用，揹包收納有兩把光束軍刀，盾牌裝有精神感應框架其內部裝有導彈。',
      avatarName: '約拿·巴斯特',
      image: 'https://sportshub.cbsistatic.com/i/2021/03/17/8ab11921-894f-4756-b4ce-5efc8165dfde/gundam-nt-trailer-1156670.jpg',
      avatar: 'https://img1.ak.crunchyroll.com/i/spire2/b5ddda5494b614004d7823f04e70f7431543989166_full.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
      categoryId: categories[7].id
    }, {
      name: '海盜鋼彈X1',
      year: '1994',
      description: '骷髏鋼彈的武器較偏重於接近戰，光束步槍可分為光束槍部與光束刀部可說是多功能型武器，槍的功能是屬於輔助，主要功能還是在軍刀部分；光束之所以可以變寬是因為產生光束時光粒子有增加縱向的加速，因此威力即使在對方使用光束盾防禦時也可以連盾帶機切過去，還有收藏在腳底內部利用腳底火箭推進器的餘熱瞬間加速產生之熱能短刀，緊急時突然變形可扣的前大腿護具兼用的剪爪錨以及完全展開時間可當光束盾的手臂部光束產生器的烙鐵標識器。',
      avatarName: '金凱杜·那烏',
      image: 'https://www.newton.com.tw/img/b/a4b/nBnauQDMlJ2MkZzMlNWNxEWZkNWM5MGOwEWY3IWO0MDNzgjMhJDNkRmM0IzLtVGdp9yYpB3LltWahJ2Lt92YuUHZpFmYuMmczdWbp9yL6MHc0RHa.jpg',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAfWKDvbfEqvc_VCDSemuMJOes-Q11Cfhn5ijQOjC1A3P8qIkhFsS1fy_LRFatB8jPqTc&usqp=CAU',
      createdAt: new Date(),
      updatedAt: new Date(),
      categoryId: categories[11].id
    }, {
      name: 'V2鋼彈突擊暴風型',
      year: '1993',
      description: 'V2鋼彈的突擊型組件和爆擊型組件同時裝備的重裝形態，為了避免兩個選裝部件的重複部分對機體進行了重新設計使同時裝備成為可能，機體裝備了MEGA光束步槍、VSBR、MEGA光束加農炮等武器，具有相當高的攻擊力另外也裝備了I-Field發生裝置及大出力的光束盾牌令機體具有鐵壁般的防禦力。',
      avatarName: '胡索·艾溫',
      image: 'https://i.pinimg.com/originals/9b/d2/bd/9bd2bd17e44925f43c9e2588fa57eb93.jpg',
      avatar: 'https://img1.gtimg.com/comic/pics/hv1/135/241/2221/144482115.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
      categoryId: categories[12].id
    }, {
      name: '神威鋼彈',
      year: '1994',
      description: '以閃光鋼彈的資料為基礎基本系統也與閃光鋼彈相同，但各項性能全面淩駕于閃光鋼彈之上，當機師多蒙·卡修的感情強烈時機體背部的翼狀Field發生器便會展開發動超級模式(Hyper Mode)，在這個模式下可以將機體性能的極限發揮出來。',
      avatarName: '多蒙·卡修',
      image: 'https://s1.zerochan.net/GF13-017NJII.God.Gundam.600.3065011.jpg',
      avatar: 'https://img.toy-people.com/member/161587941598.png',
      createdAt: new Date(),
      updatedAt: new Date(),
      categoryId: categories[13].id
    }, {
      name: '飛翼鋼彈零式',
      year: '1995',
      description: '飛翼鋼彈零式裝載雙管破壞來福槍能合併或雙手各持一把分開發射，此武裝沒有發射次數限制火力足以一擊毀滅宇宙殖民地；此機為首台搭載零式系統機體，零式系統能預測敵人動向或戰場上任何活動，並把資料直接輸入駕駛員腦中其中也包含駕駛員的行動所產生的後果，但由於大量預測資料會對駕駛員造成龐大的精神壓力，因此駕駛員如沒有強韌的精神力與無懼死亡的勇氣會精神崩潰，甚至會造成死亡。',
      avatarName: '希洛·唯',
      image: 'https://img.toy-people.com/member/162487143043.png',
      avatar: 'https://mypaper.pchome.com.tw/show/article/azuj7230/A1263340356',
      createdAt: new Date(),
      updatedAt: new Date(),
      categoryId: categories[14].id
    }, {
      name: '飛翼鋼彈零式EW',
      year: '1997',
      description: '飛翼鋼彈零式EW是G系列的設計原型機體裝備有突入大氣層用的雙聯裝甲護翼，跟飛翼鋼彈零式一樣裝載雙管破壞來福槍能合併或雙手各持一把分開發射，其最大特色為背上兩對天使的翅膀使本機能單獨突入大氣層，但此改動導致可變形機構失去。',
      avatarName: '希洛·唯',
      image: 'http://i.imgbox.com/acdRhzBB.jpg',
      avatar: 'https://image1.gamme.com.tw/news2/2016/49/39/qJeYn52Vl6SZrac.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
      categoryId: categories[15].id
    }, {
      name: '鋼彈DX',
      year: '1996',
      description: '鋼彈DX是新聯邦軍以X鋼彈為基礎作為自身力量的象徵而開發的機體，反射板的大型化、能量容量的擴大以及雙手雙腳裝備了提高冷卻效率的散熱板使其可以搭載雙衛星微波炮威力近於X鋼彈的兩倍；DX與X鋼彈的最大不同之處在於DX的電腦系統允許非新人類駕駛員登入月球衛星系統。',
      avatarName: '卡洛特·蘭',
      image: 'https://i.pinimg.com/originals/4f/2e/e2/4f2ee250c5d5cfaf0ea23ce6cc74ab56.png',
      avatar: 'https://img-eshop.cdn.nintendo.net/i/658f1647e13d4d9d36914f384f7da54d814b91c4713f498d9a6bc5e0d61be435.jpg?w=1000',
      createdAt: new Date(),
      updatedAt: new Date(),
      categoryId: categories[16].id
    }, {
      name: '自由鋼彈',
      year: '2002',
      description: '由Z.A.F.T開發的反中子干擾器讓核能在中子干擾器的影響下仍可融合，成功解決機體因PS裝甲與高功率光束武器的雙重運作容易使機體能源耗盡的問題，由於自由鋼彈以核能推動因此除了核原料耗盡否則機體的能量供應是永久狀態。',
      avatarName: '煌·大和',
      image: 'https://2.bp.blogspot.com/-8EOCvst4daU/VyRqKe_YTFI/AAAAAAAAUIs/GmAy4vTLTvUXhnB9qIZFaL5dzsAkFxHYACKgB/s1600/nEO_IMG_R9141304.jpg',
      avatar: 'https://upload.wikimedia.org/wikipedia/zh/e/e8/Kira2.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
      categoryId: categories[17].id
    }, {
      name: '命運鋼彈',
      year: '2004',
      description: '本機特色在於擁有能對應各種戰況的武裝無論戰鬥距離如何均可發揮強力攻擊，中距離標準兵器高能量光束步槍，左右肩側裝備了光束迴旋鏢除了投擲攻擊之外亦可調整光束輸出形成近戰用的光束劍，近距離有大型鐳射對艦刀不僅刀身極長，藉由實體重量產生重力加速度作用下的攻擊力，另外裝設於掌心中的光束砲作為通常不可能發生的零距離格鬥兵器；另外其內部搭載的推進器光壓推進系統，本系統通過特殊的能量轉換加速時會產生強大的光壓，光壓一口氣噴射而出時會形成了巨大的紅色光之翼，令本機得到其他機體所沒有的超加速同時在光之翼展開狀態下，本機移動時會產生令人目眩的光學殘象使敵軍難以捕捉。',
      avatarName: '真·飛鳥',
      image: 'https://www.newton.com.tw/img/9/123/nBnauUjYhVTYwYTO0MTM0YWMhZWM3MDOxQGOkJGOygTYmNzM1MTMiV2MkJ2LtVGdp9yYpB3LltWahJ2Lt92YuUHZpFmYuMmczdWbp9yL6MHc0RHa.jpg',
      avatar: 'https://hkacger.com/wp-content/uploads/2018/07/GUNDAM-1-1.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
      categoryId: categories[18].id
    }, {
      name: '00鋼彈',
      year: '2008',
      description: '00鋼彈最大特色為搭載兩個GN-Drive之雙重動力系統，擁有兩個GN-Drive並不表示只產生2倍之GN粒子而是2次方之數量以凌駕於所有機體之GN粒子釋放量，而GN-Drive能180度迴轉置於前方散佈GN粒子流時能形成GN力場抵擋雷射攻擊，啟動Trans-AM系統時能夠完全解放儲存在機體內的高濃度壓縮之GN粒子，使在短時間內發揮平常300%的威力此時傳送GN粒子的電纜會變成紅色，漂浮在機體周圍的GN粒子也是高濃度狀態，所以整台鋼彈看起來就變成了紅色。',
      avatarName: '剎那·F·塞耶',
      image: 'https://i.pinimg.com/736x/70/d9/9b/70d99bb98f136bc89e01bc7234c0b2d5--anime-manga-ski.jpg',
      avatar: 'https://cdn2.ettoday.net/images/1540/d1540183.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
      categoryId: categories[19].id
    }, {
      name: '鋼彈AGE-FX',
      year: '2011',
      description: 'FX主要武裝Stungle步槍體積雖然較小但可透過換裝切換成「常規型態」、「充能型態」和「火箭炮型態」；特殊武裝是C-浮遊刃該武裝共分小型8個及大型6個兩組，該武裝能夠通過遠距離操縱雖然沒有射擊機能，但根據使用方式能夠做出多種切割攻擊方式同時也能作為盾牌和立場使用。此外當FX Burst Mode的能量全開模式開啟時機體會向外刺出許多光束刃，並且大幅度提升機體的機動性和戰鬥力缺點則是精準度會有所下降但該模式的殺傷力極大。',
      avatarName: '奇奧·明日野',
      image: 'https://i.pinimg.com/originals/2a/ab/0a/2aab0a9b389205ebefb8493786f950a2.jpg',
      avatar: 'https://hkacger.com/wp-content/uploads/2018/07/GUNDAM-11.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
      categoryId: categories[20].id
    }, {
      name: '鋼彈G-Self',
      year: '2014',
      description: 'G-Self不同於舊時代使用鋼彈合金的技術而是利用了更具剛性卻又輕量的光子裝甲做為整體裝甲使用，身上散發青藍色光芒的區塊則為透明狀態的光子裝甲同時也做為某種顯示裝置且驅動光迴路使用，而平時的發光現象來自於光子能源供給上的剩餘輸出造成的；武裝方面能夠以更換武裝背包的方式對應各種戰況，擁有代表七種光譜顏色的七種不同武裝背包裝備機體顏色也會因應其不同裝備而產生變化。',
      avatarName: '貝爾利·傑納姆',
      image: 'https://i0.wp.com/ulvespill.net/wp-content/uploads/2017/10/releasedpv02_1493219931.png?fit=1920%2C1088&ssl=1',
      avatar: 'https://truth.bahamut.com.tw/s01/201503/5b755718263ad0629261cc007706b8a4.JPG',
      createdAt: new Date(),
      updatedAt: new Date(),
      categoryId: categories[21].id
    }, {
      name: '∀鋼彈',
      year: '1999',
      description: '逆A鋼彈採用IFBD系統因此機身均受到強力I力場保護，且裝甲有能夠自我修復的奈米表層於機體受損的位置會先以類似結痂的狀態覆蓋，接著視時間與受損情況逐漸自我修復；最大特色武裝為月光蝶散佈裝置位於機體背部，在可動式的保護艙蓋之下隱藏著總計八具的噴散口能夠散佈極為大量的毫微奈米機械群將人造無機物分解殆盡，造就了黑歷史的被封印武裝。',
      avatarName: '羅蘭·謝亞克',
      image: 'https://stat.ameba.jp/user_images/20091126/21/plasticmachine/ce/38/j/o0422060010320329039.jpg',
      avatar: 'https://hkacger.com/wp-content/uploads/2018/07/GUNDAM-4-1.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
      categoryId: categories[22].id
    }, {
      name: '天狼王型獵魔鋼彈',
      year: '2015',
      description: '透過配合和MS一體化的三日月的戰鬥資料讓機體的反應速度成功達到理論值的極限，骨架的各部關節動作也施加了和駕駛員親身感覺一致的纖細調整；本機武裝超大型鎚矛為天狼王型獵魔用所開發的主裝備，是一把將對艦戰鬥納入考量的大型鎚矛，柄的部分能根據狀況伸縮先端部和柄的底部設有貫釘，而霸王爪能貫穿敵機的新武裝覆蓋於指尖部的裝甲是由稀少金屬打造而成。',
      avatarName: '三日月·奧古斯',
      image: 'https://p3-tt.byteimg.com/origin/pgc-image/bd59ea1189ca421f9af0aa367763adb3?from=pc',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUYCdG9hd-uDylW0xB5MAopFaFdhOaMr-5KA&usqp=CAU',
      createdAt: new Date(),
      updatedAt: new Date(),
      categoryId: categories[23].id
    }, {
      name: '風靈鋼彈',
      year: '2022',
      description: '風靈鋼彈只有蘇萊塔駕駛時能發揮出頂尖的機體性能，武裝為光束軍刀、光束步槍與盾牌並能將盾牌分離成11個GUND子機，不僅能作為遠隔操縱的全方位無線兵器浮游砲使用，更能與全身各處接點、光束步槍連結作為強化機動性與火力的裝備。',
      avatarName: '蘇萊塔·墨丘利',
      image: 'https://storage.mantan-web.jp/images/2022/10/09/20221009dog00m200017000c/001_size6.jpg',
      avatar: 'https://image1.gamme.com.tw/news2/2022/92/73/pZuZo52dkKGYqA.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
      categoryId: categories[24].id
    }], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Characters', {})
  }
};
