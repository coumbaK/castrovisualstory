
import './App.css';
import header from './headlines.png';

import Storefronts from './Storefronts';

import LeafMap from './LeafletMap';

function App() {
  return (
    <div className="App">
      <main id ="content">
        <div id="header">
         <img src ={header} alt = "headlines"/>
        </div>
        <h2 id="byline">By Mame Coumba Ka, Tara King , Lauren Schlageter, Felisha Fan.</h2>
        
        <p className= "story">“Help Us Keep the Castro Queer A.F.!” reads the GoFundMe page used to crowdsource donations to fund Queer Arts Featured. As rent prices have skyrocketed across San Francisco, the boutique gallery space for local LGBTQ artists has relied heavily on community funding to stay open. Operating in the storefront where Harvey Milk’s camera shop once stood, the gallery hopes to honor his legacy by creating safe spaces where queer people can express themselves freely.</p>
         <p className= "story">“Being able to be in the space and give queer people the opportunity to try something, to teach something, to celebrate something is the central focus of what we're doing,” Co-Founder Devlin Shand said.</p>
         
         <p className= "story">Sid Deshpande, a ceramics sculptor, is grateful to have spaces like Queer AF to feature their work. As a POC non-binary artist, Deshpande has found gaining access to gallery space much more challenging for those who do not fit the cis-white-male standard. </p>
         
          <p className= "quote">“I think Queer Arts Featured has been exceptional in having a pretty central location and voice in the Castro specifically for queer folks well beyond gender or race or any other identity markers,” Deshpande said. “I think [Devlin]’'s just been really exceptional about not just having queer voices, but like thinking really intentionally about  how to have intersectional queerness.”</p>
          {/* insert img */}
          <p className= "story">“I think another thing that Devlin has really done well, which I haven't seen elsewhere, is just the sheer amount of community events Queer AF has been able to host over a short time,” said Deshpande. Queer AF hosts wellness workshops, clothing swaps, drag makeup classes, and social events that are open to the LGBTQIA+ community. </p>
          <p className= "story">Unfortunately, many retail spaces across the Castro have not been as lucky as Queer AF to remain open. Over 20 storefronts in the neighborhood sit vacant, plastered with “For Lease” banners from commercial real estate companies. What once was a bustling hub for the queer community has seemed to dissipate over the years. </p>
           <Storefronts />
         <p className= "story">Louis Cullen, Assistant Manager at Cliff’s Hardware, has seen the neighborhood change before his eyes. Cullen, who has been living in the area since the ‘90s, has observed business after business close their doors as the price of living has become unmanageable. Cullen blames property owners in the area leaving their spaces vacant to use as tax write-offs. </p>
         <p className="quote">“It started even before the pandemic. The Castro isn’t what it used to be,” Cullen said. “What was once community-owned and operated has become overrun by corporate firms, taking the culture out of the Castro.”</p>
         <p className= "story">“What's interesting is that you have vacancies but you still have sky high rents,” USF Professor Rachel Brahinsky said. “And sometimes those things are connected, right, because… if we're talking about commercial rents, businesses get kicked out essentially by rent hikes. And then sometimes business owners will hold the place vacant for a while, rather than reduce the rent, right? They'll just sit on it and wait.” </p>
         <p className= "story">Brahinsky, a professor in the Urban Studies department at the University of San Francisco, specializes in human and social geography within American cities, with a longtime focus on San Francisco. According to Brahinsky, gentrification in the Castro area is nothing new. But, the area has remained predominantly made up of white gay men because they are the ones able to afford the increasing price of living. </p>
         <p className= "story">“As gay men start establishing households, you have two or more men in a household in our society where men still get paid more than women for the same jobs… so you'd have higher income households, essentially,” said Brahinsky. “And so the Castro starts concentrating this community that can handle the kind of rising gentrification of San Francisco more broadly. So it remains gay, but becomes increasingly more white, gay male, right, in terms of who's owning houses and living there.”</p>
         <LeafMap/>
         
         <p className= "story">Shand, too, has observed the changes in the neighborhood due to the rising price of living. “As [the Castro] becomes more homogenized by the tech industry and this digital way of connecting, the people who create the culture who are on the ground, putting the work in, can no longer afford to do that in San Francisco,” says Shand. </p>
         <p className= "story">“We've lost so much creativity and so much spontaneous energy because those folks have to find somewhere where they can exist and be able to create at the same time, and that's something that we're trying slowly and bit by bit to get back.”</p>
         <p className= "story">While 22-year-old Doris Mantley has not been around the Castro long enough to see it change, she believes digital connection has benefited the LGBTQ community. 

        “In the past if you wanted to be part of a queer community, you had to physically move your body to a queer neighborhood, but now social media has definitely changed the sphere of a safe space,” the Fabulosa Books employee said. “You can meet other queer people online and create your own spaces with friends. Designated queer spaces are still important but I don’t know if they’re still related to one specific area. It’s more the city and where you’re living as a whole. Our generation is more in tune with that rather than moving to a specific neighborhood to exist as gay.” 
        </p>
        
        <p className= "story">“In the past if you wanted to be part of a queer community, you had to physically move your body to a queer neighborhood, but now social media has definitely changed the sphere of a safe space,” the Fabulosa Books employee said. “You can meet other queer people online and create your own spaces with friends. Designated queer spaces are still important but I don’t know if they’re still related to one specific area. It’s more the city and where you’re living as a whole. Our generation is more in tune with that rather than moving to a specific neighborhood to exist as gay.” </p>
         
         
      <p className= "quote">“We need safe spaces but the goal is to not have to have safe spaces” says Cullen. </p>
        <p className= "story">While older generations may cling to the idea of having spaces in designated queer neighborhoods, Gen Z has hope to be able to redefine what a safe space really is. </p>
        


      </main>
  
    </div>
  );
}

export default App;
