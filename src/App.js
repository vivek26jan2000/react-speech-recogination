import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useState } from "react";

function App() {
  const [transcript, setTranscript] = useState("");
  const { finalTranscript, resetTranscript } = useSpeechRecognition();

  const handleListen = () => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      alert("Your browser does not support speech recognition");
      return;
    }
    SpeechRecognition.startListening({ continuous: true });
  };

  const handleStop = () => {
    SpeechRecognition.stopListening();
    console.log("sadfasf", finalTranscript);
    setTranscript(finalTranscript);
  };
  return (
    <div className="App">
      <button onClick={handleListen}>Start Listening</button>
      <button onClick={handleStop}>Stop Listening</button>
      <button onClick={resetTranscript}>Reset</button>
      <button
        onClick={() => {
          setTranscript();
        }}
      >
        clear
      </button>
      <p>This is transcript: {transcript}</p>
    </div>
  );
}

export default App;
