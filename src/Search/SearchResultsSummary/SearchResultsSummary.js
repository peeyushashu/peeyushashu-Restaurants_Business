import React from 'react';
import styles from './SearchResultsSummary.module.css';

export function SearchResultsSummary(props) {
    
    return (
        <div className={styles.container}>
            <div className={styles['search-summary']}>
                <h1 className='subtitle'><strong>All Restaurants ~{"\n"} {props.location}</strong> </h1>
            </div>
            <div className={styles.filters}>
                <span>Filter by:</span>
                <div>open Now</div>
                <input type="radio" id="Open" name="Open Now" value="Open Now" aria-label='Open Now'/>
                <div>
                    <select name="Price" id="Price">
                        <option value="All">All</option>
                        <option value="$">$</option>
                        <option value="$$">$$</option>
                        <option value="$$$">$$$</option>
                        <option value="$$$">$$$$</option>
                    </select>
                </div>
                <div>
                    <select name="Categories" id="Categories">
                        <option value="Italian">Italian</option>
                        <option value="American">American</option>
                        <option value="Seafood">Seafood</option>
                        <option value="Thali">Thali</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Mexican">Mexican</option>
                    </select>
                </div>
            </div>
        </div>
    );
}