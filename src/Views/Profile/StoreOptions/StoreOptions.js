import React, {useState, useEffect} from 'react';
import './StoreOptions.scss';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {faAmazon} from '@fortawesome/free-brands-svg-icons';
import {faSteam} from '@fortawesome/free-brands-svg-icons';
function StoreOption(props) {

    const {storeDeals} = props;
    const [storeDealsToOffer,
        setStoreDealsToOffer] = useState((
        <div style={{
            textAlign: "center"
        }}>
            <p>Sorry no deals on this game</p>
        </div>
    ));

    const renderStoreData = (storeDeals) => {
        if (storeDeals.gameStoreData.length) {
            const storeDealsToDisplay = storeDeals
                .gameStoreData
                .map((offer, index) => {

                    const logo = offer.shop.name === 'Amazon'
                        ? <FontAwesomeIcon icon={faAmazon}/>
                        : <FontAwesomeIcon icon={faSteam}/>
                    let priceToShow = 0;
                    if (offer.price_new < offer.price_old) {
                        priceToShow = (
                            <div className="style-1">
                                <del>
                                    <span className="amount">$ {offer
                                            .price_old
                                            .toFixed(2)}</span>
                                </del>
                                <ins>
                                    <span className="amount">$ {offer
                                            .price_new
                                            .toFixed(2)}</span>
                                </ins>
                            </div>
                        )
                    } else {
                        priceToShow = `$ ${offer.price_new}`
                    }

                    return (
                        <a href={offer.urls.buy} key={index} target="_blank" rel="noopener noreferrer">
                            <div className="storeOptionOffer">
                                <div className="storeOptionLogo">{logo}</div>
                                <div className="storeOptionTitle">
                                    <div>{offer.title}</div>
                                </div>
                                <div className="storeOptionPrice">
                                    <div>{priceToShow}</div>
                                </div>
                            </div>
                        </a>
                    )
                })
            setStoreDealsToOffer(storeDealsToDisplay)
        }
    }

    useEffect(() => {
        renderStoreData(storeDeals)
    }, [storeDeals])

    return (
        <div className="storeOptions">
            <div className="StoreOptionsHeader">
                <div className="storeOptionTitle">
                    <p>{props.storeDeals.gameTitle}</p>
                </div>
                <div className="storeOptionIcon">
                    {props.storeDeals.gameTitle
                        ? (
                            <Link to={`/game_details/${props.storeDeals.gameSlug}`}>
                                <FontAwesomeIcon icon={faInfoCircle}/>
                            </Link>
                        )
                        : ''}
                </div>
            </div>
            <div className="StoreOptionsBody">
                {storeDealsToOffer}
            </div>
        </div>
    )
}

export default StoreOption
