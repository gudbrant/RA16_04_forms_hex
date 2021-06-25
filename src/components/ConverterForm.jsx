import { useState } from "react";
import HexInput from "./HexInput";

function ConverterForm() {

  const hex2rgb = (hex) => {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) {
      return null;
    }
    result.shift();
    return result
      ? `rgb(${result.map(i => parseInt(i, 16)).join(", ")})`
      : null;
  }

  const [formState, setformState] = useState({hex_value: '#34495e', 
                                              rgb_value: hex2rgb('#34495e'), 
                                              isWarning: false});

  const onChange = (value) => {
    let rgb_value = '';
    let isWarning = false;

    if (value.length === 7){ 
      rgb_value = hex2rgb(value);
      if (rgb_value === null) {
        rgb_value = 'Ошибка!';
        isWarning = true;
      }
    }

    setformState({hex_value: value, 
                  rgb_value: rgb_value, 
                  isWarning: isWarning});
  }

  return(
    <form className={formState.isWarning ? 'warning' : ''} style={{backgroundColor: formState.rgb_value}}>
      <HexInput value={formState.hex_value} onChange={onChange}/>
      <div className="rgb-value">{formState.rgb_value}</div>
    </form>
  )
}

export default ConverterForm;