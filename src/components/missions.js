import { useDispatch, useSelector } from "react-redux";
import { loadposts } from "../store/missions";
import { useEffect, useState } from "react";


const Missions = () => {
    const [search,setSearch] = useState("");
    const [checked,setChecked] = useState(false);
    const [ldate,setLDate] = useState("");
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.list);

    useEffect(() => {
        dispatch(loadposts());
    }, [dispatch]);
    


    const filteredPosts = posts.filter(
        perPost => {
        //   var launchmonth = parseInt((perPost.launch_date_local).slice(5,7)); 
        //   var launchday = parseInt((perPost.launch_date_local).slice(8,10));
        //   var launchyear = parseInt((perPost.launch_date_local).slice(0,4));


          var launchdate =new Date(perPost.launch_date_local);

          var dateObj = new Date();
        //   var month = dateObj.getUTCMonth() + 1; //months from 1-12
        //   var day = dateObj.getUTCDate();
        //   var year = dateObj.getUTCFullYear();

          // To calculate the time difference of two dates
          var Difference_In_Time = dateObj.getTime() - launchdate.getTime();
  
          // To calculate the no. of days between two dates
          var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);


          return (
            perPost.rocket.rocket_name
            .toLowerCase().replace(/\s+/g, '')
            .includes(search.toLowerCase().replace(/\s+/g, ''))
            &&
            perPost.upcoming===checked
            &&
            (ldate==="Last Week"?(Difference_In_Days<=7):ldate==="Last Month"?(Difference_In_Days<=30):ldate==="Last Year"?(Difference_In_Days<=365):false)
            // (ldate==="Last Week"?(day-7<=launchday&&launchday<=day):ldate==="Last Month"?(month-1<=launchmonth&&launchmonth<=month&&launchyear==year):ldate==="Last Year"?(year-1<=launchyear&&launchyear<=year):false)
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

      function showAll() {
        return (
            <ol>
                {posts.map((post) => (
                    <li key={post.flight_number}><div>{post.rocket.rocket_name}</div><div>{post.mission_name}   {post.upcoming==true?"UPCOMING":''}</div></li>
                ))}
            </ol>
        );
      }
    
      function searchList() {
        return (
            // {filteredPersons.map(person =>  <Card key={person.id} person={person} />)}
            <ol>
                {filteredPosts.map((post) => (
                    <li key={post.flight_number}><div>{post.rocket.rocket_name}</div><div>{post.mission_name}   {post.upcoming==true?"UPCOMING":''}     {post.launch_date_local}</div></li>
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

      const handleSelect = e => {
        setLDate(e.target.value);
      };


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
                <label>Upcoming<input type="checkbox" onChange={e => setChecked(e.target.checked)} /></label>
            </div>
            <select value={ldate} onChange={handleSelect}>
                <option value='Last Week'>Last Week</option>
                <option value='Last Month'>Last Month</option>
                <option value='Last Year'>Last Year</option>
            </select>
            
            {/* {checked===undefined && search===""?showAll():searchList()} */}
            {showAll()}
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
