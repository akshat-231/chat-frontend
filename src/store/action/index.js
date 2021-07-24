export const process = (encrypt, text, cipher) => {
    return {
        type : "PROCESS",
        payload : {
            encrypt,
            text,
            cipher
        },
    };
};