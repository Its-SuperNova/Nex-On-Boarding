"use client"

import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

// Reusable NavLink component
function NavLink({ href, label, external = false }: { href: string; label: string; external?: boolean }) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="text-sm font-medium text-white/70 transition-colors hover:text-white"
    >
      {label}
    </Link>
  )
}

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-transparent">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/images/ashhhhx-x-logo.png" alt="AshhhhX Logo" width={20} height={20} className="h-5 w-auto" />
        </Link>
        <nav className="flex items-center space-x-6">
          <NavLink href="/components" label="Components" />
          <NavLink href="/docs" label="Docs" />
          <NavLink href="https://github.com" label="GitHub" external />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
