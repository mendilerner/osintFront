import { Box, Button, Typography } from "@mui/material";
import { Point } from "ol/geom";

import{fromLonLat} from "ol/proj";
import locationIcon from './../../../../../../location-sign.svg';

import { RFeature, RLayerTile, RLayerVector, RMap, ROSM, ROverlay, RStyle } from "rlayers";
import { RCircle, RFill, RStroke } from "rlayers/style";
import React, { useEffect, useState } from "react";
// import { RStyle, RIcon, RFill, RStroke } from "rlayers/style";
// import { Polygon, Point } from "ol/geom";
const center = fromLonLat([2.364, 48.82]);
const a = ['#0000FF', '#21Fff0', '#22B534' ]
const date = new Date
// const arr = [[-4.295, 48.8737],[14.295, 48.8737],[24.295, 48.8737]]
const DashBoard = () => {
  useEffect(():void => { console.log('re-rendered!'); });
  const [rating, setRatign] = useState(0)
  const [arr , setArr] = useState([{coordinates: [-4.295, 48.8737], color: "#7D0A0A", rating: 3}, {coordinates: [14.295, 48.8737], color: "#7D0A0A", rating: 2},  {coordinates:[24.295, 48.8737] , color: "#7D0A0A", rating: 5}])
  return (
    <React.Fragment>
    <RMap  width={'100%'} height={'80vh'} initial={{center: center, zoom: 2}}>
   < RLayerTile url="http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}"/>
   <RLayerVector zIndex={10}>
   
     
     {arr.map((item) => <React.Fragment key={Date.now() * Math.random()}>
      
        <RFeature  
            geometry={new Point(fromLonLat(item.coordinates))}
            onClick={(e) => {
              e.stopPropagation()
              setRatign(item.rating)}
                // e.map.getView().fit(e.target.getGeometry().getExtent(), {
                //     duration: 2000,
                //     maxZoom: 6
                // })
                
            }
        >
          <RStyle.RStyle>
            <RStyle.RCircle radius={item.rating * 5}>
              <RStroke color={item.color} width={2}/>
             <RFill color={'#7D0A0A20'}/>
            </RStyle.RCircle>
        </RStyle.RStyle>

        {rating === item.rating && <ROverlay className="example-overlay">
          <Typography sx={{border: '0.1px solid red', zIndex: 100 , background: 'white'}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod ad dolore suscipit pariatur id fugit corporis repellat minima consectetur commodi iusto praesentium at, inventore deleniti autem perspiciatis. Quae, ipsam vero.
          </Typography>
          </ROverlay>}
        </RFeature>
     </React.Fragment>)}
        
    </RLayerVector>
</RMap>
<Button onClick={() => setArr((prev) =>  [[-6.295, 28.8737],[34.295, 48.8737],[14.295, 48.8737]])}> hiclick</Button>
</React.Fragment>
  );
};

export default DashBoard;
