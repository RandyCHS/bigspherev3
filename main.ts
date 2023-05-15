//  you can hardcode the coördinates of the desired center here:
let posx = 0
let posy = 0
let posz = 0
//  Or you can use the setCenter chatcommand with three parameters (x,y,z) just before you start building your sphere
player.onChat("setCenter", function setCenter(iposx: number, iposy: number, iposz: number) {
    
    posx = iposx
    posy = iposy
    posz = iposz
    player.say("center of sphere set to : " + posx + " " + posy + " " + posz)
})
//  you can change the desired block here
player.onChat("sphere", function sphere(radius: number) {
    let dist: number;
    for (let y = posy - radius; y < posy + radius + 1; y++) {
        for (let x = posx - radius; x < posx + radius + 1; x++) {
            player.say("start row (x): " + x + " of layer (y): " + y)
            for (let z = posz - radius; z < posz + radius + 1; z++) {
                dist = ((posx - x) ** 2 + (posy - y) ** 2 + (posz - z) ** 2) ** 0.5
                if ((dist - radius) ** 2 < 0.5) {
                    //  change to "if dist<=radius:" for a filled sphere
                    player.teleport(world(x, y + 1, z))
                    //  player is teleporter to avoid rendering distance issues
                    blocks.place(EMERALD_BLOCK, world(x, y, z))
                }
                
            }
        }
    }
})
