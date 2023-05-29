import { GridContainer } from "./FullLayoutStyled"
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const FullLayout = () => {
    return (
        <>
            <GridContainer>
                <div>
                    <Sidebar />
                </div>
                <div style={{ padding: '20px' }}>
                    <Outlet />
                </div>
            </GridContainer>
        </>
    );
};

export default FullLayout;