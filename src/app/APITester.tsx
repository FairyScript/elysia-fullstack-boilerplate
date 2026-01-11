import { type FormEvent, useRef } from 'react'
import { Button } from 'shadcn-ui/components/ui/button'
import { Input } from 'shadcn-ui/components/ui/input'
import { Label } from 'shadcn-ui/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'shadcn-ui/components/ui/select'
import { Textarea } from 'shadcn-ui/components/ui/textarea'

export function APITester() {
  const responseInputRef = useRef<HTMLTextAreaElement>(null)

  const testEndpoint = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!responseInputRef.current) return

    try {
      const form = e.currentTarget
      const formData = new FormData(form)
      const endpoint = formData.get('endpoint') as string
      const url = new URL(endpoint, location.href)
      const method = formData.get('method') as string
      const res = await fetch(url, { method })

      const data = await res.json()
      responseInputRef.current.value = JSON.stringify(data, null, 2)
    } catch (error) {
      responseInputRef.current.value = String(error)
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <form onSubmit={testEndpoint} className="flex items-center gap-2">
        <Label htmlFor="method" className="sr-only">
          Method
        </Label>
        <Select name="method" defaultValue="GET">
          <SelectTrigger className="w-25" id="method">
            <SelectValue placeholder="Method" />
          </SelectTrigger>
          <SelectContent align="start">
            <SelectItem value="GET">GET</SelectItem>
            <SelectItem value="PUT">PUT</SelectItem>
            <SelectItem value="POST">POST</SelectItem>
          </SelectContent>
        </Select>
        <Label htmlFor="endpoint" className="sr-only">
          Endpoint
        </Label>
        <Input
          id="endpoint"
          type="text"
          name="endpoint"
          defaultValue="/api/hello"
          placeholder="/api/hello"
        />
        <Button type="submit" variant="secondary">
          Send
        </Button>
      </form>
      <Label htmlFor="response" className="sr-only">
        Response
      </Label>
      <Textarea
        ref={responseInputRef}
        id="response"
        readOnly
        placeholder="Response will appear here..."
        className="min-h-35 font-mono resize-y"
      />
    </div>
  )
}
