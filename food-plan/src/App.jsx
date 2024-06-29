import { useState, useEffect } from "react";
// import Select from "react-select";

import ButtonComponent from "./components/ButtonComponent";
import SelectComponent from "./components/SelectComponent";

import "./App.css";
import { categoryOptions } from "./variables";
import { productOptions } from "./variables";

function getProductsByCategoryId(categoryId) {
    console.log("arrProducts", productOptions);
    console.log("categoryId", categoryId);
    const result = productOptions.filter(
        (product) => product.categoryId === categoryId
    );
    console.log("result", result);
    return result;
}

function getCategoryIdByValue(categoryValue) {
    console.log("categoryOptions", categoryOptions);
    console.log("categoryValue", categoryValue);
    const result = categoryOptions.find(
        (category) => category.value === categoryValue
    );
    console.log("categoryId", result.id ?? undefined);
    return result.id ?? undefined;
}
const test = getProductsByCategoryId(productOptions, categoryOptions[0].id);
/* console.log("categoryOptions[0].id");
console.log(categoryOptions[0].id);
console.log("test-filter");
console.log(test); */

function filterProductsByCategory(categoryValue) {
    const categoryId = getCategoryIdByValue(categoryValue);

    const result = categoryId ? getProductsByCategoryId(categoryId) : [];
    console.log("was returns the function filterProd", result);
    return result;
}

function App() {
    const [date, setDate] = useState();
    const [selectedCategoryOption, setSelelectedCategoryOption] = useState(
        categoryOptions[0].value
    );
    const [selectedProductOption, setSelectedProductOption] = useState(
        productOptions[0].value
    );
    console.log(selectedCategoryOption);

    //Aktualisiert Datum
    function updateDate() {
        const currentDate = new Date();
        const dmy = `${currentDate.getDate()}.${currentDate.getMonth()}.${currentDate.getFullYear()} `; /* ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()} */
        setDate(dmy);
    }

    useEffect(() => {
        updateDate();
    }, []);

    /* Wenn die Länge der `options` genau 1 ist, wird der `onChange`-Handler nicht ausgelöst, da es keine Änderung der Auswahl gibt (wenn nur ein Produkt vorhanden ist) */

    const filteredArray = filterProductsByCategory(selectedCategoryOption);
    useEffect(() => {
        if (filteredArray.length === 1) {
            setSelectedProductOption(filteredArray[0].value);
        }
    }, [filteredArray]);

    return (
        <>
            <h1>Food plan</h1>
            <h3>{date}</h3>
            <ButtonComponent
                className="date"
                label="Update date"
                onClickHandler={updateDate}
            />
            <SelectComponent
                label="Select the category"
                options={categoryOptions}
                name="category"
                onChange={setSelelectedCategoryOption}
            />
            {selectedCategoryOption && (
                <p>{`You chose ${selectedCategoryOption}`}</p>
            )}

            <SelectComponent
                label="Select the product"
                options={filterProductsByCategory(selectedCategoryOption)}
                name="product"
                onChange={setSelectedProductOption}
            />

            {selectedProductOption && (
                <p>{`You chose ${selectedProductOption}`}</p>
            )}
        </>
    );
}

export default App;
