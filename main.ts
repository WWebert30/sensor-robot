let distance = 0
basic.forever(function () {
    // Measure distance
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
    // Display distance on the LED screen
    basic.showNumber(distance)
    // Control motors based on distance
    if (distance < 10) {
        // Stop motors if obstacle is too close
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
    } else {
        // Move forward
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 1)
    }
    basic.pause(100)
})