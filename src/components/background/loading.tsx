import * as React from "react";
import "../styles/loading.css";
// import "../styles/style.css";

const Loading = () => {
    return (
        <div className="gooey">
            <span className="dot" />
            <div className="dots">
                <span />
                <span />
                <span />
            </div>
        </div>
    );
};

export default Loading;
