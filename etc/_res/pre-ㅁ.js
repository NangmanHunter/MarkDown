$(`.pre-ㅁ`).each(function(){
    const t=$(this).html();
    const t_= t.replace(/ㅁ/g,'<span style="visibility: hidden;">ㅁ</span>');
    $(this).html(t_);
})





/* 
const t=$(this).html(); >> const t=$(this).text();
ㄴpre태그안에
ㄴb태그넣는경우있음.!!!
ㄴ얘들도싹잡아서넣어서처리위해ㄱㄱ.!!!
*/