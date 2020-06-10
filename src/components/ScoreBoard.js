import React from "react";
class ScoreBoard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
            <p>User</p>   {/* User Labal */}
            <p>0</p>      {/* User Score */}

            <p>CPU</p>    {/* CPU Label */}
            <p>0</p>      {/* CPU Score */}
            </>
        )
    }
}

export  default ScoreBoard;