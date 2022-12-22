import React from "react";
import { Headermain, Main, MenuModulos, FooterMain, MisionVision, FraseMoti } from "../components";


const Home = () => {
    return (
        <>
            <Headermain />
            <Main />
            <MenuModulos />
            <MisionVision />
            {/* <FraseMoti /> */}
            <FooterMain />
        </>
    )
}
export default Home;