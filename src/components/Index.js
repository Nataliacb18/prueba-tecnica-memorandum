import React, { useEffect } from "react";
import "../styles/index.css";
import { CardSection } from "./CardSection";
import { useNavigate } from "react-router-dom";
export const Index = ({ isLoading, loadingError }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (loadingError) {
      navigate("/error");
    }
  }, [loadingError]);

  return (
    <div className="contPpal">
      <h3 className="titles">Pupular Titles</h3>
      <div className="allCards">
        {!isLoading ? (
          <>
            <CardSection
              path="series"
              title="SERIES"
              description="Popular Series"
            />
            <CardSection
              path="movies"
              title="MOVIES"
              description="Popular Movies"
            />
          </>
        ) : (
          <h1>Cargando</h1>
        )}
      </div>
    </div>
  );
};
