import React from 'react';
import Image from 'react-image-resizer';
import img from './images'

function Cur() {

    return (
      <div>
        <Image
          img src={img} alt="cur" class="center"
          height={350}
          width={700}
        />
      </div>
    );

}

export default Cur;