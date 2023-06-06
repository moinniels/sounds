input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 C5 G G C5 C5 G G ", 188)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 99; index++) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 5000, 255, 255, 50, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 4953, 1, 255, 255, 5242, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    basic.showLeds(`
        # . . . .
        . # . . #
        . . # . #
        . . . # #
        . # # # #
        `)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    led.stopAnimation()
    basic.clearScreen()
    music.setVolume(0)
    music.stopAllSounds()
    music.stopMelody(MelodyStopOptions.All)
})
