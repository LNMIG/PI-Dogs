
export default function Breedoutput({breedoutinnerText, breedoutcharacteristic, label, className}) {
    return (
      <div style={{width:"100%"}}>
      {breedoutcharacteristic
       ? breedoutcharacteristic === 'NaN' || breedoutcharacteristic.split(' ')[0] === 'NaN' || breedoutcharacteristic.split(' ')[3] === 'NaN'
       ? <div className={className[0]}>
           <span className={className[1]}>{breedoutinnerText}</span>
           <span className={className[2]}>Not available</span>
         </div>
       : <div className={className[0]}>
           <span className={className[1]}>{breedoutinnerText}</span>
           <span className={className[2]}>{breedoutcharacteristic} {label}</span>
         </div>
       : <div className={className[0]}>
           <span className={className[1]}>{breedoutinnerText}</span>
           <span className={className[2]}>Not available</span>
         </div>
      }
      </div>
    )
};