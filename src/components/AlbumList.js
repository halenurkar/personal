import React from 'react'
import { useAddAlbumsMutation, useFetchAlbumsQuery } from '../store'
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import CircularProgress from '@mui/material/CircularProgress';
import AlbumsListItem from './AlbumsListItem';

export default function AlbumList({user}) {
    const {data, isError, isFetching}= useFetchAlbumsQuery(user);
    const [addAlbums, results]=useAddAlbumsMutation(user);
    const handleAlbumAdd=()=>{
        addAlbums(user)
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
    content = data.map((album)=>{
      return <AlbumsListItem key={album.id} album={album} />
    })
  }

  return (
    <>
    <div>
        <div className='topArrangment'>
        <h3>{user.name} Albümü</h3>
        <Button variant='outlined' onClick={handleAlbumAdd}>
          {results.isLoading ?(
            <CircularProgress/>
          ): <span> Album Ekle+</span>}
          </Button>
      </div>
    </div>
    <div>{content}</div>
    </>
    
  )
}
