import * as typeorm from 'typeorm';
import { getRepository } from 'typeorm';
import { mocked } from 'ts-jest/utils'
import TokenData from '../../interfaces/tokenData.interface';
import AuthenticationService from '../authentication.service';

(typeorm as any).getRepository = jest.fn();

describe('The AuthenticationService', () => {
    describe('when creating a cookie', () => {
        it('should return a string', () => {
            const tokenData: TokenData = {
                token: '',
                expiresIn: 1,
            };
            (typeorm as any).getRepository.mockReturnValue({});
            const authenticationService = new AuthenticationService();
            expect(typeof authenticationService.createCookie(tokenData))
                .toEqual('string');
        });
    });
});

// jest.mock('typeorm', () => ({ getRepository: jest.fn() }));

// describe('The AuthenticationService', () => {
//     describe('when creating a cookie', () => {
//         it('should return a string', () => {
//             const tokenData: TokenData = {
//                 token: '',
//                 expiresIn: 1,
//             };
//             const userRepo = { findUser: jest.fn().mockResolvedValueOnce('fake user') };
//             mocked(getRepository).mockReturnValue(userRepo);
//             const authenticationService = new AuthenticationService();
//             expect(typeof authenticationService.createCookie(tokenData))
//                 .toEqual('string');
//         });
//     });
// });