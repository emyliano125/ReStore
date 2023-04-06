
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import ProductList from "../catalog/ProductList"
import { useEffect } from "react";
import { fetchProductsAsync, producSelectors } from "./catalogSlice";


export default function Catalog()
{
    const products = useAppSelector(producSelectors.selectAll);
    const dispatch = useAppDispatch();
    const {productsLoaded, status} = useAppSelector(state=>state.catalog);

    useEffect(()=> { 
        if(!productsLoaded) dispatch(fetchProductsAsync());
    }, [productsLoaded,dispatch])
  

    if(status.includes('pending'))return<LoadingComponent message='Loading products...'/>
 
    return ( 
        <>
       <ProductList products={products}/>
       
       </>

    )
}