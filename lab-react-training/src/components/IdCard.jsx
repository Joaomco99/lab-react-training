// Components can also be defined as arrow functions.
const IdCard = (props) => {
    // remember to return the html code
    return (
        // the className attribute is used in react instead of class. Remember class is a reserved word in JS.
        <div className="person-card">
            <img src={props.picture} alt="profile" />
            <div>
                <p><strong>First name:</strong> {props.firstName}</p>
                <p><strong>Last name:</strong> {props.lastName}</p>
                <p><strong>Gender:</strong> {props.gender}</p>
                <p><strong>Height:</strong> {props.height}</p>
                <p><strong>Birth:</strong> {props.birth}</p>
            </div>
        </div>
    );
};

// IMPORTANT!!! Don't forget to export your component!
export default IdCard;