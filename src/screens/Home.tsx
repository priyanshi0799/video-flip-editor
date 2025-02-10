import React from "react";
import VideoCropper from "./VideoCropper";
import styles from "../styles/Home.module.css";

const Home: React.FC = () => {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<div className={styles.modal}>
					<VideoCropper />
				</div>
			</main>
		</div>
	);
};

export default Home;
