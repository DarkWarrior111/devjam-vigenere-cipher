import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Popup = ({ children, setHidden, hidden }) => {
    return (
        <>
            <div
                className={` ${
                    hidden
                        ? "scale-0"
                        : "absolute top-0 left-0 h-screen w-screen flex items-center justify-center z-10"
                }`}
            >
                <div
                    className={`transition-all duration-200 ${
                        hidden
                            ? "bg-transparent"
                            : " absolute inset-0 -z-10 bg-gray-100 dark:bg-gray-900 opacity-50"
                    }`}
                    onClick={() => setHidden(true)}
                ></div>

                <div
                    className={`bg-gray-300 dark:bg-gray-800 space-y-2 mx-3 w-96 shadow-md shadow-gray-500 p-2 rounded-md relative transition-transform duration-200 ${
                        hidden ? "scale-0" : "scale-100"
                    }`}
                >
                    <button
                        className="absolute -top-2 -right-2 text-2xl"
                        onClick={() => setHidden(true)}
                    >
                        <FontAwesomeIcon
                            className="text-gray-200 shadow-sm bg-black rounded-full border border-black"
                            icon={faTimesCircle}
                        />
                    </button>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Popup;
