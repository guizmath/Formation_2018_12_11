import { Clock } from './clock'

describe('Clock class', () => {
    it('constructor with empty options', () => {
        const clock = new Clock()
        expect(clock).toBeDefined()
    })

    describe('start method', () => {
        let clock: Clock

        beforeEach(() => {
            clock = new Clock()
            jest.useFakeTimers()
        })

        afterEach(() => {
            jest.useRealTimers()
        })

        it('should call update method immediately', () => {
            clock.update = jest.fn()
            clock.start()
            expect(clock.update).toHaveBeenCalledTimes(1)
        })

        it('should call update method after 1 second', () => {
            clock.update = jest.fn()
            jest.useFakeTimers()
            clock.start()
            jest.advanceTimersByTime(1000)
            expect(clock.update).toHaveBeenCalledTimes(2)
        })
    })
})
