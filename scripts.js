let B1 = 0;
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
    }
  });