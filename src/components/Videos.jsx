import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useUserContext } from '../context/userContext';

const VideoGallery = () => {
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
      {videos.map((videoUrl, index) => (
        <video key={index} controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}
    </div>
  );
};

export default VideoGallery;
