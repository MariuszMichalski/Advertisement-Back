import {AdRecord} from "../records/ad.record";

test('Can build AdRecord', () => {
    const ad = new AdRecord({
        name: 'Test Name',
        description: 'blah',
        url: 'https://wp.pl',
        price: 0,
        lat: 9,
        lon: 9,
    });

    expect(ad.name).toBe('Test Name')
    expect(ad.description).toBe('blah')
})
