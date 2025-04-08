import { cn } from "@/lib/utils";

function Skeleton(props) {
  const { className, ...rest } = props;

  return (
    <div
      className={cn("animate-pulse rounded-md bg-zinc-900/10 dark:bg-zinc-50/10", className)}
      {...rest}
    />
  );
}

export { Skeleton };
