import React from 'react';
import { connect } from 'react-redux';
import { getBreedDetail } from '../../redux/actions';
import Detailstripe from '../Commondetails/Detail-stripe.js';
import Backhomebutton from '../Commondetails/BackhomeButton.js';
import Missingtext from '../Commondetails/MissingText.js';
import Breedname from '../Commondetails/BreedName.js';
import Breedimage from '../Commondetails/BreedImage.js';
import Breedtemper from '../Commondetails/BreedTemper.js';
import Breedoutput from '../Commondetails/BreedOutput.js';
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
    if (Object.entries(breedDetail).length === 0) {

      return (
        <div className="Backdetail">
          <Detailstripe src={footprint} className={"stripeTop"}/>
          <div className='Main-Form-Container'>
            <Missingtext missingtext={"There is not such breed you are looking for."}/>
            <Backhomebutton innerText={"BACK HOME"} adress={"/home"}/>
          </div>
          <Detailstripe src={footprint} className={"stripeBottom"}/>
        </div>
      );

    } else {

      return (
        <div className="Backdetail">
          <Detailstripe src={footprint} className={"stripeTop"}/>
          <div className='Main-Form-Container'>
            <div className="Existinginfo">
                <Breedname breedname={breedDetail.name} className={'name'}/>
                <Breedimage breedimage={breedDetail.image} missing={missing} className={'image'}/>
                <Breedtemper breedtemperament={breedDetail.temperament} className={['data1','T','D']} innerText={'Temperament'}/>
                <Breedoutput breedoutinnerText={"Height:"} breedoutcharacteristic={breedDetail.height} label={"(cm)"} className={['data2','L','R']}/>
                <Breedoutput breedoutinnerText={"Weight:"} breedoutcharacteristic={breedDetail.weight} label={"(Kg)"} className={['data2','L','R']}/>
                <Breedoutput breedoutinnerText={"Estimated life span:"} breedoutcharacteristic={breedDetail.life_span} label={""} className={['data2','L','R']}/>
            </div>
            <Backhomebutton innerText={"BACK HOME"} adress={"/home"}/>
          </div>
          <Detailstripe src={footprint} className={"stripeBottom"}/>
        </div>
      );
    }
  }
}

function mapStateToProps (state) { return { breedDetail: state.breedsDetail }; }
function mapDispatchToProps (dispatch) { return { getBreedsDetail: (idBreed) => dispatch(getBreedDetail(idBreed)) }; }
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