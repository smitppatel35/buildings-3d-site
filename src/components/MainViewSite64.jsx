import { useCallback, useState } from "react";
import Header from "../components/Header";
import bgVideo from "../img/main.mp4";
import { TiLocationArrowOutline } from "react-icons/ti";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { sitesCardData } from "../utils/data";
import landing64 from "../img/arcadia64landing.jpeg";


const MainViewSite64 = (props) => {
  const [showMessage, setShowMessage] = useState(false);
  const { id } = useParams();
  const data = sitesCardData.find((data) => id == data.id);

  const copyToClipboard = useCallback(() => {
    const currentUrl = window.location.href;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(currentUrl)
        .then(() => {
          setShowMessage(true);
          setTimeout(() => {
            setShowMessage(false);
          }, 1000);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    } else {
      // Fallback for older browsers or specific touch-screen scenarios
      const textArea = document.createElement("textarea");
      textArea.value = currentUrl;
      textArea.style.position = "fixed"; // Prevent scrolling to the bottom of the page in mobile Safari
      textArea.style.left = "-9999px"; // Hide the textarea off-screen
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        const successful = document.execCommand("copy");
        if (successful) {
          setShowMessage(true);
          setTimeout(() => {
            setShowMessage(false);
          }, 1000);
        } else {
          console.error("Fallback: Copy command was unsuccessful");
        }
      } catch (err) {
        console.error("Fallback: Unable to copy", err);
      }

      document.body.removeChild(textArea);
    }
  }, []);

  return (
    <section
      className="h-[calc(100vh-64px)] overflow-hidden"
      ref={(el) => props.storeInputRef(el, 0)}
    >
      <img src={landing64} className="absolute inset-0 w-full h-full top-0 object-cover" />

      <div className="absolute inset-0 bg-black bg-opacity-50 w-full h-full"></div>

      <div className="text-white absolute inset-0 w-full flex gap-2 flex-col h-full justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-semibold m-0">{data.title}</h1>
        <button
          className="bg-neutral_200 bg-opacity-30 border rounded text-sm flex items-center px-3 py-1 mt-4"
          onClick={copyToClipboard}
        >
          <TiLocationArrowOutline className="text-xl" />
          {showMessage ? "Copied!!" : "Share"}
        </button>
      </div>
    </section>
  );
};

export default MainViewSite64;