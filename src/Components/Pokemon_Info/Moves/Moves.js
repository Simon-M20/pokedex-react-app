const Moves = ({ moves }) => {
    return (
        <section
            className={`${moves ? "movesSection active" : "movesSection"}`}
        >
            <h2>Moves</h2>
        </section>
    );
};

export default Moves;
