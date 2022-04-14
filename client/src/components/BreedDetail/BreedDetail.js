import React from 'react';
import { connect } from 'react-redux';
//import { NavLink } from 'react-router-dom';
import { getBreedDetail } from '../../redux/actions';
import '../../css/index.css';


class BreedDetail extends React.Component {
  componentDidMount() {
    const idBreed = this.props.match.params.idBreed;
    this.props.getBreedsDetail(idBreed);
  }

  render() {
    return (
      <div className="container">
          <div className="name">
            <p>{this.props.breedDetail.name}</p>
          </div>
          <div>
            <img className="image" src={this.props.breedDetail.image} alt="BImage here"/>
          </div>
          
            <div className="data1"><span>{this.props.breedDetail.temperament}</span></div>
            <div className="data2"><span>Height:  {this.props.breedDetail.height} (cm)</span></div>
            <div className="data2"><span>Weight:  {this.props.breedDetail.weight} (Kg)</span></div>
            <div className="data2"><span>Life span: {this.props.breedDetail.life_span}</span></div>
          
      </div>
    );
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