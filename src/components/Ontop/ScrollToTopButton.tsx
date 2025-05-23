import "./ScrollToTopButton.css";

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
            <img src="/src/assets/img/witch-broom.png" alt="Sorcière sur balai" />
        </button>
    );
};

export default ScrollToTopButton;
