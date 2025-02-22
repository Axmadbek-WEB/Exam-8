import './mahsulot.css'
import Card from './card/Card'

function mahsulot() {
    return (
        <div className='container'>
            <div className="mahsulot-1 ">
                <h1>Products</h1>
                <div className="box">
                    <button class="button">Move All To Bag</button>
                    <div className="space">
                        {/* <span style="--i: 31" class="star"></span>
                        <span style="--i: 12" class="star"></span>
                        <span style="--i: 57" class="star"></span>
                        <span style="--i: 93" class="star"></span>
                        <span style="--i: 23" class="star"></span>
                        <span style="--i: 70" class="star"></span>
                        <span style="--i: 6" class="star"></span> */}
                    </div>
                </div>
            </div>
            {/* <div className="carts">
                <div className="cart">
                    <img src="https://www.naturesrecipe.com/wp-content/uploads/2024/04/Natures-Recipe-Chicken-Sweet-Potato-Pumpkin-Grain-Free-Small-Breed-Dry-Dog-Food-12LB-1024x1024.png" alt=""  />
                    <button class="button-with-icon">
                        <svg
                            class="icon"
                            id="Play"
                            viewBox="0 0 48 48"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                class="color000000 svgShape"
                                fill="#ffffff"
                                d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z"
                            ></path>
                        </svg>
                        <span class="text">Sell</span>
                    </button>
                    <h2>Gucci duffle bag</h2>
                    <div className="ff">
                    <p>$960</p>
                    <p>$1160</p>
                    </div>
                </div>
            </div> */}


                <Card/>
        </div>

    )


}

export default mahsulot;