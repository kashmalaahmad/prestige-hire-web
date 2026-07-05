"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { blogPosts } from "@/lib/data"; // Ensure your blog data is here
import { Button } from "@/components/ui/Button";

export default function BlogPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center w-full h-[220px] xs:h-[250px] sm:h-[280px] md:h-[300px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://www.prestigehire.co/wp-content/uploads/2026/04/breadcrumb.jpg')",
        }}
      >
        <div className="text-center px-4">
          <h1
            className="text-black text-[32px] xs:text-[36px] sm:text-4xl md:text-5xl font-bold underline underline-offset-8 decoration-2"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Blog
          </h1>
        </div>
      </section>

      {/* Hero Banner Section */}
      <section className="w-full py-10 sm:py-16 md:py-24">
        <div className="relative w-full max-w-[1200px] mx-auto h-[200px] xs:h-[240px] sm:h-[320px] md:h-[450px] overflow-hidden px-4 md:px-0">
          <Image
            src="https://www.prestigehire.co/wp-content/uploads/2026/04/about-img-1.jpg"
            alt="Blog Header"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h2
              className="text-white text-[36px] xs:text-[42px] sm:text-5xl md:text-7xl font-bold tracking-widest"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              BLOG
            </h2>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-10 sm:py-14 md:py-16 px-4 bg-white">
        <div className="max-w-[1140px] mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
          {blogPosts.map((post, index) => (
  <div
    key={index}
    className={`flex flex-col md:flex-row flex-wrap items-start md:items-stretch gap-5 p-5 sm:p-8 md:p-10 ${
      index !== blogPosts.length - 1 ? "border-b border-gray-100" : ""
    }`}
  >
    <Link
      href={post.link}
      className="group block w-full md:w-[45%] relative h-[200px] xs:h-[220px] sm:h-[260px] md:h-[280px] rounded-xl overflow-hidden flex-shrink-0 shadow-lg"
    >
      <Image
        src={post.image}
        alt={post.title}
        fill
        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 45vw"
      />
    </Link>
    <div className="flex flex-col justify-center flex-1">
      <h2
        className="text-[20px] xs:text-[22px] sm:text-[26px] md:text-[28px] font-bold mb-2 sm:mb-3 leading-snug"
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        <Link href={post.link}>{post.title}</Link>
      </h2>
      <p
        className="text-black text-[16px] mb-4 sm:mb-5"
        style={{ fontFamily: "Mulish, sans-serif", lineHeight: "24px" }}
      >
        {post.excerpt}
      </p>
      <Button variant="primary" onClick={() => router.push(post.link)}>
        Read More 
      </Button>
    </div>
  </div>
))}
        </div>
      </section>
    </main>
  );
}