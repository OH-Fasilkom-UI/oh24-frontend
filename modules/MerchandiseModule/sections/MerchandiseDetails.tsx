'use client'
import { ChevronRight, ShoppingCart } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Carousels from '../components/ImageCarousel'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import CarouselsMobile from '../components/ImageCarouselMobile'

const merchData = [
  {
    id: '1',
    nama: 'T-Shirt Black',
    image: [
      '/contoh-testi.png',
      '/contoh-testi.png',
      '/contoh-testi.png',
      '/contoh-testi.png',
    ],
    price: 'Rp120.000',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur  consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur  consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur  consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur  consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur  adipiscing elit consectetur adipiscing elit consectetur adipiscing elit consectetur adipiscing elit v',
    link: '/',
  },
  {
    id: '5',
    nama: 'T-Shirt Black',
    image: [
      '/contoh-testi.png',
      '/contoh-testi.png',
      '/contoh-testi.png',
      '/contoh-testi.png',
    ],
    price: 'Rp120.000',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur  consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur  consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur  consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur  consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur  adipiscing elit consectetur adipiscing elit consectetur adipiscing elit consectetur adipiscing elit v',
    link: '/',
  },
  {
    id: '2',
    nama: 'T-Shirt Black',
    image: [
      '/contoh-testi.png',
      '/contoh-testi.png',
      '/contoh-testi.png',
      '/contoh-testi.png',
    ],
    price: 'Rp120.000',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur  consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur  consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur  consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur  consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur  adipiscing elit consectetur adipiscing elit consectetur adipiscing elit consectetur adipiscing elit v',
    link: '/',
  },
  {
    id: '3',
    nama: 'T-Shirt Black',
    image: [
      '/contoh-testi.png',
      '/contoh-testi.png',
      '/contoh-testi.png',
      '/contoh-testi.png',
    ],
    price: 'Rp120.000',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur  consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur  consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur  consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur  consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur consectetur adipiscing elit consectetur  adipiscing elit consectetur adipiscing elit consectetur adipiscing elit consectetur adipiscing elit v',
    link: '/',
  },
  {
    id: '4',
    nama: 'T-Shirt White',
    image: [
      '/contoh-testi.png',
      '/contoh-testi.png',
      '/contoh-testi.png',
      '/contoh-testi.png',
    ],
    price: 'Rp130.000',
    detail: 'A stylish white T-shirt',
    link: '/',
  },
]

interface MerchandiseDetailsProps {
  productId: string
}

const MerchandiseDetails = ({ productId }: MerchandiseDetailsProps) => {
  const product = merchData.find((item) => item.id === productId)
  const priceRef = useRef<HTMLDivElement>(null)
  const [isPriceOutOfView, setIsPriceOutOfView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPriceOutOfView(!entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (priceRef.current) {
      observer.observe(priceRef.current)
    }

    return () => {
      if (priceRef.current) {
        observer.unobserve(priceRef.current)
      }
    }
  }, [])
  return (
    <div className="w-full h-screen pt-14 sm:pt-24 pl-0 sm:pl-16 pr-0 sm:pr-8  ">
      {/* Breadcrumbs (Desktop only) */}
      <div className="hidden sm:block mb-4">
        <nav className="text-sm font-bold flex items-center gap-2">
          <a
            href="/merch"
            className="bg-[#E0E6F9] px-4 text-xs pt-1 pb-1 text-[#5F3DC4] rounded-full border-4 border-[#5F3DC4]"
          >
            Produk
          </a>
          <ChevronRight size={20} />
          <span className="bg-[#6149D4] px-5 text-xs py-[6px] text-[#C8D3F5] rounded-full border-2 border-[#7B70E4]">
            {product?.nama}
          </span>
        </nav>
      </div>

      {/* Product Content */}
      <div className="flex flex-col sm:flex-row w-full gap-12 xl:gap-28 pt-5 ">
        {/* Product Image */}
        <div className="hidden sm:block">
          <Carousels images={product?.image || []} />
        </div>
        <div className="block sm:hidden">
          {' '}
          <CarouselsMobile images={product?.image || []} />
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-[600px] xl:w-[800px] sm:h-[500px] max-sm:px-8 overflow-auto text-[#2E3881] pr-16">
          <h1 className="text-2xl  lg:text-3xl xl:text-5xl  font-bold font-tex-gyre ">
            {product?.nama}
          </h1>
          <p
            ref={priceRef}
            className="text-3xl lg:text-4xl xl:text-6xl font-bold font-tex-gyre my-4 "
          >
            {product?.price}
          </p>
          <div>
            <Link href={product?.link || '/'} target="__blank">
              <div className="hidden lg:flex bg-[#4141EA] hover:shadow-md transition-all duration-300 hover:shadow-[#00000069] mt-12 -mb-8 text-white text-md font-black gap-3 justify-center items-center py-2 px-6 w-fit rounded-lg">
                <ShoppingCart size={20} />
                <p>Beli Sekarang!</p>
              </div>
            </Link>
          </div>
          <div className="flex justify-end">
            <Image
              src={'/pandacart.png'}
              alt="panda"
              width={500}
              height={500}
              className="object-cover max-w-[100px] xl:max-w-[200px]"
            />
          </div>

          <p className="text-[#2E3881] mt-7 text-justify">{product?.detail}</p>
        </div>
      </div>

      {/* Related Items Carousel */}
      <div className="mt-14  max-lg:px-8">
        <h2 className="text-xl font-tex-gyre font-black text-[#2E3881] mb-8">
          Produk Lainnya
        </h2>
        <ul className="flex gap-6 overflow-auto pb-8">
          {merchData.map(
            (items, index) =>
              items.id != productId && (
                <Link href={`/merchandise/${items.id}`}>
                  <li
                    key={index}
                    className=" bg-[#2E3881] p-5 pb-7 h-[160px] sm:h-[280px] rounded-3xl flex flex-col w-[120px] sm:w-[200px] justify-center items-center gap-2"
                  >
                    <Image
                      src={items.image[0]}
                      alt="other items"
                      width={150}
                      height={150}
                      className="object-cover w-54 h-full sm:mb-2"
                    />
                    <p className="text-white font-black text-xs sm:text-lg">
                      {items.nama}
                    </p>
                    <p className="text-white font-black text-sm sm:text-xl">
                      {items.price}
                    </p>
                  </li>
                </Link>
              )
          )}
        </ul>
      </div>
      <div
        className={`fixed z-50 bottom-0 left-0 right-0 bg-[#343799] text-white p-4 px-4 sm:px-12 lg:px-28 flex justify-end sm:justify-between items-center shadow-lg  transform transition-all duration-500 ease-in-out opacity-100 translate-y-0 ${
          isPriceOutOfView
            ? 'sm:translate-y-0 sm:opacity-100'
            : 'sm:translate-y-40 sm:opacity-0'
        }`}
      >
        <div className="hidden gap-5 justify-center items-center sm:flex">
          <Image
            src={product?.image[0] || ''}
            alt={product?.nama || 'Product'}
            width={70}
            height={70}
            className="object-cover"
          />
          <p className="font-bold">{product?.nama}</p>
        </div>
        <div className="flex gap-12 items-center justify-center">
          <div className="hidden sm:block">
            <h2>Harga :</h2>
            <p className="text-lg">{product?.price}</p>
          </div>

          <Link href={product?.link || '/'} target="__blank">
            <Button className="bg-[#4141EA] text-white px-4 py-2">
              <ShoppingCart size={20} />
              Beli Sekarang
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MerchandiseDetails
