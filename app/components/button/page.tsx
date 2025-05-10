import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy } from "lucide-react"

export default function ButtonPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Button</h1>
            <p className="text-muted-foreground">A button component with multiple variants and sizes.</p>
          </div>
          <Tabs defaultValue="preview">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="preview" className="border-none p-0">
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle>Button Component</CardTitle>
                  <CardDescription>A button component with multiple variants and sizes.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-4">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destructive</Button>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button size="sm">Small</Button>
                    <Button>Default</Button>
                    <Button size="lg">Large</Button>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button disabled>Disabled</Button>
                    <Button variant="secondary" disabled>
                      Disabled
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild>
                      <a href="#">Link Button</a>
                    </Button>
                  </div>
                </CardContent>
                <div className="absolute bottom-[-90px] right-[-90px] w-[180px] h-[180px]">
                  <img src="/images/react-native-logo.svg" alt="React Native" className="w-full h-full" />
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="code" className="border-none p-0">
              <Card className="overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div className="space-y-1">
                    <CardTitle>Code</CardTitle>
                    <CardDescription>Copy and paste the code into your project.</CardDescription>
                  </div>
                  <Button variant="outline" size="icon">
                    <Copy className="h-4 w-4" />
                    <span className="sr-only">Copy code</span>
                  </Button>
                </CardHeader>
                <CardContent>
                  <pre className="rounded-md bg-muted p-4 overflow-auto">
                    <code className="text-sm">{`import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  )
}`}</code>
                  </pre>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">
                    This component uses the Button component from shadcn/ui.
                  </p>
                </CardFooter>
                <div className="absolute bottom-[-90px] right-[-90px] w-[180px] h-[180px]">
                  <img src="/images/react-native-logo.svg" alt="React Native" className="w-full h-full" />
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
