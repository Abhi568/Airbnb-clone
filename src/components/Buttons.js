import React from 'react'
import "./Button.css"
export default function Button(props) {
  return (
    <>
    <button type="button" className="btn btn-filter-by-type btn-light">{props.type}</button>
  </>
  )
}
