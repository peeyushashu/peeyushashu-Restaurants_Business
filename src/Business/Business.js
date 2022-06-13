import React, {useState, useEffect } from 'react';
import { BusinessResultsSummary } from './BusinessResultsSummary/BusinessResultsSummary';
import { BusinessResults } from './BusinessResults/BusinessResults';
import * as api from '../hooks/yelp-api/api';

export function Business() {
    const [businesses, setBusinesses] = useState([]);
    const [amountResults, setAmountResults] = useState();
    const [searchParams, setSearchParams] = useState({location: "Las Vegas"});

    useEffect(() => {
        setBusinesses([]);
        const fetchData = async () => {
            try {
                const rawData = await api.get('/businesses/search', searchParams);
                const resp = await rawData.json();
                setBusinesses(resp.businesses);
                setAmountResults(resp.total);
            } catch(e) {
                console.error(e);
            }
        };
        fetchData();
    }, []);
    

    return (
        <div>
            <BusinessResultsSummary term={searchParams.term}
                                  location={searchParams.location}
                                  amountResults={amountResults}
                                  shownResults={businesses ? businesses.length : 0}
            />
            <BusinessResults businesses={businesses}/>
        </div>
    );
}