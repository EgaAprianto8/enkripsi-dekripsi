"use client";
import { useState } from "react";
import enkripsiDekripsi from "@/components/pages/EnkripsiDekripsi";
import EnkripsiDeskripsi from "@/components/pages/EnkripsiDekripsi";
import Navbar2 from "@/components/layouts/Navbar2";
import Footer from "@/components/layouts/Footer";

export default function Home() {
  return (
  <>
    <Navbar2/>
    <EnkripsiDeskripsi/>
    <Footer/>
  </>
  );
}
