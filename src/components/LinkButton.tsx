export default function LinkButton({
  className = "",
  href,
  children,
}: {
  className?: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={`rounded-full w-10 h-10 flex items-center justify-center p-2 mx-1 hover:opacity-75 text-white font-bold ${className}`}
      target="_blank"
    >
      {children}
    </a>
  );
}
