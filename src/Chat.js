import React, { useState, useEffect } from "react";
import "./Chat.css";
import { Avatar, IconButton, Button } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

const Chat = () => {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("You typed ", input);

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at ...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className={`chat__message ${"chat__receiver" && true}`}>
          <span className="chat__name">Kenny</span>
          Hey Guys how are you
          <span className="chat__timestamp">3:55pm</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            placeholder="type a message..."
            value={input}
          />
          <button
            type="submit"
            onClick={sendMessage}
            className="chat__send"
            placeholder="type a message..."
          >
            Send
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
