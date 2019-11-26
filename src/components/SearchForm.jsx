import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import './SearchForm.css'

export default (props) => {
  const [nameInput, setNameInput] = useState('')

  useEffect(() => {
    console.log(nameInput)
  }, [nameInput])

  const handleChange = (e) => {
    setNameInput(e.target.value)
    props.filterHeroes(e.target.value)
  }

  return (
    <form noValidate autoComplete="off">
      <TextField value={nameInput} onChange={handleChange} className="search-input" id="filled-basic" label="Search" variant="filled" />
    </form>
  )
}