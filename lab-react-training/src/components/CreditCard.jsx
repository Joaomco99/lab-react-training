import visa from '../assets/images/visa.png';
import masterCard from '../assets/images/MasterCard.png';

const CreditCard = ({
    bank,
    bgColor,
    color,
    expirationMonth,
    expirationYear,
    number,
    owner,
    type,
}) => {

    return (
        <div style={{backgroundColor: bgColor, color: color}} className="credit-card">
            <img src={type=== 'Visa'?visa: masterCard} alt="credit card logo" />
            <div className="credit-card__number">
                {number}
            </div>
            <div>
                <span>Expires {expirationMonth}/{expirationYear}</span> <span>{bank}</span>
            </div>
            <div>
                {owner}
            </div>
        </div>
    )
}

export default CreditCard;