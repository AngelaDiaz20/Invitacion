"use client";
import { useState } from "react";
import Image from "next/image";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";

export default function Song() {

    const [song, setSong] = useState('')
    const [songs, setSongs] = useState([])

    function handleSearch(e){
        e.preventDefault();
        if(song.trim()===''){
            alert('Debes ingresar algo')
            return
        }
        setSong('')
        getSong(song)
        console.log(song)
    }

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '00b77f8823msh319b48663c54739p13e29djsn450be4d24596',
            'x-rapidapi-host': 'spotify23.p.rapidapi.com'
        }
    };

    async function getSong(){
        try {
            let url = `https://spotify23.p.rapidapi.com/search/?q=${song}&type=multi&offset=0&limit=10&numberOfTopResults=5`
            let data = await fetch(url, options)
            let res = await data.json()
            console.log(res.tracks.items)
            setSongs(res.tracks.items)
        } catch (error) {
            console.log(`ups... error: ${error}`)
        }
    }

    return (
      <main>
        <h1>Spotify Api</h1>
            <form onSubmit={handleSearch}>
                <input type="text" value={song} onChange={e => setSong(e.target.value)}/>
                <button type="submit">Buscar</button>
            </form>
            {songs.map((song, index) =>(
                <div key={index}>
                    <Card className="w-full max-w-[48rem] flex-row bg-white my-1">
                        <CardHeader
                            shadow={false}
                            floated={false}
                            className="m-0 w-2/5 shrink-0 rounded-r-none"
                        >
                            <Image
                                src={song.data.albumOfTrack.coverArt.sources[0].url}
                                alt={song.data.name}
                                height={100}
                                width={100}
                            />
                        </CardHeader>
                        <CardBody>
                            <Typography variant="h6" color="gray" className="mb-4 uppercase">
                                {song.data.name}
                            </Typography>
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                                {song.data.artists.items.map((artist, index) => (
                                    <span key={index}>{artist.profile.name}{index !== song.data.artists.items.length - 1 ? ', ' : ''}</span>
                                ))}
                            </Typography> 
                            <a href={song.data.uri} className="inline-block">
                                <Button variant="text" className="flex items-center gap-2">
                                    Escuchar en Spotify
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        className="h-4 w-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        />
                                    </svg>
                                </Button>
                            </a>
                        </CardBody>
                    </Card>
                </div>
            ))}
            
      </main>
    );
  }
  