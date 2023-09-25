import React, {useRef, useEffect} from 'react'
import FancyBox from "@/src/component/config/fancyBox"

export default function Vr720() {

    const vr720Ref = useRef(undefined);

    useEffect(()=>{
        vr720Ref.current.scrollLeft=200;
    }, [vr720Ref]);
    
    

    return (
        <section className="vr720">
            <div className='vr720_btn'>
                <FancyBox text={`720環景`}>
                  <iframe src="https://www.720yun.com/t/adakn9qwzr7?scene_id=112286084" frameborder="0"></iframe>
                </FancyBox>
            </div>

            <div className='map_box'>
                <div className='img_box' ref={vr720Ref}>
                    <img src={require('../../../img/vr720/map@2x.jpg').default} />
                </div>
            </div>
        </section>
    )
}


