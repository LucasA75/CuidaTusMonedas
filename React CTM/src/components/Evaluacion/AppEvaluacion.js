import React, {useState, useEffect} from 'react'
import preguntas from './PreguntasEstafa';
import './Evaluacion.css'

const AppEvaluacion = () => {

    const [preguntaActual, setPreguntaActual] = useState(0);
    const [puntuación, setPuntuación] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [tiempoRestante, setTiempoRestante] = useState(15);
    const [areDisabled, setAreDisabled] = useState(false);
    const [answersShown, setAnswersShown] = useState(false);
  
    function handleAnswerSubmit(isCorrect, e) {
      // añadir puntuación
      if (isCorrect) setPuntuación(puntuación + 1);
      // añadir estilos de pregunta
      e.target.classList.add(isCorrect ? "correct" : "incorrect");
      // cambiar a la siguiente pregunta
  
      setTimeout(() => {
        if (preguntaActual === preguntas.length - 1) {
          setIsFinished(true);
        } else {
          setPreguntaActual(preguntaActual + 1);
          setTiempoRestante(15);
        }
      }, 1500);
    }
  
    useEffect(() => {
      const intervalo = setInterval(() => {
        if (tiempoRestante > 0) setTiempoRestante((prev) => prev - 1);
        if (tiempoRestante === 0) setAreDisabled(true);
      }, 1000);
  
      return () => clearInterval(intervalo);
    }, [tiempoRestante]);
  
    if (isFinished)
      return (
        <main className="app"> 
                      <div className="juego-terminado" >
            <span>
              {" "}
              Obtuviste {puntuación} de {preguntas.length}{" "}
            </span>
            <button className='button1' onClick={() => (window.location.href = "/EvaluacionEstafa")}>
              {" "}
              Volver a jugar
            </button>
            <button className='button1'
              onClick={() => {
                setIsFinished(false);
                setAnswersShown(true);
                setPreguntaActual(0);
              }}
            >
              Ver respuestas
            </button>
          </div>
        

        </main>
      );
  
    if (answersShown)
      return ( 
      
        <main className="app">
            <center> 
            <div className="lado-izquierdo">
            <div className="numero-pregunta">
              <span> Pregunta {preguntaActual + 1} de</span> {preguntas.length}
            </div>
            <div className="titulo-pregunta">
              {preguntas[preguntaActual].titulo}
            </div>
            <div>
              {
                preguntas[preguntaActual].opciones.filter(
                  (opcion) => opcion.isCorrect
                )[0].textoRespuesta
              }
            </div>
            <button className='button1'
              onClick={() => {
                if (preguntaActual === preguntas.length - 1) {
                  window.location.href = "/EvaluacionEstafa";
                } else {
                  setPreguntaActual(preguntaActual + 1);
                }
              }}
            >
              {preguntaActual === preguntas.length - 1
                ? "Volver a jugar"
                : "Siguiente"}
            </button>
          </div>
            </center>

        </main>
      );

  return (
    <div>
        <center> 
        <main className="app">
      <div className="lado-izquierdo">
        <div className="numero-pregunta">
          <span> Pregunta {preguntaActual + 1} de</span> {preguntas.length}
        </div>
        <div className="titulo-pregunta">
          {preguntas[preguntaActual].titulo}
        </div>
        <div>
          {!areDisabled ? (
            <span className="tiempo-restante">
              Tiempo restante: {tiempoRestante}{" "}
            </span>
          ) : (
            <button className='button1'
              onClick={() => {
                setTiempoRestante(15);
                setAreDisabled(false);
                if (preguntaActual === preguntas.length - 1) {
                  setIsFinished(true);
                } else {
                  setPreguntaActual(preguntaActual + 1);
                }
              }}
            >
              Continuar
            </button>
          )}
        </div>
      </div>
      <div className="lado-derecho">
        {preguntas[preguntaActual].opciones.map((respuesta) => (
          <button className='button1' id='disabled'
            disabled={areDisabled}
            key={respuesta.textoRespuesta}
            onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e)}
          >
            {respuesta.textoRespuesta}
          </button>
        ))}
      </div>
    </main>
  
        </center>
           
    </div>
  )
}

export default AppEvaluacion