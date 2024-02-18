/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fIwZDLyPw4V
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import {
  Button,
  Input,
  Label,
  Textarea,
  Checkbox,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/shared/ui";

export function TaskSection() {
  return (
    <div
      key="1"
      className="flex min-h-screen w-full bg-gray-100/40 dark:bg-gray-800/40"
    >
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40" />
      <div className="flex w-full flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-white px-6 dark:bg-gray-950">
          <Link className="lg:hidden" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="flex items-center gap-2">
            <Button className="rounded-full" size="icon" variant="ghost">
              <ChevronLeftIcon className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Button>
            <h1 className="text-lg font-semibold md:text-base lg:text-lg xl:text-base">
              Chat with Alice
            </h1>
          </div>
          <div className="ml-auto w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full appearance-none bg-white pl-8 shadow-none md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                  placeholder="Search messages..."
                  type="search"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="h-8 w-8 rounded-full border border-gray-200 dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-row gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid flex-1 items-start gap-4">
            <div className="flex items-center gap-4">
              <h2 className="text-lg font-semibold">Tasks</h2>
              <Button size="sm">New Task</Button>
            </div>
            <div className="flex-1 overflow-x-auto rounded-lg border">
              <div className="grid grid-cols-[30px_1fr] items-start border-b px-4 py-2 last:border-b-0">
                <Checkbox id="task1" />
                <div className="space-y-1 leading-none">
                  <Label htmlFor="task1">Task 1</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Description for task 1
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[30px_1fr] items-start border-b bg-gray-100 px-4 py-2 last:border-b-0 dark:bg-gray-800">
                <Checkbox id="task2" />
                <div className="space-y-1 leading-none">
                  <Label htmlFor="task2">Task 2</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Description for task 2
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[30px_1fr] items-start border-b px-4 py-2 last:border-b-0">
                <Checkbox id="task3" />
                <div className="space-y-1 leading-none">
                  <Label htmlFor="task3">Task 3</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Description for task 3
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[30px_1fr] items-start border-b bg-gray-100 px-4 py-2 last:border-b-0 dark:bg-gray-800">
                <Checkbox id="task4" />
                <div className="space-y-1 leading-none">
                  <Label htmlFor="task4">Task 4</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Description for task 4
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[30px_1fr] items-start border-b px-4 py-2 last:border-b-0">
                <Checkbox id="task5" />
                <div className="space-y-1 leading-none">
                  <Label htmlFor="task5">Task 5</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Description for task 5
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-hidden rounded-lg border">
            <div className="flex flex-col gap-2 p-4">
              <div className="flex items-start gap-2">
                <img
                  alt="Avatar"
                  className="rounded-full border border-gray-200 dark:border-gray-800"
                  height="40"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div className="flex-1">
                  <div className="rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
                    Hi there! How can I help you today?
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <img
                  alt="Avatar"
                  className="rounded-full border border-gray-200 dark:border-gray-800"
                  height="40"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div className="flex-1">
                  <div className="rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
                    I'm having trouble with my order. Can you help me track it?
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <img
                  alt="Avatar"
                  className="rounded-full border border-gray-200 dark:border-gray-800"
                  height="40"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div className="flex-1">
                  <div className="rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
                    Sure! Please provide me with your order number.
                  </div>
                </div>
              </div>
            </div>
            <form className="border-t">
              <div className="flex h-12 items-center px-4">
                <Textarea
                  className="h-auto min-h-[100px] flex-1 resize-none"
                  placeholder="Type a message..."
                />
                <Button type="submit">Send</Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
