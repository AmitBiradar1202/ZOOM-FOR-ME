import React from "react";
import { useParams } from "react-router-dom";

import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { id } = useParams();

  const liveStream = async (element) => {
    const appID = 1825812077;
    const serverSecret ='98265826a095206e3389adbfa958609b';
;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      id,
      Date.now().toString(),
      "Amit B"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
      },
      sharedLinks: [
        {
          name: "Copy Link",
          url: `https://dangerzone.netlify.app/room/${id}`,
        },
      ],
    });
  };

  return (
    <>
      <div ref={liveStream} />
    </>
  );
};

export default Room;
