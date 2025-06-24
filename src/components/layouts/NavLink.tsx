import Link from "next/link";
import React from "react";

interface Props {
  label: string;
  to: string;
}

export default function NavLink({ label, to }: Props) {
  return (
    <Link href={to} className="text-2xl group transition duration-500">
      <span className="group-hover:font-bold font-nexa">{label}</span>
      <span className="h-[2px] w-3/4 mx-auto bg-transparent block group-hover:bg-white"></span>
    </Link>
  );
}
