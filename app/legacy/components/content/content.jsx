import Image from "next/image";
import React from "react";

function Content() {
  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <p className="text-center text-black m-20 text-xl md:text-4xl">
          Immerse yourself in the captivating tale of our family&rsquo;s legacy,
          spanning back 800 years to the vibrant lands of Turkey. Step into a
          world where rugs transcend mere floor coverings and become exquisite
          masterpieces that tell stories of tradition, craftsmanship, and
          cultural heritage.
          <br /> With every thread intricately woven and every dye is
          meticulously chosen, we breathe life into the ancient art of
          rug-making. Passed down through generations, our ancestral knowledge
          and expertise are ingrained in each stitch, ensuring that every rug
          carries the essence of our Turkish roots.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-start items-center">
        <Image
          className="m-10"
          alt="img"
          width={600}
          height={300}
          src="/color-threds.jpg"
        />
        <p className="  text-justify text- m-5 text-xl md:text-3xl md:m-10">
          At the heart of our legacy lies the alchemy of carpet dyes. Harnessing
          the power of nature&rsquo;s pigments, we create a symphony of colors
          that dance harmoniously across our rugs. From earthy hues to vibrant
          tones, each shade tells a tale of heritage, connecting you to the
          ancient traditions of our ancestors.
          <br />
          <br />
          Our rugs are more than mere decor; they are gateways to a world
          steeped in tradition. Adorned with traditional designs that have stood
          the test of time, each pattern carries a story, a symbol, a glimpse
          into the tapestry of our cultural heritage. Allow these designs to
          grace your home, inviting the warmth and spirit of heritage into your
          everyday life.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-start items-center">
        <p className=" text-justify text- m-5 text-xl md:text-3xl md:m-10">
          As you explore our collection, you embark on a journey through time,
          where the beauty of the past seamlessly intertwines with the present.
          Our rugs serve as whispers of history, bringing a touch of elegance
          and sophistication to any space they grace.
          <br />
          <br />
          We invite you to be a part of our family&apos;s heritage, to
          experience the legacy that has been lovingly crafted for centuries.
          From the loom to your home, discover the timeless artistry that has
          captivated hearts worldwide. Welcome to a world where rugs are more
          than just rugs; they are heirlooms of culture, beauty, and the
          enduring spirit of our ancestors.
        </p>

        <Image
          className="m-10"
          alt="img"
          width={600}
          height={300}
          src="/slider/slider(6).jpg"
        />
      </div>
    </>
  );
}

export default Content;
