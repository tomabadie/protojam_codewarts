import { useParams } from "react-router";
import { secretImg } from "./pictureDiscoverData";
import type { SecretImgProps } from "./pictureDiscoverType";
import "./PictureDiscover.css"

const PictureDiscover = () => {
  const { level } = useParams();
  /* const [secretImg, setSecretImg] = useState(null); */

  const validateLevel = (lvl: string) => {
    return ["easy", "intermediate", "expert"].includes(lvl)
  };

  if (!level || !validateLevel(level)) {
    return <p>Tom Elvis Jedusor a encore tout cassé !</p>
  }

  const lvlImg: SecretImgProps = secretImg[level];

  return (
    <section className="picture-discover">
      {level &&
        <>
          <h2>Réussissez vos examens pour révéler l'image</h2>
          <img src={lvlImg.imgUrl} alt={lvlImg.name} />
        </>
      }
    </section>
  )
}

export default PictureDiscover
