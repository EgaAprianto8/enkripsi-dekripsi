import { useState, useEffect } from "react";
import { Source_Code_Pro } from "next/font/google";
import { Textarea } from "@/components/ui/textarea";

const code = Source_Code_Pro({ subsets: ["latin"] });

const EnkripsiDeskripsi = () => {
  const [message, setMessage] = useState<string>("Hello, world!"); 
  const [key, setKey] = useState<string>("key");
  const [result, setResult] = useState<string>("");

  const RC4Algorithm = () => {
    if (!key) {
      setResult("");
      return; 
    }

    let arrayBinary: string[] = [];
    for (let i = 0; i < message.length; i++) {
      let ascii = message.charCodeAt(i);
      let binary = ascii.toString(2).padStart(8, "0");
      arrayBinary.push(binary);
    }

    let S: number[] = [];
    let K: number[] = [];
    for (let i = 0; i < message.length; i++) {
      S[i] = i;
      K.push(key.charCodeAt(i % key.length));
    }

    let j = 0;
    for (let i = 0; i < message.length; i++) {
      j = (j + S[i] + K[i]) % message.length;
      let temp = S[i];
      S[i] = S[j];
      S[j] = temp;
    }

    j = 0;
    let i = 0;
    let keyStream: string[] = [];
    for (let n = 0; n < message.length; n++) {
      i = (i + 1) % message.length;
      j = (j + S[i]) % message.length;
      let temp = S[i];
      S[i] = S[j];
      S[j] = temp;
      let t = (S[i] + S[j]) % message.length;
      keyStream[n] = S[t].toString(2).padStart(8, "0");
    }

    enkripsiDekripsi(arrayBinary, keyStream);
  };

  const enkripsiDekripsi = (arrayBinary: string[], keyStream: string[]) => {
    let hasil: string[] = [];
    for (let i = 0; i < message.length; i++) {
      let binaryToInt = parseInt(arrayBinary[i], 2);
      let keyStreamToInt = parseInt(keyStream[i], 2);
      let result = binaryToInt ^ keyStreamToInt;
      hasil.push(String.fromCharCode(result));
    }
    setResult(hasil.join(""));
  };

  useEffect(() => {
    RC4Algorithm();
  }, [message, key]);

  return (
    <main className="flex min-h-full bg-[#f2f4f6] min-w-full sm:pt-20 sm:pb-60 py-10">
      <div className="flex md:flex-row flex-col container justify-center gap-14">
        <div className="border-2 border-gray-100 rounded-sm min-w-full sm:min-w-[500px] bg-white">
          <h1 className="text-blue-400 text-2xl font-semibold p-4">PlainText</h1>
          <div className={code.className}>
            <div className="border-t-2">
              <Textarea
                title="inputpesan"
                value={message}
                placeholder="Masukan Pesan"
                onChange={(e) => setMessage(e.target.value)}
                style={{ height: "200px" }} 
              />
            </div>
          </div>
        </div>
        <div className="border-2 border-gray-100 rounded-sm min-w-full sm:min-w-[500px] bg-white">
          <h1 className="text-blue-400 text-2xl font-semibold p-4">Key</h1>
          <div className={code.className}>
            <div className="border-t-2">
              <Textarea
                id="key"
                title="inputkey"
                value={key}
                placeholder="Masukan Key"
                onChange={(e) => setKey(e.target.value)}
                style={{ height: "200px" }} 
              />
            </div>
          </div>
        </div>
        <div className="border-2 border-gray-100 rounded-sm min-w-full sm:min-w-[500px] bg-white">
          <h1 className="text-blue-400 text-2xl font-semibold p-4">ChiperText</h1>
          <div className={code.className}>
            <div className="border-t-2">
              <Textarea
                title="hasil"
                value={result}
                placeholder="Untuk menampilkan hasil, Key wajib diisi"
                style={{ height: "200px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EnkripsiDeskripsi;
