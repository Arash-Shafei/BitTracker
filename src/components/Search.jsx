import {useEffect, useState} from "react";
import axios from "axios";
import Coin from "./Coin";

function Search(){



    const API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    useEffect( () => {
        axios.get(API_URL).then(response => {
            setCoins(response.data);
        })
    }, []);

    const handleChange = e => {setSearch(e.target.value)};
    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));





    return(
        <div>
            <div className='coin-search-container'>
                <h1 className='coin-search-text'>Search Cryptocurrency</h1>
                <form>
                    <input type='text' placeholder='Enter Coin Name' className='coin-search-input' onChange={handleChange}/>
                </form>
            </div>
            {filteredCoins.map(coin => {
                return(
                    <Coin
                        key={coin.id}
                        name={coin.name}
                        image={coin.image}
                        symbol={coin.symbol}
                        volume={coin.volume}
                        price={coin.current_price}
                        priceChange={coin.price_change_percentage_24h}
                        marketcap={coin.market_cap}/>

                )
            })}
        </div>
    );
}
export default Search;