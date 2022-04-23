import Backhomebutton from '../Commondetails/BackhomeButton.js';
import Detailstripe from '../Commondetails/Detail-stripe.js';
import '../../css/index.css';
import footprint from '../../assets/footprintviolet.png';

export default function Error () {
return (
        <div className="Backdetail">
          <Detailstripe src={footprint} className={"stripeTop"}/>
          <div className='Error404'>
            <span className='code'>404</span>
            <h3 className='subtitle'>PAGE NOT FOUND</h3>
            <p>The URL rquested was not recognised by the system. The content is not accesible or the url is not correct.</p>
            <Backhomebutton innerText={"HOME"} adress={"/home"}/>
          </div>
          <Detailstripe src={footprint} className={"stripeBottom"}/>
        </div>
      );
}