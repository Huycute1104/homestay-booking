/* eslint-disable react-refresh/only-export-components */
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-zinc-300",
  {
    variants: {
      variant: {
        default:
          "bg-zinc-900 text-zinc-50 shadow dark:bg-zinc-50 dark:text-zinc-900", // Removed hover
        destructive:
          "bg-red-500 text-zinc-50 shadow-sm dark:bg-red-900 dark:text-zinc-50", // Removed hover
        outline:
          "border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50", // Removed hover
        secondary:
          "bg-zinc-100 text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-50", // Removed hover
        ghost: "dark:hover:bg-zinc-800 dark:hover:text-zinc-50", // Removed hover
        link: "text-zinc-900 dark:text-zinc-50", // Removed hover
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
