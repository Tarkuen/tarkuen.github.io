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


function click(){

    var job1 = document.getElementById('job1');
    var job2 = document.getElementById('job2');
    var job3 = document.getElementById('job3');
    var job4 = document.getElementById('job4');
    var headline1 = document.getElementById('job1H');
    var headline2 = document.getElementById('job2H');
    var headline3 = document.getElementById('job3H');
    var headline4 = document.getElementById('job4H');

    var linkbox1 = document.getElementById(job1.getAttribute('id')+'div');
    var linkbox2 = document.getElementById(job2.getAttribute('id')+'div');
    var linkbox3 = document.getElementById(job3.getAttribute('id')+'div');
    var linkbox4 = document.getElementById(job4.getAttribute('id')+'div');

    job1.addEventListener('click', function () {

        if(linkbox1.classList.contains('ediv')){
            linkbox1.classList.remove('ediv');
            linkbox1.classList.add('edivA');
            headline1.style.backgroundColor = 'black';
            headline1.style.color = 'white';

        }
        else if(linkbox1.classList.contains('edivA')){
            linkbox1.classList.remove('edivA');
            linkbox1.classList.add('ediv');
            headline1.style.backgroundColor = 'white';
            headline1.style.color = 'black';
        }

        if(linkbox2.classList.contains('ediv')){
            linkbox2.classList.remove('ediv');
            linkbox2.classList.add('edivA');
            headline2.style.backgroundColor = 'black';
            headline2.style.color = 'white';

        }
        else if(linkbox2.classList.contains('edivA')){
            linkbox2.classList.remove('edivA');
            linkbox2.classList.add('ediv');
            headline2.style.backgroundColor = 'white';
            headline2.style.color = 'black';
        }

        if(linkbox3.classList.contains('ediv')){
            linkbox3.classList.remove('ediv');
            linkbox3.classList.add('edivA');
            headline3.style.backgroundColor = 'black';
            headline3.style.color = 'white';
        }
        else if(linkbox3.classList.contains('edivA')){
            linkbox3.classList.remove('edivA');
            linkbox3.classList.add('ediv');
            headline3.style.backgroundColor = 'white';
            headline3.style.color = 'black';
        }


        if(linkbox4.classList.contains('ediv')){
            linkbox4.classList.remove('ediv');
            linkbox4.classList.add('edivA');
            headline4.style.backgroundColor = 'black';
            headline4.style.color = 'white';
        }
        else if(linkbox4.classList.contains('edivA')){
            linkbox4.classList.remove('edivA');
            linkbox4.classList.add('ediv');
            headline4.style.backgroundColor = 'white';
            headline4.style.color = 'black';
        }

    });
    job2.addEventListener('click', function () {

        if(linkbox1.classList.contains('ediv')) if(linkbox1.classList.contains('ediv')){
            linkbox1.classList.remove('ediv');
            linkbox1.classList.add('edivA');
            headline1.style.backgroundColor = 'black';
            headline1.style.color = 'white';

        }
        else if(linkbox1.classList.contains('edivA')){
            linkbox1.classList.remove('edivA');
            linkbox1.classList.add('ediv');
            headline1.style.backgroundColor = 'white';
            headline1.style.color = 'black';
        }

        if(linkbox2.classList.contains('ediv')){
            linkbox2.classList.remove('ediv');
            linkbox2.classList.add('edivA');
            headline2.style.backgroundColor = 'black';
            headline2.style.color = 'white';

        }
        else if(linkbox2.classList.contains('edivA')){
            linkbox2.classList.remove('edivA');
            linkbox2.classList.add('ediv');
            headline2.style.backgroundColor = 'white';
            headline2.style.color = 'black';
        }

        if(linkbox3.classList.contains('ediv')){
            linkbox3.classList.remove('ediv');
            linkbox3.classList.add('edivA');
            headline3.style.backgroundColor = 'black';
            headline3.style.color = 'white';
        }
        else if(linkbox3.classList.contains('edivA')){
            linkbox3.classList.remove('edivA');
            linkbox3.classList.add('ediv');
            headline3.style.backgroundColor = 'white';
            headline3.style.color = 'black';
        }

        if(linkbox4.classList.contains('ediv')){
            linkbox4.classList.remove('ediv');
            linkbox4.classList.add('edivA');
            headline4.style.backgroundColor = 'black';
            headline4.style.color = 'white';
        }
        else if(linkbox4.classList.contains('edivA')){
            linkbox4.classList.remove('edivA');
            linkbox4.classList.add('ediv');
            headline4.style.backgroundColor = 'white';
            headline4.style.color = 'black';
        }
    });
    job3.addEventListener('click', function () {

        if(linkbox1.classList.contains('ediv')){
            linkbox1.classList.remove('ediv');
            linkbox1.classList.add('edivA');
            headline1.style.backgroundColor = 'black';
            headline1.style.color = 'white';

        }
        else if(linkbox1.classList.contains('edivA')){
            linkbox1.classList.remove('edivA');
            linkbox1.classList.add('ediv');
            headline1.style.backgroundColor = 'white';
            headline1.style.color = 'black';
        }

        if(linkbox2.classList.contains('ediv')){
            linkbox2.classList.remove('ediv');
            linkbox2.classList.add('edivA');
            headline2.style.backgroundColor = 'black';
            headline2.style.color = 'white';

        }
        else if(linkbox2.classList.contains('edivA')){
            linkbox2.classList.remove('edivA');
            linkbox2.classList.add('ediv');
            headline2.style.backgroundColor = 'white';
            headline2.style.color = 'black';
        }

        if(linkbox3.classList.contains('ediv')){
            linkbox3.classList.remove('ediv');
            linkbox3.classList.add('edivA');
            headline3.style.backgroundColor = 'black';
            headline3.style.color = 'white';
        }
        else if(linkbox3.classList.contains('edivA')){
            linkbox3.classList.remove('edivA');
            linkbox3.classList.add('ediv');
            headline3.style.backgroundColor = 'white';
            headline3.style.color = 'black';
        }

        if(linkbox4.classList.contains('ediv')){
            linkbox4.classList.remove('ediv');
            linkbox4.classList.add('edivA');
            headline4.style.backgroundColor = 'black';
            headline4.style.color = 'white';
        }
        else if(linkbox4.classList.contains('edivA')){
            linkbox4.classList.remove('edivA');
            linkbox4.classList.add('ediv');
            headline4.style.backgroundColor = 'white';
            headline4.style.color = 'black';
        }
    });
    job4.addEventListener('click', function () {


        if(linkbox1.classList.contains('ediv')){
            linkbox1.classList.remove('ediv');
            linkbox1.classList.add('edivA');
            headline1.style.backgroundColor = 'black';
            headline1.style.color = 'white';

        }
        else if(linkbox1.classList.contains('edivA')){
            linkbox1.classList.remove('edivA');
            linkbox1.classList.add('ediv');
            headline1.style.backgroundColor = 'white';
            headline1.style.color = 'black';
        }

        if(linkbox2.classList.contains('ediv')){
            linkbox2.classList.remove('ediv');
            linkbox2.classList.add('edivA');
            headline2.style.backgroundColor = 'black';
            headline2.style.color = 'white';

        }
        else if(linkbox2.classList.contains('edivA')){
            linkbox2.classList.remove('edivA');
            linkbox2.classList.add('ediv');
            headline2.style.backgroundColor = 'white';
            headline2.style.color = 'black';
        }

        if(linkbox3.classList.contains('ediv')){
            linkbox3.classList.remove('ediv');
            linkbox3.classList.add('edivA');
            headline3.style.backgroundColor = 'black';
            headline3.style.color = 'white';
        }
        else if(linkbox3.classList.contains('edivA')){
            linkbox3.classList.remove('edivA');
            linkbox3.classList.add('ediv');
            headline3.style.backgroundColor = 'white';
            headline3.style.color = 'black';
        }

        if(linkbox4.classList.contains('ediv')){
            linkbox4.classList.remove('ediv');
            linkbox4.classList.add('edivA');
            headline4.style.backgroundColor = 'black';
            headline4.style.color = 'white';
        }
        else if(linkbox4.classList.contains('edivA')){
            linkbox4.classList.remove('edivA');
            linkbox4.classList.add('ediv');
            headline4.style.backgroundColor = 'white';
            headline4.style.color = 'black';
        }

    });





}





