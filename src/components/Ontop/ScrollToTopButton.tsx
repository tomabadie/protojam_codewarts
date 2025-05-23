import "./ScrollToTopButton.css";
import broomIcon from "../../assets/img/witch-broom.png";

const ScrollToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            className="scroll-to-top"
            onClick={scrollToTop}
            aria-label="Retour en haut"
            type="button"
        >
            <img src={broomIcon} alt="Sorcière sur balai" />
        </button>
    );
};

export default ScrollToTopButton;
