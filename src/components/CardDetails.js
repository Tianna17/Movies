import React from "react";
import moment from "moment";

const CardDetails = ({ data }) => {
  const minutesToHour = (runtime) => {
    const hour = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    const time = `${hour}H ${minutes}M`;
    return time;
  };
  console.log(data);
  return (
    <div className="row py-5">
      <div className="col-md-5">
        <img
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          className="data-img "
          alt={data.title}
        />
      </div>

      <div className="col-md-7">
        <h2 className="h1">{data.title}</h2>
        <h4 className="h5">
          Released {moment(data.release_date).format("ll")}
        </h4>
        <p>
          {/*if runtime is true, run the function else unknown.*/}
          Runtime: {data.runtime ? minutesToHour(data.runtime) : "Unknown"}
        </p>
        <p>
          {data.genres &&
            data.genres.map((genre) => (
              <span className="mr-3 text-danger" key={genre.id}>
                {genre.name}
              </span>
            ))}
        </p>
        <h3>Overview</h3> <p>{data.overview}</p>
      </div>
    </div>
  );
};

export default CardDetails;
