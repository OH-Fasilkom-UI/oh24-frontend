'use client'

import Image from 'next/image'
import Marquee from 'react-fast-marquee'

const Partners = () => {
  return (
    <section className="mt-16 md:mt-32">
      <h1 className="text-[#2E3881] text-2xl md:text-5xl text-center mb-5 md:mb-10">
        Our Partners
      </h1>
      <div className="w-full bg-BlueRegion/Cornflower/100 py-6 my-6 md:my-16">
        <Marquee>
          <Image
            src={'/Partners/kok-bisa.png'}
            alt="kok bisa"
            width={50}
            height={50}
            className="mx-6 md:mx-10"
          />
          <Image
            src={'/Partners/gojek.png'}
            alt="gojek"
            width={96}
            height={96}
            className="mx-6 md:mx-10"
          />
          <Image
            src={'/Partners/amazon-aws.png'}
            alt="amazon aws"
            width={96}
            height={96}
            className="mx-6 md:mx-10"
          />
          <Image
            src={'/Partners/mastercard.png'}
            alt="masstercard"
            width={96}
            height={96}
            className="mx-6 md:mx-10"
          />
          <Image
            src={'/Partners/google-cloud.png'}
            alt="google cloud"
            width={96}
            height={96}
            className="mx-6 md:mx-10"
          />
          <Image
            src={'/Partners/bank-mandiri.png'}
            alt="bank mandiri"
            width={96}
            height={96}
            className="mx-6 md:mx-10"
          />
          <Image
            src={'/Partners/bank-bni.png'}
            alt="bank bni"
            width={96}
            height={96}
            className="mx-6 md:mx-10"
          />
          <Image
            src={'/Partners/tokopedia.png'}
            alt="tokopedia"
            width={96}
            height={96}
            className="mx-6 md:mx-10"
          />
          <Image
            src={'/Partners/code-combat.png'}
            alt="code combat"
            width={96}
            height={96}
            className="mx-6 md:mx-10"
          />
        </Marquee>
        <Marquee direction="right" className="pt-5 md:pt-12">
          <Image
            src={'/Partners/kok-bisa.png'}
            alt="kok bisa"
            width={48}
            height={48}
            className="mx-6 md:mx-10"
          />
          <Image
            src={'/Partners/gojek.png'}
            alt="gojek"
            width={96}
            height={96}
            className="mx-6 md:mx-10"
          />
          <Image
            src={'/Partners/amazon-aws.png'}
            alt="amazon aws"
            width={96}
            height={96}
            className="mx-6 md:mx-10"
          />
          <Image
            src={'/Partners/mastercard.png'}
            alt="masstercard"
            width={96}
            height={96}
            className="mx-6 md:mx-10"
          />
          <Image
            src={'/Partners/google-cloud.png'}
            alt="google cloud"
            width={96}
            height={96}
            className="mx-6 md:mx-10"
          />
          <Image
            src={'/Partners/bank-mandiri.png'}
            alt="bank mandiri"
            width={96}
            height={96}
            className="mx-6 md:mx-10"
          />
          <Image
            src={'/Partners/bank-bni.png'}
            alt="bank bni"
            width={96}
            height={96}
            className="mx-6 md:mx-10"
          />
          <Image
            src={'/Partners/tokopedia.png'}
            alt="tokopedia"
            width={96}
            height={96}
            className="mx-6 md:mx-10"
          />
          <Image
            src={'/Partners/code-combat.png'}
            alt="code combat"
            width={96}
            height={96}
            className="mx-6 md:mx-10"
          />
        </Marquee>
      </div>
    </section>
  )
}

export default Partners
