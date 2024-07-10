import {kebabCaseToTitleCase} from './helpers'
describe('kebabCaseToTitleCase', () => {
    it('works for no hyhens', () => {
        expect(kebabCaseToTitleCase('red')).toBe("Red");
    });

    it('works for one hyhens', () => {
        expect(kebabCaseToTitleCase('midnight-blue')).toBe("Midnight Blue");

    });
    it('works for multiple hyhens', () => {
        expect(kebabCaseToTitleCase('medium-violet-red')).toBe("Medium Violet Red");

    });
});