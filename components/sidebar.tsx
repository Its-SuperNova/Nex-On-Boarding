"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Box, ChevronsUpDown, Circle, FileText, Home, Layers, LayoutGrid, Menu, MessageSquare } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pr-0 sm:max-w-xs">
          <MobileSidebar pathname={pathname} />
        </SheetContent>
      </Sheet>
      <div className={cn("hidden border-r bg-background md:block", className)}>
        <div className="w-[240px] flex-col">
          <DesktopSidebar pathname={pathname} />
        </div>
      </div>
    </>
  )
}

function MobileSidebar({ pathname }: { pathname: string }) {
  return (
    <div className="flex flex-col h-full">
      <div className="px-2 py-2">
        <Link href="/" className="flex items-center gap-2 px-2">
          <span className="font-bold text-xl">AshhhhX</span>
        </Link>
      </div>
      <ScrollArea className="flex-1">
        <div className="px-2 py-2">
          <SidebarItems pathname={pathname} />
        </div>
      </ScrollArea>
    </div>
  )
}

function DesktopSidebar({ pathname }: { pathname: string }) {
  return (
    <div className="flex flex-col h-screen">
      <div className="px-3 py-2">
        <Link href="/" className="flex items-center gap-2 px-2">
          <span className="font-bold text-xl">AshhhhX</span>
        </Link>
      </div>
      <ScrollArea className="flex-1 px-3 py-2">
        <SidebarItems pathname={pathname} />
      </ScrollArea>
    </div>
  )
}

function SidebarItems({ pathname }: { pathname: string }) {
  return (
    <div className="space-y-2">
      <div className="py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Overview</h2>
        <div className="space-y-1">
          <Button
            asChild
            variant="ghost"
            className={cn("w-full justify-start", pathname === "/" && "bg-accent text-accent-foreground")}
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className={cn("w-full justify-start", pathname === "/docs" && "bg-accent text-accent-foreground")}
          >
            <Link href="/docs">
              <FileText className="mr-2 h-4 w-4" />
              Documentation
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className={cn("w-full justify-start", pathname === "/components" && "bg-accent text-accent-foreground")}
          >
            <Link href="/components">
              <Layers className="mr-2 h-4 w-4" />
              Components
            </Link>
          </Button>
        </div>
      </div>
      <div className="py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Components</h2>
        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-2 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Box className="h-4 w-4" />
              <span>UI Elements</span>
            </div>
            <ChevronsUpDown className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-1 px-4 py-2">
            {[
              { name: "Button", href: "/components/button" },
              { name: "Input", href: "/components/input" },
              { name: "Modal", href: "/components/modal" },
              { name: "Card", href: "/components/card" },
              { name: "Dropdown", href: "/components/dropdown" },
              { name: "Tabs", href: "/components/tabs" },
              { name: "Avatar", href: "/components/avatar" },
              { name: "Badge", href: "/components/badge" },
            ].map((item) => (
              <Button
                key={item.name}
                asChild
                variant="ghost"
                className={cn(
                  "w-full justify-start pl-8",
                  pathname === item.href && "bg-accent text-accent-foreground",
                )}
              >
                <Link href={item.href}>
                  <Circle className="mr-2 h-3 w-3" />
                  {item.name}
                </Link>
              </Button>
            ))}
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-2 text-sm font-medium">
            <div className="flex items-center gap-2">
              <LayoutGrid className="h-4 w-4" />
              <span>Layout</span>
            </div>
            <ChevronsUpDown className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-1 px-4 py-2">
            {[
              { name: "Container", href: "/components/container" },
              { name: "Grid", href: "/components/grid" },
              { name: "Sidebar", href: "/components/sidebar" },
            ].map((item) => (
              <Button
                key={item.name}
                asChild
                variant="ghost"
                className={cn(
                  "w-full justify-start pl-8",
                  pathname === item.href && "bg-accent text-accent-foreground",
                )}
              >
                <Link href={item.href}>
                  <Circle className="mr-2 h-3 w-3" />
                  {item.name}
                </Link>
              </Button>
            ))}
          </CollapsibleContent>
        </Collapsible>
        <Collapsible>
          <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-2 text-sm font-medium">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span>Feedback</span>
            </div>
            <ChevronsUpDown className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-1 px-4 py-2">
            {[
              { name: "Alert", href: "/components/alert" },
              { name: "Toast", href: "/components/toast" },
              { name: "Progress", href: "/components/progress" },
            ].map((item) => (
              <Button
                key={item.name}
                asChild
                variant="ghost"
                className={cn(
                  "w-full justify-start pl-8",
                  pathname === item.href && "bg-accent text-accent-foreground",
                )}
              >
                <Link href={item.href}>
                  <Circle className="mr-2 h-3 w-3" />
                  {item.name}
                </Link>
              </Button>
            ))}
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  )
}
