
var rpg = {
    ciri: $('.ciri_player'),
    geralt: $('.geralt_player'),
    yennefer: $('.yennefer_player'),
    triss: $('.triss_player'),
    starting_bg: $(".starting_bg"),
    remainingDefenders: $("#computerDefenders"),
    userChoice : false,
    compChoice : false,
    player : [],
    championAttack : 0,
    championHP : 0,
    enemy : [],
    enemyCounter : 0,
    enemyHP : 0,
    defenders : 3,
    attackCount : 0,
// This function selects the initial champion and changes the bg
    charSelect: function() {
        this.ciri.click(function (){
            if (rpg.userChoice === false) {
                rpg.userChoice = true;
                rpg.starting_bg.toggleClass('ciri_bg');
                $("#title").text("");
                $(this).appendTo("#playerChampion");
                $(".champions").appendTo("#computerDefenders");
                rpg.player = this;
                rpg.championHP = rpg.ciri.find('.hp').text();
                rpg.championAttack = parseInt($(this).attr('data-attk')); 
                $("#message1").text("You have chosen Ciri, now select who you want to fight!");
                rpg.enemySelect();        
            }
        });
        this.geralt.click(function () {
            if (rpg.userChoice === false) {
                rpg.starting_bg.toggleClass('geralt_bg');
                $("#title").text("");
                $(this).appendTo("#playerChampion");
                $(".champions").appendTo(rpg.remainingDefenders);
                rpg.userChoice = true;
                rpg.player = this;
                rpg.championHP = rpg.geralt.find('.hp').text();
                rpg.championAttack = parseInt($(this).attr('data-attk'));
                $("#message1").text("You have chosen Geralt, now select who you want to fight!");     
                rpg.enemySelect();    
            }
        });
        this.yennefer.click(function () {
            if (rpg.userChoice === false) {
                rpg.starting_bg.toggleClass('yennefer_bg');
                $("#title").text("");
                $(this).appendTo("#playerChampion");
                $(".champions").appendTo(rpg.remainingDefenders);
                rpg.userChoice = true;
                rpg.player = this;
                rpg.championHP = rpg.yennefer.find('.hp').text();
                rpg.championAttack = parseInt($(this).attr('data-attk'));
                $("#message1").text("You have chosen Yennefer, now select who you want to fight!");
                rpg.enemySelect();
            }
        });
        this.triss.click(function () {
            if (rpg.userChoice === false) {
                rpg.starting_bg.toggleClass('triss_bg');
                $("#title").text("");
                $(this).appendTo("#playerChampion");
                $(".champions").appendTo(rpg.remainingDefenders);
                rpg.userChoice = true;
                rpg.player = this;
                rpg.championHP = rpg.triss.find('.hp').text();
                rpg.championAttack = parseInt($(this).attr('data-attk'));
                $("#message1").text("You have chosen Triss, now select who you want to fight!");
                rpg.enemySelect();
            }
        });
        
    },
// This allows you to select an enemy after you have selected a champion
    enemySelect: function () {
        this.ciri.click(function () {
            if (rpg.compChoice === false) {
                $(this).appendTo("#computerChampion");
                rpg.compChoice = true;
                rpg.enemy = this;
                rpg.enemyHP = $(this).find('.hp').text();
                rpg.enemyCounter = parseInt($(this).attr('data-counter'));
            }
        });
        this.geralt.click(function () {
            if (rpg.compChoice === false) {
                $(this).appendTo("#computerChampion");
                rpg.compChoice = true;
                rpg.enemy = this;
                rpg.enemyHP = $(this).find('.hp').text();
                rpg.enemyCounter = parseInt($(this).attr('data-counter'));
            }
        });
        this.yennefer.click(function () {
            if (rpg.compChoice === false) {
                $(this).appendTo("#computerChampion");
                rpg.compChoice = true;
                rpg.enemy = this;
                rpg.enemyHP = $(this).find('.hp').text();
                rpg.enemyCounter = parseInt($(this).attr('data-counter'));
            }
        });
        this.triss.click(function () {
            if (rpg.compChoice === false) {
                $(this).appendTo("#computerChampion");
                rpg.compChoice = true;
                rpg.enemy = this;
                rpg.enemyHP = $(this).find('.hp').text();
                rpg.enemyCounter = parseInt($(this).attr('data-counter'));
            }
        });   
    }         
}
rpg.charSelect();




