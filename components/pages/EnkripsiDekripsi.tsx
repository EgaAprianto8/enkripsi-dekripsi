import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
var CryptoJS = require("crypto-js");

const EnkripsiDeskripsi = () => {
  const [message, setMessage] = useState<string>("Hello, world!");
  const [key, setKey] = useState<string>(
    CryptoJS.lib.WordArray.random(16).toString(CryptoJS.enc.Hex)
  );
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");

  const validateHex = (input: string) => {
    const hexRegex = /^[0-9A-Fa-f]+$/g;
    return hexRegex.test(input);
  };

  const generateRandomKey = () => {
    setKey(CryptoJS.lib.WordArray.random(16).toString(CryptoJS.enc.Hex));
  };

  const AESAlgorithm = () => {
    setError("");
    if (!key) {
      setError("Key harus diisi.");
      setResult("");
      return;
    }

    if (!validateHex(key)) {
      setError("Key harus dalam format heksadesimal.");
      setResult("");
      return;
    }

    try {
      const ciphertext = CryptoJS.AES.encrypt(
        message,
        CryptoJS.enc.Hex.parse(key),
        {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
        }
      ).ciphertext.toString(CryptoJS.enc.Hex);
      setResult(ciphertext);
    } catch (error) {
      setError("Terjadi kesalahan saat melakukan enkripsi.");
      setResult("");
    }
  };

  const decryptAES = () => {
    setError("");
    if (!key || !result) {
      setError("Key dan ChiperText harus diisi.");
      setResult("");
      return;
    }

    if (!validateHex(key)) {
      setError("Key harus dalam format heksadesimal.");
      setResult("");
      return;
    }

    try {
      const bytes = CryptoJS.AES.decrypt(
        { ciphertext: CryptoJS.enc.Hex.parse(result) },
        CryptoJS.enc.Hex.parse(key),
        {
          mode: CryptoJS.mode.ECB,
          padding: CryptoJS.pad.Pkcs7
        }
      );
      const originalText = bytes.toString(CryptoJS.enc.Utf8);
      setResult(originalText);
    } catch (error) {
      setError("Terjadi kesalahan saat melakukan dekripsi.");
      setResult("");
    }
  };

  const handleEncrypt = () => {
    AESAlgorithm();
  };

  const handleDecrypt = () => {
    decryptAES();
  };

  return (
    <main className="flex min-h-full bg-[#f2f4f6] min-w-full sm:pt-20 sm:pb-60 py-10">
      <div className="flex flex-col sm:flex-row gap-4 container mx-auto">
        <div className="flex-1 border-2 border-gray-100 rounded-sm bg-white">
          <h1 className="text-blue-400 text-2xl font-semibold p-4">
            Masukkan Plaintext / ChiperText
          </h1>
          <div className="border-t-2">
            <Textarea
              title="inputpesan"
              value={message}
              placeholder="Masukkan pesan yang ingin dienkripsi/dekripsi"
              onChange={(e) => setMessage(e.target.value)}
              style={{ height: "200px" }}
            />
          </div>
        </div>
        <div className="flex-1 border-2 border-gray-100 rounded-sm bg-white">
          <h1 className="text-blue-400 text-2xl font-semibold p-4">Key</h1>
          <div className="border-t-2">
            <Textarea
              id="key"
              title="inputkey"
              value={key}
              placeholder="Masukkan Key dalam format 16 byte heksadesimal"
              onChange={(e) => {
                setKey(e.target.value);
                if (!validateHex(e.target.value)) {
                  setError("Key harus dalam format heksadesimal.");
                } else {
                  setError("");
                }
              }}
              style={{ height: "200px" }}
            />
          </div>
          <div className="flex justify-center pb-10">
            <button
              title="generatekey"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={generateRandomKey}
            >
              Generate Key
            </button>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
        <div className="flex-1 border-2 border-gray-100 rounded-sm bg-white">
          <h1 className="text-blue-400 text-2xl font-semibold p-4">
            Hasil Enkripsi / Dekripsi{" "}
          </h1>
          <div className="border-t-2">
            <Textarea
              title="hasil"
              value={result}
              placeholder="Hasil enkripsi/dekripsi akan ditampilkan di sini"
              style={{ height: "200px" }}
            />
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleEncrypt}
            >
              Enkripsi
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
              onClick={handleDecrypt}
            >
              Dekripsi
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EnkripsiDeskripsi;
