import { useEffect, useRef, useState } from 'react'
import Menu from './Menu'


export default function Canvas(){


  const canvasRef = useRef(null)
  const ctxRef = useRef(null)
  const [isDrawing, setIsDrawing ] = useState(false)
  const [ brushSize, setBrushSize ] = useState(5)

  const [brushColor, setBrushColor] = useState("#000000")
  const [brushCoords, setBrushCoords] = useState({x: 0, y: 0})
  



  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    ctx.lineCap = "round"
    ctx.lineJoin = "round"
    ctx.stokeStyle = brushColor
    console.log(brushColor)
    ctx.lineWidth = brushSize
    ctxRef.current = ctx
  }, [brushColor, brushSize])

  const handleMouseMove = e => {
    setBrushCoords({
      x: e.clientX - e.target.offsetLeft,
      y: e.clientY - e.target.offsetTop,
    });
  };

  function startDrawing(e){
    ctxRef.current.beginPath()
    ctxRef.current.moveTo(
      brushCoords.x,
      brushCoords.y
    )
    setIsDrawing(true)
  }

  function stopDrawing(e){
    ctxRef.current.closePath()
    setIsDrawing(false)
  }

  function draw(e){
    if (!isDrawing){
      return
    } 
    ctxRef.current.lineTo(
      brushCoords.x,
      brushCoords.y
    )
    ctxRef.current.stroke()
  }


  return (
    <div className='canvas-container'>
      <Menu 
        setBrushSize = {setBrushSize}
        setBrushColor = {setBrushColor}
      />
      <canvas 
        id="canvas" 
        width="800" 
        height="800"
        onMouseDown={(e) => startDrawing() }
        onMouseUp={(e) => stopDrawing() }
        onMouseMove={(e) => {handleMouseMove(e); draw(e)} }
        ref={canvasRef}

        >
      </canvas>
    </div>
  )

}