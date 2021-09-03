input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    health += 1
    soundExpression.twinkle.play()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(health)
})
input.onButtonPressed(Button.B, function () {
    health += 1
    sleep += 4
    soundExpression.yawn.playUntilDone()
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        . # # . .
        . . . . .
        `)
    soundExpression.yawn.playUntilDone()
    basic.showIcon(IconNames.Asleep)
    basic.showLeds(`
        . . . . .
        . # # . .
        . . # # .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.Asleep)
    soundExpression.yawn.playUntilDone()
    basic.showLeds(`
        . . # # .
        . . . # #
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    soundExpression.sad.playUntilDone()
    health += -1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.giggle.playUntilDone()
    health += 1
})
let sleep = 0
let health = 0
basic.showIcon(IconNames.Happy)
health = 10
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # # #
        . . # # .
        `)
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # # #
        . # . # .
        `)
    basic.showLeds(`
        . # . . .
        # # . . .
        . # . . .
        . # # # .
        . # # . .
        `)
    basic.showLeds(`
        . . # . .
        . . # # .
        . . # . .
        # # # . .
        . # # . .
        `)
    basic.showLeds(`
        . . # . .
        . . # # .
        . . # . .
        # # # . .
        . # . # .
        `)
    if (health == 0) {
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # . .
            . # # . #
            # # # # #
            `)
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
        basic.pause(2000)
        basic.showString("NOVA! ")
    }
})
basic.forever(function () {
    health += -1
    basic.pause(2000)
})
