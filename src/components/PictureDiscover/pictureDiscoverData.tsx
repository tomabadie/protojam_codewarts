import type { LevelProps, SecretImgProps } from "./pictureDiscoverType";

export const secretImg: Record<LevelProps, SecretImgProps> = {
	easy: {
		name: "easy secret image",
		imgUrl: "/src/assets/img/yavuz.png",
	},
	intermediate: {
		name: "intermediate secret image",
		imgUrl: "/src/assets/img/ayoub.png",
	},
	expert: {
		name: "expert secret image",
		imgUrl: "/src/assets/img/nicolas.png",
	},
};
