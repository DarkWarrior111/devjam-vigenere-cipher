import Head from "next/head";

const about = () => {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <div className="prose mx-auto mt-5 rounded shadow bg-gray-200 dark:bg-gray-900 dark:prose-invert prose-sm md:prose-base p-3">
                <h1 id="what-is-the-vigen-re-cipher-">
                    What is the Vigenère Cipher?
                </h1>
                <p>
                    The{" "}
                    <a href="https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher">
                        Vigenère cipher
                    </a>{" "}
                    is a polyalphabetic substitution cipher that is a natural
                    evolution of the Caesar cipher. The Caesar cipher encrypts
                    by shifting each letter in the plaintext up or down a
                    certain number of places in the alphabet. If the message was
                    right shifted by 4, each A would become E, and each S would
                    become W.
                </p>
                <p>
                    In the Vigenère cipher, a message is encrypted using a
                    secret key, as well as an encryption table (called a
                    Vigenere square, Vigenere table, or tabula recta). The
                    tabula recta typically contains the 26 letters of the Latin
                    alphabet from A to Z along the top of each column, and
                    repeated along the left side at the beginning of each row.
                    Each row of the square has the 26 letters of the Latin
                    alphabet, shifted one position to the right in a cyclic way
                    as the rows progress downwards. Once B moves to the front, A
                    moves down to the end. This continues for the entire square.
                </p>
                <p>
                    Also, other alphabets than the English alphabet can be used
                    in a similar way to construct a tabula recta.
                    <img
                        src="https://www.boxentriq.com/img/vigenere-table1.png"
                        alt="Tabula Recta"
                    />
                </p>
                <p>Let's take this plaintext phrase as an example:</p>
                <pre>
                    <code>
                        <span class="hljs-attribute">
                            IMPROVE YOUR PUZZLE SOLVING SKILLS
                        </span>
                    </code>
                </pre>
                <p>
                    After finalizing the plaintext, the person encrypting would
                    then pick a secret key, which would help encrypt and decrypt
                    the message. Our example secret key here is:
                </p>
                <pre>
                    <code>
                        <span class="hljs-attribute">BOXENTRIQ</span>
                    </code>
                </pre>
                <p>
                    The next step is repeating the secret key enough times so
                    its length matches the plain text.
                </p>
                <pre>
                    <code>
                        <span class="hljs-attribute">
                            IMPROVE YOUR PUZZLE SOLVING SKILLS
                        </span>
                    </code>
                </pre>
                <pre>
                    <code>
                        <span class="hljs-keyword">BOXENTR </span>IQBO XENTRI
                        QBOXENT RIQBOX
                    </code>
                </pre>
                <p>
                    Once the two lines are split into five-letter groups, start
                    encrypting. Take one letter from the plaintext group and a
                    letter from the secret key group (we're going to start with
                    I and B), and find the entry in the tabula recta where the
                    row and column intersect. For this example, the first letter
                    of the encrypted cipher text is J.
                    <img
                        src="https://www.boxentriq.com/img/vigenere-table2.png"
                        alt="Vigenere table example"
                    />
                </p>
                <p>
                    Once you've done that for every character, your final
                    encrypted text should look like this:
                </p>
                <pre>
                    <code>
                        <span class="hljs-attribute">
                            JAMVB OVGEV FMYMS CMIPZ SMAZJ SYMZP
                        </span>
                    </code>
                </pre>
                <p>
                    You can use this cipher for short or long messages. Once
                    you've mastered the tabula recta, the encryption process is
                    easy!
                </p>
                <h1 id="how-to-decrypt-it">How to Decrypt it</h1>
                <p>
                    If you have the secret key, decrypting is as easy as
                    encrypting. You can work backwards using the tabula recta.
                    First repeat the secret key so its length matches the cipher
                    text.
                </p>
                <pre>
                    <code>
                        <span class="hljs-attribute">
                            JAMVB OVGEV FMYMS CMIPZ SMAZJ SYMZP
                        </span>
                    </code>
                </pre>
                <pre>
                    <code>
                        <span class="hljs-keyword">BOXEN </span>TRIQB OXENT
                        RIQBO XENTR IQBOX
                    </code>
                </pre>
                <p>
                    Using the tabula recta, find the row that corresponds to the
                    first letter in your secret key text- in our case, B. In the
                    B row, find the corresponding cipher text letter J. The
                    vertical column where that cipher text letter is located
                    reveals the plaintext letter I.
                    <img
                        src="https://www.boxentriq.com/img/vigenere-table3.png"
                        alt="Vigenère cipher table"
                    />
                </p>
                <p>
                    The Vigenère cipher can also be described and then decrypted
                    algebraically, by assigning each letter from A to Z a value
                    from 0 to 25, with addition being performed modulo 26.
                </p>
                <h1 id="how-to-break-it">How to Break It</h1>
                <p>
                    Of course, these decryption methods only work if the secret
                    key is known. In his initial attack against the Vigenère
                    cipher, Friedrich Kasiski had success by examining repeated
                    strings of characters in the cipher text, which could
                    indicate the length of the secret key. This method is now
                    called the Kasiski examination. Finding more repeated
                    strings of characters helps narrow down the length of the
                    potential secret key. Once the length of the secret key is
                    known, the cipher text is rewritten into a corresponding
                    number of columns, with a column for each letter of the key.
                    Each column is then made up of plaintext that's been
                    encrypted by one Caesar cipher. The code-breaker then breaks
                    the cipher text in a similar way to a Caesar cipher.
                </p>
                <p>
                    Auguste Kerckhoffs improved on Kasiski's method by matching
                    each “column&#39;s letter frequencies to shifted plaintext
                    frequencies to discover the key letter (Caesar shift) for
                    that column.” Once the code-breaker knows each letter in the
                    secret key, all they have to do is decrypt the cipher text
                    using a Vigenere square.
                </p>
                <p>
                    Another option is the key elimination method. If you guess
                    the key length and then subtract the ciphertext from itself,
                    offset by the key length, it will eliminate the secret key.
                    The result will be the plaintext subtracted from itself,
                    offset by the key length. If any words longer than the key
                    length can be guessed, their self-encryption can be searched
                    for.
                </p>
                <p>
                    Copied from{" "}
                    <a href="https://www.boxentriq.com/code-breaking/vigenere-cipher">
                        https://www.boxentriq.com/code-breaking/vigenere-cipher
                    </a>
                </p>
            </div>
        </>
    );
};

export default about;
