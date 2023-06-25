export default function Button1({ title, handleClick }) {


    return (
        <>
            <button
                className="btn uppercase font-white fs-subtitle"
                onClick={handleClick}
            >{title}</button>
        </>
    )
}