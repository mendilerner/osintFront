import { Point } from "ol/geom";
import { useQuery } from "@apollo/client";
import{fromLonLat} from "ol/proj";
import { RFeature, RLayerTile, RLayerVector, RMap, RPopup, RStyle } from "rlayers";
import { RCircle, RFill, RStroke } from "rlayers/style";
import React, { useEffect } from "react";
import { getAllnews, newOrUpdatedNews } from "../../../services/graphqlQueries";
import { Newsinterface } from "../../../interfaces/newsInterface";
import NewsBanner from "./NewsBanner";
import { mergeObjects } from "../../../utils/utils";
import { Overlay } from "ol";
import Feature  from './Feature'
const center = fromLonLat([2.364, 48.82]);

const DashBoard = () => {
  
  const {loading, error , data, subscribeToMore} = useQuery(getAllnews)
  console.log(data);
  const subscribeToNewOrUpdatednews = () => {
    subscribeToMore({
      document: newOrUpdatedNews,
      updateQuery: (prev, {subscriptionData}) => {
        const newOrUpdatedNews = subscriptionData.data.newOrUpdatedNews
        if (!newOrUpdatedNews) return prev
        const updatedArrayNews = mergeObjects(prev.allNews, newOrUpdatedNews)
        return Object.assign({}, prev, {
          allNews: updatedArrayNews
        }) 
      }
    })
  }
  
  useEffect(():void => {
    subscribeToNewOrUpdatednews() 
    console.log('re-rendered!')});
  return (
    <React.Fragment>
    <RMap  width={'100%'} height={'80vh'} initial={{center: center, zoom: 2}}>
   < RLayerTile url="http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}"/>
   <RLayerVector zIndex={10} >
   
     
     {data && data.allNews.map((item: Newsinterface) => <Feature item={item} key={Date.now() * Math.random()}/>)}
        
    </RLayerVector>
</RMap>
</React.Fragment>
  );
};

export default DashBoard;



// current === item._id && <ROverlay className="example-overlay">
// {/* <Paper elevation={3}>
// <Typography sx={{border: '0.1px solid red', zIndex: 100 , background: 'white',height: '12rem', width: "12rem"}}>
// {item.snippet}
// </Typography>
// <Link to={item.link}>
//  link to report
// </Link>
// </Paper> */}
// <NewsBanner news={item}/>
// </ROverlay>

// onClick={(e) => {
//   e.stopPropagation()
//   setCurrent(item._id)}
//     // e.map.getView().fit(e.target.getGeometry().getExtent(), {
//     //     duration: 2000,
//     //     maxZoom: 6
//     // })
    
// }

{/* <React.Fragment key={Date.now() * Math.random()}>
      
      <RFeature 
          geometry={new Point(fromLonLat([item.coordinates[1] ,item.coordinates[0]]))}
      >
        <RStyle.RStyle>
          <RCircle radius={(item.rating === 1) ? 10 : (item.rating >= 2 && item.rating <= 3) ? 14 : (item.rating >= 5) ? 18 : 6} >
            <RStroke color={'#0A0A20'} width={2}/>
           <RFill color={(item.rating === 1) ? '#ff5757' : (item.rating >= 2 && item.rating <= 3) ? '#ff0e0e' : (item.rating >= 5) ? 	'#6a0000' : '#99cc33'}/>
          </RCircle>
      </RStyle.RStyle>
      <RPopup trigger={"click"} >
      <NewsBanner news={item}/>
          </RPopup>
      </RFeature>
   </React.Fragment> */}