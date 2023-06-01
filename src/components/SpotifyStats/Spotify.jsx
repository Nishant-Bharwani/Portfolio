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




// https://accounts.spotify.com/authorize?response_type=code&client_id=3f681130af4c4a8a92d6b394dfb30d80&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback%2F


// http://localhost:3000/callback/?code=AQB9CZfnrZDxhNvP1SFeUxSbAAXKnFAZDNdxd3a55jHFMOKJQUEoX28t5m81JzM2cOzqQuwIgrsZipmJp0Afn3uUa46CpgiOFttpWUf8e-py_1cPgRe1lFZqL7h06deThRoBXThMCbww7ahy_UJejeChYk0aGurcOFAInbVdhHtC0TeieDxK2fmGT7VC6MqB9U_XEvePn08BsdlF5sAYwlSbdjon1qnACIyhQmjoOlhKxx_Zmq8upd-nJT2bu46XJvshlj4rUnxkzOmtsxjmkAgdmHS-QiWT42Li9nUc1myKZoFAH6VMteLlOJF7NBOwAchl1aRCZAFECElj8a9XTHfVMfe_HBXAs_a5TfwU313Ji3SedfcIiO5-DLdsco836CBI6l5u_XD0hpnLdtFjK0CYS-D5DiAN7yWL04xFT_eMcEpLA9zyL_ex


// {
//     "access_token": "BQA-z7zlNGeN8-1Q-s9uDIrlidK8J0YG1K1C0qpddJaXGdkJ6TP9PP_10cy4p5RI6XbXtzpJFd-6SIRRzw9XWStrXBuYc07QZ_K87YlYqi0vuhyRhlbGHSnUZx9qyyIoAge437Ea_JVZlvAda9wl30SEapf-tntysk5keJ8iE6bLl4_1GOqIzfG_qYog1w2mldFZ21ZOQrXxDP1f6qQ4N4MF83_unnC9X7YCskJbuCkuSYK58oHk7A",
//     "token_type": "Bearer",
//     "expires_in": 3600,
//     "refresh_token": "AQAmmif1-kFNiddkuAnK7YML_KCdXKeIipI2XxGOctYj5QQFxY6JfnYih8FOlFLJHmuk1pJy4u_078XS4kfFGTGjdzyCq1OxdfMoFYz-gZrsw9-yjKo3d3P0z4wEInnvA0A",
//     "scope": "playlist-read-private streaming user-modify-playback-state user-library-read user-read-playback-state user-read-email user-read-recently-played user-read-playback-position user-read-private"
// }