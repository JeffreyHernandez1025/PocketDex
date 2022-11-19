import React, { useState } from 'react';
import Sound from 'react-sound';
import PokemonTheme from '../../assets/fonts/PokemonAudio/PokemonTheme.mp3';

const PlaySound = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying,
) => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div>
            <button onClick={() => setIsPlaying(!isPlaying)}>{!isPlaying ? 'Play' : 'Stop'}</button>
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