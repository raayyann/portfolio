export default function LinkButton({
  className = "",
  href,
  icon,
}: {
  className?: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={`rounded-full w-10 h-10 flex items-center justify-center p-2 mx-1 hover:opacity-75 text-white font-bold ${className}`}
      target="_blank"
    >
      {icon}
    </a>
  );
}
