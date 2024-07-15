import React from 'react'
import Navbar from './Navbar'
const Homepage = () => {
  return (
    <div>
      <div className="container">
      <Navbar />
        <div className="row g-3">
          <h1><center>GT HOSPITAL</center></h1>
          <h2><left></left></h2>
          <div className="col-12 col-sm-12 col-lg-12 col-md-12 col-xl-12 col-xxl-12">
            <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://wallpaperaccess.com/full/422212.jpg" class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item">
                  <img src="https://wallpapercave.com/wp/wp8003033.jpg" class="d-block w-100" alt="..."></img>
                </div>
                <div class="carousel-item">
                  <img src="https://wallpaperaccess.com/full/1282862.jpg" class="d-block w-100" alt="..."></img>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>

            </div>
            <br></br>
            <h2>About Us</h2>
            <br></br>
            <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam pariatur, culpa eos officia eum totam quam! Similique, libero natus exercitationem hic commodi, fuga obcaecati nihil illum voluptate, ut omnis tempore.consectetur adipisicing elit. Earum amet nobis minima expedita unde? Nihil facilis saepe, eum rem, eligendi reiciendis sunt libero assumenda facere quidem architecto nisi quam molestiae?</p>
            <br></br>
            <h2>Our Service</h2>
            <div className="row g-3">
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <div class="card">
                  <img src="https://th.bing.com/th?id=OIP.AatQKAREiCKe5DpbzZMOXwHaE-&w=304&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">X Ray</h5>
                    <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere eaque debitis commodi nobis quo ratione rerum amet aliquid voluptates eius autem nostrum distinctio, veritatis dolore necessitatibus sunt ex tenetur officiis!</p>
                    <a href="#" class="btn btn-primary">Know More</a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <div class="card" >
                  <img src="https://th.bing.com/th/id/OIP.QPhymEdbwApKuKXI0lwMJAHaE8?rs=1&pid=ImgDetMain" class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">Dental Clinic</h5>
                    <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum ratione, nobis dolores natus expedita quod aliquid nihil reprehenderit, illum tempora, modi praesentium? Vitae ut quia perferendis, est cumque obcaecati repellat!</p>
                    <a href="#" class="btn btn-primary">Know More</a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <div class="card" >
                  <img src="https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/142/2019/01/16165341/Brain-Scan.jpg" class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">Mri Scan</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi perspiciatis distinctio incidunt suscipit vel aperiam exercitationem dolor fugiat accusantium nihil aliquam inventore, omnis voluptate culpa magni, eligendi, odio deleniti ad?</p>
                    <a href="#" class="btn btn-primary">Know More</a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <div class="card" >
                  <img src="https://th.bing.com/th/id/OIP.2h4bVLkrAah3VFGgWd3QdQHaE7?rs=1&pid=ImgDetMain" class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">Emergency</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit maxime doloribus iste accusantium, eligendi perferendis incidunt beatae esse! Consequuntur aspernatur corporis, autem voluptatibus molestias quaerat ipsam nam perspiciatis distinctio vitae?</p>
                    <a href="#" class="btn btn-primary">Know More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage