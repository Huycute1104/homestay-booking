import * as React from "react";

import { cn } from "@/lib/utils";

const Table = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;
  return (
    <div className="relative w-full overflow-auto">
      <table
        ref={ref}
        className={cn("w-full caption-bottom text-sm", className)}
        {...rest}
      />
    </div>
  );
});
Table.displayName = "Table";

const TableHeader = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;
  return (
    <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...rest} />
  );
});
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;
  return (
    <tbody
      ref={ref}
      className={cn("[&_tr:last-child]:border-0", className)}
      {...rest}
    />
  );
});
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;
  return (
    <tfoot ref={ref} className={cn("font-medium", className)} {...rest} />
  );
});
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;
  return (
    <tr
      ref={ref}
      className={cn(
        "border-b transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800",
        className
      )}
      {...rest}
    />
  );
});
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;
  return (
    <th
      ref={ref}
      className={cn(
        "h-10 px-2 text-left align-middle font-medium text-zinc-500 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] dark:text-zinc-400",
        className
      )}
      {...rest}
    />
  );
});
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;
  return (
    <td
      ref={ref}
      className={cn(
        "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...rest}
    />
  );
});
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;
  return (
    <caption
      ref={ref}
      className={cn("mt-4 text-sm text-zinc-500 dark:text-zinc-400", className)}
      {...rest}
    />
  );
});
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
};
