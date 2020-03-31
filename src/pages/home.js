import React from "react";
import "./home.css";
import Food from "../fotos/food.jpg"
import Food2 from "../fotos/food2.jpg"
import Food3 from "../fotos/food3.jpg"
import Food4 from "../fotos/food4.jpg"
import Food5 from "../fotos/food5.jpg"
import Uncooked from "../fotos/uncooked.jpg"
import Uncooked2 from "../fotos/uncooked2.jpg"
import Ready from "../fotos/ready.jpg"
import Ready2 from "../fotos/ready2.jpg"
import Ready3 from "../fotos/ready3.jpg"
import Luisa from "../fotos/luisa.jpg"



function Home() {

  return (
    <div>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Chalupitas Luisa</h1>
        </div>
      </div>
      <div className="background">
        <div class="container">
          <div class="row">
            <div class="col">
              <img src={Luisa} class="pictures" alt="..." />
            </div>
            <div class="col">
              2 of 2
          </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col">
              These images show the chalupitas how they are made.
          </div>
            <div class="col">
              <div class="one">
                <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-interval="3000">
                      <img src={Uncooked} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-interval="3000">
                      <img src={Uncooked2} class="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="one">
                <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-interval="3000">
                      <img src={Ready} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-interval="3000">
                      <img src={Ready2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-interval="3000">
                      <img src={Ready3} class="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col">
              These are how they are sold.
          </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col">
              These chalupitas are aready prepared and ready to eat, these are examples of what to add on top of them.
          </div>
            <div class="col">
              <div class="one">
                <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-interval="3000">
                      <img src={Food} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-interval="3000">
                      <img src={Food2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-interval="3000">
                      <img src={Food3} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-interval="3000">
                      <img src={Food4} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-interval="3000">
                      <img src={Food5} class="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Home;
