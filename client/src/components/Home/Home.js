import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllBreeds } from '../../redux/actions';
import Menu from '../Menu/Mainmenu.js';
import Detailstripe from '../Commondetails/Detail-stripe.js';
import BreedCard from '../BreedCard/BreedCard.js';
import Pagination from '../Pagination/Pagination.js'
import footprint from '../../assets/footprintviolet.png';


const Home = (props) => {
    const dispatch = useDispatch()
    const [breeds, setBreeds] = useState([]); 
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [breedsPerPage] = useState(8);

    useEffect ( ()=> { dispatch(getAllBreeds())}, [dispatch]);
    useEffect ( ()=> { setBreeds(breeds => ([...props.breeds])); }, [props.breeds]);
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
            let notfound = [{id:0, name:result, weight: 0, image: 'undefined'}];
            setBreeds(breeds => notfound);
        } else {
            setBreeds(breeds => ([...result]));
        }
    }


    return (
        <Fragment>
            <div className="Backdetail">
                <Detailstripe src={footprint} className={"stripeTop"}/>
                <Menu className={"Mainmenu"} handleFindBreed={handleFindBreed}/>
                <div className="CardsShow">
                    <span className="totalbreeds">{totalBreeds} Breeds</span>
                    {currentPage && <span className="pageofmany">Page <span>{currentPage}</span> / <span>{totalPages.length}</span></span>}
                    <Pagination totalPages={totalPages} handleOnClick={handleOnClick} className={"navigation"}/>
                </div>
                <div className="Breedcardcontainer">
                    <BreedCard breeds={currentBreeds} loading={loading} className={"sorter"}/>
                </div>
                <Detailstripe src={footprint} className={"stripeBottom"}/>
            </div>
        </Fragment>
    )


};
function mapStateToProps (state) { return { breeds: state.allBreeds }; }
function mapDispatchToProps (dispatch) { return { getAll: () => dispatch(getAllBreeds()) }; }
export default connect(mapStateToProps, mapDispatchToProps)(Home);





// class Home extends React.Component {
//     state = {breeds: [], loading: false, currentPage: 1, breedsPerPage: 8};
//     async componentDidMount() {
//         this.setState({ loading:true });
//         await this.props.getAll();
//         this.setState({breeds: this.props.breeds});
//         this.setState({ loading: false});
//     };

//     indexOfLastBreed = this.state.currentPage * this.state.breedsPerPage;
//     indexOfFirstBreed = this.indexOfLastBreed - this.state.breedsPerPage;
//     currentBreeds = this.state.breeds.slice(0,8);
    

//     render() {
//     console.log(this.state.breeds.slice(0,2))
//     console.log(this.indexOfLastBreed)
//     console.log(this.indexOfFirstBreed)
//     console.log(this.currentBreeds)
//         return (
//             <Fragment>
//                 <div className="backdetail">
//                   <Detailstripe src={footprint}/>
//                     <h1>Pagination</h1>
//                     <BreedCard breeds={this.currentBreeds} loading={this.state.loading}/>
//                   <Detailstripe src={footprint}/>
//                 </div>
//             </Fragment>
//         )
//     }
// };

// function mapStateToProps (state) { return { breeds: state.allBreeds }; }
// function mapDispatchToProps (dispatch) { return { getAll: () => dispatch(getAllBreeds()) }; }
// export default connect(mapStateToProps, mapDispatchToProps)(Home);
