import styles from "../styles/Home.module.css";
import {
	DOWNLOAD_JSON_TEXT,
	GENERATE_PREVIEW_BUTTON_TEXT,
	REMOVE_CROPPER_BUTTON_TEXT,
	START_CROPPER_BUTTON_TEXT,
} from "../utils/constants";

type Props = {
	generatePreview: () => void;
	setShowCropper: (showCropper: boolean) => void;
	downloadJSON: () => void;
	showPreview: boolean;
};

const Footer = ({
	generatePreview,
	setShowCropper,
	downloadJSON,
	showPreview,
}: Props) => {
	const onStartCropperButtonClick = () => setShowCropper(true);
	const onRemoveCropperButtonClick = () => setShowCropper(false);

	return (
		<div className={styles.footer}>
			<div className={styles.footerButtons}>
				<button onClick={onStartCropperButtonClick}>
					{START_CROPPER_BUTTON_TEXT}
				</button>
				<button onClick={onRemoveCropperButtonClick}>
					{REMOVE_CROPPER_BUTTON_TEXT}
				</button>
				<button onClick={generatePreview}>
					{GENERATE_PREVIEW_BUTTON_TEXT}
				</button>
				{showPreview && (
					<button onClick={downloadJSON}>{DOWNLOAD_JSON_TEXT}</button>
				)}
			</div>
			<button>Cancel</button>
		</div>
	);
};

export default Footer;
