const { loadFeature, defineFeature } = require('jest-cucumber');
const handler = require('../../../handler');

const feature = loadFeature('../features/list-films.feature', { loadRelativePath: true, errors: true });

defineFeature(feature, test => {
    test('Instancing a list', ({ given }) => {

        let films;
        given('no instance', () => {
            expect(films).toBeUndefined;
        });

        

      
    });
});