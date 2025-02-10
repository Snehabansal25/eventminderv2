
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function CardWithForm() {
  return (
    <Card className="w-[350px] place-self-center border-collapse  border-zinc-900 dark:border-collapse  dark:border-cyan-400 bg-slate-200 dark:bg-gray-600  ">
      <CardHeader>
        <CardTitle className="flex justify-center hover:text-sky-500 text-4xl">Participant</CardTitle>
      </CardHeader>
      <CardContent className="">
      Participants can seamlessly join events and have marked their attendance automatically. Stay informed about upcoming events and track your participation with ease."
      </CardContent>
      <CardFooter className="flex justify-center">
        < Button variant={"outline"} className="border-gray-700 bg-slate-200 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-sky-300  ">Start Now</Button>
        
      </CardFooter>
    </Card>
  )
}