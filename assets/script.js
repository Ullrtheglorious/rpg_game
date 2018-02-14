
var rpg = {
    ciri: $('.ciri_player'),
    geralt: $('.geralt_player'),
    yennefer: $('.yennefer_player'),
    triss: $('.triss_player'),
    starting_bg: $(".starting_bg"),

    charSelect: function() {
    
    this.ciri.click(function (){
        rpg.starting_bg.toggleClass('ciri_bg');
    });

    this.geralt.click(function () {
        rpg.starting_bg.toggleClass('geralt_bg');
    });

    this.yennefer.click(function () {
        rpg.starting_bg.toggleClass('yennefer_bg');
    });
    
    this.triss.click(function () {
        rpg.starting_bg.toggleClass('triss_bg');
    });
    
    }
}
rpg.charSelect();




