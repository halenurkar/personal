import React from 'react'
import { GoTrash } from "react-icons/go";
import CircularProgress from '@mui/material/CircularProgress';
import { useRemovePhotoMutation } from '../store';

export default function PhotoListItem({photo}) {
    const [removePhoto, results]= useRemovePhotoMutation(photo)
  const handleRemovePhoto=()=>{
    removePhoto(photo);
  }
  return (
    <div style={{padding:"10px", cursor:"pointer", position:"relative"}} onClick={handleRemovePhoto}>
        <img src={photo.url} alt=""/>
        <div className='deleteCircularDiv'>
        { results.isLoading ? <CircularProgress style={{width:'20px', height:'20px'}}/> : <GoTrash/>
        }
        </div>
        
        </div>
  )
}
