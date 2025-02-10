import Link from "next/link";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
export default function Options() {
  return (
    <div className="flex flex-1 items-center justify-center space-x-4">
        <Card className="w-[350px] place-self-center border-collapse  border-zinc-900 dark:border-collapse  dark:border-cyan-400 bg-slate-200 dark:bg-gray-600  ">
      <CardHeader>
        <CardTitle className="flex justify-center hover:text-sky-500 text-4xl">Host</CardTitle>
      </CardHeader>
      <CardContent className="text-justify">
      Effortless event management with automated attendance tracking. Empower your community today!
        </CardContent>
      <CardFooter className="flex justify-center">
        < Button variant={"outline"} className="border-gray-700 bg-slate-200 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-sky-300  ">
          <Link href="/auth/register/host">Register</Link>
        </Button>
        
      </CardFooter>
    </Card>
        <Card className="w-[350px] place-self-center border-collapse  border-zinc-900 dark:border-collapse  dark:border-cyan-400 bg-slate-200 dark:bg-gray-600  ">
      <CardHeader>
        <CardTitle className="flex justify-center hover:text-sky-500 text-4xl">Participant</CardTitle>
      </CardHeader>
      <CardContent className="text-justify">
      Join events effortlessly and earn participation certificates. Stay informed and track your progress with ease!
        </CardContent>
      <CardFooter className="flex justify-center">
        < Button variant={"outline"} className="border-gray-700 bg-slate-200 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-sky-300  ">        <Link href="/auth/register/participant">Register</Link></Button>
        
      </CardFooter>
    </Card>
        
    </div>
    )
}