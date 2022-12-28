import { ArrowForwardIos } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import React,{useCallback} from "react";
import { useAuth0 } from '@auth0/auth0-react';
import fotomain from "../../assets/imagenMain.png"
import "./Main.css"


const MainV2 = () => {

    const {user, isAuthenticated, isLoading} = useAuth0();
    const {loginWithRedirect} = useAuth0();
    const navigate = useNavigate();
    const handleOnClick = useCallback(
        () => navigate("/Perso", {}, [navigate]))
    return (
        <div class="container-fluid text-center principal" >
            <div class="row align-items-start row1M">
                <div class="col col1M">
                    <h1 className="caption1">Aprender sobre finanzas es divertido</h1>
                </div>
                <div class="col col2M">
                    <img src={fotomain} alt="foto gatito jugando" className="gatitojugando" />
                </div>
            </div>
            <div>
                {isAuthenticated ? <>
                    <button type="btn" class="btn botonMain"
                    onClick={() => {{ handleOnClick();}}}
                    
                    > Comenzar a aprender &nbsp;  &nbsp;<ArrowForwardIos style={{marginBottom: "4px"}}/></button>

                </>
                :
                <button type="btn" class="btn botonMain"
                    onClick={() => {{ loginWithRedirect();}}}
                    
                    > Comenzar a aprender &nbsp;  &nbsp;<ArrowForwardIos style={{marginBottom: "4px"}}/></button>
                }
                

                    
            </div>
        </div>
    )
}

export default MainV2