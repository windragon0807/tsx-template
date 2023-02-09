import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Box } from "styles/layout";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <Box>
            <Button onClick={() => console.log("Button Clicked")} style={{ fontWeight: 600 }}>Test</Button>
        </Box>
    );
};

export default HomePage;