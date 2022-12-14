import React from "react";

const Siguiente = ({infoBoton, handleOnClick}) => {     

    return (
        <div class="d-grid gap-2 d-md-block">
        <button class="botom" 
        onClick = {()=>{
            handleOnClick
        }}
        type="button">{infoBoton}</button>
        </div>

  )
}


export default Siguiente;
