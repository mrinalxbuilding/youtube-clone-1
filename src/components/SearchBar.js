import React, {useState} from 'react'
import "../index.css"
import { useNavigate } from 'react-router-dom'
import {Paper, IconButton , TextField} from "@mui/material"
import { Search  } from "@mui/icons-material"


function SearchBar() {

  const [ searchTerm, setSearchTerm ] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(searchTerm) {
      navigate(`/search/${searchTerm}`)

      setSearchTerm('')
    }
  }

  return (
    <Paper
  
        component={'form'}
        onSubmit= {handleSubmit}
        sx={{borderRadius:20 , border: "1px solid #3e3e3",
        pl:2, boxShadow:"none",
        mr:{xs:5},
        
        
        
        
        
        

        }}
    >

        <input 
            className='search-bar'
            placeholder='Search...'
            value={searchTerm}
            onChange={(e) => {setSearchTerm(e.target.value)}}
            // className="searchBarTextField"
            
        
        />
  

        <IconButton type="submit" sx={{p:"10px", color: "red"}}> 
            <Search 
            
            />
        </IconButton>
    </Paper>
  )
}

export default SearchBar