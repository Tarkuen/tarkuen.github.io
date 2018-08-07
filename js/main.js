function pageHeightChecker(name) {
    event.preventDefault();
    var elementheight = document.getElementById(name).offsetTop;
    // window.scrollTo(0, elementheight);
    window.scrollTo({
        "behavior":"smooth",
        "left":0,
        "top":elementheight-45
    })
}



function hello(){
window.addEventListener('scroll', function(){
    var viewport = document.getElementById('skills').getBoundingClientRect().height;
    var div = document.getElementById('skills');
    var view= window.pageYOffset+viewport+45;
    var elementheight = document.getElementById('skills').offsetTop;
    if(view > elementheight ) {
        if (div.classList.contains('beforeScroll'))
            div.classList.remove('beforeScroll');
            div.classList.add('afterScroll')

    }

} );
}

function hello2(){
window.addEventListener('scroll', function(){
    var viewport = 456;
    var div = document.getElementById('projects');
    var view= window.pageYOffset+viewport;
    var elementheight = document.getElementById('projects').offsetTop;
    if(view > elementheight ) {
        if (div.classList.contains('beforeScroll'))
            div.classList.remove('beforeScroll');
            div.classList.add('afterScroll')

    }
    else{}



} );

}




