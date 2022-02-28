var player = {
    strength : 1,
    powerUp : function(){
    this.strength = this.strength +  1;
    },
    consStrength : function(){
        let cons = player.strength;
    return cons;
    }
}

document.write(player.strength + "<br>");
player.powerUp();
document.write(player.consStrength() + "<br>");
player.powerUp();
player.powerUp();
player.powerUp();
document.write(player.consStrength() + "<br>");