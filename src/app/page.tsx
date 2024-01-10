"use client";

import { useState } from "react";
import CryptoJS from "crypto-js";
import ClipboardJS from "clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiEye, FiEyeOff } from "react-icons/fi";

const EncryptDecryptPage = () => {
  const [inputText, setInputText] = useState("");
  const [password, setPassword] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("encrypt");

  const encryptText = () => {
    const encrypted = CryptoJS.AES.encrypt(inputText, password).toString();
    setEncryptedText(encrypted);
    toast.success("Text encrypted successfully!");
  };

  const decryptText = () => {
    try {
      const decrypted = CryptoJS.AES.decrypt(encryptedText, password).toString(
        CryptoJS.enc.Utf8
      );
      setDecryptedText(decrypted);
      setIsPasswordValid(true);
      if (decrypted != "" || decrypted != null) {
        toast.success("Text decrypted successfully!");
        console.log("'"+decrypted+"'");
      } else {
        toast.error("Wrong password! Please try again.");
      }
    } catch (error) {
      setIsPasswordValid(false);
      toast.error("Wrong password! Please try again.");
      setTimeout(() => {
        setIsPasswordValid(true);
      }, 2000); // Show warning for 2 seconds
    }
  };
const handleCopy = (encryptedText: string) => {
  const clipboard = new ClipboardJS(".copy-button", {
    text: () => encryptedText,
  });

  clipboard.on("success", (e) => {
    console.log("Text copied to clipboard:", e.text);
    clipboard.destroy();
    toast.success("Text copied to clipboard!");
  });

  clipboard.on("error", (e) => {
    console.error("Unable to copy:", e.action);
    clipboard.destroy();
    toast.error("Failed to copy text to clipboard.");
  });

  // Manually trigger the click event on a hidden button with class '.copy-button'
  const hiddenButton = document.createElement("button");
  hiddenButton.className = "copy-button";
  document.body.appendChild(hiddenButton);
  hiddenButton.click();
  document.body.removeChild(hiddenButton);
};

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };
  return (
    <>
    <div className="w-full bg-black text-white p-4">
      <h2 className="text-xl text-center font-semibold">Lock Your Message Here</h2>
    </div>
    <div className="p-4">
      <div className="flex justify-center space-x-4 mb-4">
        <button
          className={`py-2 px-4 rounded-md ${
            activeTab === "encrypt" ? "bg-gray-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setActiveTab("encrypt")}
        >
          Encrypt
        </button>
        <button
          className={`py-2 px-4 rounded-md ${
            activeTab === "decrypt" ? "bg-gray-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setActiveTab("decrypt")}
        >
          Decrypt
        </button>
      </div>
      <ToastContainer />
      {activeTab === "encrypt" && (
        <div className="flex flex-col items-center">
          <textarea
            rows={4}
            className="border rounded-md p-2 mb-2 w-80"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter Message to Lock it"
          />
          <div className="relative">
            <input
              className="border rounded-md p-2 mb-2 w-80 pe-[40px]"
              type={isPasswordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
            <button
              className="bg-gray-200 rounded-md p-2 mb-2 absolute right-[5px] top-[10%]"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded-md mb-2 w-80"
            onClick={encryptText}
          >
            Lock Message
          </button>
          <textarea
            className="border rounded-md p-2 w-80 h-24"
            value={encryptedText}
            disabled
          />
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded-md my-2 w-80"
            onClick={() => handleCopy(encryptedText)}
          >
            Copy
          </button>
        </div>
      )}
      {activeTab === "decrypt" && (
        <div className="flex flex-col items-center">
          <textarea
            rows={4}
            className="border rounded-md p-2 mb-2 w-80"
            value={encryptedText}
            onChange={(e) => setEncryptedText(e.target.value)}
            placeholder="Enter Message to Unlock it"
          />
          <div className="relative">
            <input
              className="border rounded-md p-2 mb-2 w-80 pe-[40px]"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
            <button
              className="bg-gray-200 rounded-md p-2 mb-2 absolute right-[5px] top-[10%]"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded-md mb-2 w-80"
            onClick={decryptText}
          >
            Unlock Message
          </button>
          {!isPasswordValid && (
            <div className="text-red-500 mb-2">
              Wrong password! Please try again.
            </div>
          )}
          <textarea
            className="border rounded-md p-2 w-80 h-24"
            value={decryptedText}
            disabled
          />
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded-md my-2 w-80"
            onClick={() => handleCopy(decryptedText)}
          >
            Copy
          </button>
        </div>
      )}
    </div>

    <div className="my-5">
      <p className="text-center font-[14px] font-semibold">Made with ❤️ by Zade Meadows</p>
    </div>
    </>
  );
};

export default EncryptDecryptPage;
