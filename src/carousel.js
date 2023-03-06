import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import art1 from './artimg/sid1.png';
import art2 from './artimg/sid2.png';
import art3 from './artimg/sid3.png';
import art4 from './artimg/sid4.png';
const AutoplaySlider = withAutoplay(AwesomeSlider);

function Slider () {
    return(
 <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
        style= {{ height: "40vh"}}
      >
    <div data-src={art1}/>
    <div data-src={art2}/>
    <div data-src={art3}/>
    <div data-src={art4}/>  
  </AutoplaySlider>
);}
export default Slider;

    
    

