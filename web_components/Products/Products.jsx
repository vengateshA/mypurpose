import React, { useState } from 'react';
import Product_data from './Product_data';
import zeweld from '../images/zeweld.jpeg'

import './Products.css'
function Products() {

    const [product, setproduct] = useState(Product_data)

    const filterResult = (fil_res) => {
        const result = Product_data.filter((curdata) => {
            return curdata.common_name === fil_res
        })

        setproduct(result)
    }
    return (
        <>
            <div>
                {
                    product.map((pro)=>{
                        return(
                            <div>

                            <div className='container  mt-5'>
                            <div className='row'>
                                <div className='col  '>
                                    <img src="https://cdn.pixabay.com/photo/2017/12/14/07/45/welder-3018425_640.jpg"
                                     className='img-fluid  mx-auto d-block img1' alt="" />
                                </div>
        
                                <div className='col-md-12 card mt-5 py-2'>
        
                                    <h1 className='text-center pt-2 fs-3 fw-bold '>{pro.common_name}</h1>
                                    <div className='para fs-5 px-3'> <small>{pro.main_desc}</small> </div>
        
                                </div>
        
                            </div>
        
        
                        </div>

<div className='container pt-5'>
<div className='row'>
    <div className='col-md-4'>
        <div class="card">
            <img class="card-img-top" src="https://cdn.pixabay.com/photo/2019/01/29/22/01/welding-3963341_640.jpg" 
            alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">{pro.basic}</h5>
                <p class="card-text">{pro.basic_desc}</p>

            </div>
        </div>


    </div>

    <div className='col-md-4'>
        <div class="card">
            <img class="card-img-top" src="https://cdn.pixabay.com/photo/2019/01/29/22/01/welding-3963341_640.jpg" 
            alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">{pro.prime}</h5>
                <p class="card-text">{pro.prime_desc}</p>

            </div>
        </div>




</div>


    <div className='col-md-4'>
        <div class="card">
            <img class="card-img-top" src="https://cdn.pixabay.com/photo/2019/01/29/22/01/welding-3963341_640.jpg" 
            alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">{pro.Pro}</h5>
                <p class="card-text">{pro.pro_desc}</p>

            </div>
        </div>


    </div>



    </div>

</div>
</div>
                        )
                    })
                }
     









            </div>


            {/* <div className='container  d-flex justify-content-center text-center'>
                <div className='row-md-4 mt-5 mx-2'>
                    <div className='col-md-12'>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Smart Welding Helmet
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#" onClick={() => filterResult('smart welding helmets')}>Basic Helmet</a>
                                <a class="dropdown-item" href="#">Preimium Helmet</a>
                                <a class="dropdown-item" href="#">Prime Helmet</a>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-3 '>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Smart Welding Helmet
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#" onClick={() => filterResult('Welding Iot')}>Basic Welding</a>
                                <a class="dropdown-item" href="#">Preimium Welding</a>
                                <a class="dropdown-item" href="#">Prime Welding</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Smart Weighing Scale
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#" onClick={() => filterResult('Weighing scale')}>Basic Weighing scale</a>
                                <a class="dropdown-item" href="#">Preimium Weighing scale </a>
                                <a class="dropdown-item" href="#">Prime Weighing scale</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>

                        <div class="dropdown">
                            <button class="btn  btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Smart Welding Robot
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#" onClick={() => filterResult('Welding Robot')}>Basic Welding Robot</a>
                                <a class="dropdown-item" href="#">Premium welding Robot </a>
                                <a class="dropdown-item" href="#">Prime Welding Robot</a>
                            </div>
                        </div>
                    </div>


                    <div className='row'>
                    <div className='col-md-4'>
        
                            {
                                product.map((pro) => {
                                    return (
                                        <div className='col-12 mb-4'>
                                            <div class="card" >

                                                <img class="card-img-top" src={pro.pro_img}
                                                    height={400} width={300}
                                                    alt="Card image cap" />
                                                <div class="card-body">
                                                    <h5 class="card-title">{pro.common_name} </h5>
                                                    <h5 class="card-title">{pro.pro_name} </h5>
                                                    <p class="card-text">{pro.pro_desc}</p>
                                                    <div className='des'>Product Description</div>
                                                    <div>  the one</div>
                                                    <div>  the one</div>
                                                    <div>  the one</div>
                                                    <div>  the one</div>
                                                    <div>  the one</div>
                                                    <div>  the one</div>
                                                    <div>

                                                    </div>

                                  



                                                </div>

                                            </div>



                                        </div>
                                    )
                                })
                            }

                        </div>


                    </div>
                </div>


            </div> */}
        </>
    );
}

export default Products;