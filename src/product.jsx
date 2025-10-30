import { useState } from "react"

const product = () => {
  const [aqty, setaQty] = useState(0)
  const [bqty, setbQty] = useState(0)
  const [cqty, setcQty] = useState(0)
  const [qty, setQty] = useState(0)
  
  return (
    // <div className='fixed top-55'>
    //   <h1>Product Page</h1>
    //   <p>This is the product page
    //     <br />
    //     Count: {qty}
    //   </p>
    //   <button className='border-4 border-blue-500' onClick={() => setQty(qty + 1)}>Add to Cart</button>
    // </div>
    <div>
      <section className=" py-10 mx-5">
    <div className="md:grid-cols-4 grid-cols-1 grid gap-3 container text-center items-center justify-center mx-auto">
      <div>
        <img src="src/assets/1115.png" className="h-100 w-80 my-5" alt="Holiday Party Dressing" />
        <p className="text-left text-lg mt-5">Zahara Dress <br /> $19.99<br/>
                <button className='mr-2 border-2 border-blue-500' onClick={() => setaQty(aqty - 1)}>-</button>{aqty}<button className='ml-2 border-2 border-blue-500' onClick={() => setaQty(aqty + 1)}>+</button>
        </p>
      </div>
            <div>
        <img src="src/assets/1116.png"
        className="h-100 w-80 my-5"/>
                <p className="text-left text-lg mt-5">Adidas Ultraboost <br /> $129.99<br/>
                <button className='mr-2 border-2 border-blue-500' onClick={() => setcQty(cqty - 1)}>-</button>{cqty}<button className='ml-2 border-2 border-blue-500' onClick={() => setcQty(cqty + 1)}>+</button>
                </p>
      </div>
              <div>

        <img src="src/assets/1117.png"
        className="h-100 w-80 my-5"/>
                <p className="text-left text-lg mt-5">Chole Two piece <br /> $149.99<br/>
                <button className='mr-2 border-2 border-blue-500' onClick={() => setbQty(bqty - 1)}>-</button>{bqty}<button className='ml-2 border-2 border-blue-500' onClick={() => setbQty(bqty + 1)}>+</button>
                </p>
      </div>

              <div>

        <img src="src/assets/1118.png"
        className="h-100 w-80 my-5"/>
                <p className="text-left text-lg mt-5">Nike Air Force 1 <br /> $129.99 <br/>
                <button className='mr-2 border-2 border-blue-500' onClick={() => setQty(qty - 1)}>-</button>{qty}<button className='ml-2 border-2 border-blue-500' onClick={() => setQty(qty + 1)}>+</button>
                </p>
      </div>
    </div>
    <div className="flex justify-center items-center m-8"><button className="border px-6 py-3 text-2xl">Show More</button></div>
</section>
    </div>
  )
}

export default product
