"use client";

import React from "react";
import Link from "next/link";
import { MdContactSupport } from "react-icons/md";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

const Navbar2 = () => {
  return (
    <>
      <div className="flex flex-col bg-[#ffff] w-full h-max-[200px] border-b px-2">
        <div className="sm:gap-4 gap-4 px-2 flex flex-row  sm:px-10 py-4">
          <Link href="/" className="my-auto flex-row flex gap-4">
            <div className="relative  w-[50px] h-[50px]">
              <Image
                src="/image/rc4.png"
                alt="logo"
                fill={true}
                className="object-cover w-[50px] h-[50px]"
              />
            </div>
            <div className="lg:flex flex-col hidden">
              <h1 className="font-black text-xl text-[#5488c4]">
                Enkripsi - Dekripsi
              </h1>
              <h3 className="">Keamanan Informasi</h3>
            </div>
          </Link>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="text-[#5488c4] flex ml-auto shadow-md rounded-md p-1"
              >
                <MdContactSupport size={20} />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Petunjuk Penggunaan</DialogTitle>
                <DialogDescription className="border-t-2 flex flex-col gap-2">
                  <div className="flex flex-col">
                    <h1 className="text-black font-bold flex justify-center text-md mt-4">
                      Langkah-langkah:
                    </h1>
                    <div className="flex flex-col gap-2">
                      <p>
                        1. Masukkan teks yang ingin Anda enkripsi atau dekripsi
                        pada kolom "PlainText".
                      </p>
                      <p>2. Masukkan kunci yang sesuai pada kolom "Key".</p>
                      <p>
                        3. Hasil enkripsi atau dekripsi akan ditampilkan di
                        kolom "ChiperText".
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 gap-4 flex flex-col">
                    <h1 className="flex justify-center font-semibold text-md text-black">
                      Detail
                    </h1>
                    <div className="flex flex-col">
                      <h1 className="text-black font-bold text-md">
                        1. PlainText:
                      </h1>
                      <div className="flex flex-col gap-2">
                        <p>
                          Masukkan teks yang ingin Anda enkripsi atau dekripsi
                          pada kolom ini.
                        </p>
                        <p>
                          Teks yang dimasukkan akan dienkripsi atau didekripsi
                          menggunakan algoritma RC4.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-black font-bold text-md">2. Key:</h1>
                      <div className="flex flex-col gap-2">
                        <p>
                          Masukkan kunci yang akan digunakan untuk enkripsi atau
                          dekripsi teks.
                        </p>
                        <p>
                          Pastikan kunci yang Anda masukkan cukup kuat dan aman
                          untuk digunakan.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-black font-bold text-md">
                        3. ChiperText:
                      </h1>
                      <div className="flex flex-col gap-2">
                        <p>
                          Hasil enkripsi atau dekripsi akan ditampilkan di kolom
                          ini.
                        </p>
                        <p>
                          Anda akan melihat teks terenkripsi atau didekripsi
                          setelah memasukkan teks dan kunci
                        </p>
                      </div>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4 py-4"></div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default Navbar2;
