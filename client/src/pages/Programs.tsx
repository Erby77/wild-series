import type React from "react";
import { useEffect, useState } from "react";

interface ProgramProps {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
}

const Programs: React.FC = () => {
  const [programs, setPrograms] = useState<ProgramProps[]>([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await fetch("/api/programs");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPrograms(data);
      } catch (error) {
        console.error("Error fetching programs:", error);
      }
    };

    fetchPrograms();
  }, []);

  return (
    <>
      <h1>Page Programs</h1>
      {programs.map((program) => (
        <div key={program.id}>
          <h2>{program.title}</h2>
          <img
            src={program.poster}
            alt={program.title}
            style={{ maxWidth: "200px" }}
          />
          <p>{program.synopsis}</p>
          <p>Pays: {program.country}</p>
          <p>Année: {program.year}</p>
        </div>
      ))}
    </>
  );
};

export default Programs;
