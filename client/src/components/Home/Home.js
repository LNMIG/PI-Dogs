import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBreeds, getTemperaments } from '../../redux/actions';
import Menu from '../Menu/Mainmenu.js';
import Detailstripe from '../Commondetails/Detail-stripe.js';
import BreedCard from '../BreedCard/BreedCard.js';
import Pagination from '../Pagination/Pagination.js'
import footprint from '../../assets/footprintviolet.png';


const Home = (props) => {
    const dispatch = useDispatch();
    const allBreeds = useSelector(state => state.allBreeds);
    const allTempers = useSelector(state => state.temperslist);
    const [breeds, setBreeds] = useState([]); 
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [breedsPerPage, setBreedsPerPage] = useState(8);
    const [width, setWidth] = useState(window.innerWidth)
    

    useEffect( () => {
        const reSize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', reSize)
        if (width > 1700 && width <=1980) setBreedsPerPage(12);
        if (width > 1570 && width <= 1700) setBreedsPerPage(10);
        if (width > 1255 && width <= 1570) setBreedsPerPage(8);
        if (width > 940 && width <= 1255) setBreedsPerPage(6);
        if (width > 640 && width <= 940) setBreedsPerPage(4);
        if (width > 350 && width <= 640) setBreedsPerPage(2);
    },[width])

    useEffect ( ()=> { dispatch(getAllBreeds()); dispatch(getTemperaments())}, [dispatch]);
    useEffect ( ()=> { setBreeds(breeds => ([...allBreeds]))}, [allBreeds]);
    useEffect ( ()=> { (breeds.length===0) ? setLoading(true) : setLoading(false)},[breeds]);

    // Get current breeds
    const indexOfLastBreed = currentPage * breedsPerPage;
    const indexOfFirstBreed = indexOfLastBreed - breedsPerPage;
    const currentBreeds = breeds.slice(indexOfFirstBreed, indexOfLastBreed);
    const totalBreeds = breeds.length;
    const totalPages = [];
    for (let i = 1; i <= Math.ceil(totalBreeds / breedsPerPage); i++) {
        totalPages.push(i);
    }

    // Change page
    const handleOnClick = (pageNumberCatched)=> { setCurrentPage(pageNumberCatched) };
    // Get All & Find breed
    const handleFindBreed = (result) => {
        if (typeof(result)==='string') {
            let notfound = [{id:0, name:result, weight: 0, image: 'none', temperament: 'none'}];
            setBreeds(breeds => notfound);
        } else {
            setBreeds(breeds => ([...result]));
            setCurrentPage(current => 1);
        }
    }
    // Variables for several selection lists 
    let opCreated = [{value:"API", label: "EXISTING BREEDS"},{value:"DB", label: "CREATED BREEDS"}];
    let opName = [{value:"A-Z", label: "...NAME (A-Z)"},{value:"Z-A", label: "...NAME (Z-A)"}];
    let opWeight = [{value:"MIN-MAX", label: "...WEIGHT (min - max)"},{value:"MAX-MIN", label: "...WEIGHT (max - min)"}];
    let opTempers = []; allTempers.forEach(temper => opTempers.push({value:temper.name.toUpperCase(), label:temper.name.toUpperCase()}))
    let options = [opCreated,opName,opWeight,opTempers];
    let placeholders = ["GET BREEDS FROM...", "SORT BY NAME...", "SORT BY WEIGHT...","FILTER BY TEMPERAMENTS"]
   
    return (
        <div>
            <div className="Backdetail">
                <Detailstripe src={footprint} className={"stripeTop"}/>
                <Menu options={options} placeholders={placeholders} breeds={breeds} className={"Mainmenu"} handleFindBreed={handleFindBreed}/>
                <div className="ButtonsStrip">
                    <span className="totalbreeds">{totalBreeds} Breeds</span>
                    {currentPage && <span className="pageofmany">Page <span>{currentPage}</span> / <span>{totalPages.length}</span></span>}
                    <Pagination totalPages={totalPages} handleOnClick={handleOnClick} className={"navigation"}/>
                </div>
                <div className="Breedcardcontainer">
                    <BreedCard breeds={currentBreeds} loading={loading} className={"sorter"}/>
                </div>
                <Detailstripe src={footprint} className={"stripeBottom"}/>
            </div>
        </div>
    )


};
export default Home;