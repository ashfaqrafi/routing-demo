import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
  description: "Blog page",
};

export default function Blog() {
  return <h1>Blog Page</h1>;
}
