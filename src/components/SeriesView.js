import React, { useContext, useEffect, useState } from "react";
import { filterProgramType } from "../helper/filtros";
import { AppContext } from "../context/contextProvider";
import { SeriesMoviesCard } from "./SeriesMoviesCard";
import "../styles/seriesView.css"
export const SeriesView = () => {
  const [state] = useContext(AppContext);
  const [data, setData] = useState();

  useEffect(() => {
    if (state.data) {
     setData(filterProgramType(state.data, "series"));
    }
  }, [state]);



  return (
    <div className="contPpal">
      <h3 className="titles">Pupular Series</h3>
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