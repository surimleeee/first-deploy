import Image from "next/image";
import Link from "next/link";

async function getResumeInfo() {
  const res = await fetch('https://raw.githubusercontent.com/surimleeee/first-deploy/refs/heads/main/service/resume_general_info_service.json');
  // API 응답이 성공적인지 확인
  if (!res.ok) {
    // 응답이 실패하면 오류를 던져 Next.js가 오류 페이지를 보여주도록 함
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Home() {
  const data = await getResumeInfo();
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/image-3.webp"
          alt="Next.js logo"
          width={333}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="tracking-[-.01em]">
            안녕하세요.{" "} 
            {/* <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              app/page.tsx
            </code>
            . */}
          </li>
          <li className="tracking-[-.01em]">
            {data.name}입니다.
          </li>
          <li className="tracking-[-.01em]">
            진행했던 미니프로젝트를 보려면 아래 "mini project"를 클릭하세요.
          </li>
        </ol>
        <ul>
          <li style={{ fontWeight: "bold", fontSize: "20px", display: "flex", alignItems: "center"}}>
            
            <img src="/dasiolmap.png.jpg"
                 style={{width: "300px", height: "170px", marginRight: "10px", marginTop: "80px"}}/>
            미니 프로젝트 : '다시올지도'
            
          </li>
          <li style={{fontSize: "15px"}}>
            <br/>사용자의 리뷰와 별점 데이터를 기반으로 신뢰할 수 있는 맛집 정보를 제공하고, <br/>
            더 나아가 AI 맞춤형 추천 시스템을 통해서 ‘오늘 뭐 먹지?’라는 질문에 만족스럽고 빠른 솔루션을 제공하려고 합니다.<br/>
             이는 단순한 맛집 정보 제공을 넘어, 현대인의 가장 소중한 자원인 ‘시간’을 절약 해 주고, 사용자의  소중한 일상을 제공 해 줄 것 입니다.
          </li>
        </ul>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://github.com/LG-CNS-MiniProject1-Team4"
            target="_blank"
            rel="noopener noreferrer"
          >
            mini project
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
