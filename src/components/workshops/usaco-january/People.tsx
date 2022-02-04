import {
  melody,
  dustin,
  ryan,
  amogha,
} from "../../index/images"
import Speakers, { Speaker } from "../Speakers"
const speakers: Speaker[] = [
  {
    name: "Melody Yu",
    title: "Host / USACO Platinum",
    photo: melody,
  },
  {
    name: "Dustin Miao",
    title: "Teacher / USACO Platinum",
    photo: dustin,
  },
  {
    name: "Ryan Chou",
    title: "Teacher",
    photo: ryan,
  },
  {
    name: "Amogha",
    title: "Teacher",
    photo: amogha,
  },
]
export default function People() {
  return <Speakers speakers={speakers} titleColor="text-yellow-600" />
}
