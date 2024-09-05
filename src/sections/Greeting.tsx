import Card from "../components/Card";

const Greeting = () => {
  return (
    <Card className="py-20 p-8 md:p-16 text-center">
      <div className="entrance">
        <p className="mb-4 text-xl">
          يٰٓاَيُّهَا النَّاسُ اِنَّا خَلَقْنٰكُمْ مِّنْ ذَكَرٍ وَّاُنْثٰى
          وَجَعَلْنٰكُمْ شُعُوْبًا وَّقَبَاۤىِٕلَ لِتَعَارَفُوْا ۚ اِنَّ
          اَكْرَمَكُمْ عِنْدَ اللّٰهِ اَتْقٰىكُمْ ۗاِنَّ اللّٰهَ عَلِيْمٌ
          خَبِيْرٌ
        </p>
        <p>
          "Wahai manusia! Sungguh, Kami telah menciptakan kamu dari seorang
          laki-laki dan seorang perempuan, kemudian Kami jadikan kamu
          berbangsa-bangsa dan bersuku-suku agar kamu saling mengenal.
          Sesungguhnya yang paling mulia di antara kamu di sisi Allah ialah
          orang yang paling bertakwa. Sungguh, Allah Maha Mengetahui,
          Mahateliti."
        </p>
        <h1 className="mt-4 font-semibold text-md">Q.S. Al-Hujurat 49:13</h1>
      </div>
    </Card>
  );
};

export default Greeting;
