import React from 'react'
import ExpandablePanel from './ExpandablePanel'
import AlbumList from './AlbumList'
import { GoTrash } from "react-icons/go";
import { useRemoveUserMutation } from '../store/apis/usersApi';
import CircularProgress from '@mui/material/CircularProgress';

export default function UsersListItem({user}) {
  const [removeUser, results]= useRemoveUserMutation()
  const handleClick=()=>{
    removeUser(user);
  }
  const header=(
    <>
    <button style={{marginRight:'30px', borderRadius:'50%', borderColor:'white',  backgroundColor:'white', cursor:'pointer'}}
    onClick={handleClick}>
      { results.isLoading ? <CircularProgress style={{width:'20px', height:'20px'}}/> : <GoTrash/>
      }
      
    </button>
    {user.name}
    </>
  )

  return (
    <div>
      <ExpandablePanel header ={header}>
        <AlbumList user={user}/>
      </ExpandablePanel>
    </div>
  )
}
