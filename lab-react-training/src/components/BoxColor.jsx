export const BoxColor = (props) => {

    const divStyle = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        border: '1px solid black',
        margin: '10px',
        padding: '10px',
        textAlign: 'center',
    };

    return (
        <div style={divStyle}>
            <p>rgb({props.r}, {props.g}, {props.b})</p>
            {/* 
            To display hex values of the color 
            you can use the toString method with a radix of 16.
            */}
            <p>#{props.r.toString(16)}{props.g.toString(16)}{props.b.toString(16)}</p>
        </div>
    );
}
