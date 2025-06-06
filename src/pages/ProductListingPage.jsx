import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';
import styles from "./ProductListingPage.module.css";
import FilterGroup from "../components/FilterGroup/FilterGroup";
import { brand, category, gender, productCondition } from "../components/FilterGroup/optionsData";
import Section from "../components/Section/Section";
import ProductListing from "../components/ProductListing/ProductListing";
import { produtosAlta } from "../components/ProductListing/ProductsData";

const ProductListingPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const [searchParams] = useSearchParams();
  const urlFilter = searchParams.get('filter'); 
  
  const [displayedProducts, setDisplayedProducts] = useState(produtosAlta);
  const [searchTermDisplay, setSearchTermDisplay] = useState("");

  const options = [
    { name: 'Mais relevantes', code: 'relevant' },
    { name: 'Menor preço', code: 'lowest' },
    { name: 'Maior preço', code: 'highest' }
  ];

  useEffect(() => {
    let productsToDisplay = produtosAlta; 

    if (urlFilter) {
      const lowercasedFilter = urlFilter.toLowerCase();
      productsToDisplay = produtosAlta.filter(product =>
        product.name.toLowerCase().includes(lowercasedFilter) ||
        (product.category && product.category.toLowerCase().includes(lowercasedFilter))
      );
      setSearchTermDisplay(urlFilter); 
    } else {
      setSearchTermDisplay(""); 
    }

    setDisplayedProducts(productsToDisplay); 

  }, [urlFilter]);

  return (
    <>
    <div className={styles.productListingPage}>
        <p>
          {searchTermDisplay
            ? `Resultados para “${searchTermDisplay}” - ${displayedProducts.length} produtos`
            : `Todos os Produtos - ${displayedProducts.length} produtos`}
        </p>
      <div className={styles.customDropdown}>
          <span className={styles.fixedDropdown}>Ordenar por:</span>
          <Dropdown
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.value)}
            options={options}
            placeholder="Selecionar opção"
            optionLabel="name"
          />
        </div>      
    </div>
    <div className={styles.filterGroup}>
      <div className={styles.filterProducts}>
          <h3 className={styles.filterTitle}>Filtrar por</h3>
          <hr />
          <FilterGroup title="Marca" inputType="checkbox" options={brand} />
          <FilterGroup title="Categoria" inputType="checkbox" options={category} />
          <FilterGroup title="Gênero" inputType="checkbox" options={gender} />
          <FilterGroup title="Estado" inputType="radio" options={productCondition} />
        </div>
        <div>
           <Section>
            <ProductListing products={displayedProducts} />
           </Section>
        </div>
    </div>
    </>
  );
};

export default ProductListingPage;
