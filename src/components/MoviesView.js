import React, { useContext, useEffect, useState } from "react";
import { filterProgramType } from "../helper/filtros";
import { AppContext } from "../context/contextProvider";
import { SeriesMoviesCard } from "./SeriesMoviesCard";

export const MoviesView = () => {
  const [state] = useContext(AppContext);
  const [data, setData] = useState();

  useEffect(() => {
    if (state.data) {
     setData(filterProgramType(state.data, "movie"));
    }
  }, [state]);



  return (
    <div className="contPpal">
      <h3 className="titles">Pupular Movies</h3>
      <div className="allCardsSeries">
        {data?.map(elem => {
          return (
            <SeriesMoviesCard elem={elem}/>
          )
        })}
      </div>
    </div>
  );
};
