import { Link, useNavigate } from "react-router-dom";

export default function GoBack() {
    const navigate = useNavigate();

    function goBackOne() {
        navigate(-1);
    }

    return (
        <div className="go-back">
            <Link to="../." onClick={goBackOne}><h1 className="fs-body font-black">Go Back</h1></Link>
            <h1></h1>
        </div>
    )
}