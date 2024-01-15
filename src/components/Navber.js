"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navber = () => {
    const pathname=usePathname()
        return (
        <ul className="flex justify-center gap-3 bg-[#c4552a] text-white py-[2px]">
            <li><Link className={`${pathname === '/' ? 'text-[green]':''}`} href='/'>Home</Link></li>
            <li><Link className={`${pathname === '/add' ? 'text-[green]':''}`} href='/add'>Add User</Link></li>
        </ul>
    );
};

export default Navber;