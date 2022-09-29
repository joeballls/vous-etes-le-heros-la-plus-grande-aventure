let chaptersObj = {
    reset_screen: {
        subtitle: "Recommencer",
        text: "Pour quelconques raisons, vous devez recommencer.",
        img: "../assets/images/treasure.png",
        options: {option1: {optionText: "Recommencer!", action:"goToChapter('intro')"},},},

    intro: {
        subtitle: "Réveil",
        text: "Vous vous réveillez dans votre maison. Vous ressentez un besoin de tuer une bête de très grande proportions.",
        img: "../assets/images/treasure.png",
        options: {option1: {optionText: "Alright", action:"goToChapter('intro2')"},},},

    intro2: {
        subtitle: "Dans le lit",
        text: "Vous êtes dans votre lit. Que faisez vous?",
        img: "../assets/images/treasure.png",
        options: {option1: {optionText: "Se réveiller", action:"goToChapter('ou_aller')"},
                  option2: {optionText: "Dormir", action:"goToChapter('dormir_reset')"},},},
    
    dormir_reset: {
        subtitle: "5 minutes de plus...",
        text: "Vous décidez que se lever prend trop d'effort, donc vous vous rendormez.",
        img: "../assets/images/treasure.png",
        options: {option1: {optionText: "zzzzzzzz", action:"goToChapter('reset_screen')"},},},

    ou_aller: {
        subtitle: "Où aller?",
        text: "Vous êtes dehors de votre maison et il y a 3 chemins qui se présentent devant vous.",
        img: "../assets/images/treasure.png",
        options: {option1: {optionText: "Aller au marché", action:"goToChapter('quoi_acheter_marche_village')"},
                  option2: {optionText: "Aller au centre du village", action:"goToChapter('ou_aller_centre')"},
                  option3: {optionText: "Partir sur la quête!", action:"goToChapter('partir_quete')"},},},

    quoi_acheter_marche_village: {
        subtitle: "Le marché du village",
        text: "Vous êtes au marché. Il ya des magasins tout autours de vous mais ce qu'il prend votre attention sont les épées en vente.",
        img: "../assets/images/treasure.png",
        options: {option1: {optionText: "Retourner en arrière", action:"goToChapter('ou_aller')"},
                  option2: {optionText: "Acheter une épée", action:"goToChapter('achete_epee')"},},},
        
    achete_epee: {    
        subtitle: "Épée acheté!",
        text: "Vous êtes maintenant armé et dangereux.",
        img: "../assets/images/treasure.png",
        options: {option1: {optionText: "Splendide", action:"goToChapter('quoi_acheter_marche_village')"},},},

    ou_aller_centre: {
        subtitle: "Le centre du village",
        text: "Vous êtes au centre du village. Il y a des bâtiments tout autours de vous mais ce qu'il prend votre attention est la taverne.",
        img: "../assets/images/treasure.png",
        options: {option1: {optionText: "Retourner en arrière", action:"goToChapter('ou_aller')"},
                  option2: {optionText: "Entrer dans la taverne", action:"goToChapter('quoi_faire_taverne')"},},},
    
    quoi_faire_taverne: {
        subtitle: "Taverne",
        text: "Vous êtes dans la taverne. Il y a des ivrognes partout autours de vous mais parmis eux, il y a un individu qui à l'air de connaître l'aventure.",
        img: "../assets/images/treasure.png",
        options: {option1: {optionText: "Retourner en arrière", action:"goToChapter('ou_aller')"},
                  option2: {optionText: "Boire!", action:"goToChapter('taverne_boire')"},
                  option3: {optionText: "Engager un coéquipier!", action:"goToChapter('taverne_engager')"},},},

    saoul_reset: {
        subtitle: "Saoul",
        text: "Vous avez bu un peu trop et vous tombez par terre.",
        img: "../assets/images/treasure.png",
        options: {option1: {optionText: "oops", action:"goToChapter('reset_screen')"},},},

    taverne_engager: {
        subtitle: "Engager l'aventurier",
        text: "Vous parlez à cette personne et elle accepte votre demande d'aide contre le dragon. Vous avez maintenant un coéquippier!",
        img: "../assets/images/treasure.png",
        options: {option1: {optionText: "Superbe", action:"goToChapter('ou_aller_centre')"},},},

    partir_quete: {
        subtitle: "Partir à l'aventure!",
        text: "Après avoir préparé, vous partez enfin sur la quête.",
        img: "../assets/images/treasure.png",
        options: {option1: {optionText: "Continuer", action:"goToChapter('camp_bandits')"},},},

    camp_bandits: {
        subtitle: "Bandits!",
        text: "Sur votre chemin, vous entrez dans un camp de bandits. Ceux-ci n'apprécient pas les intrus.",
        img: "../assets/images/treasure.png",
        options: {option1: {optionText: "Oh non", action:"goToChapter('bandits_sacrifice')"},},},

    bandits_sacrifice: {
        subtitle: "Sacrifice",
        text: "Puisque vous n'avez pas d'arme, votre partenaire se sacrifie pour vous.",
        img: "../assets/images/treasure.png",
        options: {option1: {optionText: "RIP", action:"goToChapter('bandits_seul')"},},},

    bandits_seul: {
        subtitle: "Tout seul",
        text: "Avec la mort de votre ami, vous êtes maintenant tout seul sur la quête.",
        img: "../assets/images/treasure.png",
        options: {option1: {optionText: ":(", action:"goToChapter('bandits_vaincus')"},},},

    bandits_reset: {
        subtitle: "Mort par les bandits",
        text: "Vous vous faites tuer par les bandits.",
        img: "../assets/images/treasure.png",
        options: {option1: {optionText: "RIP", action:"goToChapter('reset_screen')"},},},
    
    bandits_parfait: {
        subtitle: "Bataille parfaite!",
        text: "Vous et votre coéquippier ont parfaitement travaillé ensemble pour tuer les bandits! Vous êtes une très bonne équipe!",
        img: "../assets/images/treasure.png",
        options: {option1: {optionText: "'erry noice", action:"goToChapter('bandits_vaincus')"},},},

    bandits_blesse: {
        subtitle: "Blessé!",
        text: "Vous avez repoussé les bandits mais ils vous ont quand même blessé.",
        img: "../assets/images/treasure.png",
        options: {option1: {optionText: "ouchy", action:"goToChapter('bandits_vaincus')"},},},
        
    bandits_vaincus: {
        subtitle: "Victoire contre les bandits!",
        text: "Les bandits ont été vaincus et vous pouvez continuer votre quête.",
        img: "../assets/images/treasure.png",
        options: {option1: {optionText: "You're winner!", action:"goToChapter('dragon_rencontre')"},},},

    dragon_rencontre: {
        subtitle: "Dragon!",
        text: "Vous avez entré dans les ruines d'un anciens château et vous faites face à un dragon gigantesque!",
        img: "../assets/images/treasure.png",
        options: {option1: {optionText: "Scary", action:"goToChapter('dragon_combat')"},
                  option2: {optionText: "Abandonner", action:"goToChapter('abandonne_reset')"},},},

    abandonne_reset: {
        subtitle: "Eh, ça vaut pas la peine.",
        text: "Lorsque vous avez vu le dragon, vous décidez d'abandonner puisqu'il vous fait peur.",
        img: "../assets/images/treasure.png",
        options: {option1: {optionText: "Bruh", action:"goToChapter('reset_screen')"},},},

    dragon_reset: {
        subtitle: "Incinéré!",
        text: "Malgré vos efforts, le dragon vous brûle jusqu'à que vous êtes une pile de cendre.",
        img: "../assets/images/treasure.png",
        options: {option1: {optionText: "Crispy", action:"goToChapter('reset_screen')"},},},

    dragon_combat: {
        subtitle: "Combat avec le dragon!",
        text: "Même si le dragon est 100x plus grand que vous, vous décidez de perseverer et de le tuer!",
        img: "../assets/images/treasure.png",
        options: {option1: {optionText: "Kill.", action:"goToChapter('dragon_victoire')"},},},

    dragon_victoire: {
        subtitle: "VICTOIRE!!!",
        text: "Avec la mort du dragon, vous avez un sentiment de satisfaction; votre quête est complétée!",
        img: "../assets/images/treasure.png",
        options: {option1: {optionText: "A winner is you", action:"goToChapter('reset_screen')"},},},

};

function goToChapter(chapterName) {
    console.log(chaptersObj[chapterName]["subtitle"]);
    console.log(chaptersObj[chapterName]["text"]);
    console.log("displaying " + chaptersObj[chapterName]["img"]);
};