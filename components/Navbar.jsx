import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faKeycdn } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(true);
    useEffect(() => {
        darkMode
            ? document.documentElement.classList.add("dark")
            : document.documentElement.classList.remove("dark");
    }, [darkMode]);

    return (
        <nav className="h-10 bg-gray-300 dark:bg-gray-900 shadow flex items-center justify-between px-2 font-mochiy">
            <div className="text-2xl font-bold opacity-75 transition-opacity hover:opacity-100 flex">
                <Link href="/">
                    <a className="space-x-2">
                        <FontAwesomeIcon
                            className="pointer-events-none"
                            icon={faKeycdn}
                        />
                        <span className="hidden sm:inline-block">
                            Vigenère Cipher
                        </span>
                    </a>
                </Link>
            </div>
            <div className="flex items-center gap-4">
                <button
                    onClick={() => {
                        setDarkMode(!darkMode);
                    }}
                    className="p-1 rounded hover:bg-gray-400 transition-colors"
                >
                    {darkMode ? (
                        <>
                            <FontAwesomeIcon
                                className="font-xl pointer-events-none"
                                icon={faSun}
                            />{" "}
                            <span className="hidden sm:inline-block">
                                LightMode
                            </span>
                        </>
                    ) : (
                        <>
                            <FontAwesomeIcon
                                className="font-xl pointer-events-none"
                                icon={faMoon}
                            />
                            <span className="hidden sm:inline-block">
                                DarkMode
                            </span>
                        </>
                    )}
                </button>
                <Link href="/about">
                    <a className="p-1 rounded hover:bg-gray-400 transition-colors">
                        About
                    </a>
                </Link>
                <a
                    href="https://github.com/DarkWarrior111/devjam-vigenere-cipher"
                    target="_blank"
                    className="flex items-center transition-opacity opacity-75 hover:opacity-100"
                >
                    <FontAwesomeIcon
                        className="text-2xl pointer-events-none"
                        icon={faGithub}
                    />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
