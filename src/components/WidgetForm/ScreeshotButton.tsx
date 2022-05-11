import { Camera } from "phosphor-react";
import html2canvas from 'html2canvas';
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenShotButtonProps {
    onScreeshotTook:(screenshot: string) => void;
}

export function ScreenshotButton({ onScreeshotTook }: ScreenShotButtonProps) {
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

    async function handleTakeScreeshot() {
        setIsTakingScreenshot(true);

        const canvas = await html2canvas(document.querySelector('html')!)
        const base64Image = canvas.toDataURL('image/png');

        onScreeshotTook(base64Image);

       setIsTakingScreenshot(false);
    }

    return(
      <button
      type="button"
      onClick={handleTakeScreeshot}
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
  >
    { isTakingScreenshot ? <Loading /> :  <Camera  className="w-6 h-6"/> }
  </button>
    )
}
