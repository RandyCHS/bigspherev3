# you can hardcode the coördinates of the desired center here:
posx=0
posy=0
posz=0

# Or you can use the setCenter chatcommand with three parameters (x,y,z) just before you start building your sphere
def setCenter(iposx, iposy, iposz):
    global posx, posy, posz
    posx=iposx
    posy=iposy
    posz=iposz
    player.say("center of sphere set to : "+posx+" "+posy+" "+posz)
player.on_chat("setCenter", setCenter)

def sphere(radius):
    for y in range(posy-radius,posy+radius+1):
        for x in range(posx-radius, posx+radius+1):
            player.say("start row (x): "+x+ " of layer (y): "+y)
            for z in range(posz-radius, posz+radius+1):
                dist=((posx-x)**2+(posy-y)**2+(posz-z)**2)**0.5
                if (dist-radius)**2 < 0.5:  # change to "if dist<=radius:" for a filled sphere
                    player.teleport(world(x, y+1, z)) # player is teleporter to avoid rendering distance issues
                    blocks.place(EMERALD_BLOCK, world(x, y, z)) # you can change the desired block here
player.on_chat("sphere", sphere)
