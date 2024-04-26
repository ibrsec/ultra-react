
 
const PeopleCard = ({id,email,first_name,last_name,avatar}) => {
  return (
    <div className="card  shadow-xl flex rounded-md  gap-3 h-[8rem] ">
        <img className=" rounded-s-md w-[40%] object-cover" src={avatar} alt="" />
        <div className="flex flex-col justify-center">
            <h5 className=" font-semibold text-text-muted">{first_name} {last_name}</h5>
            <p className="text-text-color3">{email }</p>
        </div>
    </div>
  )
}

export default PeopleCard;