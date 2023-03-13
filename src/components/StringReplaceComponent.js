import React from 'react'
 
class StringReplaceComponent extends React.Component{
 
    render(){
        var myStr = "Hi Developers!";
        var newStr = myStr.replace("Hi", "Welcome");
 
        return(
            <div>
                <h1>String Replace Example</h1>
                <p><strong>Old String : </strong>{myStr}</p>
                <p><strong>New String : </strong>{newStr}</p>
            </div>
        );
    }
}
 
export default StringReplaceComponent;