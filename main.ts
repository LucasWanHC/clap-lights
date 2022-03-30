input.onSound(DetectedSound.Loud, function () {
    lightsOn = !(lightsOn)
    if (lightsOn) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
let lightsOn = false
input.setSoundThreshold(SoundThreshold.Loud, 96)
led.setBrightness(64)
basic.forever(function () {
	
})
