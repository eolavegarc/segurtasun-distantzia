radio.onReceivedNumber(function (receivedNumber) {
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) > -20) {
        basic.showLeds(`
            # . . . #
            . # # # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    }
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < -20) {
        basic.showIcon(IconNames.Sad)
    }
})
radio.setGroup(100)
radio.setTransmitPower(3)
basic.forever(function () {
    radio.sendNumber(0)
})
