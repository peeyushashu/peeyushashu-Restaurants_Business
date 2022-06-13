import React from 'react';
import { BusinessResult } from './BusinessResult/BusinessResult';
import styles from './BusinessResults.module.css';
import {Spinner} from '../../Spinner/Spinner.js';

export function BusinessResults(props) {
    let searchResults = <Spinner/>;
    if(props.businesses && props.businesses.length) {
        searchResults = props.businesses.map(b => <BusinessResult key={b.id} business={b}/>);
    }

    return (
        <div className={styles['search-results']}>
            {searchResults}
        </div>
    );
}