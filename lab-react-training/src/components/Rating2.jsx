export const Rating2 = ({children})=>{
    // we need to convert the children to a number to print as many stars as the rating
    const rating = Number(children);
    // we need to round the rating
    const roundedRating = Math.round(rating);

       // Empty array to push stars into
       const stars = [];
       // It's going to push only 5 stars
       for (let i = 0; i < 5; i++) {
           // If the index is smaller than the rating, it's going to push a full star
           if (i < roundedRating) {
               stars.push(<i key={i} >★</i>);
           // If the index is bigger than the rating, it's going to push an empty star
           } else {
               stars.push(<i key={i} >☆</i>);
           }
       }
    return(
        <div>
            {stars}
        </div>
    )
}