//开场动画
// 获取dom
const container = document.querySelector(".container");
const wrap = document.querySelector(".wrap");
const imgList = document.querySelectorAll(".wrap img");
const length = imgList.length;
// 计算图片间隔角度
const angle = 360 / length;   
// 开场动画 延时1000 / 60 = 16.666667 ≈ 17，否则transition不会生效
setTimeout(() => {
    for(let i=0;i<length;i++){
        imgList[i].style.transition = 'transform 1s ease ' + (length - 1 - i) * 0.1 + 's'; //数字加字符串等于拼接，ease后面有个空格！！！
        imgList[i].style.transform = 'rotateY(' + (angle * i) + 'deg) translateZ(260px)';
    }
}, 17);
// wrap沿x轴旋转-10度
const rotate = { x: -15, y: 0 };
wrap.style.transform = 'rotateX(' + rotate.x + 'deg)';

// 查看动画
let curpositon = {'0':0,'1':-angle,'2':angle}
for(let i = 0; i < length; i++){
    imgList[i].onmouseover = function (){
        this.style.height = '220px';
        this.style.width = '160px';
        this.style.boxShadow = '0 10px 13px 0px #000000c7';
        imgList[i].style.transition = 'all 0.5s ease';
        // wrap.style.transition = 'all 0.5s ease';
        // wrap.style.transform = `rotateX(-15deg) rotateY(${curpositon[i]}deg)`;
        // curpositon[i] = 0;
        // curpositon[(i+1)%length] = -angle;
        // curpositon[(i+2)%length] = angle;
    }
    imgList[i].onmouseout = function (){
        this.style.height = '210px';
        this.style.width = '150px';
        this.style.boxShadow = '0px';
        this.style.boxShadow = 'none';
        imgList[i].style.transition = 'all 0.5s ease';
    }
}

let webList = ['./site/photo.html','https://ke-wng.github.io/','./site/film.html'];

//翻页
totalAngle = 0;
for(let i = 0; i < length; i++){
        imgList[i].onclick = function (){
            if(curpositon[i] != 0){
                wrap.style.transition = 'all 0.5s ease';
                totalAngle += curpositon[i];
                wrap.style.transform = `rotateX(-15deg) rotateY(${totalAngle}deg)`;
                    curpositon[i] = 0;
                    curpositon[(i+1)%length] = -angle;
                    curpositon[(i+2)%length] = angle;
                console.log(totalAngle);
                console.log(curpositon)
            }else{
                window.location.href = webList[i];
            }
        }
}

//左侧菜单栏
let menuleft = document.querySelector(".menuleft");
menuleft.onmouseover = function (){
    menuleft.style.transform = "translateX(0)";
    menuleft.style.transition = "transform 0.8s ease";
    menuleft.style.backgroundColor = 'rgb(0, 153, 204, 0.5)';
    //这样的透明度才不会继承
}
menuleft.onmouseout = function (){
    menuleft.style.transform = "translateX(-263px)";
    menuleft.style.transition = "transform 0.8s ease";
    menuleft.style.backgroundColor = 'rgb(0, 153, 204)';
} //out可能会“抽搐” -> 设置延时、