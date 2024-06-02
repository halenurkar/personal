import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { GoTrash } from "react-icons/go";
import { useRemoveAlbumsMutation } from '../store';
import ExpandablePanel from './ExpandablePanel';
import PhotoList from './PhotoList';

export default function AlbumsListItem({album}) {
  const [removeAlbums, results]= useRemoveAlbumsMutation()
  const handleClick=()=>{
    removeAlbums(album);
  }
    const header=(
      <>
      <button style={{marginRight:'30px', borderRadius:'50%', borderColor:'white',  backgroundColor:'white', cursor:'pointer'}}
      onClick={handleClick}>
        { results.isLoading ? <CircularProgress style={{width:'20px', height:'20px'}}/> : <GoTrash/>
        }
        
      </button>
      {album.title}
      </>
    )
  return (
    <div>
      <ExpandablePanel header={header}>
    <PhotoList album={album}/>
      </ExpandablePanel>
    </div>
  )
}
