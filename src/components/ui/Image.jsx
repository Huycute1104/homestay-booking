import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Image = ({
  src,
  alt,
  title,
  width,
  height,
  className,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="w-full max-w-sm mx-auto mt-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn(
            "w-full h-auto rounded-lg shadow-lg transition-all duration-300",
            {
              "scale-105 shadow-2xl": isHovered,
              "shadow-md": !isHovered,
            },
            className
          )}
          {...props}
        />
        {title && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white text-center rounded-b-lg">
            <h2 className="text-xl font-semibold">{title}</h2>
          </div>
        )}
      </div>
    </Card>
  );
};

export { Image };
