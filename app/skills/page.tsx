const calcurateDuration = (startDate: string): string => {
  const start = new Date(startDate);
  const now = new Date();
  const years = now.getFullYear() - start.getFullYear();
  const months = now.getMonth() - start.getMonth();

  const adjustedYears = months < 0 ? years - 1 : years;
  const adjustedMonths = months < 0 ? months + 12 : months;

  return `${adjustedYears}年${adjustedMonths}ヶ月`;
}

export default function Page() {
  const htmlCssStartDate = '2023-04-01';
  const htmlCssDuration = calcurateDuration(htmlCssStartDate);
  const jsStartDate = '2023-06-01';
  const jsDuration = calcurateDuration(jsStartDate);
  const nextReactStartDate = '2024-06-01';
  const nextReactDuration = calcurateDuration(nextReactStartDate);
  
  return (
    <div className="px-14 pt-16">
      <h2 className="text-8xl font-bold mb-6">skills</h2>
      <div className="mb-2">
        <p className="text-xl bg-blue-500 inline-block rounded-3xl text-blue-50 p-1 mr-1">HTML</p>
        <p className="text-xl bg-blue-500 inline-block rounded-3xl text-blue-50 p-1">CSS</p>
        <p className="inline-block">：{htmlCssDuration}</p>
      </div>
      <div className="mb-2">
        <p className="text-xl bg-blue-500 inline-block rounded-3xl text-blue-50 p-1 mr-1">JavaScript</p>
        <p className="inline-block">：{jsDuration}</p>
      </div>
      <div className="mb-2">
        <p className="text-xl bg-blue-500 inline-block rounded-3xl text-blue-50 p-1">Flutter</p>
        <p className="inline-block">：0年6ヶ月</p>
      </div>
      <div className="mb-2">
        <p className="text-xl bg-blue-500 inline-block rounded-3xl text-blue-50 p-1">Ruby</p>
        <p className="inline-block">：0年6ヶ月</p>
      </div>
      <div className="mb-2">
        <p className="text-xl bg-blue-500 inline-block rounded-3xl text-blue-50 p-1">Python</p>
        <p className="inline-block">：0年3ヶ月</p>
      </div>
      <div className="mb-2">
        <p className="text-xl bg-blue-500 inline-block rounded-3xl text-blue-50 p-1 mr-1">Next.js</p>
        <p className="text-xl bg-blue-500 inline-block rounded-3xl text-blue-50 p-1">React</p>
        <p className="inline-block">：{nextReactDuration}</p>
      </div>
      <div>
        <p className="text-xl bg-blue-500 inline-block rounded-3xl text-blue-50 p-1">MySQL</p>
        <p className="inline-block">：0年6ヶ月</p>
      </div>
      <div className="mt-4">
        <p>現在はNext.jsとReactを学習中です。早稲田祭の企画としてQRスタンプラリーをReactで制作しています。</p>
      </div>
    </div>
  );
}