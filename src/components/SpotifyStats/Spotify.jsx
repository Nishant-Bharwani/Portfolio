import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import fetchSpotifyData from "../../utils/fetchers/spotify";
import { SubSectionContainer } from "../shared/Container/Container";
import LinkToNewTab from "../shared/LinkToNewTab/LinkToNewTab";
import Spinner from "../shared/Spinner/Spinner";
import styles from "./Spotify.module.css";

const Spotify = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(undefined);
    const [type, setType] = useState();
    const [playing, setPlaying] = useState(false);
    const audio = useRef(null);

    const SPOTIFY_CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const SPOTIFY_SECRET_ID = process.env.REACT_APP_SPOTIFY_SECRET_ID;
    const SPOTIFY_REFRESH_TOKEN = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

    const fetchData = async () => {
        setLoading(true);
        const apiData = await fetchSpotifyData(
            SPOTIFY_CLIENT_ID || '',
            SPOTIFY_SECRET_ID || '',
            SPOTIFY_REFRESH_TOKEN || ''
        );
        setData(apiData.data);
        setType(apiData.type);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (audio.current) audio.current.volume = 0.4;
        if (playing) audio.current?.play();
        else audio.current?.pause();
    }, [playing]);

    return (
        <SubSectionContainer>
            <h2>I love 🎵 and I</h2>
            {loading && <Spinner small text="Browsing my playlist" />}
            {!loading && (
                <section>
                    {type === "now"
                        ? "Am currently Vibing to "
                        : "Recently listened to "}
                    <br />
                    <div className="horizontal">
                        <img
                            style={{
                                borderRadius: '50%',
                                border: 'none',
                                boxShadow: '2px 2px 10px black'
                            }}
                            height="80px"
                            width="80px"
                            src={data?.albumArt}
                            alt={data?.name}
                        />
                        {data?.preview && (
                            <button
                                className={styles.controlButton}
                                onClick={() => setPlaying(!playing)}
                            >
                                {playing ? <FaPause /> : <FaPlay />}
                            </button>
                        )}
                        <LinkToNewTab className={styles.song} href={data?.url}>
                            <section>
                                {data?.name}
                                <br />
                                <span>{data?.artist.slice(0, -2)}</span>
                            </section>
                        </LinkToNewTab>
                    </div>
                    {data?.preview && (
                        <audio
                            ref={audio}
                            loop
                            style={{ display: "none" }}
                            src={data?.preview}
                        />
                    )}
                </section>
            )}
        </SubSectionContainer>
    );
};

export default Spotify;