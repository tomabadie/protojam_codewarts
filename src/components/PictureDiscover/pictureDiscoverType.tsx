export type LevelProps = "easy" | "intermediate" | "expert";

export interface SecretImgProps {
	name: string;
	imgUrl: string;
}

export interface PictureDiscoverProps {
	activeIndex: number;
	level: string;
	answered: Record<number, boolean>;
}
