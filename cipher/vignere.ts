interface options {
    uppercase: boolean;
    numbers: boolean;
    symbols: boolean;
}

export function generateCharacterList(options: options) {
    let { uppercase, numbers, symbols } = options;
    let characterList = "abcdefghijklmnopqrstuvwxyz";
    let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let symbolList = "`!@#$%^&*()~+-=_{}[]\\/|:;\"'<>.,?";

    if (uppercase) characterList = uppercaseLetters + characterList;
    if (numbers) characterList += "1234567890";
    if (symbols) characterList += symbolList;

    console.log(characterList);
    return characterList;
}

export function encryptVigenere(
    plaintext: string,
    key: string,
    options: options
) {
    let encryptedText = "";
    if (!key || !plaintext) {
        return "";
    }
    let characterList = generateCharacterList(options);
    plaintext.split("").map((char, i) => {
        if (characterList.indexOf(char) > -1) {
            encryptedText +=
                characterList[
                    (characterList.indexOf(char) +
                        characterList.indexOf(key[i % key.length])) %
                        characterList.length
                ];
        } else {
            encryptedText += char;
        }
    });
    return encryptedText;
}

export function decryptVigenere(
    encryptedText: string,
    key: string,
    options: options
) {
    if (!key || !encryptedText) {
        return "";
    }

    let characterList = generateCharacterList(options);

    let decryptedText = "";
    encryptedText.split("").map((char, i) => {
        if (characterList.indexOf(char) > -1) {
            decryptedText +=
                characterList[
                    (characterList.indexOf(char) -
                        characterList.indexOf(key[i % key.length]) +
                        characterList.length) %
                        characterList.length
                ];
        } else {
            decryptedText += char;
        }
    });
    return decryptedText;
}
