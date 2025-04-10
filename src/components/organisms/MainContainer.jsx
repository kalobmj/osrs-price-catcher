import React from 'react';
import { useState, useEffect } from 'react';
import itemData from '../../utils/itemData';
import { useRef } from 'react';
import coins from '../../../src/assets/images/underlayImages/Coins_detail.png'

export default function MainContainer({ underlayStyles }) {
    // state to store item information. triggers page re-render on each change
    const [data, setData] = useState({
        price: '2147m',
        image: coins,
        itemId: null,
        name: null
    });

    // useEffect to update information when data changes
    useEffect(() => {
        const displayItemName = document.getElementById('item-name');
        const displayImage = document.getElementById('item-icon');
        const displayPrice = document.getElementById('item-price');

        displayImage.src = data.image;
        displayItemName.innerText = data.name;
        displayPrice.innerText = data.price;
    }, [data])

    // function to fetch ItemData
    const fetchItemData = async (search) => {
        console.log(`Beginning fetching item data for user search: ${search}`);

        // regex to replace spaces with %20;
        const regex = /\s/gi;
        const searchStr = search.replaceAll(regex, '%20');
        const baseURL = 'https://api.weirdgloop.org/exchange/history/osrs/latest?name=';

        // begin api call
        try {
            const res = await fetch(`${baseURL}${searchStr}`);
            if (!res.ok) {
                alert('item not found!')
                throw new Error(`Error fetching item data using ${search} serch term...`)
            };
            const data = await res.json();
            const dataName = Object.keys(data)[0];
            const itemData = data[dataName];
            console.log(`Here is your requested Data for the item: ${search}`, itemData);
            return itemData;
        } catch (err) {
            console.error(err)
        };
        console.log(`Done fetching data using search: ${search}`);
    };

    // function to fetchData when user presses search btn
    const executeSearch = async () => {
        const searchBar = document.getElementById('search-bar');
        const userSearchValue = searchBar.value;

        // alert for if user pressed search btn will searchBar is empty
        if (userSearchValue === '') {
            alert('Search bar is empty!');
            return;
        };

        // function to fetchData using userSearchValue
        const fetchData = async (userSearchValue) => {
            // find data based on user search term, store in userItemData var
            const userItemData = await fetchItemData(userSearchValue);

            if (userItemData !== false) {
                // await data from userItemData, take its ID and find rest of details
                const userItemDetails = await findDetails(userItemData.id);

                setData(oldData => ({
                    ...oldData,
                    price: userItemDetails.item.current.price,
                    image: userItemDetails.item.icon_large,
                    itemId: userItemDetails.item.id,
                    name: userItemDetails.item.name
                }));
            }
        };
        // calling internal function fetchData, takes arg of userSearch value
        fetchData(userSearchValue);
    };

    // function to find details based on passed item Id
    const findDetails = async (id) => {
        console.log(`Fetching details based on item id: ${id}`)
        const corsURL = 'https://corsproxy.io/?url=';
        const baseURL = 'https://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item='

        // begin api call
        try {
            const res = await fetch(`${corsURL}${baseURL}${id}`);
            if (!res.ok) {
                throw new Error(`Error calling API using id: ${id}`)
            };
            const data = await res.json();
            return data;
        } catch (err) {
            console.error(err)
        };
    };

    const searchBarRef = useRef(null);
    const searchOptions = useRef(null);

    // arr of keys from data.js item object
    let itemNames = Object.keys(itemData);
    itemNames = itemNames.map(item => item.toLowerCase());

    // function to update dropdown menu whenever searchBar value changes
    function searchBarOnChange() {
        let itemNamesCopy = itemNames;
        // this should filter from harcoded item list, based on user current input value
        itemNamesCopy = itemNamesCopy.filter(item => item.includes(searchBarRef.current.value))
        let firstTenItems = itemNamesCopy.slice(0, 10);

        searchOptions.current.innerHTML = '';

        firstTenItems.map(item => {
            searchOptions.current.innerHTML += `
                <li id='search-result-list-item' class='list-group-item'>
				<a href='#' onClick="fetchDataDropdown('${item}')" id=search-result-a>
					<span id='search-result-list-name' className='dropdown-item'>
						${item}
					</span>
				</a>
			</li>
            `
        });

        // clearing dropdown if searchbar is empty
        if (searchBarRef.current.value === '') {
            searchOptions.current.innerHTML = '';
        };
    };

    // function to update price catcher info when user clicks item name on dropdown menu
    window.fetchDataDropdown = async (itemName) => {
        // find data based on user search term, store in userItemData var
        const userItemData = await fetchItemData(itemName);

        // at this point, if our call was successful, userItemData will not equal false, if it does, can end the function early / alert and display default values
        if (userItemData !== false) {
            // await data from userItemData, take its ID and find rest of details
            const userItemDetails = await findDetails(userItemData.id);

            // below: if info all comes back good, update state, if not possibly have default values and send a browser alert
            setData(oldData => ({
                ...oldData,
                price: userItemDetails.item.current.price,
                image: userItemDetails.item.icon_large,
                itemId: userItemDetails.item.id,
                name: userItemDetails.item.name
            }));
        };
    };

    return (
        <div
            className='main-container-underlay'
            id='main-underlay-div'
            style={underlayStyles}
        >
            <div className='main-container'>
                <div className='top-half'>
                    <div className='price-display-underlay'>
                        <div className='price-display-area'>
                            <h3 id='item-price' className='price'>284.4m</h3>
                        </div>
                    </div>
                    <div className='item-display-underlay'>
                        <div className='item-display-area'>
                            <img
                                id='item-icon'
                                className='item-icon' 
                                alt='item-icon' 
                                src={coins} 
                            />
                        </div>
                    </div>
                </div>
                <div className='bottom-half'>
                    <div className='search-area' id='search-area'>
                        <div id='search-bar-and-dropdown'>
                            <input type='text' 
                                placeholder='type to start searching...' 
                                name='item-search' 
                                className='search-bar' 
                                id='search-bar' 
                                ref={searchBarRef} 
                                onChange={searchBarOnChange} 
                                onClick={searchBarOnChange} 
                            />
                            <div id='search-results'>
                                <ul id='options' 
                                    ref={searchOptions} 
                                    className='list-group' 
                                >
                                </ul>
                            </div>
                        </div>
                        <button id='search' 
                                className='btn btn-outline-primary' 
                                onClick={executeSearch} 
                        > 
                                search
                        </button>
                    </div>
                    <div className='item-name-area'>
                        <h2 id='item-name' className='item-name'>armadyl godsword</h2>
                    </div>
                </div>
            </div>
        </div>
    )
};