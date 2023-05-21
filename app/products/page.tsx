'use client';
import styles from './styles.module.css'
import { products } from './data/products'
import { useState } from 'react';
interface product {
    category: string;
    price: string;
    stocked: boolean;
    name: string
}
export default function Page() {
    return (
        <div>
            <FilterableProductTable products={products}></FilterableProductTable>
        </div>
    )
}
function FilterableProductTable({ products }: { products: Array<product> }) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    const [isFilter, setIsFilter] = useState(false);

    return (
        <>
            <SearchBar filterText={filterText} inStockOnly={inStockOnly} isFilter={isFilter} onFilterTextChange={setFilterText} onInStockOnlyChange={setInStockOnly} onIsFilterChange={setIsFilter}></SearchBar>
            <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} isFilter={isFilter}></ProductTable>
            {/* <ProductName name={"papapap"} highLightText={"p"}></ProductName>
            <br />
            <ProductName name={""} highLightText={"p"}></ProductName> */}
        </>
    )
}
function SearchBar({ filterText, inStockOnly, isFilter, onFilterTextChange, onInStockOnlyChange, onIsFilterChange }
    :
    {
        filterText: string,
        inStockOnly: boolean,
        isFilter: boolean,
        onFilterTextChange: (newFilterText: string) => void,
        onInStockOnlyChange: (newInStockOnly: boolean) => void,
        onIsFilterChange: (newIsFilter: boolean) => void
    }) {
    return (
        <div className={styles.searchBar}>
            <input type="text" placeholder='search..' value={filterText} onChange={(e) => onFilterTextChange(e.target.value)}></input>
            <div>
                <input type="checkbox" id="inStock" name="inStock" checked={inStockOnly} onChange={() => onInStockOnlyChange(!inStockOnly)}></input>
                <label htmlFor="inStock">Only show products in stock</label>
            </div>
            <div>
                <input type="checkbox" id="isFilter" name="isFilter" checked={isFilter} onChange={() => onIsFilterChange(!isFilter)}></input>
                <label htmlFor="isFilter">Filtering</label>
            </div>
        </div>
    )
}
function ProductTable({ products, filterText, inStockOnly, isFilter=true }: { products: Array<product>, filterText: string, inStockOnly: boolean, isFilter: boolean }) {
    const rows: Array<React.ReactNode> = [];
    const highLightText = filterText;
    let lastCategory: null | string = null;
    let filteredProducts = products.filter(function (product) {
        if (inStockOnly && !product.stocked) {
            return false
        } else if (filterText != "") {
            if (product.name.toLocaleLowerCase().includes(filterText.toLowerCase())) {
                return true
            } else {
                return !isFilter
            }
        } else {
            return true
        }

    })
    filteredProducts.forEach((product) => {
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow category={product.category} />
            )
            lastCategory = product.category;
        }
        if (!inStockOnly || (inStockOnly && product.stocked)) {
            rows.push(
                <ProductRow product={product} highLightText={highLightText} />
            )
        }
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}
function ProductRow({ product, highLightText }: { product: product, highLightText: string }) {
    // const name = product.stocked ? product.name : <span style={{ color: 'red' }}>
    //     {product.name}
    // </span>;
    return (<tr>
        <td><ProductName name={product.name} highLightText={highLightText} /></td>
        <td>{product.price}</td>
    </tr>)
}
function ProductCategoryRow({ category }: { category: string }) {
    return (<tr>
        <th>{category}</th>
    </tr>)
}
function ProductName({ name, highLightText }: { name: string, highLightText: string }) {
    const splittedName: Array<string> = name.toLowerCase().split(highLightText); // LENGHT = 1 OR MORE
    if (splittedName.length === 1) {
        return <span>{name}</span>
    } else {
        var nameSpans: Array<React.ReactNode> = [];
        for (let i = 0; i < splittedName.length; i++) {
            const capitalise = (i === 0);
            nameSpans.push(<span>{capitalise && splittedName[i].length > 0 ? splittedName[i][0].toUpperCase() + splittedName[i].slice(1,) : splittedName[i]}</span>)
            if (i != splittedName.length - 1) {
                nameSpans.push(
                    <span style={{ color: "blue" }}>{capitalise && highLightText!="" && splittedName[0]=="" ?  highLightText[0].toUpperCase() + highLightText.slice(1,) : highLightText}</span>
                )
            }
        }
    }
    return (
        <>
            {nameSpans}
        </>
    )
}