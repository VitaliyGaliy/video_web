import * as React from "react";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { ConferenceApi } from "../../../../mediasoup/front/src/conference-api";
import { Utils } from "../../../../mediasoup/front/src/utils";

export interface VideoPlayer {
  // compiler: string;
  // framework: string;
}

interface RootState {
  cameras: {
    cameraList: any;
    currentCameraIndex: number;
    currentCamera: {
      _id: string;
    };
    rebroadcastParams: any;
  };
}

const VideoPlayer = (props: VideoPlayer) => {
  // const [credentials, selectCamera] = useState({});
  const videoRef = useRef(null);

  const { rebroadcastParams, currentCamera } = useSelector(
    (state: RootState) => state.cameras
  );

  useEffect(() => {
    // const camera = cameraList[0];
    let playback;

    const {
      params: { url, token, stream },
    } = rebroadcastParams;

    playback = new ConferenceApi({
      url: url,
      kinds: ["video"],
      token: token,
      stream: stream,
    }).on("connectionstatechange", ({ state }) => {
      console.log("connectionstatechange", state);
      if (state === "connected") {
        // connectionBox.classList.add('connected');
      } else {
        // connectionBox.classList.remove('connected');
      }
    });

    const video = videoRef.current;

    playback.subscribe().then((mediaStream) => {
      video.srcObject = mediaStream;

      const play = () => {
        console.log("trying to play");
        let playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then((_) => {})
            .catch((error) => {
              video.muted = true;
              video.play().then(
                () => {
                  console.log("errorAutoPlayCallback OK");
                },
                (error) => {
                  console.log("errorAutoPlayCallback error again");
                }
              );
            });
        }
      };
      if (Utils.isSafari) {
        const onStreamChange = () => {
          video.srcObject = new MediaStream(mediaStream.getTracks());
          play();
        };
        playback
          .on("addtrack", onStreamChange)
          .on("removetrack", onStreamChange);
      } else if (Utils.isFirefox) {
        video.addEventListener("pause", play);
      }
      play();
    });
    return () => {
      console.log("playback.close();");

      playback.close();
    };
  }, [currentCamera]);

  return <video width="420px" height="236.69" ref={videoRef}></video>;
};

export default VideoPlayer;
