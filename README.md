# Vigenère Cipher

This project was made as a part of [Devjam](https://devjam.vercel.app).

# Demo

### [Live Demo](https://devjam-vigenere-cipher.vercel.app/)

![Screenshot](https://i.imgur.com/Xicb4gn.png)

# Features

## User Stories

-   [x] User can see the app window with these components:
    -   Plain text message input field
    -   Encryption key input field
    -   Action buttons - 'Encrypt' and 'Decrypt'
    -   Resulting encrypted or decrypted message
-   [x] User can enter the text to be encrypted in the plain text message input
        field
-   [x] User can enter the Encryption key the Vigenere algorithm will use to encrypt the plain text message
-   [x] User can see the encrypted message displayed in the result field
-   [x] User can decrypt encrypted messages using Encryption key

## Bonus features

-   [ ] User can see a 'Compare' button after decryption that compares the
        original plain text message with the decrypted message
-   [x] User can copy the encrypted message by clicking a button
-   [x] User can generate a random encryption key
-   [x] User can encrypt uppercase letters, numbers and symbols if they choose to

**Note:** If a character of input or key is not present inside characterlist (default: lowercase a-z), the cipher returns the same character without encrypting

# Dependencies

-   Next.js
-   Tailwind CSS
-   FontAwesome Icons

# Installation and running

Clone git repo

```
git clone https://github.com/DarkWarrior111/devjam-vigenere-cipher.git
```

Install dependencies

```
npm install
```

Run

```
npm run dev
```

Build

```
npm run build
```

# Credits

-   [Boxentriq](https://www.boxentriq.com/code-breaking/vigenere-cipher) - Text for about page
