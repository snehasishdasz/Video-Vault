import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useUserContext } from '../context/userContext';
import "../App.css"

const Videos = () => {
  const { currentUser } = useUserContext();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      if (currentUser) {
        try {
          const userRef = doc(db, "users", currentUser.uid);
          const userSnapshot = await getDoc(userRef);

          if (userSnapshot.exists()) {
            const userData = userSnapshot.data();
            const videoUrls = userData.videourl;
            setVideos(videoUrls);
          } else {
            console.log("User document not found.");
          }
        } catch (error) {
          console.error("Error fetching videos:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [currentUser]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <header className="header"><span style={{color:"#FF2E63",fontSize:"35px"}}>U</span>ploaded<span style={{color:"#FF2E63",fontSize:"35px"}}> V</span>ideos</header>
      {videos.map((videoUrl, index) => (
        <div className="video-container">
        
        <video className="video-player"  key={index} controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>

      ))}
    </div>
  );
};

export default Videos;
{/* <video  key={index} controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}