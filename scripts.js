let B1 = 0;
let B2 = 0;
document.querySelector('#BV').addEventListener('click', function(){
    if(B1==0)
    {
        B1=1;
    document.getElementById('BVv').style.display='flex';
    document.getElementById('BV').style.width='86px';
    document.getElementById('BV').style.right='10px';
    document.querySelector(".Vn").style.left="-2px";
    document.getElementById('FS').style.display="none";
    document.getElementById('FS1').style.display="block";
    document.getElementById('FS1').style.left="-2px";
    document.getElementById("Shapka").style.height="90px";
    }
    else 
    {
        B1=0;
        document.getElementById('BVv').style.display='none';
        document.getElementById('BV').style.width='78px';
        document.getElementById('BV').style.right='0px';
        document.querySelector(".Vn").style.left="5px";
        document.getElementById('FS').style.display="block";
        document.getElementById('FS1').style.display="none";
        document.getElementById('FS1').style.left="5px";
        document.getElementById("Shapka").style.height="60px";
    }
});

document.querySelector("#BVv").addEventListener("click", function(){
    // document.querySelector("#NG1").textContent = "Кб3";
    if(B2 == 0)
    {
        B2=1;
    var a = document.querySelector('#NG1');
    a.textContent = "Кб3";
    var a = document.querySelector('#NG');
    a.textContent = "Кф7";
    document.querySelector('#Hre2').href="https://disk.yandex.ru/d/jY95skys7uYiFg ";
    document.querySelector('#Hre3').href="https://vk.com/im/convo/2000000004?cmid=186&entrypoint=list_all ";
    document.querySelector('#Hre4').href="https://vk.com/club228219108 ";
    }
    else 
    {
        B2=0;
    var a = document.querySelector('#NG');
    a.textContent = "Кб3";
    var a = document.querySelector('#NG1');
    a.textContent = "Кф7";
    document.querySelector('#Hre2').href="https://disk.yandex.ru/d/j6WrWz_1cZl0CA";
    document.querySelector('#Hre3').href="https://vk.com/im/convo/2000000002?cmid=582&entrypoint=list_all ";
    document.querySelector('#Hre4').href="https://vk.com/club228189756 ";
    }
});
 document.querySelector("#DiiPC1").addEventListener("click", function(){
    location.reload();
 });
