let selectLink = document.querySelectorAll('.select-List');
selectLink.forEach(a=>{
    a.addEventListener('click',function(){
        selectLink.forEach(a=>a.classList.remove('active'));
        this.classList.add('active');
    });
})