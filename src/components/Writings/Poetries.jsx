import { SubSectionContainer } from "../shared/Container/Container";
import SpiralBook from "../shared/SpiralBook/SpiralBook";


const Github = () => {
    // const TOKEN = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;
    // const fetchData = async () => {
    //     setLoading(true);
    //     // const apiData = await axios.get("/api/github-contributions");
    //     const apiData = await fetchContributions('Nishant-Bharwani', TOKEN || "");
    //     setData(apiData);
    //     setLoading(false);
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // if (loading) return <Spinner text='Fetching Github Stats' />;

    return (
        <>
            <SubSectionContainer>
                <h2>I'm also into writing 🖋️</h2>
                <p>Here are some of my poetries:</p>
            </SubSectionContainer>
            <div style={{ margin: '4px', display: 'flex', gap: '14px' }}>
                <SpiralBook />
                <SpiralBook />
            </div>


        </>
    );
};

export default Github;
