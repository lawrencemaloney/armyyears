import React, {useEffect, useRef} from 'react'

function OpenCloseFootnote() {
  const openIconRef = useRef(null);

  useEffect(() => {
    footnote = openIconRef.current.style;
  },[]);  
  
    return (
        <div>   
            <p>Style = ref={footnote}</p>
        </div>
    // <div>opneCloseFootnote</div>
    );
}


export default OpenCloseFootnote