import { classNames } from './classNames'

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('class')).toBe('class')
    })

    test('with additional params', () => {
        const expected = 'class class1 class2'
        expect(classNames('class', {}, ['class1', 'class2'])).toBe(expected)
    })

    test('with mods', () => {
        const expected = 'class class1 class2 hovered scrollable'
        expect(classNames('class',
            { hovered: true, scrollable: true },
            ['class1', 'class2']))
            .toBe(expected)
    })

    test('with one mod false', () => {
        const expected = 'class class1 class2 scrollable'
        expect(classNames('class',
            { hovered: false, scrollable: true },
            ['class1', 'class2']))
            .toBe(expected)
    })
})
