import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const LaunchesCard = (props) => {
    const {flight_number,links,mission_name,rocket,launch_date_utc,upcoming,launch_site} = props
    return (

           <div className="card text-dark mx-1 my-1"><div className="card-body"><h5 className="card-title"><span>Mission {flight_number}: <a href={links.wikipedia} style={{ textDecoration: 'none' }}>{mission_name}</a></span></h5><div className="card-text">Rocket Name: {rocket.rocket_name}<br/>Launch Date: {launch_date_utc.slice(0,10)}<span className="float-right">Time: {launch_date_utc.slice(11,19)}   {upcoming===true?"(UPCOMING)":''}</span><br/>Launch Site: {launch_site.site_name_long}</div></div></div> 

    )
}

export default LaunchesCard
