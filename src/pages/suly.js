import React from "react";
import "./suly.css";
import paint from "../fotos/paint.jpg"
import paint2 from "../fotos/paint2.jpg"
import paint3 from "../fotos/paint3.jpg"
import paint4 from "../fotos/paint4.jpg"
import paint5 from "../fotos/paint5.jpg"
import paint6 from "../fotos/paint6.jpg"

function Suly() {

    return (
        <div>
            <div>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Suly's Paintings</h1>
                    </div>
                </div>
            </div>
            <div class="one">
                <div>
                    <div class="container">
                        <div class="card">
                            <img src={paint} class="card-img-top" alt="painting1" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={paint2} class="card-img-top" alt="painting2" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={paint3} class="card-img-top" alt="painting3" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={paint4} class="card-img-top" alt="painting4" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={paint5} class="card-img-top" alt="painting5" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={paint6} class="card-img-top" alt="painting6" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Suly;