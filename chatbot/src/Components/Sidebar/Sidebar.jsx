import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Context } from "../../Context/Context";
import { ThemeContext } from "../../Context/ThemeContext"; 

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);
  const { theme, toggleTheme } = useContext(ThemeContext); 

  const loadPreviousPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img
          src={assets.menu_icon}
          className="menu"
          alt="menu-icon"
          onClick={() => {
            setExtended((prev) => !prev);
          }}
        />
        <div className="new-chat" onClick={() => newChat()}>
          <img src={assets.plus_icon} alt="plus_icon" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => (
              <div key={index} onClick={() => loadPreviousPrompt(item)} className="recent-entry">
                <img src={assets.message_icon} alt="message" />
                <p>{item.slice(0, 18)}...</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="theme-toggle" onClick={toggleTheme}>
        <label className="switch">
          <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
          <span className="slider round"></span>
        </label>
        {extended ? <p>Theme</p> : null}
      </div>
    </div>
  );
};

export default Sidebar;
