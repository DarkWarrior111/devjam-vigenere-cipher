import Head from "next/head";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClone,
    faCog,
    faRandom,
    faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { decodeVignere, encodeVignere } from "../cipher/vignere";
import Popup from "../components/Popup";

export default function Home() {
    const defaultCharacterList = "abcdefghijklmnopqrstuvwxyz";
    const [input, setInput] = useState("");
    const [output, setOutput] = useState(input);
    const [copied, setCopied] = useState(false);
    const [characterList, setCharacterList] = useState(defaultCharacterList);
    const [key, setKey] = useState(null);
    const [decode, setDecode] = useState(false);
    const [popup, setPopup] = useState(true);

    const copyOutput = () => {
        let element = document.getElementById("output");
        navigator.clipboard.writeText(element.innerText);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 5000);
    };

    // generates random key of length 10-20 from characters inside characterList
    const generateRandomKey = () => {
        let length = Math.floor(Math.random() * 10 + 10);
        let randomKey = "";
        for (let i = 0; i < length; i++) {
            randomKey +=
                characterList[Math.floor(Math.random() * characterList.length)];
        }
        setKey(randomKey);
    };

    useEffect(() => {
        decode
            ? setOutput(decodeVignere(input, key, characterList))
            : setOutput(encodeVignere(input, key, characterList));
    }, [input, characterList, key, decode]);

    useEffect(() => {
        setInput("");
    }, [decode]);

    const moreSettings = () => {
        setPopup(!popup);
    };

    return (
        <>
            <Head>
                <title>Vigenère Cipher</title>
            </Head>

            <main className="flex dark:bg-gray-900 flex-col gap-4 shadow-lg mx-auto p-5 max-w-md z-10 bg-gray-300 mt-10 rounded-md">
                <div className="text-3xl flex justify-center w-full">
                    <div className="relative w-max font-bold font-mochiy">
                        Vigenère Cipher
                        <div className="absolute  -bottom-3 -right-9 -rotate-12 text-xl">
                            {decode ? "Decode" : "Encode"}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center gap-5 mt-3">
                    {/* using opacity-0 to make radio accessible using keyboard */}
                    <label>
                        <input
                            type="radio"
                            name="radio"
                            className="peer opacity-0"
                            defaultChecked={true}
                            onClick={() => setDecode(false)}
                        />
                        <span className="p-2 peer-focus:outline cursor-pointer rounded peer-checked:text-white peer-checked:font-bold peer-checked:bg-gray-600">
                            Encode
                        </span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="radio"
                            className="peer opacity-0"
                            onClick={() => setDecode(true)}
                        />
                        <span className="p-2 peer-focus:outline rounded cursor-pointer peer-checked:text-white peer-checked:font-bold peer-checked:bg-gray-600">
                            Decode
                        </span>
                    </label>
                </div>
                <label>
                    <span className="font-bold">
                        {decode ? "Encrypted text:" : "Plain text:"}
                    </span>
                    <div className="relative">
                        <textarea
                            value={input}
                            placeholder={
                                decode
                                    ? "Enter encrypted text here"
                                    : "Enter plaintext here"
                            }
                            onChange={(e) => setInput(e.target.value)}
                            className="rounded shadow min-h-[5rem] p-2 w-full font-mono dark:bg-gray-800"
                        />
                        <div className="absolute top-2 right-2">
                            <button
                                className="peer"
                                onClick={() => moreSettings()}
                            >
                                <FontAwesomeIcon
                                    className="pointer-events-none text-lg"
                                    icon={faCog}
                                />
                            </button>
                            <div className="absolute bg-gray-300 dark:bg-gray-700 w-max scale-0 translate-x-1/2 shadow transition-transform peer-hover:scale-100 peer-focus:scale-100 top-7 right-0 p-1 rounded-md">
                                More Options
                            </div>
                        </div>
                    </div>
                </label>

                <label className="flex gap-2 items-center">
                    <span className="font-bold">Key: </span>
                    <input
                        className="rounded shadow w-full h-8 px-2 font-mono dark:bg-gray-800"
                        type="text"
                        placeholder="Enter key here"
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                    />
                    <button
                        title="Generate Random Key"
                        className="rounded bg-gray-600 h-8 px-2 flex items-center hover:bg-gray-700 text-white font-bold"
                        onClick={() => generateRandomKey()}
                    >
                        <FontAwesomeIcon
                            className="text-xl pointer-events-none"
                            icon={faRandom}
                        />
                    </button>
                </label>
                {key !== null && key.length < 1 && (
                    <span className="text-red-600 text-sm">
                        The key cannot be empty
                    </span>
                )}

                <div>
                    <span className="font-bold">
                        {decode ? "Plain text:" : "Encrypted text:"}
                    </span>
                    <div className="bg-white  dark:bg-gray-800 relative font-mono rounded p-1 min-h-[5rem] break-words">
                        <div id="output">{output}</div>
                        <div className="absolute top-2 right-2 font-sans">
                            <button
                                className="peer"
                                onClick={() => copyOutput()}
                            >
                                <FontAwesomeIcon
                                    className="pointer-events-none text-lg"
                                    icon={faClone}
                                />
                            </button>
                            <div className="absolute bg-gray-300 dark:bg-gray-700 scale-0 translate-x-1/2 shadow transition-transform peer-hover:scale-100 peer-focus:scale-100 top-7 right-0 p-1 rounded-md">
                                {copied ? "Copied" : "Copy"}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Popup setHidden={setPopup} hidden={popup}>
                <h3 className="text-xl font-bold">Options</h3>
                <label className="flex gap-2 items-center">
                    Characters:
                    <input
                        value={characterList}
                        onChange={(e) => setCharacterList(e.target.value)}
                        className="h-8 w-full rounded focus:border border-black dark:bg-gray-700 px-1"
                        type="text"
                    />
                    {characterList !== defaultCharacterList && (
                        <button
                            className="rounded bg-gray-600 h-8 px-2 flex items-center hover:bg-gray-700 text-white font-bold"
                            onClick={() =>
                                setCharacterList(defaultCharacterList)
                            }
                        >
                            <FontAwesomeIcon
                                className="text-xl pointer-events-none"
                                icon={faSyncAlt}
                            />
                        </button>
                    )}
                </label>
                {characterList !== defaultCharacterList && (
                    <div className="text-red-600 text-sm max-w-md break-words">
                        Note: You need to use the same characterList while
                        decoding
                    </div>
                )}
            </Popup>
        </>
    );
}
