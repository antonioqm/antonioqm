import {
  useEffect,
  useRef,
  useState,
} from "react";
import eu from "./img/eu.jpg";
import "./PixelPhoto.css";

type color = {
  r: number;
  g: number;
  b: number;
  a: number;
};
function PixelPhoto() {
  // const image = new Image(100, 100)
  // image.src = eu
  const [pixels, setPixels] = useState<any>([]);
  const canvas = useRef<HTMLCanvasElement>(null);
  const img = useRef<HTMLImageElement>(new Image(100, 100));
 
  const imgWidth = 100;

  // if (canvas) { canvas.current.width = imgWidth; }
  useEffect(() => {
    console.log(img)
    console.log(eu)
    console.log(canvas)
    // console.log('test',ctx)
  canvas.current!.width = imgWidth;
  canvas.current!.height =
    (img.current!.height * canvas.current!.width) / img.current!.width;
    let newData = [...pixels];
    if (img.current && canvas.current && pixels.length === 0) {

      const ctx: CanvasRenderingContext2D = canvas.current!.getContext("2d")!
    ctx.drawImage(
      img.current,
      0,
      0,
      canvas.current!.width,
      canvas.current!.height
    );

    for (let i = 0; i < canvas.current!.height; i++) {
      // console.log(i)
      newData.push([])
      for (let j = 0; j < canvas.current!.width; j++) {
        // console.log(j, i)
        let data = ctx.getImageData(j, i, 1, 1).data;


          newData[i].push({ r: data[0], g: data[1], b: data[2], a:(data[0] === 0  && data[1] === 0 && data[2] === 0) ? 0 : 1});

        
        // newData.push({ r: data[0], g: data[1], b: data[2], a:1 });
  
        
      }
    }
    }
  console.log(newData)
  setPixels(newData);
  }, []);


  return (
    <div className="App">
      <canvas style={{ visibility: "hidden" }} ref={canvas} />
      <div className="container">
        {pixels.map((color: color[], i: number) => {
          return (
            <div
            className="row"
            key={i}
            >
              {color.map((color: color, j: number) => {
                return <div key={j} className="pixel" style={{ backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})` }}></div>
              })}
            </div>
          
      
          
          );
        })}
      </div>
        <img ref={img} src={eu} />
    </div>
  );
}

export default PixelPhoto;
