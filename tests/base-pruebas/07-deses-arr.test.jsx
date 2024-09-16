import { string } from "prop-types";
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe(`Test para probar el dese arr `,() => {

    test('Debe de retornar un string y un numero',()=>{

        const [ letters, numbers ] = retornaArreglo();
        console.log(retorno);

        expect( letters ).toBe('ABC');
        expect( numbers ).toBe(123);

        expect(typeof letters).toBe('string')
        expect(typeof numbers).toBe('number')

        expect(letters ).toBe(expect.any(string));

    });

})