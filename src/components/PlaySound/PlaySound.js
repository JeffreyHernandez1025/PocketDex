import React, { useState } from 'react';
import Sound from 'react-sound';
import PokemonTheme from '../../assets/fonts/PokemonAudio/PokemonTheme.mp3';
import Mute from '../../assets/fonts/Assets/mute.png'
import Volume from '../../assets/fonts/Assets/volume.png'
import styled from 'styled-components';

const Icons = styled.img`
width: 25px;
hieght: 25px;

@media (max-width: 500px) {
    width: 15px;
    height: 15px;
}
`

const PlaySound = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying,
) => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div>
             <button onClick={() => setIsPlaying(!isPlaying)}>{!isPlaying ? <Icons src={Mute} /> : <Icons src={Volume} />}</button>
            <Sound
                url={PokemonTheme}
                playStatus={
                    isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
                }
                playFromPosition={300}
                onLoading={handleSongLoading}
                onPlaying={handleSongPlaying}
                onFinishedPlaying={handleSongFinishedPlaying}
            />
        </div>
    );
};

export default PlaySound