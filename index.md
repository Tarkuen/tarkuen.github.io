---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: null
---
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <title>Title</title>
    <link rel="stylesheet" href="css/style.css" />
    <link href="https://fonts.googleapis.com/css?family=Karla" rel="stylesheet" />

    <script src="js/jquery-3.3.1.min.js" rel="script"></script>
    <script rel="script" src="js/main.js"></script>
</head>
<body>


<div class="page">

    <div class="navbar">
        <a href="" onclick="pageHeightChecker('bio')"><h2>Bio</h2></a>
        <a href="" onclick="pageHeightChecker('skills')"><h2>Kompetencer</h2></a>
        <a href="" onclick="pageHeightChecker('projects')"><h2>Projekter</h2></a>
        <a href="" onclick="pageHeightChecker('contact')"><h2>Kontakt</h2></a>

    </div>

    <div class="landingPage">

        <h1 class="headline">Victor Adam Ott Frank </h1>
        <h2 class="headline">Object Oriented Development <br /> and Web</h2>

    </div>

    <div class="afterScroll bio" id="bio">

        <div class="biotext">

            <h2 class="headline">Hvem er jeg?</h2>

            <p id="catchphrase">Release Early - Release Often
            <br>
            <br>
            </p>
            <hr />
            <br />
            <!--<br />-->
            <p>
               Jeg er 24 år, læser en erhvervsakademisk uddannelse som datamatiker og bor I Ølstykke med min kæreste. Jeg er analytisk skarp, nysgerrig og bestemt ikke bange for en udfordring. Derudover er jeg imødekommende og altid mødestabil. 
 <br />
Når jeg har fuldført min nuværende uddannelse i 2019, har jeg planer om at specialisere mig videre til bachelor niveau i IT-sikkerhed,  da det er her, min interesse især ligger.
            </p>


        </div>
    </div>

    <div class="background">

        <h3 class="headline">FACTS</h3>
        <p>
            Victor Adam Ott Frank <br />
            24 år <br />
            Datamatiker AK<br />
        </p>
    </div>

    <div class="work">
        <h3 class="headline">Erfaring</h3>

        <ul class="experience elist">
            <li id="job1"><h5 id="job1H">1.Assistent</h5>
            <div class="experience ediv" id="job1div">

                <p> 1. Assistent | Sep 2014 -  | v. Netto<br />
                    Nøglebærer, primært lukkevagter. Overblik, struktur i arbejdsgangene og lokal ledelse af aftenhold.
                    <br />
                </p>
            </div>
            </li>

            <li id="job2"><h5 id="job2H">Lageransvarlig</h5>
            <div class="experience ediv" id="job2div">

                <p> Lageransvarlig | 2015 | v. Aldo<br />
                    Lageransvarlig v. Aldo i Rødovre. Optælling, opsætning og kontrol af varer.
                </p>
            </div>
            </li>

            <li id="job3"><h5 id="job3H">IT-Assistent</h5>
            <div class="experience ediv" id="job3div">
                <p>
                IT-Assistent | Feb. 2017 -  | Bent Anthony ApS.<br />
                Ad-hoc opgaver, samt opsætning af Mobilepay Buisness.

                </p>
            </div>
            </li>
            <li id="job4"> <h5 id="job4H">Java Udvikler</h5>
                <div class="experience ediv" id="job4div">
                    <p>
                    Java Udvikler | April 2018 | Mogens Nørgaard Trade <br />
                    Udviklet en Java Spring MVC applikation, en oversigt over restordrer, med tilhørende GUI og en lokal database server.
                    </p>

                </div>
            </li>
        </ul>


            <br />
            <br /><hr />
        <br />
        <br />
    </div>



    <div class=" background2">

        <div class="beforeScroll objektorienteret" id="skills">
            <h1 class="headline">Foretrukne Sprog</h1>
            <div class="objektorienteretText">
                <!--Overordnet Development-->
                <p>Jeg er specialiseret i <a>objektorienteret programmering og design</a> og jeg arbejder enten <a>Agile eller Iterativt </a> afhængig af opgaven.<br />
                    Mine design tager udgangspunkt i den <a> individuelle kunde</a>, deres behov og deres kunder.
                    <br /><br />
                    <!--Partikulære sprog-->
                    I kraft af min uddannelse arbejder jeg med OOD, men det føles også intuitivt for mig som en sprogligt anlagt person.<br />
                    I forbindelse med min uddannelse har jeg erfaring med <a>Java</a> som backend technology, men jeg har også undersøgt Javas
                    front end technology alternativer som: <a>Java Swing, JavaFX, Java Spring og Japplet</a>.
                    <br /><br />
                    På datasiden af applikationen har jeg erfaring med <a>MySQL</a>, både OO og dokumentbaseret vha. <a>X-Plugin</a>.<br />
                    Desuden er jeg stærk i de objektorienterede sprog <a>HTML, JavaSript og CSS</a>.
                    <br /><br />
                    <!--Overordnet Design-->

                    <br />
                </p>
            </div>
            <div class="objektorienteretImages">
    <img src="images/icons/java.png" />

    <img src="images/icons/MySql.png" />

    <img src="images/icons/HTML.JPG" />

    <img src="images/icons/css.jpg" />
            </div>
            <hr />
        </div>



    <div class="sideProj">
        <h1 class="headline">Anden Erfaring</h1>


        <div class="sideProj images">
        <img src="images/icons/sitecore.jpg" />
        <img src="images/icons/SAS.jpg" />
        <img src="images/icons/wordpress.png" />

        </div>
    </div>

    </div>


    <div class="background3">


        <div class="beforeScroll project1Image" id="projects">
            <h1 class="headline" id="projectsH1">Projects &darr;</h1>
            <h1 class="projectHeadline"><span class="headline2">P</span>roject 1</h1>
            <img class="project1Image p1" src="images/exa.svg" />
            <div class="project1">
                <br />
                <div class="projectText">
                    <p>Mit første erhvervsprojekt har jeg udviklet i samarbejde med <a href="http://www.mn-trade.dk/">MN-trade</a> som havde brug for et nyt system til at holde styr på sine restordrer.
                        <br /> Til udviklingen gjorde jeg brug af en evolutionær/iterativt UP tilgang og under modelleringsfasen brugte jeg Unified  Modeling Language <a href="#">(UML)</a>.
                        <br /> Selve applikationen er skrevet i Java Spring og efterfølgende hosted hos <a> Amazon Web Services </a>, ved hjælp af Amazon Elastic Beanstalk, Amazon Relational Database (som kører MySQL) og tilhørende Firewall.
                    </p>
                </div>
            </div>

            <h1 class="projectHeadline"><span class="headline2">P</span>roject 2</h1>
            <img class="project1Image p2" src="images/food.svg" />

            <div class="project2">
                <br />
                <div class="projectText">
                    <p>Dette projekt har jeg udviklet efter, at have besøgt mange forskellige sider for opskrifter og brugt apps som Pinterest. Til fælles har disse sider og applikationer at de alle bruger enkle keywords og tags til at beskrive opskrifterne.<br />
                        Derfor udviklede jeg denne <a>application med tilhørende hjemmeside og database</a>, hvilket gøre det muligt at søge i kategorier som er langt bredere end enkle keywords.
                        <br /> Dette var med henblik på at gøre det nemmere og mere overskueligt at søge i forskellige køkkener, samt se forberedelsestid og vælge sin primære ingrediens (alt fra gris til vegetarisk).
                        <br /> Selve applikationen er skrevet i <a>Java Spring</a> og efterfølgende hosted hos <a>Amazon Web Services</a>, ved hjælp af <a>Amazon Elastic Beanstalk, Amazon Relational Database</a> (som kører MySQL) og tilhørende Firewall.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="footerContact" id="contact">
        <h3>Victor Adam Ott Frank<br /></h3><h3>VictorOttFrank@yahoo.com<br /></h3><h3>+45 25305919<br /></h3>
    </div>

</div>


<script>
    hello();
    hello2();
    click('job');
</script>

</body>
</html>
