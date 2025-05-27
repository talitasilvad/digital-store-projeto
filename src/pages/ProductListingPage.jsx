import { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import styles from "./ProductListingPage.module.css"

const ProductListingPage = () => {
  const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'Mais relevantes', code: 'relevant' },
        { name: 'Menor preço', code: 'lowest' },
        { name: 'Maior preço', code: 'highest' }
    ];
    return ( 
        <>
          <div className={styles.ProductListingPage}>
              <div className={styles.customDropdown}>
                <span className={styles.fixedDropdown}>Ordenar por:</span>
                  <Dropdown 
                  value={selectedCity} 
                  onChange={(e) => setSelectedCity(e.value)} 
                  options={cities}
                  placeholder="Selecionar opção" 
                  optionLabel="name" 
                  />
              </div>
              <div>
                 <div className={styles.filterProducts}>
                    <h3>Filtrar por</h3>
                    <hr />
                 </div>
              </div>
          </div>
        </>
     );
}
 
export default ProductListingPage;