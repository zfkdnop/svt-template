import { writable } from 'svelte/store';
export const NULL_SESSION = { data: '' };
export const session = writable(NULL_SESSION);


// function createSession() {
//     const { subscribe, set, update } = writable(NULL_SESSION);
//     return {
//         subscribe,
//         authenticate: (u, p, apiUrl) => {
//             // attempt to authenticate via API server using user/pass login info
//             // [SUCCESS] set the store to a non-zero value (JWToken)
//             set({ data: '1234' });
//         },
//         verify: (token, apiUrl) => {
//             // attempt to authenticate via API server using existing/stored token
//             // [SUCCESS] set the store to a non-zero value (JWToken)
//             set({ data: '1234' });
//         },
//         clearAuth: () => set(NULL_SESSION)
//     };
// }

//export const session = createSession();
