import { useState } from "react";
import "./App.css";
import { Cartesian3, Color, Ion } from "cesium";
import { Viewer, Entity } from "resium";

function App() {
  Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5ZGRkZTA0Yy0zMjJmLTRkYjMtYmU5Ni00MzAxN2QzMDIzNzAiLCJpZCI6MTIzNzY3LCJpYXQiOjE2NzU3ODY1NDh9.U9Bs2SEOEeGJ_5300ON-Vt6sOuZEgFQRs1w-AA5F5eM";
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Название");
  const [degrees, setDegrees] = useState(
    Cartesian3.fromDegrees(138.767052, 35.681167, 100)
  );
  const [color2, setColor2] = useState(Color.WHITE);

  return (
    <>
      <div className="App">
        <div className="card">
          <button type="submit" onClick={() => setName("Токио")}>
            Изменить Название на Токио
          </button>
          <button type="submit" onClick={() => setColor2(Color.RED)}>
            Изменить Цвет на красный
          </button>
          <button
            type="submit"
            onClick={() =>
              setDegrees(Cartesian3.fromDegrees(150.767052, 36.681167, 100))
            }
          >
            Изменить Координаты
          </button>
        </div>
      </div>
      <Viewer>
        <Entity
          name={name}
          position={degrees}
          point={{ pixelSize: 20, color: color2 }}
          description="hoge"
        />
      </Viewer>
    </>
  );
}

export default App;
