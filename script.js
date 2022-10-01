let chaptersObj = { // variable qui define tout les chapitres
    reset_screen: {
        subtitle: "Recommencer",
        text: "Pour quelconques raisons, vous devez recommencer.",
        img: "../assets/images/treasure.png",
        options: [restart = {  
                  text:"Recommencer!",
                  action:"goToChapter('intro')"},
                ],},

    intro: {
        subtitle: "Réveil",
        text: "Vous vous réveillez dans votre maison. Vous ressentez un besoin de tuer une bête de très grande proportions.",
        img: "./assets/images/reveil.png",
        options: [continuer = {  
            text:"Alright",
            action:"goToChapter('intro2')"},
          ],},
        

    intro2: {
        subtitle: "Dans le lit",
        text: "Vous êtes dans votre lit. Que faisez vous?",
        img: "./assets/images/intro2.png",
        options: [reveiller = {  
                    text:"Se réveiller",
                    action:"goToChapter('ou_aller')"
                },dormir = {  
                    text:"Dormir",
                    action:"goToChapter('dormir_reset')"
                },
                  ],},
    
    dormir_reset: {
        subtitle: "5 minutes de plus...",
        text: "Vous décidez que se lever prend trop d'effort, donc vous vous rendormez.",
        img: "./assets/images/dormir_reset.png",
        options: [dormir = {  
            text:"zzzzzzzz",
            action:"goToChapter('reset_screen')"},
          ],},

    ou_aller: {
        subtitle: "Où aller?",
        text: "Vous êtes dehors de votre maison et il y a 3 chemins qui se présentent devant vous.",
        img: "./assets/images/ou_aller.png",
        options: [marche = {  
                    text:"Aller au marché",
                    action:"goToChapter('quoi_acheter_marche_village')"
                },centre = {  
                    text:"Aller au centre du village",
                    action:"goToChapter('ou_aller_centre')"
                },aventure = {  
                    text:"Partir sur la quête!",
                    action:"goToChapter('partir_quete')"
                },
                  ],},

    quoi_acheter_marche_village: {
        subtitle: "Le marché du village",
        text: "Vous êtes au marché. Il ya des magasins tout autours de vous mais ce qu'il prend votre attention sont les épées en vente.",
        img: "./assets/images/quoi_acheter.png",
        options: [en_arriere = {  
                    text:"Retourner en arrière",
                    action:"goToChapter('ou_aller')"
                },achete = {  
                    text:"Acheter une épée",
                    action:"goToChapter('achete_epee')"
                },
                  ],},
        
    achete_epee: {    
        subtitle: "Épée acheté!",
        text: "Vous êtes maintenant armé et dangereux.",
        img: "./assets/images/achete_epee.png",
        options: [marche = {  
            text:"Splendide",
            action:"goToChapter('quoi_acheter_marche_village')"},
          ],},

    ou_aller_centre: {
        subtitle: "Le centre du village",
        text: "Vous êtes au centre du village. Il y a des bâtiments tout autours de vous mais ce qu'il prend votre attention est la taverne.",
        img: "./assets/images/ou_aller_centre.png",
        options: [en_arriere = {  
                    text:"Retourner en arrière",
                    action:"goToChapter('ou_aller')"
                },taverne = {  
                    text:"Entrer dans la taverne",
                    action:"goToChapter('quoi_faire_taverne')"
                },
                  ],},
    
    quoi_faire_taverne: {
        subtitle: "Taverne",
        text: "Vous êtes dans la taverne. Il y a des ivrognes partout autours de vous mais parmis eux, il y a un individu qui à l'air de connaître l'aventure.",
        img: "./assets/images/quoi_faire_taverne.png",
        options: [en_arriere = {  
                    text:"Retourner en arrière",
                    action:"goToChapter('ou_aller_centre')"
                },centre = {  
                    text:"BOIRE!",
                    action:"goToChapter('saoul_reset')"
                },aventure = {  
                    text:"Engager un coéquipier",
                    action:"goToChapter('taverne_engager')"
                },
                  ],},
    saoul_reset: {
        subtitle: "Saoul",
        text: "Vous avez bu un peu trop et vous tombez par terre.",
        img: "./assets/images/saoul_reset.png",
        options: [saoul = {  
            text:"oops",
            action:"goToChapter('reset_screen')"},
          ],},

    taverne_engager: {
        subtitle: "Engager l'aventurier",
        text: "Vous parlez à cette personne et elle accepte votre demande d'aide contre le dragon. Vous avez maintenant un coéquippier!",
        img: "./assets/images/taverne_engager.png",
        options: [engager = {  
            text:"Superbe",
            action:"goToChapter('ou_aller_centre')"},
          ],},

    partir_quete: {
        subtitle: "Partir à l'aventure!",
        text: "Après avoir préparé, vous partez enfin sur la quête.",
        img: "./assets/images/partir_quete_gif.gif",
        options: [continuer = {  
            text:"...",
            action:"goToChapter('camp_bandits')"},
          ],},

    camp_bandits: {
        subtitle: "Bandits!",
        text: "Sur votre chemin, vous entrez dans un camp de bandits. Ceux-ci n'apprécient pas les intrus.",
        img: "./assets/images/treasure.png",
        options: [bandits_section1 = {  
            text:"Oh non",
            action:"goToChapter('bandits_sacrifice')"},
          ],},

    bandits_sacrifice: {
        subtitle: "Sacrifice",
        text: "Puisque vous n'avez pas d'arme, votre partenaire se sacrifie pour vous.",
        img: "./assets/images/treasure.png",
        options: [bandits_section2 = {  
            text:"RIP",
            action:"goToChapter('bandits_seul')"},
          ],},

    bandits_seul: {
        subtitle: "Tout seul",
        text: "Avec la mort de votre ami, vous êtes maintenant tout seul sur la quête.",
        img: "./assets/images/treasure.png",
        options: [bandits_section3 = {  
            text:":(",
            action:"goToChapter('bandits_vaincus')"},
          ],},

    bandits_reset: {
        subtitle: "Mort par les bandits",
        text: "Vous vous faites tuer par les bandits.",
        img: "./assets/images/treasure.png",
        options: [bandits_mort = {  
            text:"RIP",
            action:"goToChapter('reset_screen')"},
          ],},
    
    bandits_parfait: {
        subtitle: "Bataille parfaite!",
        text: "Vous et votre coéquippier ont parfaitement travaillé ensemble pour tuer les bandits! Vous êtes une très bonne équipe!",
        img: "./assets/images/treasure.png",
        options: [bandits_win = {  
            text:"'erry noice",
            action:"goToChapter('bandits_vaincus')"},
          ],},

    bandits_blesse: {
        subtitle: "Blessé!",
        text: "Vous avez repoussé les bandits mais ils vous ont quand même blessé.",
        img: "./assets/images/treasure.png",
        options: [bandits_hurt = {  
            text:"ouchy",
            action:"goToChapter('bandits_vaincus')"},
          ],},
        
    bandits_vaincus: {
        subtitle: "Victoire contre les bandits!",
        text: "Les bandits ont été vaincus et vous pouvez continuer votre quête.",
        img: "./assets/images/treasure.png",
        options: [bandits_done = {  
            text:"You're winner!",
            action:"goToChapter('dragon_rencontre')"},
          ],},

    dragon_rencontre: {
        subtitle: "Dragon!",
        text: "Vous avez entré dans les ruines d'un anciens château et vous faites face à un dragon gigantesque!",
        img: "./assets/images/treasure.png",
        options: [continuer = {  
                    text:"Scary",
                    action:"goToChapter('dragon_combat')"
                },abandonner = {  
                    text:"Abandonner",
                    action:"goToChapter('abandonne_reset')"
                },
                  ],},

    abandonne_reset: {
        subtitle: "Eh, ça vaut pas la peine.",
        text: "Lorsque vous avez vu le dragon, vous décidez d'abandonner puisqu'il vous fait peur.",
        img: "./assets/images/treasure.png",
        options: [reset = {  
            text:"Bruh",
            action:"goToChapter('reset_screen')"},
          ],},


    dragon_reset: {
        subtitle: "Incinéré!",
        text: "Malgré vos efforts, le dragon vous brûle jusqu'à que vous êtes une pile de cendre.",
        img: "./assets/images/treasure.png",
        options: [reset = {  
            text:"Crispy",
            action:"goToChapter('reset_screen')"},
          ],},


    dragon_combat: {
        subtitle: "Combat avec le dragon!",
        text: "Même si le dragon est 100x plus grand que vous, vous décidez de perseverer et de le tuer!",
        img: "./assets/images/treasure.png",
        options: [kill = {  
            text:"Kill.",
            action:"goToChapter('dragon_victoire')"},
          ],},
        

    dragon_victoire: {
        subtitle: "VICTOIRE!!!",
        text: "Avec la mort du dragon, vous avez un sentiment de satisfaction; votre quête est complétée!",
        img: "./assets/images/treasure.png",
        options: [epic_win = {  
            text:"A winner is you",
            action:"goToChapter('reset_screen')"},
          ],},

};

<<<<<<< HEAD

function goToChapter(chapterName) {    
    
    let chapterSubtitle = chaptersObj[chapterName]["subtitle"]; // variable pour subtitle
    let chapterText = chaptersObj[chapterName]["text"]; //variable pour texte
    let chapterImg = chaptersObj[chapterName]["img"]; //variable pour image 
    let chapterOptions = chaptersObj[chapterName]["options"]; // variable pour les options d'un chapitre

    let HTMLsubtitle = document.querySelector(".subtitle"); // variable pour subtitle dans le document
    let HTMLtext = document.querySelector(".paragraph"); // variable pour texte dans le document
    let HTMLimage = document.getElementById("imageid"); // variable pour l'image dans le document

    console.log(chapterSubtitle); // prints qui verifie que ca fonctione :)
    HTMLsubtitle.innerHTML = chapterSubtitle; // change le texte dans l'HTML
    HTMLtext.innerHTML = chapterText;
    document.getElementById("imageid").src=chapterImg
    let button = document.querySelectorAll(".btn");

    for(let index = 0; index <= 2; index++) {

        if (chapterOptions[index] != undefined) {        
            button[index].innerHTML = ((chapterOptions[index].text));
            button[index].setAttribute("onclick", chapterOptions[index].action);
            button[index].classList.remove("none");
        } else {
            button[index].classList.add("none");
        }
    };
};
=======
function goToChapter(chapterName) {
    console.log(chaptersObj[chapterName]["subtitle"]);
    console.log(chaptersObj[chapterName]["text"]);
    console.log("displaying " + chaptersObj[chapterName]["img"]);
};
>>>>>>> 6ca58cace5589879101a22e1922d65449c3b66bc
