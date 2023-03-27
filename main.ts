basic.forever(function () {
    if (input.lightLevel() < 10) {
        music.playTone(988, music.beat(BeatFraction.Sixteenth))
        basic.pause(randint(10000, 30000))
    }
})
