import { useParams } from "react-router-dom"
import "./post.css"

export const PostBlog = () => {
    const {postID} = useParams()
    return (
        <>
        <span>Posty - {postID}</span>
        </>
    )
}