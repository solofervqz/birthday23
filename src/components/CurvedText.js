import React from "react";

const CurvedText = () => {
  return (
    <svg width="300" height="30" viewBox="0 0 300 300">
      {/* Definir el camino curvado */}
      <defs>
        <path 
          id="curve"
          d="M 50,200 A 140,140 0 0,0 250,200"
          fill="transparent"
        />
      </defs>

      {/* Aplicar el texto a la curva */}
      <text fontSize="14" fill="white" fontFamily="Arial, sans-serif">
        <textPath href="#curve" startOffset="50%" textAnchor="middle" >
          DJ | BEBIDAS | DISCADA | SNACKS | CITY POP | LUIS MIGUEL
        </textPath>
      </text>
    </svg>
  );
};

export default CurvedText;
