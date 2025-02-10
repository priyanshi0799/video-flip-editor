import styles from "../styles/Home.module.css";
import {
	CROPPER,
	GENERATE_SESSION_BUTTON_TEXT,
	PREVIEW_BUTTON_TEXT,
} from "../utils/constants";

type Props = {
	handleShowPreviewSession: (showPreviewSession: boolean) => void;
	showPreviewSession: boolean;
};

const NavBar = ({ handleShowPreviewSession, showPreviewSession }: Props) => {
	const onPreviewButtonClick = () => handleShowPreviewSession(true);
	const onGenerateSessionButtonClick = () => handleShowPreviewSession(false);

	return (
		<div className={styles.header}>
			<h1>{CROPPER}</h1>
			<div className={styles.buttons}>
				<button
					onClick={onPreviewButtonClick}
					className={`${showPreviewSession ? styles.active : ""}`}
				>
					{PREVIEW_BUTTON_TEXT}
				</button>
				<button
					onClick={onGenerateSessionButtonClick}
					className={`${!showPreviewSession ? styles.active : ""}`}
				>
					{GENERATE_SESSION_BUTTON_TEXT}
				</button>
			</div>
		</div>
	);
};

export default NavBar;
