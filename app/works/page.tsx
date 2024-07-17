'use client'

import { AnimatePresence, motion } from "framer-motion";
import { useState, FC, ReactNode } from "react";
import Image from "next/image";

type Props = {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal: FC<Props> = ({ isVisible, onClose, children }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div key="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={onClose} />
          <div className="absolute inset-0 w-4/5 h-5/6 rounded-3xl bg-[#ccd7e2] z-30 m-auto">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Page: FC = () => {
  const [visibleModal, setVisibleModal] = useState<number | null>(null);

  const handleModalOpen = (index: number) => {
    setVisibleModal(index);
  };

  const handleModalClose = () => {
    setVisibleModal(null);
  };

  return (
    <div className="px-14 pt-16">
      <h2 className="text-8xl font-bold mb-6">works</h2>
      <a href="https://github.com/yugo55" target="_blank" className="block text-xl text-blue-700 underline mb-2">githubはこちら</a>
      <div>
        <ul className="grid grid-cols-4 gap-5">
          <motion.li onClick={() => handleModalOpen(0)} className="w-80 h-80 bg-blue-500 bg-opacity-40 rounded-xl cursor-pointer flex flex-col">
            <img src="/free.png" alt="" className="rounded-tr-xl rounded-tl-xl object-cover w-full h-2/3" />
            <p className="h-full grid place-items-center text-lg font-semibold">自由制作</p>
          </motion.li>
          <motion.li onClick={() => handleModalOpen(1)} className="w-80 h-80 bg-blue-500 bg-opacity-40 rounded-xl cursor-pointer flex flex-col">
            <img src="/logpose.png" alt="" className="rounded-tr-xl rounded-tl-xl object-cover w-full h-2/3" />
            <p className="h-full grid place-items-center text-lg font-semibold">出欠管理アプリ</p>
          </motion.li>
          <motion.li onClick={() => handleModalOpen(2)} className="w-80 h-80 bg-blue-500 bg-opacity-40 rounded-xl cursor-pointer flex flex-col">
            <img src="/date_window_mono.png" alt="" className="rounded-tr-xl rounded-tl-xl object-cover w-full h-2/3" />
            <p className="h-full grid place-items-center text-lg font-semibold">Twitterアカウントクローラー</p>
          </motion.li>
          <motion.li onClick={() => handleModalOpen(3)} className="w-80 h-80 bg-blue-500 bg-opacity-40 rounded-xl cursor-pointer flex flex-col">
            <img src="/news.png" alt="" className="rounded-tr-xl rounded-tl-xl object-cover w-full h-2/3" />
            <p className="h-full grid place-items-center text-lg font-semibold">ニュース記事要約クローラー</p>
          </motion.li>
        </ul>
      </div>
      <Modal isVisible={visibleModal === 0} onClose={handleModalClose}>
        <div className="p-6">
          <p className="text-2xl font-semibold">自由制作</p>
          <p>プログラミングサークルにて、架空の会社を想定したwebサイトを制作しました。要件定義からコーディングまで、個人で制作しました。</p>
          <p>制作期間：2023年10月〜2023年10月</p>
          <p>使用技術：HTML, CSS, JavaScript</p>
          <p>URL：<a href="https://yugo55.github.io/free/work/" target="_blank" className="underline text-blue-700">https://yugo55.github.io/free/work/</a></p>
          <p className="mb-5">githubリポジトリ：<a href="https://github.com/yugo55/free" target="_blank" className="underline text-blue-700">https://github.com/yugo55/free</a></p>
          <Image src="/free.png" width={600} height={600} alt="自由制作webサイトのファーストビュー画像" />
        </div>
      </Modal>
      <Modal isVisible={visibleModal === 1} onClose={handleModalClose}>
        <div className="p-6">
          <p className="text-2xl font-semibold">出欠管理アプリ</p>
          <p>プログラミングサークル内で使用するメンバーの出欠管理をするアプリの制作に携わりました。メンバーの出欠登録、チームの予定作成ができるネイティブアプリです。</p>
          <p>制作期間：2023年11月〜2024年3月</p>
          <p>使用技術：Flutter, Firebase</p>
          <p className="mb-5">githubリポジトリ：<a href="https://github.com/yugo55/Circle-Logpose" target="_blank" className="underline text-blue-700">https://github.com/yugo55/Circle-Logpose</a></p>
          <Image src="/logpose.png" width={200} height={200} alt="出欠管理アプリの写真" />
        </div>
      </Modal>
      <Modal isVisible={visibleModal === 2} onClose={handleModalClose}>
        <div className="p-6">
          <p className="text-2xl font-semibold">Twitterアカウントクローラー</p>
          <p>インターン先で制作したTwitterのアカウントクローラーです。コマンドライン引数に入力した値でアカウント検索した結果のアカウントを、スクロール制限がかかるまでアカウント名やフォロワー数などを取得するクローラーです。インターン先の企業の営業をかけるアカウントを効率よく抽出するために制作しました。</p>
          <p>制作期間：2024年3月〜2024年3月</p>
          <p>使用技術：Ruby</p>
          <p className="mb-5">githubリポジトリ：<a href="https://github.com/yugo55/twitter_account_crawler" target="_blank" className="underline text-blue-700">https://github.com/yugo55/twitter_account_crawler</a></p>
        </div>
      </Modal>
      <Modal isVisible={visibleModal === 3} onClose={handleModalClose}>
        <div className="p-6">
          <p className="text-2xl font-semibold">ニュース記事要約クローラー</p>
          <p>IT系のニュース記事を効率よく吸収したいと考え、ニュース記事を要約してくれるクローラーを個人で制作しました。要約したいニュースサイトのスクリプトを実行するとそれぞれの記事が要約された結果が出力されるようにしています。UIも作り、ブラウザ上で完結できるようにしようかと検討しているところです。</p>
          <p>制作期間：2024年4月〜2024年4月</p>
          <p>使用技術：Python</p>
          <p className="mb-5">githubリポジトリ：<a href="https://github.com/yugo55/summarize_crawler" target="_blank" className="underline text-blue-700">https://github.com/yugo55/summarize_crawler</a></p>
        </div>
      </Modal>
    </div>
  );
}

export default Page;
