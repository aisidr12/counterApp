import {getUser, getUsuarioActivo} from '../../src/base-pruebas/05-funciones'

describe('Pruebas en 05- funciones', ()=>{

    test(`getUser debe retornar un objecto`, () =>{


        const testUser =  {
                uid: 'ABC123',
                username: 'El_Papi1502'
        };

        const user =  getUser();

        expect(testUser).toEqual(user);

    });


    test(`test de Usuario Activo debe retornar un objeto`,()=> { 

        const name = 'Arturo'

        const user = getUsuarioActivo(name);
        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: name
        });

    });
})