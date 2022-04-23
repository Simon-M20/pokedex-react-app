import "./TypesFilter.css";
import TypesGrid from "./TypesGrid";

const TypesFilter = ({ typesFilter, setTypesFilter }) => {
    return (
        <section
            className={`${
                typesFilter ? "typesContainer active" : "typesContainer"
            }`}
        >
            <article className='typesFilter overflow-scroll'>
                <div className='flex items-center justify-between mb-5'>
                    <h2 className='text-lg font-medium'>Types List:</h2>
                    <button className='flex items-center jutsify-end'>
                        <span
                            className='material-icons-outlined'
                            onClick={() => setTypesFilter(false)}
                        >
                            close
                        </span>
                    </button>
                </div>
                <TypesGrid />
            </article>
        </section>
    );
};

export default TypesFilter;
