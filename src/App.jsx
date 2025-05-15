import "primereact/resources/themes/lara-light-pink/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import "primeflex/themes/primeone-light.css"
import "primeflex/primeflex.css"
import "./assets/styles/global.css"
import Paths from "./routes/Paths";

import Section from "./components/Section/Section"


const App = () => {
  return ( 
    <>
     <Paths/>

     {/* AQUI É PARA TESTAR A SECTION, DEPOIS RETIRAR*/}
     <div>
      {/* <Section
        title="com link e titulo alinhado center"
        titleAlign="center"
        link={{ href: "#", text: "Ver mais" }}>
      </Section>

      <Section 
      title="Sem link e sem titleAlign"

      >
      </Section>

      <Section 
      title="com link e sem titleAlign"
      link={{ href: "#", text: "Ver mais" }}>
      </Section> */}
    </div>
    </>
   );
}
 
export default App;