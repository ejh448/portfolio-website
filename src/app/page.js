import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="flex flex-col gap-8 items-center">
      
        <h1>Hello, I'm Evan.</h1>
        <p>I am a Software Engineer.</p>

        
        <div className="flex gap-4 items-center">
          <a
            className="bg-foreground text-background px-4 py-2 flex items-center"
            href="https://www.linkedin.com/in/evan-howell-812187272"
            target="_blank"
            rel="noopener noreferrer"
          >
            View my Work
            <Image
              src="/arrow_down.svg" // Path to your arrow SVG file
              alt="Arrow icon"
              width={20} // Adjust the size of the arrow
              height={20}
              className="ml-2" // Margin to space out the arrow from the text
            />
          </a>
        </div>
      </main>
    </div>
  );
}
