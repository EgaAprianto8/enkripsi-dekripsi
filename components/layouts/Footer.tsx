import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col border-t-2 border-gray-100 py-10">
      <div className="flex flex-col gap-2 mb-6 px-20">
        <div className="flex justify-between">
          <div className="flex flex-col w-1/2">
            <h1 className="text-2xl font-bold text-black">
              RC4 / ARC4 Enkripsi dan Dekripsi Online
            </h1>
            <p className="text-justify">
              RC4 (atau juga dikenal sebagai ARC4) merupakan sebuah algoritma
              enkripsi aliran yang terkenal karena kesederhanaan dan
              kecepatannya. Algoritma ini digunakan dalam berbagai protokol
              keamanan seperti SSL (Secure Sockets Layer) dan WEP (Wired
              Equivalent Privacy).
            </p>
          </div>
          <div className="flex flex-col ">
            <h1 className="text-2xl font-semibold text-black">
              Keamanan Informasi
            </h1>
            <div className="my-auto flex-row flex gap-4">
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
      <div className="flex px-20">
      <div className="flex border-t-2 border-gray-100">
        <div className="flex justify-between">
        <div className="flex flex-col gap-4 w-1/2 mt-6">
          <p>
            Website ini menyediakan alat yang mudah digunakan untuk melakukan
            enkripsi dan dekripsi teks menggunakan algoritma RC4, sehingga
            memungkinkan pengguna untuk melindungi dan mengamankan informasi
            sensitif secara online.
          </p>
        </div>
        <div className="flex flex-row gap-4 font-semibold">
            <button title="github" className="text-gray-400">
              Linkedin
            </button>
            <button title="github" className="text-gray-400">
              GitHub
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
