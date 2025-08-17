"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import ProductCard from "../../ProductCard"
import { useProducts } from "../../hooks/userProducts"

export default function Essentials() {
  const [isOpen, setIsOpen] = useState(false)
   const { products: dairyProducts, loading: dairyLoading, error: dairyError } = useProducts("dairy")
  const { products: packagedProducts, loading: packagedLoading, error: packagedError } = useProducts("packaged")
  const { products: booksProducts, loading: booksLoading, error: booksError } = useProducts("books")

    const { products: breakfastProducts, loading: breakfastLoading, error: breakfastError } = useProducts("breakfast")

      const { products: cleanProducts, loading: cleanLoading, error: cleanError } = useProducts("clean")

        const { products: cookiesProducts, loading: cookiesLoading, error: cookiesError } = useProducts("soap")

          const { products: frozenProducts, loading: frozenLoading, error: frozenError } = useProducts("soap")

            const { products: fruitsProducts, loading: fruitsLoading, error: fruitsError } = useProducts("soap")
          const { products: teaProducts, loading: teaLoading, error: teaError } = useProducts("tea")
          const { products: sweetsProducts, loading: sweetsLoading, error: sweetsError } = useProducts("sweets")
          const { products: soapProducts, loading: soapLoading, error: soapError } = useProducts("soap")
          const { products: kitchenProducts, loading: kitchenLoading, error: kitchenError } = useProducts("kitchen")
  const { products: icecreamProducts, loading: icecreamLoading, error: icecreamError } = useProducts("icecream")
  const { products: juicesProducts, loading: juicesLoading, error: juicesError } = useProducts("clean")



  // ✅ final combined products (without "Essential")
  const allProducts = [
    ...dairyProducts,
    ...packagedProducts,
    ...booksProducts,
    ...soapProducts, 
    ...breakfastProducts,
    ...cleanProducts,
    ...cookiesProducts,
    ...frozenProducts,
    ...fruitsProducts,
    ...teaProducts,
    ...sweetsProducts,
    ...kitchenProducts,
    ...icecreamProducts,
    ...juicesProducts
    
  ]

  // ✅ loading / error handling
  const loading = dairyLoading || packagedLoading || booksLoading || soapLoading || breakfastLoading || cleanLoading || cookiesLoading || frozenLoading || fruitsLoading || teaLoading || sweetsLoading || kitchenLoading || icecreamLoading || juicesLoading
  const error = dairyError || packagedError || booksError || soapError || breakfastError || cleanError || cookiesError || frozenError || fruitsError || teaError || sweetsError || kitchenError || icecreamError || juicesError





  return (
    <div className="w-full shadow relative z-50">
      <Navbar title="Essentials" />
      {/* Categories - Manual, without map, using <div> */}

      <div className="overflow-x-auto px-4 py-4 rounded-xl mt-4">
        <div className="flex justify-start md:justify-center gap-6 w-max mx-auto text-black text-sm">
          <Link to="/essentials/fruits" className="flex flex-col items-center min-w-[80px] cursor-pointer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Fm4oCiKRqGJwt8ezhZzuyjKQTWnlACZWBo3JhtO3Z-_6BqenhxKDkFpTI1rk1JKhL0g&usqp=CAU"
              alt=""
              className="w-20 h-20  object-contain rounded-full border-2 border-black"
            />
            <span className="mt-2 text-center whitespace-nowrap">
              Fruits &<br></br> Vegetable's
            </span>
          </Link>

          <Link to="/essentials/sweets" className="flex flex-col items-center min-w-[80px] cursor-pointer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOk2CB1m_BmkY3b0hbO-8MKtW0KZVSNzSZQ&s"
              alt=""
              className="w-20 h-20 object-contain rounded-full border-2 border-black"
            />
            <span className="mt-2 text-center whitespace-nowrap">
              Sweets <br></br>Cravings
            </span>
          </Link>

          <Link to="/essentials/frozen" className="flex flex-col items-center min-w-[80px] cursor-pointer">
            <img
              src="https://cdnimg.carepac.com/wp-content/uploads/2023/02/Frozen-Food-Pouch-Bags-1.jpg"
              alt=""
              className="w-20 h-20 object-contain rounded-full border-2 border-black"
            />
            <span className="mt-2 text-center whitespace-nowrap">
              Frozen <br></br>Food
            </span>
          </Link>

          <Link to="/essentials/icecream" className="flex flex-col items-center min-w-[80px] cursor-pointer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ7HGfcnETOImwNVM_B2eScBFXmf6iBlrwRCuX6PGEquV4PTMtv_VjeUjjkDSWiwQ_voE&usqp=CAU"
              alt=""
              className="w-20 h-20 object-contain rounded-full border-2 border-black"
            />
            <span className="mt-2 text-center whitespace-nowrap">
              Ice-Creams <br></br>& More
            </span>
          </Link>

          <Link to="/essentials/packed" className="flex flex-col items-center min-w-[80px] cursor-pointer">
            <img
              src="https://api.thesecretariat.in/the-secretariat-api/public//file/download-content-attachment?fileId=fc53ffd1328d4630be2b9db7c541f646"
              alt=""
              className="w-20 h-20 object-contain rounded-full border-2 border-black"
            />
            <span className="mt-2 text-center whitespace-nowrap">
              Packaged <br></br>Food
            </span>
          </Link>

          <Link to="/essentials/dairy" className="flex flex-col items-center min-w-[80px] cursor-pointer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4GZgpDxCoquh9qc9JiaGe52qtODBjiYcG9GOQRBtO4_zAgCsrblIYp7DhWJrSVrbhhNE&usqp=CAU"
              alt=""
              className="w-20 h-20 object-contain rounded-full border-2 border-black"
            />
            <span className="mt-2 text-center whitespace-nowrap">
              Dairy , Bread <br></br>& Eggs
            </span>
          </Link>

          <Link to="/essentials/juices" className="flex flex-col items-center min-w-[80px] cursor-pointer">
            <img
              src="https://i1.zopping.com/zopsmart-media/24019/images/640/20240711/3b44379f-01eb-454a-b515-a9296eb18f2c-imagefile.webp"
              alt=""
              className="w-20 h-20 object-contain rounded-full border-2 border-black"
            />
            <span className="mt-2 text-center whitespace-nowrap">
              Cold Drinks <br></br>& Juices
            </span>
          </Link>

          <Link to="/essentials/breakfast" className="flex flex-col items-center min-w-[80px] cursor-pointer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS69qmA2G_2zdFCW7Dj1gWNMKyPBHfiCo_uWjse3RGaWPnyStrysHfgyGeyUlNjsEpDEmU&usqp=CAU"
              alt=""
              className="w-20 h-20 object-contain rounded-full border-2 border-black"
            />
            <span className="mt-2 text-center whitespace-nowrap">
              BreakFast <br></br>& Sauces
            </span>
          </Link>

          <Link to="/essentials/tea" className="flex flex-col items-center min-w-[80px] cursor-pointer">
            <img
              src="https://gpcdn.ams3.cdn.digitaloceanspaces.com/deals/bigbazaar%20(1).jpg"
              alt=""
              className="w-20 h-20 object-contain rounded-full border-2 border-black"
            />
            <span className="mt-2 text-center whitespace-nowrap">
              Tea,Coffee<br></br>& More
            </span>
          </Link>

          <Link to="/essentials/cookies" className="flex flex-col items-center min-w-[80px] cursor-pointer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMmdJp1zw9grHsRQIGIEP4piJhBf-hljsjTWlw6KoQGl0hFGp_KobdmJGHhhpKtCy4XQI&usqp=CAU"
              alt=""
              className="w-20 h-20 object-contain rounded-full border-2 border-black"
            />
            <span className="mt-2 text-center whitespace-nowrap">
              Biscuits<br></br>& Cookies
            </span>
          </Link>

          <Link to="/essentials/soap" className="flex flex-col items-center min-w-[80px] cursor-pointer">
            <img
              src="https://storage.googleapis.com/dawaadost.appspot.com/main_images/81hmur09-TL._SL1500__e66826ae-894f-4262-80d0-004d8bdd87d2_resize.webp"
              alt=""
              className="w-20 h-20 object-contain rounded-full border-2 border-black"
            />
            <span className="mt-2 text-center whitespace-nowrap">
              Bath<br></br>& Body{" "}
            </span>
          </Link>

          <Link to="/essentials/clean" className="flex flex-col items-center min-w-[80px] cursor-pointer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIt0GCKe0SDttacNoB6FZthyxn8xAWBiGkQQ&s"
              alt=""
              className="w-20 h-20 object-contain rounded-full border-2 border-black"
            />
            <span className="mt-2 text-center whitespace-nowrap">
              Cleaning <br></br>Essentials{" "}
            </span>
          </Link>

          <Link to="/essentials/books" className="flex flex-col items-center min-w-[80px] cursor-pointer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQzQlkA3hm9p5u44KPKXrZAtLwGwaIEG2XINqr1Xes0pD8vrCPyZjHJBp3LDXpQ55GwtA&usqp=CAU"
              alt=""
              className="w-20 h-20 object-contain rounded-full border-2 border-black"
            />
            <span className="mt-2 text-center whitespace-nowrap">
              Stationery<br></br>& Books{" "}
            </span>
          </Link>

          <Link to="/essentials/kitchen" className="flex flex-col items-center min-w-[80px] cursor-pointer">
            <img
              src="https://imgmediagumlet.lbb.in/media/2023/08/64e30ec0dcc87514d40b0292_1692602048310.jpg"
              alt=""
              className="w-20 h-20 object-contain rounded-full border-2 border-black"
            />
            <span className="mt-2 text-center whitespace-nowrap">
              Kitchen <br></br>& Electronics{" "}
            </span>
          </Link>
        </div>
      </div>

      {/* Offer Banner */}
      <div className="px-6 py-4">
        <div className="bg-teal-100 rounded-xl flex items-center justify-between p-6">
          <div>
            <h2 className="text-2xl font-bold text-teal-900">Paan Corner</h2>
            <p className="text-sm text-gray-700">Smoking Accessories, Mints & More</p>
            <button className="mt-2 px-4 py-2 bg-white rounded-full text-teal-700 font-semibold shadow">
              Order Now
            </button>
          </div>
          <img src="" alt="Paan Corner" className="w-32 h-32 object-contain" />
        </div>
      </div>

<div className="px-6 py-4">
        <h2 className="text-xl font-bold mb-4">All Products</h2>
        {loading ? (
          <p>Loading products...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {allProducts.map((product) => (
              <ProductCard key={product.id || product._id} product={product} />
            ))}
          </div>
        )}
      </div>



    </div>
  )
}
