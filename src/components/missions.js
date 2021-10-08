import { useDispatch, useSelector } from "react-redux";
import { loadposts } from "../store/missions";
import { useEffect } from "react";

const Missions = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.list);

    useEffect(() => {
        dispatch(loadposts());
    }, [dispatch]);

    return (
        <div>
            <h1>Launches</h1>
            <ol>
                {posts.map((post) => (
                    <li key={post.flight_number}><div>{post.rocket.rocket_name}</div><div>{post.mission_name}</div><a href="#">p</a></li>
                ))}
            </ol>
        </div>
    );
};

export default Missions;
