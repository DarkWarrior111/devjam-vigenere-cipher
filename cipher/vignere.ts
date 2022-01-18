let characterVariant = {
    upperlowernum: "",
    upperlower: "",
    lower: "",
    lowernum: "",
};

export function encodeVignere(
    plaintext: string,
    key: string,
    characterList: string
) {
    let encodedtext = "";
    if (!key || !plaintext) {
        return "";
    }
    // if uppercase characters is not present in characrerList then convert everything to lowercase
    if (characterList.indexOf("ABCDEFGHIJKLMNOPQRSTUVWXYZ") < 0) {
        plaintext = plaintext.toLowerCase();
        key = key.toLowerCase();
    }
    plaintext.split("").map((char, i) => {
        if (characterList.indexOf(char) > -1) {
            encodedtext +=
                characterList[
                    (characterList.indexOf(char) +
                        characterList.indexOf(key[i % key.length])) %
                        characterList.length
                ];
        } else {
            encodedtext += char;
        }
    });
    return encodedtext;
}

export function decodeVignere(
    encodedtext: string,
    key: string,
    characterList: string
) {
    if (!key || !encodedtext) {
        return "";
    }
    if (characterList.indexOf("ABCDEFGHIJKLMNOPQRSTUVWXYZ") < 0) {
        encodedtext = encodedtext.toLowerCase();
        key = key.toLowerCase();
    }
    let decodedtext = "";
    encodedtext.split("").map((char, i) => {
        if (characterList.indexOf(char) > -1) {
            decodedtext +=
                characterList[
                    (characterList.indexOf(char) -
                        characterList.indexOf(key[i % key.length]) +
                        characterList.length) %
                        characterList.length
                ];
        } else {
            decodedtext += char;
        }
    });
    return decodedtext;
}
