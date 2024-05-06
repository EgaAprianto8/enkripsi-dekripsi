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
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle>Petunjuk Penggunaan</DialogTitle>
                <DialogDescription className="border-t-2 flex flex-col gap-2">
                  <div className="mt-4 gap-4 flex flex-col">
                    <div className="flex flex-col">
                      <h1 className="text-black font-bold text-md">
                        1. Masukkan Plaintext / ChiperText
                      </h1>
                      <div className="flex flex-col gap-2">
                        <p>
                        Pada bagian ini, Anda dapat memasukkan pesan yang ingin Anda enkripsi atau dekripsi. 
                        </p>
                        <p>
                        Silakan tuliskan pesan Anda dalam kolom teks yang tersedia.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-black font-bold text-md">2. Key</h1>
                      <div className="flex flex-col gap-2">
                        <p>
                        Di sini, Anda perlu memasukkan kunci yang akan digunakan untuk enkripsi atau dekripsi. Pastikan kunci yang Anda masukkan adalah dalam format heksadesimal dengan panjang 16 byte (32 karakter).
                        </p>
                        <p>
                        Jika Anda tidak memiliki kunci khusus, Anda dapat mengklik tombol &quot;Generate Key&quot; untuk menghasilkan kunci secara acak.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-black font-bold text-md">
                        3. Hasil Enkripsi / Dekripsi
                      </h1>
                      <div className="flex flex-col gap-2">
                        <p>
                        Hasil dari proses enkripsi atau dekripsi akan ditampilkan di sini. 
                        </p>
                        <p>
                        Setelah Anda melakukan enkripsi atau dekripsi, hasilnya akan muncul di area teks ini.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-black font-bold text-md">
                        4. Enkripsi / Dekripsi Button
                      </h1>
                      <div className="flex flex-col gap-2">
                        <p>
                        Gunakan tombol &quot;Enkripsi&quot; untuk melakukan enkripsi pesan yang telah Anda masukkan dengan menggunakan kunci yang telah Anda tentukan. 
                        </p>
                        <p>
                        Gunakan tombol &quot;Dekripsi&quot; untuk melakukan dekripsi pesan yang telah dienkripsi sebelumnya menggunakan kunci yang sama.
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
