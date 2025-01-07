import { useEffect, useState } from "react";

interface SeriesType {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
}

function Programs() {
  const [series, setSeries] = useState<SeriesType[] | null>();

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((res) => res.json())
      .then((data) => setSeries(data));
  });

  return (
    <>
      <h1>Séries</h1>
      <article>
        {series
          ? series.map((serie) => {
              return (
                <div key={serie.id} className="flex">
                  <h2>{serie.title}</h2>
                  <img src={serie.poster} alt={serie.poster} />
                  <h3>Synopsis : </h3>
                  <p>{serie.synopsis}</p>
                  <h3>Country : </h3>
                  <p>{serie.country}</p>
                  <h3>Year : </h3>
                  <p>{serie.year}</p>
                </div>
              );
            })
          : "pas de séries"}
      </article>
    </>
  );
}

export default Programs;
