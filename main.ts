input.onGesture(Gesture.LogoUp, function () {
    if (autorisationcomptagesquat == 1) {
        nbdesquats += 1
        basic.pause(100)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    nbdesquats = 0
    Avertir_début_exercice()
    autorisationcomptagesquat = 1
    basic.pause(dureedusablier * 1000)
    autorisationcomptagesquat = 0
    Avertir_fin_exercice()
    basic.showString("" + (nbdesquats))
})
function Avertir_début_exercice () {
    for (let index = 0; index < 3; index++) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.pause(500)
    }
    music.play(music.tonePlayable(740, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
}
function Avertir_fin_exercice () {
    for (let index = 0; index < 3; index++) {
        music.play(music.tonePlayable(740, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        basic.pause(100)
    }
}
let nbdesquats = 0
let autorisationcomptagesquat = 0
let dureedusablier = 0
dureedusablier = 30
autorisationcomptagesquat = 0
nbdesquats = 0
