import { useDispatch, useSelector } from "react-redux";
import { loadposts } from "../store/missions";
import { useEffect, useState } from "react";


const Missions = () => {
    const [search,setSearch] = useState("");
    const [checked,setChecked] = useState(false);
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.list);

    useEffect(() => {
        dispatch(loadposts());
    }, [dispatch]);
    


    const filteredPosts = posts.filter(
        perPost => {
          return (
            perPost.rocket.rocket_name
            .toLowerCase().replace(/\s+/g, '')
            .includes(search.toLowerCase().replace(/\s+/g, ''))
            &&
            perPost.upcoming===checked
          );
        }
      );

      const filteredPosts2 = posts.filter(
        perPost => {
          return (
            perPost.upcoming===checked
          );
        }
      );
    
    //   const handleChange = e => {
    //     setSearch(e.target.value);
    //   };
    
      function searchList() {
        return (
            // {filteredPersons.map(person =>  <Card key={person.id} person={person} />)}
            <ol>
                {filteredPosts.map((post) => (
                    <li key={post.flight_number}><div>{post.rocket.rocket_name}</div><div>{post.mission_name}   {post.upcoming==true?"UPCOMING":''}</div></li>
                ))}
            </ol>
        );
      }

      function checkBoxFilter() {
        return (
            // {filteredPersons.map(person =>  <Card key={person.id} person={person} />)}
            <ol>
                {filteredPosts2.map((post) => (
                    <li key={post.flight_number}><div>{post.rocket.rocket_name}</div><div>{post.mission_name}</div></li>
                ))}
            </ol>
        );
      }


    return (
        <div>
            <h1>Launches</h1>
            <div>
                <p>Search By Rocket Name:</p>
                <input 
                type = "search" 
                placeholder = "Search Posts" 
                onChange={e => setSearch(e.target.value)}
                />
            </div>
            <div>
                <input type="checkbox" onChange={e => setChecked(e.target.checked)} /> 
            </div>
            {searchList()}
            {/* {checkBoxFilter()} */}
            

            {/* <div>{posts.map((post, id) => (
            <label key={id}>
                <input type="checkbox" data-id={id} onClick={handleChecked} /> {post.upcoming}
                <input type="checkbox" checked={post.upcoming} data-id={id} onClick={handleChecked} /> 
            </label>
            ))}</div> */}

     
                
          
            
            {/* {checked={Checked.indexOf(posts.map((post) => post.upcoming === -1)) ? false : true}} */}
            {/* <ol>
                {posts.map((post) => (
                    <li key={post.flight_number}><div>{post.rocket.rocket_name}</div><div>{post.mission_name}</div><a href="#">p</a></li>
                ))}
            </ol> */}
        </div>
    );
};

export default Missions;
