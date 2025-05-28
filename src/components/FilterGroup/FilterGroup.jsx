import styles from "./FilterGroup.module.css"

const FilterGroup = ({title, inputType = "checkbox", options}) => {
    
    return ( 
        <>
          <div>
             <h4 className={styles.groupTitle}>{title}</h4>
             <div className={styles.filterGroup}>
                {options.map((option, index) => (
                    <label key={index}>
                        <input className={styles.filterInput}
                        type={inputType}
                        value={option.value}
                        />
                        <span className={styles.optionText}>{option.text}</span>
                    </label>
                ))}
             </div>
          </div> 
        </>
     );
}
 
export default FilterGroup;