import type { LevelProps, SecretImgProps } from "./pictureDiscoverType";

import yavuz from "../../assets/img/yavuz.png";
import ayoub from "../../assets/img/ayoub.png";
import nicolas from "../../assets/img/nicolas.png";

export const secretImg: Record<LevelProps, SecretImgProps> = {
	easy: {
		name: "easy secret image",
		imgUrl: yavuz,
	},
	intermediate: {
		name: "intermediate secret image",
		imgUrl: ayoub,
	},
	expert: {
		name: "expert secret image",
		imgUrl: nicolas,
	},
};
