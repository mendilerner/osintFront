import React from 'react'
import { RFeature, RPopup, RStyle } from 'rlayers'
import { RCircle, RFill, RStroke } from 'rlayers/style'
import NewsBanner from './NewsBanner'
import { fromLonLat } from 'ol/proj'
import { Point } from 'ol/geom'
import { Newsinterface } from '../../../interfaces/newsInterface'

const Feature = ({item}:{item:Newsinterface}) => {
    const popup = React.useRef<RPopup>();
    const hidePopUp = () => {popup.current?.hide()}
  return (
    <React.Fragment>
      
        <RFeature 
            geometry={new Point(fromLonLat([item.coordinates[1] ,item.coordinates[0]]))}
        >
          <RStyle.RStyle>
            <RCircle radius={(item.rating === 1) ? 10 : (item.rating >= 2 && item.rating <= 3) ? 14 : (item.rating > 3 && item.rating <= 5) ?  16: (item.rating >= 6) ? 20 : 6} >
              <RStroke color={'#0A0A20'} width={2}/>
             <RFill color={(item.rating === 1) ? '#ff9999' : (item.rating >= 2 && item.rating <= 3) ? '#ff5757' :  (item.rating > 3 && item.rating <= 5) ?  '#ff0e0e' : (item.rating >= 6) ? 	'#6a0000' : '#99cc33'}/>
            </RCircle>
        </RStyle.RStyle>
        <RPopup trigger={"click"} ref={popup}>
        <NewsBanner news={item} hidePopup={hidePopUp}/>
            </RPopup>
        </RFeature>
     </React.Fragment>
  )
}

export default Feature