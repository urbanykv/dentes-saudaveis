import React from "react";
import Header from "../Header/script";
import Footer from "../Footer/script";

function EstruturaPag(props){
    return(
        <section>
            <Header></Header>
                {props.children}
            <Footer></Footer>
        </section>
    )
}

export default EstruturaPag