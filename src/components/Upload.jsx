import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import "../App.css"
import man from "../assests/man.svg"


import { useUserContext } from '../context/userContext';

import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from '../firebase/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const Upload = () => {
  const { currentUser } = useUserContext();
  const [videoFile, setVideoFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!videoFile) return;
        // Check if the user is logged in (currentUser is not null)
        if (!currentUser) {
          alert('Please log in first to upload a video.');
          return;
        }

        try {
          setUploading(true);
      
          // Upload the video file to Firebase Storage
          const storageRef = ref(storage, `videos/${videoFile.name}`);
          const uploadTask = uploadBytesResumable(storageRef, videoFile);
      
          uploadTask.on(
            'state_changed',
            (snapshot) => {
              // You can track the upload progress here if needed
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload progress:', progress);
            },
            (error) => {
              console.error('Error uploading video:', error);
              setUploading(false); // Reset uploading state on error
            },
            async () => {
              // Video upload completed successfully
              try {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                console.log('Video download URL:', downloadURL);
      
                // Get the user's document reference in Firestore
                const userRef = doc(db, 'users', currentUser.uid);
      
                // Fetch the user's document data
                const userSnapshot = await getDoc(userRef);
                const userData = userSnapshot.data();
      
                // Update the videourl array with the new video URL
                const updatedVideoUrls = [
                  ...userData.videourl,
                  downloadURL, // Use the downloadURL retrieved from Firebase Storage
                ];
                console.log('Updated video URLs:', updatedVideoUrls);
      
                // Save the updated videourl array back to Firestore
                await updateDoc(userRef, { videourl: updatedVideoUrls });
      
                setVideoFile(null);
                alert('Video uploaded successfully!');
              } catch (error) {
                console.error('Error fetching video download URL:', error);
              } finally {
                setUploading(false);
              }
            }
          );
        } catch (error) {
          console.error('Error uploading video:', error);
          setUploading(false); // Reset uploading state on error
        }
    finally 
    {
      setUploading(false);
    }
  };
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'} color='red' />

        <form onSubmit={handleUpload}>
          <HStack>
            <Input onChange={handleFileChange} required type={'file'} css={{'&::file-selector-button': {border: 'none',width: 'calc(100% + 36px)',height: '100%',marginLeft: '-18px',color: 'purple',backgroundColor: 'white',cursor: 'pointer',},}}/>
            <Button colorScheme={'red'} type={'submit'}> Upload </Button>
          </HStack>
        </form>
      </VStack>
      <NavLink to="/aboutme">

      <div className="floating-icon" >
        <img src={man} alt="User" className="user-image" />
      </div>
      </NavLink>
    </Container>
  );
};

export default Upload;