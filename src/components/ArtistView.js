// These components will be making separate API calls from the app
// component to serve specific data about our artist
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ArtistView() {
    const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])

    return (
        <div>
            <h2>The id passed was: {id}</h2>
            <p> {artistData} </p>
        </div>
    )
}

export default ArtistView
