import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

interface VideoBackgroundProps {
  src: string;
  className?: string;
  flipped?: boolean;
  overlayOpacity?: string;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({
  src,
  className = "",
  flipped = false,
  overlayOpacity = "bg-black/30",
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    const handleError = () => {
      setHasError(true);
    };

    video.addEventListener("error", handleError);

    if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });

      hls.loadSource(src);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {
          // Handled silently for autoplay policy
        });
      });

      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              hls?.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              hls?.recoverMediaError();
              break;
            default:
              setHasError(true);
              hls?.destroy();
              break;
          }
        }
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {});
      });
    } else {
      setHasError(true);
    }

    return () => {
      video.removeEventListener("error", handleError);
      if (hls) {
        hls.destroy();
      }
    };
  }, [src]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Static fallback background if video fails */}
      {hasError ? (
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f18] via-[#05070a] to-bg" />
      ) : (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 pointer-events-none ${
            flipped ? "scale-y-[-1]" : ""
          } ${className}`}
        />
      )}

      {/* Dark overlay */}
      <div className={`absolute inset-0 ${overlayOpacity} backdrop-blur-[1px]`} />

      {/* Bottom fade blending into the page background */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg via-bg/80 to-transparent" />
    </div>
  );
};
