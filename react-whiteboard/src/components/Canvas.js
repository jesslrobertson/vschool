import { useEffect, useRef, useState } from 'react'
import Menu from './Menu'


export default function Canvas(){


  const canvasRef = useRef(null)
  const ctxRef = useRef(null)
  const [isDrawing, setIsDrawing ] = useState(false)
  const [ brushSize, setBrushSize ] = useState(4)

  const [brushColor, setBrushColor] = useState("000000")
  const [brushCoords, setBrushCoords] = useState({x: 0, y: 0})
  const [drawnPoints, setDrawnPoints] = useState([])
  

  
  useEffect(() => {
    const canvas = canvasRef.current
    let dpi = window.devicePixelRatio
    const ctx = canvas.getContext("2d")
    // let canvasHeight = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2)
    // let canvasWidth = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2)
    // console.log(canvasHeight, dpi)
    ctx.lineCap = 'round'
    ctx.setLineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.setLineJoin = 'round'
    // ctx.filter = 'blur(1px)'
    ctx.strokeStyle = brushColor
    console.log(brushColor)
    ctx.lineWidth = brushSize
    ctxRef.current = ctx
    console.log(`brushColor updated`)
    console.log(brushColor)
    // canvas.setAttribute('height', canvasHeight * dpi)
    // canvas.setAttribute('width', canvasWidth * dpi)

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
    // for (let i = 1; i < drawnPoints.length - 2; i ++)
    // {
    //   var xc = (drawnPoints[i].x + drawnPoints[i + 1].x) / 2;
    //   var yc = (drawnPoints[i].y + drawnPoints[i + 1].y) / 2;
    //   ctxRef.current.quadraticCurveTo(drawnPoints[i].x, drawnPoints[i].y, xc, yc);
    //   ctxRef.current.quadraticCurveTo(drawnPoints[i].x, drawnPoints[i].y, drawnPoints[i+1].x,drawnPoints[i+1].y);
    // }
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
    setDrawnPoints(prevPoints => [brushCoords, ...prevPoints])
    ctxRef.current.lineTo(
      brushCoords.x,
      brushCoords.y
    )
    ctxRef.current.stroke()
 // curve through the last two drawnPoints
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