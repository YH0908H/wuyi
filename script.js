// 初始化地图

const map = L.map('map', {
    zoomControl:true,
    minZoom:2,
    maxZoom:5
}).setView([25,20],2);


// 地图底图

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution:'OpenStreetMap'
    }
).addTo(map);


// 题目数据

const questions = [
{
    question:"黄婷婷的家乡是哪里？",
    options:["北京","南京","上海","杭州"],
    answer:"南京",
    city:[118.78,32.04],
    reward:"nanjing-cat.png",
    rewardName:"唐老鸭"
},

{
    question:"黄婷婷32岁第一天旅行的城市是？",
    options:["青岛","秦皇岛市","成都","武汉"],
    answer:"秦皇岛市",
    city:[119.60,39.93],
    reward:"qinhuangdao-cat.png",
    rewardName:"小兔子！"
},

{
    question:"黄婷婷大部分时间在哪个城市？",
    options:["广州","北京","重庆","深圳"],
    answer:"北京",
    city:[116.40,39.90],
    reward:"beijing-cat.png",
    rewardName:"红绿灯"
},

{
    question:"夏木‘对我而言可爱的她’对应城市？",
    options:["杭州","苏州","南京","长沙"],
    answer:"杭州",
    city:[120.15,30.28],
    reward:"hangzhou-cat.png",
    rewardName:"隐藏款！"
},

{
    question:"2020新年去哪个国家看了演唱会？",
    options:["日本","韩国","法国","泰国"],
    answer:"韩国",
    city:[126.97,37.56],
    reward:"korea-cat.png",
    rewardName:"又甜又盐"
},

{
    question:"《折月亮》拍摄地是哪里？",
    options:["青岛","厦门","上海","澳门"],
    answer:"厦门",
    city:[118.10,24.46],
    reward:"xiamen-cat.png",
    rewardName:"失恋阵线联盟"
},

{
    question:"《炽夏》拍摄地是哪里？",
    options:["大连","威海","珠海","三亚"],
    answer:"威海",
    city:[122.12,37.52],
    reward:"weihai-cat.png",
    rewardName:"五一五一五一"
},

{
    question:"黄婷婷2018年3月和夏木去了哪个国家玩？",
    options:["韩国","泰国","马来西亚","日本"],
    answer:"泰国",
    city:[100.50,13.75],
    reward:"thailand-cat.png",
    rewardName:"合照！"
},
{
    question:"沙尘暴在哪里拍摄？",
    options:["青海","西藏","甘肃","新疆"],
    answer:"甘肃",
    city:[103.50,36.03],
    reward:"gansu-cat.png",
    rewardName:"来财"
},
{
    question:"到哪里后的第一餐吃了印度菜喝了冰红茶？",
    options:["伦敦","纽约","悉尼","东京"],
    answer:"悉尼",
    city:[151.20,-33.86],
    reward:"sydney-cat.png",
    rewardName:"鸭鸭"
},

{
    question:"黄婷婷评价哪里“景色优美气候宜人工作轻松～”？",
    options:["巴黎","米兰","伦敦","柏林"],
    answer:"米兰",
    city:[9.19,45.46],
    reward:"milan-cat.png",
    rewardName:"大眼仔"
}
];
// 婷学小考

const tingQuestions = [

{
    question:"你和暗恋的学姐T2参加了同一个社团，这天你们社团去聚餐，学姐酒量不行只是浅喝了两口，而你因为太兴奋完全喝醉了。于是大家伙商量给你喂解酒药，但已经醉大发的你只是看着学姐，不肯张嘴吃药，这时T2学姐会怎么做?？",

    options:[
        "轻声哄你，让你乖乖吃药",
        "强硬地叫醒你，让你自己把药吃了",
        "捏你鼻子、逼得你不得不张口呼吸趁机灌药",
        "嘴对嘴给你喂药"
    ],

    answer:"捏你鼻子、逼得你不得不张口呼吸趁机灌药"
},
{
    question:"黄婷耳洞个数及位置？",

    options:[
        "右三、左二+耳骨钉",
        "右二、左三+耳骨钉",
        "右三+耳骨钉、左二",
        "右二+耳骨钉、左三"
    ],

    answer:"右三、左二+耳骨钉"
},

{
    question:"T2对她的肉体饭有什么想说的？",

    options:[ "好吧，我承认我有肉体饭",
        "肤浅",
        "不理解但尊重",
        "咦~"
    ],

    answer:"肤浅"
},

{
    question:"已知黄婷对自己的评价为“慢热又闷骚”以下事件黄婷闷骚程度最深的为？",

    options:[
        "卧室安浴缸",
        "手上套尾戒",
        "眼镜戴金丝",
        "最钟情鸭鸭"
    ],

    answer:"最钟情鸭鸭"
},

{
    question:"上次你喝醉被T2学姐整了以后，发誓以后再也不在她面前喝醉了，同时又很好奇她喝醉了是什么样。这天你们排练话剧，你在后台撞到了刚排练完醉戏的她，整个人晕晕乎乎地被扶着送上车，她安安静静地靠在窗户边，脸蛋上还泛着红晕，你好奇地问她'学姐你喝醉了么？'她没有回答你，只是微微点了点头，打完招呼以后，她乖乖地和你挥手'拜拜~'你本来要走，但是看着她这模样，还是没忍住对她喊了一句'宝宝你好可爱哦!'",

    options:[
        "突然警惕：叫什么叫，谁是你宝宝!",
        "臭屁哼哼：这还用你说，我知道我很可爱",
        "傲娇制止：不许叫我宝宝，不许夸我可爱",
        "和你撒娇：我今天喝酒惹，喝了好多~"
    ],

    answer:"和你撒娇：我今天喝酒惹，喝了好多~"
},
{
    question:"最近你爱上了一个年更直播up主，名叫T2。你才刚喜欢她不久，据你观察她比较现充，较少发动态，也不怎么喜欢直播，直播多是分享一些工作日常念一念弹幕，但是有种淡淡的温馨幸福感，只是很可惜，她只有在一些特定日子里比如生日比如新年比如工作活动才出来直播。唉，这难道就是埋头工作不爱冲浪的佛系淡人吗?!你如此安慰自己，觉得她可能是个不太喜欢社交的人，或者是个比较注重隐私的人，所以才不怎么直播的。可是，结果某一天，她突然开直播了!不在任何节日点!问：T2为什么突然开直播？",

    options:[
        "被求得多了，心软无奈决定上线宠宠粉",
        "今天的妆容绝美，就这么卸掉了太可惜",
        "遇到了特别值得高兴的事，上来昭告天下庆祝",
        "单纯因为你想看，她无所谓，看时间觉得合适那就播咯"
    ],

    answer:"今天的妆容绝美，就这么卸掉了太可惜"
},
{
    question:"你的心选姐T2小时候学过画画，差点成为艺术生，工作了偶尔也会画点画消遣。这天她拿了一副肖像画给你看，令你惊讶的是，画上的人竟然和你十分相似!!你忐忑地问她这是?她说是心血来潮画的，莫名像你。随后又不好意思地笑着补充",

    options:[
        "可能因为画的时候想到了你。不知不觉就画出来了",
        "觉得你会喜欢，送给你",
        "其实画的不是你，就当是吧!请夸我画得真像!",
        "你要不要，不要就算了，哼"
    ],

    answer:"其实画的不是你，就当是吧!请夸我画得真像!"
}
,
{
    question:"以下哪件是能让T2多次提起感觉到「幸福」的事情?",

    options:[
        "公演站前排、得到粉丝的大声应援",
        "整理房间发现没过期的食物",
        "与Jay合影、被Jolin回复",
        "和朋友享受快乐假期"
    ],

    answer:"整理房间发现没过期的食物"
}
,
{
    question:"已知T2在10年江苏卷能考到数学130+的高分，当年为葛军出卷，题目难度非常大问：当T3考完试后去拜一拜T2，求她保佑考得高分，此时T2最可能如何回答?",

    options:[
        "分享好运和考运!",
        "考试加油!",
        "考都考完了，别迷信了"
        
    ],

    answer:"考都考完了，别迷信了"
}
,
{
    question:"某年某月某日，某t3见到了某t2，给她带了袋与她同生日9.8生产的面送给她，并指给她看生产日期。问：t2最可能如何回答?",

    options:[
        "你吃过?好吃吗?",
        "谢谢！",
        "这么巧？",
        "过期了吗？"
    ],

    answer:"过期了吗？"
}
,
{
    question:"某年某月某日，某私下从不戴戒指的人突然带了一枚银色尾戒，原因最可能是?",

    options:[
        "尾戒的含义象征独立、单身、孤独及忘记过去",
        "单纯觉得很酷心血来潮戴了一枚做装饰用",
        "裤子上的环掉了捡起来随手一戴方便回收利用",
        "代表拉钩约定，一种隐秘的誓言"
    ],

    answer:"裤子上的环掉了捡起来随手一戴方便回收利用"
}
,
{
    question:"某日，T3装修大队接到某T2的某装修订单。需为其客厅增加一风情浴缸。问：以下哪种可能是客户更需要的配套装修方案?",

    options:[
        "整体布置成开放式的北欧风",
        "浴缸对面放置客厅电视机"
        
    ],

    answer:"浴缸对面放置客厅电视机"
}
,
{
    question:"黄婷婷曾经知名的手机流量为多少M？",

    options:[
        "5M",
        "50M"
    ],

    answer:"5M"
}
,
{
    question:"T2觉得伪装得很好去看谁的live，回来超得意发微博说没被人认出来。",

    options:[
        "ONE ON ROCK",
        "周杰伦",
        "蔡依林",
        "板野友美"
    ],

    answer:"板野友美"
}
,
{
    question:"黄婷婷南京海选的编号为？",

    options:[
        "NJ001",
        "NJ050",
        "NJ051",
        "NJ098"
    ],

    answer:"NJ050"
}
,
{
    question:"当你对T2说“婷婷，你可不可以扔掉那双丑丑的凉鞋呀”，T2会回答？",

    options:[
        "我没有很丑的凉鞋呀",
        "好吧听你的",
        "就不！",
        "哪一双？"
    ],

    answer:"我没有很丑的凉鞋呀"
}
,
{
    question:"当你夸他T2真人比照片好看，她会说",

    options:[
        "谢谢~",
        "你的意思是我不上镜咯？",
        "真的吗？！",
        "那你多看看真人不要看照片了"
    ],

    answer:"你的意思是我不上镜咯？"
}
];
let currentQuestion = 0;
// 婷学小考状态

let tingMode = false;

let currentTingQuestion = 0;

let tingScore = 0;
// 渲染题目

function renderQuestion(){

    const q = questions[currentQuestion];

    document.getElementById('question').innerText = q.question;

    const answers = document.getElementById('answers');

    answers.innerHTML = '';

    q.options.forEach((option,index)=>{

        const btn = document.createElement('button');

        btn.className = 'answer-btn';

        btn.innerText = option;

        btn.onclick = ()=>checkAnswer(index);

        answers.appendChild(btn);

    });

}

// 渲染婷学小考

function renderTingQuestion(){

    const q =
    tingQuestions[currentTingQuestion];

    document
    .getElementById('tingQuestion')
    .innerText = q.question;

    const answers =
    document.getElementById('tingAnswers');

    answers.innerHTML = '';

    q.options.forEach((option,index)=>{

        const btn =
        document.createElement('button');

        btn.innerText = option;

        btn.onclick = ()=>{

            checkTingAnswer(index);

        };

        answers.appendChild(btn);

    });
}
// 婷学小考判断

function checkTingAnswer(index){

    const q =
    tingQuestions[currentTingQuestion];


    const selected =
    q.options[index];


    if(selected === q.answer){

        tingScore++;

        alert('✅ 回答正确！');

    }else{

        alert(`❌ 回答错误！\n正确答案：${q.answer}`);

    }


    currentTingQuestion++;


    if(currentTingQuestion >= tingQuestions.length){

        showTingResult();

    }else{

        renderTingQuestion();

    }

}
// 婷学等级结算

function showTingResult(){

    let level = '';

    if(tingScore === tingQuestions.length){

        level = '👑 婷帝';

    }else if(tingScore >= 12){

        level = '💖 核心婷学家';

    }else if(tingScore >= 8){

        level = '✨ 资深婷学家';

    }else if(tingScore >= 5){

        level = '🐣 初级婷学家';

    }else{

        level = '😿 婷学挂科生';

    }

    document
    .getElementById('tingQuestion')
    .innerHTML = `

        🎓 婷学小考结束！

        <br><br>

        得分：${tingScore}/${tingQuestions.length}

        <br><br>

        等级：${level}

    `;

    document
    .getElementById('tingAnswers')
    .innerHTML = `

        <button onclick="location.reload()">

            再玩一次

        </button>

    `;
}
// 检查答案

function checkAnswer(index){

    const q = questions[currentQuestion];

    const selected =
    q.options[index];

    if(selected === q.answer){

        successTravel(q);

    }else{

        alert('😿 回答错误，小猫迷路了！');

    }

}


// 成功答题
function successTravel(q){

    // 地图飞行
    map.flyTo(
        [q.city[1], q.city[0]],
        4,
        {
            duration:2
        }
    );


    // 像素猫marker
    const catIcon = L.divIcon({

        html:`
        <div class="cat-marker">
            <img src="ipixel-cat.png">
        </div>
        `,

        className:''
    });


    L.marker(
        [q.city[1], q.city[0]],
        {
            icon:catIcon
        }
    ).addTo(map);


    // 延迟显示奖励
    setTimeout(()=>{

        document
        .getElementById('rewardModal')
        .classList.remove('hidden');


        document
        .getElementById('rewardCity')
        .innerText =
        `${q.answer} 已解锁！`;


        document
        .getElementById('rewardText')
        .innerText =
        `获得了：${q.rewardName}`;


        // 显示像素图片
        document
        .getElementById('pixelReward')
        .innerHTML = `
        
        <img src="${q.reward}">
        
        `;


        // 添加到图鉴
        addCollection(
            q.reward,
            q.rewardName
        );

    },2200);

}


   

// 添加图鉴

function addCollection(img,name){

    const div =
    document.createElement('div');

    div.className = 'collect-item';

    div.innerHTML = `
    
    <img src="${img}">
    <p>${name}</p>

    `;

    document
    .getElementById('collection')
    .appendChild(div);

}


// 关闭弹窗


function closeReward(){

    document
    .getElementById('rewardModal')
    .classList.add('hidden');

    currentQuestion++;

    // 全部旅行完成
    if(currentQuestion >= questions.length){

        document
        .getElementById('examModal')
        .classList.remove('hidden');

        return;
    }

    // 继续下一题
    renderQuestion();

}


    renderQuestion();




// 初始加载

renderQuestion();
function startExam(){

    // 关闭开始弹窗
    document
    .getElementById('examModal')
    .classList.add('hidden');

    // 显示婷学小考页面
    document
    .getElementById('tingExam')
    .classList.remove('hidden');

    // 开始渲染题目
    renderTingQuestion();

}