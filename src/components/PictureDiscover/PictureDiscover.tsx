import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./PictureDiscover.css";
import { secretImg } from "./pictureDiscoverData";
import type { LevelProps, PictureDiscoverProps, SecretImgProps } from "./pictureDiscoverType";

const generateFilterArray = () => {
  const randNumb = [];
  for (let i = 1; i <= 560; i++) {
    randNumb.push(i);
  }
  for (let i = randNumb.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randNumb[i], randNumb[j]] = [randNumb[j], randNumb[i]];
  }
  return randNumb;
};

const generateFilterCoord = (arr: number[]) => {
  const coordMatrix: [number, number][][] = [];
  for (let j = 0; j < 14; j++) {
    coordMatrix[j] = [];
    for (let i = 0; i < 40; i++) {
      let col = arr[i + 40 * j] % 20;
      if (col === 0) {
        col = 20;
      }
      const row = 1 + (arr[i + 40 * j] - col) / 20;
      coordMatrix[j].push([row, col]);
    }
  }
  return coordMatrix;
};

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

const PictureDiscover = ({ activeIndex }: PictureDiscoverProps) => {
  const { level } = useParams();

  const validateLevel = (lvl: string) => {
    return ["easy", "intermediate", "expert"].includes(lvl);
  };

  if (!level || !validateLevel(level)) {
    return (
      <h2 className="quest-error">
        Tom Jedusor a encore tout cassé !
        <br />
        Choisis ton niveau
        <br />
        et tente un Reparo !
      </h2>
    );
  }

  const lvlImg: SecretImgProps = secretImg[level as LevelProps];

  const [filterCoords, setFilterCoords] = useState<[number, number][][]>([]);
  const [groupColors, setGroupColors] = useState<string[]>();

  useEffect(() => {
    const coords = generateFilterCoord(generateFilterArray());
    setFilterCoords(coords);

    const colors = coords.map(() => generateRandomColor());
    setGroupColors(colors);
  }, []);

  return (
    <section className="picture-discover">
      <h2>Réussissez vos examens pour révéler l'identité d'un gardien du trésor !</h2>
      {level &&
        <div className="img-container">
          <img src={lvlImg.imgUrl} alt={lvlImg.name} className="secret-img" />
          {
            filterCoords.length > 0 && groupColors && filterCoords.map((group: [number, number][], groupIndex: number) => {
              return (
                group.map((coord: [number, number]) => {
                  return (
                    <div
                      className={`filter-${groupIndex + 1} ${(groupIndex) < activeIndex && "revealed-group"}`}
                      key={`${coord[0]}-${coord[1]}`}
                      style={{
                        gridRow: coord[0],
                        gridColumn: coord[1],
                        backgroundColor: groupColors[groupIndex],
                      }}
                    />)
                }))
            })
          }
        </div>
      }
    </section>
  )
}

export default PictureDiscover;
