import React from 'react';
import {ActionsWrapper, Button, CardWrapper ,DescriptionWrapper, ImageWrapper, TextWrapper, TitleWrapper} from './SearchResult.style.js';
import { BusinessRating } from '../../../BusinessRating/BusinessRating';


export function SearchResult(props) {
    const b = props.business;
    if (!b) {
        return (<div/>);
    }

    const tags = b.categories.map(category => (<span  key={b.id + category.title}>{category.title}</span>));
    const addressLines = b.location.display_address.map(addressLine => <p key={b.id + addressLine}>{addressLine}</p>);

    return (
        <>
        <CardWrapper key={b.id}>
            <ImageWrapper src={b.image_url} alt={b.name} />
            <TextWrapper>
                <TitleWrapper>{b.name}</TitleWrapper>
                <DescriptionWrapper>
                    <BusinessRating reviewCount={b.review_count} rating={b.rating}/>
                    <p>{b.price}</p>
                    <p>{tags}</p>  
                    <p>{b.phone}</p>
                    {addressLines}  
                </DescriptionWrapper>
            </TextWrapper>
            <ActionsWrapper>
                <Button>Learn More</Button>
            </ActionsWrapper>
        </CardWrapper>
        </>
    )
}