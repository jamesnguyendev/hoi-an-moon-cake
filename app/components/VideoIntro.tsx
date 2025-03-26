import Image from 'next/image';

const VideoIntro = () => {
  return (
    <section className="my-8 bg-primary">
      <div className="container grid grid-cols-1 gap-4 py-9 lg:grid-cols-2">
        <Image
          src={'/images/banh-HA-03.png'}
          width={400}
          height={400}
          alt="hanh ha 03"
          className="w-full"
        />
        <div className="">
          <Image
            alt="video giới thiệu"
            src={'/images/banner-video-aaathieu-md.png'}
            width={300}
            height={100}
            className="w-full"
          />
          <iframe
            width="585"
            height="329"
            className="w-full max-w-full"
            src="https://www.youtube.com/embed/APbbZs2_z_M"
            title="Bộ Sưu Tập Trung Thu HOA VIÊN - Hội An Mooncake"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <Image
            alt="video giới thiệu"
            src={'/images/banner-video-gioi-qq-md.png'}
            width={300}
            height={100}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoIntro;
