import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col border-t-2 border-gray-100 py-10">
      <div className="flex flex-col gap-2 mb-6 sm:px-20  px-4">
        <div className="flex justify-between">
          <div className="flex flex-col w-1/2">
            <h1 className="text-2xl font-bold text-black">
            AES Enkripsi dan Dekripsi Online
            </h1>
            <p className="text-justify">
              Advanced Encryption Standard (AES), juga dikenal dengan nama aslinya
              Rijndael, adalah spesifikasi untuk enkripsi data elektronik. Ini
              menggambarkan sebuah algoritma kunci-simetris yang menggunakan
              kunci yang sama untuk melakukan enkripsi dan dekripsi.
            </p>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="text-2xl font-semibold text-black text-center sm:text-start">
              Keamanan Informasi
            </h1>
            <div className="my-auto flex-col sm:flex-row flex gap-4">
              <div className="relative w-[75px] h-[75px] ">
                <Image
                  src="/image/ega.png"
                  alt="logo"
                  fill={true}
                  className="object-cover w-[75px] h-[75px] border-2 rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <p>Ega Aprianto</p>
                <p>227006018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex sm:px-20 px-4">
        <div className="flex border-t-2 border-gray-100">
          <div className="flex justify-between">
            <div className="flex flex-col gap-4 w-1/2 mt-6">
              <p>
                Website ini menyediakan alat yang mudah digunakan untuk
                melakukan enkripsi dan dekripsi teks menggunakan algoritma AES,
                sehingga memungkinkan pengguna untuk melindungi dan mengamankan
                informasi sensitif secara online.
              </p>
            </div>
            <div className="flex flex-row gap-4 font-semibold mt-4">
              <Link
                href="https://www.linkedin.com/in/egaa-ap-b937891a5/"
                title="github"
                className="text-gray-400"
              >
                Linkedin
              </Link>
              <Link
                href="https://github.com/EgaAprianto8"
                title="github"
                className="text-gray-400"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
