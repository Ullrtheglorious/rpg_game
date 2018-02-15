
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
                rpg.championAttack = parseInt($(".ciri_player > img.char_picture").attr('data-attk')); 
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
                rpg.championAttack = parseInt($(".geralt_player > img.char_picture").attr('data-attk'));
                $("#message1").text("You have chosen Geralt, now select who you want to fight!"); 
                console.log(rpg.championAttack);
                console.log(rpg.championHP);    
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
                rpg.championAttack = parseInt($(".yennefer_player > img.char_picture").attr('data-attk'));
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
                rpg.championAttack = parseInt($(".triss_player > img.char_picture").attr('data-attk'));
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
                $("#attack").show("slow");
                rpg.compChoice = true;
                rpg.enemy = this;
                rpg.enemyHP = $(this).find('.hp').text();
                rpg.enemyCounter = parseInt($(".ciri_player > img.char_picture").attr('data-counter'));
                $("#message1").text("Press the Attack button to fight Ciri");
                rpg.fight();
            }
        });
        this.geralt.click(function () {
            if (rpg.compChoice === false) {
                $(this).appendTo("#computerChampion");
                $("#attack").show("slow");
                rpg.compChoice = true;
                rpg.enemy = this;
                rpg.enemyHP = $(this).find('.hp').text();
                rpg.enemyCounter = parseInt($(".geralt_player > img.char_picture").attr('data-counter'));
                $("#message1").text("Press the Attack button to fight Geralt");
                rpg.fight();
            }
        });
        this.yennefer.click(function () {
            if (rpg.compChoice === false) {
                $(this).appendTo("#computerChampion");
                $("#attack").show("slow");
                rpg.compChoice = true;
                rpg.enemy = this;
                rpg.enemyHP = $(this).find('.hp').text();
                rpg.enemyCounter = parseInt($(".yennefer_player > img.char_picture").attr('data-counter'));
                $("#message1").text("Press the Attack button to fight Yennefer");
                rpg.fight();
            }
        });
        this.triss.click(function () {
            if (rpg.compChoice === false) {
                $(this).appendTo("#computerChampion");
                $("#attack").show("slow");
                rpg.compChoice = true;
                rpg.enemy = this;
                rpg.enemyHP = $(this).find('.hp').text();
                rpg.enemyCounter = parseInt($(".triss_player > img.char_picture").attr('data-counter'));
                $("#message1").text("Press the Attack button to fight Triss");
                rpg.fight();
            }
        });   
    },
// Function for what happens when you click attack
    fight: function () {
        $("#attack").click(function () {
            if (rpg.compChoice === true) {
                rpg.attackCount++;
                rpg.enemyHP -= (rpg.attackCount * rpg.championAttack);
                $("#computerChampion .hp").text(rpg.enemyHP);
                rpg.championHP -= rpg.enemyCounter;
                $("#playerChampion .hp").text(rpg.championHP);
                if (rpg.championHP <= 0) {
                    rpg.lose();
                } else if (rpg.enemyHP <= 0) {
                    rpg.enemyDefeat();
                }
            }
        });
    },
// Function for an enemy dying along with win/loss functions
    enemyDefeat: function () {
        this.defenders--;
        this.compChoice = false;
        $("#message1").text("Select who to fight next!");
        $(this.enemy).fadeOut('slow');
        $("#attack").hide("slow");
        if (this.defenders > 0) {
            rpg.enemySelect();
        } else {
            rpg.win();
        }
    },  
    lose: function () {
        $(this.player).fadeOut('slow');
        $("#message1").text("");
        $("#message2").text("You've died! Try again??");
        $("#attack").hide("slow");
        $("#tryAgain").show("slow");
        rpg.remainingDefenders.fadeOut("slow");
        $(this.enemy).fadeOut('slow');
    },
    win: function () {
        $("#message1").text("");
        $("#message2").text("You win! Try again??");
        $("#attack").hide("slow");
        $("#tryAgain").show("slow");
        $(this.player).fadeOut('slow');
    }, 
    reload: function() {
    location.reload();
}

}
rpg.charSelect();
$("#tryAgain").hide("slow");




