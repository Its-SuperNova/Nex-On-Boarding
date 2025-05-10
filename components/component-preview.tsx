import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ComponentPreview({ component }: { component: string }) {
  switch (component) {
    case "button":
      return <Button className="glow-button">Button</Button>
    case "input":
      return <Input placeholder="Enter text..." className="max-w-[200px] bg-black/50 border-purple-500/30 text-white" />
    case "modal":
      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="bg-transparent border-purple-500/50 text-white hover:bg-purple-500/20">
              Open Dialog
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-black/90 border-purple-500/30">
            <DialogHeader>
              <DialogTitle className="text-white">Dialog Title</DialogTitle>
              <DialogDescription className="text-white/70">Dialog description goes here.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button type="submit" className="glow-button">
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )
    case "card":
      return (
        <Card className="w-full max-w-[300px] bg-black/80 border-purple-500/30 relative overflow-hidden">
          <CardHeader>
            <CardTitle className="text-white">Card Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-white/70">Card content goes here.</p>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent border-purple-500/50 text-white hover:bg-purple-500/20"
            >
              Cancel
            </Button>
            <Button size="sm" className="ml-2 glow-button">
              Submit
            </Button>
          </CardFooter>
          <div className="absolute bottom-[-90px] right-[-90px] w-[180px] h-[180px]">
            <img src="/images/react-native-logo.svg" alt="React Native" className="w-full h-full" />
          </div>
        </Card>
      )
    case "dropdown":
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="bg-transparent border-purple-500/50 text-white hover:bg-purple-500/20">
              Open Menu
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-black/90 border-purple-500/30">
            <DropdownMenuLabel className="text-white">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-purple-500/30" />
            <DropdownMenuItem className="text-white/70 hover:text-white focus:bg-purple-500/20">
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="text-white/70 hover:text-white focus:bg-purple-500/20">
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem className="text-white/70 hover:text-white focus:bg-purple-500/20">
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="text-white/70 hover:text-white focus:bg-purple-500/20">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    default:
      return null
  }
}
