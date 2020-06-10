import React from "react";
class ScoreBoard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
            <p>User</p>   
            <p>0</p>      

            <p>CPU</p>   
            <p>0</p>      
            </>
        )
    }
}

export default ScoreBoard;