import logo from './logo.svg';
import './App.css';
import Storefronts from './Storefronts';

function App() {
  return (
    <div className="App">
      <main id ="content">
        <h1 id="title">Title of Our Article</h1>
        <h2 id="byline">By Names</h2>
        <p>“Help Us Keep the Castro Queer A.F.!” reads the GoFundMe page used to crowdsource donations to fund Queer Arts Featured. As rent prices have skyrocketed across San Francisco, the boutique gallery space for local LGBTQ artists has relied heavily on community funding to stay open.
         Operating in the storefront where Harvey Milk’s camera shop once stood, the gallery hopes to honor his legacy by creating safe spaces where queer people can express themselves freely. </p>
         <p>“Being able to be in the space and give queer people the opportunity to try something, to teach something, to celebrate something is the central focus of what we're doing,” Co-Founder Devlin Shand said.</p>
         <p>To facilitate this, Queer AF hosts wellness workshops, clothing swaps, drag makeup classes, and social events that are open to the LGBTQIA+ community. </p>
          <Storefronts />
         <p>Louis Cullen, Assistant Manager at Cliff’s Hardware, has seen the neighborhood change before his eyes. Cullen, who has been living in the area since the ‘90s, has observed business after business close their doors as the price of living has become unmanageable. 
         Cullen blames property owners in the area leaving their spaces vacant to use as tax write-offs.</p>
         <p>“What was once community-owned and operated has become overrun by corporate firms, taking the culture out of the Castro,” Cullen said. “It started even before the pandemic. The Castro isn’t what it used to be.”</p>
         {/* insert visual 2 */}
         <p>Shand, too, has observed the change in atmosphere. “As [the Castro] becomes more homogenized by the tech industry and this digital way of connecting, the people who create the culture who are on the ground, putting the work in, can no longer afford to do that in San Francisco,” says Shand. 
         <p>“We've lost so much creativity and so much spontaneous energy because those folks have to find somewhere where they can exist and be able to create at the same time, and that's something that we're trying slowly and bit by bit to get back.”</p>
         While 22-year-old Doris Mantley has not been around the Castro long enough to see it change, she believes digital connection has benefited the LGBTQ community. </p>

        <p>“In the past if you wanted to be part of a queer community, you had to physically move your body to a queer neighborhood, but now social media has definitely changed the sphere of a safe space,” the Fabulosa Books employee said. “You can meet other queer people online and create your own spaces with friends. Designated queer spaces are still important but I don’t know if they’re still related to one specific area. It’s more the city and where you’re living as a whole. Our generation is more in tune with that rather than moving to a specific neighborhood to exist as gay.” </p>
      <p>“We need safe spaces but the goal is to not have to have safe spaces” says Cullen. 
        While older generations may cling to the idea of having spaces in designated queer neighborhoods, Gen Z has hope to be able to redefine what a safe space really is. </p>
        {/* insert visual 3 */}


      </main>
  
    </div>
  );
}

export default App;
