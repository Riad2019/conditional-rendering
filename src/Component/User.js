import React from 'react';

const User = (props) => {
    const familiar = props.familiar;
    let greetings
    if (familiar){
        greetings = <p>Welcome,My Friend.</p>
    }
    else {
        greetings = <p>Who the hell are you</p>
    }
    
 return(   
        <div>
            <div>
               <h1>Greetings</h1>
                 {greetings}
            </div>
            <div>
                <h1>Food</h1>
                {
                    //ternary operators
                     familiar ? <p>I will buy food for you. </p> : <p>Lets eat his his whose whose </p>

                }

            </div>
            <div>
                <h1>Connection</h1>

                {
                    familiar && <p> Lets, Join My Facebook</p>
                }

            </div>
        </div>
 )
}

export default User;