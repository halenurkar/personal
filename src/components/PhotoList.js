import React from 'react'
import { useAddPhotoMutation, useFetchPhotosQuery } from '../store';
import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import PhotoListItem from './PhotoListItem';

export default function PhotoList({album}) {
    const {data, isError, isFetching}= useFetchPhotosQuery(album);
    const [addPhoto, results]=useAddPhotoMutation(album);
    const handlePhotoAdd=()=>{
        addPhoto(album)
    }

    let content;
  if(isFetching){
    content = (
      <Skeleton variant='rectangular' sx={{width:'100%', height:'200px'}}/>
    )
  }
  else if(isError){
    content = <div>Hata var!</div>
  }
  else{
    content = data.map((photo)=>{
      return <PhotoListItem key={photo.id} photo={photo} />
    })
  }

  return (
    <>
    <div>
        <div className='topArrangment'>
            <h3>{album.title}</h3>
        <Button variant='outlined' onClick={handlePhotoAdd}>
          {results.isLoading ?(
            <CircularProgress/>
          ): <span> Photo Ekle+</span>}
          </Button>
      </div>
    </div>
    <div className='fotoDiv'>{content}</div>
    </>
    
  )
}
