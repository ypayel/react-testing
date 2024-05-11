import { useParams } from "react-router-dom"

export const User = () => {

    const {userID} = useParams();
    return (
        <>
        <span>To jest uzytkownik - {userID}</span>
        </>
    )
}