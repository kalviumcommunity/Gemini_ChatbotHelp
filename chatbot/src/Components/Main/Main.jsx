import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../Context/Context";
import { ThemeContext } from "../../Context/ThemeContext"; 
const Main = () => {
	const {
		onSent,
		recentPrompt,
		showResults,
		loading,
		resultData,
		setInput,
		input,
	} = useContext(Context);

	const { theme } = useContext(ThemeContext); 
	const logoSrc = theme === "dark" ? assets.logo_monochrome : assets.logo_light;
	const textColor = theme === "dark" ? "white" : "black"; 

	return (
		<div className="main">
			<div className="nav">
				<p style={{ color: textColor }}>Prodigy</p> 
			</div>
			<div className="main-container">
				{!showResults ? (
					<>
						<div className="greet">
							<p>
								<span>Hello!</span>
							</p>
							<p>How Can I Help You Today ?</p>
						</div>
					</>
				) : (
					<div className="result">
						<div className="result-title">
							<img src={assets.user} alt="user" />
							<p>{recentPrompt}</p>
						</div>
						<div className="result-data">
							<img src={logoSrc} alt="logo" /> 
							{loading ? (
								<div className="loader">
									<hr />
									<hr />
									<hr />
								</div>
							) : (
								<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
							)}
						</div>
					</div>
				)}

				<div className="main-bottom">
					<div className="search-box">
						<input
							onChange={(e) => {
								setInput(e.target.value);
							}}
							value={input}
							type="text"
							placeholder="Enter the Prompt Here"
						/>
						<div>
							<img
								src={assets.send_icon}
								alt="send_icon"
								onClick={() => {
									onSent();
								}}
							/>
						</div>
					</div>
					<div className="bottom-info">
						<p>
							Prodigy may display inaccurate info, including about people, so
							double-check its responses.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
