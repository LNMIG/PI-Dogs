import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getBreedDetail } from '../../redux/actions';
import '../../css/index.css';
import missing from '../../assets/missingdog.png';
import footprint from '../../assets/footprintviolet.png';

class BreedDetail extends React.Component {
  async componentDidMount() {
    const idBreed = await this.props.match.params.idBreed;
    await this.props.getBreedsDetail(idBreed);
  }

  render() {
    const {breedDetail} = this.props;
    console.log(breedDetail)
    if (Object.entries(breedDetail).length === 0) {
      return (
        <div className="backdetail">
        {/*---------------------------------------------------*/}
          <div className="stripe">
            <img className="image" src={footprint} alt="BI"/>
            puppies lovers
            <img className="image" src={footprint} alt="BI"/>
          </div>
        {/*---------------------------------------------------*/}
          <div className="container">
            <span className='missinginfo'>
              There is not such breed you are looking for.
            </span>
          </div>
        {/*---------------------------------------------------*/}
          <div className="tryus" >
            <div className="btn" >
              <NavLink className="btn-link" exact to="/home" >BACK HOME</NavLink>
            </div>
          </div>
  

          <div className="stripe">
            <img className="image" src={footprint} alt="BI"/>
            puppies lovers
            <img className="image" src={footprint} alt="BI"/>
          </div>
        </div>


      );

    } else {

      return (
        <div className="backdetail">
        {/*---------------------------------------------------*/}
          <div className="stripe">
            <img className="image" src={footprint} alt="BI"/>
            puppies lovers
            <img className="image" src={footprint} alt="BI"/>
          </div>
        {/*---------------------------------------------------*/}
          <div className="container">

              <div className="name">
                <p>{breedDetail.name}</p>
              </div>

              <div>
                {breedDetail.image === 'none'
                ? <img className="image" src={missing} alt="BI"/>
                : <img className="image" src={breedDetail.image} alt="BI"/>
                }
              </div>

              {breedDetail.temperament === 'none'
              ? <div className="data1">
                  <span className='T'>Temperaments</span>
                  <span className='D'>It seems there is no temperament available for this breed</span>
                </div>
              : <div className="data1">
                  <span className='T'>Temperaments</span>
                  <span className='D'>{breedDetail.temperament}</span>
                </div>
              }
              
              <div className="data2">
                <span className='L'>Height:</span>
                <span className='R'>{breedDetail.height} (cm)</span>
              </div>
              <div className="data2">
                <span className='L'>Weight:</span>
                <span className='R'>{breedDetail.weight} (Kg)</span>
              </div>
              <div className="data2">
                <span className='L'>Life span:</span>
                <span className='R'>{breedDetail.life_span}</span>
              </div>
                
          </div>
        {/*---------------------------------------------------*/}
          <div className="tryus" >
                
              <div className="btn" >
                <NavLink className="btn-link" exact to="/home" >BACK HOME</NavLink>
              </div>
                
          </div>
        {/*---------------------------------------------------*/}
          <div className="stripe">
            <img className="image" src={footprint} alt="BI"/>
            puppies lovers
            <img className="image" src={footprint} alt="BI"/>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps (state) {
  return { breedDetail: state.breedsDetail };
}

function mapDispatchToProps (dispatch) {
  return { getBreedsDetail: (idBreed) => dispatch(getBreedDetail(idBreed)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(BreedDetail);









// function BreedDetail ({getBreedsDetail, breedsDetail}) {
//   const { idBreed } = useParams();
//   const [ detail ] = breedsDetail;

//  React.useEffect( () => {
//   getBreedsDetail(idBreed);
//  });

//   if (typeof(detail) === 'string' ) return <div className=""><p>{detail}</p></div>;


//   return (
//             <div className="">
//                 <div>
//                   <h4>BreedName:{detail.name}</h4>
//                 </div>
//                 <div>
//                   <img src={detail.image} alt="BreedImage here"/>
//                 </div>
//                 <div>
//                   <p>Temperaments: {detail.temperament}</p>
//                   <p>Height: {detail.height}</p>
//                   <p>weight:{detail.weight}</p>
//                   <p>Life span: {detail.life_span}</p>
//                 </div>
//             </div>
//         );
// }

// function mapStateToProps (state) {
//     return { breedDetail: state.breedsDetail };
// }
  
// function mapDispatchToProps (dispatch) {
//   return { getBreedsDetail: (idBreed) => dispatch(getBreedDetail(idBreed)) }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(BreedDetail);