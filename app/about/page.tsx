import Image from "next/image";

export default function Page() {
  return (
    <div className="px-14 pt-16">
      <h2 className="text-8xl font-bold mb-6">about</h2>
      <section className="flex relative">
        <div className="max-w-[50%]">
          <h3 className="text-5xl mb-4">山内 悠剛</h3>
          <p>早稲田大学文学部 2年生</p>
          <p>東京都生まれ</p>
          <p>大学1年生からプログラミングを始める。早稲田大学のプログラミングサークルに入り、HTML, CSSから勉強を進める。1年生の夏には早稲田祭のイベントのホームページ制作に携わり、秋からはネイティブアプリ制作を経験。インターンではスクレイピング実務を経験。</p>
        </div>
        <Image src="/logpose.png" alt="" width={300} height={100} className="pl-8" />
        <Image src="/free.png" alt="" width={500} height={100} className="pl-8 absolute right-2.5 bottom-7" />
      </section>
    </div>
  );
}