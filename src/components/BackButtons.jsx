import { useNavigate } from "react-router-dom";


const BackButtons = () => {
    const navigate = useNavigate();

    return (
        <div className='flex justify-center items-center gap-4'>
            <button className="bg-btn-bg text-btn-text py-2 px-5 rounded-2xl hover:bg-btn-hover-bg transition-all  shadow-md" onClick={()=>navigate(-1)}>Go Back</button>
            <button className="bg-text-color3 text-btn-text py-2 px-5 rounded-2xl hover:bg-btn-bg transition-all shadow-md" onClick={()=>navigate("/")}>Home</button>
        </div>
    )
}


export default BackButtons;