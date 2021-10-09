import { useDispatch, useSelector } from "react-redux";
import { loadposts } from "../store/missions";
import { useEffect, useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


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

          var launchdate =new Date(perPost.launch_date_utc);

          var dateObj = new Date();

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
    

      function showAll() {
        return (
            <div className="d-flex flex-column">
                {posts.map((post) => (
                    <div className="card text-dark mx-1 my-1"><div className="card-body"><h5 className="card-title"><span>Mission {post.flight_number}: <a href={post.links.wikipedia} style={{ textDecoration: 'none' }}>{post.mission_name}</a></span></h5><div className="card-text">Rocket Name: {post.rocket.rocket_name}<br/>Launch Date: {post.launch_date_utc.slice(0,10)}<span className="float-right">Time: {post.launch_date_utc.slice(11,19)}   {post.upcoming===true?"(UPCOMING)":''}</span><br/>Launch Site: {post.launch_site.site_name_long}</div></div></div>
                ))}
            </div>
        );
      }
    
      function searchList() {
        return (
            <div className="d-flex flex-column">
                {filteredPosts.map((post) => (
                    <div className="card text-dark mx-1 my-1"><div className="card-body"><h5 className="card-title"><span>Mission {post.flight_number}: <a href={post.links.wikipedia} style={{ textDecoration: 'none' }}>{post.mission_name}</a></span></h5><div className="card-text">Rocket Name: {post.rocket.rocket_name}<br/>Launch Date: {post.launch_date_utc.slice(0,10)}<span className="float-right">Time: {post.launch_date_utc.slice(11,19)}   {post.upcoming===true?"(UPCOMING)":''}</span><br/>Launch Site: {post.launch_site.site_name_long}</div></div></div>
                ))}
            </div>
        );
      }


      const handleSelect = e => {
        setLDate(e.target.value);
      };


    return (
        <div class="container mt-3 bg-dark text-white py-3 ">
            <div className="d-flex justify-content-center">
            <div className="d-flex flex-column">
            <h1 className="d-flex justify-content-center my-3">SpaceX Launches</h1>
            <h3 className="d-flex justify-content-center mt-3">Filter Launches</h3>
            <p className="d-flex justify-content-center mb-3">(please interact with all the filtering options)</p>
            <div className="d-flex justify-content-center my-1">
                <label>Search By Rocket Name:
                <input 
                type = "search"
                className="form-control" 
                placeholder = "Search Launches" 
                onChange={e => setSearch(e.target.value)}
                />
                </label>
            </div>
            <div className="d-flex justify-content-center checkbox my-1">
                <label>Upcoming &nbsp;&nbsp;<input type="checkbox" onChange={e => setChecked(e.target.checked)} /></label>
            </div>
            <div className="d-flex justify-content-center my-1">
                <label>Filter by Launch Date &nbsp;&nbsp; 
            <select className="selectpicker btn-secondary" value={ldate} onChange={handleSelect}>
                <option value='Last Week'>Last Week</option>
                <option value='Last Month'>Last Month</option>
                <option value='Last Year'>Last Year</option>
            </select>
            </label>
            </div>
            
 
            <div className="d-flex justify-content-center py-3 my-2">
            {searchList()}
            </div>

            <h3 className="d-flex justify-content-center">List of Launches</h3>
            <div className="d-flex justify-content-center py-3 my-2">
            {showAll()}
            </div>      

            </div>
            </div>

            
        </div>
    );
};

export default Missions;
